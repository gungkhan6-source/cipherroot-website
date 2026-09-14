import type {
  CatalogItem,
  DigitalProductItem,
  ServiceItem,
} from "@/types/catalog";

export const offerings: CatalogItem[] = [
  {
    id: "gunner-dns",
    slug: "gunner-dns",
    name: "Gunner DNS",
    kind: "product",
    category: "app",
    tagline: "Privacy Shield & DNS Protection",
    description:
      "Privacy-first DNS protection, spyware scanner, ad blocking and network security for Android.",
    longDescription:
      "Privacy-first DNS protection with ad blocking, malware filtering, spyware protection and secure browsing for Android.",
    image: "/images/gunner-dns.webp",
    featured: true,
    href: "/apps/gunner-dns",
    releases: [
      {
        platform: "android",
        label: "Android",
        status: "released",
        storeUrl:
          "https://play.google.com/store/apps/details?id=com.gunner.dns&pcampaignid=web_share",
        ctaLabel: "Google Play",
      },
    ],
  },

  {
    id: "novarec",
    slug: "novarec",
    name: "NovaRec Studio",
    kind: "product",
    category: "tool",
    tagline: "Mobile & Desktop Screen Recorder",
    description:
      "Professional screen recorder for creators, gameplay, tutorials and high quality recording.",
    longDescription:
      "Professional screen recorder designed for creators, gamers and educators. Available now on Android via Google Play, with PC edition currently in development.",
    image: "/images/novarec.webp",
    featured: true,
    href: "/apps/novarec",
    releases: [
      {
        platform: "android",
        label: "Android",
        status: "released",
        storeUrl:
          "https://play.google.com/store/apps/details?id=com.shadowrec.shadowrec",
        ctaLabel: "Google Play",
      },
      {
        platform: "windows",
        label: "Windows / PC",
        status: "coming-soon",
        ctaLabel: "Coming Soon",
      },
    ],
  },

  {
    id: "retro-pixel-football",
    slug: "retro-pixel-football",
    name: "Retro Pixel Football",
    kind: "product",
    category: "game",
    tagline: "Coming Soon",
    description:
      "Fast arcade football experience inspired by the legendary 90's pixel football classics.",
    longDescription:
      "Inspired by legendary 90's football games. Fast gameplay, pixel graphics and arcade action.",
    image: "/images/pixel-football.webp",
    featured: false,
    href: "/games/retro-pixel-football",
    developmentVideo: {
      title: "Retro Pixel Football Game Development Update | Devlog # 1",
      url: "https://www.youtube.com/watch?v=i5c_nbnqtw4",
    },
    releases: [
      {
        platform: "android",
        label: "Android",
        status: "coming-soon",
        ctaLabel: "Coming Soon",
      },
    ],
  },

  {
    id: "inferno-pool",
    slug: "inferno-pool",
    name: "Inferno Pool",
    kind: "product",
    category: "game",
    tagline: "Online Multiplayer Pool Game",
    description:
      "An online multiplayer pool game featuring real-time gameplay, in-game chat, smooth physics and fast-paced arcade action.",
    longDescription:
      "Inferno Pool is an online multiplayer pool game currently in development. It combines real-time multiplayer matches, an in-game chat system, smooth ball physics and competitive arcade-style 8-ball gameplay. Releases on web game portals and mobile platforms are planned.",
    image: "/images/inferno-pool.png",
    featured: false,
    href: "/games/inferno-pool",
    releases: [
      {
        platform: "web",
        label: "Yandex Games",
        status: "coming-soon",
        ctaLabel: "Yandex Games",
      },
      {
        platform: "web",
        label: "CrazyGames",
        status: "coming-soon",
        ctaLabel: "CrazyGames",
      },
      {
        platform: "web",
        label: "Pixi / Pixidus",
        status: "coming-soon",
        ctaLabel: "Pixi",
      },
      {
        platform: "android",
        label: "Google Play",
        status: "coming-soon",
        ctaLabel: "Google Play",
      },
      {
        platform: "web",
        label: "Facebook Games",
        status: "coming-soon",
        ctaLabel: "Facebook Games",
      },
    ],
  },

  {
    id: "novarec-voice",
    slug: "novarec-voice",
    name: "NovaRec Voice V1",
    kind: "product",
    category: "saas",
    tagline: "AI Voice & Text-to-Speech Platform",
    description:
      "AI voice and text-to-speech platform for generating natural voices, creating personalized voice profiles and converting text into high-quality speech.",
    longDescription:
      "AI Voice & Text-to-Speech platform currently in V1 development. Planned capabilities include a natural AI voice library, personal voice cloning, multi-language speech generation (Turkish, English, German), in-browser listening and high-quality audio downloads.",
    image: "/images/novarec-voice.png",
    featured: false,
    href: "/apps/novarec-voice",
    releases: [
      {
        platform: "web",
        label: "Web Platform",
        status: "coming-soon",
        ctaLabel: "Coming Soon",
      },
    ],
  },

  {
    id: "novarec-lyric-studio",
    slug: "novarec-lyric-studio",
    name: "NovaRec Lyric Studio",
    kind: "product",
    category: "tool",
    tagline: "Lyric Video & Music Creation Studio",
    description:
      "Desktop studio for creating and editing lyric videos, built around music, timing and visual presentation.",
    longDescription:
      "NovaRec Lyric Studio is a Windows desktop application currently in development. It focuses on lyric video creation and editing — arranging lyrics against an audio timeline and producing music visuals. Individual features are still being built and no public release is available yet.",
    image: "/images/novarec-lyric-studio.png",
    featured: false,
    href: "/apps/novarec-lyric-studio",
    releases: [
      {
        platform: "windows",
        label: "Windows / PC",
        status: "coming-soon",
        ctaLabel: "Coming Soon",
      },
    ],
  },
];

export const digitalProducts = offerings.filter(
  (item): item is DigitalProductItem => item.kind === "product",
);

// Services are catalog items with kind "service". CipherRoot lists none, so the
// Services module stays hidden on this site.
export const services = offerings.filter(
  (item): item is ServiceItem => item.kind === "service",
);
