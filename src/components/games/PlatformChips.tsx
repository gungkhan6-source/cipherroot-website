import type { PlatformRelease } from "@/types/catalog";

type Props = {
  releases: PlatformRelease[];
  /** Text shown on platforms that are not released yet. */
  comingSoon: string;
  /** Accessible name of the list. */
  label: string;
  /** "compact" for cards, "large" for the showcase grid. */
  size?: "compact" | "large";
  className?: string;
};

/**
 * Platform availability as small chips. A platform is only a link once it is
 * released and has a store URL; everything else is plain text marked as
 * coming soon, so nothing suggests a release that has not happened.
 */
export default function PlatformChips({ releases, comingSoon, label, size = "compact", className = "" }: Props) {
  const large = size === "large";

  return (
    <ul
      aria-label={label}
      className={`${large ? "grid gap-3 sm:grid-cols-2" : "grid gap-2"} ${className}`}
    >
      {releases.map((release) => {
        const live = release.status === "released" && release.storeUrl;
        const status = live ? (release.ctaLabel ?? release.label) : comingSoon;
        const body = (
          <>
            <span className={`font-semibold text-ink ${large ? "text-base" : "text-xs"}`}>{release.label}</span>
            <span
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full font-medium ${
                live ? "bg-success/15 text-green-400" : "bg-orange-500/10 text-orange-300"
              } ${large ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-[11px]"}`}
            >
              <span aria-hidden="true">●</span>
              {status}
            </span>
          </>
        );
        const box = `flex items-center justify-between gap-3 rounded-2xl border ${
          large ? "border-orange-500/20 bg-black/40 px-5 py-4" : "border-line bg-black/30 px-3 py-2"
        }`;

        return (
          <li key={release.label}>
            {live ? (
              <a
                href={release.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${box} transition hover:border-orange-400`}
              >
                {body}
              </a>
            ) : (
              <div className={box}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
