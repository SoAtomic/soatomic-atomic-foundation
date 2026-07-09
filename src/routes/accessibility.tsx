import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — SoAtomic" },
      { name: "description", content: "SoAtomic's commitment to building accessible digital experiences for all users." },
      { property: "og:title", content: "Accessibility — SoAtomic" },
      { property: "og:description", content: "Our approach to accessibility, WCAG alignment, and ongoing inclusive design practices." },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <>
      <PageHead
        eyebrow="Accessibility"
        title="Accessibility Statement"
        sub="At SoAtomic, accessibility is a fundamental part of how we build digital experiences. We believe websites should be usable by as many people as possible, regardless of ability, device, or assistive technology."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-14 text-lg text-muted-foreground">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
            <p>Accessibility is considered throughout every project rather than treated as an optional feature or afterthought.</p>
            <p>When building websites, we strive to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use semantic HTML and modern web standards.</li>
              <li>Support keyboard navigation.</li>
              <li>Maintain sufficient color contrast.</li>
              <li>Provide meaningful headings and page structure.</li>
              <li>Include alternative text for images when appropriate.</li>
              <li>Design responsive layouts that work across devices.</li>
              <li>Reduce unnecessary motion and distractions.</li>
              <li>Build forms that are clearly labeled and easy to use.</li>
            </ul>
            <p>Every project is reviewed with accessibility in mind as part of our standard development process.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Standards</h2>
            <p>Whenever practical, SoAtomic aims to align new projects with the principles of the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. While every project has unique requirements, accessibility best practices are incorporated into our recommendations and implementation whenever possible.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Ongoing Accessibility</h2>
            <p>Accessibility is not a one-time checklist. Websites evolve, content changes, and new features are added over time.</p>
            <p>Organizations enrolled in a SoAtomic Care Plan receive ongoing accessibility reviews as part of their long-term website maintenance.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Need Assistance?</h2>
            <p>If you experience difficulty accessing any part of this website, or notice an accessibility issue, we'd appreciate hearing from you.</p>
            <p>Please contact us at:</p>
            <p>
              <a href="mailto:hello@soatomic.com" className="text-foreground hover:text-primary underline underline-offset-4">
                hello@soatomic.com
              </a>
            </p>
            <p>We will make every reasonable effort to address accessibility concerns promptly.</p>
          </div>
        </div>
      </section>
    </>
  );
}
