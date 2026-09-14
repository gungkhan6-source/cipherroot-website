# CipherRoot V2 — Progress

Goal: turn the CipherRoot V1 site into a reusable web starter (NovaRec Web
Starter) while keeping the live CipherRoot site working and visually stable.

Setup and customization guide: [NOVAREC_WEB_STARTER.md](NOVAREC_WEB_STARTER.md)

## Current State

- All planned V2 phases through **Phase 5.12** are complete and pushed.
- Latest V2 commit: `b18ad2c` (`refactor(v2): centralize ui content and accessibility`).
- Build: `npm run lint`, `npx tsc --noEmit` and `npm run build` pass;
  75 statically generated pages for CipherRoot.
- Remaining work before the starter is released to clients: see
  [Known Limitations](#known-limitations) and [Next Steps](#next-steps).

## Architecture

| Layer        | Location                          | Scope                                   |
| ------------ | --------------------------------- | --------------------------------------- |
| Brand config | `src/config/site.config.ts`       | name, URL, contact, socials, theme, integrations |
| Features     | `src/config/features.config.ts`   | package choice + site overrides         |
| Packages     | `src/config/packages.config.ts`   | Starter / Business / Premium presets    |
| Navigation   | `src/config/navigation.config.ts` | header/footer links filtered by module visibility |
| Content      | `src/content/`                    | page copy and shared UI text            |
| Data         | `src/data/`, `content/blog/`      | catalog, FAQ, testimonials, gallery, blog posts |
| Visibility   | `src/lib/modules.ts`              | module shown = feature enabled **and** data present |
| Components   | `src/components/`                 | brand-independent UI                    |
| Routes       | `src/app/`                        | App Router pages, all statically generated |

Key decisions:

- **Module visibility** — a module (route, nav link, footer link, sitemap URL,
  homepage section) exists only when its feature is enabled and it has real
  content. Empty modules never render.
- **Routes** — blog, apps, games, services and portfolio each use one optional
  catch-all route (`[[...slug]]`) with `generateStaticParams` and
  `dynamicParams = false`. Hidden or empty modules return a real HTTP 404.
- **Catalog** — `src/data/offerings.ts` holds products (apps, tools, SaaS,
  games), services and portfolio projects. `src/data/products.ts` adapts
  products to the legacy V1 shape used by product components.
- **Theme** — `theme.colors` in `site.config.ts` is written into CSS variables
  in `layout.tsx`; Tailwind color utilities reference those variables
  (`@theme` in `globals.css`).
- **Contact form** — Server Action with server-side validation, honeypot and a
  provider adapter; credentials only in server environment variables.

## Completed Phases

| Phase   | Commit(s)            | Summary |
| ------- | -------------------- | ------- |
| 1       | `7528ac5`            | Centralized site config, navigation config, feature flags, CSS variable bridge |
| 2       | `464531a`            | Content/data separation, `offerings.ts` catalog model, `products.ts` adapter |
| —       | `bd33f06` `5a8a671` `1433121` `c0b1758` | Content: blog waves 1–3 (53 posts), current products, Yandex `ads.txt` entries |
| 3       | `bee831d`            | Reusable home components read content files; Header/Footer read navigation config |
| 4A      | `e757238`            | Yandex verification, `www` canonical URL, JSON-LD and metadata fixes |
| 4B      | `9617798`            | Routes migrated to shared components and feature flags |
| 5.1–5.3 | `705d8bf`            | Package presets (Starter/Business/Premium) and clean feature configuration |
| 5.4     | `e723f59`            | Data-driven module visibility for routes, navigation and sitemap |
| 5.5     | `a32ee72`            | Config-driven WhatsApp and Google Maps contact links |
| 5.6     | `0f162e4`            | Services module |
| 5.7     | `3a52738`            | FAQ, testimonials and gallery modules |
| 5.8     | `d5ac097`            | Portfolio module |
| 5.9     | `220fc91` `044f0fc`  | Working contact form (Server Action, validation, honeypot, provider adapter) |
| 5.10    | `55d48ba`            | External appointment link; GA4/GTM infrastructure (disabled, not production-ready) |
| 5.10.1  | `65fbded`            | `theme.colors` propagates to Tailwind color utilities |
| QA      | —                    | Final QA / release readiness audit (no code changes) |
| 5.11    | `bfc3eb4`            | Catch-all routes for blog/apps/games; soft-404s removed; Retro Pixel Football served by the generic games route |
| 5.12    | `b18ad2c`            | `ui.content.ts`, About metadata in content, legal domain from config, `ink-subtle` contrast token, mobile menu Escape/ARIA, unused Geist Mono removed, Open Graph type/site name/locale |

Phases 1 and 2 were originally committed as `4c59a99` and `912c46e`; those
hashes changed when the branch was rebased onto `efa1637` before the first push.

## Package System

Defined in `src/config/packages.config.ts`. A feature listed in a package but
not in `implementedFeatures` always resolves to `false`; enabling it through an
override fails the build.

| Package  | Features enabled by the preset |
| -------- | ------------------------------ |
| Starter  | `stats` |
| Business | Starter + `services`, `faq`, `testimonials`, `gallery`, `googleMaps`, `contactForm`, `appointment` |
| Premium  | Business + `blog`, `apps`, `games`, `portfolio` (also lists `newsletter` and `multilingual`, which are not implemented and resolve to `false`) |

`whatsappChat` is in no package; a site enables it with an override.
CipherRoot uses `premium` with `newsletter: false` and `googleMaps: false`.

## Feature Status

| Status | Features |
| ------ | -------- |
| Implemented | `blog`, `apps`, `games`, `services`, `portfolio`, `faq`, `testimonials`, `gallery`, `stats`, `contactForm`, `whatsappChat`, `googleMaps`, `appointment` |
| Infrastructure only, disabled | GA4 / Google Tag Manager (`integrations.googleAnalyticsId` / `googleTagManagerId`) — not production-ready: no consent mechanism, legal text not updated |
| Not implemented | `newsletter` (placeholder component only), `multilingual`, `darkModeToggle`, `aiAssistant` |

CipherRoot today: blog (53 posts), apps (4), games (2) and stats are visible;
services, portfolio, FAQ, testimonials and gallery are enabled but have no data,
so they stay hidden. The contact form renders as a disabled placeholder because
no delivery provider is configured.

## Known Limitations

- **Consent** — AdSense is configured and loads on every page; there is no
  consent mechanism, and the Privacy/Cookie Policy describe advertising
  conditionally ("when advertising is active"). GA4/GTM must not be enabled
  before consent and legal text exist.
- **Contact form** — no rate limiting (honeypot and validation only). The
  Server Action stays registered when `contactForm` is off, but rejects every
  submission.
- **Theme** — single dark theme. `theme.mode` is not read. Some neutral colors
  are fixed Tailwind classes (`zinc-300`, `zinc-800`, `white/5`). Browsers
  without `color-mix` support fall back to default colors for opacity variants.
- **SEO** — blog Open Graph images are AVIF (limited social-platform support);
  some product images used for Open Graph are large PNGs; games have no
  structured data; JSON-LD is serialized without escaping `<`.
- **UI text** — English only. Footer column titles (Products, Company,
  Resources) are in `navigation.config.ts`; product status labels
  ("Available", "Coming Soon") come from the `products.ts` adapter; the
  newsletter placeholder text is in its component.
- **Content** — legal texts and page copy describe CipherRoot and must be
  rewritten (and reviewed) for every client.
- **Blog loading** — `src/data/posts.ts` reads `content/blog` via
  `process.cwd()`; builds must run from the project root.

## Next Steps

1. Release documentation review (this document, README, starter guide).
2. Decide on a consent mechanism before enabling analytics, and align the
   Cookie/Privacy Policy with the AdSense state.
3. Optional follow-ups: Open Graph image formats, games structured data,
   contact form rate limiting, remaining neutral color tokens.
4. Future work (not started): multilingual, dark mode, newsletter, AI
   assistant, Immersive Experience Engine — see the starter guide.
