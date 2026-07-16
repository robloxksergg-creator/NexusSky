import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { Clouds } from "@/components/nexussky/decor/Clouds";
import { Particles } from "@/components/nexussky/decor/Particles";
import { MountainIcon, CrystalIcon, MapIcon, ShieldIcon } from "@/components/nexussky/Icons";
import styles from "./Mountains.module.css";

const PILLAR_ICONS = [<MountainIcon />, <MapIcon />, <CrystalIcon />, <ShieldIcon />];

function Range({ tone, path }: { tone: string; path: string }) {
  return (
    <svg viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ width: "100%", height: "auto" }}>
      <path d={path} fill={tone} />
    </svg>
  );
}

export function Mountains() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const back = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const mid = useTransform(scrollYProgress, [0, 1], ["6%", "-16%"]);
  const front = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);

  return (
    <section id="mountains" className={styles.section} ref={ref}>
      <div className={styles.glow} />
      <Clouds count={4} seed={21} dim />
      <Particles count={16} kind="ash" seed={9} />

      <motion.div className={`${styles.range} ${styles.rangeBack}`} style={{ y: back }}>
        <Range
          tone="#16283a"
          path="M0,400 L0,180 L180,90 L340,190 L520,70 L720,200 L900,80 L1120,210 L1300,110 L1440,190 L1440,400 Z"
        />
      </motion.div>
      <motion.div className={`${styles.range} ${styles.rangeMid}`} style={{ y: mid }}>
        <Range
          tone="#132230"
          path="M0,400 L0,240 L200,150 L400,260 L640,130 L860,270 L1080,150 L1280,270 L1440,180 L1440,400 Z"
        />
      </motion.div>
      <motion.div className={`${styles.range} ${styles.rangeFront}`} style={{ y: front }}>
        <Range
          tone="#0d1720"
          path="M0,400 L0,300 L240,210 L480,320 L720,220 L960,330 L1200,230 L1440,320 L1440,400 Z"
        />
      </motion.div>

      <div className={styles.waterfall} />
      <div className={styles.mist} />

      <div className={styles.inner}>
        <Reveal>
          <span className={styles.kicker}>{t.mountains.kicker}</span>
          <h2 className={styles.heading}>
            {t.mountains.head1}<em>{t.mountains.em}</em>{t.mountains.head2}
          </h2>
          <p className={styles.lead}>{t.mountains.lead}</p>
        </Reveal>

        <div className={styles.pillars}>
          {t.mountains.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className={styles.pillar}>
                <div className={styles.pillarIcon}>{PILLAR_ICONS[i]}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
