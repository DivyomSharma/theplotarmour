# PlotArmour Ecosystem: UI Specification

This document defines the visual layout specifications, grid systems, typography classes, component structures, and design guidelines for the **PlotArmour Main Editorial Portal (theplotarmour)** and the **Venture Engineering Studio (plotarmour-studio)**.

---

## 1. Global Grid & Responsive Coordinate Systems

To reinforce the editorial structure and software precision, both sites employ structured, asymmetrical, and responsive grid layouts.

### A. Core Container & Margin Specifications
| Viewport | Screen Width | Grid Columns | Page Side Margins | Max Width |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop** | $\ge 1024\text{px}$ | 12 / Asymmetric | `px-16` ($64\text{px}$) (Studio) / `px-6` ($24\text{px}$) (Editorial) | `max-w-[1400px]` (Studio) / `max-w-[1200px]` (Editorial) |
| **Tablet** | $768\text{px} - 1023\text{px}$ | 8 / Asymmetric | `px-10` ($40\text{px}$) | Full / `max-w-[960px]` |
| **Mobile** | $< 768\text{px}$ | Stacked (1-2 cols) | `px-6` ($24\text{px}$) (Studio) / `px-4` ($16\text{px}$) (Editorial) | Full |

---

### B. Asymmetric Column Layout Grids
Rather than relying on symmetrical blocks, layouts use deliberate, unbalanced ratios.

```
Classic 2:1 Split (Editorial Philosophy / Sidebar Logs)
┌───────────────────────────────────────┬───────────────────────┐
│              1.6fr / 2fr              │      0.8fr / 1fr      │
│          Primary Content Area         │  Sidebar Metadata/Logs│
└───────────────────────────────────────┴───────────────────────┘

Showcase 3:5 Split (Portfolio / Visual Previews)
┌───────────────────────────┬───────────────────────────────────┐
│        1.5fr / 1.2fr      │            2.5fr / 2fr            │
│    Section Description    │    Dominant Media/Grayscale Card  │
└───────────────────────────┴───────────────────────────────────┘

Index 1:2 Split (Information Lists)
┌───────────────────┬───────────────────────────────────────────┐
│        1fr        │                    2fr                    │
│   Section Header  │             Categorized Lists             │
└───────────────────┴───────────────────────────────────────────┘
```

#### Tailwind Implementation Classes:
- **2:1 Split**: `grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-8 lg:gap-16`
- **3:5 Split**: `grid grid-cols-1 lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-20`
- **1:2 Split**: `grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12`

---

### C. Bento Grid Structure (Ecosystem Showcase & R&D Sandbox)
Bento grids are utilized to group related telemetry cards and holding information without repeating uniform sizes.

#### Bento Grid Coordinate Map (4-Column Layout Grid):
```
┌───────────────────────────────────────┬───────────────────────┐
│             Card A [0,0]              │     Card B [2,0]      │
│             (col-span-2)              │     (col-span-2)      │
├───────────────────────┬───────────────┴───────┬───────────────┤
│     Card C [0,1]      │     Card D [1,1]      │ Card E [3,1]  │
│     (col-span-1)      │     (col-span-2)      │ (col-span-1)  │
└───────────────────────┴───────────────────────┴───────────────┘
```

#### Tailwind Bento Blueprint:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Card A: Display Image + Core Metric -->
  <div class="lg:col-span-2 p-8 border border-border rounded-none bg-surface flex flex-col justify-between">
    <!-- Content -->
  </div>
  
  <!-- Card B: Telemetry Logs / List -->
  <div class="lg:col-span-2 p-8 border border-border rounded-none bg-surface">
    <!-- Content -->
  </div>

  <!-- Card C: Small Metric / Code Badge -->
  <div class="lg:col-span-1 p-6 border border-border rounded-none bg-surface">
    <!-- Content -->
  </div>

  <!-- Card D: Asymmetric Narrative Details -->
  <div class="lg:col-span-2 p-6 border border-border rounded-none bg-surface">
    <!-- Content -->
  </div>

  <!-- Card E: Active Status / Target Link -->
  <div class="lg:col-span-1 p-6 border border-border rounded-none bg-surface">
    <!-- Content -->
  </div>
