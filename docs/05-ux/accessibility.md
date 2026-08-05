# Accessibility
ASTER is built to be usable by everyone, adhering to WCAG 2.1 AA and integrating accessibility into every layer of design and development.
- **Keyboard Navigability:** All interactive elements are reachable and operable via keyboard alone, with logical tab order and visible focus indicators.
- **Screen Reader Support:** Semantic HTML, ARIA labels, and live regions ensure content is announced accurately; decorative elements are hidden from assistive technologies.
- **Color Contrast:** All text and UI elements meet minimum contrast ratios (4.5:1 for normal text, 3:1 for large text) against backgrounds; dynamic theme switching preserves contrast.
- **Scalable Layouts:** Layouts use relative units (rem, em, %) and flexible containers (Flexbox, Grid) to accommodate zoom levels up to 200% without loss of content or functionality.
- **Touch Targets:** Interactive elements are at least 48×48 dp with adequate spacing to prevent accidental taps.
- **Form Accessibility:** Labels are programmatically associated with inputs; error messages are announced live and tied to the relevant field.
- **Motion Sensitivity:** Animations respect `prefers-reduced-motion`; non‑essential motion is reduced or replaced with instant transitions.
- **Testing & Validation:** Regular accessibility audits using automated tools (axe, Lighthouse) and manual testing with assistive technologies (screen readers, voice control).
- **Documentation & Training:** Accessibility guidelines are included in the design system and developer onboarding; regular training ensures team awareness and compliance.
