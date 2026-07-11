import { createFileRoute } from "@tanstack/react-router";
import { Check, Server, MessageSquare } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/build")({
  head: () => ({
    meta: [
      { title: "Build — SoAtomic" },
      { name: "description", content: "Build turns Screen recommendations into working systems. Two divisions: Digital Infrastructure (Hydrogen, Carbon, Titanium, Gold, Plutonium) and Communications Infrastructure (Nitrogen, Oxygen, Neon). Every package includes documentation, training, and full client ownership." },
      { property: "og:title", content: "Build — SoAtomic" },
      { property: "og:description", content: "Two divisions — Digital Infrastructure and Communications Infrastructure — with eight defined packages, transparent pricing, and full client ownership." },
    ],
  }),
  component: BuildPage,
});

const PACKAGES = [
  {
    sym: "H", num: "01", name: "Hydrogen", price: "$500",
    forWho: "Organizations needing a professional one-page website.",
    body: "The smallest coherent web presence, built with care and connected to a domain the client already controls.",
    includes: [
      "One responsive page",
      "Contact form",
      "Basic SEO",
      "Accessibility best practices",
      "Google Analytics",
      "Domain connection",
      "SSL configuration",
      "Documentation",
      "Client ownership of all assets",
    ],
    timeline: "1–2 weeks",
  },
  {
    sym: "C", num: "02", name: "Carbon", price: "$800",
    forWho: "Small organizations needing a complete website.",
    body: "A small structured site — the standard shape for a service organization that needs to be understood before it is contacted.",
    includes: [
      "2–8 pages",
      "Responsive design",
      "Contact forms",
      "Basic CMS where appropriate",
      "SEO foundations",
      "Accessibility review",
      "Analytics",
      "Documentation",
      "Administrator training",
      "Full ownership transfer",
    ],
    timeline: "2–4 weeks",
  },
  {
    sym: "N", num: "03", name: "Nitrogen", price: "$900",
    subtitle: "Communications Strategy",
    forWho: "Organizations that need a strategy before investing in creative work or technology.",
    body: "Nitrogen defines goals, audiences, messaging, campaigns, and a communications roadmap so every future decision is intentional and measurable — strategy before execution.",
    includes: [
      "Communications Audit",
      "Audience Strategy",
      "Messaging Framework",
      "Brand Voice Guide",
      "Communications Roadmap",
      "Campaign Strategy",
      "Editorial Calendar",
      "Communications Governance",
      "KPI Framework",
      "Communications Playbook",
    ],
    timeline: "2–4 weeks",
    note: "Available campaigns include fundraising, membership, events, product & service launches, volunteer recruitment, community awareness, and advocacy.",
  },
  {
    sym: "O", num: "04", name: "Oxygen", price: "$1,100",
    subtitle: "Communications Systems",
    forWho: "Organizations ready to turn strategy into repeatable, documented operations.",
    body: "Oxygen builds the operational systems that keep communications running consistently — publishing workflows, analytics, and automation the client owns and understands. Systems before software.",
    includes: [
      "Social Media Systems",
      "Editorial Systems",
      "Communications Operations",
      "Analytics & Reporting",
      "Digital Asset Management",
      "Communications Automation",
      "Email Communications Systems",
      "Campaign Operations",
      "Platform Integration",
      "Communications Playbook",
    ],
    timeline: "3–5 weeks",
    note: "Typical platforms: Google Workspace, Google Drive, HubSpot, Buffer, Later, Meta Business Suite, Google Analytics, Looker Studio, Canva, Zapier, Make, Mailchimp, Craft.",
  },
  {
    sym: "Ne", num: "05", name: "Neon", price: "$1,000",
    subtitle: "Creative Identity",
    forWho: "Organizations that need a durable visual identity and a library of reusable creative assets.",
    body: "Neon delivers professional design systems and creative assets that support long-term organizational communications — documented, reusable, and fully owned by the client.",
    includes: [
      "Logo Systems",
      "Brand Guidelines",
      "Typography",
      "Color Palette",
      "Canva Templates",
      "Social Media Templates",
      "Print Collateral",
      "Campaign Assets",
      "Presentation Decks",
      "Custom Illustrations",
    ],
    timeline: "3–5 weeks",
    note: "Offerings include brand identity, social media graphics, campaign creative, marketing collateral, presentation design, infographics, template libraries, and illustration & icons.",
  },
  {
    sym: "Ti", num: "06", name: "Titanium", price: "$1,200",
    forWho: "Organizations managing content regularly.",
    body: "A content system the client operates — editable pages, clear roles, and documentation that explains each moving part.",
    includes: [
      "Up to 10 pages",
      "CMS collections",
      "Blog or news",
      "Staff directory",
      "Events or resources",
      "Search functionality",
      "Forms",
      "Analytics",
      "SEO configuration",
      "Accessibility review",
      "Documentation",
      "Administrator training",
    ],
    timeline: "4–6 weeks",
  },
  {
    sym: "Au", num: "07", name: "Gold", price: "$1,700",
    forWho: "Organizations selling products online.",
    body: "A commerce-capable foundation on Shopify, with the small pieces that make a shop routinely operable.",
    includes: [
      "Shopify configuration",
      "Product collections",
      "Payments",
      "Shipping",
      "Taxes",
      "Customer notifications",
      "Analytics",
      "SEO",
      "Documentation",
      "Training",
    ],
    timeline: "6–8 weeks",
    note: "We configure and hand off the store. Ongoing merchandising is not included.",
  },
  {
    sym: "Pu", num: "08", name: "Plutonium", price: "$2,000",
    forWho: "Organizations needing Google Cloud infrastructure or a custom web application.",
    body: "Cloud architecture and small custom applications on Google Cloud, with the operational documentation to run them.",
    includes: [
      "Google Cloud architecture",
      "Cloud Run deployment",
      "Cloud Storage",
      "IAM configuration",
      "Monitoring",
      "Logging",
      "Security review",
      "Documentation",
      "Deployment guide",
    ],
    timeline: "Varies by project",
  },
];

