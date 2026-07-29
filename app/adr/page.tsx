import Link from "next/link";

export const metadata = {
  title: "Quark — Architecture Decision Record",
  description: "ADR documenting technology choices for the Quark platform.",
};

const adrs = [
  {
    id: "ADR-001",
    title: "Front-end Framework",
    decision: "Next.js 14 (App Router) with TypeScript and Tailwind CSS.",
    rationale: [
      "Server-side rendering and static generation give Quark product pages better SEO and faster first paint on mobile networks.",
      "File-based routing and built-in API routes keep the storefront and backend surface in a single repository, reducing context switching for a small team.",
      "Vercel’s first-class support for Next.js means simple deployments and automatic edge caching.",
      "TypeScript catches e-commerce data-shape mistakes (variants, inventory, pricing) before they reach production.",
    ],
    alternatives: [
      { name: "React SPA with Vite", reason: "Rejected because SPAs rely on client-side hydration for content, hurting SEO for category and product pages and increasing time-to-interactive on budget Android phones." },
      { name: "Shopify / Shopify Hydrogen", reason: "Rejected because Shopify Hydrogen still ties us to Shopify’s billing, limits custom payment/shipping workflows, and charges transaction fees that erode D2C margins." },
      { name: "Angular", reason: "Rejected due to heavier bundle, steeper hiring curve in the Indian startup market, and weaker Vercel ecosystem integration." },
    ],
    tradeoffs: [
      "More setup than a hosted store-builder, but full ownership of checkout UX and zero platform transaction fees.",
      "Server components add learning curve, but reduce client JavaScript and improve performance.",
    ],
  },
  {
    id: "ADR-002",
    title: "Backend / API Layer",
    decision: "Next.js API routes for core commerce logic, with dedicated micro-services only if a domain clearly outgrows the monolith.",
    rationale: [
      "Reusing Next.js for both pages and APIs keeps the initial team small (one repo, one deployment target, one language).",
      "Early traffic volumes do not justify the operational complexity of a separate Node.js service mesh.",
      "Edge-friendly handlers can later be extracted to dedicated services without rewriting business logic.",
      "India-specific integrations (Razorpay webhooks, Shiprocket, MSG91) are simpler to sequence in a single API surface.",
    ],
    alternatives: [
      { name: "Separate Node.js/Express service", reason: "Rejected for Phase 1 because it adds container orchestration, separate deploy pipeline, and team overhead before product-market fit is proven." },
      { name: "Serverless functions on AWS Lambda", reason: "Rejected because cold starts can hurt synchronous checkout/payment paths, and local development is slower than Next.js API routes." },
      { name: "Firebase Cloud Functions", reason: "Rejected to avoid vendor lock-in and because TypeScript/Postgres ecosystem is richer for relational commerce data." },
    ],
    tradeoffs: [
      "Monolith is easier to refactor now, harder to split later if the team grows fast.",
      "API routes share the Next.js process; heavy admin exports or image processing must be backgrounded carefully.",
    ],
  },
  {
    id: "ADR-003",
    title: "Database",
    decision: "PostgreSQL via Supabase as the primary transactional database.",
    rationale: [
      "E-commerce data is strongly relational: products have variants, variants have inventory rows, orders have line items, line items have returns.",
      "ACID transactions are essential for checkout, inventory decrement, and payment reconciliation.",
      "Supabase provides managed Postgres, connection pooling, auth, and realtime subscriptions under one dashboard with a generous free tier.",
      "Row Level Security policies can protect customer and order data with less custom authorization code.",
    ],
    alternatives: [
      { name: "MongoDB Atlas", reason: "Rejected because document modeling for inventory/order consistency requires application-level joins and transactions, increasing bug surface." },
      { name: "MySQL / AWS RDS", reason: "Rejected in favor of Supabase’s managed tooling, realtime features, and faster local/remote development experience." },
      { name: "Firestore", reason: "Rejected because pricing scales with read/write counts and e-commerce workloads (cart updates, inventory) can become expensive quickly." },
    ],
    tradeoffs: [
      "Schema migrations require discipline, but Prisma or Drizzle make this manageable.",
      "Vertical scaling has a ceiling; if GMV crosses ₹50L/month we evaluate read replicas and caching.",
    ],
  },
  {
    id: "ADR-004",
    title: "Authentication",
    decision: "Supabase Auth with mobile OTP (via MSG91) and optional email/social login.",
    rationale: [
      "Indian shoppers overwhelmingly prefer mobile-number login over passwords, especially during checkout.",
      "OTP reduces abandoned carts caused by forgotten passwords and increases repeat purchase velocity.",
      "Supabase Auth provides secure session management, refresh tokens, and JWT verification out of the box.",
      "Row Level Security integrates cleanly with Supabase Postgres for per-user data protection.",
    ],
    alternatives: [
      { name: "NextAuth.js (Auth.js)", reason: "Rejected for primary auth because OTP/SMS provider wiring and database session storage add custom work Supabase Auth already handles." },
      { name: "Custom JWT auth", reason: "Rejected because writing secure session/token logic is unnecessary risk when managed auth is affordable." },
      { name: "Firebase Authentication", reason: "Rejected to keep the auth and database stack aligned with Supabase and reduce vendor sprawl." },
    ],
    tradeoffs: [
      "SMS OTP has per-message cost, but conversion gain usually outweighs it.",
      "Supabase Auth ties auth to Supabase; migration later is possible but requires user data export.",
    ],
  },
  {
    id: "ADR-005",
    title: "Payments",
    decision: "Razorpay as the primary gateway, with PayU as a manual fallback and Cashfree as a future option.",
    rationale: [
      "Razorpay is the most recognized Indian payment gateway, supports UPI, cards, wallets, netbanking, and BNPL.",
      "Developer documentation, test mode, webhook reliability, and dispute management are mature.",
      "Supports subscription billing if Quark later launches a care/replacement membership.",
      "A fallback gateway protects revenue during Razorpay outages or risk-flagged merchant accounts.",
    ],
    alternatives: [
      { name: "PayU", reason: "Kept as fallback. Slightly older UX and documentation, but stable settlement history and wide payment method coverage." },
      { name: "Cashfree", reason: "Rejected as primary due to lower brand recognition among Indian consumers, though competitive pricing makes it a future candidate." },
      { name: "Stripe India", reason: "Rejected because Stripe India does not support domestic Indian payment methods like UPI as comprehensively as Razorpay and PayU." },
    ],
    tradeoffs: [
      "Gateway fees (≈2%) are unavoidable, but Razorpay’s trust reduces cart abandonment.",
      "Payout holds during disputes require working capital planning.",
    ],
  },
  {
    id: "ADR-006",
    title: "Shipping & Logistics",
    decision: "Shiprocket as the primary shipping aggregator, with direct Delhivery integration as a fallback.",
    rationale: [
      "Shiprocket gives instant access to Delhivery, XpressBees, Blue Dart, and many regional couriers from one dashboard.",
      "Multi-courier selection improves delivery speed and reduces cost across zones.",
      "Shiprocket’s Shopify-agnostic API lets us print labels, track shipments, and manage RTO/returns in our own admin.",
      "Direct Delhivery fallback keeps operations alive if the aggregator has API issues.",
    ],
    alternatives: [
      { name: "Direct courier contracts (Delhivery, DTDC)", reason: "Rejected for launch because monthly volume commitments, separate integrations, and rate negotiations slow down time-to-market." },
      { name: "Pickrr / Easyship", reason: "Rejected in favor of Shiprocket’s larger courier network and stronger Indian SME support ecosystem." }
    ],
    tradeoffs: [
      "Aggregator support can be slow during disputes; direct courier escalation path is needed.",
      "COD orders carry RTO risk, but COD remains essential for Indian e-commerce conversion.",
    ],
  },
  {
    id: "ADR-007",
    title: "Hosting & Compute",
    decision: "Vercel for the Next.js front-end/API; Railway or Render for long-running background workers; PostgreSQL hosted on Supabase.",
    rationale: [
      "Vercel optimizes Next.js deployments, previews, and edge caching with minimal DevOps work.",
      "Railway/Render are cost-effective for cron jobs, email/SMS workers, and image processing without Kubernetes complexity.",
      "Supabase handles managed Postgres, backups, and connection pooling.",
      "This split keeps hosting costs low while leaving room to move to AWS once scale justifies it.",
    ],
    alternatives: [
      { name: "AWS (EC2/ECS/RDS/CloudFront)", reason: "Rejected for launch due to higher setup time, cost at low scale, and steeper learning curve for a lean team." },
      { name: "Managed Next.js on AWS Amplify", reason: "Rejected due to slower cold starts and less polished Next.js App Router support compared with Vercel." },
      { name: "DigitalOcean App Platform", reason: "Rejected because Next.js server-component support and preview environments are weaker than Vercel’s." },
    ],
    tradeoffs: [
      "Vercel pricing increases with function execution; background work offloaded to Railway keeps function usage low.",
      "AWS remains the future home when volume justifies reserved instances and dedicated DevOps.",
    ],
  },
  {
    id: "ADR-008",
    title: "Object Storage (Images, Invoices, Documents)",
    decision: "Cloudflare R2 for product images and static assets, with AWS S3 as an enterprise fallback.",
    rationale: [
      "R2 offers S3-compatible APIs with zero egress fees, which matters for image-heavy product pages served to mobile users across India.",
      "Costs stay predictable as image delivery volume grows.",
      "Cloudflare’s global CDN improves image load times without a separate CDN contract.",
    ],
    alternatives: [
      { name: "AWS S3 + CloudFront", reason: "Rejected for launch because egress fees can become a surprise line item for an image-heavy storefront." },
      { name: "Supabase Storage", reason: "Rejected because R2 is cheaper at scale and already S3-compatible, making future migration trivial." },
      { name: "Google Cloud Storage", reason: "Rejected to keep the stack closer to Cloudflare/Vercel edge and avoid another cloud console." },
    ],
    tradeoffs: [
      "R2 is newer; some third-party tools assume S3, but S3-compatibility covers most use cases.",
      "If we later need advanced lifecycle policies or compliance certifications, S3 is the easy fallback.",
    ],
  },
  {
    id: "ADR-009",
    title: "Search",
    decision: "PostgreSQL full-text search and filtered indexes for Phase 1; evaluate Algolia/Meilisearch if search latency becomes a bottleneck.",
    rationale: [
      "At launch, the catalog will be 50–100 SKUs. Postgres full-text search plus category/size/price filters is fast enough and eliminates another service.",
      "Keeps data in one system, simplifying inventory-aware search results.",
      "Easy to add trigram indexes and materialized views as the catalog grows.",
    ],
    alternatives: [
      { name: "Algolia", reason: "Rejected for launch due to cost and because 100 SKUs do not justify a separate search index and sync pipeline." },
      { name: "Meilisearch / Typesense", reason: "Rejected to avoid self-hosting another service; can be added later without changing the schema." },
      { name: "Elasticsearch", reason: "Rejected as overkill for a D2C MVP; operational cost and memory requirements are too high." },
    ],
    tradeoffs: [
      "Search ranking is less sophisticated than Algolia, but adequate for a curated catalog.",
      "Migrating to Algolia later requires indexing pipeline work, planned as a post-PM-fit task.",
    ],
  },
  {
    id: "ADR-010",
    title: "Notifications (SMS, OTP, WhatsApp)",
    decision: "MSG91 for transactional SMS and OTP; WhatsApp Business API via Meta or a BSP (e.g., Interakt/Exotel) for order updates and support.",
    rationale: [
      "MSG91 is purpose-built for India, supports OTP, promotional SMS, and regional languages with high delivery rates.",
      "WhatsApp has higher open rates than email in India and is the preferred support channel for many shoppers.",
      "Both integrate cleanly with webhooks, allowing order-triggered messages without heavy custom code.",
    ],
    alternatives: [
      { name: "Twilio", reason: "Rejected for India-first messaging because local pricing, sender-ID regulations, and TRAI compliance are better handled by Indian-first providers." },
      { name: "Amazon SNS", reason: "Rejected because it lacks the OTP template management and delivery analytics focused on the Indian market." },
      { name: "Textlocal / Fast2SMS", reason: "Rejected in favor of MSG91’s stronger API reliability and enterprise support reputation." },
    ],
    tradeoffs: [
      "WhatsApp Business API has setup cost and conversation-based pricing, but retention ROI is high.",
      "SMS pricing is recurring; volume discounts become relevant after 10K+ messages/month.",
    ],
  },
  {
    id: "ADR-011",
    title: "Frontend UI Library",
    decision: "Tailwind CSS with shadcn/ui components and Radix primitives.",
    rationale: [
      "Tailwind’s utility-first approach produces small CSS bundles and makes responsive, mobile-first design fast.",
      "shadcn/ui gives accessible, composable components that live in our repo and can be customized without fighting a theme API.",
      "Radix primitives provide keyboard navigation, focus management, and screen-reader support out of the box.",
      "No runtime CSS-in-JS means better server-component compatibility and faster hydration.",
    ],
    alternatives: [
      { name: "Material UI (MUI)", reason: "Rejected because Material Design looks generic for a D2C brand and the styling API is heavier than Tailwind." },
      { name: "Bootstrap", reason: "Rejected due to outdated component patterns and the difficulty of creating a distinctive brand aesthetic." },
      { name: "Chakra UI", reason: "Rejected because shadcn/ui provides similar accessibility with zero runtime dependency and easier style overrides." },
    ],
    tradeoffs: [
      "Tailwind class strings can become verbose, but consistent design tokens and component extraction solve this.",
      "shadcn/ui updates are manual, yet that prevents surprise breaking changes from an external package.",
    ],
  },
];

