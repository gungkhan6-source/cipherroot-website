import type { FeaturesConfig } from "./features.config";

export type FeatureName = keyof FeaturesConfig;

export type PackageName = "starter" | "business" | "premium";

/**
 * Core pages are part of every package and are not feature flags:
 * hero, about, why us, contact page, legal pages, SEO and branding.
 */

/**
 * Modules that are actually built. A feature outside this list is planned
 * but not implemented yet, so it always resolves to false — a package that
 * includes it does not switch on something that does not exist.
 * Add a feature here in the same change that ships its module.
 */
export const implementedFeatures: readonly FeatureName[] = [
  "blog",
  "apps",
  "games",
  "services",
  "portfolio",
  "faq",
  "testimonials",
  "gallery",
  "stats",
  "contactForm",
  "whatsappChat",
  "googleMaps",
  "appointment",
];

const starter: FeatureName[] = ["stats"];

const business: FeatureName[] = [
  ...starter,
  "services",
  "faq",
  "testimonials",
  "gallery",
  "googleMaps",
  "contactForm",
  "appointment",
];

const premium: FeatureName[] = [
  ...business,
  "blog",
  "apps",
  "games",
  "portfolio",
  "newsletter",
  "multilingual",
];

export const packages: Record<PackageName, readonly FeatureName[]> = {
  starter,
  business,
  premium,
};

const noFeatures: FeaturesConfig = {
  blog: false,
  apps: false,
  games: false,
  services: false,
  portfolio: false,
  gallery: false,
  faq: false,
  testimonials: false,
  stats: false,
  contactForm: false,
  newsletter: false,
  whatsappChat: false,
  googleMaps: false,
  appointment: false,
  aiAssistant: false,
  multilingual: false,
  darkModeToggle: false,
};

/**
 * Package defaults + site-specific overrides = effective features.
 * Explicitly enabling an unimplemented feature fails the build instead of
 * silently doing nothing.
 */
export function resolveFeatures(
  packageName: PackageName,
  overrides: Partial<FeaturesConfig> = {},
): FeaturesConfig {
  const resolved: FeaturesConfig = { ...noFeatures };

  for (const feature of packages[packageName]) {
    resolved[feature] = true;
  }

  Object.assign(resolved, overrides);

  for (const feature of Object.keys(resolved) as FeatureName[]) {
    if (!resolved[feature] || implementedFeatures.includes(feature)) {
      continue;
    }

    if (overrides[feature]) {
      throw new Error(
        `Feature "${feature}" is not implemented yet and cannot be enabled.`,
      );
    }

    resolved[feature] = false;
  }

  return resolved;
}
