import Link from "next/link";

export const metadata = {
  title: "Quark — Product Requirements Document",
  description: "Detailed PRD for the Quark D2C footwear platform.",
};

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Theory Docs
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-wide hover:text-accent">Business Plan</Link>
          <Link href="/scope" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">Scope</Link>
          <Link href="/prd" className="text-sm font-black uppercase tracking-wide text-accent">PRD</Link>
          <Link href="/adr" className="text-sm font-black uppercase tracking-wide text-muted-foreground hover:text-foreground">ADR</Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase italic tracking-tight">Product Requirements Document</h1>
        <p className="mt-2 text-muted-foreground">Quark — India’s own-inventory D2C footwear platform.</p>

        <section className="mt-10">
          <h2 className="text-xl font-black uppercase tracking-wide">1. Vision</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Build a mobile-first, end-to-end e-commerce platform for Quark that
            handles discovery, purchase, payment, fulfillment, returns, and
            customer support under one unified experience.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">2. Customer-Facing Features</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Homepage with hero, categories, new releases, and trust badges.</li>
            <li>Product listing with filters (size, color, price, category).</li>
            <li>Product detail page with size guide, images, reviews, related products.</li>
            <li>Cart, guest checkout, saved addresses, order tracking.</li>
            <li>Payment: UPI, cards, wallets, netbanking, COD.</li>
            <li>Account: orders, wishlist, returns, profile, support tickets.</li>
            <li>PWA install for mobile-like experience.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">3. Admin Features</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Catalog: add/edit SKUs, variants, inventory, pricing.</li>
            <li>Order management: view, update status, print shipping labels.</li>
            <li>Inventory: stock levels, low-stock alerts, PO tracking.</li>
            <li>Returns and exchanges workflow with refund status.</li>
            <li>GST-compliant invoice generation.</li>
            <li>User/CRM view with purchase history and support notes.</li>
            <li>Marketing tools: coupons, discounts, campaigns.</li>
            <li>Dashboard: revenue, orders, traffic, returns, top products.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">4. Non-Functional Requirements</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Mobile-first responsive design.</li>
            <li>Page load under 2.5 seconds on 4G.</li>
            <li>99.9% uptime target.</li>
            <li>PCI-DSS-aligned payment handling.</li>
            <li>Accessible WCAG 2.1 AA compliance.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">5. Success Metrics</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Month 6 GMV: ₹17L/month.</li>
            <li>Conversion rate: ≥2%.</li>
            <li>Return rate: ≤15%.</li>
            <li>Customer support response under 4 hours.</li>
            <li>NPS score ≥40.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
