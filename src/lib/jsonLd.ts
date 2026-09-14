import { siteConfig } from "./siteConfig";
import type { Product } from "@/data/products";
import type { Post } from "@/data/posts";
import { digitalProducts } from "@/data/offerings";
import type { PlatformType } from "@/types/catalog";

/**
 * Structured data generators.
 * Everything is derived from siteConfig and the catalog data so schemas
 * stay correct when the underlying data changes.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}${siteConfig.logo.src}`,
    sameAs: siteConfig.socials
      .filter((social) => social.external)
      .map((social) => social.href),
  };
}

// Platforms that are an operating system. Web releases have none, so they
// contribute nothing to `operatingSystem`.
const operatingSystemName: Partial<Record<PlatformType, string>> = {
  android: "Android",
  ios: "iOS",
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

export function softwareApplicationJsonLd(product: Product) {
  const releases =
    digitalProducts.find((item) => item.slug === product.slug)?.releases ?? [];

  // Describe what is actually released; fall back to the planned platforms
  // only when nothing has shipped yet.
  const released = releases.filter((release) => release.status === "released");
  const described = released.length > 0 ? released : releases;

  const operatingSystems = [
    ...new Set(
      described.flatMap((release) => operatingSystemName[release.platform] ?? []),
    ),
  ];

  const isMobile = described.some(
    (release) => release.platform === "android" || release.platform === "ios",
  );

  const applicationCategory =
    product.kind === "game"
      ? "GameApplication"
      : isMobile
        ? "MobileApplication"
        : undefined;

  // No price or sales data exists in the catalog, so no Offer is emitted.
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.longDescription,
    url: `${siteConfig.url}${product.href}`,
    image: `${siteConfig.url}${product.image}`,

    ...(applicationCategory ? { applicationCategory } : {}),

    ...(operatingSystems.length > 0
      ? { operatingSystem: operatingSystems.join(", ") }
      : {}),

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },

    ...(product.playstore ? { downloadUrl: product.playstore } : {}),
  };
}

export function articleJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}${post.cover}`,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    articleSection: post.category,

    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo.src}`,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
