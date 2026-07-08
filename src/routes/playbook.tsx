import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHead, H2 } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "Playbook — SoAtomic" },
      { name: "description", content: "The SoAtomic Playbook describes how the studio operates: principles, boundaries, documentation standards, technology standards, ownership philosophy, and working methods." },
      { property: "og:title", content: "Playbook — SoAtomic" },
      { property: "og:description", content: "The internal document that defines how SoAtomic works. Written down so clients know what to expect." },
    ],
  }),
  component: PlaybookPage,
});

const MAXIMS = [
  "Clients own their work.",
  "Documentation is a deliverable.",
  "Build only what is needed.",
  "Measure before changing.",
  "Technology should be understandable.",
  "Leave systems better than you found them.",
  "Simple beats clever.",
  "Security begins with good habits.",
  "Accessibility is a requirement, not an upgrade.",
];

const TEASERS = [
  {
    title: "Studio Principles",
    body: [
      "We are guided by a set of principles that shape how decisions are made. At SoAtomic, those principles include transparency, simplicity, documentation, accessibility, security, and long-term thinking.",
      "These aren't marketing promises—they're practical commitments that influence every recommendation, every project, and every line of work we deliver.",
    ],
  },
  {
    title: "Service Boundaries",
    body: [
      "Knowing what we don't do is just as important as knowing what we do. The Playbook clearly defines the studio's areas of expertise so clients always know what to expect.",
      "By maintaining clear service boundaries, we can focus on delivering exceptional work within our specialty instead of trying to be everything to everyone.",
    ],
  },
  {
    title: "Documentation Standards",
    body: [
      "Every project leaves behind more than a finished product—it leaves behind a written record. Documentation explains how systems are configured, where important resources live, and how future changes can be made with confidence.",
      "We believe documentation isn't an optional extra. It's part of the deliverable and one of the ways we ensure clients remain in control of their technology.",
    ],
  },
  {
    title: "Technology Standards",
    body: [
      "We intentionally work with a carefully selected technology stack rather than every platform available. By focusing on trusted tools, we can provide deeper expertise, stronger support, and more consistent long-term results.",
      "Every technology we recommend is chosen because it aligns with our values of reliability, security, maintainability, and client ownership—not because it's the newest trend.",
    ],
  },
  {
    title: "Ownership Philosophy",
    body: [
      "Your organization should own its digital foundation. That means your website, domain, Google Workspace, Cloudflare account, documentation, and other critical assets remain under your control.",
      "Our role is to build, guide, and support—not to create dependence. If you ever decide to move on, your systems should move with you.",
    ],
  },
  {
    title: "Working Methods",
    body: [
      "Every project follows the same process: Screen, Blueprint, Build, Launch, Care, and Grow. Each stage has a clear purpose, defined deliverables, and measurable outcomes.",
      "This structured approach keeps projects organized, reduces surprises, and ensures every decision is made with a clear understanding of both today's needs and tomorrow's maintenance.",
    ],
  },
];

function PlaybookPage() {
  return (
    <>
      <PageHead
        eyebrow="The SoAtomic Playbook"
        title="The studio, written down."
        sub="The Playbook is the internal reference that defines how SoAtomic operates. It is not marketing. It is the document we work from, and the reason clients know what to expect from us."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Inside the Playbook</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              The SoAtomic Playbook is the studio's operating manual. It explains how projects are planned, built, documented, and supported from beginning to end. Rather than relying on unwritten practices, the Playbook defines the standards that guide every client engagement.
            </p>
            <p>
              Whether you're considering your first project or have worked with us for years, the Playbook provides a clear picture of how the studio operates and what you can expect from every stage of the relationship.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {TEASERS.map((t) => (
              <AccordionItem key={t.title} value={t.title}>
                <AccordionTrigger className="text-left text-lg text-foreground">
                  {t.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {t.body.map((p, i) => (
                      <p key={i} className="text-muted-foreground">{p}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 border-t border-border/60 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 dot-grid-bg opacity-[0.18]"
          style={{ maskImage: "linear-gradient(180deg, transparent, black, transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-6 relative">
          <H2 eyebrow="Studio Rules" sub="A short set of rules that shape every project. Not slogans — the constraints we work inside.">
            SoAtomic Rules.
          </H2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAXIMS.map((m, i) => (
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

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Trust & Ownership" sub="What every client receives, stated plainly.">
            No hostage situations.
          </H2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              "Their website",
              "Their domain",
              "Their Google Workspace",
              "Their Cloudflare account",
              "Their content",
              "Their documentation",
            ].map((t) => (
              <div key={t} className="atomic-card p-5 flex items-start gap-3">
                <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span className="text-foreground/90">
                  Client retains ownership of <span className="text-foreground font-medium">{t.toLowerCase()}</span>.
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground max-w-3xl">
            SoAtomic never holds client assets hostage and never relies on
            proprietary systems to keep clients dependent. Any other
            capable provider can pick up from the documentation we leave
            behind.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Process" sub="Six connected stages describe how a project moves through the studio.">
            Screen → Blueprint → Build → Launch → Care → Grow.
          </H2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { n: "01", t: "Screen", d: "A written review of what already exists." },
              { n: "02", t: "Blueprint", d: "A short document describing what will be built." },
              { n: "03", t: "Build", d: "The work is done inside the blueprint." },
              { n: "04", t: "Launch", d: "The system goes live with documentation and keys." },
              { n: "05", t: "Care", d: "Quiet monthly attention keeps it dependable." },
              { n: "06", t: "Grow", d: "Small, measured improvements over time." },
            ].map((s) => (
              <div key={s.n} className="atomic-card p-5">
                <div className="font-mono-soa text-primary uppercase tracking-widest">{s.n}</div>
                <div className="mt-2 font-semibold text-foreground">{s.t}</div>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to visit the studio?"
        body="A Digital Foundation Audit is the first step. It results in a written document you own, whether or not we continue together."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}