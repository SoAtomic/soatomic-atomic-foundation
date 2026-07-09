import { Link } from "@tanstack/react-router";
import { SoAtomicLogo } from "./Logo";

const TOOLS = [
  { label: "Google Workspace", href: "https://workspace.google.com/" },
  { label: "Google Cloud", href: "https://cloud.google.com/" },
  { label: "Cloudflare", href: "https://www.cloudflare.com/" },
  { label: "Webflow", href: "https://webflow.com/" },
  { label: "Framer", href: "https://www.framer.com/" },
  { label: "Lovable", href: "https://lovable.dev/" },
] as const;

const STUDIO = [
  { to: "/playbook", label: "Playbook" },
  { to: "/about", label: "Studio Principles" },
  { to: "/faq", label: "FAQ" },
  { to: "/pricing", label: "Pricing" },
] as const;

const SERVICES = [
  { to: "/screen", label: "Screen" },
  { to: "/build", label: "Build" },
  { to: "/care", label: "Care" },
  { to: "/growth", label: "Growth" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-16 mt-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-x-16">
        <div className="flex flex-col items-start md:w-[360px] md:shrink-0">
          <SoAtomicLogo className="h-[4rem] w-auto mb-4" />
          <div className="font-mono-soa text-primary uppercase tracking-widest mb-3">
            SoAtomic Digital Studio
          </div>
          <div className="text-muted-foreground mb-3">Santa Cruz County, California</div>
          <a href="mailto:hello@soatomic.com" className="text-foreground hover:text-primary">
            hello@soatomic.com
          </a>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-10 md:gap-12 lg:gap-14">
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Services</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {SERVICES.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Studio</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {STUDIO.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">{l.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/accessibility" className="hover:text-foreground">Accessibility</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Toolchain</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {TOOLS.map((t) => (
              <li key={t.label}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border/60 flex flex-wrap justify-between gap-3 text-muted-foreground">
        <div>© {new Date().getFullYear()} SoAtomic · A boutique digital studio</div>
        <div>Approximately ten clients per year, by design.</div>
      </div>
    </footer>
  );
}