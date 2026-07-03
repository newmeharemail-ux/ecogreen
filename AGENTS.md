# EcoGreen Solar — Project Memory

## Stack
Vite + React + React Router | GitHub Pages deploy

## Dev Commands
```bash
npm run dev      # Dev server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview build
```

## Visual Conventions
- **No emojis anywhere** — all icons must be SVG components from `src/components/ui/Icons.jsx`
- **Visual density** — rich shadows, colored borders, background patterns, shape dividers, hover animations
- **Images** — Australian houses with solar panels (Melbourne/VIC suburbia). Use `/images/` path.
- **Colors** — Use CSS tokens from `design-tokens.css`. Green primary (`--color-green-700`), blue accent (`--color-blue-700`), warm neutral (`--color-warm-light`).

## File Map
| File | Purpose |
|---|---|
| `src/styles/design-tokens.css` | Colors, spacing, typography, shadows, radius tokens |
| `src/styles/globals.css` | Reset, grids, buttons, cards, responsive |
| `src/components/ui/Icons.jsx` | ALL SVG icon components |
| `src/components/ui/Button.jsx` | `btn btn-{variant} {size}` — primary, secondary, outline-light |
| `src/components/ui/Card.jsx` | Wraps `.card` class |
| `src/components/layout/Navbar.jsx` | Sticky nav with mobile hamburger |
| `src/components/layout/Footer.jsx` | 4-column footer |
| `src/pages/*` | One file per route |

## Image Sources
Pull from Unsplash search: "Australian solar panels house Melbourne suburb". Prefer real Australian residential installations.
