import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { SoAtomicLogo } from "./Logo";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/screen", label: "Screen" },
  { to: "/build", label: "Build" },
  { to: "/care", label: "Care" },
  { to: "/growth", label: "Growth" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/playbook", label: "Playbook" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <SoAtomicLogo className="h-[4.5rem] w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-muted-foreground">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono-soa uppercase tracking-widest hover:text-foreground transition-colors"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex">
          <Button size="sm" className="mech-btn font-semibold">
            Schedule an Audit <ArrowRight />
          </Button>
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/40 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-mono-soa uppercase tracking-widest text-muted-foreground hover:text-foreground py-2"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
              <Button size="sm" className="mech-btn font-semibold w-full">
                Schedule an Audit <ArrowRight />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}