const summaryRows = adrs.map((adr) => ({
  id: adr.id,
  area: adr.title,
  decision: adr.decision.split(" with ")[0].split(";")[0],
  status: "Accepted",
}));

export default function ADRPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Theory Docs
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-wide hover:text-accent">Business Plan</Link>
          <Link href="/scope" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">Scope</Link>
          <Link href="/prd" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">PRD</Link>
          <Link href="/adr" className="text-sm font-black uppercase tracking-wide text-accent">ADR</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase italic tracking-tight">Architecture Decision Record</h1>
        <p className="mt-2 text-muted-foreground">Why Quark is built the way it is — technology choices for India’s own-inventory D2C footwear brand.</p>

        <section className="mt-10">
          <h2 className="text-xl font-black uppercase tracking-wide">Summary Table</h2>
          <div className="mt-4 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Area</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Decision</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {summaryRows.map((row) => (
                  <tr key={row.id} className="bg-white">
                    <td className="px-4 py-3 font-bold">{row.id}</td>
                    <td className="px-4 py-3">{row.area}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.decision}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-sm bg-accent px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-black uppercase tracking-wide">Architecture Diagram</h2>
          <pre className="mt-4 overflow-x-auto rounded-sm border border-border bg-muted p-4 text-xs leading-relaxed text-foreground">
{`+-------------------------------------------------------------+
|                       User Devices                          |
|         Mobile / Desktop / PWA (Next.js + Tailwind)        |
+---------------------------+---------------------------------+
                            |
                            v
+-------------------------------------------------------------+
|                     Vercel Edge / Origin                    |
|  Next.js App Router  |  Server Components  |  API Routes   |
+-----------+-------------+----------------+---------+--------+
            |              |                |         |
            v              v                v         v
+-----------+------+ +-----+------+ +------+------+ +---------+
|   Supabase       | |  Railway / | | Cloudflare  | | Razorpay|
|   PostgreSQL     | |   Render   | |     R2      | | Shiprocket
|   (Auth + DB)    | |  (Workers) | |  (Images)   | | MSG91    |
+------------------+ +------------+ +-------------+ +---------+
            |                                           |
            v                                           v
+-------------------------------------------------------------+
|                Webhooks / Event Queue (optional)            |
|     Order events -> SMS, WhatsApp, Email, Analytics         |
+-------------------------------------------------------------+`}
          </pre>
        </section>

        {adrs.map((adr) => (
          <section key={adr.id} className="mt-10">
            <h2 className="text-xl font-black uppercase tracking-wide">
              {adr.id}: {adr.title}
            </h2>
            <p className="mt-3 font-bold text-foreground">
              Decision: {adr.decision}
            </p>

            <div className="mt-3">
              <h3 className="text-sm font-black uppercase tracking-wide text-foreground">Rationale</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                {adr.rationale.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-black uppercase tracking-wide text-foreground">Alternatives Considered</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                {adr.alternatives.map((alt, index) => (
                  <li key={index}>
                    <span className="font-semibold text-foreground">{alt.name}:</span>{" "}
                    {alt.reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-black uppercase tracking-wide text-foreground">Trade-offs</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                {adr.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-sm border border-border bg-muted p-6">
          <h2 className="text-xl font-black uppercase tracking-wide">Document Control</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><span className="font-semibold text-foreground">Project:</span> Quark — India’s own-inventory D2C footwear brand.</li>
            <li><span className="font-semibold text-foreground">Version:</span> 1.0</li>
            <li><span className="font-semibold text-foreground">Review cadence:</span> Revisit every 6 weeks or after crossing ₹50L/month GMV.</li>
            <li><span className="font-semibold text-foreground">Escalation rule:</span> Any ADR can be reopened if a new alternative reduces cost or risk by ≥30%.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
