import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/screen")({
  head: () => ({
    meta: [
      { title: "Screen — SoAtomic" },
      { name: "description", content: "The Screen is a written, prioritized review of a client's existing website, workspace, domain, and accounts. It begins every SoAtomic engagement." },
      { property: "og:title", content: "Screen — SoAtomic" },
      { property: "og:description", content: "A plain-language review of what already exists, before anything is proposed or built." },
    ],
  }),
  component: ScreenPage,
});

const REVIEWS = [
  { t: "Digital Foundation Audit", d: "A single written report describing the current state of every digital asset the organization depends on." },
  { t: "Website Review", d: "Structure, content, performance, and maintainability of the current site." },
  { t: "Accessibility Review", d: "A WCAG-aligned assessment with prioritized, plain-language recommendations." },
  { t: "SEO Baseline", d: "Indexing, structure, metadata, and a short list of the changes most worth making." },
  { t: "Domain & DNS Review", d: "Ownership, registrar posture, and DNS configuration examined for stability and risk." },
  { t: "Google Workspace Review", d: "Users, groups, sharing, security posture, and administrative practices." },
  { t: "Security Review", d: "Accounts, authentication, and platform posture against a written baseline." },
  { t: "Performance Review", d: "Measurable performance data with a prioritized short list of improvements." },
];

function ScreenPage() {
  return (
    <>
      <PageHead
        eyebrow="Division 01 · Screen"
        title="Every relationship begins with a Screen."
        sub="Before we quote a build or a care plan, we look at what already exists. The Screen produces a written, prioritized record of what is working, what is fragile, and what should be addressed next — whether or not we do the work."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 crt-card p-6 md:p-8 grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-mono-soa text-primary uppercase tracking-widest">Atomic Screen</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">$99</div>
              <p className="mt-2 text-muted-foreground">
                Website, accessibility, SEO, domain, DNS, and security reviewed and written up as one prioritized report.
              </p>
            </div>
            <div>
              <div className="font-mono-soa text-primary uppercase tracking-widest">Atomic Screen + Cloud</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">$199</div>
              <p className="mt-2 text-muted-foreground">
                Everything in the Atomic Screen plus a Google Workspace and Google Cloud audit.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {REVIEWS.map((r) => (
              <div key={r.t} className="atomic-card p-6">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">{r.t}</h3>
                </div>
                <p className="mt-3 text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 crt-card p-6 md:p-8">
            <div className="font-mono-soa text-primary uppercase tracking-widest">How the Screen works</div>
            <ol className="mt-4 space-y-3 list-decimal pl-6 text-foreground/90">
              <li>A short scoping conversation to understand the organization and its systems.</li>
              <li>A hands-on review of each area listed above, using written checklists.</li>
              <li>A single document with findings, priorities, and a plain-language recommendation.</li>
              <li>A walk-through of the document so nothing is left ambiguous.</li>
            </ol>
            <p className="mt-6 text-muted-foreground">
              Every recommendation carries a clear reason. Nothing is proposed without one.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Ready to see what a Screen reveals?"
        body="The Screen is a fixed-scope engagement. You leave with a document you can act on — with or without us."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}