import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Hammer, HeartPulse, TrendingUp, Check, BookOpen, Server, MessageSquare } from "lucide-react";
import { HeroOrbit } from "@/components/site/HeroOrbit";
import { Ticker } from "@/components/site/Ticker";
import { H2 } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoAtomic — We Evaluate. We Build. We Maintain. We Improve." },
      { name: "description", content: "SoAtomic is a boutique digital studio that builds Digital Infrastructure and Communications Infrastructure for organizations doing meaningful work. Every engagement follows one lifecycle: Screen, Build, Care, Growth." },
      { property: "og:title", content: "SoAtomic — Digital and Communications Infrastructure, Built to Last" },
      { property: "og:description", content: "One methodology, two disciplines. We evaluate, build, maintain, and improve the systems organizations depend on. Clients own everything." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <JourneyDiagram />
      <Services />
      <EveryProject />
      <WhoWeServe />
      <MaximsPreview />
      <ProcessPreview />
      <PlaybookTeaser />
      <CtaBanner />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div
        className="absolute inset-0 -z-10 dot-grid-bg opacity-[0.25]"
        style={{ maskImage: "radial-gradient(ellipse at 70% 30%, black 30%, transparent 70%)" }}
        aria-hidden
      />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 w-[680px] h-[680px] orbit-ring opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 w-[440px] h-[440px] orbit-ring opacity-30" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <div className="font-mono-soa text-primary uppercase tracking-widest mb-4">
            A boutique digital studio · We Evaluate. We Build. We Maintain. We Improve.
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] text-foreground">
            Infrastructure built to last, for the work that matters.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            SoAtomic builds Digital Infrastructure and Communications
            Infrastructure for nonprofits, community organizations, and
            service businesses. Every engagement follows one methodology —
            evaluate, build, maintain, improve — so complexity becomes
            reliability, and reliability becomes confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg" className="mech-btn font-semibold glow-ring">
                Schedule a Digital Foundation Audit <ArrowRight />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="rounded-full border-border bg-card/40 hover:bg-card">
                Explore Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-muted-foreground max-w-xl">
            The studio intentionally accepts approximately ten clients per
            year so every engagement receives careful attention.
          </p>
        </div>
        <div className="md:col-span-5">
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}

/* ---------- Customer journey diagram ---------- */
function JourneyDiagram() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <H2
          eyebrow="The customer journey"
          sub="One methodology, four stages, two disciplines. Whether the work is Digital Infrastructure or Communications Infrastructure, the lifecycle is the same."
        >
          Evaluate. Build. Maintain. Improve.
        </H2>

        <div className="mt-12 grid gap-4">
          {/* Stage 01 — Screen */}
          <StageRow n="01" title="Screen" body="We evaluate what already exists and produce a written, prioritized assessment. No implementation." />

          {/* Stage 02 — Build (two divisions) */}
          <div className="crt-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono-soa text-primary uppercase tracking-widest">02</span>
              <span className="h-px flex-1 bg-border" />
              <Hammer className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-3 flex items-baseline gap-3 flex-wrap">
              <h3 className="text-2xl font-semibold text-foreground">Build</h3>
              <span className="text-muted-foreground">— two divisions run in parallel.</span>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Link to="/build" className="atomic-card p-5 flex flex-col group hover:border-primary/60 transition-colors">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-primary" />
                  <div className="font-mono-soa text-primary uppercase tracking-widest">Digital Infrastructure</div>
                </div>
                <p className="mt-3 text-muted-foreground">Websites, content platforms, commerce, and cloud.</p>
                <div className="mt-4 flex flex-wrap gap-2 font-mono-soa uppercase tracking-widest text-foreground/80">
                  {["Hydrogen","Carbon","Titanium","Gold","Plutonium"].map((n) => (
                    <span key={n} className="border border-border px-2 py-1">{n}</span>
                  ))}
                </div>
              </Link>
              <Link to="/build" className="atomic-card p-5 flex flex-col group hover:border-primary/60 transition-colors">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <div className="font-mono-soa text-primary uppercase tracking-widest">Communications Infrastructure</div>
                </div>
                <p className="mt-3 text-muted-foreground">Messaging strategy, operational systems, and creative assets.</p>
                <div className="mt-4 flex flex-wrap gap-2 font-mono-soa uppercase tracking-widest text-foreground/80">
                  {["Nitrogen","Oxygen","Neon"].map((n) => (
                    <span key={n} className="border border-border px-2 py-1">{n}</span>
                  ))}
                </div>
              </Link>
            </div>
          </div>

          <StageRow n="03" title="Care" body="Monthly attention that keeps what we built healthy — updates, monitoring, documentation." />
          <StageRow n="04" title="Growth" body="Continuous improvement — optimization, expansion, automation, long-term partnership." />
        </div>

        <p className="mt-8 text-muted-foreground">
          Every Screen credits toward its corresponding Build. Nothing is bundled that you did not agree to.
        </p>
      </div>
    </section>
  );
}

