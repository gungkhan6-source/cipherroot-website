import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { posts } from "@/data/posts";
import { moduleVisibility, visibleProducts } from "@/lib/modules";
import { portfolioItems, services } from "@/data/offerings";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      priority: 1,
    },

    ...(moduleVisibility.apps
      ? [
          {
            url: `${siteConfig.url}/apps`,
            priority: 0.9,
          },
        ]
      : []),

    ...(moduleVisibility.games
      ? [
          {
            url: `${siteConfig.url}/games`,
            priority: 0.9,
          },
        ]
      : []),

    // Product detail pages of visible modules, from the single source of truth.
    ...visibleProducts.map((product) => ({
      url: `${siteConfig.url}${product.href}`,
      priority: 0.8,
    })),

    // Services listing and detail pages exist only while Services is visible.
    ...(moduleVisibility.services
      ? [
          {
            url: `${siteConfig.url}/services`,
            priority: 0.9,
          },

          ...services.map((service) => ({
            url: `${siteConfig.url}${service.href}`,
            priority: 0.8,
          })),
        ]
      : []),

    // Portfolio listing and project pages exist only while Portfolio is visible.
    ...(moduleVisibility.portfolio
      ? [
          {
            url: `${siteConfig.url}/portfolio`,
            priority: 0.9,
          },

          ...portfolioItems.map((project) => ({
            url: `${siteConfig.url}${project.href}`,
            priority: 0.8,
          })),
        ]
      : []),

    // Blog listing and posts exist only while the blog module is visible.
    ...(moduleVisibility.blog
      ? [
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
        ]
      : []),

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
