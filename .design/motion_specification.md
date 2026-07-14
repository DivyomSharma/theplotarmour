# PlotArmour Ecosystem: Motion Specification

This document details the precise motion guidelines, interaction physics, page transitions, card expansions, timeline reveals, and interactive WebGL scene specifications for the **PlotArmour Main Editorial Portal (theplotarmour)** and the **Venture Engineering Studio (plotarmour-studio)**.

These specs translate our brand identity—raw editorial classicism intersecting with high-precision engineering—into fluid, performant, and premium web interactions.

---

## 1. Core Physics & Easing Constants

All animations in the ecosystem must use these standardized configurations. Do not use default or spring-less linear transitions.

### A. Spring Physics (Framer Motion / GSAP Custom Spring)
Use springs for physical interactions (cursors, drag, sliders, physical hovers).

| Constant Name | Description | Stiffness | Damping | Mass | Target Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `SPRING_SNAP` | Immediate, high-precision technical snap | `400` | `30` | `0.8` | UI active states, route selectors, tab changes |
| `SPRING_SMOOTH` | Soft, elastic, high-inertia transition | `120` | `18` | `1.0` | Steppers, large element sliding, interactive overlays |
| `CURSOR_OUTER` | Elastic, delayed tracking | `280` | `28` | `0.35` | Custom trailing cursor outer ring |
| `CURSOR_INNER` | Snappy, immediate center tracking | `520` | `32` | `0.4` | Custom trailing cursor inner dot |

### B. Tween Easings (CSS / Framer Motion / GSAP)
Use cubic-bezier curves for structural layout fades, reveals, and coordinate shifts.

*   **`EASE_REVEAL`**: `cubic-bezier(0.22, 1, 0.36, 1)` (Quintic-like ease-out)
    *   *Duration*: `0.58s`
    *   *Target*: Entrance reveals, text fades, asymmetric column offsets.
*   **`EASE_INTERACTIVE`**: `cubic-bezier(0.16, 1, 0.3, 1)` (Cubic ease-out)
    *   *Duration*: `0.25s`
    *   *Target*: Link hover animations, text underline slides, small UI elements.
*   **`EASE_MORPH`**: `cubic-bezier(0.76, 0, 0.24, 1)` (In-out curve for structural transitions)
    *   *Duration*: `1.2s`
    *   *Target*: 3D particle formations, major route transition overlays.

---

## 2. Hover States & Interactive Triggers

### A. Buttons & Standard Links
*   **Behavior**: Zero padding shifts. Transition color and visual cues in-place.
*   **Animation**:
    *   **Text/Underline Slide**: An absolute `1px` high-contrast bar (`#000000` in light, `#ffffff` in dark) sits below the text.
    *   *Initial State*: `scaleX: 0`, `originX: 0%`.
    *   *Hover State*: `scaleX: 1`, transition using `EASE_INTERACTIVE`.
    *   *Exit State*: `scaleX: 0`, `originX: 100%` (creates a continuous directional slide-through effect).
*   **Color Shift**: Anchor tags shift text color cleanly from `text-muted-foreground` to `text-foreground`.
    *   *Framer Motion*: `transition={{ duration: 0.15, ease: "easeOut" }}`

### B. Editorial & Studio Cards
*   **Visual System**: Card depth is expressed solely via hairline borders. No box shadows.
*   **Animation Details**:
    *   **Scale**: Limit to maximum `scale: 1.01`.
    *   **Border Brightness**:
        *   *Light Mode*: Border transitions from `border-black/[0.08]` to `border-black/[0.18]`.
        *   *Dark Mode*: Border transitions from `border-white/[0.08]` to `border-white/[0.18]`.
    *   **Grayscale Media**: Images transition from `grayscale contrast-[1.05]` to `grayscale-0 contrast-100` on hover (or subtle scale shift inside the image container `scale: 1.02` max).
    *   *Framer Motion Specs*:
        ```tsx
        const cardHoverVariants = {
          initial: { scale: 1, borderColor: "rgba(255,255,255,0.08)" },
          hover: { 
            scale: 1.01, 
            borderColor: "rgba(255,255,255,0.18)",
            transition: { type: "spring", ...SPRING_SNAP }
          }
        };
        ```

