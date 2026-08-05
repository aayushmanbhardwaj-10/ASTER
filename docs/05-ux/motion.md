# Motion
Motion in ASTER is purposeful, subtle, and respectful of user preferences, enhancing comprehension without causing distraction.
- **Prerequisites:**
  - **Feedback:** Micro‑interactions (button press ripple, toggle switch, input validation) confirm actions.
  - **Transition:** Page and modal fades/slides provide spatial continuity; duration 150‑250 ms with ease‑out curves.
  - **Guidance:** Motion draws attention to newly revealed content (e.g., toast appears from bottom, expands slightly).
  - **Reduced Motion:** Detected via `prefers-reduced-motion`; all non‑essential animations are disabled or replaced with instant fades.
- **Timing & Easing:** Standard easing curve `cubic-bezier(0.4, 0, 0.2, 1)`; entrance 200 ms, exit 150 ms, feedback 100 ms.
- **Performance:** Animations are compositor‑only (transform, opacity) to maintain 60 fps; layout‑thrashing is avoided.
- **Motion Tokens:** Duration and easing values are stored as design tokens (`motion.duration.fast`, `motion.easing.standard`) for consistent application.
