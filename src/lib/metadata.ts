import type { Metadata } from "next";

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
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
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
      images: [image],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
