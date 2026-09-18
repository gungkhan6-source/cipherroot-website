import Image from "next/image";
import Link from "next/link";
import { infernoPoolContent, type InfernoPoolContent } from "@/content/infernoPool.content";
import type { PlatformRelease } from "@/types/catalog";
import PlatformChips from "./PlatformChips";

type Props = {
  releases: PlatformRelease[];
  content?: InfernoPoolContent;
  /**
   * Inside an existing page container (the standard /games layout): a rounded
   * panel instead of a full-width band with its own container.
   */
  embedded?: boolean;
  /**
   * Show the title and description next to the features. Off on the detail
   * page, whose hero already holds them.
   */
  intro?: boolean;
  /** Where "Play on Web" leads: the detail page's player, or #play on it. */
  playHref?: string;
};

/**
 * Inferno Pool showcase on /games, below the game list: introduction and
 * features, the live global chat, a gallery and the platforms it is coming
 * to. Server-rendered, no client JavaScript; the gallery scrolls sideways on
 * phones (inside its own box, never the page) and becomes a grid on wider
 * screens.
 */
export default function InfernoPoolShowcase({
  releases,
  content = infernoPoolContent,
  embedded = false,
  intro = true,
  playHref = `${content.detailHref}#${content.player.anchor}`,
}: Props) {
  const { gallery, platforms, chat } = content;
  const playClass =
    "inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-orange-600 px-6 py-4 font-semibold text-ink transition hover:bg-orange-500 sm:w-auto";
  const titleId = `${content.anchor}-title`;

  return (
    <section
      id={content.anchor}
      aria-labelledby={titleId}
      className={`relative scroll-mt-20 overflow-hidden bg-surface-0 ${
        embedded ? "mt-20 rounded-3xl border border-line sm:mt-28" : "border-t border-line"
      }`}
    >
      {/* Static fire and neon glow; no animation. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(249,115,22,0.16),transparent_55%),radial-gradient(ellipse_at_90%_60%,rgba(124,58,237,0.12),transparent_55%)]"
      />

      <div className={`relative ${embedded ? "px-6 py-12 sm:px-10 sm:py-16" : "mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28"}`}>

        {/* Introduction and features */}
        <div className={intro ? "grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16" : ""}>

          {intro ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                {content.eyebrow}
              </p>

              <h2
                id={titleId}
                className="mt-4 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
              >
                {content.title}
              </h2>

              <p className="mt-3 text-xl font-semibold text-ink sm:text-2xl">{content.subtitle}</p>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-ink-muted sm:text-lg">
                {content.description}
              </p>
            </div>
          ) : (
            <h2 id={titleId} className="mb-8 text-2xl font-bold text-ink sm:text-3xl">
              {content.featuresTitle}
            </h2>
          )}

          <ul
            aria-label={`${content.name} features`}
            className={`grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 ${intro ? "" : "lg:grid-cols-4"}`}
          >
            {content.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-line bg-card/70 px-4 py-3 text-sm font-medium text-ink"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                {feature}
              </li>
            ))}
          </ul>

        </div>

        {/* Global chat */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-card/80 to-accent/10 p-6 sm:mt-20 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            {chat.badge}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{chat.title}</h3>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-8 text-ink-muted">{chat.description}</p>
        </div>

        {/* Gallery: main image with two side images */}
        <div className="mt-12 sm:mt-16">
          <h3 className="sr-only">{gallery.title}</h3>

          <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-[2fr_1fr] lg:grid-rows-2 lg:gap-6">
            {[gallery.main, ...gallery.side].map((image, index) => {
              const main = index === 0;

              return (
                <li
                  key={image.src}
                  className={`w-[85%] shrink-0 snap-center sm:w-auto ${main ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
                >
                  <figure className="flex h-full flex-col">
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-line bg-black shadow-xl shadow-orange-950/30 ${
                        main ? "aspect-video lg:aspect-auto lg:flex-1" : "aspect-video"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={main ? "(min-width: 1024px) 832px, (min-width: 640px) 100vw, 85vw" : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw"}
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm leading-6 text-ink-muted">{image.caption}</figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Platforms */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">{platforms.title}</h3>
          <p className="mt-3 text-base leading-7 text-ink-muted">{platforms.description}</p>

          <PlatformChips
            releases={releases}
            comingSoon={platforms.comingSoon}
            label={`${content.name} ${platforms.platformsLabel.toLowerCase()}`}
            size="large"
            className="mt-8"
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {content.webUrl &&
              // Same-page "#play" stays a plain anchor so "hashchange" fires
              // and the player starts; the /games link opens the detail page.
              (playHref.startsWith("#") ? (
                <a href={playHref} className={playClass}>
                  {content.playOnWeb}
                </a>
              ) : (
                <Link href={playHref} className={playClass}>
                  {content.playOnWeb}
                </Link>
              ))}

            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex w-full cursor-not-allowed items-center justify-center whitespace-nowrap rounded-xl bg-zinc-800 px-6 py-4 font-semibold text-zinc-300 sm:w-auto"
            >
              {platforms.moreComingSoon}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
