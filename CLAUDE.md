# EcoGreen Solar — Website

Melbourne-based solar & battery installer website. Builds trust, drives quote conversions, ranks for local SEO.

## Stack

Vite 8 + React 19 + React Router 7 | CSS Custom Properties | GitHub Pages (static SPA)

## Folder Map

| Folder | Purpose |
|---|---|
| `src/components/` | UI primitives (`ui/`), page sections (`sections/`), shell (`layout/`) |
| `src/pages/` | One file per route (Home, About, Services, Process, Pricing, Portfolio, Contact, Reviews) |
| `src/styles/` | `design-tokens.css` (all CSS vars), `globals.css` (reset, utilities) |
| `public/images/` | Real Australian solar installation photos |
| `docs/` | PRD, brand voice, design tokens reference |

## Docs

- PRD → `docs/prd.md`
- Brand voice & tone → `docs/brand-voice.md`
- Design tokens (colors, typography, spacing) → `docs/design-tokens.md`
- All CSS token values → `src/styles/design-tokens.css` (source of truth)

## Hard Rules

- **No emojis** — all icons are SVG components in `src/components/ui/Icons.jsx`
- **No CSS-in-JS** — use CSS custom properties + inline styles referencing tokens
- **No external icon libraries** — custom SVG only
- **Images** — real Australian residential solar installations only, path `/images/`
- **Deploy target** — GitHub Pages (`/ecogreen/` subpath), SPA routing via 404.html fallback
- **Naming** — PascalCase for components, camelCase for props/vars, kebab-case for CSS vars
