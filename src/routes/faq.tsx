import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SoAtomic" },
      { name: "description", content: "Answers to common questions about working with SoAtomic — how projects begin, who owns what, how pricing works, and why the workshop is intentionally small." },
      { property: "og:title", content: "FAQ — SoAtomic" },
      { property: "og:description", content: "Working together, ownership, pricing, technology, support, and philosophy — answered plainly." },
    ],
  }),
  component: FaqPage,
});

type Q = { q: string; a: string };
type Group = { title: string; items: Q[] };

const GROUPS: Group[] = [
  {
    title: "Working Together",
    items: [
      { q: "How do projects begin?", a: "Every engagement begins with a Digital Foundation Audit — a short scoping conversation followed by a written review of the organization's current systems. Nothing is quoted or built until that document exists." },
      { q: "Do you require contracts?", a: "Yes. Every project has a short written agreement describing scope, deliverables, timeline, price, and ownership. Care plans are month-to-month and cancellable at any time." },
      { q: "How many clients do you accept each year?", a: "Approximately ten. The limit is deliberate and keeps the work careful, the documentation current, and support responsive." },
      { q: "Do you work remotely?", a: "Most work happens remotely. In-person meetings are available for organizations in and around Santa Cruz County, California." },
      { q: "Do you work outside California?", a: "Yes. The workshop is based in California, but clients are located throughout the United States." },
    ],
  },
  {
    title: "Ownership",
    items: [
      { q: "Who owns my website?", a: "You do. The site is built in your accounts, hosted on your services, and handed over with complete documentation." },
      { q: "Who owns my domain?", a: "You do. Domains stay in the client's registrar account under the client's name. The workshop is a delegated collaborator, never the owner." },
      { q: "Who owns my Google Workspace?", a: "You do. Google Workspace is billed to and owned by the client. Administrative access is granted to the workshop only as needed and can be revoked at any time." },
      { q: "Can I leave at any time?", a: "Yes. Care plans cancel monthly. Because ownership sits with the client, there is nothing to unwind — access is simply removed." },
      { q: "What happens if I stop using SoAtomic?", a: "You keep everything: site, domain, workspace, Cloudflare, and documentation. Another provider can pick up from the same paper trail without a rebuild." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "Why do you publish pricing?", a: "Because hiding it wastes everyone's time. Published starting prices let you decide whether a conversation makes sense before making one." },
      { q: "Are there hidden fees?", a: "No. If a project needs something outside the package, it is quoted in writing before any work begins." },
      { q: "Do you charge hourly?", a: "Build packages and Care plans are fixed. Growth work is billed at $125/hour or as a fixed-scope project." },
      { q: "What is included in each package?", a: "The Build and Pricing pages describe each package in detail, including what is and is not included." },
      { q: "How are change requests handled?", a: "Small changes inside a Care plan use that plan's hours. Larger changes are quoted separately with a written scope before starting." },
    ],
  },
  {
    title: "Technology",
    items: [
      { q: "Why Google Workspace?", a: "It is dependable, well-documented, and controllable by a small team without a dedicated administrator." },
      { q: "Why Google Cloud?", a: "It gives small organizations enterprise-grade infrastructure without requiring an enterprise operations team." },
      { q: "Why Cloudflare?", a: "It handles DNS, TLS, caching, and basic edge security cleanly, and leaves ownership with the client." },
      { q: "Why Webflow?", a: "Webflow is a strong fit for content sites that clients want to edit themselves without giving up structure." },
      { q: "Why Framer?", a: "Framer is a good fit for marketing sites and portfolios that need to move quickly with high visual polish." },
      { q: "Do you support WordPress?", a: "The workshop does not build new WordPress sites. Existing WordPress sites can be reviewed as part of a Digital Foundation Audit and migrated where appropriate." },
      { q: "Do you build custom software?", a: "Small, focused web applications on Google Cloud are part of the Plutonium package. Larger custom software engagements are referred out." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "How quickly do you respond?", a: "Business hours, within one business day. Care plan clients receive prioritized response times." },
      { q: "How are emergencies handled?", a: "Care plans include a written emergency procedure. For sites and infrastructure managed by the workshop, that path is direct." },
      { q: "Do you provide training?", a: "Yes. Every project includes administrator training and written documentation for the people who will operate the system." },
      { q: "Can you work with an existing website?", a: "Often, yes. That is usually a decision made after a Digital Foundation Audit, based on what already exists." },
      { q: "Do you migrate organizations from other providers?", a: "Yes. Migrations are common and always start with a review of what currently exists." },
    ],
  },
  {
    title: "Philosophy",
    items: [
      { q: "Why don't you take many clients?", a: "Because careful work does not scale by adding clients. Ten a year is the number that lets each engagement receive the attention it needs." },
      { q: "Why don't you support every technology?", a: "A short list of tools is easier to keep current, easier to document, and easier to hand off. Depth beats breadth." },
      { q: "What is a Digital Workshop?", a: "A small shop that builds and cares for digital systems by hand, with documentation, ownership, and long-term stewardship as first-class outputs — not afterthoughts." },
      { q: "Why do you avoid vendor lock-in?", a: "Because clients should be able to leave. A system a client cannot leave is a system a client does not own." },
      { q: "Why is documentation included with every project?", a: "Because a system without documentation is a system only its builder understands. That is not ownership." },
    ],
  },
];

function FaqPage() {
  return (
    <>
      <PageHead
        eyebrow="Frequently Asked Questions"
        title="Answers, in the open."
        sub="If a question you care about is not here, ask it directly. The list will grow with real questions."
      />
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="font-mono-soa text-primary uppercase tracking-widest">{g.title}</h2>
              <Accordion type="single" collapsible className="mt-4">
                {g.items.map((it, i) => (
                  <AccordionItem key={it.q} value={`${g.title}-${i}`}>
                    <AccordionTrigger className="text-left text-lg text-foreground">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Have a question that isn't here?"
        body="Send it directly. Real questions from real organizations shape this page over time."
        primaryLabel="Ask a Question"
      />
    </>
  );
}