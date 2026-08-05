- **Wide Desktop**: ≥ 1440px (large monitors, ultrawide)
- **Landscape Mobile**: Special consideration for wide-aspect phones
- **Foldables**: Adaptive to hinge state, multi-window modes

### 10.2 Layout Adaptations
- **Navigation**:
  - Mobile: Bottom navigation bar (5 items max) or drawer (hamburger)
  - Tablet: Sidebar optional (collapsible via button)
  - Desktop: Permanent sidebar with collapse toggle
  - Priority: Most frequent destinations in thumb-reach zone
- **Content Presentation**:
  - Single column: Mobile primary layout
  - Multi-column: Tablet+ (sidebar + main, or card grids)
  - Data tables: 
    - Mobile: Horizontal scroll, priority columns, detail view on tap
    - Tablet: Condensed columns, expandable rows
    - Desktop: Full columns with freezing/hiding options
  - Charts:
    - Mobile: Full-width, simplified legends, touch-optimized
    - Tablet: Side-by-side comparisons possible
    - Desktop: Complex dashboards with multiple coordinated views
- **Interaction Changes**:
  - Touch targets: Minimum 44x44px (iOS/Android guideline)
  - Hover → Tap: Tooltips on long-press or tap
  - Gestures: Swipe for navigation, pinch-to-zoom (where appropriate)
  - Keyboard: External keyboard support maintained

### 10.3 Platform-Specific Considerations
- **iOS**:
  - Safe area: Respect home indicator, notch, rounded corners
  - Touch: 44pt minimum, momentum scrolling
  - Typography: Dynamic type support (preferred content sizes)
  - Navigation: Back gesture compatibility
- **Android**:
  - Material Design alignment where consistent with brand
  - Navigation: Back button, system gesture compatibility
  - Density: Support for ldpi, mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi
  - Back button: Expected behavior (navigate up/history)
- **Web (PWA)**:
  - Offline: Service worker for core assets, cache-first strategy
  - Installability: Manifest.json, apple-touch-icons
  - Background sync: For critical operations (alerts, messages)
  - Push notifications: Web Push API with user permission
- **Cross-Platform Consistency**:
  - Core interaction patterns preserved
  - Platform conventions respected where beneficial
  - Feature parity maintained with graceful degradation
  - Shared design system tokens and components

### 10.4 Performance Optimization
- **Asset Optimization**:
  - Images: WebP/AVIF with fallbacks, responsive srcset
  - Icons: SVG sprites or font icon subsetting
  - Fonts: Subsetting, font-display: swap
  - Code: Code splitting, lazy loading of routes/modules
- **Rendering**:
  - Virtual scrolling: For long lists (>100 items)
  - Canvas/WebGL: For extremely dense visualizations (heatmaps, particle systems)
  - Request animation frame: For custom animations
  - CSS containment: For complex components
- **Network**:
  - Prefetching: Anticipate next likely views
  - Lazy loading: Below-the-fold images, non-critical scripts
  - Compression: Brotli/gzip for text assets
  - CDN: Geographic distribution of static assets
- **Measurement**:
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - Custom metrics: Time-to-interactive-chart, data-freshness
  - Device lab testing: Real devices across performance tiers

## 11. Content Strategy and Writing Guidelines

### 11.1 Voice and Tone
- **Brand Voice**: 
  - Authoritative yet approachable
  - Professional without being stiff
  - Confident but not arrogant
  - Helpful and empowering
- **Contextual Tone**:
  - Educational: Tutorials, onboarding, documentation
  - Reassuring: Error states, confirmation dialogs
  - Urgent: Time-sensitive alerts, market movements
  - Celebratory: Achievements, milestones, positive outcomes
  - Neutral: Data labels, interface elements, help text
- **Audience Adaptation**:
  - Retail investors: Simplified terms, educational context
  - Professionals: Industry terminology, advanced features
  - Institutions: Formal language, compliance-focused
  - Adaptive: Based on user role/experience level (profile setting)

### 11.2 Microcopy Principles
- **Clarity Over Cleverness**: Prioritize understanding
- **Action-Oriented**: Verbs first ("Save changes", not "Changes saved")
- **Specific**: "Enter your email" vs "Fill in the field"
- **Concise**: Minimum words for maximum comprehension
- **Consistent**: Same term for same concept everywhere
