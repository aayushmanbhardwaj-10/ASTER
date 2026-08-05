  - Layer promotion: translateZ(0) for GPU acceleration (tested)
- **Asset Optimization**:
  - Images: WebP/AVIF with JPEG/PNG fallbacks
  - SVG: Sprite sheets, optimize with SVGO
  - Icons: Font subset or SVG sprites
  - Videos: Adaptive streaming, preload metadata only
  - Fonts: woff2, subset to latin+latin-ext, display swap

### 13.3 Data Loading Strategies
- **Progressive Loading**:
  - Skeleton screens: Show layout while data fetches
  - Stale-while-revalidate: Show cached, fetch fresh in background
  - Priority loading: Visible content first, then below-fold
  - Predictive prefetch: Based on navigation patterns (hover/intent)
- **Caching Strategy**:
  - Service workers: Network-first for data, cache-first for assets
  - HTTP caching: Proper Cache-Control headers (immutable, max-age)
  - LocalStorage/IndexedDB: User preferences, cached reports
  - Cache invalidation: Content-based hashes, versioned endpoints
- **Batch and Stream**:
  - GraphQL: Combine multiple REST calls into single query
  - WebSocket: Real-time updates for active subscriptions
  - Server-sent events: For server→client streams (less bidirectional)
  - Message queues: Decouple user action from background processing
- **Payload Optimization**:
  - Field selection: ?fields=symbol,price,change (avoid over-fetching)
  - Pagination: Cursor-based for large datasets
  - Compression: gzip/brotli for JSON responses
  - Delta updates: Send only changed fields since last request
  - Binary formats: Protocol Buffers for internal services (when beneficial)

### 13.4 Monitoring and Optimization
- **Real User Monitoring (RUM)**:
  - Core Web Vitals: LCP, FID, CLS via web-vitals library
  - Custom timers: Time-to-interactive-chart, data-freshness-lag
  - Error tracking: JavaScript errors, promise rejections
  - Performance marks: Custom timestamps for key operations
- **Synthetic Testing**:
  - Lighthouse CI: Automated in PRs for performance budgets
  - WebPageTest: Geographic/network condition testing
  - Custom scripts: For complex user journeys
- **Profiling Tools**:
  - DevTools Performance: Flame chart, main thread breakdown
  - Chrome Tracing: In-depth async operations analysis
  - Memory profiling: Heap snapshots, leak detection
  - Bundle analysis: webpack-bundle-analyzer, source-map-explorer
- **Optimization Workflow**:
  1. Measure: Establish baseline with real user data
  2. Identify: Find bottlenecks via profiling/tools
  3. Hypothesize: Formulate specific improvement theory
  4. Implement: Make targeted change
  5. Validate: A/B test or measure impact
  6. Repeat: Continuous improvement cycle
- **Performance Budgets in CI**:
  - Build-time: Bundle size limits enforced
  - Pre-merge: Lighthouse CI failure blocks PR
  - Production: Alert on regression beyond threshold
  - Reporting: Dashboard showing trend over time

## 14. Internationalization (i18n) and Localization (L10n)

### 14.1 Architecture and Implementation
- **Message Format**:
  - ICU MessageSyntax: Supports plurals, gender, select
  - Example: "{count, plural, one {# item} other {# items}}"
  - Variables: "Hello {name}, you have {notificationCount} messages"
- **Storage Format**:
  - JSON nested objects: {"navigation": {"dashboard": "Dashboard"}}
  - Flat keys with dots: "navigation.dashboard": "Dashboard"
  - XLIFF: For professional translation workflows
- **Loading Strategy**:
  - Pre-load: Critical UI strings with initial bundle
  - Lazy-load: Route-specific or feature-specific bundles
  - Fallback chain: Requested → English → literals (last resort)
  - Caching: Service worker for language bundles
- **Directionality Handling**:
  - CSS logical properties: margin-inline-start instead of margin-left
  - Flexbox/grav: Naturally adapts to direction
  - Exceptions: Charts, images, numbers (often LTR even in RTL locales)
  - Dir attribute: html[dir] or on specific containers
- **Locale Detection and Selection**:
  - Priority: User preference > Browser language > Geographic IP > Default (en)
  - Storage: User profile setting with expiration/reconfirmation
  - URL parameter: ?lang=es for sharing/forced language
  - Switcher: Accessible language selector in footer/settings
  - Persistence: Choice remembered across sessions/devices

### 14.2 Content Adaptation
