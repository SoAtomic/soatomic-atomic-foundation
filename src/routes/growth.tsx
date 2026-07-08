import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/growth")({
  head: () => ({
    meta: [
      { title: "Growth — SoAtomic" },
      { name: "description", content: "Business automations using pre-built Formulas or custom solutions — starting at $250. Steady, measurable improvement." },
      { property: "og:title", content: "Growth — SoAtomic" },
      { property: "og:description", content: "Pre-built Formulas from $250. Custom Solutions from $500. Automations, integrations, and steady improvement." },
    ],
  }),
  component: GrowthPage,
});

const SERVICES = [
  { t: "Accessibility improvements", d: "Prioritized changes measured against a written baseline." },
  { t: "SEO improvements", d: "Structural and content work grounded in the site as it actually exists." },
  { t: "Analytics consulting", d: "A small number of numbers that mean something, reviewed on a schedule." },
  { t: "AI integration", d: "Narrow, useful applications — never as decoration." },
  { t: "Automation", d: "Quiet workflows that remove repeated manual work." },
  { t: "Google Workspace projects", d: "Groups, sharing, delegated administration, and cleanup." },
  { t: "Google Cloud consulting", d: "Cloud Run, IAM, monitoring, and cost review." },
  { t: "Website enhancements", d: "New pages, components, or integrations built to match the existing system." },
  { t: "Performance optimization", d: "Measured before, measured after, documented in between." },
  { t: "Content strategy", d: "A publishing rhythm the organization can actually sustain." },
];

function GrowthPage() {
  return (
    <>
      <PageHead
        eyebrow="Division 04 · Growth"
        title="Steady improvement. Not explosive promises."
        sub="Growth is the ongoing work of making a foundation more useful over time. We do not promise dramatic curves. We work in increments, measure before we change, and leave a paper trail of what moved and why."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="crt-card p-6 md:p-8">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Pre-Built Formulas</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">Starting at $250</div>
              <p className="mt-3 text-muted-foreground">
                Ready-made automations for the workflows most organizations
                repeat — deployed, documented, and handed off.
              </p>
            </div>
            <div className="crt-card p-6 md:p-8">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Custom Solutions</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">Starting at $500</div>
              <p className="mt-3 text-muted-foreground">
                Scoped, one-off automations built to fit a specific process,
                with a written scope before anything begins.
              </p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.t} className="atomic-card p-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{s.t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Ready to plan a Growth project?"
        body="Every Growth project starts with a short conversation and a written scope. Nothing begins without both."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}