import { resolveFeatures } from "./packages.config";

export interface FeaturesConfig {
  // İçerik ve Bölümler
  blog: boolean;
  services: boolean;
  portfolio: boolean;
  gallery: boolean;
  faq: boolean;
  testimonials: boolean;
  stats: boolean;

  // İletişim ve Etkileşim
  contactForm: boolean;
  newsletter: boolean;
  whatsappChat: boolean;
  googleMaps: boolean;
  appointment: boolean;

  // Gelişmiş Özellikler
  aiAssistant: boolean;
  multilingual: boolean;
  darkModeToggle: boolean;
}

/**
 * CipherRoot uses the Premium package. The newsletter module exists but has
 * no backend yet, so it stays off for this site.
 */
export const featuresConfig: FeaturesConfig = resolveFeatures("premium", {
  newsletter: false,
});
