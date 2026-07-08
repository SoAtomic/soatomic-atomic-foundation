import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/build")({
  head: () => ({
    meta: [
      { title: "Build — SoAtomic" },
      { name: "description", content: "Five right-sized build packages, from a one-page website to Google Cloud infrastructure. Every package includes documentation, training, and full client ownership." },
      { property: "og:title", content: "Build — SoAtomic" },
      { property: "og:description", content: "Hydrogen, Carbon, Titanium, Gold, Plutonium — five defined packages with defined boundaries and transparent pricing." },
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
    sym: "Ti", num: "03", name: "Titanium", price: "$1,200",
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
    sym: "Au", num: "04", name: "Gold", price: "$1,700",
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
    sym: "Pu", num: "05", name: "Plutonium", price: "$2,000",
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
  return (
    <>
      <PageHead
        eyebrow="Division 02 · Build"
        title="Five packages, named for their weight."
        sub="Each package is a defined shape with defined boundaries. Scope, deliverables, timeline, and starting price are stated plainly."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {PACKAGES.map((p) => (
            <article key={p.name} className="crt-card p-6 md:p-8 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="element-tile h-24 w-24" aria-hidden>
                  <span className="absolute left-1.5 top-1 font-mono-soa text-primary">{p.num}</span>
                  <span className="font-semibold text-4xl text-foreground" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    {p.sym}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{p.name}</h2>
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
          ))}
          <p className="text-muted-foreground max-w-3xl">
            Every engagement starts with a Screen so the right package is
            chosen for the work at hand — never sold up.
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