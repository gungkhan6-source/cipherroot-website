"use client";

import { useEffect } from "react";

export default function YandexInImageAd() {
  useEffect(() => {
    const run = () => {
      const images = Array.from(
        document.querySelectorAll<HTMLImageElement>("img")
      ).filter(
        (image) => image.width >= 320 && image.height >= 190
      );

      images.forEach((image) => {
        image.id =
          image.id ||
          `yandex_img_${Math.random().toString(16).slice(2)}`;

        window.yaContextCb?.push(() => {
          window.Ya?.Context?.AdvManager?.render({
            renderTo: image.id,
            blockId: "R-A-20030613-2",
            type: "inImage",
          } as any);
        });
      });
    };

    if (document.readyState === "complete") {
      run();
    } else {
      window.addEventListener("load", run, { once: true });
    }

    return () => {
      window.removeEventListener("load", run);
    };
  }, []);

  return null;
}