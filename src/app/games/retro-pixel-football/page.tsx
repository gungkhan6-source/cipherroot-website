import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { games } from "@/data/products";
import PageShell from "@/components/ui/PageShell";
import OfferingDetail from "@/components/OfferingDetail";

export const metadata = pageMetadata({
  title: "Retro Pixel Football",
  description:
    "Inspired by legendary 90’s football games. Fast gameplay, pixel graphics and arcade action.",
  path: "/games/retro-pixel-football",
});


export default function RetroPixelFootballPage() {
  const product = games.find((game) => game.slug === "retro-pixel-football");

  if (!product) {
    notFound();
  }

  return (
    <PageShell>

      <OfferingDetail product={product} />

    </PageShell>
  );
}
