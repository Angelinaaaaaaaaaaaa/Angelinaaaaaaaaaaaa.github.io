# Angelina (Runjie) Zhang — Personal Website

[![Build](https://img.shields.io/github/actions/workflow/status/Angelinaaaaaaaaaaaa/Angelinaaaaaaaaaaaa.github.io/ci.yml?branch=main&label=build)](https://github.com/Angelinaaaaaaaaaaaa/Angelinaaaaaaaaaaaa.github.io/actions)
[![Live](https://img.shields.io/badge/live-angelinaaaaaaaaaaaa.github.io-black)](https://Angelinaaaaaaaaaaaa.github.io/)

Personal portfolio and blog for Angelina (Runjie) Zhang — incoming Software Engineer at Uber, UC Berkeley MEng EECS student, and UC San Diego Data Science + Math-CS alumna.

**Live site →** [angelinaaaaaaaaaaaa.github.io](https://Angelinaaaaaaaaaaaa.github.io/)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (static export) |
| Language | TypeScript |
| Styling | styled-components + styled-system |
| Animations | Framer Motion |
| Blog | Notion API via react-notion-x |
| Deployment | GitHub Pages + GitHub Actions CI |

## Features

- Responsive layout (mobile-first)
- Hero section with animated CTA buttons
- Projects page with image cards, tech tags, and links
- About page with education, experience, and tech stack
- Blog powered by Notion
- RSS feed
- Fast static builds via Next.js

## Getting Started

```bash
# Install dependencies
npm install
# or
yarn

# Run the dev server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
# Type-check
npm run lint

# Production build
npm run build
```

## Project Structure

```
.
├── components/     # Reusable UI primitives (Button, Card, Nav, etc.)
├── icons/          # SVG icon components
├── pages/          # Next.js pages (index, about, projects, publications)
├── posts/          # MDX project posts
├── public/         # Static assets (images, favicon)
└── styles/         # Global CSS and CSS Modules
```

## License

[GPLv3](LICENSE) — see the license file for details.
