import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    heroWorld,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from "@/assets";

const GALLERY_IMAGES = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
];

import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { CountUp } from "@/components/nexussky/CountUp";
import { Particles } from "@/components/nexussky/decor/Particles";
import { ChevronIcon } from "@/components/nexussky/Icons";
import styles from "./Underground.module.css";

const STAT_NUMS = [
  { to: 1240, suffix: "+" },
  { to: 68, suffix: "M" },
  { to: 340, suffix: "" },
  { to: 99, suffix: "%" },
];

const TILE_CLS = [styles.tileWide, "", styles.tileTall, "", styles.tileWide, ""];

const NEWS_DATES = ["Jul 04", "Jun 22", "Jun 10"];

const TEAM_META = [
  { initials: "NX", name: "Nyx" },
  { initials: "FR", name: "Forge" },
  { initials: "VL", name: "Volt" },
  { initials: "AE", name: "Aero" },
];

export function Underground() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="underground" className={styles.section}>
      <div className={styles.caveGlow} />
      <Particles count={20} kind="spark" seed={17} rise />

      <div className={styles.inner}>
        <Reveal>
          <span className={styles.kicker}>{t.underground.kicker}</span>
          <h2 className={styles.heading}>
            {t.underground.head1}<em>{t.underground.em}</em>{t.underground.head2}
          </h2>
          <p className={styles.lead}>{t.underground.lead}</p>
        </Reveal>

        {/* Statistics */}
        <div className={styles.stats}>
          {t.underground.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className={styles.statCard}>
                <div className={styles.statNum}>
                  <CountUp to={STAT_NUMS[i].to} suffix={STAT_NUMS[i].suffix} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Gallery */}
        <div className={styles.block}>
          <Reveal>
            <h3 className={styles.blockTitle}>{t.underground.galleryTitle}</h3>
            <p className={styles.blockSub}>{t.underground.gallerySub}</p>
          </Reveal>
          <div className={styles.gallery}>
            {t.underground.gallery.map((cap, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06} className={`${styles.tile} ${TILE_CLS[i]}`}>
                <img src={GALLERY_IMAGES[i % GALLERY_IMAGES.length]} alt={cap} loading="lazy" />
                <div className={styles.tileOverlay}>{cap}</div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* News */}
        <div className={styles.block}>
          <Reveal>
            <h3 className={styles.blockTitle}>{t.underground.newsTitle}</h3>
            <p className={styles.blockSub}>{t.underground.newsSub}</p>
          </Reveal>
          <div className={styles.news}>
            {t.underground.news.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.08}>
                <article className={styles.newsCard}>
                  <div className={styles.newsMeta}>
                    <span className={styles.cat}>{n.cat}</span>
                    <span className={styles.date}>{NEWS_DATES[i]}</span>
                  </div>
                  <h4>{n.title}</h4>
                  <p>{n.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FAQ + Team */}
        <div className={styles.block}>
          <div className={styles.split}>
            <div>
              <Reveal>
                <h3 className={styles.blockTitle}>{t.underground.faqTitle}</h3>
                <p className={styles.blockSub}>{t.underground.faqSub}</p>
              </Reveal>
              {t.underground.faq.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 0.05}>
                    <div className={styles.faqItem}>
                      <button
                        className={`${styles.faqQ} ${isOpen ? styles.faqOpen : ""}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        {f.q}
                        <ChevronIcon width={20} height={20} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            className={styles.faqA}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p>{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div>
              <Reveal>
                <h3 className={styles.blockTitle}>{t.underground.teamTitle}</h3>
                <p className={styles.blockSub}>{t.underground.teamSub}</p>
              </Reveal>
              <div className={styles.team}>
                {t.underground.team.map((m, i) => (
                  <Reveal key={TEAM_META[i].name} delay={i * 0.06}>
                    <div className={styles.member}>
                      <div className={styles.avatar}>{TEAM_META[i].initials}</div>
                      <h5>{TEAM_META[i].name}</h5>
                      <span>{m.role}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
