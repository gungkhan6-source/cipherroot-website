import { siteConfig } from "./siteConfig";
import type { Product } from "@/data/products";
import type { Post } from "@/data/posts";

/**
 * Structured data generators.
 * Everything is derived from siteConfig and products.ts so schemas
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

export function softwareApplicationJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.longDescription,
    url: `${siteConfig.url}${product.href}`,
    image: `${siteConfig.url}${product.image}`,
    applicationCategory:
      product.kind === "game" ? "GameApplication" : "MobileApplication",
    operatingSystem: "Android",

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },

    ...(product.playstore ? { downloadUrl: product.playstore } : {}),

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability:
        product.status === "Available"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
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
