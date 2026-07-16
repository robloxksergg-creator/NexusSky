import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroWorld } from "@/assets";
import { useI18n } from "@/i18n/i18n";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Clouds } from "@/components/nexussky/decor/Clouds";
import { Airship } from "@/components/nexussky/decor/Airship";
import { Particles } from "@/components/nexussky/decor/Particles";
import {
  PlayIcon,
  DownloadIcon,
  DiscordIcon,
  ArrowDownIcon,
} from "@/components/nexussky/Icons";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useI18n();
  const STATS = [
    { value: "1.20.1", label: t.hero.stats.version },
    { value: "Create", label: t.hero.stats.core },
    { value: "24 / 7", label: t.hero.stats.uptime },
    { value: "1,240+", label: t.hero.stats.explorers },
  ];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="sky" className={styles.hero} ref={ref}>
      <motion.div className={styles.bgWrap} style={{ y: bgY, scale: bgScale }}>
        <img
          className={styles.bg}
          src={heroWorld}
          alt="A vast NexusSky landscape — pixel mountains, pine forests and a glassy river beneath a clear sky."
          fetchPriority="high"
        />
      </motion.div>
      <div className={styles.tint} />
      <div className={styles.vignette} />

      <Clouds count={6} seed={11} />
      <Airship className={styles.airA} scale={1} duration={30} />
      <Airship className={styles.airB} scale={0.7} duration={38} flip delay={-6} />
      <Particles count={20} kind="dust" seed={5} />




      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className={styles.pulse} />
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 26, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          NexusSky
        </motion.h1>

        <motion.p
          className={styles.slogan}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          {t.hero.slogan}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <MagneticButton variant="primary" size="large" icon={<PlayIcon width={18} height={18} />}>
            {t.hero.play}
          </MagneticButton>
          <MagneticButton variant="accent" icon={<DownloadIcon width={18} height={18} />}>
            {t.hero.download}
          </MagneticButton>
          <MagneticButton variant="discord" icon={<DiscordIcon width={18} height={18} />}>
            {t.hero.discord}
          </MagneticButton>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} style={{ display: "flex", gap: "clamp(1.4rem,5vw,3.5rem)" }}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
              {i < STATS.length - 1 && <span className={styles.divider} />}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scroll}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {t.hero.scroll}
        <ArrowDownIcon width={16} height={16} />
      </motion.div>

      <div className={styles.fog} />
    </section>
  );
}
