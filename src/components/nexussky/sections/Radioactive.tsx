import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { Particles } from "@/components/nexussky/decor/Particles";
import {
  RadiationIcon,
  MapIcon,
  CrystalIcon,
  BoltIcon,
} from "@/components/nexussky/Icons";
import styles from "./Radioactive.module.css";

const HAZARD_ICONS = [
  <MapIcon width={26} height={26} />,
  <CrystalIcon width={26} height={26} />,
  <BoltIcon width={26} height={26} />,
  <RadiationIcon width={26} height={26} />,
];

export function Radioactive() {
  const { t } = useI18n();
  return (
    <section id="radioactive" className={styles.section}>
      <div className={styles.hazard} />
      <div className={styles.toxGlow} />
      <div className={styles.fog} />
      <Particles count={30} kind="toxic" seed={29} rise />

      <div className={styles.inner}>
        <Reveal>
          <div className={styles.top}>
            <div className={styles.radSymbol}>
              <RadiationIcon width={40} height={40} />
            </div>
            <div>
              <span className={styles.kicker}>{t.radioactive.kicker}</span>
              <h2 className={styles.heading}>
                {t.radioactive.head1}<em>{t.radioactive.em}</em>{t.radioactive.head2}
              </h2>
            </div>
          </div>
          <p className={styles.lead}>{t.radioactive.lead}</p>
          <div className={styles.warn}>
            <span className={styles.warnDot} />
            {t.radioactive.warn}
          </div>
        </Reveal>

        <div className={styles.cards}>
          {t.radioactive.hazards.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.08}>
              <article className={styles.card}>
                <div className={styles.cardIcon}>{HAZARD_ICONS[i]}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={styles.hazard} />
    </section>
  );
}
