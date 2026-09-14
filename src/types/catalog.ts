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

/**
 * Optional search/social overrides for an offering's detail page. By default
 * the page uses longDescription and image.
 */
export interface CatalogSeo {
  description?: string;
  image?: string;
}

/** A development update / devlog video published for an offering. */
export interface DevelopmentVideo {
  title: string;
  url: string;
}

export interface BaseCatalogItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots?: string[];
  developmentVideo?: DevelopmentVideo;
  seo?: CatalogSeo;
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
  repositoryUrl?: string;
  tags?: string[];
}

export type CatalogItem = DigitalProductItem | ServiceItem | PortfolioItem;
