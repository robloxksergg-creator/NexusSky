import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const PlayIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" stroke="none" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const DiscordIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M19.3 5.6A17 17 0 0 0 15 4.2l-.2.4a15 15 0 0 1 3.6 1.3 15 15 0 0 0-12.9 0 15 15 0 0 1 3.6-1.3L9 4.2A17 17 0 0 0 4.7 5.6C2.1 9.5 1.4 13.3 1.7 17a17 17 0 0 0 5.2 2.6l.6-.9a11 11 0 0 1-1.8-.9l.4-.3a12 12 0 0 0 10.2 0l.4.3c-.6.4-1.2.6-1.8.9l.6.9A17 17 0 0 0 22 17c.4-4.3-.6-8-2.7-11.4ZM8.5 14.7c-1 0-1.9-1-1.9-2.1 0-1.2.8-2.1 1.9-2.1s1.9 1 1.9 2.1c0 1.2-.9 2.1-1.9 2.1Zm7 0c-1 0-1.9-1-1.9-2.1 0-1.2.9-2.1 1.9-2.1s1.9 1 1.9 2.1c0 1.2-.8 2.1-1.9 2.1Z" />
  </svg>
);

export const GithubIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.3 3.3 5.3 3.6 5.3 3.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const TelegramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m21 4-2.5 15.5-6-4.5-3 3v-4.5L18 6 7 12 3 10.5 21 4Z" />
  </svg>
);

export const MapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 4 6 2 6-2v14l-6 2-6-2-6 2V6l6-2Zm0 0v14m6-12v14" />
  </svg>
);

export const BookIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
  </svg>
);

export const AirshipIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="9" rx="9" ry="4.5" />
    <path d="M9 13.2 8 17h8l-1-3.8M12 13.5V17" />
  </svg>
);

export const MountainIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m3 20 6-11 4 6 2-3 6 8H3Z" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="currentColor" stroke="none" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v6c0 4.2 3 7.5 7 9 4-1.5 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const RadiationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 3a9 9 0 0 1 7.8 4.5l-4.3 2.5A4 4 0 0 0 12 8V3ZM4.2 7.5A9 9 0 0 0 4.2 16.5l4.3-2.5A4 4 0 0 1 8.5 10 4 4 0 0 1 8.5 10L4.2 7.5ZM12 21a9 9 0 0 0 7.8-4.5l-4.3-2.5A4 4 0 0 1 12 16v5Z" />
  </svg>
);

export const CrystalIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2 5 9l7 13 7-13-7-7Zm0 0v20M5 9h14" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M9 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 20v-1.5a4 4 0 0 0-3-3.9M16 3.6a4 4 0 0 1 0 7.8" />
  </svg>
);

export const ChevronIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
