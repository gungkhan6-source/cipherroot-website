# CipherRoot V2 — Progress

Goal: turn the CipherRoot V1 site into a reusable web starter without changing
how V1 looks or behaves.

| Layer      | Location                     | Scope               |
| ---------- | ---------------------------- | ------------------- |
| Components | `src/components/`            | brand-independent   |
| Config     | `src/config/site.config.ts`  | brand specific      |
| Navigation | `src/config/navigation.config.ts` | brand specific |
| Features   | `src/config/features.config.ts`   | package specific |
| Content    | `src/content/`               | customer specific   |
| Data       | `src/data/`                  | customer specific   |

## Current Phase

Phase 3 — Component generalization: **done** (not pushed).

## Completed Phases

| Phase | Commit    | Summary |
| ----- | --------- | ------- |
| 1     | `7528ac5` | Centralized site config, navigation config, feature flags, CSS variable bridge |
| 2     | `464531a` | Content/data separation, `offerings.ts` catalog model, V1 `products.ts` adapter |
| 3     | see `git log` | Home components read `homeContent`; Header/Footer read `navigationConfig`; `WhyUs` replaces `WhyCipherRoot` |

Phase 1 and 2 were originally committed as `4c59a99` and `912c46e`; those hashes
changed when the branch was rebased onto `efa1637` before the first push.

Content commits between Phase 2 and 3 (already on `origin/main`):
`bd33f06` blog wave 1 · `5a8a671` products + Yandex ads.txt ·
`1433121` blog wave 2 · `c0b1758` blog wave 3 (53 posts live).

## Phase 3 details

- `Hero`, `Stats`, `Products`, `WhyUs`, `LatestArticles`, `DownloadSection` take
  an optional `content` (or `stats`) prop and default to `homeContent`.
  `src/app/page.tsx` is unchanged.
- `WhyCipherRoot.tsx` is a re-export of `WhyUs` for backward compatibility.
- `Header` / `Footer` read `navigationConfig`; the footer newsletter block is
  behind `featuresConfig.newsletter`.
- `ProductCard` accepts `ProductCardItem` (only the rendered fields). Store
  CTA `aria-label`s use the release's CTA label instead of a hardcoded
  "Google Play".

## Validation Results (Phase 3)

- `npm run lint`: 0 errors, 0 warnings
- `npm run build`: 75/75 static pages
- Rendered HTML (body, scripts and hashed asset paths stripped) compared
  before/after on 14 routes — `/`, `/about`, `/contact`, `/apps`, `/games`,
  `/blog`, three `/apps/*`, `/games/inferno-pool`,
  `/games/retro-pixel-football`, `/privacy-policy`, two blog posts:
  **identical on all 14**.

## Known Risks

- `homeContent.stats` still says **27 Technical Articles**; 53 are live. The
  value is content, so Phase 3 did not change it.
- `homeContent.stats` also shows **1M+ Future Downloads**, which is not a
  measured figure.
- `about`, `contact` and legal pages still hardcode their text although
  `about.content.ts`, `contact.content.ts` and `legal.content.ts` exist.
- `features.config.ts` flags are mostly unread; only `newsletter` is wired.
- `siteConfig.url` is the apex domain while production serves `www`
  (apex 308-redirects to `www`), so canonical URLs point at the redirecting host.
- `ProductCard` still renders only the legacy two-state status
  (Available / Coming Soon); per-platform release status is not shown.

## Next Step

Phase 4 — wire `src/app` pages (`about`, `contact`, legal pages) to their
existing `src/content` files and connect remaining feature flags, keeping
rendered output identical.
