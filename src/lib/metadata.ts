import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

/**
 * Builds a consistent metadata object for a page.
 *
 * Next.js replaces the parent `openGraph` / `twitter` objects entirely when a
 * page defines its own, so both must be spelled out here — otherwise the
 * root-level Open Graph image and card settings are silently dropped.
 */

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Marks the page as an article (og:type "article") with its dates. */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
  };
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  article,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [image],
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            ...(article.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
          }
        : { type: "website" }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
