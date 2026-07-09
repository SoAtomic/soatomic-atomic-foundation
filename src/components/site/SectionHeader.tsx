export function SectionHeader({
  eyebrow,
  title,
  sub,
  green,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  green?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="font-mono-soa text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </div>
      )}
      <h1
        className="text-3xl md:text-5xl font-semibold leading-[1.1] text-foreground"
        style={green ? { color: "#37b847" } : undefined}
      >
        {title}
      </h1>
      {sub && <p className="mt-5 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

export function H2({
  eyebrow,
  children,
  sub,
  className,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={className ? className : "max-w-3xl"}>
      {eyebrow && (
        <div className="font-mono-soa text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight whitespace-nowrap">
        {children}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

export function PageHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <section className="border-b border-border/60 py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-grid-bg opacity-[0.2]"
        style={{ maskImage: "radial-gradient(ellipse at 20% 20%, black 30%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={eyebrow} title={title} sub={sub} />
      </div>
    </section>
  );
}
