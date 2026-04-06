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

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### AERO Advisory (`artifacts/advisory`)
- **Kind**: Web (React + Vite)
- **Preview path**: `/`
- **Port**: 20377
- **Description**: AERO Cooperation AI Governance Advisory website — ported from aerocooperation.com
- **Pages**: Governance (home `/`), Advisory (`/advisory`), Security & AI Governance (`/security-ai-governance`), Leadership (`/leadership`), Government (`/government`), Press (`/press`), Hiring (`/hiring`), Job Detail (`/hiring/:id`), Financing (`/financing`), Admin Governance (`/admin/governance`)
- **Logos**: `attached_assets/aero_logo_white.png` and `attached_assets/aero_logo_blue.png` (imported via `@assets/` Vite alias)
- **Theme**: Navy/slate palette — primary `hsl(220 64% 33%)` (#1E3A8A), cyan accent `hsl(195 80% 50%)`, dark bg `bg-slate-950`
- **Fonts**: Inter (sans) + Outfit (display) — loaded from Google Fonts in `index.html`

### API Server (`artifacts/api-server`)
- **Kind**: API (Express 5)
- **Port**: 8080
