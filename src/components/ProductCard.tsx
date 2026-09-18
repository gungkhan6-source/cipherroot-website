import Image from "next/image";
import Link from "next/link";
import { uiContent } from "@/content/ui.content";
import type { Product } from "@/data/products";
import type { PlatformRelease } from "@/types/catalog";
import PlatformChips from "@/components/games/PlatformChips";

/**
 * Only the fields the card renders. Any offering (app, game, SaaS, service…)
 * mapped to this shape can use the card, not just full legacy Products.
 */
export type ProductCardItem = Pick<
  Product,
  "name" | "image" | "status" | "description" | "href" | "button" | "playstore"
>;

/**
 * Optional per-platform availability for an offering released on several
 * platforms. When given, the card shows a badge and a chip per platform
 * instead of the single status and store button, and links to a showcase.
 */
export type ProductCardPlatforms = {
  badge: string;
  releases: PlatformRelease[];
  comingSoon: string;
  label: string;
  showcase: { href: string; label: string };
};

type Props = {
  app: ProductCardItem;
  platforms?: ProductCardPlatforms;
};

export default function ProductCard({ app, platforms }: Props) {
  const available = app.status === "Available";

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-line bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-2xl hover:shadow-brand/20 sm:p-8 lg:p-10">

      <div className="flex items-center justify-center">
        <Image
          src={app.image}
          alt={app.name}
          width={160}
          height={160}
          sizes="(min-width: 640px) 128px, 96px"
          className="h-24 w-24 rounded-3xl object-contain transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
        />
      </div>

      <h2 className="mt-6 text-center text-2xl font-bold text-ink sm:mt-8 sm:text-3xl">
        {app.name}
      </h2>

      <div className="mt-4 flex justify-center">
        {platforms ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-1 text-sm font-medium text-green-400">
            <span aria-hidden="true">●</span>
            {platforms.badge}
          </span>
        ) : (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium ${
              available
                ? "bg-success/15 text-green-400"
                : "bg-warning/15 text-yellow-400"
            }`}
          >
            <span aria-hidden="true">●</span>
            {app.status}
          </span>
        )}
      </div>

      <p className="mt-6 flex-1 text-center text-base leading-8 text-ink-muted">
        {app.description}
      </p>

      {platforms && (
        <PlatformChips
          releases={platforms.releases}
          comingSoon={platforms.comingSoon}
          label={platforms.label}
          className="mt-6"
        />
      )}

      <div className="mt-8 flex flex-col gap-4 sm:mt-10 xl:flex-row xl:justify-center">

        <Link
          href={app.href}
          aria-label={uiContent.actions.learnMoreAbout(app.name)}
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-line-strong px-4 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand-light xl:w-auto xl:text-base"
        >
          {uiContent.actions.learnMore}
        </Link>

        {platforms ? (
          <a
            href={platforms.showcase.href}
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-orange-600 px-4 py-3 text-sm font-medium text-ink transition hover:bg-orange-500 xl:w-auto xl:text-base"
          >
            {platforms.showcase.label}
          </a>
        ) : app.playstore ? (
          <a
            href={app.playstore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={uiContent.actions.storeLabel(app.name, app.button)}
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-brand px-4 py-3 text-sm font-medium text-ink transition hover:bg-brand-hover xl:w-auto xl:text-base"
          >
            {app.button}
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl bg-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300 xl:w-auto xl:text-base"
          >
            {app.button}
          </button>
        )}

      </div>

    </div>
  );
}
