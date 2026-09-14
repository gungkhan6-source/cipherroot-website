import { featuresConfig } from "@/config/features.config";
import { homeContent } from "@/content/home.content";
import { apps, games, products, type ProductKind } from "@/data/products";
import { posts } from "@/data/posts";

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
  blog: featuresConfig.blog && posts.length > 0,
  stats: featuresConfig.stats && homeContent.stats.length > 0,
};

const moduleForKind: Record<ProductKind, "apps" | "games"> = {
  app: "apps",
  game: "games",
};

/** Catalog items whose module (apps or games) is visible, in catalog order. */
export const visibleProducts = products.filter(
  (product) => moduleVisibility[moduleForKind[product.kind]],
);
