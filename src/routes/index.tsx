import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  ArrowRight, Search, Hammer, HeartPulse, TrendingUp,
  Check, Mail, BookOpen, KeyRound, FileText, Lock, Wrench, Ruler,
} from "lucide-react";
import logoAsset from "@/assets/soatomic-logo.png.asset.json";
import mascotAsset from "@/assets/mascot.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoAtomic — A Boutique Digital Workshop" },
      { name: "description", content: "SoAtomic helps small organizations build digital foundations they actually own. A small workshop. Ten clients a year. Screen. Build. Care. Grow." },
      { property: "og:title", content: "SoAtomic — A Boutique Digital Workshop" },
      { property: "og:description", content: "A small workshop that builds dependable digital foundations for organizations doing meaningful work. Clients own everything. No vendor lock-in." },
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
      <Divisions />
      <BuildSizes />
      <Care />
      <Growth />
      <Audiences />
      <Maxims />
      <Trust />
      <Process />
      <Playbook />
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
    { href: "#screen", label: "Screen" },
    { href: "#build", label: "Build" },
    { href: "#care", label: "Care" },
    { href: "#growth", label: "Growth" },
    { href: "#playbook", label: "Playbook" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <SoAtomicLogo className="h-[5.5rem] w-auto" />
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
            A boutique digital workshop.<br />
            Foundations you <span className="text-accent-yellow">actually own</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            SoAtomic helps small organizations build digital foundations they
            actually own — websites, workspaces, domains, and the quiet
            plumbing behind them. We screen what exists, build what is needed,
            care for it over time, and grow it steadily. No lock-in. No
            mystery. By design, we accept only about ten clients a year.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="mech-btn font-semibold glow-ring">
                Book a Screen <ArrowRight />
              </Button>
            </a>
            <a href="#playbook">
              <Button size="lg" variant="outline" className="rounded-full border-border bg-card/40 hover:bg-card">
                Read the Playbook
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-4 max-w-md">
            {[
              { k: "01", v: "Screen" },
              { k: "02", v: "Build" },
              { k: "03", v: "Care" },
              { k: "04", v: "Grow" },
            ].map(s => (
              <div key={s.k} className="border-l border-border pl-3">
                <div className="font-mono-soa text-primary" style={{ fontSize: "0.8rem" }}>{s.k}</div>
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
    { label: "Web", angle: 0, color: "#37b847" },
    { label: "SEO", angle: 90, color: "#ff7200" },
    { label: "AI", angle: 180, color: "#a855f7" },
    { label: "Ops", angle: 270, color: "#3b82f6" },
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
        <img src={mascotAsset.url} className="h-56 w-auto" alt="SoAtomic mascot" style={{ imageRendering: "auto" }} />
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
              <div
                className="bg-card border border-border px-3 py-1 text-xs font-medium shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-background)_60%,transparent)]"
                style={{ animation: "orbit-spin-rev 24s linear infinite" }}
              >
                <span className="mr-1" style={{ color: n.color }}>■</span>
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

/* ---------- Screen (Workshop Division) ---------- */
function Divisions() {
  const items = [
    "Digital audit",
    "Technology review",
    "Website review",
    "Accessibility baseline",
    "SEO baseline",
    "Google Workspace review",
    "Domain and DNS review",
    "Security review",
  ];
  return (
    <section id="screen" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-mono-soa text-primary text-xs uppercase tracking-widest">Division 01 · Screen</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Every relationship begins with a Screen.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Before we quote a build, we look at what already exists. The Screen
            is a plain-language review of your website, workspace, domain,
            and the accounts behind them. You leave with a written record of
            what is working, what is fragile, and what should be done next —
            whether or not we do the work.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="crt-card p-6">
            <div className="flex items-center gap-2 font-mono-soa text-xs uppercase tracking-widest text-primary">
              <Search className="h-3.5 w-3.5"/> Screen checklist
            </div>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {items.map(t => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 bg-primary shrink-0"/>
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

/* ---------- Build (Workshop Division) ---------- */
function BuildSizes() {
  const packages = [
    {
      sym: "H", num: "01", name: "Hydrogen",
      body: "The smallest coherent web presence. One page, written and built with care, wired to a domain the client already controls.",
      forWho: "A single practitioner, project, or landing page.",
      deliverables: ["One-page site", "Domain and DNS setup", "Basic analytics", "Written handoff"],
      timeline: "2–3 weeks",
    },
    {
      sym: "C", num: "02", name: "Carbon",
      body: "A small structured site — the standard shape for a service organization that needs to be understood before it is contacted.",
      forWho: "Service organizations and small nonprofits.",
      deliverables: ["Up to 8 pages", "Content architecture", "Form + inbox routing", "Baseline SEO"],
      timeline: "4–6 weeks",
    },
    {
      sym: "Ti", num: "03", name: "Titanium",
      body: "A content system the client operates. Editable pages, clear roles, and documentation that explains how each piece works.",
      forWho: "Organizations that publish regularly.",
      deliverables: ["10 structured pages", "CMS + editor training", "Content model", "Operator manual"],
      timeline: "6–8 weeks",
    },
    {
      sym: "Au", num: "04", name: "Gold",
      body: "A commerce-capable foundation. Storefront, checkout, and the small pieces that make a shop routinely operable.",
      forWho: "Small merchants and product-led organizations.",
      deliverables: ["Storefront + checkout", "Payment gateway", "Up to 100 SKUs loaded", "Fulfillment handoff"],
      timeline: "8–12 weeks",
      note: "We build the store. We do not run daily operations.",
    },
    {
      sym: "Pu", num: "05", name: "Plutonium",
      body: "A full digital foundation: site, commerce, and a cloud identity for a small team — with the documentation to run it independently.",
      forWho: "Small teams outgrowing DIY.",
      deliverables: ["Everything in Titanium and Gold", "Cloud identity (Google Workspace or Entra ID)", "Groups, shares, and permissions", "Runbook"],
      timeline: "10–14 weeks",
      note: "No hardware, printers, or badge systems.",
    },
  ];
  return (
    <section id="build" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono-soa text-primary text-xs uppercase tracking-widest">Division 02 · Build</div>
        <SectionHeader
          title="Five build packages, named for their weight."
          sub="Each package is a defined shape with defined boundaries. We say plainly what is included, what is not, and how long it takes."
          white
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {packages.map((p) => (
            <div key={p.name} className="crt-card p-5 flex flex-col">
              <div className="element-tile h-20 w-full" aria-hidden>
                <span className="absolute left-1.5 top-1 font-mono-soa text-[10px] text-primary">{p.num}</span>
                <span className="font-semibold text-3xl text-foreground" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  {p.sym}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
              <div className="mt-4 font-mono-soa uppercase tracking-widest text-primary">For</div>
              <p className="mt-1 text-foreground/90">{p.forWho}</p>
              <div className="mt-4 font-mono-soa uppercase tracking-widest text-primary">Deliverables</div>
              <ul className="mt-2 space-y-1.5">
                {p.deliverables.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-foreground/90">
                    <Check className="h-3 w-3 mt-1 text-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 font-mono-soa uppercase tracking-widest text-primary">Timeline</div>
              <p className="mt-1 text-foreground/90">{p.timeline}</p>
              {p.note && (
                <p className="mt-4 pt-3 border-t border-border/60 text-accent-orange font-medium leading-snug">
                  {p.note}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground max-w-2xl">
          Every engagement starts with a Screen so the package is chosen for
          the work at hand — never sold up.
        </p>
      </div>
    </section>
  );
}

/* ---------- Care (Workshop Division) ---------- */
function Care() {
  const items = [
    { t: "Monitoring", d: "Uptime, certificates, and DNS watched quietly in the background." },
    { t: "Updates", d: "CMS, dependencies, and platform changes reviewed on a schedule." },
    { t: "Backups", d: "Off-site backups with a documented restore procedure." },
    { t: "Workspace administration", d: "Google Workspace users, groups, and shared drives kept tidy." },
    { t: "Cloudflare", d: "DNS, caching, and edge rules maintained where they belong." },
    { t: "Content changes", d: "Small edits handled without a ticket queue." },
    { t: "Technical support", d: "A real person who already knows your setup." },
    { t: "Documentation updates", d: "Runbooks kept current as the system evolves." },
    { t: "Security review", d: "Regular checks against a written baseline." },
  ];
  return (
    <section id="care" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono-soa text-primary text-xs uppercase tracking-widest">Division 03 · Care</div>
        <SectionHeader
          title="Monthly workshop care."
          sub="After a build is launched, most systems need quiet, ongoing attention. Care is the arrangement that keeps a foundation dependable without becoming your second job."
          white
        />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map(i => (
            <div key={i.t} className="atomic-card p-6">
              <h3 className="font-semibold text-foreground">{i.t}</h3>
              <p className="mt-2 text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Growth (Workshop Division) ---------- */
function Growth() {
  const items = [
    "SEO — technical and structural, not tricks",
    "Analytics — a small number of numbers that mean something",
    "Automation — quiet workflows that remove repeated work",
    "AI integration — narrow, useful, understood",
    "Accessibility improvements — measured and documented",
    "Content strategy — publishing you can actually sustain",
    "Incremental improvements — small steady changes over time",
  ];
  return (
    <section id="growth" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div className="font-mono-soa text-primary text-xs uppercase tracking-widest">Division 04 · Growth</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Steady improvement. Not exponential promises.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Growth is the ongoing work of making a foundation more useful over
            time. We do not promise dramatic curves. We work in increments,
            measure before we change, and leave a paper trail of what moved
            and why.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="grid sm:grid-cols-2 gap-3">
            {items.map(t => (
              <li key={t} className="atomic-card flex items-start gap-4 p-4">
                <span className="h-8 w-8 bg-background grid place-items-center text-primary shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Audiences ---------- */
function Audiences() {
  const groups = [
    "Nonprofits",
    "Community organizations",
    "LGBTQIA+ organizations",
    "BIPOC organizations",
    "Veteran-owned organizations",
    "Disabled-owned organizations",
    "Service businesses",
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Who the workshop serves."
          sub="SoAtomic specializes in small organizations doing meaningful work — the kind of groups that need enterprise-quality systems without an enterprise budget or an enterprise vocabulary."
          white
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {groups.map(g => (
            <span key={g} className="crt-card px-4 py-2 font-mono-soa uppercase tracking-widest text-foreground/90">
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Workshop Maxims ---------- */
function Maxims() {
  const maxims = [
    "Clients own their work.",
    "Documentation is a deliverable.",
    "No vendor lock-in.",
    "Build only what is needed.",
    "Technology should be understandable.",
    "Measure before changing.",
    "Leave things better than we found them.",
    "Simple beats clever.",
  ];
  return (
    <section className="py-24 border-t border-border/60 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid-bg opacity-[0.18]" style={{maskImage:"linear-gradient(180deg, transparent, black, transparent)"}}/>
      <div className="mx-auto max-w-6xl px-6 relative">
        <SectionHeader
          title="The Workshop Maxims."
          sub="A short set of rules that shape every project. They are not marketing lines. They are the constraints we work inside."
          white
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {maxims.map((m, i) => (
            <div key={m} className="crt-card p-5">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Maxim {String(i+1).padStart(2,"0")}</div>
              <p className="mt-3 text-foreground font-semibold leading-snug">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  const items = [
    { icon: FileText, t: "Complete documentation", d: "Every account, integration, and setting written down and handed over." },
    { icon: KeyRound, t: "Passwords remain yours", d: "Credentials belong to the client. We keep records; we do not hold hostage." },
    { icon: Wrench, t: "Domains remain yours", d: "Domains stay in the client's registrar account, under the client's name." },
    { icon: Ruler, t: "Google Workspace remains yours", d: "The tenant is billed to and owned by the client from day one." },
    { icon: Lock, t: "Cloudflare remains yours", d: "DNS and edge configuration live in the client's account. We are delegated collaborators." },
    { icon: Check, t: "No proprietary systems", d: "We build on tools you can hire anyone to maintain after we are gone." },
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="What clients receive."
          sub="A short and specific description of what leaves the workshop with the client. The plain version — no clever framing."
          white
        />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map(it => (
            <div key={it.t} className="atomic-card p-6">
              <div className="h-9 w-9 bg-background grid place-items-center text-primary">
                <it.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{it.t}</h3>
              <p className="mt-2 text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const steps = [
    { n: "01", title: "Screen", body: "We look at what exists — website, domain, workspace, accounts. Findings written in plain language." },
    { n: "02", title: "Blueprint", body: "A short document that describes what will be built, what it will not include, and how it fits together." },
    { n: "03", title: "Build", body: "The work is done in the workshop. Progress is visible; scope stays inside the blueprint." },
    { n: "04", title: "Launch", body: "The system goes live with documentation, a handoff, and the keys transferred to the client." },
    { n: "05", title: "Care", body: "Quiet monthly attention keeps the foundation dependable and current." },
    { n: "06", title: "Grow", body: "Small, measured improvements over time. Nothing changed without a reason." },
  ];
  return (
    <section id="process" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader title="How a project moves through the workshop." white />
        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {steps.map((s) => (
            <div key={s.n} className="atomic-card p-5 relative overflow-hidden">
              <div className="flex items-center gap-2">
                <span className="font-mono-soa text-primary">{s.n}</span>
                <span className="h-px flex-1 bg-border"/>
                <span className="h-2 w-2 bg-primary animate-pulse-soft"/>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Playbook ---------- */
function Playbook() {
  const items = [
    "How SoAtomic works",
    "How projects are documented",
    "Workshop principles",
    "Service boundaries",
    "Ownership philosophy",
    "Technology standards",
  ];
  return (
    <section id="playbook" className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div className="font-mono-soa text-primary text-xs uppercase tracking-widest">The SoAtomic Playbook</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            The workshop, written down.
          </h2>
          <p className="mt-5 text-muted-foreground">
            The Playbook is the internal document that defines how SoAtomic
            operates. It is not marketing. It is the reference we work from
            and the reason clients know what to expect from us.
          </p>
          <div className="mt-8">
            <a href="#contact">
              <Button size="lg" className="mech-btn font-semibold">
                Read the Playbook <BookOpen />
              </Button>
            </a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="crt-card p-6">
            <div className="flex items-center gap-2 font-mono-soa text-xs uppercase tracking-widest text-primary">
              <BookOpen className="h-3.5 w-3.5"/> Contents
            </div>
            <ul className="mt-5 space-y-3">
              {items.map(t => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 bg-primary shrink-0"/>
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
          A workshop owner, not a salesperson.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          SoAtomic is run by Aaron — a builder who spent years on both the
          creative side of the web and the operational side of the systems
          behind it. He enjoys helping organizations understand their
          technology instead of being intimidated by it.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          The workshop is intentionally small. About ten clients a year.
          That number is the point — it keeps the work careful, the
          documentation current, and the relationships real.
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
            title="Start with a Screen."
            sub="A short conversation, then a written review of what exists and what should happen next. If we are not the right workshop for the job, we will say so."
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
            <Textarea id="needs" name="needs" required maxLength={1500} rows={5} placeholder="A few sentences about your organization and what you are trying to do." />
          </Field>
          <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full font-semibold glow-ring">
            {submitting ? "Sending…" : "Request a Screen"} <ArrowRight />
          </Button>
          <p className="text-xs text-muted-foreground text-center">One reply, within one business day. No mailing list.</p>
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
  const tools = ["Google Workspace", "Google Cloud", "Cloudflare", "Webflow", "Framer", "Lovable"];
  const links = [
    { href: "#playbook", label: "Playbook" },
    { href: "#screen", label: "Workshop Principles" },
    { href: "#care", label: "Accessibility" },
    { href: "#care", label: "Privacy" },
  ];
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 flex flex-col items-start gap-3">
          <SoAtomicLogo className="h-[4.5rem] w-auto" />
          <div className="font-mono-soa text-primary uppercase tracking-widest">Digital Workshop</div>
          <div className="text-muted-foreground">Santa Cruz County, California</div>
          <a href="mailto:hello@soatomic.com" className="text-foreground hover:text-primary">hello@soatomic.com</a>
        </div>
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Toolchain</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {tools.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Workshop</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {links.map(l => (
              <li key={l.label}><a href={l.href} className="hover:text-foreground">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-border/60 flex flex-wrap justify-between gap-3 text-muted-foreground">
        <div>© {new Date().getFullYear()} SoAtomic · A boutique digital workshop</div>
        <div>Approximately ten clients per year, by design.</div>
      </div>
    </footer>
  );
}
