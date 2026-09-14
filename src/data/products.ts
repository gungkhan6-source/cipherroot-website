import { digitalProducts } from "./offerings";
import type { CatalogSeo, DevelopmentVideo, DigitalProductItem } from "@/types/catalog";

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
  developmentVideo?: DevelopmentVideo;
  seo?: CatalogSeo;
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
    developmentVideo: item.developmentVideo,
    seo: item.seo,
  };
}

/**
 * Every product in the catalog is listed, in catalog order. Which products a
 * site shows is decided by src/data/offerings.ts, not by a list of slugs here.
 */
export const products: Product[] = digitalProducts.map(toLegacyProduct);

export const apps = products.filter((product) => product.kind === "app");

export const games = products.filter((product) => product.kind === "game");
