# Design QA Audit: theplotarmour

This document presents a Design QA audit of the front-end implementation in `theplotarmour` repository. It outlines layout rhythm violations, typography/wrapping issues, contrast failures, and responsive layout bugs.

---

## 1. Contrast Systems & Theme Clashing

### Severe Light-Mode Contrast and Border Clashes
* **Location**: `<main>` tags in `src/app/about/page.tsx`, `src/app/careers/page.tsx`, `src/app/contact/page.tsx`, `src/app/journal/page.tsx`, and `src/app/studio/page.tsx`.
* **Issue**: These pages hardcode `<main className="bg-black text-white">`, forcing dark mode inside the page body. However, the outer `SiteHeader` and `SiteFooter` elements use system-aware CSS theme variables (e.g., `bg-[var(--bg)]` and `text-[var(--fg)]`).
* **Resulting Bugs**:
  * **Brutal Layout Break**: Under system Light Mode, a user sees a white header, a pitch-black main content block, and a white footer. This breaks editorial rhythm and visual continuity.
  * **Low-Contrast Text**: Text styled with `text-[var(--fg-muted)]` inside the hardcoded dark main container resolves to Light Mode's muted grey (`#666666`), yielding a contrast ratio of **~2.9:1** against the black background. This fails the WCAG 2.1 AA accessibility guidelines (minimum 4.5:1 ratio).
  * **Invisible Cards & Borders**: Borders styled with `border-[var(--border)]` or dividers styled with `divide-[var(--border)]` resolve to Light Mode's translucent black (`rgba(0, 0, 0, 0.08)`). On a black background, these borders are entirely invisible, causing cards and lists to bleed into the background without structure.

---

## 2. Spacing Scales & Layout Rhythm

### Non-Responsive Hairline Margins
* **Location**: Homepage (`src/components/home-page.tsx`), About, Careers, Contact, Studio, and Work views.
* **Issue**: Content sections are separated by `<div className="my-36 hairline" />`.
* **Resulting Bugs**:
  * **Desktop Gap Over-Scaling**: `my-36` applies a vertical margin of `9rem` (144px) top and bottom. On a 1px spacer, this results in a massive **288px gap** of empty space between adjacent sections, causing disjointed scrolling on desktop.
  * **Mobile Rhythm Collapse**: Because this spacing is static and lacks responsive modifiers (e.g., `my-16 md:my-36`), it keeps the full 144px margins on mobile screens. Users are forced to scroll through long stretches of empty screen space just to cross a division line.

---

## 3. Typography, Text Wrapping & Navigation

### Unrestricted Header wrapping on Small Screens
* **Location**: `src/components/site-header.tsx`
* **Issue**: The site header navigation lists 11 links in a flex-wrap container (`className="flex flex-wrap items-center gap-x-5 gap-y-2"`) without a responsive hamburger menu or navigation drawer.
* **Resulting Bugs**: On tablet and mobile viewports, the 11 text links wrap onto multiple chaotic rows. This causes cumulative layout shifts (CLS), increases header height, and crowds the screen.

### Hardcoded Typography Inline Styles
* **Location**: `src/app/studio/page.tsx:L34`
* **Issue**: The label `<p className="label mb-6" style={{ color: "#7c3aed" }}>` uses a hardcoded, inline style.
* **Resulting Bugs**: Hardcoding inline Hex values bypasses the centralized `@theme` CSS variable system, creating maintenance overhead and style deviations.

---

## 4. Brand & Email Discrepancy

### Inconsistent Recruitment Branding
* **Location**: `src/components/site-footer.tsx` vs `plotarmour-studio`
* **Issue**: The footer on the main site references inquiries at `careers@theplotarmour.xyz`. However, the Studio repository's team/career pages direct applicants to `career.theplotarmour@gmail.com`. This discrepancy breaks official brand trust.
