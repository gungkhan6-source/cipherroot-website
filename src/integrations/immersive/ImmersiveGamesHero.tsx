import type { CSSProperties } from "react";
import { gamesPageContent, type GamesPageContent } from "@/content/pages.content";
import ImmersiveStage from "./ImmersiveStage";
import { immersiveGamesConfig } from "./immersive.config";
import styles from "./ImmersiveHero.module.css";
import gamesStyles from "./ImmersiveGamesHero.module.css";

type Props = {
  content?: GamesPageContent;
};

/**
 * Games listing hero with the engine's games preset (`immersiveExperience`).
 *
 * Same structure as the home ImmersiveHero: the badge, page title (the only
 * h1 on /games), description and CTA are server-rendered HTML; the engine
 * mounts into the decorative stage on the client. Static states (reduced
 * motion, no WebGL, engine fallback) show the engine's neon-games
 * illustration instead of the particles.
 */
export default function ImmersiveGamesHero({ content = gamesPageContent }: Props) {
  const heroStyle = { "--immersive-scroll-length": immersiveGamesConfig.scrollLength } as CSSProperties;

  return (
    <section
      data-immersive-hero=""
      aria-labelledby="immersive-games-title"
      className={`${styles.hero} bg-surface-0 text-ink`}
      style={heroStyle}
    >
      <div className={styles.viewport}>

        {/* Static neon glow: first paint and background behind the fallback. */}
        <div aria-hidden="true" className={gamesStyles.glow}></div>

        <ImmersiveStage className={styles.stage} settings={immersiveGamesConfig.engine} />

        <div className={styles.content}>

          <span
            data-immersive-avoid=""
            className={`${styles.badge} inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light backdrop-blur-sm`}
          >
            {content.badge}
          </span>

          <h1
            id="immersive-games-title"
            data-immersive-avoid=""
            className={`${styles.title} text-balance font-extrabold tracking-tight`}
          >
            {content.title}
          </h1>

          <p
            data-immersive-avoid=""
            className={`${styles.description} text-pretty text-base leading-7 text-ink-muted sm:text-lg sm:leading-8`}
          >
            {content.description}
          </p>

          <div data-immersive-avoid="" className={styles.actions}>
            <a
              href={content.heroCta.href}
              className={`${styles.action} inline-flex items-center justify-center rounded-xl bg-brand font-semibold text-ink shadow-lg shadow-brand/20 transition-colors duration-300 hover:bg-brand-hover`}
            >
              {content.heroCta.label}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
