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

/* ---------- Atom mark ---------- */
function AtomMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <radialGradient id="am-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="10" fill="url(#am-g)" />
      <circle cx="24" cy="24" r="3.2" fill="var(--color-primary)" />
      <g fill="none" stroke="var(--color-primary)" strokeOpacity=".75" strokeWidth="1.2">
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      </g>
    </svg>
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
          <AtomMark />
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
          <Button size="sm" className="rounded-full font-semibold">Book a Screen <ArrowRight /></Button>
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
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.15]">
            Small business websites,<br />
            built from the <span className="text-accent-yellow">atoms</span> up.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Not a DIY template. Not a bloated agency. SoAtomic screens, builds,
            cares for, grows, and automates the digital presence of small
            businesses that need clarity — and want to actually understand their
            own website.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="rounded-full font-semibold glow-ring">
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
        <div className="relative h-28 w-28 bg-card glow-ring grid place-items-center">
          <AtomMark className="h-12 w-12" />
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
            <div className="flex items-center gap-2 font-mono-soa text-[10px] uppercase tracking-widest text-primary">
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
            <div className="flex items-center gap-2 font-mono-soa text-[10px] uppercase tracking-widest text-muted-foreground">
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
function SectionHeader({ title, sub, accent, white }: { title: string; sub?: string; accent?: boolean; white?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`text-3xl md:text-4xl font-semibold ${accent ? "text-gradient-accent" : ""} ${white ? "text-foreground" : ""}`}>{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const pains = [
    { icon: AlertTriangle, title: "Messy website", body: "Slow pages, broken layouts, copy that doesn't say what you do." },
    { icon: KeyRound, title: "Unclear ownership", body: "No one knows who owns the domain, DNS, or the login that matters." },
    { icon: Compass, title: "No practical plan", body: "Lots of advice, no priorities. Nothing actually ships." },
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
              <div className="h-10 w-10 bg-background grid place-items-center text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
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
    { icon: Search, sym: "Sc", key: "Screen", title: "Atomic Screen",
      body: "A plain-English review of your website, SEO, domain/DNS, SSL, Google presence, social presence, and AI opportunities. You get a prioritized action plan." },
    { icon: Hammer, sym: "Bd", key: "Build", title: "Atomic Build",
      body: "Websites, landing pages, brand assets, and lightweight digital systems sized from S to XXL as your needs grow." },
    { icon: HeartPulse, sym: "Cr", key: "Care", title: "Atomic Care",
      body: "Ongoing support for updates, digital operations, DNS/SSL coordination, Google Workspace, analytics, backups, and small fixes." },
    { icon: TrendingUp, sym: "Gr", key: "Grow", title: "Atomic Grow",
      body: "SEO, Google Business Profile, content planning, service pages, campaigns, reviews, and social presence support." },
    { icon: Bot, sym: "Au", key: "Automate", title: "Atomic Automate",
      body: "Practical AI workflows, prompt kits, customer response templates, content systems, and lightweight automation." },
  ];
  return (
    <section id="services" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Start with clarity. Then build what matters." white />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.key} className={`atomic-card p-7 relative overflow-hidden ${i === 0 ? "lg:row-span-2" : ""}`}>
              {/* periodic-tile symbol */}
              <div className="flex items-start justify-between">
                <div className="h-16 w-16 bg-background grid place-items-center text-primary glow-ring relative">
                  <span className="text-2xl font-semibold">{s.sym}</span>
                </div>
                <s.icon className="h-5 w-5 text-primary/70" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {i === 0 && (
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium font-mono-soa uppercase tracking-widest text-xs">
                  Start here <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {/* corner dot motif */}
              <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 border border-dashed border-primary/35 opacity-50" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 border border-border/40" />
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
    { size: "S", title: "Launchpad", body: "One-page site or landing page." },
    { size: "M", title: "Small business", body: "Small business website, 3–5 pages." },
    { size: "X", title: "Content engine", body: "Larger site with CMS/blog and SEO structure." },
    { size: "XL", title: "Scale", body: "Multi-location, integrations, or migration." },
    { size: "XXL", title: "Escape velocity", body: "Complex platform escape, multi-site, or custom digital system." },
  ];
  return (
    <section id="sizes" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="Builds sized to the job." white />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizes.map((s, i) => (
            <div key={s.size} className="atomic-card p-6 flex flex-col relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-semibold text-primary">{s.size}</span>
              </div>
              <div className="mt-4 h-px w-full bg-border" />
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 border border-border/40 group-hover:border-primary/30 transition-colors"/>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
          Most projects start with <span className="text-foreground font-medium">Atomic Screen</span> so the
          build is scoped around what you actually need.
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
          <AtomMark className="h-8 w-8" />
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
            accent
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
          <AtomMark />
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
