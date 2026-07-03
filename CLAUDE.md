# EcoGreen Solar Website

**Company:** EcoGreen Solar  
**Location:** Melbourne, VIC, Australia  
**Stack:** Vite + React + React Router  
**Deploy:** GitHub Pages  

---

## Folder Structure

```
ecogreen/
├── index.html                  # Entry HTML (meta tags, root div)
├── vite.config.js              # Vite config (base path for GH Pages)
├── package.json                # Dependencies & scripts
├── CLAUDE.md                   # THIS FILE — project roadmap & routing
├── docs/
│   ├── PRD.md                  # Product Requirements Document (NEW)
│   ├── ARCHITECTURE.md         # Tech decisions, component tree, data flow
│   ├── DESIGN_SYSTEM.md        # Colors, typography, spacing, components
│   └── PAGES.md                # Sitemap, page descriptions, future plans
├── public/
│   └── images/                 # Real solar installation photos (Pexels)
│       ├── hero-solar-installation.jpg
│       ├── solar-tech-rooftop.jpg
│       ├── solar-installer-roof.jpg
│       ├── battery-installation.jpg
│       └── solar-panels-roof.jpg
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Routes definition (react-router-dom)
│   ├── styles/
│   │   ├── design-tokens.css   # CSS custom properties (colors, spacing, etc.)
│   │   └── globals.css         # Reset, base styles, utility classes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx
│   │   │   ├── Navbar.jsx            # Sticky nav with mobile hamburger
│   │   │   ├── Footer.jsx            # 4-column footer
│   │   │   └── Layout.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx              # Full-screen photo bg + gradient overlay
│   │   │   ├── SocialProof.jsx       # Review badges + stats row
│   │   │   ├── ServicesGrid.jsx      # 6 SVG-icon service cards
│   │   │   ├── ProcessStrip.jsx      # 4-step flow on green gradient
│   │   │   ├── BrandLogos.jsx        # Premium brand name tags
│   │   │   ├── PortfolioGrid.jsx     # 6 project cards w/ real photos
│   │   │   ├── CTABanner.jsx         # Empathy-driven conversion banner
│   │   │   └── Testimonials.jsx      # 3 customer quotes w/ decorative quotes
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Container.jsx
│   │       ├── SectionTitle.jsx
│   │       └── Icons.jsx             # Custom SVG icons (solar, battery, leaf, etc.)
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── Pricing.jsx
│       ├── Portfolio.jsx
│       ├── Contact.jsx
│       └── Reviews.jsx
```

---

## How to Navigate

| Need | Go To |
|---|---|
| Project requirements | `docs/PRD.md` |
| Change colors / fonts | `src/styles/design-tokens.css` |
| Change SVG icons | `src/components/ui/Icons.jsx` |
| Add new images | Put in `public/images/`, reference as `/images/name.jpg` |
| Edit nav links | `src/components/layout/Navbar.jsx` |
| Edit footer | `src/components/layout/Footer.jsx` |
| Add/remove pages | `src/App.jsx` (routes) + new file in `src/pages/` |
| Edit home sections | `src/components/sections/*` |
| Edit page content | `src/pages/*.jsx` |

---

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deploy to GitHub Pages

1. Push repo to GitHub
2. In repo Settings → Pages → Source → "GitHub Actions"
3. Add `.github/workflows/deploy.yml` (see `docs/ARCHITECTURE.md`)
4. Push — it auto-deploys
