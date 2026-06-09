# Mr. Clean Soluciones de Limpieza — Agent Guide

## Stack
- **React 19** + **Vite 8** (JSX, no TypeScript)
- **Tailwind CSS 3** with PostCSS + Autoprefixer
- **ESLint** (flat config) — `eslint.config.js`
- **No router** — single-page landing with scroll sections

## Commands
| Command | Action |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint check (entire project) |

## Architecture
- **Entry**: `src/main.jsx` → `App.jsx` → section components
- **8 components** in `src/components/`: Navbar, Hero, Nosotros, Servicios, Galeria, Contacto, Footer, WhatsAppFloat
- All sections render in `App.jsx` as a single scrollable page
- No state management, no API calls — fully static SPA

## Design tokens (Tailwind)
- Brand colors: `brand-navy` (`#00143c`), `brand-blue` (`#00a0dc`), `brand-mid` (`#0064a0`), `brand-light` (`#a0dcf0`)
- Fonts: `font-display` (Barlow Condensed, headings), `font-body` (DM Sans, body)
- Custom animations: `animate-fade-up`, `animate-fade-in`, `animate-slide-left`
- Animation delay utilities: `.delay-100` through `.delay-500`

## Conventions
- `.jsx` extension for all React files (no `.js` for components)
- Tailwind utility classes used throughout; no CSS modules
- `lucide-react` for icons
- Custom scrollbar styled in `index.css`
- `lang="es"` in HTML — all UI text is in Spanish

## No testing
- No test runner configured. Do not add tests or test infrastructure without explicit request.
