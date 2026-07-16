import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { CheckIcon } from "@/components/nexussky/Icons";
import { Particles } from "@/components/nexussky/decor/Particles";
import styles from "./DeepSlate.module.css";

const RANK_META = [
  { tag: "Tier 01", price: "3", tier: "var(--ns-turquoise)", bars: [0.5, 0.7, 0.4, 0.6] },
  { tag: "Tier 02", price: "7", tier: "var(--ns-blue)", bars: [0.6, 0.9, 0.7, 0.8] },
  { tag: "Tier 03", price: "14", tier: "var(--ns-gold)", featured: true, bars: [0.8, 1, 0.9, 1] },
  { tag: "Tier 04", price: "24", tier: "var(--ns-orange)", bars: [1, 0.9, 1, 0.85] },
  { tag: "Tier 05", price: "40", tier: "var(--ns-turquoise-soft)", bars: [1, 1, 0.95, 1] },
];

export function DeepSlate() {
  const { t } = useI18n();
  return (
    <section id="donate" className={styles.section}>
      <div className={styles.bedrock} aria-hidden="true" />
      <div className={styles.voidGlow} aria-hidden="true" />
      <div className={styles.voidParticles} aria-hidden="true">
        <Particles count={40} kind="dust" seed={42} rise />
      </div>
      <div className={styles.grid3d} />
      <div className={styles.ambient} />

      <div className={styles.inner}>
        <Reveal>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span className={styles.termTitle}>nexussky://deep-slate/control-center</span>
            </div>
            <div className={styles.termBody}>
              <span className={styles.kicker}>{t.deepslate.kicker}</span>
              <h2 className={styles.heading}>
                {t.deepslate.head1}<em>{t.deepslate.em}</em>{t.deepslate.head2}
              </h2>
              <p className={styles.lead}>{t.deepslate.lead}</p>
              <div className={styles.readouts}>
                {t.deepslate.readouts.map((r) => (
                  <span key={r.k} className={styles.readout}>
                    {r.k} <b>{r.v}</b>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className={styles.panels}>
          {t.deepslate.ranks.map((r, i) => {
            const meta = RANK_META[i];
            return (
              <Reveal key={r.name} delay={(i % 3) * 0.07}>
                <article
                  className={`${styles.panel} ${meta.featured ? styles.featured : ""}`}
                  style={{ ["--tier" as string]: meta.tier }}
                >
                  {meta.featured && <span className={styles.badge}>{t.deepslate.popular}</span>}
                  <div className={styles.gauge}>
                    {meta.bars.map((b, bi) => (
                      <div key={bi} className={styles.bar}>
                        <div
                          className={styles.barFill}
                          style={{ animationDelay: `${bi * 0.25}s`, opacity: b }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.rankName}>{r.name}</div>
                  <div className={styles.rankTag}>{meta.tag}</div>
                  <div className={styles.price}>
                    <b>${meta.price}</b> <span>{t.deepslate.perMonth}</span>
                  </div>
                  <ul className={styles.perks}>
                    {r.perks.map((p) => (
                      <li key={p}>
                        <CheckIcon width={15} height={15} className={styles.check} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button className={styles.select}>{t.deepslate.select} {r.name}</button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
