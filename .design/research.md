# PlotArmour Design System & Tokens Spec

This document details the unified visual language and design tokens shared between **theplotarmour** (holding group / editorial node) and **plotarmour-studio** (creative game-engineering studio).

---

## 1. Typography Stack

The typography stack pairs raw editorial classicism with technical precision. It utilizes four distinct typefaces linked via CSS variables:

### Typeface Definitions

| Token / CSS Variable | Font Family | Ideal Weight | Style / Optical Size | Typical Application |
| :--- | :--- | :--- | :--- | :--- |
| `--font-display` | **Instrument Serif** | Regular (400) / Bold (700) | *Italic* | High-impact editorial statements, pull quotes, custom large page headers. |
| `--font-serif` | **Newsreader** | Bold (700) / Semibold (600) | Roman & *Italic* | Primary editorial headings, section titles, sub-headers, article copy. |
| `--font-sans` / `--font-body` | **Inter Tight** | Regular (400) / Medium (500) | Roman | General body copy, navigation links, UI controls, operational data labels. |
| `--font-mono` | **JetBrains Mono** | Regular (400) / Medium (500) | Roman | Blueprint numbers, system telemetry, technical timestamps, uppercase tags. |

### Font Stack Pairings & Settings

#### A. The Editorial Display Header (Instrument Serif)
Used for large, emotive statements with tight vertical lines.
- **Tailwind Class**: `font-display`
- **Typical Size**: `text-4xl` (36px) up to `text-[6.6rem]` (approx 105px)
- **Leading**: `leading-[0.9]` to `leading-[0.94]` (extremely tight to collapse baseline overlap)
- **Tracking**: `tracking-[-0.04em]` to `tracking-[-0.045em]` (negative tracking for condensed word spacing)
- **Style**: Commonly `italic`

#### B. The Page/Section Header (Newsreader)
Classical editorial framing for normal headers.
- **Tailwind Class**: `font-serif`
- **Typical Size**: `text-[clamp(2.5rem,7vw,4.5rem)]` (fluid responsive scale)
- **Leading**: `leading-tight` (~`1.05` to `1.15`)
- **Tracking**: `tracking-tight`

#### C. The Body Copy & UI Label (Inter Tight)
Highly legible, neutral modern text.
- **Tailwind Class**: `font-sans` / `font-body`
- **Typical Size**: `text-sm` (14px) / `text-base` (16px) / `text-lg` (18px)
- **Leading**: `leading-relaxed` (`1.6` for paragraphs) / `leading-none` (for button tags)

#### D. The Telemetry Label (JetBrains Mono)
Small, monospaced metadata and tags.
- **Tailwind Class**: `font-mono`
- **Typical Size**: `text-[9px]`, `text-[10px]` or `text-xs` (12px)
- **Letter Spacing**: `tracking-[0.2em]` to `tracking-[0.4em]` (wide letter-spacing for scannability)

---

## 2. Spacing Scale

The layout adheres to a strict 4px/8px baseline grid, defined below from **8px to 192px**:

| Pixel Value | Rem Equivalent | Tailwind Class (Spacing) | Usage Context |
| :--- | :--- | :--- | :--- |
| **8px** | `0.5rem` | `2` (`gap-2`, `p-2`) | Close micro-element spacing, tag icons, status indicators. |
| **12px** | `0.75rem` | `3` (`gap-3`, `p-3`) | Dense UI lists, metadata details. |
| **16px** | `1.0rem` | `4` (`gap-4`, `p-4`) | Standard grid gutters (mobile), small card paddings. |
| **20px** | `1.25rem` | `5` (`gap-5`, `p-5`) | Sub-elements group spacing, border margins. |
| **24px** | `1.5rem` | `6` (`gap-6`, `p-6`) | Grid gaps (desktop), standard card interior padding. |
| **28px** | `1.75rem` | `7` (`gap-7`, `p-7`) | Medium panel padding (mobile). |
| **32px** | `2.0rem` | `8` (`gap-8`, `p-8`) | Standard card padding (desktop), grid gap elements. |
| **40px** | `2.5rem` | `10` (`gap-10`, `p-10`) | Inner panel grouping, standard element offsets. |
| **48px** | `3.0rem` | `12` (`gap-12`, `p-12`) | Outer grid sections, card grid spacing. |
| **56px** | `3.5rem` | `14` (`gap-14`, `p-14`) | Medium section vertical pads, header gaps. |
| **64px** | `4.0rem` | `16` (`gap-16`, `p-16`) | Asymmetric column grids gutter, page title top paddings. |
| **72px** | `4.5rem` | `18` (`gap-18`, `p-18`) | Section padding block (mobile). |
| **80px** | `5.0rem` | `20` (`gap-20`, `p-20`) | Asymmetric outer layouts gutter (medium). |
| **96px** | `6.0rem` | `24` (`gap-24`, `p-24`) | Standard page section padding (mobile/desktop). |
| **112px** | `7.0rem` | `28` (`gap-28`, `p-28`) | Large hero layouts offsets. |
| **128px** | `8.0rem` | `32` (`gap-32`, `p-32`) | Standard page hero top padding, large section vertical paddings. |
| **144px** | `9.0rem` | `36` (`gap-36`, `p-36`) | High-impact section margins. |
| **160px** | `10.0rem` | `40` (`gap-40`, `p-40`) | Desktop section vertical padding (`md:py-40`). |
| **176px** | `11.0rem` | `44` (`gap-44`, `p-44`) | Large landing scene vertical padding (`md:py-44`). |
| **192px** | `12.0rem` | `48` (`gap-48`, `p-48`) | Extreme editorial hero section offsets. |

