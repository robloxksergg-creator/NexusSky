import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en";

const STORAGE_KEY = "nexussky-lang";

/* ------------------------------------------------------------------ */
/* Dictionary                                                          */
/* ------------------------------------------------------------------ */

export const dict = {
  en: {
    nav: {
      links: {
        mountains: "World",
        industry: "Create",
        underground: "Depths",
        radioactive: "Hazard",
        donate: "Ranks",
      },
      copied: "Copied!",
      langLabel: "RU",
    },
    hero: {
      eyebrow: "Industrial Adventure · Season II",
      slogan:
        "Build machines. Chart airships. Descend from the clouds to bedrock through a world of factories, radioactive ruins and ancient vaults. This is not a server — it's an expedition.",
      play: "Play Now",
      download: "Download Modpack",
      discord: "Join Discord",
      scroll: "Descend",
      stats: {
        version: "Version",
        core: "Core Mod",
        uptime: "Uptime",
        explorers: "Explorers",
      },
    },
    mountains: {
      kicker: "Section 02 — The Surface World",
      head1: "A world carved for ",
      em: "expeditions",
      head2: ", not tutorials.",
      lead: "NexusSky begins above the treeline. Realistic mountains rise into the clouds, waterfalls thunder into glacial rivers, and endless pine forests hide the entrances to everything below. Every biome is a chapter — and you write it with iron, gears and ambition.",
      pillars: [
        {
          title: "Colossal Terrain",
          text: "Vanilla-plus generation pushed to the limit — towering ranges, deep valleys, winding rivers and forests that stretch past the horizon.",
        },
        {
          title: "True Exploration",
          text: "No hand-holding. Villages, hidden structures and biomes reward the curious. A live world map tracks every claim.",
        },
        {
          title: "Massive Caves",
          text: "Beneath every peak lies a labyrinth of caverns, ore veins and crystal chambers waiting to be industrialized.",
        },
        {
          title: "Fair & Protected",
          text: "Land claims, anti-grief and an active team keep your builds safe while the world stays brutal and beautiful.",
        },
      ],
    },
    industrial: {
      kicker: "Section 03 — Industrial Civilization",
      head1: "Where the world learns to ",
      em: "build itself",
      head2: ".",
      lead: "Descend past the treeline and the landscape turns mechanical. Gears turn, smoke rises, conveyor belts hum. Powered by Create and Aeronautics, NexusSky lets you engineer machines, factories and flying fleets on a scale Minecraft was never meant to hold.",
      features: [
        {
          title: "Create Machinery",
          text: "Rotational power, kinetic contraptions and full automation. Build assembly lines, drills and moving structures that actually work.",
          tag: "Core Mod · Create",
        },
        {
          title: "Aeronautics Airships",
          text: "Design and pilot your own airships. Ferry cargo across mountains or raid floating outposts high above the clouds.",
          tag: "Core Mod · Aeronautics",
        },
        {
          title: "Power & Factories",
          text: "Windmills, steam engines and generators feed sprawling factories. Optimize throughput and dominate the economy.",
          tag: "Automation",
        },
        {
          title: "Railroads & Logistics",
          text: "Lay tracks between colonies, run automated trains and connect the whole world into one industrial network.",
          tag: "Transport",
        },
        {
          title: "Deep Progression",
          text: "A hand-tuned tech tree turns raw ore into refined machines. Every milestone unlocks bigger, wilder builds.",
          tag: "Progression",
        },
        {
          title: "Living Economy",
          text: "Trade resources, hire crews and build corporations. Player-driven markets keep the industrial world alive.",
          tag: "Community",
        },
      ],
    },
    underground: {
      kicker: "Section 04 — The Underground",
      head1: "Everything you need, ",
      em: "carved into the rock.",
      head2: "",
      lead: "Below the factories the world opens into vast caverns lit by lava and crystal. This is the heart of the community — stats, stories, answers and the crew that keeps the lights on.",
      stats: [
        { label: "Explorers" },
        { label: "Blocks Mined" },
        { label: "Airships Built" },
        { label: "Uptime" },
      ],
      galleryTitle: "World Gallery",
      gallerySub: "Snapshots from across NexusSky — swap these for your own captures anytime.",
      gallery: [
        "Alpine ridgeline · Overworld",
        "Pine valley outpost",
        "River delta base",
        "Create foundry",
        "Airship dock at dawn",
        "Crystal cavern",
      ],
      newsTitle: "Latest Dispatches",
      newsSub: "News from the frontier.",
      news: [
        {
          cat: "Update",
          title: "Season II — The Deep Vaults",
          text: "Ancient deep-slate structures now generate below Y-48, packed with rare industrial alloys and guardian mechanisms.",
        },
        {
          cat: "Event",
          title: "The Great Airship Regatta",
          text: "Pilots raced custom Aeronautics ships across the northern range. Blueprints of the winners are now craftable.",
        },
        {
          cat: "Balance",
          title: "Reactor Overhaul",
          text: "Radioactive zones rebalanced — higher risk, higher reward. New hazmat tiers protect against toxic fallout.",
        },
      ],
      faqTitle: "Frequently Asked",
      faqSub: "Everything before your first login.",
      faq: [
        {
          q: "How do I join NexusSky?",
          a: "Download our modpack from the Telegram channel, launch it, and connect to nexus-mc.fun. The launcher handles every mod, including Create and Aeronautics.",
        },
        {
          q: "Is the server whitelisted?",
          a: "Whitelist is active. Download the modpack in our Telegram channel and register through the bot there.",
        },
        {
          q: "What are the main mods?",
          a: "Create and Aeronautics form the industrial backbone, layered on near-vanilla generation with vastly improved terrain, caves and structures.",
        },
        {
          q: "Do I need a powerful PC?",
          a: "A mid-range machine with 6GB allocated RAM runs smoothly. We ship an optimized performance profile in the pack.",
        },
      ],
      teamTitle: "The Crew",
      teamSub: "Builders, engineers & guardians.",
      team: [
        { role: "Founder / Ops" },
        { role: "Lead Builder" },
        { role: "Systems / Create" },
        { role: "Community" },
      ],
    },
    radioactive: {
      kicker: "Section 05 — Restricted Zone",
      head1: "Beyond the fence: the ",
      em: "radioactive",
      head2: " frontier.",
      lead: "Green fog rolls across shattered laboratories. Warning lights still blink over reactors that never shut down. The most valuable resources on NexusSky lie here — and so do the deadliest ways to lose everything you've built.",
      warn: "Radiation system is still in development · Coming soon",
      hazards: [
        {
          title: "Dangerous Expeditions",
          text: "Venture into the fallout belt where radiation ticks up with every block. Only crews with hazmat gear return with the loot.",
        },
        {
          title: "Special Resources",
          text: "Irradiated ores and reactor cores power the highest tiers of Create machinery. Nowhere else on the map yields them.",
        },
        {
          title: "Abandoned Reactors",
          text: "Reboot broken reactors for enormous power — or watch them melt down and reshape the terrain around you.",
        },
        {
          title: "Industrial Catastrophe",
          text: "This zone is what happens when ambition outruns safety. Decode the ruins to learn what the old builders unleashed.",
        },
      ],
    },
    deepslate: {
      kicker: "Section 06 — Deep Slate Control Center",
      head1: "Power up your run. ",
      em: "Fuel the world.",
      head2: "",
      lead: "You've reached the bedrock command deck. Every rank keeps the reactors online and unlocks tools that make your industrial empire run faster. No pay-to-win — just deeper access, more automation, and cosmetics worthy of a founder.",
      readouts: [
        { k: "CORE TEMP", v: "STABLE" },
        { k: "UPTIME", v: "99.98%" },
        { k: "REACTORS", v: "6 ONLINE" },
        { k: "INSTANT DELIVERY", v: "ENABLED" },
      ],
      popular: "Most Popular",
      perMonth: "/ month",
      select: "Select",
      ranks: [
        {
          name: "Explorer",
          perks: ["Colored name tag", "2 home waypoints", "/hat cosmetic", "Explorer chat prefix"],
        },
        {
          name: "Engineer",
          perks: ["Everything in Explorer", "6 home waypoints", "Create blueprint slots", "Priority queue access"],
        },
        {
          name: "Industrialist",
          perks: ["Everything in Engineer", "Unlimited waypoints", "Personal airship dock", "Exclusive factory kit", "Monthly resource crate"],
        },
        {
          name: "Elite",
          perks: ["Everything in Industrialist", "Radioactive zone perks", "Custom particle trail", "Early feature access"],
        },
        {
          name: "Supporter",
          perks: ["Everything in Elite", "Name in the credits wall", "Direct dev channel", "Vote on new modpacks"],
        },
      ],
    },
    horizon: {
      kicker: "Section 07 — The Horizon Awaits",
      head1: "The world is ",
      em: "yours",
      head2: " to build.",
      sub: "From the sunlit peaks to the radioactive deep, one continuous world is waiting. Bring your crew, spin up your first Create contraption, and launch an airship into the NexusSky.",
      ipLabel: "Java Server IP",
      copy: "Copy IP",
      copied: "Copied!",
      rights: "Industrial Adventure · Powered by Create & Aeronautics. Not affiliated with Mojang or Microsoft.",
    },
  },

  ru: {
    nav: {
      links: {
        mountains: "Мир",
        industry: "Крафт",
        underground: "Глубины",
        radioactive: "Опасность",
        donate: "Ранги",
      },
      copied: "Скопировано!",
      langLabel: "EN",
    },
    hero: {
      eyebrow: "Индустриальное приключение · Сезон II",
      slogan:
        "Строй машины. Управляй дирижаблями. Спускайся с облаков до бедрока через мир фабрик, радиоактивных руин и древних хранилищ. Это не сервер — это экспедиция.",
      play: "Играть",
      download: "Скачать модпак",
      discord: "В Discord",
      scroll: "Вниз",
      stats: {
        version: "Версия",
        core: "Осн. мод",
        uptime: "Аптайм",
        explorers: "Игроков",
      },
    },
    mountains: {
      kicker: "Секция 02 — Наземный мир",
      head1: "Мир создан для ",
      em: "экспедиций",
      head2: ", а не туториалов.",
      lead: "NexusSky начинается выше линии леса. Реалистичные горы уходят в облака, водопады срываются в ледниковые реки, а бескрайние сосновые леса скрывают входы во всё, что лежит ниже. Каждый биом — это глава, и ты пишешь её железом, шестернями и амбициями.",
      pillars: [
        {
          title: "Колоссальный ландшафт",
          text: "Ванильная генерация, доведённая до предела — исполинские хребты, глубокие долины, извилистые реки и леса до самого горизонта.",
        },
        {
          title: "Настоящее исследование",
          text: "Никакой опеки. Деревни, скрытые структуры и биомы награждают любопытных. Живая карта мира отслеживает каждую заявку.",
        },
        {
          title: "Огромные пещеры",
          text: "Под каждой вершиной — лабиринт пещер, рудных жил и кристальных залов, ждущих индустриализации.",
        },
        {
          title: "Честно и под защитой",
          text: "Приваты, анти-грифер и активная команда берегут твои постройки, а мир остаётся суровым и прекрасным.",
        },
      ],
    },
    industrial: {
      kicker: "Секция 03 — Индустриальная цивилизация",
      head1: "Где мир учится ",
      em: "строить себя",
      head2: ".",
      lead: "Спустись ниже линии леса — и ландшафт становится механическим. Крутятся шестерни, поднимается дым, гудят конвейеры. На базе Create и Aeronautics NexusSky позволяет строить машины, фабрики и летающие флотилии в масштабах, для которых Minecraft не создавался.",
      features: [
        {
          title: "Механизмы Create",
          text: "Вращательная энергия, кинетические контрапции и полная автоматизация. Собирай конвейеры, буры и движущиеся конструкции, которые реально работают.",
          tag: "Осн. мод · Create",
        },
        {
          title: "Дирижабли Aeronautics",
          text: "Проектируй и пилотируй собственные дирижабли. Перевози грузы через горы или штурмуй парящие форпосты высоко над облаками.",
          tag: "Осн. мод · Aeronautics",
        },
        {
          title: "Энергия и фабрики",
          text: "Ветряки, паровые двигатели и генераторы питают огромные фабрики. Оптимизируй поток и захватывай экономику.",
          tag: "Автоматизация",
        },
        {
          title: "Железные дороги и логистика",
          text: "Прокладывай пути между колониями, запускай автоматические поезда и объединяй весь мир в единую индустриальную сеть.",
          tag: "Транспорт",
        },
        {
          title: "Глубокая прогрессия",
          text: "Выверенное древо технологий превращает сырую руду в совершенные машины. Каждая веха открывает всё более грандиозные постройки.",
          tag: "Прогрессия",
        },
        {
          title: "Живая экономика",
          text: "Торгуй ресурсами, нанимай команды и строй корпорации. Рынки игроков держат индустриальный мир живым.",
          tag: "Сообщество",
        },
      ],
    },
    underground: {
      kicker: "Секция 04 — Подземелье",
      head1: "Всё, что нужно, ",
      em: "высечено в камне.",
      head2: "",
      lead: "Под фабриками мир раскрывается в огромные пещеры, освещённые лавой и кристаллами. Это сердце сообщества — статистика, истории, ответы и команда, что держит свет включённым.",
      stats: [
        { label: "Игроков" },
        { label: "Блоков добыто" },
        { label: "Дирижаблей" },
        { label: "Аптайм" },
      ],
      galleryTitle: "Галерея мира",
      gallerySub: "Снимки со всего NexusSky — в любой момент замени их своими скриншотами.",
      gallery: [
        "Альпийский хребет · Верхний мир",
        "Форпост в сосновой долине",
        "База в дельте реки",
        "Литейный цех Create",
        "Док дирижаблей на рассвете",
        "Кристальная пещера",
      ],
      newsTitle: "Свежие сводки",
      newsSub: "Новости с фронтира.",
      news: [
        {
          cat: "Обновление",
          title: "Сезон II — Глубинные хранилища",
          text: "Древние структуры из глубинного сланца теперь генерируются ниже Y-48, полные редких промышленных сплавов и стражей-механизмов.",
        },
        {
          cat: "Событие",
          title: "Великая регата дирижаблей",
          text: "Пилоты гнали свои корабли Aeronautics через северный хребет. Чертежи победителей теперь можно скрафтить.",
        },
        {
          cat: "Баланс",
          title: "Переработка реакторов",
          text: "Радиоактивные зоны перебалансированы — выше риск, выше награда. Новые уровни защиты спасают от токсичных осадков.",
        },
      ],
      faqTitle: "Частые вопросы",
      faqSub: "Всё до твоего первого входа.",
      faq: [
        {
          q: "Как попасть на NexusSky?",
          a: "Скачай модпак из Telegram-канала, запусти его и подключись к nexus-mc.fun. Лаунчер сам установит все моды, включая Create и Aeronautics.",
        },
        {
          q: "Есть ли вайтлист?",
          a: "Вайтлист ЕСТЬ. Скачай модпак в ТГК, в боте там же и зарегайся для вайтлиста.",
        },
        {
          q: "Какие основные моды?",
          a: "Create и Aeronautics образуют индустриальный костяк поверх почти ванильной генерации с сильно улучшенным ландшафтом, пещерами и структурами.",
        },
        {
          q: "Нужен ли мощный ПК?",
          a: "Средней машины с 6 ГБ выделенной памяти достаточно. В паке идёт оптимизированный профиль производительности.",
        },
      ],
      teamTitle: "Команда",
      teamSub: "Строители, инженеры и хранители.",
      team: [
        { role: "Основатель / Ops" },
        { role: "Главный строитель" },
        { role: "Системы / Create" },
        { role: "Сообщество" },
      ],
    },
    radioactive: {
      kicker: "Секция 05 — Запретная зона",
      head1: "За ограждением — ",
      em: "радиоактивный",
      head2: " фронтир.",
      lead: "Зелёный туман стелется над разрушенными лабораториями. Над реакторами, что так и не выключились, всё ещё мигают тревожные огни. Здесь лежат самые ценные ресурсы NexusSky — и самые смертельные способы потерять всё, что ты построил.",
      warn: "Радиационная система ещё в разработке · Скоро", 
      hazards: [
        {
          title: "Опасные экспедиции",
          text: "Отправляйся в пояс осадков, где радиация растёт с каждым блоком. Только команды в защитных костюмах возвращаются с добычей.",
        },
        {
          title: "Особые ресурсы",
          text: "Облучённые руды и ядра реакторов питают высшие уровни механизмов Create. Больше нигде на карте их не добыть.",
        },
        {
          title: "Заброшенные реакторы",
          text: "Перезапусти сломанные реакторы ради огромной мощи — или наблюдай, как они плавятся и перекраивают ландшафт вокруг.",
        },
        {
          title: "Индустриальная катастрофа",
          text: "Эта зона — то, что бывает, когда амбиции обгоняют безопасность. Расшифруй руины, чтобы узнать, что выпустили древние строители.",
        },
      ],
    },
    deepslate: {
      kicker: "Секция 06 — Центр управления Deep Slate",
      head1: "Прокачай игру. ",
      em: "Питай мир.",
      head2: "",
      lead: "Ты добрался до командной палубы у бедрока. Каждый ранг держит реакторы онлайн и открывает инструменты, ускоряющие твою индустриальную империю. Никакого pay-to-win — только больше доступа, автоматизации и косметики, достойной основателя.",
      readouts: [
        { k: "ТЕМП. ЯДРА", v: "СТАБИЛЬНО" },
        { k: "АПТАЙМ", v: "99.98%" },
        { k: "РЕАКТОРЫ", v: "6 ОНЛАЙН" },
        { k: "МГНОВ. ВЫДАЧА", v: "ВКЛ" },
      ],
      popular: "Популярный",
      perMonth: "/ месяц",
      select: "Выбрать",
      ranks: [
        {
          name: "Explorer",
          perks: ["Цветной ник", "2 точки дома", "Косметика /hat", "Префикс Explorer в чате"],
        },
        {
          name: "Engineer",
          perks: ["Всё из Explorer", "6 точек дома", "Слоты чертежей Create", "Приоритетная очередь"],
        },
        {
          name: "Industrialist",
          perks: ["Всё из Engineer", "Безлимит точек дома", "Личный док дирижаблей", "Эксклюзивный набор фабрики", "Ежемесячный ящик ресурсов"],
        },
        {
          name: "Elite",
          perks: ["Всё из Industrialist", "Перки радиоактивной зоны", "Свой шлейф частиц", "Ранний доступ к функциям"],
        },
        {
          name: "Supporter",
          perks: ["Всё из Elite", "Имя на стене титров", "Прямой канал разработчиков", "Голос за новые модпаки"],
        },
      ],
    },
    horizon: {
      kicker: "Секция 07 — Горизонт зовёт",
      head1: "Этот мир ",
      em: "твой",
      head2: " — построй его.",
      sub: "От залитых солнцем вершин до радиоактивных глубин — тебя ждёт один непрерывный мир. Собери команду, запусти свою первую контрапцию Create и подними дирижабль в небо NexusSky.",
      ipLabel: "IP Java-сервера",
      copy: "Скопировать IP",
      copied: "Скопировано!",
      rights: "Индустриальное приключение · На базе Create & Aeronautics. Не связано с Mojang или Microsoft.",
    },
  },
} as const;

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

type Dict = (typeof dict)["en"];

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with "ru" so SSR and the first client render match.
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ru" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ru" ? "en" : "ru");
  }, [lang, setLang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, toggle, t: dict[lang] as Dict }),
    [lang, setLang, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
