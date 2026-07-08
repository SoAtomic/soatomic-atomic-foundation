import { createFileRoute } from "@tanstack/react-router";
import { PageHead, H2 } from "@/components/site/SectionHeader";
import { SoAtomicLogo } from "@/components/site/Logo";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SoAtomic" },
      { name: "description", content: "SoAtomic is a boutique digital studio in Santa Cruz County, California. Documentation, ownership, and long-term relationships over client volume." },
      { property: "og:title", content: "About — SoAtomic" },
      { property: "og:description", content: "A small studio, intentionally kept small. Aaron and a handful of clients each year." },
    ],
  }),
  component: AboutPage,
});

const YES = [
  "Website design and development",
  "Google Workspace administration",
  "Google Cloud infrastructure",
  "Cloudflare configuration",
  "Documentation and training",
  "Accessibility and SEO",
];

const NO = [
  "Residential IT support",
  "Printer support",
  "On-premises server administration",
  "Hardware repair",
  "Microsoft Active Directory environments",
  "Vendor lock-in projects",
];

function AboutPage() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="A studio, not an agency."
        sub="SoAtomic is a small digital studio in Santa Cruz County, California. It exists to help organizations doing meaningful work build digital foundations they understand and control."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-8 text-lg text-muted-foreground">
          <p>
            The studio was created because most small organizations are
            underserved by both DIY tools and traditional agencies. DIY leaves
            people alone with software that does not fit their work. Agencies
            often sell more than is needed, hold the keys after launch, and
            leave clients unable to explain their own systems.
          </p>
          <p>
            SoAtomic is intentionally small. Approximately ten clients per
            year. That number keeps the work careful, the documentation
            current, and the relationships real. It is not a growth
            constraint we are working to escape — it is the point.
          </p>
          <p>
            Documentation is included with every project because a system you
            cannot explain is a system you do not own. Everything the
            studio builds ships with a written record of how it works, who
            owns it, and how to keep it running.
          </p>
          <p>
            Long-term relationships are more valuable than maximizing client
            volume. The studio's default posture is to be useful for years,
            not months.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto h-16 w-16 bg-card glow-ring grid place-items-center">
            <SoAtomicLogo className="h-10 w-auto" />
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold">The studio owner.</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-muted-foreground text-left md:text-center">
            <p>
              SoAtomic is run by Aaron — a builder who spent years on both the
              creative side of the web and the operational side of the
              systems behind it.
            </p>
            <p>
              He enjoys helping organizations understand their technology
              instead of being intimidated by it. The studio model is a
              deliberate choice: fewer clients, more careful work, and a
              relationship that continues past the launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <H2 eyebrow="Scope" sub="A short list of what the studio does and does not offer. Being specific about both is part of respecting a client's time.">
            What the studio does.
          </H2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="atomic-card p-7">
              <div className="flex items-center gap-2 font-mono-soa uppercase tracking-widest text-primary">
                <Check className="h-3.5 w-3.5" /> The studio provides
              </div>
              <ul className="mt-5 space-y-3">
                {YES.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 bg-primary shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="atomic-card p-7">
              <div className="flex items-center gap-2 font-mono-soa uppercase tracking-widest text-accent-orange">
                <X className="h-3.5 w-3.5" /> The studio does not provide
              </div>
              <ul className="mt-5 space-y-3">
                {NO.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 bg-border shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-muted-foreground">
                If the work you need is on the right, we will do our best to
                point you to someone who does it well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See if we're a good fit."
        body="A short conversation is the fastest way to know. If we are not the right studio for the work, we will say so directly."
        primaryLabel="See if We're a Good Fit"
      />
    </>
  );
}