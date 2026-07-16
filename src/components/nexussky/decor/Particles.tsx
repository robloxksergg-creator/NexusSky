import { useMemo } from "react";
import { motion } from "framer-motion";
import { seeded } from "./seeded";
import styles from "./Particles.module.css";

type Kind = "dust" | "ember" | "toxic" | "spark" | "ash";

interface ParticlesProps {
  count?: number;
  kind?: Kind;
  seed?: number;
  /** upward drift (embers/sparks) vs downward (ash/dust) */
  rise?: boolean;
}

export function Particles({
  count = 26,
  kind = "dust",
  seed = 7,
  rise = false,
}: ParticlesProps) {
  const items = useMemo(() => {
    const rnd = seeded(seed);
    return Array.from({ length: count }, () => {
      const size = 2 + rnd() * 5;
      return {
        left: rnd() * 100,
        top: rnd() * 100,
        size,
        duration: 8 + rnd() * 14,
        delay: rnd() * -18,
        drift: (rnd() - 0.5) * 60,
        travel: 30 + rnd() * 50,
        opacity: 0.25 + rnd() * 0.6,
      };
    });
  }, [count, seed]);

  return (
    <div className={styles.field} aria-hidden="true">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className={`${styles.particle} ${styles[kind]}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: rise ? [-0, -p.travel, -0] : [0, p.travel, 0],
            x: [0, p.drift, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
