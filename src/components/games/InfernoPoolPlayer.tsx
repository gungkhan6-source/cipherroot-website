"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Props = {
  /** Live web game URL (the game server also hosts its WebSocket). */
  src: string;
  /** In-page anchor; visiting it (e.g. from a "Play on Web" link) starts the game. */
  anchor: string;
  poster: string;
  labels: {
    start: string;
    iframeTitle: string;
    fullscreen: string;
    exitFullscreen: string;
    openInNewTab: string;
    posterAlt: string;
  };
};

type FullscreenDocument = Document & {
  webkitFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};
type FullscreenElement = HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void };

function subscribeFullscreen(onChange: () => void) {
  document.addEventListener("fullscreenchange", onChange);
  document.addEventListener("webkitfullscreenchange", onChange);
  return () => {
    document.removeEventListener("fullscreenchange", onChange);
    document.removeEventListener("webkitfullscreenchange", onChange);
  };
}

const fullscreenElement = () => {
  const doc = document as FullscreenDocument;
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
};

// Element fullscreen is missing on iPhone Safari; the button is hidden there.
const canFullscreen = () => {
  const doc = document as FullscreenDocument;
  return Boolean(doc.fullscreenEnabled || doc.webkitFullscreenEnabled);
};

const noSubscribe = () => () => {};

/**
 * In-page Inferno Pool player.
 *
 * Click to load: the page first shows a poster, and the game (a large page
 * that opens a WebSocket to the game server) only loads once the visitor
 * asks for it, so /games/inferno-pool stays light for everyone else.
 *
 * The game runs untouched in a cross-origin iframe: no proxy, no rewrite, no
 * sandbox (it needs its own storage, WebSocket and audio). The frame keeps a
 * fixed aspect ratio (16:9, or 9:16 on portrait phones), never gets wider
 * than the page and always fits under the header. Fullscreen goes through
 * the Fullscreen API on the frame's wrapper where it exists; "Open in new
 * tab" is always available.
 */
export default function InfernoPoolPlayer({ src, anchor, poster, labels }: Props) {
  const [started, setStarted] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const fullscreen = useSyncExternalStore(subscribeFullscreen, () => fullscreenElement() === frameRef.current, () => false);
  const fullscreenSupported = useSyncExternalStore(noSubscribe, canFullscreen, () => false);

  // "Play on Web" links point at #<anchor>: arriving there starts the game.
  useEffect(() => {
    const startFromHash = () => {
      if (window.location.hash === `#${anchor}`) setStarted(true);
    };
    startFromHash();
    window.addEventListener("hashchange", startFromHash);
    return () => window.removeEventListener("hashchange", startFromHash);
  }, [anchor]);

  // Once the game starts, bring the whole frame into view (it is sized to
  // fit under the header, so on short landscape phones nothing is cut off).
  useEffect(() => {
    if (started) frameRef.current?.scrollIntoView({ block: "start" });
  }, [started]);

  const toggleFullscreen = () => {
    const frame = frameRef.current as FullscreenElement | null;
    if (!frame) return;
    const doc = document as FullscreenDocument;

    if (fullscreenElement()) {
      void (doc.exitFullscreen?.() ?? doc.webkitExitFullscreen?.());
    } else {
      void (frame.requestFullscreen?.() ?? frame.webkitRequestFullscreen?.());
    }
  };

  return (
    <div>
      <div
        ref={frameRef}
        className="relative mx-auto aspect-[9/16] w-full max-w-[calc((100svh-6rem)*9/16)] scroll-mt-24 overflow-hidden rounded-3xl border border-orange-500/30 bg-black shadow-2xl shadow-orange-950/40 min-[560px]:aspect-video min-[560px]:max-w-[calc((100svh-6rem)*16/9)]"
      >
        {started ? (
          <iframe
            src={src}
            title={labels.iframeTitle}
            allow="fullscreen; autoplay; gamepad"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
          >
            <Image
              src={poster}
              alt={labels.posterAlt}
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover opacity-60 transition duration-300 group-hover:opacity-75"
            />
            <span className="relative inline-flex items-center gap-3 rounded-2xl bg-orange-600 px-7 py-4 text-lg font-bold text-ink shadow-xl shadow-orange-900/50 transition group-hover:bg-orange-500">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
              </svg>
              {labels.start}
            </span>
          </button>
        )}
      </div>

      <div className="mx-auto mt-4 flex max-w-[calc((100svh-6rem)*16/9)] flex-wrap items-center justify-end gap-3">
        {started && fullscreenSupported && (
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex items-center justify-center rounded-xl border border-line-strong px-4 py-2 text-sm font-medium text-ink transition hover:border-orange-400"
          >
            {fullscreen ? labels.exitFullscreen : labels.fullscreen}
          </button>
        )}

        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-line-strong px-4 py-2 text-sm font-medium text-ink transition hover:border-orange-400"
        >
          {labels.openInNewTab}
        </a>
      </div>
    </div>
  );
}
