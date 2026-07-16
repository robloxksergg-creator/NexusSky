import { useMemo } from "react";
import { motion } from "framer-motion";
import { seeded } from "./seeded";
import styles from "./Clouds.module.css";

interface CloudsProps {
  count?: number;
  seed?: number;
  dim?: boolean;
}

export function Clouds({ count = 7, seed = 3, dim = false }: CloudsProps) {
  const clouds = useMemo(() => {
    const rnd = seeded(seed);
    return Array.from({ length: count }, () => ({
      top: rnd() * 70,
      width: 220 + rnd() * 420,
      height: 90 + rnd() * 120,
      duration: 45 + rnd() * 55,
      delay: rnd() * -60,
      startX: -30 - rnd() * 30,
      opacity: 0.4 + rnd() * 0.5,
    }));
  }, [count, seed]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className={`${styles.cloud} ${dim ? styles.dim : ""}`}
          style={{
            top: `${c.top}%`,
            width: c.width,
            height: c.height,
            opacity: c.opacity,
          }}
          initial={{ x: `${c.startX}vw` }}
          animate={{ x: "130vw" }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
