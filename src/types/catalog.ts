export type StandardPlatform =
  | "android"
  | "windows"
  | "ios"
  | "macos"
  | "linux"
  | "web"
  | "steam";

export type PlatformType = StandardPlatform | (string & {});

export type ReleaseStatus =
  | "released"
  | "coming-soon"
  | "beta"
  | "pre-order";

export interface PlatformRelease {
  platform: PlatformType;
  label: string;
  status: ReleaseStatus;
  storeUrl?: string;
  directDownloadUrl?: string;
  ctaLabel?: string;
  version?: string;
  minRequirement?: string;
}

export type CatalogCategory =
  | "app"
  | "game"
  | "tool"
  | "saas"
  | "service"
  | "portfolio";

export interface BaseCatalogItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots?: string[];
  category: CatalogCategory;
  featured?: boolean;
  href: string;
}

export interface DigitalProductItem extends BaseCatalogItem {
  kind: "product";
  category: "app" | "game" | "tool" | "saas";
  releases: PlatformRelease[];
  githubUrl?: string;
  docsUrl?: string;
}

export interface ServiceItem extends BaseCatalogItem {
  kind: "service";
  category: "service";
  features?: string[];
  deliverables?: string[];
  ctaText?: string;
}

export interface PortfolioItem extends BaseCatalogItem {
  kind: "portfolio";
  category: "portfolio";
  client?: string;
  completionDate?: string;
  projectUrl?: string;
  tags?: string[];
}

export type CatalogItem = DigitalProductItem | ServiceItem | PortfolioItem;
