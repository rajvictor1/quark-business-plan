import Link from "next/link";

export const metadata = {
  title: "Quark — Scope & Architecture",
  description: "Strategic scope and architecture brief for Quark.",
};

export default function ScopePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Theory Docs
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-wide hover:text-accent">Business Plan</Link>
          <Link href="/scope" className="text-sm font-black uppercase tracking-wide text-accent">Scope</Link>
          <Link href="/prd" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">PRD</Link>
          <Link href="/adr" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">ADR</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase italic tracking-tight">Scope & Architecture Brief</h1>
        <p className="mt-2 text-muted-foreground">CEO-level strategic overview.</p>

        <section className="mt-10">
          <h2 className="text-xl font-black uppercase tracking-wide">1. Executive Summary</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Quark will become India’s premier own-inventory D2C footwear brand.
            We will sell men’s formal, women’s heels/flats, kids school,
            running/sports, ethnic, and comfort shoes through a fully owned online
            platform. By month 6 we target ₹17L monthly GMV and a clear path to
            ₹1 Cr annual run-rate.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">2. In Scope (Phase 1)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Customer storefront with catalog, cart, checkout, and account.</li>
            <li>Own-inventory model with warehouse + 3PL fulfillment.</li>
            <li>Payments: UPI, cards, wallets, COD.</li>
            <li>Order management, CRM, inventory, returns, and GST invoicing.</li>
            <li>Marketing automation: email, SMS, WhatsApp, coupons.</li>
            <li>Analytics dashboard and daily reporting.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">3. Out of Scope (Phase 1)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Native iOS/Android apps.</li>
            <li>Multi-vendor marketplace.</li>
            <li>International shipping.</li>
            <li>Physical retail POS.</li>
            <li>Advanced AI recommendation engine.</li>
            <li>Custom 3D shoe configurator.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">4. Operating Model</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Source finished shoes from curated manufacturers.</li>
            <li>Inbound QC at warehouse before listing.</li>
            <li>Pack, label, and handover to courier same day.</li>
            <li>Returns inspected, restocked, or discarded.</li>
            <li>Customer support via WhatsApp + email, SLA under 4 hours.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">5. 6-Week MVP Plan</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Week 1–2: Project setup, database schema, auth, admin skeleton.</li>
            <li>Week 3: Catalog, product detail, cart, checkout UI.</li>
            <li>Week 4: Razorpay integration, Shiprocket integration, order flow.</li>
            <li>Week 5: Returns, GST invoice, SMS/WhatsApp, dashboard.</li>
            <li>Week 6: Testing, content, photography, soft launch.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">6. Key Decisions</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Build custom platform instead of Shopify for full control.</li>
            <li>Start with own inventory, not dropshipping, for quality control.</li>
            <li>Focus on India first; no international expansion until ₹50L/month.</li>
            <li>Mobile-first PWA before investing in native apps.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
