import { Link } from "@tanstack/react-router";
import { SoAtomicLogo } from "./Logo";

const TOOLS = ["Google Workspace", "Google Cloud", "Cloudflare", "Webflow", "Framer", "Lovable"];

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
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 flex flex-col items-start gap-5">
          <SoAtomicLogo className="h-[4rem] w-auto" />
          <div className="font-mono-soa text-primary uppercase tracking-widest">
            SoAtomic Digital Studio
          </div>
          <div className="text-muted-foreground">Santa Cruz County, California</div>
          <a href="mailto:hello@soatomic.com" className="text-foreground hover:text-primary">
            hello@soatomic.com
          </a>
        </div>
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
            <li><span className="text-muted-foreground">Accessibility</span></li>
            <li><span className="text-muted-foreground">Privacy</span></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-soa text-primary uppercase tracking-widest">Toolchain</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {TOOLS.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border/60 flex flex-wrap justify-between gap-3 text-muted-foreground">
        <div>© {new Date().getFullYear()} SoAtomic · A boutique digital studio</div>
        <div>Approximately ten clients per year, by design.</div>
      </div>
    </footer>
  );
}