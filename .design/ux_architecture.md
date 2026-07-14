# PlotArmour Ecosystem: UX Architecture & Layout Spec

This document details the unified UX Architecture, site maps, content hierarchy, navigation models, user journeys, and component inventories for both the **Main Editorial Portal (theplotarmour)** and the **Venture Engineering Studio (plotarmour-studio)**. 

---

## 1. System Roles & Architecture Philosophy

The PlotArmour digital ecosystem operates as a dual-portal structure. Both portals share a unified typography, spacing, and motion core, but serve different business functions and exhibit distinct visual tones.

```
                  ┌──────────────────────────────┐
                  │      PLOTARMOUR GROUP        │
                  │   Parent Brand & Holding     │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┴───────────────────────┐
         ▼                                               ▼
┌──────────────────────────────┐                ┌──────────────────────────────┐
│       theplotarmour          │                │      plotarmour-studio       │
│   Main Editorial Portal      │                │   Venture & Engineering Lab  │
├──────────────────────────────┤                ├──────────────────────────────┤
│ - Dual-Mode Responsive       │                │ - Pure Dark Mode (#000000)   │
│ - Classic Newspaper Rhythm   │                │ - High-Precision Telemetry   │
│ - High Information Density   │                │ - Interactive 3D Canvas R&D  │
│ - Holding Directory & Policy │                │ - Pipeline & Toolbox Specs   │
└──────────────────────────────┘                └──────────────────────────────┘
```

---

## 2. theplotarmour (Main Editorial Portal)

The main site is the architectural parent layer. It functions like an editorial journal or newspaper, establishing authority, communicating institutional scale, and routing traffic to active verticals.

### A. Site Map & Content Hierarchy
The main portal is structured as a multi-tier hierarchy focusing on high-level specs, company indexes, and long-form research.

*   **/** (Homepage) — The introductory essay, core positioning, holdings portfolio overview, timeline, and key vertical entry nodes.
*   **/about** (Our Operating Model) — Detailed breakdown of the PlotArmour organizational system, in-house capabilities, and shared execution framework.
*   **/companies** (Holdings Directory) — The comprehensive registry of active and in-development holdings, tracking vertical categories, status badges, and technical specs.
*   **/research** (Specs & Papers) — Shared knowledgebase housing regulatory briefs, engineering papers, and industry analyses.
*   **/team** (Group Directory) — Personnel rosters, operational leadership index, and functional squads.
*   **/careers** (Open Positions) — Application framework for systems builders, detailing culture criteria and open roles.
*   **/contact** (Institutional Inquiries) — Direct routing forms for partnership, investment, or legal inquiries.
*   **/design-system** — Static reference page outlining visual tokens and components (primarily for transparency).

### B. Navigation & Masthead Architecture
The navigation mimics a print masthead combined with high-precision digital controls.

1.  **Newspaper Masthead**:
    *   Positioned directly at the top of primary pages, flanked by dual 1px hairline rules.
    *   Left side: `PLOTARMOUR GROUP · EST. 2023`
    *   Center: `THE ORCHESTRATION OF SYSTEM INFRASTRUCTURE` or `STATUS: ACTIVE`
    *   Right side: `ISSUE NO. 001` or active issue numbers.
    *   Applied strictly using monospace `JetBrains Mono` at `text-[10px]` with `tracking-[0.2em]`.
2.  **Frosted Header Bar**:
    *   A sticky or floating navigation bar that provides pathing across the site.
    *   Uses a frosted, semi-transparent backdrop (`backdrop-blur-xl bg-white/[0.05]` or `bg-black/60`).
    *   Features an animated sliding pill indicating the current active route, transitioning smoothly via `ease-out`.

### C. Homepage Layout Flow & Section Ordering
The landing page flows through a strict narrative rhythm designed to introduce, validate, and convert.

