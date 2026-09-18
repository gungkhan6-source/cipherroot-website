import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import SectionTitle from "@/components/SectionTitle";
import ProductCard, { type ProductCardPlatforms } from "@/components/ProductCard";
import InfernoPoolShowcase from "@/components/games/InfernoPoolShowcase";
import InfernoPoolDetail from "@/components/games/InfernoPoolDetail";
import OfferingDetail from "@/components/OfferingDetail";
import { games } from "@/data/products";
import { digitalProducts } from "@/data/offerings";
import { pageMetadata } from "@/lib/metadata";
import { moduleVisibility } from "@/lib/modules";
import { gamesPageContent } from "@/content/pages.content";
import { infernoPoolContent } from "@/content/infernoPool.content";
import { ImmersiveGamesHero } from "@/integrations/immersive";

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

// Inferno Pool is released on several platforms: its card shows each one and
// links to the showcase below the list.
const infernoPool = digitalProducts.find((item) => item.slug === "inferno-pool");

const infernoPoolPlatforms: ProductCardPlatforms | undefined = infernoPool && {
  badge: infernoPoolContent.card.badge,
  releases: infernoPool.releases,
  comingSoon: infernoPoolContent.platforms.comingSoon,
  label: `${infernoPool.name} ${infernoPoolContent.platforms.platformsLabel.toLowerCase()}`,
  showcase: { href: `#${infernoPoolContent.anchor}`, label: infernoPoolContent.card.showcaseLabel },
};

function platformsFor(slug: string) {
  return slug === infernoPool?.slug ? infernoPoolPlatforms : undefined;
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
    // Immersive hero: it holds the page title (h1), the list gets an h2.
    if (moduleVisibility.immersiveGames) {
      return (
        <main id="main-content" className="bg-surface-3 text-ink">

          <ImmersiveGamesHero />

          <section
            id="games-list"
            aria-labelledby="games-list-title"
            className="mx-auto max-w-7xl scroll-mt-20 px-6 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28"
          >

            <h2
              id="games-list-title"
              className="mb-12 text-center text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:mb-16 sm:text-4xl md:text-5xl"
            >
              {gamesPageContent.listTitle}
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {games.map((game) => (
                <ProductCard
                  key={game.slug}
                  app={game}
                  platforms={platformsFor(game.slug)}
                />
              ))}
            </div>

          </section>

          {infernoPool && <InfernoPoolShowcase releases={infernoPool.releases} />}

        </main>
      );
    }

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
              platforms={platformsFor(game.slug)}
            />
          ))}
        </div>

        {infernoPool && <InfernoPoolShowcase releases={infernoPool.releases} embedded />}

      </PageShell>
    );
  }

  const product = findGame(slug);

  if (!product) {
    notFound();
  }

  // Inferno Pool has its own page: hero, the playable web game, showcase.
  if (infernoPool && product.slug === infernoPool.slug) {
    return <InfernoPoolDetail releases={infernoPool.releases} />;
  }

  return (
    <PageShell>

      <OfferingDetail product={product} />

    </PageShell>
  );
}
