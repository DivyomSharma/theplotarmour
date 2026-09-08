# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Enterprise decision-makers, investors, talent, and press evaluating PlotArmour Group and its portfolio companies. Secondary: prospective hires and creative-community visitors browsing Studio, Store, and Journal. *(inferred from indexed page set — about/careers/press/contact/investor-shaped copy)*

## Product Purpose
PlotArmour Group is a venture studio / technology holding company that builds independent, category-owning infrastructure businesses (Convoke, Keystone, Verity, VEDA) plus a creative execution arm (PlotArmour Studio) and consumer storefronts (Store, Merch). The home page is the group-level hub that orients a visitor across the whole ecosystem and routes them into the right sub-site.

## Positioning
Not a holding company assembling disconnected SaaS apps under one shell — each portfolio company owns an entire industrial layer end-to-end, engineered with shared operational blueprints and design systems rather than bolted-on features. *(from existing copy in src/lib/site-data.ts)*

## Operating Context
Multi-site ecosystem: theplotarmour.xyz (group hub, this surface), studio.theplotarmour.xyz (PlotArmour Studio — creative/build execution layer, dark cinematic identity), store/merch subdomains (retail), plus per-portfolio-company external sites (Keystone live at keystoneai.co, others building). Site already has ~20 built subpages (about, companies, work, studio, careers, journal, research, blueprints, contact, team, intern, experiments, media, press, resources, community, partners, brand, design-system, docs) that the home page must link into — none of those are being rebuilt in this task, only the home landing page.

## Capabilities and Constraints
Next.js (App Router) + Tailwind + Framer Motion, custom CSS variable theme (`--bg`, `--fg`, `--surface`, `--border` tokens) in `src/app/globals.css`. Fonts already loaded via next/font: Instrument Serif, Newsreader, Inter Tight, JetBrains Mono. Current home page was a temporary "moved domains" redirect grid — explicitly rejected by the user, must be replaced with a real landing page, not a redirect notice.

## Brand Commitments
Name: "PlotArmour" (group) / "PlotArmour Group" in schema. User has explicitly directed: rebuild the home page's UI/UX as a full visual match to sibling site PlotArmour Studio (`D:\Code\plotarmour-studio`) — dark cinematic identity, same header interaction pattern, same color system and typographic feel, same motion language — and reuse Studio's logo mark and favicon assets directly (not reinvented). This is a confirmed, explicit brief, not an inferred one.

## Evidence on Hand
- `src/lib/site-data.ts` — real company roster, timeline, culture values, philosophy copy (all real, ship as-is).
- `src/lib/seo.ts` — real site name/description/keywords.
- Reference implementation: `D:\Code\plotarmour-studio` (Vite/React-Router codebase migrated into a Next app dir) — source of truth for the visual world to replicate: `src/components/HeroSection.tsx`, `src/components/site/SiteHeader.tsx`, `src/index.css` / tailwind tokens, `public/logo-mark.png`, `public/favicon.ico`, `public/banner.png`.
- No case studies, testimonials, or investor numbers on hand — none fabricated.

## Product Principles
- Group hub orients, it doesn't duplicate — deep content lives on portfolio/sub-sites; home page's job is wayfinding + credibility.
- Visual identity across the PlotArmour network is now unified under the Studio's dark, cinematic, systems-engineering aesthetic — the home page adopts it wholesale, not a lighter derivative.
- Real copy only — reuse the existing company/timeline/culture copy already written; do not invent new claims.
