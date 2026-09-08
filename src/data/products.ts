import { digitalProducts } from "./offerings";
import type { DigitalProductItem } from "@/types/catalog";

export type ProductKind = "app" | "game";

export type ProductStatus = "Available" | "Coming Soon";

export type Product = {
  kind: ProductKind;
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: ProductStatus;
  href: string;
  button: string;
  playstore?: string;
};

/**
 * Adapter: Converts V2 DigitalProductItem to legacy V1 Product format
 * to guarantee 100% backward compatibility with V1 components and routes.
 */
function toLegacyProduct(item: DigitalProductItem): Product {
  const primaryRelease =
    item.releases.find((r) => r.status === "released") ?? item.releases[0];
  const isAvailable = primaryRelease?.status === "released";

  return {
    kind: item.category === "game" ? "game" : "app",
    slug: item.slug,
    name: item.name,
    image: item.image,
    tagline: item.tagline,
    description: item.description,
    longDescription: item.longDescription,
    status: isAvailable ? "Available" : "Coming Soon",
    href: item.href,
    button:
      primaryRelease?.ctaLabel ?? (isAvailable ? "Download" : "Coming Soon"),
    playstore: primaryRelease?.storeUrl,
  };
}

/**
 * V1 Active Products:
 * Keeps the exact 3 products for V1 routes (/apps, /games, /apps/[slug], /games/retro-pixel-football)
 * until Phase 4 route migration expands all catalog items.
 */
const V1_ACTIVE_SLUGS = ["gunner-dns", "novarec", "retro-pixel-football"];

export const products: Product[] = digitalProducts
  .filter((item) => V1_ACTIVE_SLUGS.includes(item.slug))
  .map(toLegacyProduct);

export const apps = products.filter((product) => product.kind === "app");

export const games = products.filter((product) => product.kind === "game");
