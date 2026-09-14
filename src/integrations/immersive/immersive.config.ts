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
