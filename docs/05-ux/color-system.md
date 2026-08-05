# Color System
ASTER’s color system balances neutrality with purposeful accentuation, offering both light and dark themes that meet WCAG AA contrast standards.
- **Neutral Palette:** A range of grays (`Gray‑50` to `Gray‑950`) for backgrounds, surfaces, borders, and muted text. `Gray‑100`/`Gray‑900` are the primary surface colors for light/dark modes respectively.
- **Primary Accent:** A single brand‑neutral hue (e.g., a calm blue‑gray) used for interactive elements (links, buttons, active tabs) in its 500 shade; `Primary‑600` for hover/focus states.
- **Semantic Colors:**
  - **Success:** Green (`Success‑500`) for positive outcomes, with `Success‑600` for active states.
  - **Warning:** Amber (`Warning‑500`) for Attention‑required states, `Warning‑600` for active.
  - **Error:** Red (`Error‑500`) for destructive or invalid states, `Error‑600` for active.
  - **Info:** Cyan (`Info‑500`) for informational highlights.
- **Data Visualization:** A categorical palette of six hues drawn from the primary and semantic families, each with accessible contrast against neutral backgrounds; sequential/diverging palettes for heatmaps and charts are derived from the same hues with perceptual uniformity.
- **Background Overlays:** Semi‑transparent layers (`Overlay‑Low`, `Overlay‑Medium`, `Overlay‑High`) for modals, dropdowns, and elevation effects.
- **Dark Mode Inversion:** Colors are inverted using the neutral palette while preserving semantic meaning; primary accent retains its hue but shifts to a lighter shade for contrast.
- **Token Usage:** All colors are exposed as design tokens (`color.background.primary`, `color.interactive.primary.default`, etc.) to enable theming and runtime switching.