```
┌────────────────────────────────────────────────────────┐
│ 1. Hero & Masthead (Typographic Statement, 21:9 image)  │
├────────────────────────────────────────────────────────┤
│ 2. Editorial Story (manifesto copy, asymmetric split)  │
├────────────────────────────────────────────────────────┤
│ 3. Companies / Holdings (Portfolio showcase cards)    │
├────────────────────────────────────────────────────────┤
│ 4. Timeline (Historical & operational milestones)       │
├────────────────────────────────────────────────────────┤
│ 5. Culture (Core grid layout values)                  │
├────────────────────────────────────────────────────────┤
│ 6. CTA & Careers (Institutional action block)          │
└────────────────────────────────────────────────────────┘
```

1.  **Hero / Entrance View**:
    *   Newspaper masthead metadata row.
    *   Large display heading in `Newsreader` (`text-[clamp(3rem,8vw,6.5rem)]`) establishing positioning.
    *   Full-bleed 21:9 grayscale architectural image with 1px borders.
    *   Asymmetric column split (1.6fr vs 0.8fr) outlining the holding company model.
2.  **Editorial Story & Manifesto**:
    *   A 2-column layout (Philosophy) explaining structural operational engineering.
    *   Features a large pull quote in `Instrument Serif Italic` flanked by absolute quotes.
3.  **Companies Showcase**:
    *   A multi-column grid of holding cards. Each card displays an aspect-ratio-locked grayscale image, status badge, category tag, mission statement, and specs route.
4.  **Timeline**:
    *   An asymmetric list mapping years to operational milestones. Uses large italic display numbers.
5.  **Culture Grid**:
    *   4-column grid defining the principles of building systems (e.g. Autonomy, Precision).
6.  **Careers CTA**:
    *   A centered card block prompting systems builders to apply. Features a large serif display header and clean rectangular buttons.

### D. User Journeys (Main Portal)

#### Journey A: The Institutional Partner / Investor
*   **Goal**: Assess the seriousness, scale, and operational scope of PlotArmour.
*   **Path**:
    1.  Land on Homepage → Absorb high-end editorial tone & masthead.
    2.  Scroll to **Companies Showcase** → Scan range of holdings (AI, games, infrastructure).
    3.  Click `/companies` → Deep-dive into technical specs and check live URLs.
    4.  Navigate to `/about` → Verify in-house execution, distribution, and engineering capabilities.
    5.  Navigate to `/contact` → Submit a professional inquiry.

#### Journey B: The Talent / Systems Builder
*   **Goal**: Understand corporate culture, research focus, and apply.
*   **Path**:
    1.  Land on Homepage → Scroll to **Editorial Story** & **Culture Grid**.
    2.  Navigate to `/research` → Read published engineering briefs to verify technical rigor.
    3.  Navigate to `/careers` → Review culture requirements and open positions.
    4.  Click `/careers` CTA → Open and complete the application interface.

### E. Component Inventory (Main Portal)
*   **`NewspaperMasthead`**: Typographic row, top/bottom `1px` borders, monospaced metadata columns.
*   **`SiteHeader`**: Floating, frosted navigation shell, sliding active route indicator.
*   **`AsymmetricSplit`**: Modular grid configuration (`lg:grid-cols-[1.6fr_0.8fr]` or `lg:grid-cols-2`) for editorial balancing.
*   **`PullQuote`**: High-impact quote container, `Instrument Serif` styling, absolute position quote marks.
*   **`EditorialCard`**: Card surface with hairline border (`rgba(255,255,255,0.08)` or light equivalent), aspect-locked image container, status badge.
*   **`TimelineMilestone`**: Row layout with large italic display year, event subtitle, and inline description.
*   **`CultureCard`**: Minimal bordered box housing structured text with no icons.
*   **`SiteFooter`**: Full-width directory mapping ecosystem sites, status flags, and copyright tags.

---

## 3. plotarmour-studio (Venture & Engineering Lab)

The studio portal is the operational engine. It is sharp, systems-driven, pure dark mode (`#000000`), and showcases the pipeline, templates, reusable toolboxes, and active R&D experiments.

