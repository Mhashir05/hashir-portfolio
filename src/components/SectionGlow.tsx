export default function SectionGlow({
  position = "left",
  color = "violet",
}: {
  position?: "left" | "right";
  color?: "violet" | "cyan";
}) {
  const colorMap = {
    violet: "rgba(124,92,255,0.5)",
    cyan: "rgba(34,211,238,0.45)",
  };

  const positionClass =
    position === "left" ? "-left-24 top-0" : "-right-24 top-0";

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} z-0 h-[420px] w-[420px] rounded-full blur-[100px]`}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]}, transparent 70%)`,
      }}
    />
  );
}