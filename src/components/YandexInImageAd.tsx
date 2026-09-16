"use client";

import { useEffect } from "react";

export default function YandexInImageAd() {
  useEffect(() => {
    const renderInImage = () => {
      const images = Array.from(document.querySelectorAll("img"));

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
      renderInImage();
    } else {
      window.addEventListener("load", renderInImage, { once: true });
    }

    return () => {
      window.removeEventListener("load", renderInImage);
    };
  }, []);

  return null;
}