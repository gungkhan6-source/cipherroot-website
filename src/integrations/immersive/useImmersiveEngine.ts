"use client";

import { useEffect, useSyncExternalStore, type RefObject } from "react";
import type { EnginePalette, ImmersiveEngine, QualityTier } from "immersive-experience-engine";

/** Serializable engine settings, safe to pass from a Server Component. */
export interface ImmersiveEngineSettings {
  /** Force a quality tier; "auto" lets the engine detect one. */
  tier?: QualityTier | "auto";
  /** Seconds for the intro formation. */
  introDuration?: number;
  /** React to the pointer. */
  interactive?: boolean;
  palette?: Partial<EnginePalette>;
}

type DebugWindow = Window & { __immersiveEngine?: ImmersiveEngine };

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
// Server render and hydration assume motion is allowed; the client value follows.
const getServerReducedMotion = () => false;

/** True when a WebGL context can be created (the context is released right away). */
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * Mounts the Immersive Experience Engine into `containerRef` after hydration.
 *
 * - The engine (and three.js) is loaded with a dynamic import, so it is a
 *   separate client chunk that is only downloaded when this hook runs.
 * - Reduced motion and missing WebGL are detected before that import: those
 *   visitors keep the static, server-rendered hero and never download the
 *   engine. Other fallbacks (software renderer, slow devices) stay with the
 *   engine's own tier detection.
 * - The closest `[data-immersive-hero]` element is the scroll target; its
 *   `[data-immersive-avoid]` descendants (headline, copy, CTAs) are kept clear.
 * - State is mirrored to the hero as `data-immersive-status` (static, loading,
 *   ready, error), `data-immersive-tier` and, for the static hero,
 *   `data-immersive-reason`, so CSS can adapt (e.g. the fallback layout).
 * - Cleanup disposes the engine; safe under React Strict Mode double mounting.
 */
export function useImmersiveEngine(
  containerRef: RefObject<HTMLElement | null>,
  settings: ImmersiveEngineSettings = {},
): void {
  const { tier = "auto", introDuration, interactive = true } = settings;
  // Compared by value, so a new palette object with the same colors does not remount.
  const paletteKey = JSON.stringify(settings.palette ?? null);
  // Switching the OS setting while the page is open remounts accordingly.
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hero = container.closest<HTMLElement>("[data-immersive-hero]");
    const clearHero = () => {
      hero?.removeAttribute("data-immersive-status");
      hero?.removeAttribute("data-immersive-tier");
      hero?.removeAttribute("data-immersive-reason");
    };

    // A forced tier is respected as-is (e.g. for testing); otherwise decide
    // here whether the engine is worth downloading at all.
    // The live query is read too: during hydration `reducedMotion` still holds
    // the server value, and the import must not start even for that render.
    const prefersReduced = reducedMotion || getReducedMotion();
    const staticReason =
      tier !== "auto" ? null : prefersReduced ? "prefers-reduced-motion" : isWebGLAvailable() ? null : "webgl-unavailable";

    if (staticReason) {
      hero?.setAttribute("data-immersive-status", "static");
      hero?.setAttribute("data-immersive-tier", "fallback");
      hero?.setAttribute("data-immersive-reason", staticReason);
      return clearHero;
    }

    const palette = JSON.parse(paletteKey) as Partial<EnginePalette> | null;
    let engine: ImmersiveEngine | null = null;
    let cancelled = false;

    hero?.setAttribute("data-immersive-status", "loading");

    import("immersive-experience-engine")
      .then(({ createImmersiveEngine }) => {
        if (cancelled) return;

        engine = createImmersiveEngine({
          container,
          scrollTarget: hero ?? container,
          avoid: hero ? Array.from(hero.querySelectorAll("[data-immersive-avoid]")) : [],
          tier,
          introDuration,
          interactive,
          palette: palette ?? undefined,
          onTierChange: (next) => hero?.setAttribute("data-immersive-tier", next),
        });

        hero?.setAttribute("data-immersive-status", "ready");

        if (process.env.NODE_ENV !== "production") {
          (window as DebugWindow).__immersiveEngine = engine;
        }
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        // The server-rendered hero stays as it is; only the visual is missing.
        hero?.setAttribute("data-immersive-status", "error");

        if (process.env.NODE_ENV !== "production") {
          console.warn("[immersive] engine failed to load", error);
        }
      });

    return () => {
      cancelled = true;
      engine?.dispose();

      if (process.env.NODE_ENV !== "production" && (window as DebugWindow).__immersiveEngine === engine) {
        delete (window as DebugWindow).__immersiveEngine;
      }

      engine = null;
      clearHero();
    };
  }, [containerRef, tier, introDuration, interactive, paletteKey, reducedMotion]);
}
