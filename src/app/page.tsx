import type { Metadata } from "next";
import DownloadSection from "../components/DownloadSection";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import WhyCipherRoot from "../components/WhyCipherRoot";
import LatestArticles from "../components/LatestArticles";
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
      {visibleProducts.length > 0 && <Products />}
      <WhyCipherRoot />
      {moduleVisibility.blog && <LatestArticles />}
      {visibleProducts.length > 0 && <DownloadSection />}
    </main>
  );
}
