import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHead, H2 } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SoAtomic" },
      { name: "description", content: "Transparent pricing across the SoAtomic customer journey: Screen, Build (Digital and Communications Infrastructure), Care, and Growth. Starting prices, timelines, and boundaries stated in the open." },
      { property: "og:title", content: "Pricing — SoAtomic" },
      { property: "og:description", content: "Priced around the lifecycle: Screen → Build → Care → Growth. No hidden fees. No forms to see a number." },
    ],
  }),
  component: PricingPage,
});

const SCREENS = [
  { name: "Screen · Foundations", price: "$99", best: "Digital infrastructure assessment.", credits: "Credits toward a Digital Infrastructure Build." },
  { name: "Screen · Communications", price: "$99", best: "Messaging, brand, and content assessment.", credits: "Credits toward a Communications Infrastructure Build." },
];

const DIGITAL_BUILDS = [
  {
    name: "Hydrogen", price: "$500", timeline: "1–2 weeks",
    best: "A professional one-page website.",
    included: ["One responsive page", "Contact form", "Basic SEO", "Accessibility best practices", "Analytics", "Domain and SSL", "Documentation"],
    excluded: ["Multi-page architecture", "CMS", "E-commerce"],
  },
  {
    name: "Carbon", price: "$800", timeline: "2–4 weeks",
    best: "A small organization needing a complete website.",
    included: ["2–8 pages", "Contact forms", "Basic CMS where appropriate", "SEO foundations", "Accessibility review", "Analytics", "Documentation", "Administrator training"],
    excluded: ["Advanced CMS collections", "E-commerce"],
  },
  {
    name: "Titanium", price: "$1,200", timeline: "4–6 weeks",
    best: "An organization publishing content regularly.",
    included: ["Up to 10 pages", "CMS collections", "Blog or news", "Staff directory", "Search", "SEO configuration", "Documentation", "Administrator training"],
    excluded: ["E-commerce", "Custom applications"],
  },
  {
    name: "Gold", price: "$1,700", timeline: "6–8 weeks",
    best: "An organization selling products online.",
    included: ["Shopify configuration", "Product collections", "Payments", "Shipping", "Taxes", "Customer notifications", "SEO", "Documentation", "Training"],
    excluded: ["Ongoing merchandising", "Fulfillment operations"],
  },
  {
    name: "Plutonium", price: "$2,000", timeline: "Varies",
    best: "Google Cloud infrastructure or custom web applications.",
    included: ["Google Cloud architecture", "Cloud Run deployment", "Cloud Storage", "IAM", "Monitoring", "Logging", "Security review", "Deployment guide"],
    excluded: ["Windows or Active Directory environments", "On-premises hardware"],
  },
];

const COMMS_BUILDS = [
  {
    name: "Nitrogen", price: "$900", timeline: "2–4 weeks",
    best: "Communications strategy before creative or platform work.",
    included: ["Communications audit", "Audience strategy", "Messaging framework", "Brand voice guide", "Communications roadmap", "Campaign strategy", "Editorial calendar", "KPI framework", "Communications playbook"],
    excluded: ["Creative production", "Platform implementation"],
  },
  {
    name: "Oxygen", price: "$1,100", timeline: "3–5 weeks",
    best: "Turning strategy into documented, repeatable communications systems.",
    included: ["Social media systems", "Editorial systems", "Analytics & reporting", "Digital asset management", "Email systems", "Automation & platform integration", "Campaign operations", "Communications playbook"],
    excluded: ["Long-term content creation", "Managed posting services"],
  },
  {
    name: "Neon", price: "$1,000", timeline: "3–5 weeks",
    best: "A durable visual identity and a library of reusable creative assets.",
    included: ["Logo system", "Brand guidelines", "Typography & color palette", "Canva & social templates", "Print collateral", "Campaign assets", "Presentation decks", "Custom illustrations"],
    excluded: ["Ongoing creative production", "Advertising media buys"],
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
        title="Priced around the journey."
        sub="Every service fits one of four stages — Screen, Build, Care, Growth — with a starting price, a typical timeline, and clearly stated deliverables. No hidden fees. No forms to see a number."
      />

      {/* Stage 01 — Screen */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Stage 01 · Screen" sub="We evaluate before we build. Two assessments, each producing a written, prioritized report.">
            Screen.
          </H2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {SCREENS.map((s) => (
              <div key={s.name} className="crt-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                <div className="mt-2 font-mono-soa text-primary uppercase tracking-widest">Starting at {s.price}</div>
                <p className="mt-3 text-muted-foreground">{s.best}</p>
                <p className="mt-3 text-accent-orange">{s.credits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage 02 — Build */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Stage 02 · Build" sub="Two divisions run in parallel: Digital Infrastructure and Communications Infrastructure. The Screen you took determines the division you build in.">
            Build.
          </H2>

          <BuildDivision
            title="Digital Infrastructure"
            note="Systems the organization operates on."
            items={DIGITAL_BUILDS}
          />

          <div className="mt-16">
            <BuildDivision
              title="Communications Infrastructure"
              note="Systems the organization communicates with."
              items={COMMS_BUILDS}
            />
          </div>

          <p className="mt-10 text-muted-foreground">
            Every Screen credits toward its corresponding Build. A Foundations Screen credits toward Digital; a Communications Screen credits toward Communications.
          </p>
        </div>
      </section>

      {/* Stage 03 — Care */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Stage 03 · Care" sub="Monthly plans that keep what we built healthy — updates, monitoring, and documented attention.">
            Care.
          </H2>
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

      {/* Stage 04 — Growth */}
      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Stage 04 · Growth" sub="Continuous improvement — automations, optimization, and expansion, priced per project.">
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
                <Link to="/growth" className="text-primary hover:underline">Growth service</Link>{" "}
                for the current list of services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to see if we're a good fit?"
        body="Every engagement begins with a Screen. Fixed scope, fixed cost, and its cost credits toward your Build if you continue."
        primaryLabel="Schedule a Digital Foundation Audit"
        secondaryLabel="Read the Playbook"
        secondaryTo="/playbook"
      />
    </>
  );
}

function BuildDivision({ title, note, items }: { title: string; note: string; items: typeof DIGITAL_BUILDS }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-muted-foreground">{note}</p>
      <div className="mt-6 overflow-x-auto">
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
            {items.map((b) => (
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
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((b) => (
          <div key={b.name} className="crt-card p-6">
            <h4 className="text-xl font-semibold text-foreground">{b.name}</h4>
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
          </div>
        ))}
      </div>
    </div>
  );
}