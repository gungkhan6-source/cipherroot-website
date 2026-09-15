import { featuresConfig } from "@/config/features.config";
import { homeContent } from "@/content/home.content";
import { apps, games, products, type ProductKind } from "@/data/products";
import { posts } from "@/data/posts";
import { portfolioItems, services } from "@/data/offerings";
import { faqItems } from "@/data/faq";
import { testimonialItems } from "@/data/testimonials";
import { galleryItems } from "@/data/gallery";
import { appointmentUrl, mapsUrl, whatsappUrl } from "@/lib/contact";

/**
 * A module is shown only when its feature is enabled AND it has real content.
 * An enabled feature with nothing to display stays hidden, so a site never
 * exposes an empty section, link or route.
 *
 * Server-only: reads blog posts from the file system.
 */
export const moduleVisibility = {
  apps: featuresConfig.apps && apps.length > 0,
  games: featuresConfig.games && games.length > 0,
  services: featuresConfig.services && services.length > 0,
  portfolio: featuresConfig.portfolio && portfolioItems.length > 0,
  blog: featuresConfig.blog && posts.length > 0,
  stats: featuresConfig.stats && homeContent.stats.length > 0,
  faq: featuresConfig.faq && faqItems.length > 0,
  testimonials: featuresConfig.testimonials && testimonialItems.length > 0,
  gallery: featuresConfig.gallery && galleryItems.length > 0,
  whatsapp: featuresConfig.whatsappChat && whatsappUrl !== undefined,
  maps: featuresConfig.googleMaps && mapsUrl !== undefined,
  appointment: featuresConfig.appointment && appointmentUrl !== undefined,
  // Replaces the standard hero; no content requirement (it reuses the hero copy).
  immersiveHero: featuresConfig.immersiveExperience,
  // Games listing hero, same feature; only while there are games to list.
  immersiveGames: featuresConfig.immersiveExperience && games.length > 0,
  // Blog listing hero, same feature; only while there are posts to list.
  immersiveBlog: featuresConfig.immersiveExperience && posts.length > 0,
};

const moduleForKind: Record<ProductKind, "apps" | "games"> = {
  app: "apps",
  game: "games",
};

/** Catalog items whose module (apps or games) is visible, in catalog order. */
export const visibleProducts = products.filter(
  (product) => moduleVisibility[moduleForKind[product.kind]],
);
