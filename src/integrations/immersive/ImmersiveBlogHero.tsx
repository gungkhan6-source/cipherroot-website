import type { CSSProperties } from "react";
import { blogPageContent, type BlogPageContent } from "@/content/pages.content";
import ImmersiveStage from "./ImmersiveStage";
import { immersiveBlogConfig } from "./immersive.config";
import styles from "./ImmersiveHero.module.css";
import blogStyles from "./ImmersiveBlogHero.module.css";

type Props = {
  content?: BlogPageContent;
};

/**
 * Blog listing hero with the engine's "Ink & Signal" preset (`immersiveExperience`).
 *
 * Same structure as the other immersive heroes: the badge, page title (the
 * only h1 on /blog), description and CTA are server-rendered HTML; the engine
 * mounts into the decorative stage on the client. Static states (reduced
 * motion, no WebGL, engine fallback) show the engine's editorial illustration
 * instead of the particles.
 */
export default function ImmersiveBlogHero({ content = blogPageContent }: Props) {
  const heroStyle = { "--immersive-scroll-length": immersiveBlogConfig.scrollLength } as CSSProperties;

  return (
    <section
      data-immersive-hero=""
      aria-labelledby="immersive-blog-title"
      className={`${styles.hero} bg-surface-0 text-ink`}
      style={heroStyle}
    >
      <div className={styles.viewport}>

        {/* Static warm glow: first paint and background behind the fallback. */}
        <div aria-hidden="true" className={blogStyles.glow}></div>

        <ImmersiveStage className={styles.stage} settings={immersiveBlogConfig.engine} />

        <div className={styles.content}>

          <span
            data-immersive-avoid=""
            className={`${styles.badge} inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light backdrop-blur-sm`}
          >
            {content.badge}
          </span>

          <h1
            id="immersive-blog-title"
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