### C. Floating Navigation Header (Sliding Active Route Indicator)
*   **Visual System**: Floating header nav uses a dark/light frosted container. The active link highlights using a background pill container that slides under the selected link.
*   **Layout Shared Transition**:
    *   Uses Framer Motion `layoutId="activeNavBackground"`.
    *   On active tab change, the background element translates and scales to match the new item bounds.
    *   *Configuration*: `type: "spring", ...SPRING_SNAP`.

---

## 3. Page Transition Configurations

### A. theplotarmour (Editorial Portal Page Transition)
*   **Visual Goal**: Mimics a physical newspaper layout loading. The transitions are fast, smooth, and text-focused.
*   **Properties**:
    *   *Initial (Unmounted)*: `opacity: 0`, `y: 8px`.
    *   *Animate (Mounted)*: `opacity: 1`, `y: 0`.
    *   *Exit*: `opacity: 0`, `y: -8px`.
    *   *Easing*: `EASE_REVEAL` (`[0.22, 1, 0.36, 1]`).
    *   *Duration*: `0.45s`.
*   **Implementation Note**: Apply using `<AnimatePresence mode="wait">` wrapping the page content container.

### B. plotarmour-studio (Studio Portal Page Transition)
*   **Visual Goal**: Tech-oriented, high-precision overlay.
*   **Structure**: A flat `#0a0a0a` screen-wipe transition combined with a monospaced coordinate counter overlay.
*   **Animation Flow (GSAP or Framer Motion)**:
    1.  **Screen-Wipe**: An overlay block covers the screen.
        *   *Slide In*: `scaleY: [0, 1]`, `transformOrigin: "bottom"`, `duration: 0.4s`, `ease: [0.76, 0, 0.24, 1]`.
    2.  **Mount New Page**: Switch routes in background.
    3.  **Telemetry Counter**: A small monospace text line inside the wipe displays rapid numbers `[000] → [100]` representing asset coordination compilation.
    4.  **Screen-Wipe Slide Out**: `scaleY: [1, 0]`, `transformOrigin: "top"`, `duration: 0.4s`, `ease: [0.76, 0, 0.24, 1]`.
    5.  **Page Reveal**: Main content fades in with a stagger delay of `0.05s` on children elements.

---

## 4. Card Expansion & Details Reveal

Used when drilling down into holding details (e.g. Keystone, VEDA, Convoke) or viewing blueprint specifications.

```
       Closed Card                                     Expanded Details Panel
┌────────────────────────┐                    ┌────────────────────────┬──────────────┐
│  Grayscale Cover Image │                    │                        │              │
├────────────────────────┤                    │  Grayscale Cover Image │  Telemetry   │
│  Keystone              │   ──────────────>  │                        │  Specs &     │
│  Category / Active     │     (Layout ID)    ├────────────────────────┤  Timeline    │
└────────────────────────┘                    │  Keystone              │  Logs        │
                                              │  Narrative Essay       │              │
                                              └────────────────────────┴──────────────┘
```

### A. Shared Layout Expansion (Framer Motion `layoutId`)
*   To expand a card into a full-screen layout details overlay, use matching `layoutId` tags on the container and media frame components.
*   **Physics Settings**:
    *   *Transition*: `type: "spring", ...SPRING_SMOOTH`.
    *   *Opacity Transition*: Fade content elements inside the card (e.g., text descriptions) with `duration: 0.2s` and fade-in new coordinates with `duration: 0.3s` once scale completes.
*   **Aspect Ratio lock**: During expansion, the media container must transition its aspect ratio dynamically (`aspect-[16:10]` to `aspect-[21:9]` or full height) without rendering distortion. Set CSS `object-fit: cover` on images.

### B. Telemetry Sidebar Slide-In
*   **Behavior**: When cards expand, a right-hand sidebar splits off to show technical details.
*   **Specs**:
    *   *Initial*: `x: "100%"`, `opacity: 0`.
    *   *Animate*: `x: "0%"`, `opacity: 1`.
    *   *Exit*: `x: "100%"`, `opacity: 0`.
    *   *Transition*: `type: "spring", ...SPRING_SNAP`.

