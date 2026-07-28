import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games } from "@/data/products";
import PageShell from "@/components/ui/PageShell";

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

  const available = product.status === "Available";

  return (
    <PageShell>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>

            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                available
                  ? "bg-success/15 text-green-400"
                  : "bg-warning/15 text-yellow-400"
              }`}
            >
              <span aria-hidden="true">●</span>
              {product.status}
            </span>

            <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-ink-muted sm:text-xl sm:leading-9">
              {product.longDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl bg-zinc-800 px-6 py-4 font-semibold text-zinc-300 sm:w-auto"
              >
                {product.button}
              </button>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-6 py-4 font-semibold transition hover:border-brand-mid sm:w-auto"
              >
                Contact
              </Link>

            </div>

          </div>

          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={576}
              height={576}
              sizes="(min-width: 640px) 288px, 224px"
              priority
              className="h-auto w-56 rounded-[40px] sm:w-72"
            />
          </div>

        </div>

    </PageShell>
  );
}
