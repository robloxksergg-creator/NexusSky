import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { Gear } from "@/components/nexussky/decor/Gear";
import { Particles } from "@/components/nexussky/decor/Particles";
import {
  GearIcon,
  AirshipIcon,
  BoltIcon,
  MapIcon,
  BookIcon,
  ShieldIcon,
} from "@/components/nexussky/Icons";
import styles from "./Industrial.module.css";

const FEATURE_ICONS = [
  <GearIcon />,
  <AirshipIcon />,
  <BoltIcon />,
  <MapIcon />,
  <BookIcon />,
  <ShieldIcon />,
];

export function Industrial() {
  const { t } = useI18n();
  return (
    <section id="industry" className={styles.section}>
      <div className={styles.gearsLayer}>
        <Gear className={styles.g1} size={260} speed={40} teeth={16} />
        <Gear className={styles.g2} size={150} speed={26} reverse teeth={12} />
        <Gear className={styles.g3} size={300} speed={46} reverse teeth={18} />
        <Gear className={styles.g4} size={170} speed={30} teeth={12} />
        <Gear className={styles.g5} size={110} speed={22} reverse teeth={10} />
        <Gear className={styles.g6} size={90} speed={18} teeth={9} />
        <Gear className={styles.g7} size={210} speed={38} reverse teeth={15} />
        <Gear className={styles.g8} size={130} speed={24} teeth={11} />
        <Gear className={styles.g9} size={70} speed={16} reverse teeth={8} />
        <Gear className={styles.g10} size={190} speed={34} teeth={14} />
      </div>
      <div className={styles.steam} />
      <Particles count={22} kind="ember" seed={13} rise />

      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <span className={styles.kicker}>{t.industrial.kicker}</span>
            <h2 className={styles.heading}>
              {t.industrial.head1}<em>{t.industrial.em}</em>{t.industrial.head2}
            </h2>
            <p className={styles.lead}>{t.industrial.lead}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {t.industrial.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <article className={styles.card}>
                <div className={styles.cardGear}>
                  <GearIcon width={90} height={90} />
                </div>
                <div className={styles.cardIcon}>{FEATURE_ICONS[i]}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className={styles.tag}>{f.tag}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
