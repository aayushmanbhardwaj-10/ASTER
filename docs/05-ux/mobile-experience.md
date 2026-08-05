# Mobile Experience
The mobile experience is designed for efficiency, touch‑first interactions, and performance on constrained devices while preserving the full capabilities of the platform.
- **Responsive Grid:** Fluid layout based on the 8‑px grid; breakpoints at 320 px (extra small), 480 px (small), 600 px (medium), 768 px (large) to adapt components (cards, tables, side‑navs) to screen width.
- **Touch‑Optimized Controls:** Increased hit‑targets, spacious form fields, and gesture‑friendly navigation (swipe‑to‑dismiss, pull‑to‑refresh where appropriate).
- **Condensed Navigation:** Bottom navigation bar for primary destinations on screens < 600 px; collapsible side drawer for secondary navigation; hierarchy preserved via breadcrumbs on larger screens.
- **Performance Priorities:** Critical‑first loading; lazy‑load of non‑essential modules; image optimization and webp/avif formats; minimal JavaScript bundle via code‑splitting.
- **Offline Capabilities:** Service workers cache static assets and enable read‑only access to recently viewed documents; queue‑based sync for edits when connectivity returns.
- **Adaptive Density:** Compact mode available for users who prefer more information per screen (reduced paddings, smaller font scaling) accessible via settings.
- **Platform Conventions:** Follows iOS and Android navigation patterns where beneficial (e.g., back‑gesture handling, status‑bar integration) while maintaining a unified ASTER look‑and‑feel.
