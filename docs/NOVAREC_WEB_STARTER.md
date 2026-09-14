# NovaRec Web Starter — Setup Guide

A reusable, config-driven website template built on the CipherRoot Software
site. One codebase serves different clients: branding, content, modules and
integrations are configured, not coded.

This guide describes the repository as it is. Items listed under
[Not Implemented](#q-intentionally-not-implemented) do not exist yet.

---

## A. What the Starter Is

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.
- Every page is statically generated at build time.
- Modules (blog, services, portfolio…) are switched on by a package preset and
  shown only when they have content.
- No database, no user accounts, no CMS. Content lives in the repository.

## B. Architecture Overview

```text
src/config/     What the site is: brand, features, packages, navigation
src/content/    What the site says: page copy, shared UI text, legal text
src/data/       What the site lists: catalog, FAQ, testimonials, gallery
content/blog/   Blog posts (meta.json + article.md per post)
src/lib/        Logic: module visibility, metadata, JSON-LD, contact form
src/components/ Brand-independent UI
src/app/        Routes (all static)
public/         Images, logo, blog covers, ads.txt
```

Module visibility (`src/lib/modules.ts`):

```text
feature enabled (features.config)  AND  data present  →  module visible
```

A visible module gets its routes, navigation and footer links, sitemap URLs
and homepage section. An invisible module has none of these, and its URLs
return HTTP 404.

## C. Configuration

### `src/config/site.config.ts` — brand and site identity

| Group | Fields |
| ----- | ------ |
| Identity | `name`, `shortName`, `slogan`, `description`, `url` (canonical, e.g. `https://www.example.com`), `locale` (Open Graph, e.g. `en_US`), `logo`, `favicon` |
| Contact | `email`, `phone`, `whatsapp`, `address { street, postalCode, city, country, googleMapsUrl }`, `appointmentUrl` |
| Social | `github`, `youtube`, `instagram`, `playStore`, `socials[]` |
| Theme | `theme.mode`, `theme.colors` (see [G](#g-theme-customization)) |
| Navigation | `header.cta`, `navigation[]`, `footer { tagline, products, company, resources, legal }` |
| Integrations | `integrations { googleAdSenseId, googleAnalyticsId, googleTagManagerId }`, `verification { google, yandex }` |
| SEO | `keywords[]` |

Belongs here: public, per-site values.
Does **not** belong here: API keys, SMTP or Resend credentials, private
recipient addresses, personal data that should not be public. This file ends
up in a public repository and partly in the client bundle.

### `src/config/features.config.ts` — which package, which overrides

```ts
export const featuresConfig: FeaturesConfig = resolveFeatures("business", {
  // site-specific overrides, e.g.
  whatsappChat: true,
});
```

### `src/config/packages.config.ts` — package presets

Defines `starter`, `business`, `premium` and `implementedFeatures`. Change this
only when a package definition changes for every site, not for one client.

### `src/config/navigation.config.ts` — derived navigation

Filters `siteConfig.navigation`, `header.cta` and footer lists by module
visibility and drops empty footer columns. Server-only (it reads blog posts from
disk); the client `Header` receives the result as props. Normally not edited
per site.

### Build-time vs. server-side

- All config and content is read at **build time**. Any change needs a rebuild
  and redeploy.
- Contact form credentials are **environment variables** read on the server
  only (see [I](#i-environment-variables)).

## D. Content / Data Separation

| Where | What |
| ----- | ---- |
| `src/content/home.content.ts` | Hero, stats, "why us", homepage section titles |
| `src/content/pages.content.ts` | Listing pages: apps, games, services, portfolio, blog |
| `src/content/about.content.ts` | About page, including its metadata |
| `src/content/contact.content.ts` | Contact page, form labels and messages |
| `src/content/legal.content.ts` | Privacy Policy, Terms of Service, Cookie Policy |
| `src/content/ui.content.ts` | Shared UI text: buttons, accessibility labels, status and error messages |
| `src/data/offerings.ts` | Products, services, portfolio projects |
| `src/data/faq.ts`, `testimonials.ts`, `gallery.ts` | Homepage modules |
| `content/blog/` | Blog posts |

Every content file ships with CipherRoot text. Replace all of it for a client.
**Legal texts describe CipherRoot's actual setup and must be rewritten and
reviewed for each client.**

## E. Starter / Business / Premium

Core pages in every package: home, about, contact page (email and social
links), legal pages, 404, sitemap, robots, manifest, Open Graph image, SEO
metadata, branding and theme.

| Package  | Adds |
| -------- | ---- |
| Starter  | Stats |
| Business | Starter + Services, FAQ, Testimonials, Gallery, Contact form, Google Maps link, Appointment link |
| Premium  | Business + Blog, Apps, Games, Portfolio |

- Premium also lists `newsletter` and `multilingual`; both are not implemented
  and always resolve to `false`.
- **WhatsApp** is in no package. Enable it per site with
  `whatsappChat: true`.
- Pricing is not part of this repository.

## F. Feature Flags

| Flag | Status | Visible when |
| ---- | ------ | ------------ |
| `blog` | Implemented | posts exist in `content/blog` |
| `apps` | Implemented | catalog has products whose category is not `game` |
| `games` | Implemented | catalog has products with category `game` |
| `services` | Implemented | catalog has `kind: "service"` items |
| `portfolio` | Implemented | catalog has `kind: "portfolio"` items |
| `faq` / `testimonials` / `gallery` | Implemented | the data array is not empty |
| `stats` | Implemented | `homeContent.stats` is not empty |
| `contactForm` | Implemented | always renders on `/contact`; active only with a configured provider |
| `whatsappChat` | Implemented (contact page link) | `siteConfig.whatsapp` is a valid international number |
| `googleMaps` | Implemented (contact page link) | address or `googleMapsUrl` is set |
| `appointment` | Implemented (contact page link) | `appointmentUrl` is an `https` URL |
| `newsletter` | **Not implemented** | never |
| `multilingual` | **Not implemented** | never |
| `darkModeToggle` | **Not implemented** | never |
| `aiAssistant` | **Not implemented** | never |

Setting an unimplemented flag to `true` in `features.config.ts` fails the build.

## G. Theme Customization

`siteConfig.theme.colors` (all fields required, hex values):

| Field | Used for |
| ----- | -------- |
| `brand` | Primary buttons, accents, focus/selection color |
| `brandHover` | Primary button hover; hero glow |
| `brandMid` | Secondary accent text, list markers, hover borders |
| `brandLight` | Links, highlighted labels, focus outline |
| `accent` | Secondary glow (hero, Open Graph image) |
| `accentSoft` | Reserved token; not used by components yet |
| `surface0` … `surface3` | Page and section backgrounds |
| `card` | Cards, forms |
| `ink` | Primary text |
| `inkMuted` | Body / secondary text |
| `inkSubtle` | Small secondary text (hints, dates, copyright) — keep ≥ 4.5:1 contrast on `card` and `surface0` |
| `line` | Borders, dividers |
| `lineStrong` | Stronger borders, secondary buttons |

- Colors reach Tailwind utilities through CSS variables (`layout.tsx` →
  `globals.css` `@theme`). Changes apply on the next build.
- Fixed on purpose: status colors (`success`, `warning`, red/green/yellow
  status text). Some neutral classes (`zinc-300`, `zinc-800`, `white/5`) are not
  tokens yet.
- The design is dark only. `theme.mode` is not read; light palettes are not
  supported.

## H. Contact Configuration

`/contact` shows, in this order:

1. Contact form (when `contactForm` is enabled)
2. Email (`siteConfig.email`)
3. GitHub and YouTube (`siteConfig.github`, `siteConfig.youtube`)
4. WhatsApp, appointment and Google Maps links (when enabled and configured)

Contact form behavior:

- Fields: name, email, subject, message. Client-side HTML validation plus full
  server-side validation (lengths, email format, line breaks and control
  characters rejected in single-line fields).
- Hidden honeypot field; bot submissions are silently dropped.
- The recipient comes only from the server environment; a request cannot
  change it.
- Without a configured provider the form renders as a disabled placeholder
  with the contact email.
- The `/contact` page is static: the form's enabled state is decided at build
  time, so set the environment variables **before** the deploy that should
  enable it.
- Delivery goes through a provider adapter (`src/lib/contactForm/delivery.ts`).
  Current adapters: `resend` (Resend HTTP API via `fetch`, no SDK) and `mock`
  (accepts messages without sending; refused on Vercel production). A new
  provider is a new adapter in that file.
- Email subject prefix: `contactContent.form.deliverySubjectPrefix`.

## I. Environment Variables

Server-side only. Never prefix them with `NEXT_PUBLIC_`, never commit them.

| Variable | Purpose |
| -------- | ------- |
| `CONTACT_DELIVERY_PROVIDER` | `resend` or `mock`. Unset: form disabled |
| `RESEND_API_KEY` | Resend API key (when provider is `resend`) |
| `CONTACT_TO_EMAIL` | Inbox that receives submissions |
| `CONTACT_FROM_EMAIL` | Sender address verified in Resend |

On Vercel: Project → Settings → Environment Variables, then **redeploy**.
Apart from these, the application only reads Vercel's own `VERCEL_ENV` (to
refuse the `mock` provider in production).

## J. Optional Integrations

| Integration | Config | Default | Notes |
| ----------- | ------ | ------- | ----- |
| WhatsApp | `whatsapp` + `whatsappChat: true` | Off (no package enables it) | International number including country code; `+`, spaces and other non-digits are stripped, and the result must be 8–15 digits not starting with `0`. Renders a `wa.me` link on the contact page; not a chat widget |
| Google Maps | `address` or `address.googleMapsUrl` + `googleMaps` | On in Business/Premium, hidden without an address | Plain external link; no API key, no embedded map. Address is not added to structured data |
| Appointment | `appointmentUrl` + `appointment` | On in Business/Premium, hidden without a URL | External `https` booking link (e.g. a scheduling service). No booking backend |
| GA4 / GTM | `integrations.googleAnalyticsId` / `googleTagManagerId` | Off (empty) | Scripts load only when an ID is set; malformed IDs fail the build. **Not production-ready**: no consent mechanism and legal text does not cover analytics. Do not set an ID yet |
| AdSense | `integrations.googleAdSenseId` | Set for CipherRoot | Adds the `google-adsense-account` meta tag and the AdSense script on every page. `public/ads.txt` and `public/app-ads.txt` are static files. No consent mechanism exists; check legal and consent requirements before using it for a client |
| Search verification | `verification.google` / `verification.yandex` | Yandex set for CipherRoot | Rendered as `<meta>` verification tags |

## K. Adding Services

Add an item with `kind: "service"` to `offerings` in `src/data/offerings.ts`.
The image must exist under `public/`.

```ts
// Example template — not real data
{
  id: "example-web-design",
  slug: "example-web-design",
  name: "Example Web Design",
  kind: "service",
  category: "service",
  tagline: "Short line shown above the title",
  description: "One-sentence summary for the card.",
  longDescription: "Longer description for the detail page.",
  image: "/images/example-service.webp",
  href: "/services/example-web-design", // must match the slug
  features: ["Example feature"], // optional
  deliverables: ["Example deliverable"], // optional
  ctaText: "Request a quote", // optional; defaults to the shared "Contact" label
},
```

Result: `/services` and `/services/example-web-design` are generated, nav and
footer links to `/services` appear (if listed in `site.config.ts`), and the
homepage services section renders.

## L. Adding Portfolio Projects

```ts
// Example template — not real data
{
  id: "example-project",
  slug: "example-project",
  name: "Example Project",
  kind: "portfolio",
  category: "portfolio",
  tagline: "Project type",
  description: "Card summary.",
  longDescription: "Detail page description.",
  image: "/images/example-project.webp",
  href: "/portfolio/example-project",
  client: "Example Client", // optional; only with the client's permission
  completionDate: "2026", // optional
  projectUrl: "https://example.com", // optional
  repositoryUrl: "https://github.com/example/example", // optional
  tags: ["Next.js"], // optional
},
```

Detail rows (client, completed, technologies) only render when filled in.

## M. Adding FAQ, Testimonials and Gallery

```ts
// src/data/faq.ts — example template
export const faqItems: FaqItem[] = [
  { question: "Example question?", answer: "Example answer." },
];

// src/data/testimonials.ts — example template
// Only genuine quotes the person agreed to publish.
export const testimonialItems: TestimonialItem[] = [
  { quote: "Example quote.", name: "Example Name", role: "Role", company: "Company" },
];

// src/data/gallery.ts — example template
export const galleryItems: GalleryItem[] = [
  { src: "/gallery/example.webp", alt: "Describe the image", width: 1200, height: 800, caption: "Optional" },
];
```

Each homepage section renders only while its array is not empty.

## N. Adding Products and Games

Add an item with `kind: "product"` to `offerings`:

```ts
// Example template — not real data
{
  id: "example-app",
  slug: "example-app",
  name: "Example App",
  kind: "product",
  category: "app", // "app" | "tool" | "saas" → /apps ; "game" → /games
  tagline: "Short tagline",
  description: "Card summary.",
  longDescription: "Detail page description.",
  image: "/images/example-app.webp",
  href: "/apps/example-app", // "/games/<slug>" for games
  featured: false,
  releases: [
    {
      platform: "android",
      label: "Android",
      status: "released", // "released" | "coming-soon" | "beta" | "pre-order"
      storeUrl: "https://play.google.com/store/apps/details?id=example",
      ctaLabel: "Google Play",
    },
  ],
  developmentVideo: { title: "Devlog #1", url: "https://www.youtube.com/watch?v=example" }, // optional
  seo: { description: "Custom meta description", image: "/opengraph-image" }, // optional
},
```

- `href` is not derived automatically; keep it consistent with `category` and
  `slug`.
- Status shown on cards: "Available" if any release is `released`, otherwise
  "Coming Soon". The store button uses the first released platform.
- Apps get `SoftwareApplication` structured data; games currently have none.
- Footer product links (`siteConfig.footer.products`) are maintained manually.

## O. Blog

One folder per post in `content/blog/<slug>/`:

```text
content/blog/example-post/
├── meta.json
└── article.md
```

```json
{
  "title": "Example Post Title",
  "date": "2026-01-01",
  "category": "Example Category",
  "author": "Example Author",
  "cover": "/blog/example-post.webp",
  "excerpt": "Short summary for cards and meta description.",
  "order": 1
}
```

- The folder name is the URL slug (`/blog/example-post`).
- Optional `"updated": "YYYY-MM-DD"` sets the structured-data `dateModified`
  (otherwise `date` is used) and adds `article:modified_time`.
- `order` sorts posts (ascending). The cover lives in `public/blog/`.
- `article.md` supports `#`/`##`/`###` headings, paragraphs and `-` lists only
  (no links, emphasis or code blocks).

## P. Build and Deploy

```bash
npm run lint
npx tsc --noEmit
npm run build
```

- All routes are statically generated; there is no runtime data fetching.
  Per-request server work is limited to the contact form Server Action and
  Next.js image optimization.
- Vercel deploys on push to the production branch. Environment variables are
  set in the Vercel project; redeploy after changing them.
- Visibility is decided at build time from config and data. Adding content,
  changing config or changing environment variables needs a new deployment.
- If type errors mention deleted route files, remove the local `.next` folder
  (stale generated types) and build again.

## Q. Intentionally Not Implemented

| Item | State |
| ---- | ----- |
| Multilingual | Not implemented; UI and content are English only |
| Dark mode / theme switching | Not implemented; single dark theme, `theme.mode` unused |
| AI assistant | Not implemented; future separate Premium integration (server-side, client-owned API keys) |
| Newsletter | Not implemented; `NewsletterForm` is an inactive placeholder |
| Analytics consent / cookie banner | Not implemented; required before enabling GA4/GTM |
| Contact form rate limiting | Not implemented; honeypot and validation only |
| CMS / admin UI, database, user accounts | Not implemented; content lives in the repository |
| Embedded maps, booking backend, chat widget | Not implemented; external links only |
| Immersive Experience Engine | Future — see below |

### Future: Immersive Experience Engine

A planned optional visual layer, separate from the core template and planned
after V2 is complete: mouse-reactive particles and scroll-based morphing
effects. There is no code, configuration or feature flag for it yet.

## R. Release Checklist (per client)

- [ ] `site.config.ts`: name, description, `url` (final canonical domain), `locale`, logo, favicon
- [ ] Contact details are ones the client wants public; no private phone or address committed unintentionally
- [ ] `features.config.ts`: package chosen, overrides reviewed
- [ ] `theme.colors` set; text contrast checked (`inkMuted`, `inkSubtle` on `card` and `surface0`)
- [ ] All `src/content/*` files rewritten for the client (including `ui.content.ts` wording if needed)
- [ ] Legal texts rewritten for the client's real services and providers, and reviewed
- [ ] CipherRoot catalog, blog posts, images and `public/ads.txt` / `app-ads.txt` removed or replaced
- [ ] `integrations` and `verification`: only the client's own IDs; GA4/GTM left empty
- [ ] Contact form: provider decided; environment variables set in Vercel; test submission received
- [ ] Navigation and footer lists match the enabled modules
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build` pass
- [ ] After deploy: sitemap, robots, canonical URLs and 404s for hidden modules checked