function BuildPage() {
  const digital = PACKAGES.filter((p) => ["Hydrogen", "Carbon", "Titanium", "Gold", "Plutonium"].includes(p.name));
  const comms = PACKAGES.filter((p) => ["Nitrogen", "Oxygen", "Neon"].includes(p.name));
  return (
    <>
      <PageHead
        eyebrow="Service 02 · Build"
        title={<span className="whitespace-nowrap">Two divisions. Eight packages.</span>}
        sub="Build turns Screen recommendations into working systems. Two divisions run in parallel: Digital Infrastructure and Communications Infrastructure. Each package is a defined shape with defined boundaries — scope, deliverables, timeline, and starting price stated plainly."
      />

      {/* Digital Infrastructure */}
      <section className="pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <DivisionHeader
            icon={<Server className="h-5 w-5 text-primary" />}
            eyebrow="Division A"
            title="Digital Infrastructure"
            body="The systems an organization operates on: websites, content platforms, commerce, and cloud. These packages implement recommendations from a Foundations Screen."
          />
          <div className="mt-10 space-y-6">
            {digital.map((p) => <PackageCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* Communications Infrastructure */}
      <section className="pt-10 pb-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <DivisionHeader
            icon={<MessageSquare className="h-5 w-5 text-primary" />}
            eyebrow="Division B"
            title="Communications Infrastructure"
            body="The systems an organization communicates with: strategy, operational systems, and creative assets. These packages implement recommendations from a Communications Screen."
          />
          <div className="mt-10 space-y-6">
            {comms.map((p) => <PackageCard key={p.name} p={p} />)}
          </div>
          <p className="mt-10 text-muted-foreground">
            Every engagement starts with a Screen so the right package is chosen for the work at hand — never sold up. The cost of the Screen is credited toward the corresponding Build.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Start with a Blueprint."
        body="Once a Screen is complete, the next step is a written Blueprint that describes exactly what will be built and what it will not include."
        primaryLabel="Start with a Blueprint"
      />
    </>
  );
}

function DivisionHeader({ icon, eyebrow, title, body }: { icon: React.ReactNode; eyebrow: string; title: string; body: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 font-mono-soa text-primary uppercase tracking-widest">
          {icon}
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">{title}</h2>
      </div>
      <p className="md:col-span-8 text-muted-foreground text-lg">{body}</p>
    </div>
  );
}

type Package = typeof PACKAGES[number];
function PackageCard({ p }: { p: Package }) {
  return (
    <article className="crt-card p-6 md:p-8 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="element-tile h-24 w-24" aria-hidden>
                  <span className="absolute left-1.5 top-1 font-mono-soa text-primary">{p.num}</span>
                  <span className="font-semibold text-4xl text-foreground" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    {p.sym}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{p.name}</h2>
                {"subtitle" in p && p.subtitle && (
                  <div className="mt-1 text-muted-foreground">{p.subtitle}</div>
                )}
                <div className="mt-2 font-mono-soa text-primary uppercase tracking-widest">
                  Starting at {p.price}
                </div>
                <div className="mt-1 text-muted-foreground">Timeline: {p.timeline}</div>
              </div>
              <div className="md:col-span-9">
                <div className="font-mono-soa text-primary uppercase tracking-widest">Best for</div>
                <p className="mt-1 text-foreground/90">{p.forWho}</p>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
                <div className="mt-6 font-mono-soa text-primary uppercase tracking-widest">Includes</div>
                <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/90">
                      <Check className="h-3.5 w-3.5 mt-1 text-primary shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="mt-6 pt-4 border-t border-border/60 text-accent-orange">{p.note}</p>
                )}
              </div>
    </article>
  );
}