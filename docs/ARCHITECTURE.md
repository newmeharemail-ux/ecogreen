# Architecture

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 19 (via Vite) | Modern, fast, component-based |
| Routing | react-router-dom v7 | SPA multi-page navigation |
| Styling | CSS Custom Properties + inline styles | Zero dependencies, easy to theme |
| Build | Vite 6 | Blazing fast HMR, native ESM |
| Deploy | GitHub Pages + Actions | Free hosting, auto-deploys on push |

## Component Tree

```
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      |
      ├── <AnnouncementBar />      # Top promo banner
      ├── <Navbar />               # Sticky nav with links + CTA
      ├── <Outlet />               # Page content renders here
      |   |
      |   ├── Home
      |   |   ├── Hero
      |   |   ├── SocialProof
      |   |   ├── ServicesGrid
      |   |   ├── ProcessStrip
      |   |   ├── BrandLogos
      |   |   ├── PortfolioGrid
      |   |   ├── Testimonials
      |   |   └── CTABanner
      |   |
      |   ├── About
      |   ├── Services
      |   ├── Process
      |   ├── Pricing
      |   ├── Portfolio
      |   ├── Contact
      |   └── Reviews
      |
      └── <Footer />               # Multi-column footer
```

## Routing

All routes are defined in `src/App.jsx`. Each route maps to a page component in `src/pages/`. The `Layout` component wraps every route and provides the persistent shell (announcement bar, nav, footer).

## Styling Approach

- **design-tokens.css** — Central theme file with all CSS custom properties (colors, spacing, typography, shadows)
- **globals.css** — Reset, base HTML element styles, utility classes (`.btn`, `.card`, `.container`, `.grid-*`)
- **Inline styles** — Component-specific styles use inline `style={}` objects referencing CSS variables
- **No CSS-in-JS library** — Keeps bundle small and avoids extra dependencies

## GitHub Pages Deploy

Add this workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in GitHub repo Settings → Pages → Source → "GitHub Actions".
