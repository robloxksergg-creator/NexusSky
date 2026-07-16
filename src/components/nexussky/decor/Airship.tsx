import { motion } from "framer-motion";
import styles from "./Airship.module.css";

interface AirshipProps {
  className?: string;
  scale?: number;
  duration?: number;
  delay?: number;
  flip?: boolean;
  style?: React.CSSProperties;
}

/**
 * Aeronautics-style airship built entirely from SVG.
 * Bobs gently and drifts; propeller spins.
 */
export function Airship({
  className,
  scale = 1,
  duration = 26,
  delay = 0,
  flip = false,
  style,
}: AirshipProps) {
  return (
    <motion.div
      className={`${styles.wrap} ${className ?? ""}`}
      style={{ transform: `scale(${scale}) scaleX(${flip ? -1 : 1})`, ...style }}
      aria-hidden="true"
      initial={{ x: flip ? "8vw" : "-8vw", y: 0 }}
      animate={{
        x: flip ? ["8vw", "-6vw", "8vw"] : ["-8vw", "6vw", "-8vw"],
        y: [0, -14, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg className={styles.svg} width="150" height="90" viewBox="0 0 150 90">
        <defs>
          <linearGradient id="balloon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a3542" />
            <stop offset="0.5" stopColor="#141c25" />
            <stop offset="1" stopColor="#0a1016" />
          </linearGradient>
          <linearGradient id="stripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ff6a2b" />
            <stop offset="1" stopColor="#f3c976" />
          </linearGradient>
        </defs>

        {/* balloon */}
        <ellipse cx="70" cy="30" rx="60" ry="24" fill="url(#balloon)" />
        <rect x="18" y="26" width="104" height="6" rx="3" fill="url(#stripe)" opacity="0.9" />
        <ellipse cx="70" cy="30" rx="60" ry="24" fill="none" stroke="#3a4756" strokeWidth="1" />

        {/* rigging */}
        <path d="M40 50 L48 54 M100 50 L92 54" stroke="#5a6675" strokeWidth="1.2" />

        {/* gondola */}
        <rect x="46" y="52" width="48" height="16" rx="5" fill="#1c2530" stroke="#3a4756" strokeWidth="1" />
        <rect x="52" y="56" width="6" height="6" rx="1" fill="#34e6d2" className={styles.glow} />
        <rect x="62" y="56" width="6" height="6" rx="1" fill="#34e6d2" className={styles.glow} />
        <rect x="72" y="56" width="6" height="6" rx="1" fill="#f3c976" />
        <rect x="82" y="56" width="6" height="6" rx="1" fill="#ff6a2b" />

        {/* fins */}
        <path d="M124 22 l18 -8 -4 16 z" fill="#1c2530" stroke="#3a4756" strokeWidth="1" />
        <path d="M124 38 l18 8 -4 -16 z" fill="#141c25" stroke="#3a4756" strokeWidth="1" />

        {/* propeller */}
        <g className={styles.propeller}>
          <rect x="82" y="60" width="4" height="24" rx="2" fill="#8a97a8" />
          <rect x="72" y="70" width="24" height="4" rx="2" fill="#8a97a8" />
        </g>
        <circle cx="84" cy="72" r="3" fill="#c7d2de" />
      </svg>
    </motion.div>
  );
}
