import { siteConfig, type NavItem, type FooterLink } from "./site.config";
import { featuresConfig } from "./features.config";

// Routes that belong to an optional feature. A link to one of these is only
// shown while its feature flag is on.
const featureRoutes: Record<string, boolean> = {
  "/blog": featuresConfig.blog,
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
  headerCta: {
    label: string;
    href: string;
  };
  footerColumns: FooterColumn[];
  footerLegal: FooterLink[];
}

export const navigationConfig: NavigationConfig = {
  headerNav: enabledNav(siteConfig.navigation),
  headerCta: siteConfig.header.cta,
  footerColumns: [
    { id: "footer-products", title: "Products", links: enabledLinks(siteConfig.footer.products) },
    { id: "footer-company", title: "Company", links: enabledLinks(siteConfig.footer.company) },
    { id: "footer-resources", title: "Resources", links: enabledLinks(siteConfig.footer.resources) },
  ],
  footerLegal: enabledLinks(siteConfig.footer.legal),
};
