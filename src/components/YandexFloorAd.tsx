"use client";

import { useEffect } from "react";

export default function YandexFloorAd() {
  useEffect(() => {
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      const adv = window.Ya?.Context?.AdvManager as any;
      const platform = adv?.getPlatform?.();

      adv?.render({
        blockId:
          platform === "desktop"
            ? "R-A-20030613-4"
            : "R-A-20030613-3",
        type: "floorAd",
        platform:
          platform === "desktop"
            ? "desktop"
            : "touch",
      });
    });
  }, []);

  return null;
}