import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Start with a Digital Foundation Audit.",
  body = "A written, prioritized review of what exists — website, domain, workspace, accounts — before anything is proposed or built.",
  primaryLabel = "Schedule a Digital Foundation Audit",
  primaryTo = "/contact",
  secondaryLabel = "Explore Pricing",
  secondaryTo = "/pricing",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="py-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="crt-card p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={primaryTo}>
              <Button size="lg" className="mech-btn font-semibold glow-ring">
                {primaryLabel} <ArrowRight />
              </Button>
            </a>
            <a href={secondaryTo}>
              <Button size="lg" variant="outline" className="rounded-full border-border bg-card/40 hover:bg-card">
                {secondaryLabel}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}