</div>
```

---

## 2. Typography & Class Map

Every element must be strictly styled using one of the four corporate typography classes to maintain character contrast.

### A. Typography Hierarchy Matrix

| Font / Token | Target Weight | CSS Variable | Applied Style Class | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- |
| **Instrument Serif** | Regular (400) | `--font-display` | `font-display` | `font-display italic tracking-[-0.04em] leading-[0.92]` |
| **Newsreader** | Semibold (600) | `--font-serif` | `font-serif` | `font-serif tracking-tight leading-tight` |
| **Inter Tight** | Regular (400) / Medium (500) | `--font-sans` | `font-sans` | `font-sans antialiased tracking-normal leading-normal` |
| **JetBrains Mono** | Medium (500) | `--font-mono` | `font-mono` | `font-mono uppercase tracking-[0.2em] text-[10px]` |

### B. Precise Page Elements Typography Rules
- **Large Editorial Hero Statement (`theplotarmour`)**:
  - Class: `font-display italic text-6xl md:text-8xl tracking-[-0.045em] leading-[0.9] text-foreground`
- **Main Section Headline (`Newsreader`)**:
  - Class: `font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-none text-foreground`
- **Body / Narrative Introductions (`Newsreader Italic`)**:
  - Class: `font-serif italic text-lg md:text-xl leading-relaxed text-muted-foreground`
- **Standard UI Label / Navigation (`Inter Tight`)**:
  - Class: `font-sans text-xs md:text-sm font-medium tracking-wide text-foreground`
- **Body Copy / Paragraphs (`Inter Tight`)**:
  - Class: `font-sans text-sm md:text-base leading-relaxed text-muted-foreground`
- **Telemetry Index Label (`JetBrains Mono`)**:
  - Class: `font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground`
- **System Value / Coordinates (`JetBrains Mono`)**:
  - Class: `font-mono text-xs font-semibold text-foreground`

---

## 3. Visual Components Specification

### A. The Newspaper Masthead
The defining entry header for `theplotarmour` to ground the page in an editorial print layout.

```
====================================================================================
PLOTARMOUR GROUP · EST. 2023   | STATUS: ACTIVE |                     ISSUE NO. 001
====================================================================================
```

- **Markup Structure**:
  ```html
  <header class="w-full border-y border-border py-4 my-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-center font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
      <div class="flex-1 text-left uppercase">PlotArmour Group &middot; Est. 2023</div>
      <div class="flex-1 text-center uppercase font-semibold text-foreground">Status: Active</div>
      <div class="flex-1 text-right uppercase">Issue No. 001</div>
    </div>
  </header>
  ```

---

### B. Floating Studio Pill Header
The floating navigation container for `plotarmour-studio` using dark glassmorphism.

- **Specs**:
  - Backdrop: `backdrop-blur-xl bg-black/60`
  - Border: `1px border-white/[0.08]`
  - Corners: `rounded-full`
  - Dimensions: `height: 48px`
  - Interactive Hover: Anchor items transition color via `transition-colors duration-150 ease-out`. The active item displays a minimal white horizontal bar or a background alpha shift (`bg-white/[0.04]`).

---

### C. Card Structures
All panels and surfaces follow strict rules. No shadows are allowed; depth is achieved via hairline borders.

```
+-------------------------------------------------+
| IMAGE (aspect-[16:10] / grayscale)              |
+-------------------------------------------------+
| CATEGORY / METADATA                    [STATUS] |
|                                                 |
| Title (font-serif, text-xl)                     |
| Description (font-sans, text-sm)                |
+-------------------------------------------------+
```

- **Corner Radiuses**:
  - **theplotarmour (Editorial)**: `rounded-none` (strictly square corners for print feel).
  - **plotarmour-studio (Studio)**: `rounded-none` or `rounded-sm` ($2\text{px}$ to $4\text{px}$ max for clean technical cards).
- **Hairlines**:
  - Light mode: `border border-black/[0.08]`
  - Dark mode: `border border-white/[0.08]`
- **Interactive State**:
  - On hover: Scale up by `scale-[1.01]`, transition border color to `border-black/[0.16]` (light) / `border-white/[0.16]` (dark). No shadow change.

---

### D. Timelines & Steppers
- **Asymmetric Timeline**:
  - Layout: `grid grid-cols-[100px_1px_1fr] gap-6` (or `lg:grid-cols-[150px_1px_1fr]`).
  - Left column: Monospaced year/date (`font-mono text-xs tracking-widest text-muted-foreground`).
  - Center column: Vertical baseline rule (`w-[1px] bg-border`) with a centered small solid monochrome dot at intersections.
  - Right column: Detail container (`font-serif` title and `font-sans` description).
- **Venture Pipeline Stepper (Studio)**:
  - An interactive horizontal selector of 7 stages.
  - Active Stage: Minimal high-contrast gray border (`border-white/40`) and solid status indicator.
  - Transition: Clicking updates the right telemetry panel with a subtle translate-up fade (`y: 12px`, `duration: 0.58s`, `cubic-bezier(0.22, 1, 0.36, 1)`).

---

### E. Infographics & Telemetry Mocks
Used to represent R&D metrics and pipelines without visual clutter.

#### Telemetry Status Panel Mock:
```
+-------------------------------------------------------+
| SYSTEM TELEMETRY INDEX [SYS-08]           REF: VEDA   |
+-------------------------------------------------------+
| ENGINE CORE: ACTIVE (98.4%)           [●] STATE: STABLE|
| RAM USAGE: 12.4 GB / 32 GB            CORE TEMP: 42°C |
| BUILD VERSION: 4.81.2-ALPHA           PING: 14ms      |
+-------------------------------------------------------+
```

---

## 4. Representing PlotArmour Holding Companies

Holding companies (e.g. Keystone, Verity, VEDA, Convoke) must be represented with absolute structural consistency.

### A. Holding Showcase Card Specification
Each card consists of:
1.  **Cover Image**: Strictly grayscale, locked to `aspect-[16:10]`, with a bottom hairline border.
2.  **Metadata Ribbon**:
    - Left: Category Tag (`font-mono text-[9px] tracking-wider text-muted-foreground`).
    - Right: Status Badge (e.g., `ACTIVE`, `SPINOUT`, `IN DEVELOPMENT`) in `font-mono text-[9px]`.
3.  **Content Section**:
    - Title: `Newsreader` (`text-xl font-medium`).
    - Mission / Description: `Inter Tight` (`text-sm text-muted-foreground`).
4.  **Telemetry Data Line**: A monospaced bottom line containing:
    - `BP-CODE` (Blueprint Reference)
    - `DEPLOYED TIMESTAMP` (e.g., `2026.07.15-12.04`)
    - `LOC` (e.g., `US-EAST-1`)

#### Tailwind Blueprint:
```html
<div class="group border border-border bg-surface rounded-none overflow-hidden hover:border-border-hover transition-colors duration-150">
  <!-- Grayscale Image Container -->
  <div class="aspect-[16:10] overflow-hidden grayscale contrast-[1.1] border-b border-border">
    <img src="/holdings/keystone.jpg" alt="Keystone Cover" class="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300" />
  </div>
  
  <!-- Content Padding -->
  <div class="p-6 flex flex-col gap-4">
    <!-- Ribbon -->
    <div class="flex justify-between items-center text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
      <span>01 / INFRASTRUCTURE</span>
      <span class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        ACTIVE
      </span>
    </div>

    <!-- Title & Description -->
    <div>
      <h3 class="font-serif text-xl font-semibold mb-2 text-foreground">Keystone</h3>
      <p class="font-sans text-sm text-muted-foreground leading-relaxed">
        Autonomous logistics execution framework for distributed physical delivery networks.
      </p>
    </div>

    <!-- Coordinates / Telemetry Footer -->
    <div class="border-t border-border pt-4 mt-2 flex justify-between items-center font-mono text-[9px] tracking-wider text-muted-foreground">
      <span>BP-KEY-04</span>
      <span>2026.05.12-14:32</span>
      <span>US-EAST-1</span>
    </div>
  </div>
