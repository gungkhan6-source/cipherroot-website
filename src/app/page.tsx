import type { Metadata } from "next";
import DownloadSection from "../components/DownloadSection";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import WhyCipherRoot from "../components/WhyCipherRoot";
import LatestArticles from "../components/LatestArticles";
import { featuresConfig } from "@/config/features.config";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      {featuresConfig.stats && <Stats />}
      <Products />
      <WhyCipherRoot />
      {featuresConfig.blog && <LatestArticles />}
      <DownloadSection />
    </main>
  );
}
