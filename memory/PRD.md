# Logicense — Marketing Site PRD

## Problem statement (verbatim)
Build a multi-page marketing website for an AI development agency called
Logicense (domain: logicense.in). The company builds custom AI agents,
RAG pipelines, chatbots, and workflow automation for clients across
logistics, real estate, retail, manufacturing, healthcare operations,
legal, and 3D/architecture/design.

## User choices (verbatim)
- Frontend only, no backend (React SPA)
- Realistic restrained copy written by main agent; no fabricated
  clients/testimonials
- Contact form dummy (client will wire backend later)
- Accent color: muted blue
- Dark mode default with light-mode toggle

## Architecture
- **Stack**: React 19 (CRA/craco), react-router-dom v7, Tailwind CSS,
  framer-motion, next-themes, sonner, lucide-react
- **Fonts**: Chivo (display) + IBM Plex Sans (body) + IBM Plex Mono (code),
  loaded from Google Fonts
- **Design tokens**: HSL CSS variables in `src/index.css` for light/dark
  with `--lg-accent` (muted blue) as primary accent
- **Routing**: `BrowserRouter` with a shared `Layout` (Header/Footer/scroll)
  wrapping 8 page components + 404
- **Content**: All copy centralised in `src/lib/site.js` for easy edits
- **No backend**: Contact form uses `setTimeout` + sonner toast

## Pages implemented
- `/` Home — hero + services grid + industries strip + process teaser + work teaser + tech + CTA
- `/services` — 4 detailed services with alternating terminal snippets
- `/industries` — 7 industry rows with domain-specific example use cases
- `/process` — 5-step vertical timeline with per-step deliverables
- `/work` — 3 case-study cards, all clearly marked `[PLACEHOLDER]` + TODO badges + notice
- `/technology` — agent-loop diagram + 8 stack tiles + eval terminal
- `/about` — mission + 6 principle cards + 3 placeholder team cards + notice
- `/contact` — validated dummy form + direct contact info sidebar
- `*` — 404 page

## Shared components
- `Header` (sticky, logo, nav, theme toggle, Book-a-call CTA, mobile menu)
- `Footer` (sitemap, email, social placeholders, copyright)
- `Section` + `SectionHeader` (layout primitives)
- `Terminal` (terminal-window code block with syntax colouring)
- `AgentLoop` (5-node agent loop diagram)
- `CTAStripe` (repeatable book-a-call CTA)
- `ThemeToggle` (next-themes based)

## Testing
- Frontend testing agent iteration 1: **100% (82/82) assertions passed**
- No blocking issues.

## Backlog / next actions

### P0 — before launch
- Replace every `[PLACEHOLDER]` in `src/lib/site.js` (WORK case studies,
  About team cards, contact/office city, social URLs, `SITE.bookACall`)
- Wire contact form to a real backend (Resend, SES, or a serverless
  endpoint) — currently dummy with a client-side toast

### P1 — content
- Add 1–2 real case studies with permission-cleared write-ups
- Add real team bios + headshots on `/about`
- Confirm production domain, add real OG image at `/public/og.png`

### P2 — polish / growth
- Set up Google Search Console + Plausible or GA4
- Add a case-study intake template so future projects auto-generate
  content
- Consider a lightweight `/blog` or `/notes` for SEO once first cases are live
- Optional: add a real "Book a call" cal.com/link and swap
  `SITE.bookACall`

## Environment notes
- Dev URL: `https://ai-agency-build-2.preview.emergentagent.com/`
- Build: `yarn build` (via craco). No env vars required for frontend runtime.
- Assets: `sitemap.xml` and `robots.txt` in `/app/frontend/public/`
