export type ProductKind = "app" | "game";

export type ProductStatus = "Available" | "Coming Soon";

export type Product = {
  kind: ProductKind;
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: ProductStatus;
  href: string;
  button: string;
  playstore?: string;
};

export const products: Product[] = [
  {
    kind: "app",
    slug: "gunner-dns",
    name: "Gunner DNS",
    image: "/images/gunner-dns.webp",
    tagline: "Privacy Shield & DNS Protection",
    description:
      "Privacy-first DNS protection, spyware scanner, ad blocking and network security for Android.",
    longDescription:
      "Privacy-first DNS protection with ad blocking, malware filtering, spyware protection and secure browsing for Android.",
    status: "Available",
    href: "/apps/gunner-dns",
    button: "Google Play",
    playstore:
      "https://play.google.com/store/apps/details?id=com.gunner.dns&pcampaignid=web_share",
  },

  {
    kind: "app",
    slug: "novarec",
    name: "NovaRec Studio",
    image: "/images/novarec.webp",
    tagline: "Mobile Screen Recorder",
    description:
      "Professional mobile screen recorder for creators, gameplay, tutorials and high quality recording.",
    longDescription:
      "Professional Android screen recorder designed for creators, gamers and educators.",
    status: "Coming Soon",
    href: "/apps/novarec",
    button: "Coming Soon",
  },

  {
    kind: "game",
    slug: "retro-pixel-football",
    name: "Retro Pixel Football",
    image: "/images/pixel-football.webp",
    tagline: "Coming Soon",
    description:
      "Fast arcade football experience inspired by the legendary 90's pixel football classics.",
    longDescription:
      "Inspired by legendary 90's football games. Fast gameplay, pixel graphics and arcade action.",
    status: "Coming Soon",
    href: "/games/retro-pixel-football",
    button: "Coming Soon",
  },
];

export const apps = products.filter((product) => product.kind === "app");

export const games = products.filter((product) => product.kind === "game");
