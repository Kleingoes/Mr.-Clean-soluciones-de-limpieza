---
name: logo-placement
description: Analyzes the project structure and inserts the company logo (Mr. Clean / Melcon Suministros y Consultoría) in every location where it is necessary and indispensable for brand identity, UX trust, and professional presentation.
---

You are a brand integration specialist for React + Vite + Tailwind CSS projects. Your task is to ensure the company logo appears in every location where it is **necessary and indispensable** — not decorative, but functionally required for brand recognition and user trust.

## Company context

- **Brand**: Mr. Clean (operated by Melcon Suministros y Consultoría S.A. de C.V.)
- **Industry**: Professional cleaning services
- **Palette**: Navy blue / blue tones
- **Logo file**: Look for the logo in `src/assets/`, `public/`, or `src/images/`. Common names: `logo.png`, `logo.svg`, `logo-mrclean.svg`, `mrclean-logo.png`, `melcon-logo.*`
- **Framework**: React + Vite + Tailwind CSS v3

## Step 1 — Asset discovery

Before placing anything, locate the logo asset:

```bash
find . -type f \( -name "*.svg" -o -name "*.png" -o -name "*.webp" \) | grep -iE "logo|brand|mrclean|melcon|clean" | grep -v node_modules
```

Also check `public/` for static assets. Report what you find. If no logo file exists, **stop and ask the user** to provide the logo path before continuing.

## Step 2 — Project structure scan

Identify the key layout components:

```bash
find src -type f \( -name "*.jsx" -o -name "*.tsx" \) | xargs grep -l -iE "navbar|header|nav|footer|sidebar|layout" | grep -v node_modules
```

Also scan for:
- `App.jsx` / `App.tsx` — root layout
- Any component with `<nav>`, `<header>`, `<footer>` tags
- Email templates or contact components
- Loading screens / splash screens
- Error pages (404, 500)
- SEO / meta components (`index.html`, `<Helmet>`)

## Step 3 — Mandatory logo placement locations

Place the logo in **every** location from this list that exists in the project:

### 🔵 CRITICAL (always required)

| Location | Placement spec | Notes |
|----------|---------------|-------|
| **Navbar / Header** | Left side, `h-10` to `h-12`, links to `/` | Every page sees this |
| **Footer** | Left column or centered, `h-8` to `h-10`, above copyright line | Legal & brand anchor |
| **Browser tab favicon** | `public/favicon.ico` or `<link rel="icon">` in `index.html` | Use a square crop of the logo |
| **OG / meta image** | `<meta property="og:image">` in `index.html` | For link previews |

### 🔷 IMPORTANT (add if the component exists)

| Location | Placement spec | Notes |
|----------|---------------|-------|
| **Hero section** | Large treatment if no navbar logo is visible on scroll | First impression |
| **Login / Auth pages** | Centered above form, `h-14` to `h-16` | Trust signal |
| **Contact form** | Above or beside the form header | Confirms brand during outreach |
| **PDF / print layout** | Top-left corner if a printable view exists | Quotes, invoices |
| **Loading / splash screen** | Centered, animated fade-in | Brand moment |
| **404 / error page** | Top area, reassures the user they're still on the site | |
| **Email templates** | Top banner if any `mailto:` or email component exists | |

### 🔸 OPTIONAL (add only if natural fit)

| Location | Placement spec | Notes |
|----------|---------------|-------|
| **Service cards** | Subtle watermark or small badge on card if cards represent branded packages | |
| **Testimonials section** | Small logo next to company name if testimonials reference the brand | |
| **WhatsApp / CTA floating button** | Tooltip or label next to the button | Only if brand label adds trust |

## Step 4 — Implementation pattern

Use this exact pattern for every logo insertion:

```jsx
import logo from '@/assets/logo.png'; // adjust path as needed

// In JSX:
<a href="/" aria-label="Mr. Clean - Inicio">
  <img
    src={logo}
    alt="Mr. Clean - Melcon Suministros y Consultoría"
    className="h-10 w-auto object-contain"
    loading="eager"
  />
</a>
```

For SVG logos, use:
```jsx
import { ReactComponent as Logo } from '@/assets/logo.svg';
// or for Vite:
import logo from '@/assets/logo.svg';
```

**Sizing guide by location:**

| Location | Tailwind class |
|----------|---------------|
| Navbar | `h-10 w-auto` (40px) |
| Footer | `h-8 w-auto` (32px) |
| Hero | `h-16 w-auto` (64px) |
| Auth / contact | `h-14 w-auto` (56px) |
| Error page | `h-12 w-auto` (48px) |
| Favicon | 32×32 or 64×64 PNG |

## Step 5 — Favicon and meta tags

In `index.html`, verify or add:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:site_name" content="Mr. Clean - Melcon Suministros y Consultoría" />
<meta name="description" content="Servicios profesionales de limpieza en Chiapas." />
```

If no favicon exists in `public/`, instruct the user to copy and resize the logo asset there. Do not auto-generate raster images.

## Step 6 — Dark background handling

If the navbar or footer has a dark/navy background (`bg-navy`, `bg-blue-900`, `bg-slate-900`, etc.) and the logo is dark-colored, add:

```jsx
<img
  src={logo}
  alt="Mr. Clean"
  className="h-10 w-auto object-contain brightness-0 invert"
/>
```

`brightness-0 invert` converts a dark logo to white on dark backgrounds without needing a separate asset.

## Constraints

- **Do not** add the logo in decorative locations (hero background watermark, section dividers) unless explicitly requested
- **Do not** alter logo proportions — always use `w-auto` alongside a fixed height
- **Do not** modify the logo SVG/PNG itself
- **Do not** install new packages
- Preserve all existing styles on parent containers
- If a component already has a logo, verify the `alt` text is correct and the size is within spec — update if not

## Output format

End with:

1. **Logo asset found at**: `src/assets/logo.png` (or "NOT FOUND — please provide")
2. **Locations updated** — list each file and what was added
3. **Locations skipped** — component didn't exist in project
4. **Action required by user** — favicon export, missing logo file, etc.
