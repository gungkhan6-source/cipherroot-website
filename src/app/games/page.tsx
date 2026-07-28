import { pageMetadata } from "@/lib/metadata";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { games } from "@/data/products";
import PageShell from "@/components/ui/PageShell";

export const metadata = pageMetadata({
  title: "Indie Games",
  description:
    "Explore indie games currently in development at CipherRoot Software.",
  path: "/games",
});


export default function GamesPage() {
  return (
    <PageShell>

        <SectionTitle
          as="h1"
          badge="Games"
          title="Indie Games"
          description="Explore our indie games currently in development."
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
