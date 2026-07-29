"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  TrendingUp,
  Users,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  Zap,
  CheckCircle,
  ChevronRight,
  Globe,
  Server,
  Smartphone,
  CreditCard,
  Package,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const formatINR = (amount: number) => {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "model", label: "Business Model" },
  { id: "product", label: "Product Plan" },
  { id: "go-to-market", label: "Go-To-Market" },
  { id: "financials", label: "Financials" },
  { id: "technology", label: "Technology" },
  { id: "team", label: "Team" },
  { id: "risks", label: "Risks" },
];

const kpis = [
  { label: "Month 6 GMV Target", value: "₹17L/month" },
  { label: "Average Order Value", value: "₹1,600" },
  { label: "Monthly Orders", value: "~1,000" },
  { label: "Repeat Purchase Rate", value: "≥25%" },
  { label: "Return Rate Target", value: "≤15%" },
  { label: "ROAS Target", value: "≥4:1" },
];

const categories = [
  "Men’s Formal",
  "Women’s Heels/Flats",
  "Kids School",
  "Running/Sports",
  "Ethnic/Handcrafted",
  "Comfort/Orthopedic",
];

const revenueRows = [
  { month: "Month 1", orders: 0, revenue: 0, ads: 20000 },
  { month: "Month 2", orders: 50, revenue: 80000, ads: 30000 },
  { month: "Month 3", orders: 180, revenue: 288000, ads: 60000 },
  { month: "Month 4", orders: 500, revenue: 800000, ads: 120000 },
  { month: "Month 5", orders: 750, revenue: 1200000, ads: 180000 },
  { month: "Month 6", orders: 1050, revenue: 1680000, ads: 250000 },
];

const costRows = [
  { item: "Legal + GST + Compliance", amount: 50000 },
  { item: "Initial Inventory (50–100 SKUs)", amount: 400000 },
  { item: "Warehouse / 3PL Setup", amount: 100000 },
  { item: "Website / Platform Build", amount: 200000 },
  { item: "Photography + Content", amount: 75000 },
  { item: "Payment Gateway + Tools", amount: 30000 },
  { item: "Paid Ads (Month 4–6)", amount: 400000 },
  { item: "Shipping Working Capital", amount: 100000 },
  { item: "Contingency", amount: 100000 },
];

const integrations = [
  { icon: CreditCard, title: "Payments", desc: "Razorpay / PayU" },
  { icon: Package, title: "Shipping", desc: "Shiprocket / Delhivery" },
  { icon: Smartphone, title: "SMS/OTP", desc: "MSG91" },
  { icon: Globe, title: "WhatsApp", desc: "WhatsApp Business API" },
  { icon: Server, title: "Accounting", desc: "Zoho Books" },
  { icon: BarChart3, title: "Analytics", desc: "Google Analytics 4 / Meta Pixel" },
];

const risks = [
  { title: "High return rate in footwear", mitigation: "Detailed size guides, free size exchange, QC before dispatch" },
  { title: "Cash flow pressure", mitigation: "30-day stock, weekly ad caps, lean inventory model" },
  { title: "Platform delivery delays", mitigation: "Proven stack, weekly milestones, clear MVP scope" },
  { title: "Low initial trust", mitigation: "Reviews, COD, easy returns, influencer endorsements" },
  { title: "Courier reliability", mitigation: "2+ courier partners, clear SLAs" },
];

const milestones = [
  { phase: "Month 1", title: "Foundation", items: ["Brand + legal entity", "GST & bank account", "Supplier tie-ups", "Warehouse setup"] },
  { phase: "Month 2", title: "Platform Build", items: ["Catalog + cart + checkout", "Payments + shipping", "Admin dashboard", "Inventory system"] },
  { phase: "Month 3", title: "Operations Ready", items: ["Returns workflow", "GST invoicing", "CRM + support", "Soft launch"] },
  { phase: "Month 4", title: "Public Launch", items: ["Paid ads live", "Referral program", "Daily metrics review"] },
  { phase: "Month 5", title: "Scale Marketing", items: ["Influencer campaigns", "Email/SMS automation", "Add new categories"] },
  { phase: "Month 6", title: "Optimize", items: ["Loyalty program", "Return reason analysis", "Target ₹17L GMV"] },
];