</div>
```

---

## 5. Studio R&D Telemetry & Sandbox Sections

The `plotarmour-studio` R&D telemetry sections present active engineering sprints and live status feeds.

### A. Status Indicator Standard (Active Lights)
- **Active / Stable**: Solid Emerald Green (`bg-emerald-500` / `#10b981`), no shadow or glow.
- **Warning / Updating**: Solid Amber/Orange (`bg-amber-500` / `#f59e0b`).
- **Inactive / Experimental**: Solid Slate Blue (`bg-slate-400` / `#94a3b8`).
- **Failure / Critical**: Solid Rose Red (`bg-rose-600` / `#e11d48`).

---

### B. Sandbox Telemetry Layout Grid (Desktop)
An asymmetric 3-column split details the active experimental sandbox.
- **Left Column (1fr)**: Live System Status Logs (auto-scrolling console output mock, styled in JetBrains Mono).
- **Middle Column (2fr)**: Grayscale schematic or interactive asset previews.
- **Right Column (1fr)**: Technical specifications and version details.

```
┌────────────────────────┬────────────────────────────────────────┬────────────────────────┐
│  Console Logs (1fr)    │      Schematic / Interactive (2fr)     │   Spec Index (1fr)     │
│  - SYSTEM: INITIALIZED │                                        │  MODEL: VERA-09        │
│  - PORT: 8080 CONNECTED│       [ Grayscale Hardware Render ]    │  STABILITY: 99.4%      │
│  - CORE TEMP: 38.2 C   │                                        │  RUNTIME: 1248H        │
└────────────────────────┴────────────────────────────────────────┴────────────────────────┘
```

#### Tailwind Classes for Sandbox Grid:
`grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] border border-border rounded-none divide-y lg:divide-y-0 lg:divide-x divide-border bg-surface`

---

### C. Live Telemetry Data Stream Mockup
```html
<div class="p-6 font-mono text-xs bg-black text-muted-foreground border-t border-border">
  <div class="flex items-center justify-between mb-4 border-b border-border pb-2 text-[10px] tracking-widest uppercase">
    <span>SYSTEM TELEMETRY FEED</span>
    <span class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      LIVE CONNECTION
    </span>
  </div>
  <div class="space-y-1 text-[11px] leading-relaxed">
    <p><span class="text-emerald-500">[14:32:05]</span> CLI-INIT: Loading agent core configurations...</p>
    <p><span class="text-emerald-500">[14:32:06]</span> CORE-NET: Est. Handshake on port 5892 (Secure TLS 1.3)</p>
    <p><span class="text-amber-500">[14:32:07]</span> WARN: Latency drift detected (42ms) -> Recalibrating coordinates</p>
    <p><span class="text-emerald-500">[14:32:08]</span> SYS-OK: Coordinates synced at offset [X: -42.8, Y: 110.2]</p>
  </div>
</div>
```
