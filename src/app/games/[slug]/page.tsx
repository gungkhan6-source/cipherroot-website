import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { games } from "@/data/products";
import PageShell from "@/components/ui/PageShell";
import OfferingDetail from "@/components/OfferingDetail";
import { pageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

// Only the slugs returned by generateStaticParams exist.
// Anything else must be a real 404, not a soft 404.
export const dynamicParams = false;

// Retro Pixel Football keeps its own hand-written static page at
// /games/retro-pixel-football, so it is excluded here.
const STATIC_GAME_SLUGS = ["retro-pixel-football"];

export function generateStaticParams() {
  return games
    .filter((game) => !STATIC_GAME_SLUGS.includes(game.slug))
    .map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = games.find((game) => game.slug === slug);

  if (!product) {
    return {};
  }

  return pageMetadata({
    title: product.name,
    description: product.longDescription,
    path: product.href,
    image: product.image,
  });
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = games.find((game) => game.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>

      <OfferingDetail product={product} />

    </PageShell>
  );
}
