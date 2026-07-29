import Link from "next/link";

export const metadata = {
  title: "Quark — Scope & Architecture Brief",
  description:
    "Comprehensive scope, functional and technical architecture, operating model, 6-month roadmap, team budget, and risk mitigation for Quark.",
};

export default function ScopePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Theory Docs
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-black uppercase tracking-wide hover:text-accent"
          >
            Business Plan
          </Link>
          <Link
            href="/scope"
            className="text-sm font-black uppercase tracking-wide text-accent"
          >
            Scope
          </Link>
          <Link
            href="/prd"
            className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground"
          >
            PRD
          </Link>
          <Link
            href="/adr"
            className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground"
          >
            ADR
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl font-black uppercase italic tracking-tight">
            Scope & Architecture Brief
          </h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Quark is an own-inventory, India-first D2C footwear brand. This brief
            defines what the platform will do, how it will work, and what is
            deliberately excluded from the first phase. It is the single source of
            truth for product, engineering, operations, and leadership.
          </p>
        </header>

        {/* 1. CEO Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            1. CEO Summary
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Quark will launch as a fully owned, online-first footwear brand for the
            Indian market. We will hold our own inventory, operate our own
            warehouse, and sell directly through a Quark-branded web platform. The
            business model gives us full control over product quality, pricing,
            margin, customer experience, and data. The near-term goal is to reach a
            ₹1 crore annual run-rate within 6 months, equivalent to approximately
            ₹17 lakh in monthly GMV at an average order value of ₹1,600.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The first phase of the platform is intentionally scoped to the
            essentials of Indian e-commerce: discovery, purchase, payment,
            fulfillment, returns, and post-purchase support. We are choosing depth
            over breadth. A small, focused team can build, launch, and iterate this
            stack in roughly six to eight weeks, then operate it leanly while the
            brand and marketing engine scale revenue.
          </p>
        </section>

        {/* 2. Business Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            2. Business Model
          </h2>
          <p className="mt-3 text-muted-foreground">
            The following table captures the core commercial choices that constrain
            and shape the platform scope.
          </p>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Element
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Choice
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Brand", "Quark"],
                  ["Model", "Own-inventory D2C e-commerce"],
                  ["Market", "India-first, Tier-1 and Tier-2 cities"],
                  [
                    "Categories",
                    "Men’s formal, women’s heels/flats, kids school, running/sports, ethnic/handcrafted, comfort/orthopedic",
                  ],
                  ["Price band", "₹999 – ₹3,499"],
                  ["Target gross margin", "≥ 50%"],
                  ["Average order value", "₹1,600"],
                  ["Month-6 GMV target", "₹17 lakh / month"],
                  ["Month-6 order target", "~1,000 orders / month"],
                  ["Fulfillment", "Own warehouse + 3PL; Shiprocket / Delhivery"],
                  ["Payments", "UPI, cards, wallets, netbanking, COD via Razorpay / PayU"],
                  ["Returns policy", "15-day free returns and size exchanges"],
                ].map(([element, choice]) => (
                  <tr key={element} className="bg-white">
                    <td className="px-4 py-3 align-top font-bold">{element}</td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {choice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Scope Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            3. Scope Included (Phase 1)
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything in this section is required for launch. Items are grouped by
            functional area to make ownership clear.
          </p>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            3.1 Customer-Facing Platform
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Mobile-first responsive storefront built as a PWA.</li>
            <li>Homepage with hero banners, category navigation, new arrivals, and trust badges.</li>
            <li>Product listing page with filters for size, color, price, category, and sort.</li>
            <li>Product detail page with image gallery, size guide, variant selector, reviews, and related products.</li>
            <li>Cart with item-level edits, saved items, promo code entry, and shipping estimate.</li>
            <li>Guest and registered checkout flows with saved addresses.</li>
            <li>Payment page supporting UPI, credit/debit cards, wallets, netbanking, and COD.</li>
            <li>Order confirmation, invoice download, and order tracking page.</li>
            <li>Customer account with order history, return/exchange initiation, address book, wishlist, and support tickets.</li>
            <li>Static pages: About, Contact, Shipping & Returns, Privacy Policy, Terms of Use, Size Guide.</li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            3.2 Admin & Back Office
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Role-based admin authentication (owner, operations, support, finance).</li>
            <li>Product catalog: add/edit SKUs, variants, attributes, images, pricing, and cost.</li>
            <li>Inventory management: stock levels, low-stock alerts, incoming purchase orders, and reservations.</li>
            <li>Order management: order list, status updates, assign courier, print labels, manifest, and shipment tracking.</li>
            <li>Returns and exchanges workflow: initiation, approval, QC, restock/dispose, refund or replacement.</li>
            <li>Customer CRM view: profile, order history, support notes, tags, and communication log.</li>
            <li>Finance tools: GST-compliant invoice generation, payment reconciliation, COD settlement tracking.</li>
            <li>Marketing tools: coupon creation, discount rules, banner management, and campaign URLs.</li>
            <li>Admin dashboard with daily KPIs and quick-action tiles.</li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            3.3 Integrations
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Payment gateway: Razorpay as primary, PayU as fallback.</li>
            <li>Shipping aggregator: Shiprocket as primary, Delhivery direct as fallback.</li>
            <li>SMS and OTP: MSG91 or equivalent transactional provider.</li>
            <li>WhatsApp Business API for order confirmations, tracking, delivery reminders, and support.</li>
            <li>Email service: SendGrid / Amazon SES for transactional and marketing emails.</li>
            <li>Accounting: Zoho Books integration for GST filing and ledger sync.</li>
            <li>Storage: AWS S3 or Cloudflare R2 for product images and invoices.</li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            3.4 Marketing & Growth
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Meta Pixel and Google Analytics 4 event tracking.</li>
            <li>Google Ads and Meta Ads conversion tracking.</li>
            <li>Referral program with unique referral codes and reward tracking.</li>
            <li>Abandoned cart recovery via email, SMS, and WhatsApp.</li>
            <li>Welcome series, post-purchase, and win-back email/SMS flows.</li>
            <li>SEO-optimized product and category pages with structured data.</li>
            <li>Coupon and discount engine for launch campaigns.</li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            3.5 Analytics & Reporting
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Daily sales summary: revenue, orders, AOV, items sold, returns.</li>
            <li>Product performance: top sellers, slow movers, stock-out risk.</li>
            <li>Marketing attribution: traffic source, campaign ROAS, CAC by channel.</li>
            <li>Customer metrics: new vs. repeat, cohort retention, lifetime value.</li>
            <li>Operational metrics: fulfillment TAT, return rate, return reasons, support tickets.</li>
            <li>Exportable reports in CSV for finance and operations.</li>
          </ul>
        </section>

        {/* 4. Scope Not Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            4. Scope Not Included (Phase 1)
          </h2>
          <p className="mt-3 text-muted-foreground">
            These items are deliberately deferred so the team can launch fast and
            prove the core model before expanding.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Native iOS or Android mobile applications.</li>
            <li>Multi-vendor marketplace or third-party seller onboarding.</li>
            <li>International shipping or multi-currency checkout.</li>
            <li>Physical retail POS or store operations.</li>
            <li>AI-driven personalization or recommendation engine beyond simple related products.</li>
            <li>3D product configurator or AR try-on.</li>
            <li>Subscription or membership program.</li>
            <li>Phone-call-based customer support; support is WhatsApp and email first.</li>
            <li>Advanced ERP integration; Zoho Books is the only accounting link in Phase 1.</li>
            <li>Loyalty points program beyond a basic referral reward system.</li>
          </ul>
        </section>

        {/* 5. Operating Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            5. Operating Model
          </h2>
          <p className="mt-3 text-muted-foreground">
            The following steps describe how a product moves from sourcing to the
            customer and back, if returned.
          </p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Sourcing:</strong> Identify and contract manufacturers for each category. Maintain a master supplier sheet with MOQ, lead time, and quality history.
            </li>
            <li>
              <strong className="text-foreground">Inbound QC:</strong> Received stock is inspected for defects, counted, and photographed before it is marked available in inventory.
            </li>
            <li>
              <strong className="text-foreground">Listing:</strong> Operations team creates SKUs, variants, descriptions, size guides, and pricing in the admin catalog.
            </li>
            <li>
              <strong className="text-foreground">Order:</strong> Customer discovers, adds to cart, checks out, and pays or selects COD. Inventory is reserved.
            </li>
            <li>
              <strong className="text-foreground">Picking & Packing:</strong> Warehouse prints pick list and shipping label, packs with Quark-branded material, and updates status to ready-for-pickup.
            </li>
            <li>
              <strong className="text-foreground">Shipping:</strong> Courier picks up, tracking is synced from Shiprocket/Delhivery, and customer receives tracking updates via WhatsApp/SMS.
            </li>
            <li>
              <strong className="text-foreground">Delivery:</strong> Customer receives order. COD orders are reconciled against courier remittance.
            </li>
            <li>
              <strong className="text-foreground">Support:</strong> Any issue is handled via WhatsApp or email within a 4-hour first-response SLA.
            </li>
            <li>
              <strong className="text-foreground">Return or Exchange:</strong> Customer initiates request; operations approves, schedules reverse pickup, inspects on arrival, and processes refund or replacement.
            </li>
            <li>
              <strong className="text-foreground">Reconciliation:</strong> Payments, refunds, shipping costs, and GST are reconciled weekly in Zoho Books.
            </li>
          </ol>
        </section>

        {/* 6. Functional Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            6. Functional Architecture
          </h2>
          <p className="mt-3 text-muted-foreground">
            The architecture is organized into four layers: channels, customer
            experience, operations, and platform services.
          </p>
          <pre className="mt-5 overflow-x-auto rounded-sm bg-muted p-5 text-xs leading-5 text-foreground">
            {`┌─────────────────────────────────────────────────────────────┐
│  CHANNELS                                                   │
│  Mobile Web (PWA) • Desktop Web • WhatsApp • Email • SMS    │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│  CUSTOMER EXPERIENCE                                        │
│  Homepage • Catalog • PDP • Cart • Checkout • Account         │
│  Reviews • Size Guide • Order Tracking • Returns Portal     │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│  OPERATIONS & ADMIN                                         │
│  Catalog • Inventory • Orders • Returns • CRM             │
│  Finance • Coupons • Reports • User Roles                   │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│  PLATFORM SERVICES                                          │
│  Auth • Payments • Shipping • Notifications • Storage       │
│  Analytics • Search • Jobs • GST Invoicing • Webhooks     │
└─────────────────────────────────────────────────────────────┘`}
          </pre>
        </section>

        {/* 7. Technical Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            7. Technical Architecture
          </h2>
          <p className="mt-3 text-muted-foreground">
            The recommended stack is modern, serverless-friendly, and easy to hire
            for. Two option sets are provided: a lean default and an AWS-native
            alternative.
          </p>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            7.1 Recommended Default Stack
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Front-end:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS
            </li>
            <li>
              <strong className="text-foreground">Back-end:</strong> Next.js API routes / server actions
            </li>
            <li>
              <strong className="text-foreground">Database:</strong> PostgreSQL via Supabase or AWS RDS
            </li>
            <li>
              <strong className="text-foreground">Auth:</strong> Supabase Auth or NextAuth with mobile OTP
            </li>
            <li>
              <strong className="text-foreground">Object storage:</strong> AWS S3 or Cloudflare R2
            </li>
            <li>
              <strong className="text-foreground">Caching:</strong> Redis via Upstash or Supabase/Redis Cloud
            </li>
            <li>
              <strong className="text-foreground">Queue / jobs:</strong> Inngest, BullMQ on Redis, or Trigger.dev
            </li>
            <li>
              <strong className="text-foreground">Hosting:</strong> Vercel for front-end and API; Railway or Render for background workers if needed
            </li>
            <li>
              <strong className="text-foreground">Monitoring:</strong> Vercel Analytics, Sentry, and UptimeRobot
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            7.2 AWS-Native Alternative
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Front-end:</strong> Next.js on AWS Amplify or ECS Fargate
            </li>
            <li>
              <strong className="text-foreground">Back-end:</strong> Node.js on ECS Fargate or Lambda
            </li>
            <li>
              <strong className="text-foreground">Database:</strong> Amazon RDS PostgreSQL or Aurora Serverless v2
            </li>
            <li>
              <strong className="text-foreground">Auth:</strong> Amazon Cognito with OTP
            </li>
            <li>
              <strong className="text-foreground">Storage:</strong> S3 + CloudFront
            </li>
            <li>
              <strong className="text-foreground">Caching & queue:</strong> ElastiCache Redis + SQS
            </li>
            <li>
              <strong className="text-foreground">Monitoring:</strong> CloudWatch + Sentry
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-black uppercase tracking-wide">
            7.3 Key Architectural Principles
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Mobile-first responsive design; PWA install is a launch requirement.</li>
            <li>Server-side rendering for SEO on catalog and product pages.</li>
            <li>Event-driven webhooks for payment, shipping, and notification state changes.</li>
            <li>Idempotent order creation to prevent double-charges or duplicate orders.</li>
            <li>Inventory reservations tied to cart session and order lifecycle.</li>
            <li>All financial transactions recorded with immutable audit trail.</li>
          </ul>
        </section>

        {/* 8. Database Domains */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            8. Database Domains
          </h2>
          <p className="mt-3 text-muted-foreground">
            The database schema is organized into domains that map directly to the
            functional architecture.
          </p>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Domain
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Core Entities
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "Catalog",
                    "products, variants, categories, attributes, media, reviews",
                    "Storefront content and product data",
                  ],
                  [
                    "Inventory",
                    "stock, warehouses, reservations, purchase_orders, stock_movements",
                    "Track and allocate physical stock",
                  ],
                  [
                    "Orders",
                    "orders, order_items, shipments, tracking_events",
                    "Customer purchase lifecycle",
                  ],
                  [
                    "Payments",
                    "payments, refunds, settlements, payment_methods",
                    "Money movement and reconciliation",
                  ],
                  [
                    "Returns",
                    "return_requests, return_items, qc_checks, replacements",
                    "Reverse logistics workflow",
                  ],
                  [
                    "Customers",
                    "users, addresses, wishlists, support_tickets, reviews",
                    "Identity, CRM, and support context",
                  ],
                  [
                    "Marketing",
                    "coupons, referrals, campaigns, abandoned_carts",
                    "Growth and retention mechanics",
                  ],
                  [
                    "Finance",
                    "invoices, gst_lines, ledger_entries",
                    "Invoicing, tax, and accounting",
                  ],
                  [
                    "Admin",
                    "users, roles, permissions, audit_logs",
                    "Internal access and accountability",
                  ],
                ].map(([domain, entities, purpose]) => (
                  <tr key={domain} className="bg-white">
                    <td className="px-4 py-3 align-top font-bold">{domain}</td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {entities}
                    </td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. Key Integrations for India */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            9. Key Integrations for India
          </h2>
          <p className="mt-3 text-muted-foreground">
            India-specific services are chosen for reliability, cost, and local
            compliance.
          </p>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Capability
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Primary
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Fallback / Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Payments", "Razorpay", "PayU; supports UPI, cards, wallets, netbanking, COD"],
                  ["Shipping", "Shiprocket", "Delhivery direct; COD remittance support"],
                  ["SMS / OTP", "MSG91", "Twilio India; transactional only"],
                  ["WhatsApp", "WhatsApp Business API", "Via Meta BSP; order updates and support"],
                  ["Email", "SendGrid", "Amazon SES; transactional + marketing"],
                  ["Accounting", "Zoho Books", "GST invoicing and return filing"],
                  ["Storage", "AWS S3", "Cloudflare R2; images, invoices, manifests"],
                  ["Analytics", "Google Analytics 4", "Mixpanel for cohorts if needed later"],
                  ["Ads", "Meta Ads + Google Ads", "Attribution via server-side pixels"],
                ].map(([capability, primary, fallback]) => (
                  <tr key={capability} className="bg-white">
                    <td className="px-4 py-3 align-top font-bold">{capability}</td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {primary}
                    </td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {fallback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 10. 6-Month Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            10. 6-Month Roadmap
          </h2>
          <p className="mt-3 text-muted-foreground">
            Each month has a clear theme, deliverables, and a revenue/operations
            milestone.
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                phase: "Month 1 — Foundation",
                items: [
                  "Incorporate legal entity and obtain GST registration.",
                  "Open current account and payment gateway accounts.",
                  "Finalize 2–3 suppliers per category and sign MOUs.",
                  "Set up warehouse or 3PL space and packing standards.",
                  "Confirm brand identity, packaging design, and domain.",
                ],
              },
              {
                phase: "Month 2 — Platform Build",
                items: [
                  "Complete database schema and authentication layer.",
                  "Build storefront: home, catalog, PDP, cart, checkout.",
                  "Build admin: catalog, inventory, orders, users.",
                  "Integrate Razorpay and Shiprocket in sandbox.",
                  "Produce product photography and content for 50 SKUs.",
                ],
              },
              {
                phase: "Month 3 — Operations Ready",
                items: [
                  "Implement returns and exchange workflow.",
                  "Enable GST invoicing and Zoho Books sync.",
                  "Connect WhatsApp, SMS, and email notifications.",
                  "Build admin dashboard and daily reports.",
                  "Soft launch to friends, family, and beta users; collect feedback.",
                ],
              },
              {
                phase: "Month 4 — Public Launch",
                items: [
                  "Launch paid ads on Meta and Google Shopping.",
                  "Activate referral program and launch coupon campaigns.",
                  "Begin daily standup review of revenue, ROAS, and returns.",
                  "Reach 500 orders in the month.",
                ],
              },
              {
                phase: "Month 5 — Scale Marketing",
                items: [
                  "Run influencer campaigns across fitness, fashion, and parenting.",
                  "Activate abandoned-cart and win-back automation.",
                  "Add new SKUs/colors based on early bestsellers.",
                  "Reach 750 orders in the month.",
                ],
              },
              {
                phase: "Month 6 — Optimize",
                items: [
                  "Launch loyalty/rewards program for repeat customers.",
                  "Analyze return reasons and tighten size guides and QC.",
                  "Optimize ad creative, landing pages, and AOV.",
                  "Target ₹17L GMV and ~1,000 orders for the month.",
                ],
              },
            ].map((m) => (
              <div
                key={m.phase}
                className="rounded-sm border border-border bg-muted p-5"
              >
                <h3 className="font-black uppercase tracking-wide">
                  {m.phase}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {m.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Team & Budget Estimate */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            11. Team & Budget Estimate
          </h2>
          <p className="mt-3 text-muted-foreground">
            A lean team can execute Phase 1. Budgets are indicative and assume a
            remote-first, contractor-heavy model.
          </p>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Role / Cost Head
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">
                    Count / Amount
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">
                    6-Month Cost (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Founder / CEO", "1", "0 (sweat equity)"],
                  ["Full-stack Engineer", "1–2", "6–12L"],
                  ["Product / Operations Lead", "1", "3–5L"],
                  ["Digital Marketing Lead", "1", "3–5L"],
                  ["Warehouse / Fulfillment Staff", "1–2", "2–4L"],
                  ["Photography & Content", "Contractor", "75K"],
                  ["Initial Inventory", "50–100 SKUs", "4L"],
                  ["Tech Tools & Hosting", "Monthly", "50K"],
                  ["Paid Ads (Month 4–6)", "Campaigns", "4L"],
                  ["Legal, GST, Compliance", "One-time", "50K"],
                  ["Contingency", "Buffer", "1L"],
                ].map(([role, count, cost]) => (
                  <tr key={role} className="bg-white">
                    <td className="px-4 py-3 font-bold">{role}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {count}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {cost}
                    </td>
                  </tr>
                ))}
                <tr className="bg-foreground font-black text-white">
                  <td className="px-4 py-3">Total Estimated Launch Capital</td>
                  <td className="px-4 py-3 text-right">—</td>
                  <td className="px-4 py-3 text-right">₹14.5 – 24.5L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            The core launch can be achieved at the lower end of the range if the
            founder handles operations and marketing initially. The higher end
            assumes a second engineer and higher ad spend.
          </p>
        </section>

        {/* 12. Risks & Mitigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            12. Risks & Mitigation
          </h2>
          <p className="mt-3 text-muted-foreground">
            The most material risks in the first six months and how we will manage
            them.
          </p>
          <div className="mt-5 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Risk
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Impact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">
                    Mitigation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "High footwear return rate",
                    "Margin erosion and reverse logistics cost",
                    "Detailed size guides, fit quiz, free size exchange, pre-dispatch QC, return reason tracking",
                  ],
                  [
                    "Cash flow pressure",
                    "Inability to restock or fund ads",
                    "30-day inventory turns, weekly ad caps, COD remittance tracking, lean SKU count",
                  ],
                  [
                    "Platform delivery delays",
                    "Missed launch window and wasted inventory",
                    "Clear MVP scope, weekly milestones, fortnightly demos, single product owner",
                  ],
                  [
                    "Low initial customer trust",
                    "Low conversion and high cart abandonment",
                    "Reviews, COD option, easy returns policy, influencer endorsements, trust badges",
                  ],
                  [
                    "Courier reliability",
                    "Late deliveries and damaged returns",
                    "2+ courier partners, clear SLAs, priority metros first, claims workflow",
                  ],
                  [
                    "Supplier quality inconsistency",
                    "Negative reviews and returns",
                    "Approved vendor list, inbound QC, small batch sampling before bulk order",
                  ],
                  [
                    "High customer acquisition cost",
                    "ROAS below target",
                    "Test creative weekly, focus on organic/Reels, referral loops, retargeting",
                  ],
                ].map(([risk, impact, mitigation]) => (
                  <tr key={risk} className="bg-white">
                    <td className="px-4 py-3 align-top font-bold">{risk}</td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {impact}
                    </td>
                    <td className="px-4 py-3 align-top text-muted-foreground">
                      {mitigation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 13. Open Decisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            13. Open Decisions
          </h2>
          <p className="mt-3 text-muted-foreground">
            These decisions need owner input or market validation before build can
            proceed.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Platform build vs. Shopify:</strong> Confirm decision to build a custom Next.js platform rather than launch on Shopify for speed.
            </li>
            <li>
              <strong className="text-foreground">Warehouse location:</strong> Choose city for warehouse/3PL based on supplier proximity and shipping cost to target metros.
            </li>
            <li>
              <strong className="text-foreground">Initial category focus:</strong> Decide which 1–2 categories will lead the launch catalog and hero campaigns.
            </li>
            <li>
              <strong className="text-foreground">COD threshold:</strong> Decide whether COD is available for all orders or capped by pincode/value/risk score.
            </li>
            <li>
              <strong className="text-foreground">Payment gateway split:</strong> Confirm Razorpay primary and PayU fallback, or single gateway.
            </li>
            <li>
              <strong className="text-foreground">Customer support hours:</strong> Decide 24/7 auto-reply vs. human support window and escalation path.
            </li>
            <li>
              <strong className="text-foreground">Return shipping cost:</strong> Decide whether return shipping is free for all returns or limited to exchanges/defects.
            </li>
            <li>
              <strong className="text-foreground">Funding path:</strong> Confirm whether Phase 1 is bootstrapped or requires a small friends/family/angel round.
            </li>
          </ul>
        </section>

        {/* 14. Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-wide">
            14. Next Steps
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>Confirm open decisions with founder/CEO and freeze Phase 1 scope.</li>
            <li>Finalize technical stack and provision project repositories and hosting accounts.</li>
            <li>Create detailed PRD, database schema, and API contract.</li>
            <li>Sign supplier agreements and receive first sample batches.</li>
            <li>Onboard Razorpay, Shiprocket, and MSG91 accounts in live/sandbox mode.</li>
            <li>Kick off 6-week engineering sprint with weekly demos and a soft-launch checkpoint.</li>
          </ol>
        </section>

        <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            Quark Theory Docs — Scope & Architecture Brief. Version 1.0. Internal
            use only.
          </p>
        </footer>
      </main>
    </div>
  );
}
