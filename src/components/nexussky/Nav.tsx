import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useI18n } from "@/i18n/i18n";
import styles from "./Nav.module.css";

const LINK_KEYS = [
  { href: "#mountains", key: "mountains" },
  { href: "#industry", key: "industry" },
  { href: "#underground", key: "underground" },
  { href: "#radioactive", key: "radioactive" },
  { href: "#donate", key: "donate" },
] as const;

const SERVER_IP = "nexus-mc.fun";
const DOCS_URL = "https://nexuswiki.pages.dev/";

export function Nav() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyIp = () => {
    navigator.clipboard?.writeText(SERVER_IP).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <motion.div className={styles.progress} style={{ scaleX, width: "100%" }} />
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>N</span>
          Nexus<em>Sky</em>
        </a>
        <div className={styles.links}>
          {LINK_KEYS.map((l) => (
            <a key={l.href} href={l.href}>
              {t.nav.links[l.key]}
            </a>
          ))}
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
            {lang === "ru" ? "Вики" : "Wiki"}
          </a>
        </div>
        <div className={styles.right}>
          <button
            className={styles.lang}
            onClick={toggle}
            aria-label="Switch language"
            title={lang === "ru" ? "Switch to English" : "Переключить на русский"}
          >
            <span className={lang === "ru" ? styles.langActive : ""}>RU</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === "en" ? styles.langActive : ""}>EN</span>
          </button>
          <button className={styles.ip} onClick={copyIp}>
            <span className={styles.ipDot} />
            {copied ? t.nav.copied : SERVER_IP}
          </button>
        </div>
      </nav>
    </>
  );
}
