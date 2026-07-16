import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import styles from "./MagneticButton.module.css";

type Variant = "primary" | "accent" | "ghost" | "discord";
type Size = "small" | "medium" | "large";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  strength?: number;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  size = "medium",
  icon,
  href,
  onClick,
  strength = 0.4,
  ariaLabel,
}: MagneticButtonProps) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(strength);

  const className = [
    styles.button,
    styles[variant],
    size !== "medium" ? styles[size] : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <span className={styles.label}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </span>
  );

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
      onClick={() => {
        if (href) {
          window.open(href, href.startsWith("http") ? "_blank" : "_self");
        }
        onClick?.();
      }}
    >
      {inner}
    </motion.button>
  );
}
