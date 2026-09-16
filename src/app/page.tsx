import type { Metadata } from "next";
import DownloadSection from "../components/DownloadSection";
import Hero from "../components/Hero";
import YandexAd from "../components/YandexAd";
import YandexInImageAd from "../components/YandexInImageAd";
import { ImmersiveHero } from "@/integrations/immersive";
import Stats from "../components/Stats";
import Products from "../components/Products";
import WhyCipherRoot from "../components/WhyCipherRoot";
import LatestArticles from "../components/LatestArticles";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import { moduleVisibility, visibleProducts } from "@/lib/modules";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      {moduleVisibility.immersiveHero ? <ImmersiveHero /> : <Hero />}

      <YandexAd />
      <YandexInImageAd />

      {moduleVisibility.stats && <Stats />}
      {moduleVisibility.services && <ServicesSection />}
      {visibleProducts.length > 0 && <Products />}
      {moduleVisibility.portfolio && <PortfolioSection />}
      <WhyCipherRoot />
      {moduleVisibility.gallery && <GallerySection />}
      {moduleVisibility.testimonials && <TestimonialsSection />}
      {moduleVisibility.blog && <LatestArticles />}
      {moduleVisibility.faq && <FaqSection />}
      {visibleProducts.length > 0 && <DownloadSection />}
    </main>
  );
}