# PDOS: Motion & Interaction

Motion is used to support reading and focus, never to distract.

## Animation Guidelines

- **Subtle Reveal**: Page elements should fade and translate upward slightly (`y: 12px` or `y: 16px` max, never `y: 40px`).
- **Snappy Easing**: Use custom spring configurations (`stiffness: 120`, `damping: 14`) or clean cubic-bezier easing (`ease: [0.22, 1, 0.36, 1]`) for clean, responsive animations.
- **Card Hover**: Borders should shift brightness to `var(--border-hover)` cleanly on hover. Scale shifts should be extremely minimal (e.g. `scale: 1.01` or `1.02` max).
- **Parallax**: Avoid heavy scroll-parallax effects that cause layout lag.
