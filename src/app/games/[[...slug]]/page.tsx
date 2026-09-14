import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import OfferingDetail from "@/components/OfferingDetail";
import { games } from "@/data/products";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";
import { gamesPageContent } from "@/content/pages.content";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/**
 * /games (listing) and /games/[slug] (game) in one optional catch-all route,
 * like /services. Every game, including Retro Pixel Football, comes from the
 * catalog; per-game metadata overrides live in its `seo` field. While Games
 * is hidden or empty no page is generated, so the URLs are a real 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  if (!moduleVisibility.games) {
    return [];
  }

  return [{ slug: [] }, ...games.map((game) => ({ slug: [game.slug] }))];
}

function findGame(slug?: string[]) {
  return slug?.length === 1
    ? games.find((game) => game.slug === slug[0])
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return pageMetadata({
      title: gamesPageContent.metaTitle,
      description: gamesPageContent.metaDescription,
      path: "/games",
    });
  }

  const product = findGame(slug);

  if (!product) {
    return {};
  }

  return pageMetadata({
    title: product.name,
    description: product.seo?.description ?? product.longDescription,
    path: product.href,
    image: product.seo?.image ?? product.image,
  });
}

export default async function GamesPage({ params }: Props) {
  const { slug } = await params;

  if (!moduleVisibility.games) {
    notFound();
  }

  if (!slug || slug.length === 0) {
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

  const product = findGame(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>

      <OfferingDetail product={product} />

    </PageShell>
  );
}
