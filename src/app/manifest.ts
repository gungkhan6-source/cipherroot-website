import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.theme.colors.surface0,
    theme_color: siteConfig.theme.colors.brand,

    icons: [
      {
        src: siteConfig.favicon,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
