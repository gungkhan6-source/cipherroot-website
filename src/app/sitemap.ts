import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { products } from "@/data/products";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      priority: 1,
    },

    {
      url: `${siteConfig.url}/apps`,
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/games`,
      priority: 0.9,
    },

    // Product detail pages are generated from the single source of truth.
    ...products.map((product) => ({
      url: `${siteConfig.url}${product.href}`,
      priority: 0.8,
    })),

    {
      url: `${siteConfig.url}/blog`,
      priority: 0.8,
    },

    // Blog posts are generated from the single source of truth.
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updated ?? post.date,
      priority: 0.6,
    })),

    {
      url: `${siteConfig.url}/about`,
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/contact`,
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/privacy-policy`,
      priority: 0.4,
    },

    {
      url: `${siteConfig.url}/terms-of-service`,
      priority: 0.4,
    },

    {
      url: `${siteConfig.url}/cookie-policy`,
      priority: 0.4,
    },
  ];
}
