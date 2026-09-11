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

export interface ThemeColors {
  brand: string;
  brandHover: string;
  brandMid: string;
  brandLight: string;
  accent: string;
  accentSoft: string;
  surface0: string;
  surface1: string;
  surface2: string;
  surface3: string;
  card: string;
}

export interface SiteConfig {
  // 1. Marka ve Kimlik
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  url: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  favicon: string;

  // 2. İletişim Bilgileri
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: {
    street?: string;
    city?: string;
    country?: string;
    googleMapsUrl?: string;
  };

  // 3. Sosyal Medya ve Dış Bağlantılar
  github: string;
  youtube: string;
  instagram: string;
  playStore?: string;
  socials: SocialLink[];

  // 4. Tema ve Renk Paleti (CSS Variable Bridge)
  theme: {
    mode: "dark" | "light" | "system";
    colors: ThemeColors;
  };

  // 5. Navigasyon ve Butonlar
  header: {
    cta: {
      label: string;
      href: string;
    };
  };
  navigation: NavItem[];

  // 6. Alt Bilgi (Footer)
  footer: {
    tagline: string;
    products: FooterLink[];
    company: FooterLink[];
    resources: FooterLink[];
    legal: FooterLink[];
  };

  // 7. Entegrasyonlar
  integrations: {
    googleAdSenseId?: string;
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
  };

  // 8. SEO Temel Değerleri
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "CipherRoot Software",
  shortName: "CipherRoot",
  slogan: "Building Secure Software For The Future",

  description:
    "Privacy-focused Android applications, indie games and innovative software.",

  url: "https://cipherrootsoftware.com",

  logo: {
    src: "/logo/cipherroot-logo.webp",
    alt: "CipherRoot Software",
    width: 56,
    height: 56,
  },
  favicon: "/logo/favicon.png",

  email: "gungkhan6@gmail.com",

  github: "https://github.com/gungkhan6-source",
  youtube: "https://www.youtube.com/@CipherRootSoftware",
  instagram: "https://www.instagram.com/novarecstudio/",
  playStore:
    "https://play.google.com/store/apps/details?id=com.gunner.dns&pcampaignid=web_share",

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
  ],

  theme: {
    mode: "dark",
    colors: {
      brand: "#2563eb",
      brandHover: "#1d4ed8",
      brandMid: "#3b82f6",
      brandLight: "#60a5fa",
      accent: "#7c3aed",
      accentSoft: "#a78bfa",
      surface0: "#000000",
      surface1: "#050505",
      surface2: "#070707",
      surface3: "#090909",
      card: "#18181b",
    },
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
  ],

  footer: {
    tagline:
      "Building secure software, privacy-focused Android apps, creative tools and indie games.",

    products: [
      { label: "Gunner DNS", href: "/apps/gunner-dns" },
      { label: "NovaRec Studio", href: "/apps/novarec" },
      { label: "Retro Pixel Football", href: "/games/retro-pixel-football" },
      { label: "NovaRec Voice V1", href: "/apps/novarec-voice" },
      { label: "NovaRec Lyric Studio", href: "/apps/novarec-lyric-studio" },
      { label: "Inferno Pool", href: "/games/inferno-pool" },
    ],

    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],

    resources: [
      { label: "Apps", href: "/apps" },
      { label: "Games", href: "/games" },
      { label: "Blog", href: "/blog" },
    ],

    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },

  integrations: {
    googleAdSenseId: "ca-pub-9981866376896465",
  },

  keywords: [
    "CipherRoot Software",
    "Android",
    "Gunner DNS",
    "NovaRec",
    "Retro Pixel Football",
    "Privacy",
    "Security",
    "Indie Games",
  ],
};
