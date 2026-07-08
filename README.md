# Trisha N Iyer — Portfolio

Personal portfolio site built with Next.js. Showcases projects, experience, leadership, and contact info.

**Live site:** [iyertrisha-portfolio.netlify.app](https://iyertrisha-portfolio.netlify.app)

## Stack

- **Framework:** Next.js 15 (Pages Router), React 19
- **Package manager:** pnpm
- **Node:** 22.14+
- **Deploy:** Netlify (`@netlify/plugin-nextjs`)
- **Analytics:** Vercel Analytics, Speed Insights, optional Umami / Cloudflare Web Analytics

## Features

- Dark / light theme toggle
- SEO metadata, JSON-LD, sitemap, and RSS generated at build time
- Tab title easter egg (`no, come back!` when you switch away)
- Projects, experience, and leadership sections driven from `lib/` data files

## Featured projects

| Project | Description |
|---------|-------------|
| [DanceGPT](https://github.com/iyertrisha/dance-GPT) | AI exam prep for Bharatanatyam Gandharva theory — RAG, flashcards, chat tutor |
| [Gopala Nethralaya](https://github.com/iyertrisha/gopala-nethralaya) | Hospital management system (React, Django, PostgreSQL, Docker) |
| [NetGuard IaC Analyzer](https://github.com/iyertrisha/security_scanner) | AI-augmented IaC security scanner (FastAPI, React) |
| [Kestra OSS](https://github.com/kestra-io/kestra/pull/11865) | TypeScript migration contribution |

## Local development

```bash
git clone https://github.com/iyertrisha/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

| What | Where |
|------|-------|
| Home intro | `pages/index.js` |
| Projects | `lib/projects.js` |
| Experience | `lib/experience.js` |
| Leadership | `lib/leadership.js` |
| SEO defaults | `lib/seo.js` |
| Theme colors | `styles/global.css` |
| Favicon | `public/favicon.svg` |

Copy `.env.example` to `.env.local` for optional analytics keys.

## Build & deploy

```bash
pnpm build   # runs sitemap/RSS generation, then next build
pnpm start   # production server locally
```

Netlify reads `netlify.toml` and runs `pnpm build` on push to `main`.

## License

MIT — see [LICENSE](./LICENSE).
