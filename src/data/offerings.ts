import type { CatalogItem, DigitalProductItem } from "@/types/catalog";

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
    tagline: "Fast Arcade 8-Ball & Pool Action",
    description:
      "Dynamic arcade pool game featuring fast-paced gameplay and vibrant visuals across web and mobile platforms.",
    longDescription:
      "Dynamic arcade pool game featuring fast-paced gameplay, smooth physics and competitive challenges across major web game portals and mobile.",
    image: "/images/pixel-football.webp",
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
      "Advanced AI text-to-speech, rich voice library, audio listening, voice download and voice cloning infrastructure.",
    longDescription:
      "AI Voice & Text-to-Speech platform currently in development. Featuring an expansive voice library, personal voice cloning, multi-language speech generation (Turkish, English, German), audio playback and high-quality voice downloads.",
    image: "/images/novarec.webp",
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
];

export const digitalProducts = offerings.filter(
  (item): item is DigitalProductItem => item.kind === "product",
);
