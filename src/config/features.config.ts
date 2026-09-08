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

export const featuresConfig: FeaturesConfig = {
  // CipherRoot V1 varsayılan aktif özellikleri
  blog: true,
  services: true,
  portfolio: false,
  gallery: false,
  faq: true,
  testimonials: false,
  stats: true,

  contactForm: true,
  newsletter: true,
  whatsappChat: false,
  googleMaps: false,
  appointment: false,

  aiAssistant: false,
  multilingual: false,
  darkModeToggle: false,
};
