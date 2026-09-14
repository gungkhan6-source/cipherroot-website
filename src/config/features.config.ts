import { resolveFeatures } from "./packages.config";

export interface FeaturesConfig {
  // İçerik ve Bölümler
  blog: boolean;
  apps: boolean;
  games: boolean;
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
 * no backend yet, and the Maps link is not shown on this site, so both stay
 * off. WhatsApp is not part of any package and is off by default.
 */
export const featuresConfig: FeaturesConfig = resolveFeatures("premium", {
  newsletter: false,
  googleMaps: false,
});
