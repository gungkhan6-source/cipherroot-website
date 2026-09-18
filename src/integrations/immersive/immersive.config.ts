import type { ImmersiveEngineSettings } from "./useImmersiveEngine";

export interface ImmersiveConfig {
  /**
   * Height of the hero's scroll range (CSS length). The visual stays pinned
   * while it dissolves over this distance, then the next section follows.
   */
  scrollLength: string;
  /** Passed to the engine; serializable. */
  engine: ImmersiveEngineSettings;
}

/**
 * Immersive hero settings. The engine's own palette (cyan, blue, violet) is
 * used by default; set `engine.palette` to override individual colors.
 */
export const immersiveConfig: ImmersiveConfig = {
  scrollLength: "220svh",
  engine: {
    tier: "auto",
    introDuration: 5.4,
    interactive: true,
  },
};

/**
 * Games listing hero: the engine's games preset (arcade, controller,
 * handheld, pixel world, arcade). Four morph steps need a longer scroll range
 * than the mind formation; the preset's own intro timing and palette are used.
 */
export const immersiveGamesConfig: ImmersiveConfig = {
  scrollLength: "420svh",
  engine: {
    tier: "auto",
    interactive: true,
    preset: "games",
  },
};

/**
 * Blog listing hero: the engine's "Ink & Signal" blog preset (page, discovery
 * lens, media orbit, idea globe, page) with its own intro timing and palette.
 */
export const immersiveBlogConfig: ImmersiveConfig = {
  scrollLength: "400svh",
  engine: {
    tier: "auto",
    interactive: true,
    preset: "blog",
  },
};

/**
 * Apps listing hero: the engine's "App Nexus" preset (digital globe, global
 * mesh, human interface with its flock, app nexus, digital globe) with its own
 * intro timing and palette. Four morph steps over a slightly longer scroll
 * range than games, so the flock scene has room to be read.
 */
export const immersiveAppsConfig: ImmersiveConfig = {
  scrollLength: "480svh",
  engine: {
    tier: "auto",
    interactive: true,
    preset: "apps",
  },
};
