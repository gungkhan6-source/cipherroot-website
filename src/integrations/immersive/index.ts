/**
 * React / Next.js adapter for the Immersive Experience Engine.
 * The engine itself is a separate, framework-free package
 * (`immersive-experience-engine`); nothing here is copied from it.
 */
export { default as ImmersiveHero } from "./ImmersiveHero";
export { default as ImmersiveGamesHero } from "./ImmersiveGamesHero";
export { default as ImmersiveBlogHero } from "./ImmersiveBlogHero";
export { default as ImmersiveAppsHero } from "./ImmersiveAppsHero";
export { default as ImmersiveStage } from "./ImmersiveStage";
export { useImmersiveEngine, type ImmersiveEngineSettings, type ImmersivePresetName } from "./useImmersiveEngine";
export {
  immersiveAppsConfig,
  immersiveBlogConfig,
  immersiveConfig,
  immersiveGamesConfig,
  type ImmersiveConfig,
} from "./immersive.config";
