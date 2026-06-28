import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight, Search, Hammer, HeartPulse, TrendingUp, Bot,
  AlertTriangle, KeyRound, Compass, Check, Mail, X,
} from "lucide-react";
import logoAsset from "@/assets/soatomic-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoAtomic — Digital presence, built from the atoms up." },
      { name: "description", content: "Santa Cruz web design & management. Practical web, SEO, AI, and digital operations for small businesses." },
      { property: "og:title", content: "SoAtomic — Digital presence, built from the atoms up." },
      { property: "og:description", content: "Practical web design, SEO, AI workflows, and digital operations for small businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Toaster theme="dark" />
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Manifesto />
      <Services />
      <BuildSizes />
      <Why />
      <Process />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Logo image ---------- */
function SoAtomicLogo({ className = "", alt = "SoAtomic" }: { className?: string; alt?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      className={`${className}`}
      style={{ imageRendering: "auto" }}
    />
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#sizes", label: "Builds" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <SoAtomicLogo className="h-8 w-auto" />
          <span className="font-semibold tracking-tight text-base">
            So<span className="text-primary">Atomic</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors font-mono-soa text-xs uppercase tracking-widest">{l.label}</a>
          ))}
        </nav>
        <a href="#contact">
          <Button size="sm" className="mech-btn font-semibold">Book a Screen <ArrowRight /></Button>
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      {/* dot field */}
      <div
        className="absolute inset-0 -z-10 dot-grid-bg opacity-[0.25]"
        style={{ maskImage: "radial-gradient(ellipse at 70% 30%, black 30%, transparent 70%)" }}
        aria-hidden
      />
      {/* huge orbit ghost */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 w-[680px] h-[680px] orbit-ring opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 w-[440px] h-[440px] orbit-ring opacity-30" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.15] text-foreground">
            Small Business Websites,<br />
            Built From The <span className="text-accent-yellow">Atoms</span> Up.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Not a DIY template. Not a bloated agency. SoAtomic screens, builds,
            cares for, grows, and automates the digital presence of small
            businesses that need clarity — and want to actually understand their
            own website.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="mech-btn font-semibold glow-ring">
                Book an Atomic Screen <ArrowRight />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="rounded-full border-border bg-card/40 hover:bg-card">
                View Services
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "01", v: "Screen" },
              { k: "02", v: "Build" },
              { k: "03", v: "Grow" },
            ].map(s => (
              <div key={s.k} className="border-l border-border pl-3">
                <div className="text-sm font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}

function HeroOrbit() {
  const nodes = [
    { label: "Web", angle: 0 },
    { label: "SEO", angle: 90 },
    { label: "AI", angle: 180 },
    { label: "Ops", angle: 270 },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 60%)" }} />
      {/* orbits */}
      <div className="absolute inset-2 border border-dashed border-primary/35 opacity-60" />
      <div className="absolute inset-10 border border-border/70" />
      <div className="absolute inset-20 border border-dashed border-primary/35 opacity-40" />
      {/* nucleus */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative grid place-items-center glow-ring rounded-2xl p-3 bg-card">
          <SoAtomicLogo className="h-16 w-auto" />
        </div>
      </div>
      {/* nodes */}
      <div className="absolute inset-0 animate-orbit">
        {nodes.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const r = 46; // % from center
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div className="bg-card border border-border px-3 py-1 text-xs font-medium animate-float shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-background)_60%,transparent)]" style={{ animationDelay: `${n.angle / 90}s` }}>
                <span className="text-accent-orange mr-1">■</span>
                <span className="font-mono-soa">{n.label}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* outer ticker dots */}
      <div aria-hidden className="absolute inset-0 animate-orbit-rev">
        {[30,75,150,210,300,330].map(a => {
          const rad = (a*Math.PI)/180;
          const x = 50 + 49*Math.cos(rad);
          const y = 50 + 49*Math.sin(rad);
          return <span key={a} className="absolute h-1.5 w-1.5 bg-primary/70" style={{left:`${x}%`,top:`${y}%`,transform:"translate(-50%,-50%)"}}/>
        })}
      </div>
    </div>
  );
}

/* ---------- Ticker ---------- */
function Ticker() {
  const items = [
    "ATOMIC SCREEN", "■", "WEB DESIGN", "■", "SEO", "■", "AI WORKFLOWS",
    "■", "DIGITAL OPS", "■", "DNS / SSL", "■", "GOOGLE BUSINESS", "■",
    "ANALYTICS", "■", "AUTOMATION", "■", "PLAIN ENGLISH", "■", "NO BLOAT",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border/60 bg-card/30 py-4 overflow-hidden ticker-mask">
      <div className="flex gap-10 w-max animate-ticker font-mono-soa text-xs tracking-[0.2em] text-muted-foreground">
        {row.map((t, i) => (
          <span key={i} className={t === "■" ? (i % 4 === 1 ? "text-accent-yellow" : "text-accent-orange") : ""}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Manifesto ---------- */
function Manifesto() {
  const yes = [
    "Portable systems you actually own",
    "Plain-English recommendations",
    "Web + SEO + AI + Ops in one place",
    "Small, sharp, accountable scope",
  ];
  const no = [
    "10-person Slack channels for a headline change",
    "Mystery platforms you can't escape",
    "SEO theater and AI sparkle without a plan",
    "Quarterly retainers for monthly silence",
  ];
  return (
    <section className="py-24 border-t border-border/60 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid-bg opacity-[0.18]" style={{maskImage:"linear-gradient(180deg, transparent, black, transparent)"}}/>
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-[1.05] text-foreground">
              Anti-bloat. Pro-clarity. Built for the people who actually run the business.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="atomic-card p-7">
            <div className="flex items-center gap-2 font-mono-soa text-xs uppercase tracking-widest text-primary font-bold">
              <Check className="h-3.5 w-3.5"/> What SoAtomic is
            </div>
            <ul className="mt-5 space-y-3">
              {yes.map(t => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-primary shrink-0"/>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="atomic-card p-7">
            <div className="flex items-center gap-2 font-mono-soa text-xs uppercase tracking-widest text-muted-foreground font-bold">
              <X className="h-3.5 w-3.5"/> What it isn't
            </div>
            <ul className="mt-5 space-y-3">
              {no.map(t => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground line-through decoration-border decoration-1">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-border shrink-0"/>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section helpers ---------- */
function SectionHeader({ title, sub, accent, white, green }: { title: string; sub?: string; accent?: boolean; white?: boolean; green?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-3xl md:text-4xl font-semibold ${accent && !green ? "text-gradient-accent" : ""} ${white ? "text-foreground" : ""}`}
        style={green ? { color: "#37b847", background: "none", WebkitTextFillColor: "#37b847", backgroundClip: "border-box" } : undefined}
      >
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const pains = [
    { icon: AlertTriangle, title: "Messy Website", body: "Slow pages, broken layouts, copy that doesn't say what you do." },
    { icon: KeyRound, title: "Unclear Ownership", body: "No one knows who owns the domain, DNS, or the login that matters." },
    { icon: Compass, title: "No Practical Plan", body: "Lots of advice, no priorities. Nothing actually ships." },
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Tired of digital vendors that make everything harder?"
          sub="You should not need a ticket, three meetings, and a platform specialist just to understand your website, fix a headline, update a service page, or know who owns your domain."
          white
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {pains.map(p => (
            <div key={p.title} className="atomic-card p-6">
              <div className="h-10 w-10 bg-background grid place-items-center" style={{ color: "#ff4500", filter: "drop-shadow(0 0 5px rgba(255,69,0,0.55))" }}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: Search,      sym: "Sc", num: "01", title: "Screening",
      body: "Plain-English audit of your website, SEO, domain, DNS, SSL, Google presence, and AI opportunities. You leave with a prioritized fix list." },
    { icon: Hammer,      sym: "Bd", num: "02", title: "Brand",
      body: "Identity, voice, and naming work tight enough to ship. Logos, palettes, and the small system that makes everything else consistent." },
    { icon: HeartPulse,  sym: "Cr", num: "03", title: "Creative",
      body: "Copy, layouts, landing pages, and visual systems built to communicate — not to win awards no one asked for." },
    { icon: TrendingUp,  sym: "Gr", num: "04", title: "Growth",
      body: "SEO architecture, Google Business Profile, content plans, and measurable channel work. No vanity dashboards." },
    { icon: Bot,         sym: "Au", num: "05", title: "Audit",
      body: "Quarterly check on your digital architecture — DNS, SSL, accounts, ownership, performance, and risk. Findings in plain language." },
  ];
  return (
    <section id="services" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Start with clarity. Then build what matters." white />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div key={s.title} className="crt-card p-5 flex flex-col items-stretch text-left">
              <div className="element-tile h-20 w-full" aria-hidden>
                <span className="absolute left-1.5 top-1 font-mono-soa text-[10px] text-primary">{s.num}</span>
                <s.icon className="absolute right-1.5 top-1 h-3 w-3 text-muted-foreground" />
                <span className="font-semibold text-3xl text-foreground" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  {s.sym}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Build Sizes ---------- */
function BuildSizes() {
  const sizes = [
    {
      size: "S",
      title: "1 Page",
      body: "High-impact landing page or single-scroll profile.",
      includes: ["One-page architecture", "Copy + layout", "Form + analytics"],
    },
    {
      size: "M",
      title: "2–8 Pages",
      body: "Standard brochure, informational, or portfolio site.",
      includes: ["Up to 8 pages", "Service / about / contact", "Basic SEO setup"],
    },
    {
      size: "L",
      title: "Content Engine",
      body: "10 prebuilt pages plus an integrated CMS so you can manage it yourself.",
      includes: ["10 prebuilt pages", "Integrated CMS", "Editor training"],
    },
    {
      size: "XL",
      title: "E-Commerce",
      body: "Full digital storefront, payment gateway wiring, and installation of up to 100 initial SKUs.",
      includes: ["Storefront + checkout", "Payment gateway wiring", "Up to 100 SKUs loaded"],
      note: "We do not manage store operations post-launch.",
    },
    {
      size: "XXL",
      title: "Escape Velocity",
      body: "CMS + E-Commerce + Cloud Identity Management for small teams.",
      includes: [
        "Everything in L and XL",
        "Cloud-only permissions, user groups, and shares",
        "Entra ID or Google Cloud (GCP) tenant setup",
      ],
      note: "No hardware, no printers, no ID badges.",
    },
  ];
  return (
    <section id="sizes" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Right-sized builds. Five tiers, no mystery."
          sub="Pick the shape that fits the job. Scope is explicit; what we don't do is also explicit."
          white
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizes.map((s) => (
            <div key={s.size} className="crt-card p-5 flex flex-col">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-semibold text-primary font-mono-soa">{s.size}</span>
                <span className="font-mono-soa text-[10px] uppercase tracking-widest text-muted-foreground">Tier</span>
              </div>
              <div className="mt-4 h-px w-full bg-border" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-4 space-y-1.5">
                {s.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[11px] text-foreground/90">
                    <Check className="h-3 w-3 mt-0.5 text-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              {s.note && (
                <p className="mt-4 pt-3 border-t border-border/60 text-[11px] text-accent-orange font-medium leading-snug">
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          Most projects start with a <span className="text-foreground font-medium">Screening</span> so the build is
          scoped to what you actually need — nothing more.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why ---------- */
function Why() {
  const items = [
    "Portable, understandable systems",
    "Plain-English recommendations",
    "Human support",
    "SEO and AI without the circus",
    "Web design with digital operations behind it",
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <SectionHeader
          title="Built for clarity, not captivity."
          sub="SoAtomic is for businesses that have outgrown DIY but do not need a bloated agency or a mystery platform."
          white
        />
        <ul className="space-y-3">
          {items.map(t => (
            <li key={t} className="atomic-card flex items-center gap-4 p-4">
              <span className="h-8 w-8 bg-background grid place-items-center text-primary">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm md:text-base">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { n: "01", title: "Screen", body: "We review what exists and identify what matters. No assumptions, no jargon walls." },
    { n: "02", title: "Plan", body: "You get a practical roadmap with priorities — not a 40-page deck no one opens." },
    { n: "03", title: "Build · Care · Grow · Automate", body: "We fix, maintain, improve, or automate the right pieces. You always own the keys." },
  ];
  return (
    <section id="process" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="How it works." white />
        <div className="mt-12 grid md:grid-cols-3 gap-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="atomic-card p-7 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="font-mono-soa text-primary text-sm">{s.n}</span>
                <span className="h-px flex-1 bg-border"/>
                <span className="h-2 w-2 bg-primary animate-pulse-soft"/>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-dashed border-primary/35 opacity-25"/>
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-dashed border-primary/35 opacity-20"/>
        <div className="mx-auto h-16 w-16 bg-card glow-ring grid place-items-center relative">
          <SoAtomicLogo className="h-10 w-auto" />
        </div>
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold">
          A practical digital partner. Not another black box.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          SoAtomic was created by a former web designer and infrastructure professional who has seen both sides:
          the creative web world and the operational tech stack behind it. The goal is simple: help small businesses
          look credible, get found, own their presence, and stop fighting their tools.
        </p>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Got it — we'll be in touch within one business day.");
    }, 600);
  };
  return (
    <section id="contact" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader
            title="Start with an Atomic Screen."
            sub="Get a clear view of what is working, what is broken, and what to fix first."
            green
          />
          <div className="mt-8 atomic-card p-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:hello@soatomic.com" className="hover:text-foreground">hello@soatomic.com</a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="atomic-card p-6 md:p-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field id="name" label="Name" required><Input id="name" name="name" required maxLength={100} placeholder="Your name" /></Field>
            <Field id="email" label="Email" required><Input id="email" name="email" type="email" required maxLength={200} placeholder="you@business.com" /></Field>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field id="business" label="Business name"><Input id="business" name="business" maxLength={120} placeholder="ACME Co." /></Field>
            <Field id="website" label="Website URL"><Input id="website" name="website" maxLength={200} placeholder="https://…" /></Field>
          </div>
          <Field id="needs" label="What do you need help with?" required>
            <Textarea id="needs" name="needs" required maxLength={1500} rows={5} placeholder="A few sentences about your situation." />
          </Field>
          <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full font-semibold glow-ring">
            {submitting ? "Sending…" : "Book an Atomic Screen"} <ArrowRight />
          </Button>
          <p className="text-xs text-muted-foreground text-center">No spam. Reply within one business day.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </Label>
      {children}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <SoAtomicLogo className="h-7 w-auto" />
          <div>
            <div className="font-semibold">So<span className="text-primary">Atomic</span></div>
            <div className="text-xs text-muted-foreground">Web. SEO. AI. Digital Operations.</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
          <a href="mailto:hello@soatomic.com" className="hover:text-foreground">hello@soatomic.com</a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} SoAtomic · Santa Cruz, CA</div>
      </div>
    </footer>
  );
}
