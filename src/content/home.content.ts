import { posts } from "@/data/posts";
import { digitalProducts } from "@/data/offerings";

// Products with at least one released platform — not "coming soon" ones.
const activeProductCount = digitalProducts.filter((product) =>
  product.releases.some((release) => release.status === "released"),
).length;

export interface HomeContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  offerings: {
    badge: string;
    title: string;
    description: string;
  };
  whyUs: {
    badge: string;
    title: string;
    description: string;
    values: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  latestArticles: {
    badge: string;
    title: string;
    description: string;
  };
  downloadCta: {
    badge: string;
    title: string;
    description: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    badge: "Welcome to CipherRoot Software",
    title: "Building Secure Software For The Future",
    description:
      "We build privacy-focused applications, modern Android tools, indie games and technical solutions designed for performance, security and simplicity.",
    primaryCta: {
      label: "Explore Products",
      href: "/apps",
    },
    secondaryCta: {
      label: "Read Our Blog",
      href: "/blog",
    },
  },

  stats: [
    { value: String(activeProductCount), label: "Active Products" },
    { value: String(posts.length), label: "Technical Articles" },
    { value: "Android", label: "Live on Google Play" },
    { value: "Web & PC", label: "In Development" },
  ],

  offerings: {
    badge: "Products",
    title: "Our Software Ecosystem",
    description:
      "Privacy-focused applications, creative tools and indie games developed by CipherRoot Software.",
  },

  whyUs: {
    badge: "Why CipherRoot",
    title: "Built Around Privacy, Performance & Innovation",
    description:
      "Every CipherRoot product is designed with long-term reliability, security and user experience in mind.",
    values: [
      {
        icon: "🔒",
        title: "Privacy First",
        description:
          "We build software that respects user privacy without unnecessary data collection.",
      },
      {
        icon: "⚡",
        title: "High Performance",
        description:
          "Lightweight architecture optimized for speed, battery life and stability.",
      },
      {
        icon: "🚀",
        title: "Future Ready",
        description:
          "We continuously improve our ecosystem with modern technologies and creative ideas.",
      },
    ],
  },

  latestArticles: {
    badge: "Latest Articles",
    title: "Insights & Development",
    description:
      "Follow our latest technical articles, development diaries and software engineering insights.",
  },

  downloadCta: {
    badge: "Download",
    title: "Download Our Products",
    description:
      "Released apps are available on Google Play. Products still in development are marked Coming Soon.",
  },
};
