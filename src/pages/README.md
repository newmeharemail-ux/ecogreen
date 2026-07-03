# Pages

One file per route, imported in `src/App.jsx`.

## Routes

| File | Route | Content |
|---|---|---|
| `Home.jsx` | `/` | Full landing page (Hero → SocialProof → Services → Process → Brands → Portfolio → Testimonials → CTA) |
| `About.jsx` | `/about` | Company story, values, team |
| `Services.jsx` | `/services` | 6 detailed service descriptions |
| `Process.jsx` | `/process` | 9-step installation walkthrough |
| `Pricing.jsx` | `/pricing` | Pricing tables (solar + battery) |
| `Portfolio.jsx` | `/portfolio` | Project grid with specs |
| `Contact.jsx` | `/contact` | Lead form + company details |
| `Reviews.jsx` | `/reviews` | Customer testimonials |

## Conventions
- Each page imports sections from `components/sections/` and composes them
- Pages are the ONLY files that import from `sections/`
- No business logic — all UI logic stays in section components
