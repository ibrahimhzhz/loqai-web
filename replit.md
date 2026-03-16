# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   ├── loqai-website/      # LoqAI landing page (React + Vite, at /)
│   └── mockup-sandbox/     # Component preview sandbox
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts
├── pnpm-workspace.yaml     # pnpm workspace
├── tsconfig.base.json      # Shared TS options
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Artifacts

### `artifacts/loqai-website` — LoqAI Landing Page (preview path: `/`)

A fully designed SaaS landing page for LoqAI, a company offering HRMS and AI-powered talent products.

**Sections:**
- Navbar with 3 dropdown menus (Solutions, Pricing, Resources) + mobile hamburger menu
- Hero section with product dashboard mockup and stats
- Features section (8 feature cards for LoqHRMS + LoqTalent)
- Product showcase (interactive tab toggle between LoqHRMS and LoqTalent)
- Testimonials (6 customer quotes)
- Founders section (3 founders with photos, bios, expertise tags, social links)
- CTA + Pricing section (3-tier pricing)
- Footer with links and social icons

**Colors:** Black, Purple, Blue, White (dark theme throughout)

**Key files:**
- `src/App.tsx` — main router
- `src/pages/LandingPage.tsx` — page assembler
- `src/components/Navbar.tsx` — sticky nav with dropdown menus
- `src/components/HeroSection.tsx` — hero with browser mockup
- `src/components/FeaturesSection.tsx` — feature cards grid
- `src/components/ProductShowcase.tsx` — tabbed product deep-dive
- `src/components/TestimonialsSection.tsx` — testimonial cards
- `src/components/FoundersSection.tsx` — founders with photos
- `src/components/CTASection.tsx` — pricing + CTA
- `src/components/Footer.tsx` — footer links
- `public/loqai-logo.png` — LoqAI logo

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server.

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
