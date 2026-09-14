import { siteConfig, type NavItem, type FooterLink } from "./site.config";
import { moduleVisibility } from "@/lib/modules";

// Routes that belong to an optional module. A link to one of these is only
// shown while that module is visible (feature enabled and content exists).
// Server-only, because module visibility reads blog posts from disk; client
// components receive the resolved navigation as props.
const featureRoutes: Record<string, boolean> = {
  "/apps": moduleVisibility.apps,
  "/games": moduleVisibility.games,
  "/blog": moduleVisibility.blog,
};

export function isRouteEnabled(href: string): boolean {
  const prefix = Object.keys(featureRoutes).find(
    (route) => href === route || href.startsWith(`${route}/`),
  );

  return prefix ? featureRoutes[prefix] : true;
}

const enabledNav = (items: NavItem[]) =>
  items.filter((item) => isRouteEnabled(item.href));

const enabledLinks = (links: FooterLink[]) =>
  links.filter((link) => isRouteEnabled(link.href));

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface NavigationConfig {
  headerNav: NavItem[];
  headerCta?: {
    label: string;
    href: string;
  };
  footerColumns: FooterColumn[];
  footerLegal: FooterLink[];
}

export const navigationConfig: NavigationConfig = {
  headerNav: enabledNav(siteConfig.navigation),
  headerCta: isRouteEnabled(siteConfig.header.cta.href)
    ? siteConfig.header.cta
    : undefined,
  // A column whose links all belong to hidden modules is dropped entirely.
  footerColumns: [
    { id: "footer-products", title: "Products", links: enabledLinks(siteConfig.footer.products) },
    { id: "footer-company", title: "Company", links: enabledLinks(siteConfig.footer.company) },
    { id: "footer-resources", title: "Resources", links: enabledLinks(siteConfig.footer.resources) },
  ].filter((column) => column.links.length > 0),
  footerLegal: enabledLinks(siteConfig.footer.legal),
};
