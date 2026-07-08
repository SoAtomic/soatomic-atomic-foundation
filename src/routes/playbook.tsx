import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Check } from "lucide-react";
import { PageHead, H2 } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/playbook")({
  head: () => ({
    meta: [
      { title: "Playbook — SoAtomic" },
      { name: "description", content: "The SoAtomic Playbook describes how the workshop operates: principles, boundaries, documentation standards, technology standards, ownership philosophy, and working methods." },
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

const CONTENTS = [
  { t: "Workshop principles", d: "The commitments that shape every project." },
  { t: "Service boundaries", d: "What is inside the workshop's scope, and what is not." },
  { t: "Documentation standards", d: "The written record that ships with every engagement." },
  { t: "Technology standards", d: "The specific tools the workshop uses, and why." },
  { t: "Ownership philosophy", d: "How and why clients hold their own accounts and assets." },
  { t: "Working methods", d: "How a project moves through Screen, Blueprint, Build, Launch, Care, and Grow." },
];

function PlaybookPage() {
  return (
    <>
      <PageHead
        eyebrow="The SoAtomic Playbook"
        title="The workshop, written down."
        sub="The Playbook is the internal reference that defines how SoAtomic operates. It is not marketing. It is the document we work from, and the reason clients know what to expect from us."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <H2 eyebrow="Contents">What the Playbook covers.</H2>
          </div>
          <div className="md:col-span-7 grid gap-4">
            {CONTENTS.map((c) => (
              <div key={c.t} className="atomic-card p-5">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{c.t}</h3>
                </div>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 dot-grid-bg opacity-[0.18]"
          style={{ maskImage: "linear-gradient(180deg, transparent, black, transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-6 relative">
          <H2 eyebrow="Workshop Maxims" sub="A short set of rules that shape every project. Not slogans — the constraints we work inside.">
            The Workshop Maxims.
          </H2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAXIMS.map((m, i) => (
              <div key={m} className="crt-card p-5">
                <div className="font-mono-soa text-primary uppercase tracking-widest">
                  Maxim {String(i + 1).padStart(2, "0")}
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
          <H2 eyebrow="Process" sub="Six connected stages describe how a project moves through the workshop.">
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
        title="Ready to visit the workshop?"
        body="A Digital Foundation Audit is the first step. It results in a written document you own, whether or not we continue together."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}