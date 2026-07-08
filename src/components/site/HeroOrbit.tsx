import mascotAsset from "@/assets/mascot.png.asset.json";

const NODES = [
  { label: "Screen", angle: 0, color: "#3b82f6" },
  { label: "Build", angle: 90, color: "#37b847" },
  { label: "Care", angle: 180, color: "#a855f7" },
  { label: "Growth", angle: 270, color: "#ff7200" },
];

export function HeroOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="absolute inset-2 border border-dashed border-primary/35 opacity-60" />
      <div className="absolute inset-10 border border-border/70" />
      <div className="absolute inset-20 border border-dashed border-primary/35 opacity-40" />
      <div className="absolute inset-0 grid place-items-center">
        <img
          src={mascotAsset.url}
          className="h-56 w-auto"
          alt="SoAtomic mascot"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <div className="absolute inset-0 animate-orbit">
        {NODES.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const r = 46;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className="bg-card border border-border px-3 py-1 font-medium shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-background)_60%,transparent)]"
                style={{ animation: "orbit-spin-rev 24s linear infinite" }}
              >
                <span className="mr-1" style={{ color: n.color }}>■</span>
                <span className="font-mono-soa">{n.label}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div aria-hidden className="absolute inset-0 animate-orbit-rev">
        {[30, 75, 150, 210, 300, 330].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x = 50 + 49 * Math.cos(rad);
          const y = 50 + 49 * Math.sin(rad);
          return (
            <span
              key={a}
              className="absolute h-1.5 w-1.5 bg-primary/70"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
            />
          );
        })}
      </div>
    </div>
  );
}