---

## 5. Timeline Reveals & Scroll Triggers

### A. Scroll-Triggered Page Entry Reveals
Avoid standard lazy scrolling. Elements reveal in segments using scroll triggers.
*   **Reveal Trigger**:
    *   *Framer Motion*: `viewport={{ once: true, margin: "-100px" }}`
    *   *GSAP ScrollTrigger*: `trigger: element, start: "top 85%", toggleActions: "play none none none"`
*   **Component Reveal Sequence**:
    1.  **Container/Border Draw**: A horizontal hairline border (`w-full`) scales in width `scaleX: [0, 1]`, centering from parent bounds. Easing: `EASE_REVEAL`, Duration: `0.7s`.
    2.  **Text Translate-Up**: Content items translate upward (`y: [16px, 0px]`) and fade in (`opacity: [0, 1]`). Easing: `EASE_REVEAL`, Duration: `0.58s`.
    3.  **Telemetry Data Fade**: Metadata lines and small coordinate blocks fade in (`opacity: [0, 1]`) with a `0.2s` delay relative to the main body.

### B. Asymmetric Timeline Drawing (Editorial Portal)
*   **Structure**: A vertical axis line connects chronological events.
*   **Line Drawing**:
    *   Use an SVG path (`<line>` or `<path>`) representing the timeline center rule.
    *   Animate the SVG attribute `strokeDashoffset` dynamically bound to scroll progress.
    *   *GSAP ScrollTrigger Implementation*:
        ```javascript
        gsap.fromTo(lineRef, 
          { strokeDashoffset: pathLength }, 
          { 
            strokeDashoffset: 0, 
            ease: "none", 
            scrollTrigger: {
              trigger: timelineContainerRef,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 0.5
            }
          }
        );
        ```
*   **Milestone Nodes**: As the scroll line passes each milestone node, the node (a small solid gray circle) scales from `scale: 0` to `scale: 1` over `0.2s` with `SPRING_SNAP`.

---

## 6. Interactive Venture Pipeline Stepper

The **Venture Pipeline Stepper** is a custom interactive component housing 7 stages of development (Idea, Deep Research, Validation, Product, Systems, Launch, Scale).

```
   [Stage 01] ─── [Stage 02] ─── [Stage 03] ─── [Stage 04] ─── [Stage 05] ...
  (Active Step)
       │
       ▼
   ┌────────────────────────────────────────────────────────┐
   │ TELEMETRY SPECS PANEL                                   │
   │ - COORDINATES: [BP-KEY-04]            STATUS: VERIFYING│
   │ - Fading in with y-offset of 12px over 0.58s           │
   └────────────────────────────────────────────────────────┘
```

### A. Stage Selector Interactive State
*   **Visual Styling**:
    *   Inactive stage: Gray border (`border-white/10`), low text opacity (`text-white/40`).
    *   Active stage: High-contrast light gray border (`border-white/40`), high text opacity (`text-white/100`), with an absolute dot marker.
*   **Transition Physics**:
    *   Clicking a stage moves the active highlight ring using `SPRING_SNAP` physics.
    *   Text elements color-shift over `0.2s` with `EASE_INTERACTIVE`.

### B. Synchronized Details Panel Swap
When a stage is selected, the right-hand details panel updates.
*   **Animation Details**:
    *   The details panel uses a fade-out/fade-in cycle.
    *   *Exit (Previous Stage Content)*: Fade out (`opacity: 0`), translate down/up (`y: -8px`), duration `0.15s` with `easeIn`.
    *   *Entry (New Stage Content)*: Fade in (`opacity: 1`), translate up (`y: [12px, 0px]`), duration `0.58s` with `EASE_REVEAL`.
*   **Monospace System Stagger**:
    *   Telemetry items within the details block (like timestamps, codes, metrics) animate with a micro-stagger:
        ```tsx
        const telemetryContainer = {
          animate: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: 0.1
            }
          }
        };
        const telemetryItem = {
          initial: { opacity: 0, x: -4 },
          animate: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.3 } }
        };
        ```