---

## 3. Spacing Gaps & Contexts

### Hero Tops / Page Header Paddings
- **Studio Pages** (venturing, team, design system): `pt-32 pb-20` (128px top, 80px bottom) to clear floating navigation.
- **Editorial Pages** (theplotarmour): `py-16 lg:py-24` (64px to 96px).

### Section Margins
- **Studio Landing Sections**: `py-32 md:py-40` (128px to 160px) to give 3D Canvas scenes spatial breathing room.
- **Specialized / Alternate Sections**: `py-24 md:py-32 lg:py-40` (96px -> 128px -> 160px).
- **Editorial Sections**:
  - Standard Section: `padding-block: 6rem` (96px) on desktop, `4.5rem` (72px) on mobile.
  - Slim Section: `padding-block: 3.5rem` (56px) on desktop, `2rem` (32px) on mobile.

### Card & Panel Paddings
- **Standard UI Cards**: `p-4` (16px) or `p-5` (20px).
- **Premium Studio Panels**: `p-7 md:p-8` (28px to 32px) combined with glassmorphism backdrops (`backdrop-blur-xl bg-white/[0.05]`).
- **Editorial Cards**: `p-6` (24px) with subtle grid bounds.

### Grid Gutters
- **Data/Dense Grids**: `gap-3` (12px) to `gap-4` (16px).
- **Component / Card Grids**: `gap-6 lg:gap-8` (24px to 32px) on multi-column cards.
- **Hero & Split-Feature Grids**: `gap-12 lg:gap-20` (48px to 80px) and `gap-16 lg:gap-24` (64px to 96px) to isolate primary concepts.

---

## 4. Layout Column Grids, Margins, and Ratios

### Container Bounds & Side Margins
- **Standard Layout width**: `max-w-[1200px]` (editorial) or `max-w-[1400px]` (wide studio/editorial).
- **Side Margins**:
  - `plotarmour-studio`: `px-6 md:px-10 lg:px-16` (24px mobile, 40px tablet, 64px desktop margin).
  - `theplotarmour`: `width: min(1200px, calc(100vw - 3rem))` (leaves 24px margins on each side) scaling to `width: calc(100vw - 2rem)` on mobile (leaves 16px margins on each side).

### Editorial Column Grid Ratios
Layout designs intentionally break symmetric column structures in favor of editorial hierarchy.

```
Symmetric Columns: |   25%   |   25%   |   25%   |   25%   |
Asymmetric 2:1:    |        66.6% (1.6fr)        | 33.3% (0.8fr) |
Asymmetric 3:5:    |     37.5% (1.5fr)     |      62.5% (2.5fr)     |
Asymmetric 1:2:    |   33.3% (1fr)   |        66.6% (2fr)        |
```

- **Classic 2:1 Ratio** (`grid-cols-[1.6fr_0.8fr]` or `grid-cols-[2fr_1fr]`):
  Used for primary text columns paired with sidebar metadata, sub-sections, or callouts.
