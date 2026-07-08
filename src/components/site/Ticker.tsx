const ITEMS = [
  "SEO", "•", "AI", "•", "DESIGN", "•", "SOCIAL MEDIA", "•", "MARKETING", "•",
  "BUILD", "•", "BLUEPRINT", "•", "CARE", "•", "GROW", "•", "SCREEN",
];

const DOT_COLORS = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-yellow",
  "text-accent-orange",
  "text-accent-magenta",
];

/** Deterministic pseudo-random color from index so SSR and CSR match */
function dotColor(index: number): string {
  const n = ((index * 1103515245 + 12345) & 0x7fffffff) % DOT_COLORS.length;
  return DOT_COLORS[n];
}

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  let dotIndex = 0;
  return (
    <div className="border-y border-border/60 bg-card/30 py-4 overflow-hidden ticker-mask">
      <div className="flex gap-10 w-max animate-ticker font-mono-soa tracking-[0.2em] text-muted-foreground">
        {row.map((t, i) => {
          const isDot = t === "•";
          if (isDot) dotIndex++;
          return (
            <span
              key={i}
              className={isDot ? dotColor(dotIndex - 1) : undefined}
            >
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
}
