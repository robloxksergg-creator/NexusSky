import styles from "./Gear.module.css";

interface GearProps {
  size?: number;
  speed?: number;
  reverse?: boolean;
  color?: string;
  teeth?: number;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
}

/** A single rotating industrial gear rendered as SVG. */
export function Gear({
  size = 120,
  speed = 24,
  reverse = false,
  color,
  teeth = 12,
  className,
  style,
  opacity = 1,
}: GearProps) {
  const cx = 50;
  const cy = 50;
  const outer = 46;
  const inner = 38;
  const toothW = 8;

  const r3 = (n: number) => Math.round(n * 1000) / 1000;
  const teethPaths = Array.from({ length: teeth }, (_, i) => {
    const angle = (i / teeth) * Math.PI * 2;
    const x = r3(cx + Math.cos(angle) * ((outer + inner) / 2));
    const y = r3(cy + Math.sin(angle) * ((outer + inner) / 2));
    const deg = r3((angle * 180) / Math.PI + 90);
    return (
      <rect
        key={i}
        x={r3(x - toothW / 2)}
        y={r3(y - 8)}
        width={toothW}
        height={16}
        rx={2}
        transform={`rotate(${deg} ${x} ${y})`}
      />
    );
  });

  return (
    <div
      className={`${styles.gear} ${reverse ? styles.ccw : styles.cw} ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        animationDuration: `${speed}s`,
        color,
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor">
        <circle cx={cx} cy={cy} r={inner} />
        {teethPaths}
        <circle cx={cx} cy={cy} r={14} fill="var(--ns-black)" />
        <circle
          cx={cx}
          cy={cy}
          r={20}
          fill="none"
          stroke="var(--ns-black)"
          strokeWidth={3}
        />
      </svg>
    </div>
  );
}
