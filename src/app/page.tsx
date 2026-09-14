import type { Metadata } from "next";
import DownloadSection from "../components/DownloadSection";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import WhyCipherRoot from "../components/WhyCipherRoot";
import LatestArticles from "../components/LatestArticles";
import ServicesSection from "../components/ServicesSection";
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
      <Hero />
      {moduleVisibility.stats && <Stats />}
      {moduleVisibility.services && <ServicesSection />}
      {visibleProducts.length > 0 && <Products />}
      <WhyCipherRoot />
      {moduleVisibility.gallery && <GallerySection />}
      {moduleVisibility.testimonials && <TestimonialsSection />}
      {moduleVisibility.blog && <LatestArticles />}
      {moduleVisibility.faq && <FaqSection />}
      {visibleProducts.length > 0 && <DownloadSection />}
    </main>
  );
}
