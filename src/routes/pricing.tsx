import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHead, H2 } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SoAtomic" },
      { name: "description", content: "Transparent pricing for every SoAtomic package and care plan. Starting prices, timelines, deliverables, and boundaries are all stated in the open." },
      { property: "og:title", content: "Pricing — SoAtomic" },
      { property: "og:description", content: "No hidden fees. No forms to see prices. Every service has a starting price, timeline, and clear scope." },
    ],
  }),
  component: PricingPage,
});

const BUILDS = [
  {
    name: "Hydrogen", price: "$500", timeline: "1–2 weeks",
    best: "A professional one-page website.",
    included: ["One responsive page", "Contact form", "Basic SEO", "Accessibility best practices", "Analytics", "Domain and SSL", "Documentation"],
    excluded: ["Multi-page architecture", "CMS", "E-commerce"],
    next: "Book a Digital Foundation Audit.",
  },
  {
    name: "Carbon", price: "$800", timeline: "2–4 weeks",
    best: "A small organization needing a complete website.",
    included: ["2–8 pages", "Contact forms", "Basic CMS where appropriate", "SEO foundations", "Accessibility review", "Analytics", "Documentation", "Administrator training"],
    excluded: ["Advanced CMS collections", "E-commerce"],
    next: "Book a Digital Foundation Audit.",
  },
  {
    name: "Titanium", price: "$1,200", timeline: "4–6 weeks",
    best: "An organization publishing content regularly.",
    included: ["Up to 10 pages", "CMS collections", "Blog or news", "Staff directory", "Search", "SEO configuration", "Documentation", "Administrator training"],
    excluded: ["E-commerce", "Custom applications"],
    next: "Book a Digital Foundation Audit.",
  },
  {
    name: "Gold", price: "$1,700", timeline: "6–8 weeks",
    best: "An organization selling products online.",
    included: ["Shopify configuration", "Product collections", "Payments", "Shipping", "Taxes", "Customer notifications", "SEO", "Documentation", "Training"],
    excluded: ["Ongoing merchandising", "Fulfillment operations"],
    next: "Book a Digital Foundation Audit.",
  },
  {
    name: "Plutonium", price: "$2,000", timeline: "Varies",
    best: "Google Cloud infrastructure or custom web applications.",
    included: ["Google Cloud architecture", "Cloud Run deployment", "Cloud Storage", "IAM", "Monitoring", "Logging", "Security review", "Deployment guide"],
    excluded: ["Windows or Active Directory environments", "On-premises hardware"],
    next: "Book a Digital Foundation Audit.",
  },
];

const CARE = [
  { name: "Hydrogen Care", price: "$100/month", best: "Hydrogen sites.", includes: ["Security updates", "Monthly health review", "30 min content updates", "Email support"] },
  { name: "Carbon Care", price: "$200/month", best: "Carbon sites.", includes: ["+ One hour of updates", "+ Analytics review", "+ Quarterly review", "+ Priority support"] },
  { name: "Titanium Care", price: "$300/month", best: "Titanium sites.", includes: ["+ Google Workspace admin", "+ DNS management", "+ Accessibility review", "+ Two hours of updates"] },
  { name: "Gold Care", price: "$400/month", best: "Gold stores.", includes: ["+ Shopify support", "+ Product updates", "+ Store monitoring", "+ E-commerce troubleshooting"] },
  { name: "Plutonium Care", price: "$500/month", best: "Plutonium infrastructure.", includes: ["+ Cloud monitoring", "+ Infrastructure maintenance", "+ Deployment assistance", "+ Performance optimization"] },
];

function PricingPage() {
  return (
    <>
      <PageHead
        eyebrow="Pricing"
        title="Transparent pricing, in the open."
        sub="Every service has a starting price, a typical timeline, and clearly stated deliverables. No hidden fees. No forms to see a number."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Build packages">Build.</H2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Package</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Starting</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Timeline</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Best for</th>
                </tr>
              </thead>
              <tbody>
                {BUILDS.map((b) => (
                  <tr key={b.name} className="border-b border-border/50 align-top">
                    <td className="py-4 pr-4 font-semibold text-foreground">{b.name}</td>
                    <td className="py-4 pr-4 text-foreground/90">{b.price}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{b.timeline}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{b.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUILDS.map((b) => (
              <div key={b.name} className="crt-card p-6">
                <h3 className="text-xl font-semibold text-foreground">{b.name}</h3>
                <div className="mt-1 font-mono-soa text-primary uppercase tracking-widest">
                  Starting at {b.price} · {b.timeline}
                </div>
                <div className="mt-4 font-mono-soa text-primary uppercase tracking-widest">Included</div>
                <ul className="mt-2 space-y-1.5">
                  {b.included.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/90">
                      <Check className="h-3.5 w-3.5 mt-1 text-primary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 font-mono-soa uppercase tracking-widest text-accent-orange">Not included</div>
                <ul className="mt-2 space-y-1.5">
                  {b.excluded.map((i) => (
                    <li key={i} className="text-muted-foreground">— {i}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-border/60 text-muted-foreground">
                  Next step: {b.next}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Care plans">Care.</H2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Plan</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Starting</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Best for</th>
                  <th className="py-3 pr-4 font-mono-soa uppercase tracking-widest text-primary">Adds</th>
                </tr>
              </thead>
              <tbody>
                {CARE.map((c) => (
                  <tr key={c.name} className="border-b border-border/50 align-top">
                    <td className="py-4 pr-4 font-semibold text-foreground">{c.name}</td>
                    <td className="py-4 pr-4 text-foreground/90">{c.price}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{c.best}</td>
                    <td className="py-4 pr-4 text-muted-foreground">{c.includes.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Growth services" sub="Business automations, priced per project.">
            Growth.
          </H2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="crt-card p-6 md:p-8">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Pre-Built Formulas</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">Starting at $250</div>
              <p className="mt-2 text-muted-foreground">
                Ready-made automations for common workflows — deployed and documented.
              </p>
            </div>
            <div className="crt-card p-6 md:p-8">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Custom Solutions</div>
              <div className="mt-2 text-2xl font-semibold text-foreground">Starting at $500</div>
              <p className="mt-2 text-muted-foreground">
                Scoped, one-off automations built to fit your specific process. See the{" "}
                <Link to="/growth" className="text-primary hover:underline">Growth division</Link>{" "}
                for the current list of services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to see if we're a good fit?"
        body="Every engagement begins with a Digital Foundation Audit. Fixed scope, fixed cost, and no obligation to continue."
        primaryLabel="Schedule a Digital Foundation Audit"
        secondaryLabel="Read the Playbook"
        secondaryTo="/playbook"
      />
    </>
  );
}