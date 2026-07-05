# Layouts

Layout components live in `src/components/layout/` — this folder exists for routing clarity.

## Current Layouts

| Component | File |
|---|---|
| `Layout` | `src/components/layout/Layout.jsx` — wraps `<Outlet/>` for persistent shell |
| `Navbar` | `src/components/layout/Navbar.jsx` — sticky nav with mobile hamburger |
| `Footer` | `src/components/layout/Footer.jsx` — 4-column footer |
| `AnnouncementBar` | `src/components/layout/AnnouncementBar.jsx` — top promo banner |

All layouts are composed by the `Layout` wrapper component and rendered around every route via React Router's `<Outlet/>`.
