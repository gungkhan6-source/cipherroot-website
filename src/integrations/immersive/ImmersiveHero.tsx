import type { CSSProperties } from "react";
import Link from "next/link";
import { homeContent, type HomeContent } from "@/content/home.content";
import { isRouteEnabled } from "@/config/navigation.config";
import ImmersiveStage from "./ImmersiveStage";
import { immersiveConfig } from "./immersive.config";
import styles from "./ImmersiveHero.module.css";

type Props = {
  content?: HomeContent["hero"];
};

/**
 * Premium hero with the interactive WebGL experience (`immersiveExperience`).
 *
 * Server-rendered: the headline, copy and CTAs are regular HTML (first paint,
 * SEO, accessibility). The engine mounts into the stage on the client only.
 * Until then, and whenever the engine falls back, the static glow below is
 * what the visitor sees.
 */
export default function ImmersiveHero({ content = homeContent.hero }: Props) {
  const heroStyle = { "--immersive-scroll-length": immersiveConfig.scrollLength } as CSSProperties;

  return (
    <section
      data-immersive-hero=""
      aria-labelledby="immersive-hero-title"
      className={`${styles.hero} bg-surface-0 text-ink`}
      style={heroStyle}
    >
      <div className={styles.viewport}>

        {/* Static glow: first paint and fallback background. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,var(--color-brand-hover)_0%,transparent_55%)] opacity-20"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_110%,var(--color-accent)_0%,transparent_55%)] opacity-20"
        ></div>

        <ImmersiveStage className={styles.stage} settings={immersiveConfig.engine} />

        <div className={styles.content}>

          <span
            data-immersive-avoid=""
            className={`${styles.badge} inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light backdrop-blur-sm`}
          >
            {content.badge}
          </span>

          <h1
            id="immersive-hero-title"
            data-immersive-avoid=""
            className={`${styles.title} text-balance font-extrabold tracking-tight`}
          >
            {content.title}
          </h1>

          <p
            data-immersive-avoid=""
            className={`${styles.description} text-pretty text-base leading-7 text-ink-muted sm:text-lg sm:leading-8`}
          >
            {content.immersiveDescription ?? content.description}
          </p>

          <div data-immersive-avoid="" className={styles.actions}>

            {isRouteEnabled(content.primaryCta.href) && (
              <Link
                href={content.primaryCta.href}
                className={`${styles.action} inline-flex items-center justify-center rounded-xl bg-brand font-semibold text-ink shadow-lg shadow-brand/20 transition-colors duration-300 hover:bg-brand-hover`}
              >
                {content.primaryCta.label}
              </Link>
            )}

            {isRouteEnabled(content.secondaryCta.href) && (
              <Link
                href={content.secondaryCta.href}
                className={`${styles.action} inline-flex items-center justify-center rounded-xl border border-line-strong bg-white/5 font-semibold text-ink backdrop-blur-sm transition-colors duration-300 hover:border-brand hover:bg-white/10`}
              >
                {content.secondaryCta.label}
              </Link>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
