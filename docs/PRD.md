# EcoGreen Solar — Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** June 2026  
**Status:** Draft / MVP  

---

## 1. Executive Summary

EcoGreen Solar is a Melbourne-based solar panel and battery installation company targeting residential and commercial customers across Victoria. The website must build trust, remove fear, drive conversions, and rank for local search terms — all while feeling warm, community-oriented, and professionally crafted.

**Primary goal:** Generate qualified consultation/quote leads.  
**Secondary goal:** Position EcoGreen as Melbourne's most trusted solar installer.

---

## 2. Brand & Design Identity

| Attribute | Decision |
|---|---|
| **Company Name** | EcoGreen Solar |
| **Tagline** | Melbourne's Trusted Solar & Battery Experts |
| **Colors** | Green (primary #2D8A4E), Blue (#1565C0), White, Warm neutral (#F5F0E8) |
| **Tone** | Warm, community-focused, approachable, transparent |
| **Typography** | Inter (sans-serif) |
| **Imagery Style** | Real photos of installations and installers (not generic stock) |
| **Icon Style** | SVG illustrations — custom solar, battery, house, and leaf icons |

## 3. Target Audience

**Primary:** Melbourne/Victoria homeowners aged 35–65, concerned about rising electricity bills.  
**Secondary:** Commercial property managers, small business owners.  
**Tertiary:** New home builders looking for solar-ready designs.

**Key fears to address:**
- "Can I trust this company?" → Social proof, reviews, real photos
- "Is solar complicated?" → Clear process page, handled paperwork
- "How much does it cost?" → Published pricing ranges
- "What if something breaks?" → Repairs & maintenance services

## 4. Site Map

```
Home (/)                 → 8 sections: Hero, Social Proof, Services, Process,
│                            Brands, Portfolio, Testimonials, CTA
│
├── About (/about)       → Company story, values, team, why choose us
├── Services (/services) → 6 detailed service pages with feature lists
├── Process (/process)   → 9-step installation walkthrough
├── Pricing (/pricing)   → Transparent pricing tables (solar + battery)
├── Portfolio (/portfolio) → 12+ project cards with specs
├── Contact (/contact)   → Multi-field lead form + contact details
└── Reviews (/reviews)   → 8 customer testimonials with ratings
```

## 5. Homepage Section Details

| Section | Purpose | Key Element |
|---|---|---|
| Announcement Bar | Low-friction offer | "Free site assessment" CTA |
| Hero | Immediate value prop | Gradient background, dual CTAs |
| Social Proof | Trust above fold | Review badges + stats row |
| Services Grid | Show breadth | 6 cards with icons + CTAs |
| Process Strip | Simplify complexity | 4-step horizontal flow |
| Brand Logos | Credibility by association | Premium brand names |
| Portfolio Grid | Real proof | 6 project cards |
| Testimonials | Social proof deep | 3 quote cards |
| Mid-page CTA | Re-engage non-converters | Empathy-first message |

## 6. Conversion Strategy

**Primary CTA:** "Free Consultation" / "Get a Quote"  
**Secondary CTA:** "See Our Work" / "Learn More"  
**Tertiary CTA:** Phone number in nav

**Conversion flow:** CTA → Contact page → Form submit → Team follows up within 24h

## 7. Technical Requirements

| Requirement | Decision |
|---|---|
| Framework | React 19 + Vite 6 |
| Routing | react-router-dom v7 (SPA) |
| Styling | CSS Custom Properties + inline styles |
| Images | Pexels free stock + Wikimedia Commons (real solar photos) |
| Icons | Custom inline SVG components |
| Deploy | GitHub Pages via GitHub Actions |
| Performance Target | Lighthouse 90+ (mobile), 95+ (desktop) |
| Responsive | Mobile-first, breakpoints at 768px, 1024px |

## 8. SEO Strategy

- `<title>` and `<meta description>` per page
- Semantic HTML structure (h1-h3, sections, nav, footer)
- Melbourne/Victoria location keywords throughout
- Alt text on all images
- Clean URL structure (/services, /about, etc.)
- Open Graph tags for social sharing

## 9. Future Enhancements (Post-MVP)

- FAQ accordion page (/faq)
- Blog / knowledge center (/blog)
- Solar savings calculator tool
- Location pages for Melbourne suburbs (/locations/*)
- Brand partner pages (/brand/*)
- Live chat integration (Tidio/Crisp)
- Before/after image sliders on projects
- Video testimonial section
- Multi-step quote form with conditional logic

## 10. Design Principles

1. **Trust first** — Social proof above the fold on every page
2. **Transparency** — Publish pricing, show real work, list credentials
3. **Local pride** — Melbourne identity throughout (language, imagery, context)
4. **Warmth** — Community-friendly tone, not corporate cold
5. **Clarity** — Every page has one clear action for the visitor
6. **Speed** — Fast load times, optimized images, minimal dependencies
