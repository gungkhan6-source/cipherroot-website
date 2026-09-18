import { infernoPoolContent, type InfernoPoolContent } from "@/content/infernoPool.content";
import type { PlatformRelease } from "@/types/catalog";
import InfernoPoolPlayer from "./InfernoPoolPlayer";
import InfernoPoolShowcase from "./InfernoPoolShowcase";

type Props = {
  releases: PlatformRelease[];
  content?: InfernoPoolContent;
};

/**
 * /games/inferno-pool: hero, the playable web game, then the showcase
 * (features, global chat, gallery, platforms). The page title (the only h1)
 * and the copy are server-rendered; only the player is a client island.
 */
export default function InfernoPoolDetail({ releases, content = infernoPoolContent }: Props) {
  const { player } = content;
  const playHref = `#${player.anchor}`;

  return (
    <main id="main-content" className="bg-surface-3 text-ink">

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(249,115,22,0.18),transparent_60%),radial-gradient(ellipse_at_85%_40%,rgba(124,58,237,0.12),transparent_55%)]"
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-4 py-1 text-sm font-medium text-green-400">
            <span aria-hidden="true">●</span>
            {content.card.badge}
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-amber-300 via-orange-400 to-orange-600 bg-clip-text text-5xl font-extrabold uppercase tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            {content.name}
          </h1>

          <p className="mt-3 text-xl font-semibold text-ink sm:text-2xl">{content.subtitle}</p>

          <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-ink-muted sm:text-lg">
            {content.description}
          </p>

          {/* A plain anchor (not <Link>): only the browser fires "hashchange". */}
          {content.webUrl && (
            <a
              href={playHref}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-orange-600 px-7 py-4 text-lg font-bold uppercase tracking-wide text-ink shadow-lg shadow-orange-900/40 transition hover:bg-orange-500 sm:w-auto"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
              {content.playOnWeb}
            </a>
          )}
        </div>
      </section>

      {/* Playable game */}
      {content.webUrl && (
        <section
          id={player.anchor}
          aria-labelledby={`${player.anchor}-title`}
          className="scroll-mt-20 pb-20 sm:pb-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <h2 id={`${player.anchor}-title`} className="text-2xl font-bold text-ink sm:text-3xl">
              {player.title}
            </h2>
            <p className="mt-3 mb-8 max-w-3xl text-base leading-7 text-ink-muted">{player.description}</p>

            <InfernoPoolPlayer
              src={content.webUrl}
              anchor={player.anchor}
              poster={content.gallery.main.src}
              labels={player}
            />
          </div>
        </section>
      )}

      <InfernoPoolShowcase releases={releases} content={content} intro={false} playHref={playHref} />

    </main>
  );
}
