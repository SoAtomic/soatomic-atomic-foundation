import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/growth")({
  head: () => ({
    meta: [
      { title: "Growth — SoAtomic" },
      { name: "description", content: "Growth services are available after launch, billed at $125/hour or fixed project pricing. Steady, measurable improvement — not explosive promises." },
      { property: "og:title", content: "Growth — SoAtomic" },
      { property: "og:description", content: "Accessibility, SEO, analytics, automation, AI integration, and content strategy — done in increments, with reasons attached." },
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
          <div className="crt-card p-6 md:p-8 flex flex-wrap items-baseline gap-6">
            <div>
              <div className="font-mono-soa text-primary uppercase tracking-widest">How it is billed</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">$125/hour</div>
              <div className="text-muted-foreground">or fixed project pricing on request</div>
            </div>
            <p className="text-muted-foreground max-w-xl">
              Growth work is scoped one project at a time. Larger initiatives
              can be quoted as fixed engagements; smaller improvements
              typically run on a small monthly retainer of hours.
            </p>
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