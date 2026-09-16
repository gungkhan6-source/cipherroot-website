"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    yaContextCb?: Array<() => void>;
    Ya?: {
      Context?: {
        AdvManager?: {
          render: (options: {
            blockId: string;
            renderTo: string;
          }) => void;
        };
      };
    };
  }
}

export default function YandexAd() {
  useEffect(() => {
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      window.Ya?.Context?.AdvManager?.render({
        blockId: "R-A-20041549-1",
        renderTo: "yandex_rtb_R-A-20041549-1",
      });
    });
  }, []);

  return (
    <div
      id="yandex_rtb_R-A-20041549-1"
      className="flex w-full justify-center"
    />
  );
}