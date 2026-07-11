import { createFileRoute } from "@tanstack/react-router";
import { Search, MessageSquare, ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHead } from "@/components/site/SectionHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/screen")({
  head: () => ({
    meta: [
      { title: "Screen — SoAtomic" },
      { name: "description", content: "Screen is where every SoAtomic engagement begins. Two assessments — Foundations (digital infrastructure) and Communications (messaging, brand, and content operations) — each producing prioritized, written recommendations." },
      { property: "og:title", content: "Screen — SoAtomic" },
      { property: "og:description", content: "We evaluate before we build. Foundations reviews digital infrastructure; Communications reviews messaging, brand, and content systems." },
    ],
  }),
  component: ScreenPage,
});

const FOUNDATIONS_REVIEWS = [
  { t: "Digital Foundation Audit", d: "A single written report describing the current state of every digital asset the organization depends on." },
  { t: "Website Review", d: "Structure, content, performance, and maintainability of the current site." },
  { t: "Accessibility Review", d: "A WCAG-aligned assessment with prioritized, plain-language recommendations." },
  { t: "SEO Baseline", d: "Indexing, structure, metadata, and a short list of the changes most worth making." },
  { t: "Domain & DNS Review", d: "Ownership, registrar posture, and DNS configuration examined for stability and risk." },
  { t: "Google Workspace Review", d: "Users, groups, sharing, security posture, and administrative practices." },
  { t: "Security Review", d: "Accounts, authentication, and platform posture against a written baseline." },
  { t: "Performance Review", d: "Measurable performance data with a prioritized short list of improvements." },
];

const COMMUNICATIONS_REVIEWS = [
  { t: "Messaging Audit", d: "How the organization currently talks about itself, and where the message is inconsistent or unclear." },
  { t: "Brand Voice Review", d: "The tone, vocabulary, and register used across channels — and whether it holds together." },
  { t: "Audience Review", d: "Who the organization is trying to reach, what it knows about them, and what it does not." },
  { t: "Marketing Review", d: "Active channels, campaigns, spend, and measurable outcomes." },
  { t: "Social Media Review", d: "Accounts, cadence, ownership, and the health of each active surface." },
  { t: "Collateral Review", d: "Existing print, digital, and presentation assets examined for consistency and reuse." },
  { t: "Internal Communications Review", d: "How the organization communicates with itself: email, meetings, documentation." },
  { t: "Content & Editorial Review", d: "Editorial standards, publishing workflows, and content governance." },
];

function ScreenPage() {
  return (
    <>
      <PageHead
        eyebrow="Service 01 · Screen"
        title="Every relationship begins with a Screen."
        sub="Before we quote a Build or a Care plan, we look at what already exists. Screen produces a written, prioritized record of what is working, what is fragile, and what should be addressed next. Two assessments — Foundations for digital infrastructure and Communications for messaging and content operations — each stands on its own. No implementation happens during Screen."
      />

      {/* Two products */}
      <section className="pt-16 pb-4">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          <article className="crt-card p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-primary" />
              <div className="font-mono-soa text-primary uppercase tracking-widest">Screen · Foundations</div>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Digital Infrastructure Assessment</h2>
            <p className="mt-3 text-muted-foreground">
              A technical review of the systems the organization depends on
              every day — website, hosting, domain, DNS, Google Workspace,
              cloud infrastructure, security, and documentation.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Ideal client</dt>
                <dd className="mt-1 text-foreground/90">Organizations unsure of what they own, where it lives, or how it holds together.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Deliverable</dt>
                <dd className="mt-1 text-foreground/90">A written, prioritized assessment with plain-language recommendations.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Outcome</dt>
                <dd className="mt-1 text-foreground/90">A clear picture of the current digital foundation and a defensible order of operations.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Credit</dt>
                <dd className="mt-1 text-foreground/90">The cost of a Foundations Screen credits toward a Digital Infrastructure Build (Hydrogen, Carbon, Titanium, Gold, or Plutonium).</dd>
              </div>
            </dl>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Starting at $99</div>
              <Link to="/contact">
                <Button size="sm" className="mech-btn font-semibold">Book Foundations <ArrowRight /></Button>
              </Link>
            </div>
          </article>

          <article className="crt-card p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <div className="font-mono-soa text-primary uppercase tracking-widest">Screen · Communications</div>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Communications Assessment</h2>
            <p className="mt-3 text-muted-foreground">
              A structured review of how the organization communicates —
              messaging, brand voice, audiences, marketing, social media,
              existing collateral, internal communications, content strategy,
              and editorial consistency.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Ideal client</dt>
                <dd className="mt-1 text-foreground/90">Organizations whose message is scattered, inconsistent, or produced ad hoc.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Deliverable</dt>
                <dd className="mt-1 text-foreground/90">A written assessment of the current communications posture with prioritized recommendations.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Outcome</dt>
                <dd className="mt-1 text-foreground/90">A clear-eyed view of what the organization is saying, to whom, and where it is falling short.</dd>
              </div>
              <div>
                <dt className="font-mono-soa text-primary uppercase tracking-widest">Credit</dt>
                <dd className="mt-1 text-foreground/90">The cost of a Communications Screen credits toward a Communications Infrastructure Build (Nitrogen, Oxygen, or Neon).</dd>
              </div>
            </dl>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
              <div className="font-mono-soa text-primary uppercase tracking-widest">Starting at $99</div>
              <Link to="/contact">
                <Button size="sm" className="mech-btn font-semibold">Book Communications <ArrowRight /></Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <H2Group title="What Foundations reviews" icon={<Search className="h-4 w-4 text-primary" />} items={FOUNDATIONS_REVIEWS} />
          <div className="mt-16">
            <H2Group title="What Communications reviews" icon={<MessageSquare className="h-4 w-4 text-primary" />} items={COMMUNICATIONS_REVIEWS} />
          </div>

          <div className="mt-12 crt-card p-6 md:p-8">
            <div className="font-mono-soa text-primary uppercase tracking-widest">How the Screen works</div>
            <ol className="mt-4 space-y-3 list-decimal pl-6 text-foreground/90">
              <li>A short scoping conversation to understand the organization and its systems.</li>
              <li>A hands-on review of each area in the selected assessment, using written checklists.</li>
              <li>A single document with findings, priorities, and a plain-language recommendation.</li>
              <li>A walk-through of the document so nothing is left ambiguous.</li>
              <li>If you choose to move forward, the cost of the Screen is credited toward the corresponding Build.</li>
            </ol>
            <p className="mt-6 text-muted-foreground">
              Every recommendation carries a clear reason. Nothing is proposed without one. No implementation happens during Screen.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Ready to see what a Screen reveals?"
        body="Screen is a fixed-scope engagement. You leave with a document you can act on — with or without us. If you continue with SoAtomic, the cost is credited toward your Build."
        primaryLabel="Schedule a Digital Foundation Audit"
      />
    </>
  );
}

function H2Group({ title, icon, items }: { title: string; icon: React.ReactNode; items: { t: string; d: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {items.map((r) => (
          <div key={r.t} className="atomic-card p-6">
            <div className="flex items-center gap-3">
              {icon}
              <h3 className="font-semibold text-foreground">{r.t}</h3>
            </div>
            <p className="mt-3 text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}