function StageRow({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="crt-card p-6 md:p-8 grid md:grid-cols-12 gap-4 items-center">
      <div className="md:col-span-3 flex items-center gap-3">
        <span className="font-mono-soa text-primary uppercase tracking-widest">{n}</span>
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="md:col-span-9 text-muted-foreground">{body}</p>
    </div>
  );
}

/* ---------- Four studio services ---------- */
function Services() {
  const divs = [
    { to: "/screen", icon: Search,     num: "01", title: "Screen",
      body: "Two written assessments — Foundations for digital infrastructure and Communications for messaging and content. No implementation." },
    { to: "/build", icon: Hammer,      num: "02", title: "Build",
      body: "Two divisions, eight packages. Digital Infrastructure (Hydrogen → Plutonium) and Communications Infrastructure (Nitrogen, Oxygen, Neon)." },
    { to: "/care", icon: HeartPulse,   num: "03", title: "Care",
      body: "Monthly plans that keep the systems we built healthy after launch — updates, monitoring, documentation." },
    { to: "/growth", icon: TrendingUp, num: "04", title: "Growth",
      body: "Continuous improvement over time — accessibility, SEO, automation, and AI where it belongs." },
  ] as const;
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <H2 eyebrow="Studio Services" sub="Four connected services handle every stage of a client relationship, from first review through long-term care.">
          The four services of the studio.
        </H2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divs.map((d) => (
            <Link key={d.to} to={d.to} className="crt-card p-6 flex flex-col group hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-2">
                <span className="font-mono-soa text-primary uppercase tracking-widest">{d.num}</span>
                <span className="h-px flex-1 bg-border" />
                <d.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-muted-foreground">{d.body}</p>
              <div className="mt-6 font-mono-soa text-primary uppercase tracking-widest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Check It Out <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Every project includes ---------- */
function EveryProject() {
  const items = [
    "Client ownership of the website",
    "Client ownership of the domain",
    "Client ownership of Google Workspace",
    "Client ownership of Cloudflare",
    "No vendor lock-in",
    "Complete documentation",
    "Administrator training",
    "Accessibility best practices",
    "Security best practices",
    "Responsive design",
    "Clean, maintainable implementation",
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <H2 eyebrow="Every Project Includes" sub="A short list of things that never change, regardless of package size or budget.">
          What every client receives.
        </H2>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((t) => (
            <li key={t} className="atomic-card flex items-start gap-3 p-4">
              <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Who we serve (summary) ---------- */
function WhoWeServe() {
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
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <H2 eyebrow="Who We Serve" sub="SoAtomic specializes in small organizations doing meaningful work — groups that deserve enterprise-quality systems without enterprise budgets or vocabulary.">
            Built for organizations doing meaningful work.
          </H2>
        </div>
        <div className="md:col-span-7 flex flex-wrap gap-3">
          {groups.map((g) => (
            <span key={g} className="crt-card px-4 py-2 font-mono-soa uppercase tracking-widest text-foreground/90">
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Maxims preview ---------- */
function MaximsPreview() {
  const maxims = [
    "Clients own their work.",
    "Documentation is a deliverable.",
    "Build only what is needed.",
    "Measure before changing.",
    "Technology should be understandable.",
    "Simple beats clever.",
  ];
  return (
    <section className="py-24 border-t border-border/60 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 dot-grid-bg opacity-[0.18]"
        style={{ maskImage: "linear-gradient(180deg, transparent, black, transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-6 relative">
        <H2 eyebrow="Studio Rules" sub="A short set of rules that shape every project. Not slogans — the constraints we work inside.">
          How the studio thinks.
        </H2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {maxims.map((m, i) => (
            <div key={m} className="crt-card p-5">
              <div className="font-mono-soa text-primary uppercase tracking-widest">
                Rule {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-3 text-foreground font-semibold leading-snug">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process preview ---------- */
function ProcessPreview() {
  const steps = [
    { n: "01", t: "Screen" },
    { n: "02", t: "Blueprint" },
    { n: "03", t: "Build" },
    { n: "04", t: "Launch" },
    { n: "05", t: "Care" },
    { n: "06", t: "Grow" },
  ];
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <H2 eyebrow="Process" sub="Six connected stages describe how a project moves through the studio.">
          The studio workflow.
        </H2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((s) => (
            <div key={s.n} className="atomic-card p-5">
              <div className="font-mono-soa text-primary uppercase tracking-widest">{s.n}</div>
              <div className="mt-2 font-semibold text-foreground">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Playbook teaser ---------- */
function PlaybookTeaser() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <H2 eyebrow="The SoAtomic Playbook" sub="The internal document that defines how the studio operates: principles, boundaries, documentation standards, technology standards, and ownership philosophy.">
            The studio, written down.
          </H2>
          <div className="mt-8">
            <Link to="/playbook">
              <Button size="lg" className="mech-btn font-semibold">
                Read the Playbook <BookOpen />
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="crt-card p-6">
            <div className="font-mono-soa text-primary uppercase tracking-widest">Contents</div>
            <ul className="mt-4 space-y-2">
              {["Studio principles","Service boundaries","Documentation standards","Technology standards","Ownership philosophy","Working methods"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 bg-primary shrink-0" />
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