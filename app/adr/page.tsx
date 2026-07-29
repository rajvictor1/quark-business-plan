import Link from "next/link";

export const metadata = {
  title: "Quark — Architecture Decision Record",
  description: "ADR documenting technology choices for the Quark platform.",
};

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
        <p className="mt-2 text-muted-foreground">Why Quark is built the way it is.</p>

        <section className="mt-10">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-001: Front-end Framework</h2>
          <p className="mt-2 font-bold">Decision: Next.js 14 with TypeScript and Tailwind CSS.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Next.js gives server-side rendering for SEO, file-based routing, and
            easy API routes in one repo. Tailwind enables fast, consistent UI.
          </p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Alternatives considered:</span>{" "}
            React SPA with Vite, Angular, Shopify. Rejected due to SEO, custom
            control, and India payment integration needs.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-002: Database</h2>
          <p className="mt-2 font-bold">Decision: PostgreSQL via Supabase.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Relational data fits e-commerce perfectly. Supabase offers managed
            Postgres, auth, and storage with a generous free tier.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-003: Payments</h2>
          <p className="mt-2 font-bold">Decision: Razorpay primary, PayU fallback.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Razorpay is the most trusted Indian payment gateway, supports UPI,
            cards, wallets, and subscriptions. PayU provides redundancy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-004: Shipping</h2>
          <p className="mt-2 font-bold">Decision: Shiprocket integrated with Delhivery fallback.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Shiprocket aggregates multiple couriers and gives the best rates.
            Delhivery is the largest Indian logistics provider for direct
            integration.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-005: Hosting</h2>
          <p className="mt-2 font-bold">Decision: Vercel for front-end, Railway/Render for API and DB.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Vercel is optimized for Next.js with fast global CDN. Railway/Render
            keeps backend cost low while remaining scalable.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-006: Auth</h2>
          <p className="mt-2 font-bold">Decision: Mobile OTP plus email via Supabase Auth or NextAuth.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            Indian users prefer mobile OTP over passwords. It reduces checkout
            friction and improves repeat purchase rates.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">ADR-007: Notifications</h2>
          <p className="mt-2 font-bold">Decision: MSG91 for SMS, WhatsApp Business API for support.</p>
          <p className="mt-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            SMS is reliable for OTP and order updates in India. WhatsApp is the
            preferred customer support channel and improves retention.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-black uppercase tracking-wide">Summary of Trade-offs</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Custom build vs Shopify: more control, higher initial dev cost.</li>
            <li>Postgres vs NoSQL: better consistency, stricter schema migrations.</li>
            <li>Razorpay vs custom payment: faster compliance, gateway fees.</li>
            <li>Shiprocket vs self-shipped: better rates, dependency on aggregator.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
