# Design System

## Colors

| Token | Value | Usage |
|---|---|---|
| `--color-green-900` | `#1B5E20` | Dark backgrounds, hover states |
| `--color-green-700` | `#2D8A4E` | Primary brand color, CTAs |
| `--color-green-500` | `#4CAF50` | Accent highlights |
| `--color-green-300` | `#81C784` | Subtle accents |
| `--color-green-100` | `#C8E6C9` | Light backgrounds |
| `--color-green-50` | `#E8F5E9` | Section backgrounds |
| `--color-blue-700` | `#1565C0` | Secondary accent, trust signals |
| `--color-blue-50` | `#E3F2FD` | Light blue backgrounds |
| `--color-warm` | `#F5F0E8` | Warm neutral sections |
| `--color-warm-light` | `#FAF8F4` | Alternate section backgrounds |
| `--color-dark` | `#2C3E50` | Headings, footer background |
| `--color-text` | `#333333` | Body text |
| `--color-text-light` | `#666666` | Secondary text |

## Typography

- **Font:** Inter (Google Fonts)
- **Scale:** 0.75rem → 3rem (xs → 5xl)
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Spacing

8-point grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 (px equivalent via rem)

## Components

### Button
- `.btn-primary` — Green background, white text
- `.btn-secondary` — Outlined green
- `.btn-outline-light` — White outline on dark backgrounds
- `.btn-lg` — Larger padding for hero CTAs

### Card
- White background, rounded corners, subtle shadow
- Hover: elevated shadow + lift

### SectionTitle
- Centered heading + optional subtitle
- Optional `light` prop for dark backgrounds
