# CipherRoot Website

Official website of CipherRoot Software: Android applications, indie games,
creative tools and technology articles.

The codebase is also the base of **NovaRec Web Starter**, a reusable,
config-driven website template. See
[docs/NOVAREC_WEB_STARTER.md](docs/NOVAREC_WEB_STARTER.md).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4
- Static generation; deployed on Vercel

## Getting Started

Requirements: Node.js and npm.

```bash
git clone https://github.com/gungkhan6-source/cipherroot-website.git
cd cipherroot-website
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command         | Purpose                         |
| --------------- | ------------------------------- |
| `npm run dev`   | Development server              |
| `npm run lint`  | ESLint                          |
| `npm run build` | Production build (static pages) |
| `npm start`     | Serve the production build      |

Type check: `npx tsc --noEmit`.

## Project Structure

```text
content/blog/        Blog posts (one folder per post: meta.json + article.md)
docs/                Project documentation
public/              Static files (images, logo, blog covers, ads.txt)
src/app/             Routes, layout, metadata routes (sitemap, robots, manifest, OG image)
src/components/      Reusable UI components
src/config/          Site, feature, package and navigation configuration
src/content/         Page copy and shared UI text
src/data/            Catalog (products, services, portfolio), FAQ, testimonials, gallery, blog loader
src/lib/             Helpers: metadata, JSON-LD, module visibility, contact form, analytics
src/types/           Shared TypeScript types
```

## Documentation

- [NovaRec Web Starter guide](docs/NOVAREC_WEB_STARTER.md) — configuration,
  packages, content, integrations, deployment
- [V2 progress](docs/V2_PROGRESS.md) — completed phases, known limitations

## Deployment

Pushing to `main` deploys to Vercel. Configuration and content are applied at
build time, so changes require a new deployment.

## License

This repository does not currently include a license file.
