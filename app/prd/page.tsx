import Link from "next/link";

export const metadata = {
  title: "Quark — Product Requirements Document",
  description:
    "Detailed PRD for the Quark D2C footwear platform: vision, personas, requirements, user stories, KPIs, and release phases.",
};

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Theory Docs
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-wide hover:text-accent">
            Business Plan
          </Link>
          <Link href="/scope" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">
            Scope
          </Link>
          <Link href="/prd" className="text-sm font-black uppercase tracking-wide text-accent">
            PRD
          </Link>
          <Link href="/adr" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">
            ADR
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-border pb-8">
          <p className="text-xs font-black uppercase tracking-widest text-accent">
            Product Requirements Document
          </p>
          <h1 className="mt-2 text-4xl font-black uppercase italic tracking-tight">
            Quark
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            India’s own-inventory D2C footwear platform.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Version 1.0 • Target: ₹1 Cr run-rate in 6 months
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            1. Vision & Goals
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Quark is building a mobile-first, end-to-end direct-to-consumer
            footwear platform for India. We own our inventory, control the
            customer experience, and operate a lean, data-driven supply chain.
            The product must make it effortless for Indian shoppers to discover,
            try, buy, and return shoes they love — while giving the internal
            operations team full visibility and control over catalog, inventory,
            orders, payments, and fulfillment.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-muted p-4">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                North Star
              </p>
              <p className="mt-1 font-bold">Become the most trusted Indian D2C footwear brand online.</p>
            </div>
            <div className="rounded-sm border border-border bg-muted p-4">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                6-Month Goal
              </p>
              <p className="mt-1 font-bold">Reach ₹17L monthly GMV and a ₹1 Cr run-rate.</p>
            </div>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <strong>Primary business goal:</strong> Hit ₹1 Cr annual revenue
              run-rate within 6 months of launch with healthy unit economics.
            </li>
            <li>
              <strong>Product goal:</strong> Launch a complete storefront +
              back-office in 6 weeks, then iterate weekly based on real orders.
            </li>
            <li>
              <strong>Customer goal:</strong> Deliver a frictionless mobile
              buying experience with clear sizing, fast delivery, and easy
              returns.
            </li>
            <li>
              <strong>Operational goal:</strong> Keep inventory accurate,
              shipping reliable, and support response under 4 hours.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            2. Target Users / Personas
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The platform serves four core personas. Each has different
            motivations, constraints, and success criteria.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-sm border border-border bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">P1 — Urban Working Professional</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                25–34 years old, Tier-1 city, office-goer. Needs formal and
                semi-formal shoes that look premium but cost under ₹2,500. Shops
                mostly on mobile during commute. Values fast delivery, easy
                returns, and a clean checkout.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">P2 — Style-Conscious Young Woman</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                22–30 years old, active on Instagram and YouTube. Buys heels,
                flats, and ethnic footwear for work and events. Influenced by
                visuals, reviews, and influencer recommendations. Expects rich
                product imagery, size guidance, and COD as a trust signal.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">P3 — Value-Seeking Parent</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                30–40 years old, buying school and sports shoes for children.
                Prioritizes durability, right sizing, and value. Often orders
                multiple sizes and returns what does not fit. Needs clear size
                charts, exchange-first return policy, and responsive WhatsApp
                support.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">P4 — Fitness / Running Enthusiast</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                24–35 years old, male or female, looking for affordable daily
                trainers and weekend running shoes. Compares specifications,
                reads reviews, and cares about fit and cushioning. Likely to
                return if the shoe feels wrong, so detailed product content and
                fit notes are critical.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">P5 — Quark Operations Manager</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Internal user. Manages catalog updates, inventory, orders,
                refunds, customer tickets, and daily reports. Needs speed,
                accuracy, and a single dashboard that reduces time spent switching
                between tools.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            3. Functional Requirements — Customer-Facing
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The storefront must be mobile-first, fast, and SEO-friendly. Every
            feature below is directly tied to conversion, retention, or support
            efficiency.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-black uppercase tracking-wide">3.1 Homepage</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Hero banner with primary CTA and current offer.</li>
                <li>Category grid: Men, Women, Kids, Sports, Ethnic, Comfort.</li>
                <li>New releases, best sellers, and sale sections.</li>
                <li>Trust badges: free shipping, easy returns, secure payments.</li>
                <li>Newsletter / WhatsApp signup for launch alerts.</li>
                <li>Footer with links to size guide, returns policy, contact, and FAQ.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.2 Catalog & Search</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Listing page with pagination or lazy load.</li>
                <li>Filters: gender, category, size, color, price range, material, occasion.</li>
                <li>Sort by: relevance, price low-to-high, newest, best selling.</li>
                <li>Search bar with auto-suggest and recent searches.</li>
                <li>SEO-friendly URLs, alt text, and structured data.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.3 Product Detail Page</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Multiple product images with zoom and swipe.</li>
                <li>Size selector linked to live inventory.</li>
                <li>Interactive size guide with foot-length mapping.</li>
                <li>Price, MRP, discount, and stock status.</li>
                <li>Product description, material, care instructions, and fit notes.</li>
                <li>Customer reviews and ratings.</li>
                <li>Add to cart, add to wishlist, and size-out-of-stock notify-me.</li>
                <li>Related products and recently viewed products.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.4 Cart & Checkout</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Cart with item image, size, quantity, price breakdown.</li>
                <li>Apply coupon / promo code with validation.</li>
                <li>Saved and new addresses with pin-code serviceability check.</li>
                <li>Payment options: UPI, cards, wallets, net banking, COD.</li>
                <li>Order summary with estimated delivery date.</li>
                <li>Guest checkout plus mobile OTP registration.</li>
                <li>Post-payment order confirmation page and email/WhatsApp receipt.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.5 Account & Self-Service</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Profile, addresses, and order history.</li>
                <li>Order tracking with courier integration and timeline.</li>
                <li>Wishlist saved across devices.</li>
                <li>Initiate return / exchange with reason selection.</li>
                <li>Refund status and wallet / original-source refunds.</li>
                <li>Support ticket creation and chat history.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.6 Reviews & Size Guide</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Verified-purchase review system with star rating and text.</li>
                <li>Review helpfulness voting and moderation queue.</li>
                <li>Size-fit feedback to improve future recommendations.</li>
                <li>Interactive size guide with brand-to-Quark conversion.</li>
                <li>Measurement instructions for foot length and width.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.7 Progressive Web App</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Installable on Android and iOS home screens.</li>
                <li>Service worker for caching static assets and offline browsing.</li>
                <li>Push notifications for order updates and offers.</li>
                <li>Responsive design down to 320px width.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">3.8 Trust & Support</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Static pages: About, Contact, Shipping, Returns, Privacy, T&C.</li>
                <li>WhatsApp chat button on all pages.</li>
                <li>FAQ with return, sizing, payment, and shipping questions.</li>
                <li>Clear cancellation and return policy.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            4. Functional Requirements — Admin / Back Office
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The back office is the operational brain of Quark. It must reduce
            manual work, prevent overselling, and surface the metrics the team
            needs every day.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-black uppercase tracking-wide">4.1 Catalog Management</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Create and edit products with title, description, images, MRP, selling price, GST, and HSN.</li>
                <li>Manage variants: size, color, width, material.</li>
                <li>Bulk upload and export via CSV.</li>
                <li>Category, collection, and tag management.</li>
                <li>SEO fields: slug, meta title, meta description, alt tags.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.2 Inventory Management</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Real-time SKU-level stock tracking.</li>
                <li>Warehouse location tracking (bin/zone).</li>
                <li>Low-stock alerts and reorder recommendations.</li>
                <li>Purchase order creation and inward goods receipt.</li>
                <li>Inventory adjustments with reason codes.</li>
                <li>Reserved stock tied to open orders.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.3 Order Management System (OMS)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Unified order view with filters and search.</li>
                <li>Status workflow: confirmed → packed → shipped → out for delivery → delivered.</li>
                <li>Print packing list, GST invoice, and shipping label.</li>
                <li>Courier assignment and AWB generation via Shiprocket / Delhivery.</li>
                <li>Manual order creation for phone/WhatsApp orders.</li>
                <li>Hold / cancel / refund actions with audit trail.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.4 Returns & Exchanges</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Return request approval workflow.</li>
                <li>Reverse pickup creation with courier partner.</li>
                <li>QC check on returned items: resellable, damaged, or lost.</li>
                <li>Exchange order generation and inventory reservation.</li>
                <li>Refund processing to source or store credit.</li>
                <li>Return reason analytics dashboard.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.5 Customer Relationship Management</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Customer profile with full order and return history.</li>
                <li>Segmentation by value, recency, category affinity.</li>
                <li>Support ticket notes and communication log.</li>
                <li>WhatsApp / SMS template library and manual send.</li>
                <li>Loyalty points and referral tracking.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.6 Finance & Compliance</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>GST-compliant invoice generation with HSN and tax split.</li>
                <li>Payment reconciliation against gateway settlements.</li>
                <li>COD remittance tracking.</li>
                <li>Refund ledger and daily cash-flow summary.</li>
                <li>Exportable reports for the accountant and auditor.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.7 Marketing Tools</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Coupon and discount rule engine.</li>
                <li>Flash sale and time-bound offer setup.</li>
                <li>Banner and homepage content management.</li>
                <li>Referral code generation and reward tracking.</li>
                <li>Meta Pixel and Google Analytics event mapping.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">4.8 Analytics & Reporting</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Dashboard: GMV, orders, AOV, conversion rate, traffic, ROAS.</li>
                <li>Product performance and inventory ageing reports.</li>
                <li>Return reason and refund reports.</li>
                <li>Cohort retention and repeat-purchase analysis.</li>
                <li>Daily automated email summary to leadership.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            5. Non-Functional Requirements
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-black uppercase tracking-wide">5.1 Performance</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>First Contentful Paint under 1.2s on 4G.</li>
                <li>Largest Contentful Paint under 2.5s on mobile.</li>
                <li>Time to Interactive under 3.5s.</li>
                <li>Image optimization via Next.js Image and WebP/AVIF.</li>
                <li>Edge-cached static pages where possible.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">5.2 Security</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>HTTPS everywhere with HSTS.</li>
                <li>PCI-DSS-aligned payment handling via certified gateways.</li>
                <li>JWT or session-based auth with secure cookies.</li>
                <li>Role-based access control in admin (owner, catalog, support, finance).</li>
                <li>Rate limiting on login, OTP, and checkout endpoints.</li>
                <li>Input validation and SQL injection / XSS prevention.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">5.3 Compliance</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>GST invoicing with correct HSN and state-wise tax calculations.</li>
                <li>Consumer protection compliance: clear return, refund, and shipping policies.</li>
                <li>Digital Personal Data Protection Act readiness for customer data.</li>
                <li>Spam regulation compliance for SMS and email.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">5.4 Accessibility</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>WCAG 2.1 AA compliance target.</li>
                <li>Keyboard-navigable checkout and account flows.</li>
                <li>ARIA labels on interactive elements.</li>
                <li>Color contrast ratios above 4.5:1 for body text.</li>
                <li>Screen-reader friendly product pages and forms.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase tracking-wide">5.5 Reliability & Scale</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>99.9% uptime target during active trading hours.</li>
                <li>Database backups daily with point-in-time recovery.</li>
                <li>Idempotent payment webhooks to avoid double charges.</li>
                <li>Graceful degradation if courier or SMS APIs fail.</li>
                <li>Auto-scaling front-end and API workers during campaigns.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            6. Integrations
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Quark relies on best-in-class Indian SaaS providers for payments,
            logistics, messaging, advertising, and accounting. Each integration
            must be redundant or monitored.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                name: "Payments",
                primary: "Razorpay",
                fallback: "PayU",
                use: "Checkout, UPI, cards, wallets, net banking, subscriptions, refunds",
              },
              {
                name: "Shipping",
                primary: "Shiprocket",
                fallback: "Delhivery direct",
                use: "AWB generation, label printing, tracking, courier allocation, reverse pickup",
              },
              {
                name: "SMS / OTP",
                primary: "MSG91",
                fallback: "Twilio / Exotel",
                use: "Order confirmations, OTP login, shipping updates, promotional SMS",
              },
              {
                name: "WhatsApp",
                primary: "WhatsApp Business API",
                fallback: "WhatsApp Business App",
                use: "Support chat, order updates, abandoned-cart reminders, review requests",
              },
              {
                name: "Advertising",
                primary: "Meta Pixel + Google Ads / GA4",
                fallback: "Manual UTM tracking",
                use: "Conversion tracking, retargeting, campaign attribution, audience insights",
              },
              {
                name: "Accounting",
                primary: "Zoho Books",
                fallback: "Tally with manual import",
                use: "GST invoices, ledgers, payment reconciliation, auditor-ready reports",
              },
              {
                name: "Email Marketing",
                primary: "Mailmodo / Mailchimp",
                fallback: "AWS SES for transactional emails",
                use: "Welcome series, abandoned cart, post-purchase review, newsletters",
              },
              {
                name: "Storage & CDN",
                primary: "Cloudflare R2 / AWS S3",
                fallback: "AWS S3 cross-region replication",
                use: "Product images, invoices, static assets, backup storage",
              },
            ].map((integration) => (
              <div
                key={integration.name}
                className="rounded-sm border border-border bg-muted p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-black uppercase tracking-wide">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {integration.primary} {integration.fallback && `• ${integration.fallback}`}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{integration.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            7. User Stories
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            These stories capture the most important jobs the platform must do
            for each persona.
          </p>

          <ol className="mt-6 list-decimal space-y-3 pl-5 text-muted-foreground">
            <li>
              <strong>As an urban professional,</strong> I want to filter formal
              shoes by size and price, so I can find office-appropriate options
              within my budget in under a minute.
            </li>
            <li>
              <strong>As a young woman shopper,</strong> I want to see real
              customer photos and fit reviews, so I can decide whether to buy
              heels online without visiting a store.
            </li>
            <li>
              <strong>As a parent,</strong> I want to order two sizes of the
              same school shoe and return the one that does not fit for free, so
              I am not stuck with the wrong size.
            </li>
            <li>
              <strong>As a runner,</strong> I want a detailed size guide and
              cushioning notes, so I can choose a shoe that fits my training
              needs and foot shape.
            </li>
            <li>
              <strong>As a first-time buyer,</strong> I want to check out as a
              guest and pay with UPI or COD, so I can complete the order
              without creating a password.
            </li>
            <li>
              <strong>As a returning customer,</strong> I want to reorder from
              my order history, so I can buy the same shoe again in two taps.
            </li>
            <li>
              <strong>As an operations manager,</strong> I want to print a
              shipping label and GST invoice together, so I can pack orders
              faster without switching tools.
            </li>
            <li>
              <strong>As a catalog manager,</strong> I want to bulk upload 50
              SKUs via CSV, so I can launch new categories in a single afternoon.
            </li>
            <li>
              <strong>As a support agent,</strong> I want to see a customer’s
              full order and return history, so I can resolve a WhatsApp query
              in one conversation.
            </li>
            <li>
              <strong>As a founder,</strong> I want a daily metrics email with
              GMV, orders, AOV, and return rate, so I can spot problems and
              opportunities every morning.
            </li>
            <li>
              <strong>As a customer who received a damaged product,</strong> I
              want to upload a photo and request a replacement, so I can get a
              working product without calling support.
            </li>
            <li>
              <strong>As a marketing lead,</strong> I want to create a coupon
              and track its redemptions, so I can measure campaign ROI in real
              time.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            8. Success Metrics / KPIs
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            KPIs are split into business, product, and operational categories.
            They define whether the platform is enabling the ₹1 Cr run-rate
            target.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Month 6 GMV", target: "₹17L/month" },
              { label: "6-Month Total GMV", target: "₹33.4L" },
              { label: "Average Order Value", target: "≥ ₹1,600" },
              { label: "Monthly Orders by Month 6", target: "≥ 1,000" },
              { label: "Conversion Rate", target: "≥ 2%" },
              { label: "Return Rate", target: "≤ 15%" },
              { label: "Repeat Purchase Rate", target: "≥ 25%" },
              { label: "ROAS", target: "≥ 4:1" },
              { label: "Customer Support Response", target: "< 4 hours" },
              { label: "NPS", target: "≥ 40" },
              { label: "Page Load (LCP)", target: "< 2.5s" },
              { label: "Uptime", target: "≥ 99.9%" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-sm border border-border bg-muted p-4"
              >
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="mt-1 text-lg font-black">{kpi.target}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            9. Release Phases
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The roadmap is intentionally front-loaded to get Quark selling
            quickly, then iterates based on real customer behavior.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-sm border-l-4 border-accent bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">MVP — Weeks 1–6</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A complete but focused storefront and back-office. Goal: soft
                launch with 50–100 SKUs and real orders.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Homepage, catalog, filters, search, product detail, cart, checkout.</li>
                <li>Mobile OTP auth, guest checkout, UPI/cards/wallets/COD via Razorpay.</li>
                <li>Shiprocket integration for AWB, labels, and tracking.</li>
                <li>Admin: products, inventory, orders, users, GST invoice, daily dashboard.</li>
                <li>Static pages, size guide, returns policy, WhatsApp support button.</li>
                <li>PWA installability and basic service worker.</li>
              </ul>
            </div>

            <div className="rounded-sm border-l-4 border-foreground bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">Phase 2 — Months 2–3</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Harden operations and improve conversion before scaling ad spend.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Wishlist, saved addresses, order tracking page.</li>
                <li>Reviews, interactive size guide, related products.</li>
                <li>Coupon engine, referral program, abandoned-cart recovery.</li>
                <li>Automated SMS/WhatsApp order updates.</li>
                <li>Returns/exchange workflow and refund ledger.</li>
                <li>Marketing analytics: Meta Pixel, GA4 events, UTM tracking.</li>
              </ul>
            </div>

            <div className="rounded-sm border-l-4 border-muted-foreground bg-muted p-5">
              <h3 className="font-black uppercase tracking-wide">Phase 3 — Months 4–6</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scale marketing and loyalty to hit the ₹1 Cr run-rate target.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Loyalty points program and tier-based rewards.</li>
                <li>Email/SMS marketing automation flows.</li>
                <li>Advanced analytics: cohorts, CLV, product affinity.</li>
                <li>Inventory demand forecasting and auto-reorder suggestions.</li>
                <li>Multi-warehouse support and zone-based shipping rules.</li>
                <li>Affiliate and influencer tracking dashboard.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-black uppercase tracking-wide">
            10. Out of Scope
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The following items are intentionally excluded from the first 6
            months to protect focus, budget, and delivery speed. They can be
            revisited once Quark crosses ₹50L monthly GMV.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Native iOS and Android apps.</li>
            <li>Multi-vendor marketplace model.</li>
            <li>International shipping and multi-currency checkout.</li>
            <li>Physical retail POS or store operations.</li>
            <li>AI-powered personalized recommendation engine.</li>
            <li>3D shoe configurator or AR try-on.</li>
            <li>White-label or B2B wholesale portal.</li>
            <li>Subscription / shoe-of-the-month club.</li>
            <li>Custom manufacturing or made-to-order footwear.</li>
            <li>Full ERP replacement; accounting stays in Zoho Books.</li>
          </ul>
        </section>

        <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            This PRD is a living document. Priorities, metrics, and scope should
            be reviewed every two weeks against actual order and support data.
          </p>
        </footer>
      </main>
    </div>
  );
}