- **IP / Portfolio 3:5 Ratio** (`grid-cols-[1.5fr_2.5fr]` or `grid-cols-[1.2fr_2fr]`):
  Used on landing pages to align compact category details (left) against dominant visual assets or previews (right).
- **Split 1:2 Ratio** (`grid-cols-[1fr_2fr]`):
  Used for detail view index splits, aligning titles (left) against description body copy (right).
- **Fixed Sidebar Split** (`grid-cols-[minmax(0,1fr)_320px]`):
  Used in application dashboard views to isolate scrollable workflows (left) from fixed tool configurations (right).

---

## 5. Motion Easings & Duration References

Transitions utilize cubic easings that mimic physical momentum (rapid acceleration followed by soft, prolonged deceleration).

### Animation Timing Variables

| Timing Name | Easing Curve (CSS Bezier) | Default Duration | Visual Intent |
| :--- | :--- | :--- | :--- |
| **Page Exit/Entrance** | `cubic-bezier(0.22, 1, 0.36, 1)` | `0.58s` | **easeOutQuint**: Standard page transitions. Softly pulls content forward with subtle blur fade. |
| **Component Reveal** | `cubic-bezier(0.16, 1, 0.3, 1)` | `0.80s` | **easeOutQuart**: Dramatic entrance of large panels, text headers, or group sections on scroll. |
| **Micro-Interactions** | `ease-out` or `ease-in-out` | `0.15s` - `0.30s` | Hover states, tab switching, button click scale shrinks (`active:scale-98`). |

### Page Transition Shell Sequence (Framer Motion)
```javascript
initial: { opacity: 0, y: 24, filter: "blur(10px)" }
animate: { opacity: 1, y: 0, filter: "blur(0px)" }
exit:    { opacity: 0, y: -18, filter: "blur(8px)" }
transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
```

### Spring-based Cursor Physics
Cursors use responsive spring parameters to represent elastic trailing motion:
- **Cursor Outer Wrapper**:
  - `stiffness: 320`, `damping: 30`, `mass: 0.7` (Editorial)
  - `stiffness: 280`, `damping: 28`, `mass: 0.35` (Studio)
- **Cursor Central Dot**:
  - `stiffness: 520`, `damping: 32`, `mass: 0.4`

### Pure CSS Animations (Tailwind Classes)
- **Accordion Drop**: `accordion-down 0.2s ease-out` / `accordion-up 0.2s ease-out`
- **Idle Floating**: `float 6s ease-in-out infinite` (slow translateY wave: -20px offset)
- **Entrance Slide Up**: `slide-up 1s ease-out forwards` (y: 100px to 0)
- **Header Line Slide**: `line-slide 0.6s ease-out forwards` (origin-left X scale from 0 to 1)

---

## 6. Color Systems & Contrast Modes

### Editorial Colors (`theplotarmour`)
Dual-mode responsive variables (`prefers-color-scheme`).

| Name | Light Mode Hex | Dark Mode Hex | Variable Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#ffffff` | `#000000` | `var(--bg)` |
| **Foreground** | `#111111` | `#f5f5f7` | `var(--fg)` |
| **Muted Text** | `#666666` | `#86868b` | `var(--fg-muted)` |
| **Subtle Text** | `#8e8e93` | `#48484a` | `var(--fg-subtle)` |
| **Borders** | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | `var(--border)` |
| **Hover Borders** | `rgba(0,0,0,0.16)` | `rgba(255,255,255,0.16)` | `var(--border-hover)` |
| **Surface** | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.03)` | `var(--surface)` |

### Studio Colors (`plotarmour-studio`)
Pure dark mode configuration (Apple-style dark gray surfaces over pure black).
- **Background**: `#000000` (`hsl(0 0% 0%)`)
- **Card/Popover Surface**: `#0a0a0a` (`hsl(0 0% 4%)`)
- **Secondary / Borders**: `#1a1a1a` (`hsl(0 0% 10%)` / `hsl(0 0% 15%)`)
- **Interactive Ring**: `#cccccc` (`hsl(0 0% 80%)`)
- **Greyscale Palette**:
  - Grey 100: `hsl(0 0% 90%)` (#e6e6e6)
  - Grey 500: `hsl(0 0% 50%)` (#808080)
  - Grey 800: `hsl(0 0% 20%)` (#333333)
  - Grey 900: `hsl(0 0% 10%)` (#1a1a1a)
