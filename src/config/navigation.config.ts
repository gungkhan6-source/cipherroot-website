import { siteConfig, type NavItem, type FooterLink } from "./site.config";

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
  headerNav: siteConfig.navigation,
  headerCta: siteConfig.header.cta,
  footerColumns: [
    { id: "footer-products", title: "Products", links: siteConfig.footer.products },
    { id: "footer-company", title: "Company", links: siteConfig.footer.company },
    { id: "footer-resources", title: "Resources", links: siteConfig.footer.resources },
  ],
  footerLegal: siteConfig.footer.legal,
};
