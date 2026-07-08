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
      { name: "description", content: "Answers to common questions about working with SoAtomic — how projects begin, who owns what, how pricing works, and why the studio is intentionally small." },
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
      { q: "How do projects begin?", a: "Every new project begins with a $99 Digital Foundation Screen. We'll review your current website, technology, and digital tools, then provide a Digital Foundation Report with prioritized recommendations and practical next steps. If you move forward with a Build package, we'll apply the full $99 toward your project." },
      { q: "Do you require contracts?", a: "Yes. Every project includes a straightforward agreement that outlines the scope of work, timeline, responsibilities, payment terms, and ownership. We believe clear expectations make for successful projects." },
      { q: "How many clients do you accept each year?", a: "SoAtomic intentionally remains a boutique studio. We generally work with around ten Build clients each year so every organization receives thoughtful attention, thorough documentation, and responsive support." },
      { q: "Do you work remotely?", a: "Yes. Most of our work is completed remotely using video meetings, email, and collaborative tools. This allows us to serve organizations efficiently while keeping costs reasonable." },
      { q: "Do you work outside California?", a: "Absolutely. While we're based in Santa Cruz County, California, we work with organizations throughout the United States. Some services may have state-specific considerations, but most of our work can be completed remotely." },
    ],
  },
  {
    title: "Ownership",
    items: [
      { q: "Who owns my website?", a: "You do. When your project is complete, the website belongs entirely to your organization. We don't use proprietary systems or hold your website hostage." },
      { q: "Who owns my domain?", a: "You do. Domains should always be registered in the client's name. If we help manage your domain, you'll still retain full ownership and access." },
      { q: "Who owns my Google Workspace?", a: "You do. Your Google Workspace belongs to your organization. We'll help configure and manage it, but you'll always remain the owner and administrator." },
      { q: "Can I leave at any time?", a: "Yes. If you decide to end our relationship, we'll help ensure a smooth transition. Because everything belongs to you, there's no vendor lock-in or proprietary system preventing you from moving elsewhere." },
      { q: "What happens if I stop using SoAtomic?", a: "We'll provide any final documentation, transfer responsibilities if needed, and ensure you have access to your website, accounts, and services. Our goal is for your organization to remain successful whether we're involved or not." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "Why do you publish pricing?", a: "We believe transparency builds trust. Publishing pricing helps organizations understand whether we're a good fit before reaching out and removes the uncertainty that often comes with agency pricing." },
      { q: "Are there hidden fees?", a: "No. If something falls outside the agreed scope, we'll discuss it with you before any additional work begins. You'll always know what you're paying for." },
      { q: "Do you charge hourly?", a: "Our Build packages use fixed pricing whenever possible. Growth work, consulting, and projects outside a package may be billed hourly or as fixed-price projects depending on the scope." },
      { q: "What is included in each package?", a: "Each package clearly outlines what's included, who it's designed for, expected timelines, and deliverables. Every Build package also includes documentation, basic training, and complete ownership of your digital assets." },
      { q: "How are change requests handled?", a: "Small refinements during a project are expected. Larger changes that significantly expand the original scope may require a revised estimate or a separate phase. We'll always discuss changes before moving forward." },
    ],
  },
  {
    title: "Technology",
    items: [
      { q: "Why Google Workspace?", a: "Google Workspace provides reliable email, calendars, file storage, collaboration, and security without requiring organizations to manage their own infrastructure. It's scalable, familiar, and works well for most small organizations." },
      { q: "Why Google Cloud?", a: "Google Cloud gives us a secure, modern platform for hosting applications and services. It scales with your organization and allows us to build solutions without relying on aging on-premises infrastructure." },
      { q: "Why Cloudflare?", a: "Cloudflare improves website performance, security, DNS management, and reliability. It helps protect websites while making them faster and easier to manage." },
      { q: "Why Webflow?", a: "Webflow allows us to build fast, accessible, professionally designed websites that clients can update without relying on custom code for everyday content changes." },
      { q: "Why Framer?", a: "Framer is an excellent choice for organizations that need visually engaging marketing sites with rapid iteration and modern design capabilities. We'll recommend it only when it's the right fit for your project." },
      { q: "Do you support WordPress?", a: "Generally, no. We intentionally focus on a smaller set of modern platforms that we know exceptionally well. This allows us to provide better support, stronger documentation, and more consistent long-term results." },
      { q: "Do you build custom software?", a: "Yes, when it's the right solution. We build custom web applications and Google Cloud solutions for organizations whose needs extend beyond a traditional website. Every project begins with a Digital Foundation Screen to determine the most appropriate approach." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "How quickly do you respond?", a: "Response times depend on your Care plan. Most support requests receive an initial response within one business day, and urgent issues are prioritized whenever possible." },
      { q: "How are emergencies handled?", a: "If your website or critical service becomes unavailable, we'll work to restore service as quickly as possible. Organizations on Care plans receive priority for emergency support." },
      { q: "Do you provide training?", a: "Yes. Every Build package includes basic administrator training so your team feels comfortable managing day-to-day tasks. Additional training sessions are also available." },
      { q: "Can you work with an existing website?", a: "Often, yes. During the Digital Foundation Screen we'll evaluate your current website and recommend whether it makes sense to improve what's already there or build something new." },
      { q: "Do you migrate organizations from other providers?", a: "Yes. We regularly help organizations move websites, email, domains, DNS, and cloud services from existing providers while minimizing disruption and preserving ownership." },
    ],
  },
  {
    title: "Philosophy",
    items: [
      { q: "Why don't you take many clients?", a: "Because quality requires time. We intentionally limit the number of organizations we work with so every client receives careful planning, thorough documentation, and thoughtful long-term support rather than becoming just another project in a queue." },
      { q: "Why don't you support every technology?", a: "No one can be an expert in everything. We deliberately focus on a carefully selected technology stack that we trust and understand deeply. That focus allows us to provide better advice, better documentation, and more dependable support." },
      { q: "What is a Digital Studio?", a: "A Digital Studio is our way of approaching technology with craftsmanship rather than volume. We don't chase trends or sell unnecessary services. We build dependable digital foundations, document our work, and leave every organization in control of its technology." },
      { q: "Why do you avoid vendor lock-in?", a: "Technology should create independence, not dependence. We believe organizations should always own their accounts, domains, data, and documentation. If you ever choose to work with someone else, you should be able to do so without unnecessary barriers." },
      { q: "Why is documentation included with every project?", a: "Because good work should be understandable. Documentation helps your team maintain systems, onboard new staff, and make informed decisions long after a project is complete. We consider documentation part of the product — not an optional extra." },
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