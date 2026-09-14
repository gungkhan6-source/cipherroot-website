/**
 * React / Next.js adapter for the Immersive Experience Engine.
 * The engine itself is a separate, framework-free package
 * (`immersive-experience-engine`); nothing here is copied from it.
 */
export { default as ImmersiveHero } from "./ImmersiveHero";
export { default as ImmersiveStage } from "./ImmersiveStage";
export { useImmersiveEngine, type ImmersiveEngineSettings } from "./useImmersiveEngine";
export { immersiveConfig, type ImmersiveConfig } from "./immersive.config";