### A. Site Map & Content Hierarchy
The studio portal is designed to attract founders, operators, and developers by presenting code-level details and visual R&D telemetry.

*   **/** (Homepage) — Interactive hero scene, studio manifesto, the Venture Pipeline, active ventures list, and toolbox inventory.
*   **/blueprints** (Architecture Specs) — Comprehensive list of operational blueprints (manufacturing, staffing, gig-economy, logistics) with sector maps.
*   **/research** (Applied Engineering) — In-depth technical articles, agent orchestrator specifications, and local platform documentation.
*   **/experiments** (R&D Sprints) — The active sandbox displaying telemetry feeds, robotics testbeds, and design asset packs.
*   **/team** (Core Engineering Squad) — Directory of building squads, active research coordinates, and bios.
*   **/intern** (Internship Program) — Specialized portal for candidate ingestion, detailing past cohorts and submission requirements.
*   **/careers** (Studio Careers) — Active developer, designer, and researcher roles within the innovation lab.
*   **/contact** (Lab Inquiries) — Technical inquiry endpoint.

### B. Navigation & Header Spec
*   **Floating Studio Pill Header**:
    *   Rounded outer shell with `1px border-white/[0.08]` and frosted dark backdrop (`bg-black/60 backdrop-blur-xl`).
    *   Left side: Snappy link-pill `PlotArmour Studio`.
    *   Center: Horizontal nav controls mapping home anchors (`#pipeline`, `#capabilities`, `#ventures`, `#blueprints`, `#experiments`) and internal routes (`/research`, `/blueprints`, `/team`, `/intern`).
    *   Right side: Distinct outbound link `Ecosystem` with an `ArrowUpRight` icon to route users back to `theplotarmour.xyz`.

### C. Homepage Layout Flow & Section Ordering
The studio landing page follows a sequence mapping the entire venture-building pipeline from origin to spinout.

```
┌────────────────────────────────────────────────────────┐
│ 1. Hero & Canvas Scene (3D floating particles)          │
├────────────────────────────────────────────────────────┤
│ 2. Studio Manifesto (Operational investment model)     │
├────────────────────────────────────────────────────────┤
│ 3. Venture Pipeline (Interactive 7-stage stepper)       │
├────────────────────────────────────────────────────────┤
│ 4. Active Ventures (Core spinout card showcase)        │
├────────────────────────────────────────────────────────┤
│ 5. Tooling & Platforms (In-house reusable code block)  │
├────────────────────────────────────────────────────────┤
│ 6. Blueprint Explorer (Sectors, codes, and maps)       │
├────────────────────────────────────────────────────────┤
│ 7. Experimental Lab (Active sandbox R&D sprints)       │
├────────────────────────────────────────────────────────┤
│ 8. Footer (Technical telemetry and build coordinates)  │
└────────────────────────────────────────────────────────┘
```

1.  **Hero Scene**:
    *   3D Canvas particle scene (Three.js/Fiber) drifting in the background.
    *   Bold display statement: `"We build companies before they become companies."`
    *   Large structural image showing studio assets or hardware.
2.  **Manifesto**:
    *   2-column layout defining why the studio operates on equity-engineered models rather than client consulting.
3.  **Venture Pipeline**:
    *   An interactive stepper interface. Users navigate through 7 stages (`Idea & Mapping` → `Deep Research` → `Validation` → `Product & Brand` → `Systems Engineering` → `Operational Launch` → `Scale & Spinout`).
    *   Clicking stages updates a telemetry details panel on the right.
4.  **Active Ventures**:
    *   2-column card showcase highlighting Keystone, Verity, VEDA, and Convoke. Displays status indicator lights and roadmap details.
5.  **Tooling & Reusable Platforms (Toolbox)**:
    *   Asymmetric grid mapping internal infrastructure blocks (Core Design System, AI Agent Orchestrator, Infrastructure Template Stack, Blueprint Library).
