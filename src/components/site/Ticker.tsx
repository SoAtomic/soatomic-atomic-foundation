const ITEMS = [
  "SCREEN", "■", "BLUEPRINT", "■", "BUILD", "■", "LAUNCH", "■", "CARE", "■", "GROW",
  "■", "OWNERSHIP", "■", "DOCUMENTATION", "■", "NO LOCK-IN", "■", "PLAIN LANGUAGE",
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-border/60 bg-card/30 py-4 overflow-hidden ticker-mask">
      <div className="flex gap-10 w-max animate-ticker font-mono-soa tracking-[0.2em] text-muted-foreground">
        {row.map((t, i) => (
          <span
            key={i}
            className={t === "■" ? (i % 4 === 1 ? "text-accent-yellow" : "text-accent-orange") : ""}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}