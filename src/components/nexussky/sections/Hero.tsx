import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
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

// TODO: замени на постоянную ссылку, когда зальёшь .jar на свой хостинг
const JAR_URL = "/downloads/nexusbot_bridge-0.6.7.jar";
const DISCORD_URL = "https://discord.gg/ZNPVarkFSE";
const TELEGRAM_URL = "https://t.me/+UtquhK9n3kdjZGMy";

function TelegramIcon(props: { width?: number; height?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.05 2.9 2.53 10.3c-1.24.5-1.23 1.2-.23 1.5l4.76 1.5 1.83 5.6c.22.6.35.8.72.8.28 0 .4-.13.56-.29l2.6-2.5 5.14 3.8c.44.29.99.13 1.15-.4.02-.06 3.1-14.6 3.1-14.6.35-1.4-.55-2-1.11-1.81ZM8.28 12.9l-.6 5.5-1.36-4.28 10.4-6.5c.29-.18.5.05.26.24Z" />
    </svg>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(4, 8, 14, 0.72)",
            backdropFilter: "blur(6px)",
            padding: "1.25rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(480px, 100%)",
              maxHeight: "85vh",
              overflowY: "auto",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "linear-gradient(180deg, rgba(14,20,30,0.98), rgba(8,12,18,0.98))",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)",
              padding: "1.75rem",
              color: "#e8edf4",
              fontFamily: "inherit",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>{title}</h3>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#e8edf4",
                  cursor: "pointer",
                  fontSize: "1rem",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ fontSize: "0.94rem", lineHeight: 1.6, color: "rgba(232,237,244,0.85)" }}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Hero() {
  const { t, lang } = useI18n();
  const [whitelistOpen, setWhitelistOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  const STATS = [
    { value: "1.21.1", label: t.hero.stats.version },
    { value: "Create", label: t.hero.stats.core },
    { value: "24 / 7", label: t.hero.stats.uptime },
    { value: "10", label: t.hero.stats.explorers },
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
          <MagneticButton
            variant="primary"
            size="large"
            icon={<PlayIcon width={18} height={18} />}
            onClick={() => setWhitelistOpen(true)}
          >
            {t.hero.play}
          </MagneticButton>
          <MagneticButton
            variant="accent"
            icon={<DownloadIcon width={18} height={18} />}
            onClick={() => setDownloadOpen(true)}
          >
            {t.hero.download}
          </MagneticButton>
          <MagneticButton
            variant="discord"
            icon={<DiscordIcon width={18} height={18} />}
            onClick={() => window.open(DISCORD_URL, "_blank", "noopener,noreferrer")}
          >
            Discord
          </MagneticButton>
          <MagneticButton
            variant="discord"
            icon={<TelegramIcon width={18} height={18} />}
            onClick={() => window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer")}
          >
            Telegram
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

      {/* Whitelist / how to play modal */}
      <Modal
        open={whitelistOpen}
        onClose={() => setWhitelistOpen(false)}
        title={lang === "ru" ? "Как начать играть" : "How to start playing"}
      >
        {lang === "ru" ? (
          <>
            <p>На NexusSky включён вайтлист — просто зайти по IP не получится, нужно сначала зарегистрироваться.</p>
            <ol style={{ margin: "0.75rem 0", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Вступи в наш Telegram-канал.</li>
              <li>Найди там бота и пройди регистрацию на вайтлист.</li>
              <li>Скачай модпак (кнопка «Скачать модпак») и запусти лаунчер.</li>
              <li>После подтверждения вайтлиста заходи на сервер по IP из лаунчера.</li>
            </ol>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
                padding: "0.6rem 1rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                color: "#e8edf4",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <TelegramIcon width={16} height={16} /> Открыть Telegram
            </a>
          </>
        ) : (
          <>
            <p>NexusSky uses a whitelist — you can't just connect by IP, you need to register first.</p>
            <ol style={{ margin: "0.75rem 0", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Join our Telegram channel.</li>
              <li>Find the bot there and complete whitelist registration.</li>
              <li>Download the modpack ("Download Modpack" button) and launch it.</li>
              <li>Once your whitelist is confirmed, connect using the IP shown in the launcher.</li>
            </ol>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
                padding: "0.6rem 1rem",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                color: "#e8edf4",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <TelegramIcon width={16} height={16} /> Open Telegram
            </a>
          </>
        )}
      </Modal>

      {/* Download modpack modal */}
      <Modal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        title={lang === "ru" ? "Скачать модпак" : "Download Modpack"}
      >
        {lang === "ru" ? (
          <>
            <p>
              Тебе нужно скачать только один файл — <b>NexusBot Bridge</b>. Это лаунчер-мод: он сам скачает
              и установит все остальные моды (включая Create и Aeronautics), а также будет автоматически
              обновлять их при выходе новых версий.
            </p>
            <ol style={{ margin: "0.75rem 0", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Скачай файл ниже.</li>
              <li>Помести его в папку <code>mods</code> своего клиента Minecraft.</li>
              <li>Запусти игру — остальные моды установятся автоматически.</li>
            </ol>
          </>
        ) : (
          <>
            <p>
              You only need to download one file — <b>NexusBot Bridge</b>. It's a launcher mod: it will download
              and install all the other required mods (including Create and Aeronautics) automatically, and keep
              them updated.
            </p>
            <ol style={{ margin: "0.75rem 0", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Download the file below.</li>
              <li>Put it in your Minecraft client's <code>mods</code> folder.</li>
              <li>Launch the game — the rest of the mods install themselves.</li>
            </ol>
          </>
        )}
        <a
          href={JAR_URL}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "0.5rem",
            padding: "0.6rem 1rem",
            borderRadius: "10px",
            background: "linear-gradient(135deg, var(--ns-turquoise, #2dd4bf), var(--ns-blue, #3b82f6))",
            color: "#04121a",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          <DownloadIcon width={16} height={16} /> NexusBot Bridge (.jar)
        </a>
      </Modal>
    </section>
  );
}
