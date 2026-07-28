import type { Metadata } from "next";
import DownloadSection from "../components/DownloadSection";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";
import WhyCipherRoot from "../components/WhyCipherRoot";
import LatestArticles from "../components/LatestArticles";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <Products />
      <WhyCipherRoot />
      <LatestArticles />
      <DownloadSection />
    </main>
  );
}