---

## 7. WebGL Particle Scene & Coordinate Transitions

The `plotarmour-studio` background rendering utilizes a Three.js / React Three Fiber particle canvas. The particles represent architectural data points and morph shapes as users navigate pages.

### A. Particle System Parameters
*   **Particle Count**: `1500` to `2500` points.
*   **Material**: `THREE.PointsMaterial` or a custom `ShaderMaterial` rendering grayscale circular textures.
    *   *Color*: `#ffffff` or custom gray limits.
    *   *Size*: `1.5px` to `3.0px` (device-pixel ratio responsive).
    *   *Alpha*: `0.2` to `0.4` base opacity. No glowing halos.
*   **Idle Behavior**:
    *   Particles slowly float within a defined bounding box.
    *   Animate using a low-frequency 3D noise vector (Simplex noise or sine offset):
        ```javascript
        particle.position.y += Math.sin(state.clock.elapsedTime * 0.2 + particle.uniqueOffset) * 0.005;
        particle.position.x += Math.cos(state.clock.elapsedTime * 0.15 + particle.uniqueOffset) * 0.003;
        ```

### B. Mouse Hover & Coordinates Parallax
*   **Parallax Vector**:
    *   Track mouse coordinates dynamically relative to the viewport center: `NDC_x = (mouseX / windowWidth) * 2 - 1`, `NDC_y = -(mouseY / windowHeight) * 2 + 1`.
    *   Linearly interpolate (lerp) the camera coordinates toward this position:
        ```javascript
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseNDC.x * 2.5, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseNDC.y * 2.5, 0.05);
        state.camera.lookAt(0, 0, 0);
        ```
*   **Interactive Attraction Force**:
    *   When the cursor is active, particles within a radius of `3.0` units are pulled slightly toward the mouse projection vector on the Z-plane.
    *   *Attraction easing*: `lerp` factor `0.02` to prevent sudden jumps, maintaining a slow, heavy fluid feel.

### C. Route-Based Particle Morphing
The particle system morphs into structured arrangements matching the site's sections.

```
       Homepage State                      Blueprints State                    Experiments State
     (Drifting Nebula)                (Structured Blueprint Grid)             (Dynamic Waveform)
         · .  *  ·                          ┌───┬───┬───┬───┐                     ·.  ·.
       .  ·  .  *  ·                        ├───┼───┼───┼───┤                   ·.  ·.  ·.  ·.
         *  ·  .  *                         └───┴───┴───┴───┘                 ·.  ·.  ·.  ·.
```

1.  **Homepage State (Drifting Nebula)**:
    *   *Geometry*: Random spherical distribution.
    *   *Drift*: Random noise paths.
2.  **Blueprints State (Structured Grid)**:
    *   *Geometry*: Grid layout representing coordinate planes (matrix of columns/rows).
    *   *Math*: Map positions onto a 2D plane: `x = (index % cols) * spacing - offset`, `y = Math.floor(index / cols) * spacing - offset`, `z = 0`.
3.  **Experiments State (Dynamic Waveform)**:
    *   *Geometry*: A dense double-helix or sine-wave grid.
    *   *Math*: Position coordinates mapped using coordinate trigonometry: `y = Math.sin(x * frequency + time) * amplitude`.

#### Morph Animation Spec (GSAP / Custom Shader):
*   To execute the morph, animate the particle vertex position buffer attribute using GSAP `to()` or interpolation uniforms in a vertex shader.
*   **GSAP Vertex Buffer Interpolation**:
    ```javascript
    // Target position array represents the geometry of the new state
    gsap.to(particlePositionsAttr.array, {
      endArray: targetPositionsArray,
      duration: 1.2,
      ease: "power3.inOut",
      onUpdate: () => {
        particlePositionsAttr.needsUpdate = true;
      }
    });
    ```
*   **Peak Shader Fade**:
    *   During morph, a shader uniform `uOpacity` drops the alpha of the particles to `0.1` at the peak of coordinate shift (at `0.6s`), returning to `0.35` once settle points are reached. This avoids distracting visual clutter.
