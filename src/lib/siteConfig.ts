export type NavItem = {
  title: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  external: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "CipherRoot Software",

  description:
    "Privacy-focused Android applications, indie games and innovative software.",

  url: "https://cipherrootsoftware.com",

  email: "gungkhan6@gmail.com",

  github: "https://github.com/gungkhan6-source",

  youtube: "https://www.youtube.com/@CipherRootSoftware",

  instagram: "https://www.instagram.com/novarecstudio/",

  playStore:
    "https://play.google.com/store/apps/details?id=com.gunner.dns&pcampaignid=web_share",

  logo: {
    src: "/logo/cipherroot-logo.webp",
    alt: "CipherRoot Software",
    width: 56,
    height: 56,
  },

  header: {
    cta: {
      label: "Products",
      href: "/apps",
    },
  },

  navigation: [
    { title: "Apps", href: "/apps" },
    { title: "Games", href: "/games" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  socials: [
    { name: "GitHub", href: "https://github.com/gungkhan6-source", external: true },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@CipherRootSoftware",
      external: true,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/novarecstudio/",
      external: true,
    },
    { name: "Email", href: "mailto:gungkhan6@gmail.com", external: false },
  ] satisfies SocialLink[],

  footer: {
    tagline:
      "Building secure software, privacy-focused Android apps, creative tools and indie games.",

    products: [
      { label: "Gunner DNS", href: "/apps/gunner-dns" },
      { label: "NovaRec Studio", href: "/apps/novarec" },
      { label: "Retro Pixel Football", href: "/games/retro-pixel-football" },
    ] satisfies FooterLink[],

    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies FooterLink[],

    resources: [
      { label: "Apps", href: "/apps" },
      { label: "Games", href: "/games" },
      { label: "Blog", href: "/blog" },
    ] satisfies FooterLink[],

    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ] satisfies FooterLink[],
  },
};
