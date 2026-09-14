"use client";

import { useRef } from "react";
import { useImmersiveEngine, type ImmersiveEngineSettings } from "./useImmersiveEngine";

type Props = {
  className?: string;
  settings?: ImmersiveEngineSettings;
};

/** Client island: the element the engine renders its canvas (or fallback) into. */
export default function ImmersiveStage({ className, settings }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);

  useImmersiveEngine(stageRef, settings);

  return <div ref={stageRef} aria-hidden="true" className={className} data-immersive-stage="" />;
}
