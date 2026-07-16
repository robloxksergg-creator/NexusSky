import { useState } from "react";
import { useI18n } from "@/i18n/i18n";
import { Reveal } from "@/components/nexussky/Reveal";
import { Particles } from "@/components/nexussky/decor/Particles";
import { DiscordIcon, TelegramIcon, MapIcon } from "@/components/nexussky/Icons";
import styles from "./Horizon.module.css";

const SERVER_IP = "nexus-mc.fun";

export function Horizon() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard?.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="join" className={styles.section}>
      <div className={styles.glow} />
      <Particles count={26} kind="spark" seed={51} rise />

      <Reveal>
        <div className={styles.cta}>
          <span className={styles.kicker}>{t.horizon.kicker}</span>
          <h1 className={styles.title}>
            {t.horizon.head1}<em>{t.horizon.em}</em>{t.horizon.head2}
          </h1>
          <p className={styles.sub}>{t.horizon.sub}</p>

          <div className={styles.ipCard}>
            <div>
              <div className={styles.ipLabel}>{t.horizon.ipLabel}</div>
              <div className={styles.ipValue}>{SERVER_IP}</div>
            </div>
            <button className={styles.copyBtn} onClick={copyIp}>
              {copied ? t.horizon.copied : t.horizon.copy}
            </button>
          </div>
        </div>
      </Reveal>

      <footer className={styles.footer}>
        <div className={styles.fBrand}>
          Nexus<em>Sky</em>
        </div>
        <div className={styles.socials}>
          <a className={styles.social} href="https://discord.gg/DGdwPnX3RC" target="_blank" rel="noreferrer" aria-label="Discord">
            <DiscordIcon width={20} height={20} />
          </a>
          <a className={styles.social} href="https://t.me/+UtquhK9n3kdjZGMy" target="_blank" rel="noreferrer" aria-label="Telegram">
            <TelegramIcon width={20} height={20} />
          </a>
          <a className={styles.social} href="https://map.nexus-mc.fun/" target="_blank" rel="noreferrer" aria-label="World Map">
            <MapIcon width={20} height={20} />
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} NexusSky — {t.horizon.rights}
        </div>
      </footer>
    </section>
  );
}