6.  **Blueprint Explorer**:
    *   4-column cards containing BP codes (e.g. `BP-WRK`, `BP-MFG`), showing target sectors and architectures.
7.  **Experimental Lab**:
    *   R&D cards for active sprints (Project Sentinel, Vera AI, PlotPack).
8.  **Technical Footer**:
    *   Monospaced log lines showing framework status, active deployments, and coordinates.

### D. User Journeys (Studio Portal)

#### Journey C: The Aspiring Founder / Builder
*   **Goal**: Understand the studio's validation model and join the pipeline.
*   **Path**:
    1.  Land on Homepage → Experience the interactive 3D Canvas environment.
    2.  Navigate to **Venture Pipeline** → Click through stages to review operational checks.
    3.  Scroll to **Toolbox** → Verify code-level reuse and speed metrics.
    4.  Click `/blueprints` → Research target industries.
    5.  Navigate to `/intern` or `/careers` → Submit portfolio and join as a builder.

#### Journey E: The Industry Operator / Client
*   **Goal**: Evaluate existing software blueprints for deployment on their physical operations.
*   **Path**:
    1.  Land on Homepage → Scroll to **Active Ventures** to see case platforms (Keystone, VEDA).
    2.  Navigate to **Blueprint Explorer** → Identify matching operational architectures (e.g., `BP-MFG` for factories).
    3.  Click `/research` → Read performance benchmarks.
    4.  Navigate to `/contact` → Request a direct pilot program.

### E. Component Inventory (Studio Portal)
*   **`Canvas3DScene`**: Interactive React Three Fiber background, rendering low-opacity particle fields.
*   **`StudioHeader`**: Rounded pill layout, 1px perimeter border, dark glassmorphism.
*   **`PipelineStepper`**: Multi-button selector stack, synchronized text cards, telemetry status bars.
*   **`VentureCard`**: Deep-charcoal card (`#0a0a0a`), status dot (solid colored indicator, no neon glow), link to main site.
*   **`ToolboxPanel`**: System layout mapping platform name, version tags, and environment flags.
*   **`BlueprintCard`**: Spec card detailing code, title, and sector tags in monospace.
*   **`ExperimentSprintCard`**: Bordered card outlining active R&D title, type, and experimental descriptions.
*   **`SpringCursor`**: Custom double-element spring-delayed cursor with ring expansion on target hovers.
*   **`StudioFooter`**: Raw telemetry footer, monospace fonts, layout coordinates.

---

## 4. UX Rules & Anti-Patterns

To preserve the intellectual, premium aesthetic, both sites must strictly enforce these UX parameters. Any implementation violating these parameters must be flagged for redesign.

| Rule / Principle | Approved Implementation | Rejected (Anti-Patterns) |
| :--- | :--- | :--- |
| **Elevation & Depth** | Surface transitions and `1px` borders (`rgba(255,255,255,0.08)`). | Box shadows, drop shadows, card glows, fuzzy elements. |
| **Color Accents** | Solid monochrome, muted grays. Functional indicator dots (solid green, orange, or blue). | Neon gradients, bright purple brand blocks, multi-color backgrounds. |
| **Grid Layouts** | Asymmetric balance (2:1, 3:5, 1:2 splits). Generous column gutters. | Uniform repeating grids of identical cards, dense dashboard stacking. |
| **Motion Easing** | Soft fade-in-up with slight blur (`cubic-bezier(0.22, 1, 0.36, 1)` over `0.58s`). | Elastic bounce animations, slide-ins from off-screen, heavy parallax. |
| **Visual Gaps** | Generous vertical padding (`py-32` to `py-48`). Content must breathe. | Compressed margins, cluttered sections, packing too many cards in viewport. |
| **Call to Action (CTA)** | Clean rectangular buttons labeled with technical action (e.g., `INDEX`, `CONTACT`). | Rounded pill buttons, generic SaaS copy like "Get Started for Free". |
