import logoAsset from "@/assets/soatomic-logo.png.asset.json";

export function SoAtomicLogo({
  className = "",
  alt = "SoAtomic",
}: { className?: string; alt?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      className={className}
      style={{ imageRendering: "auto" }}
    />
  );
}