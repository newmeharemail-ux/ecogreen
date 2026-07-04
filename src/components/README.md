# Components

Three subfolders, each with a single responsibility:

## `ui/` — Primitives
Button, Card, Container, SectionTitle, Icons (SVG). Used by sections and pages. Never import sections or pages.

## `sections/` — Page Sections
Hero, SocialProof, ServicesGrid, ProcessStrip, BrandLogos, PortfolioGrid, Testimonials, CTABanner. Composed from `ui/` primitives. Only imported by page components.

## `layout/` — Shell Components
AnnouncementBar, Navbar, Layout (wraps `<Outlet/>`), Footer. The persistent chrome around every page. Imported by `App.jsx` only.

## Conventions
- Each component = one file, default export
- Props use `{propName}` destructuring
- No prop-types or TypeScript — plain JSX
- Section components keep all JSX inline (no sub-components)
