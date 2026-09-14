import { pageMetadata } from "@/lib/metadata";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { games } from "@/data/products";
import PageShell from "@/components/ui/PageShell";
import { gamesPageContent } from "@/content/pages.content";

export const metadata = pageMetadata({
  title: gamesPageContent.metaTitle,
  description: gamesPageContent.metaDescription,
  path: "/games",
});


export default function GamesPage() {
  return (
    <PageShell>

        <SectionTitle
          as="h1"
          badge={gamesPageContent.badge}
          title={gamesPageContent.title}
          description={gamesPageContent.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <ProductCard
              key={game.slug}
              app={game}
            />
          ))}
        </div>

    </PageShell>
  );
}