export default function BusinessPlan() {
  const [activeSection, setActiveSection] = useState("overview");
  const totalLaunchCost = costRows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Top bar */}
      <div className="bg-foreground px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-white">
        Quark Business Plan 2026 • Internal & Investor Ready
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-black uppercase tracking-wide text-accent">
            Quark Plan
          </Link>
          <div className="flex items-center gap-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`whitespace-nowrap text-xs font-bold uppercase tracking-wide transition-colors ${
                  activeSection === section.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <Link href="/scope" className="text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground">Scope</Link>
            <Link href="/prd" className="text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground">PRD</Link>
            <Link href="/adr" className="text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground">ADR</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <section id="overview" className="mb-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="flex-1">
              <span className="text-sm font-black uppercase tracking-widest text-accent">
                Business Plan
              </span>
              <h1 className="mt-3 text-5xl font-black uppercase italic tracking-tight sm:text-7xl">
                Quark
              </h1>
              <h2 className="mt-2 text-2xl font-black uppercase italic tracking-tight text-muted-foreground sm:text-3xl">
                India’s Own-Inventory Footwear Brand
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Quark is a direct-to-consumer online shoe store operating in India.
                Built like Nike, Adidas, and Puma in ambition — but designed for
                Indian feet, Indian pricing, and Indian service.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-sm border border-border bg-muted p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{kpi.label}</p>
                    <p className="mt-1 text-xl font-black text-foreground">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-sm bg-muted lg:h-auto lg:min-h-[360px] lg:w-80">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90"
                alt="Quark running shoes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
        </section>

        {/* Market */}
        <section id="market" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">
              Market Opportunity
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "TAM", value: "$12B", desc: "Global online footwear market" },
              { label: "SAM", value: "$1.8B", desc: "India online footwear market" },
              { label: "SOM", value: "₹1 Cr", desc: "Quark 6-month revenue target" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-sm border border-border bg-white p-6 text-center shadow-sm"
              >
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </p>
                <p className="mt-2 text-4xl font-black text-accent">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-sm border border-border bg-muted p-6">
            <h3 className="text-lg font-black uppercase tracking-wide">Why Now?</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "India footwear market growing at 15% CAGR",
                "D2C brands gaining market share from offline retail",
                "UPI + COD making online payments frictionless",
                "Tier-2/3 cities driving e-commerce growth",
                "Influencer marketing is cost-effective in India",
                "No Indian D2C brand owns performance + formal + ethnic together",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Business Model */}
        <section id="model" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Business Model</h2>
          </div>

          <div className="overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Element</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Choice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Model", "Own-inventory D2C"],
                  ["Categories", "Men, Women, Kids, Sports, Ethnic, Comfort"],
                  ["Price Range", "₹999 – ₹3,499"],
                  ["Target Margin", "≥50%"],
                  ["Geography", "India first, Tier-1/2 cities"],
                  ["Fulfillment", "Own warehouse + 3PL, Delhivery/Shiprocket"],
                  ["Payments", "Razorpay / PayU (UPI, cards, wallets, COD)"],
                  ["Returns", "15-day free returns & exchanges"],
                ].map(([label, value]) => (
                  <tr key={label} className="bg-white">
                    <td className="px-4 py-3 font-bold">{label}</td>
                    <td className="px-4 py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {[
              { icon: Truck, title: "Free Shipping", desc: "Above ₹999" },
              { icon: RefreshCcw, title: "15-Day Returns", desc: "No questions" },
              { icon: ShieldCheck, title: "Secure Payments", desc: "UPI/COD/Cards" },
              { icon: Headphones, title: "24/7 Support", desc: "WhatsApp/Email" },
            ].map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-sm border border-border bg-muted p-4"
              >
                <b.icon className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-bold">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Plan */}
        <section id="product" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Product Plan</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex items-center justify-between rounded-sm border border-border bg-white p-5 shadow-sm"
              >
                <span className="font-bold">{cat}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-sm border border-border bg-foreground p-6 text-white">
            <h3 className="text-lg font-black uppercase tracking-wide">Platform Scope</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Customer storefront (mobile-first PWA)",
                "Catalog, search, filters, cart, checkout",
                "Razorpay / PayU payment integration",
                "Shiprocket / Delhivery shipping",
                "Admin: products, inventory, orders, CRM",
                "Returns & exchange workflow",
                "GST invoicing + finance dashboard",
                "Marketing: coupons, email, SMS, WhatsApp",
                "Analytics: sales, attribution, cohorts",
                "Loyalty + referral program",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </div>
          </div>
        </section>

        {/* Go-To-Market */}
        <section id="go-to-market" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Go-To-Market Plan</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Launch", desc: "Meta & Google Shopping ads, welcome offer, referral program" },
              { title: "Organic", desc: "SEO product pages, blog, Instagram Reels, YouTube Shorts" },
              { title: "Influencers", desc: "Micro-influencers in fitness, fashion, parenting" },
              { title: "Retention", desc: "Abandoned cart recovery, loyalty points, email/SMS flows" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black uppercase">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-black uppercase tracking-wide">6-Month Roadmap</h3>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div
                  key={m.phase}
                  className="flex flex-col gap-4 rounded-sm border border-border bg-muted p-5 sm:flex-row"
                >
                  <div className="sm:w-40">
                    <p className="text-xs font-black uppercase tracking-widest text-accent">{m.phase}</p>
                    <p className="text-lg font-black">{m.title}</p>
                  </div>
                  <ul className="grid flex-1 gap-2 sm:grid-cols-2">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financials */}
        <section id="financials" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Financials</h2>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-sm border border-border bg-muted p-5 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Launch Capital Needed</p>
              <p className="mt-2 text-3xl font-black">{formatINR(totalLaunchCost)}</p>
            </div>
            <div className="rounded-sm border border-border bg-muted p-5 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Month 6 GMV</p>
              <p className="mt-2 text-3xl font-black text-accent">₹17L</p>
            </div>
            <div className="rounded-sm border border-border bg-muted p-5 text-center">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">6-Month Total Revenue</p>
              <p className="mt-2 text-3xl font-black">₹33.4L</p>
            </div>
          </div>

          <div className="mb-8 overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Month</th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">Orders</th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">Revenue</th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">Ad Spend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {revenueRows.map((row) => (
                  <tr key={row.month} className="bg-white">
                    <td className="px-4 py-3 font-bold">{row.month}</td>
                    <td className="px-4 py-3 text-right">{row.orders}</td>
                    <td className="px-4 py-3 text-right font-bold">{formatINR(row.revenue)}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{formatINR(row.ads)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-hidden rounded-sm border border-border">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wide">Launch Cost Head</th>
                  <th className="px-4 py-3 text-right text-xs font-black uppercase tracking-wide">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {costRows.map((row) => (
                  <tr key={row.item} className="bg-white">
                    <td className="px-4 py-3">{row.item}</td>
                    <td className="px-4 py-3 text-right font-bold">{formatINR(row.amount)}</td>
                  </tr>
                ))}
                <tr className="bg-accent font-black text-white">
                  <td className="px-4 py-3">Total Launch Capital</td>
                  <td className="px-4 py-3 text-right">{formatINR(totalLaunchCost)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Technology */}
        <section id="technology" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <Server className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Technology Stack</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Front-end", "Next.js 14, TypeScript, Tailwind CSS"],
              ["Back-end", "Next.js API routes / Node.js"],
              ["Database", "PostgreSQL via Supabase / AWS RDS"],
              ["Auth", "Supabase Auth / NextAuth + mobile OTP"],
              ["Storage", "AWS S3 / Cloudflare R2"],
              ["Payments", "Razorpay primary, PayU fallback"],
              ["Shipping", "Shiprocket primary, Delhivery fallback"],
              ["Hosting", "Vercel + Railway / Render / AWS"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-sm border border-border bg-muted p-4"
              >
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <div
                key={i.title}
                className="flex items-start gap-3 rounded-sm border border-border bg-white p-4 shadow-sm"
              >
                <i.icon className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="font-bold">{i.title}</p>
                  <p className="text-xs text-muted-foreground">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Team Plan</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { role: "Founder / CEO", desc: "Strategy, brand, investor relations, operations oversight" },
              { role: "Operations Manager", desc: "Inventory, warehouse, order fulfillment, returns" },
              { role: "Tech Lead", desc: "Platform build, integrations, DevOps, scaling" },
              { role: "Growth / Marketing Lead", desc: "Paid ads, organic, influencers, retention" },
              { role: "Customer Support", desc: "WhatsApp/email support, returns, CRM" },
              { role: "Part-time CA", desc: "GST, compliance, invoicing, books" },
            ].map((t) => (
              <div
                key={t.role}
                className="rounded-sm border border-border bg-white p-5 shadow-sm"
              >
                <p className="font-black">{t.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risks */}
        <section id="risks" className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-white">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tight">Risks & Mitigation</h2>
          </div>

          <div className="space-y-4">
            {risks.map((r) => (
              <div
                key={r.title}
                className="rounded-sm border border-border bg-muted p-5"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div className="flex-1">
                    <p className="font-bold">{r.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Mitigation:</span>{" "}
                      {r.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-sm bg-foreground p-8 text-center text-white sm:p-12">
          <h2 className="text-3xl font-black uppercase italic tracking-tight">Ready to build Quark?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            One document. One vision. One India-first performance footwear brand.
          </p>
          <a
            href="https://quark-homepage.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
          >
            View Quark Homepage
            <ChevronRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Quark Footwear Pvt. Ltd. Internal business plan.
        </div>
      </footer>
    </div>
  );
}
