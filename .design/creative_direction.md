# Creative Direction Spec

## 1. Aesthetic Foundations & Benchmarks
This document sets the definitive visual style and creative direction for **theplotarmour** (editorial/holding group) and **plotarmour-studio** (creative game-engineering studio). Our brand visual identity represents the intersection of **raw editorial classicism** and **high-precision technical engineering**. 

We reject the colorful, animated, overly friendly "SaaS" aesthetics in favor of a restrained, intellectual, and high-contrast monochrome layout system.

### Benchmark Alignments
*   **The New York Times (NYT)**: Defines the layout rhythm, serif-dominant hierarchy, newspaper mastheads, and informational density.
*   **Read.cv**: Guides the quiet, elegant typography, minimal layouts, and high-quality monochromatic structure.
*   **Luma**: Informs the premium dark mode card surfaces, clean structural blocks, and generous whitespace.
*   **Resend**: Informs the technical utility, hairline borders (1px HSL borders), monospaced metadata grids, and zero-fuzz details.

---

## 2. Definitive Visual Styles

### Color & Contrast Modes
*   **theplotarmour (Editorial Portal)**:
    *   **Responsive Dual-Mode**: Respects `prefers-color-scheme`.
    *   **Palette**: Pure `#ffffff` (light background) / `#000000` (dark background) with secondary elements using HSL grey values or transparent opacity limits (e.g., `rgba(0,0,0,0.08)` borders).
*   **plotarmour-studio (Engineering Studio)**:
    *   **Pure Dark Mode**: `#000000` background only.
    *   **Surfaces**: Deep charcoal/slate surfaces (`#0a0a0a`) and hairline structures (`#1a1a1a`).
    *   **Interactive Ring/Focus**: High-contrast light gray (`#cccccc` or `hsl(0 0% 80%)`).

### Typography Stack
Every typographic element is mapped to one of these four fonts:
1.  **Instrument Serif (`--font-display`)**: Used exclusively for large, emotive editorial display headers (typically `italic`, tracking `tracking-[-0.04em]` and extremely tight leading `leading-[0.9]`).
2.  **Newsreader (`--font-serif`)**: Used for page/section headers, narrative introductions, and feature titles. It conveys prestige and journalistic authority.
3.  **Inter Tight (`--font-sans`)**: Used for UI copy, general navigation, forms, button text, and main body copy. Set with clean tracking to avoid compression.
4.  **JetBrains Mono (`--font-mono`)**: Used for dates, metadata labels, status tags, issue coordinates, and system logs. Typically rendered in uppercase with generous tracking (`tracking-[0.2em]` to `tracking-[0.4em]`).

---

## 3. Approved Design Components & Layouts

### A. The Newspaper Masthead
The top of major entry views must establish an immediate editorial tone.
*   **Structure**: Centered branding typography (`Newsreader` or `Instrument Serif`) flanked by dual hairline rules.
*   **Metadata Row**: A monospaced row beneath the rules containing:
    *   `ISSUE NO. [X]` (Left-aligned)
    *   `LAST DEPLOYED [TIMESTAMP]` or `STATUS: ACTIVE` (Centered)
    *   `DATE OF ISSUE` (Right-aligned)
*   **Bordering**: Strict `1px` top and bottom borders (`var(--border)`).

### B. Asymmetric Column Layouts
Avoid boring, symmetric grids. Layouts must use unbalanced columns to create editorial interest:
*   **The 2:1 Split (`grid-cols-[1.6fr_0.8fr]` or `grid-cols-[2fr_1fr]`)**: Left side holds dominant text/body copy; right side features small sidebar telemetry, metadata, or timeline logs.
*   **The 3:5 Showcase (`grid-cols-[1.5fr_2.5fr]`)**: Left side defines the section parameters in tight mono/sans typography; right side houses the primary high-contrast media container.
*   **The 1:2 Index Split (`grid-cols-[1fr_2fr]`)**: Left side shows high-contrast section names; right side displays clean descriptions.

### C. Layout Elements & Rhythm
*   **Hairline Borders**: Content separation must be achieved using `1px border-t`, `border-b`, or `border-l` configurations (`var(--border)`) rather than shadows or background steps.
*   **Pull Quotes**: High-impact italic quotes utilizing `Instrument Serif` (`text-4xl` to `text-6xl`) centered or left-aligned within standard copy blocks.
*   **Grayscale Image Containers**: Media must be strictly grayscale, styled with a thin hairline border and set to native aspect ratios (`16:10` for cards, `21:9` for large section banners).
*   **Telemetry Logs**: High-density monospaced data fields showing system status or coordinates to give a raw, engineering-focused look.

---

## 4. Interaction & Motion Guidelines

Motion must support focus and legibility, never distract.
*   **Entrance Reveal**: Elements should fade in and translate upward slightly (`y: 12px` or `y: 16px` max, never `y: 40px` or larger). Easing curve: `cubic-bezier(0.22, 1, 0.36, 1)` over `0.58s`.
*   **Hover States**:
    *   **Buttons/Links**: Clean transitions (`duration-150 ease-out`). Color shift or underline slide.
    *   **Cards**: Minimal scale shifts (`scale: 1.01` max) with a smooth transition of the border color to `var(--border-hover)`. Zero glow, zero heavy shadow transitions.
*   **Cursor Physics**: Optional custom spring-trailing cursor configuration for studio/editorial pages:
    *   **Outer Ring**: Elastic, delayed tracking (`stiffness: 280`, `damping: 28`, `mass: 0.35`).
    *   **Dot**: Snappy, centered (`stiffness: 520`, `damping: 32`, `mass: 0.4`).

---

## 5. Rejection Criteria (Strict Rules)

Any design implementing the following features must be **REJECTED**:
1.  **Box Shadows**: No drop shadows, fuzzy elevation levels, or card glow effects. Elevation is shown via hairline borders and flat surface changes.
2.  **Color Gradients / Neon Highlights**: Absolutely no neon highlights (cyan, purple, pink), background radial gradients, or multi-color gradients. Color must be monochrome (black, white, grays). Accent indicators (e.g., active green dot) must be minimal, solid, and functional.
3.  **Uniform Repeating Cards**: Never layout grid elements in repetitive rows of identical cards. Break monotony using timelines, pull-quotes, or full-bleed grayscale imagery.
4.  **Bouncy, Cluttered Animations**: No elastic bounce reveals, slide-ins from off-screen margins, or heavy scroll parallax.
5.  **Cluttered / Compressed Spacing**: No vertical compression. Let sections breathe with generous padding: standard page gaps must remain between `140px` and `200px` (`py-32` to `py-48`).
6.  **Generic SaaS Marketing Copy & CTAs**: No rounded pill buttons like "Get Started for Free" or "Start Free Trial." Buttons should be rects, labeled cleanly and with technical or direct language (e.g., `ENTER SITE`, `DOCUMENTATION`, `INDEX`).
