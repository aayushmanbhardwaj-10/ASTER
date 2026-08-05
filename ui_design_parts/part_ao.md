  - Spring libraries: react-spring, framer-motion (physics-based)
  - Timeline GSAP: Complex sequences with precise control
  - Web Animations API: Native, increasingly well-supported
- **Performance Considerations**:
  - Measure: Paint flashing, layer counts, GPU memory
  - Avoid: Layout thrashing (forced synchronous layouts)
  - Debounce/throttle: Resize/scroll handlers
  - RequestIdleCallback: For low-priority work
  - Will-change removal: After animation completes
- **Accessibility**:
  - Reduced motion: @media (prefers-reduced-motion: reduce)
    - Either: Eliminate animation or substitute with crossfade
  - Photosensitivity: No flashing >3Hz, no intense patterns
  - Screen reader: ARIA-live for dynamic content changes
  - Focus management: Preserve/logical sequence during transitions
  - Duration: Longer for cognitive processing needs
- **Timing Specifications**:
  - Element states: 
    - Button press: 100ms scale down
    - Hover in/out: 150ms fade/scale
    - Focus ring: 150ms expand
    - Toast appear/dismiss: 200ms/300ms fade
  - Navigation:
    - Page change: 300ms fade/slide
    - Modal open/close: 200ms scale/fade
    - Drawer in/out: 250ms slide
    - Sidebar collapse: 200ms width change
  - Data updates:
    - Chart point update: 400ms spring
    - Row insert/remove: 300ms fade + slide
    - Cell edit: 200ms highlight pulse
    - Filter application: 500ms staggered reveal

### 17.3 Motion in Specific Contexts
- **Loading and Progress**:
  - Skeleton shimmer: Infinite linear gradient translate
  - Spinner: Continuous rotation (1s period)
  - Progress bar: Smooth width transition (ease-out)
  - Pull-to-refresh: Follow finger, snap back, then refresh
  - Skeuomorphic: Only when metaphor adds understanding
- **Data Visualization**:
  - Point updates: Grow/shrink with fade (not just jump)
  - Axis transitions: Scale domain with ease-out
  - Series add/remove: Fade in/out + scale
  - Filter animation: Staggered reveal of remaining items
  - Real-time streaming: Appending with fade-in, old points fade
- **Navigation and State**:
  - Hierarchical: Slide (push/pop) maintains context
  - Modal: Scale + fade preserves background context
  - Drawer: Slide from edge indicates origin
  - Tabs: Horizontal slide indicates directionality
  - Master-detail: Push from right maintains list context
- **Form Interactions**:
  - Validation: Shake on error (horizontal translate)
  - Success: Checkmark draw + field highlight
  - Input focus: Label float up + underline expand
  - Autocomplete: Menu fade-in from below
  - Multistep: Progress bar indicates completion
- **Empty and Error States**:
  - First use: Gentle bounce-in of illustration
  - Error: Attention pulse ( brief scale 1.02 → 1.00)
  - Empty: Illustration drift or subtle float
  - Success celebration: Confetti, checkmark burst (sparingly)

### 17.4 Animation Tokens and System
- **Duration Tokens**:
  - ultraFast: 50ms (state changes, haptics)
  - faster: 100ms (toggles, tooltips)
  - fast: 150ms (inputs, buttons)
  - moderate: 200ms (cards, panels)
  - slow: 300ms (modes, drawers)
  - slower: 400ms (page transitions)
  - slowest: 500ms (complex layouts)
- **Easing Tokens**:
  - linear: cubic-bezier(0, 0, 1, 1) (rarely used)
  - easeIn: cubic-bezier(0.4, 0, 1, 1)
  - easeOut: cubic-bezier(0, 0, 0.2, 1) (most common)
  - easeInOut: cubic-bezier(0.4, 0, 0.2, 1)
  - sharp: cubic-bezier(0.4, 0, 0.6, 1)
  - bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- **Delay and Stagger**:
  - stagger: 50ms between items in list
  - delay: 100ms for secondary effects
  - chase: Lead/follow timing for related elements
- **Implementation Pattern**:
  ```css
  /* Token usage in CSS */
  .button {
    transition: 
      transform var(--duration-fast) var(--ease-out),
      opacity var(--duration-fast) var(--ease-out);
  }
  
  .button:active {
    transform: scale(0.97);
  }
  
  .toast-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .toast-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 
      opacity var(--duration-moderate) var(--ease-out),
      transform var(--duration-moderate) var(--ease-out) var(--delay-short);
  }
  ```
- **Testing and Validation**:
  - Frame timing: DevTools performance panel
  - Policy compliance: ESLint rule for animation properties
