# Typography
Typography in ASTER serves to convey information with legibility, hierarchy, and a calm tone. The system is built around a single, highly readable typeface family (e.g., **Inter** or an equivalent open‑source alternative) that works well at small sizes and scales gracefully for headings.
- **Type Scale:** A modular scale based on a 1.25 ratio (e.g., 12 px, 15 px, 18 px, 22 px, 28 px, 36 px, 48 px, 64 px) provides distinct levels for body text, labels, subheadings, headings, and display text.
- **Weight Usage:** Regular (400) for body, Medium (500) for emphasis within paragraphs, Semi‑Bold (600) for subheadings and form labels, Bold (700) for primary headings and key metrics, Extra‑Bold (800) for rare, high‑impact callouts.
- **Line Height & Letter Spacing:** Comfortable line heights (1.5 for body, 1.2–1.3 for headings) and tight tracking for uppercase labels to maintain rhythm.
- **Text Styles:** Pre‑defined styles (Body, Label, Caption, Helper, Input, Heading 1‑4, Display) stored as design tokens for consistent application.
- **Fallback & Performance:** Font files are subsetted and self‑hosted; the system prefers variable fonts when available to reduce requests.
- **Accessibility:** Minimum contrast ratios are enforced for all text against backgrounds; dynamic type scaling respects user‑preferred font sizes without breaking layout.
