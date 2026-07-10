import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "Care — SoAtomic" },
      { name: "description", content: "Monthly care plans that keep websites, workspaces, and infrastructure healthy after launch. Plans matched to the Hydrogen, Carbon, Titanium, Gold, and Plutonium build packages." },
      { property: "og:title", content: "Care — SoAtomic" },
      { property: "og:description", content: "Monthly studio care — updates, monitoring, documentation, and a real person who already knows your setup." },
    ],
  }),
  component: CarePage,
});

const PLANS = [
  {
    name: "Hydrogen Care", price: "$100",
    includes: ["Security updates", "Monthly health review", "30 minutes of content updates", "Email support"],
  },
  {
    name: "Carbon Care", price: "$200",
    includes: ["Everything in Hydrogen Care", "One hour of updates", "Analytics review", "Quarterly website review", "Priority support"],
  },
  {
    name: "Titanium Care", price: "$300",
    includes: ["Everything in Carbon Care", "Google Workspace administration", "DNS management", "Accessibility review", "Two hours of updates", "Documentation maintenance"],
  },
  {
    name: "Gold Care", price: "$400",
    includes: ["Everything in Titanium Care", "Shopify support", "Product updates", "Store monitoring", "E-commerce troubleshooting"],
  },
  {
    name: "Plutonium Care", price: "$500",
    includes: ["Everything in Gold Care", "Google Cloud monitoring", "Infrastructure maintenance", "Deployment assistance", "Security reviews", "Performance optimization"],
  },
];

function CarePage() {
  return (
    <>
      <PageHead
        eyebrow="Service 03 · Care"
        title="Monthly studio care."
        sub="After a build launches, most systems need quiet, ongoing attention. Care is the arrangement that keeps a foundation dependable without becoming your second job."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div key={p.name} className="crt-card p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-foreground">{p.name}</h2>
              <div className="mt-2 font-mono-soa text-primary uppercase tracking-widest">
                Starting at {p.price}/month
              </div>
              <ul className="mt-6 space-y-2">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-foreground/90">
                    <Check className="h-3.5 w-3.5 mt-1 text-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12">
          <div className="atomic-card p-6 md:p-8">
            <div className="font-mono-soa text-primary uppercase tracking-widest">The point of Care</div>
            <p className="mt-3 text-muted-foreground">
              A Care plan is not a retainer to keep a designer on call. It is
              scheduled attention: updates applied on a cadence, backups
              verified, documentation kept current, and one person who
              already knows the setup answering the phone.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Match a Care plan to your build."
        body="Care plans are optional and cancellable at any time. Nothing is bundled that you did not agree to."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}