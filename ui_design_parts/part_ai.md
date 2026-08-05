  - Skill levels: Beginner → Intermediate → Advanced
  - Achievement system: Badges for completed tutorials
  - Knowledge checks: Short quizzes to verify understanding
  - Personal recommendations: "Based on your portfolio, learn about..."
- **Contextual Help Triggers**:
  - Struggle detection: Repeated errors, excessive undo/redo
  - Feature discovery: Highlight unused but relevant capabilities
  - Expert mode: Option to hide basic explanations for power users
  - Just-in-time: Appear when user hesitates on complex action

### 12.3 Empty States and First Use
- **Types of Empty States**:
  - First-time: Never had data (welcoming, instructional)
  - Cleared: User removed all content (option to restore/sample)
  - Error: Failed to load data (retry, troubleshoot)
  - Waiting: Expected data not yet arrived (schedule, trigger)
- **Effective Empty State Components**:
  - Illustration: Simple, friendly graphic conveying state
  - Headline: Clear statement of what's missing
  - Description: Brief explanation + benefit of filling
  - Primary action: Prominent button to initiate filling
  - Secondary links: Learn more, watch tutorial, see example
- **Examples**:
  - Empty watchlist: "Add stocks to track" + search bar + popular stocks
  - No portfolio: "Create your first portfolio" + portfolio wizard button
  - Blank chart: "Select a symbol to view data" + symbol search
  - No alerts: "Set up price or news alerts" + alert creation link

### 12.4 Continuous Education
- **Feature Announcements**:
  - In-app banners: Non-dismissible for critical updates
  - What's new: Modal/update log on version change
  - Tip of the day: Rotating helpful insights on dashboard
  - Webinar invites: Targeted to user interests/portfolio
- **Seasonal Campaigns**:
  - Tax time: Guides to reports, deduction tracking
  - Earnings season: How to analyze calls, estimate accuracy
  - Market volatility: Risk management tools, diversification
  - Year-end: Portfolio review checklist, rebalancing guidance
- **Community Learning**:
  - User groups: Interest-based (value investing, day trading)
  - Expert sessions: Live Q&A with analysts/strategists
  - Challenge of the week: Portfolio optimization scenarios
  - Leaderboards: For educational simulations (paper trading)
- **Feedback Loops**:
  - Post-tutorial: "Was this helpful?" with follow-up options
  - Usage-based: Suggest features based on current workflow
  - Expert review: Option to request human coach consultation
  - Success stories: How others achieved goals using platform

## 13. Performance and Optimization Guidelines

### 13.1 Performance Budgets
- **Page Load**:
  - First Contentful Paint: < 1.5s on 3G
  - Largest Contentful Paint: < 2.5s on 3G
  - Time to Interactive: < 3.5s on 3G
  - Cumulative Layout Shift: < 0.1 (minimal movement)
- **Interaction**:
  - Input delay: < 50ms (tap to visual response)
  - Animation frame rate: 60fps (16.6ms per frame)
  - Scroll jank: < 16ms per frame (no dropped frames)
  - Long tasks: < 50ms (main thread blocking work)
- **Resource Limits**:
  - JavaScript: < 150KB gzipped for initial load
  - CSS: < 50KB gzipped
  - Images: < 500KB total above-fold
  - Fonts: < 100KB (subsetted, woff2)
  - Third-party: < 100KB impact (careful vetting)
- **Network Efficiency**:
  - Requests: < 50 total (HTTP/2 multiplexing helps)
  - Critical path: < 100KB critical CSS/JS
  - Cache hit rate: > 80% for repeat visits
  - CDN: Edge delivery for static assets

### 13.2 Rendering Optimization
- **Critical Rendering Path**:
  - Inline critical CSS: Above-the-fold styles in <head>
  - Defer non-critical JS: async/defer attributes
  - Font loading: font-display: swap, preload key fonts
  - Optimize images: Proper sizing, compression, lazy loading
- **JavaScript Performance**:
  - Code splitting: Route-based and component-based lazy loading
  - Tree shaking: Eliminate unused dependencies
  - Web workers: Offload heavy calculations (indicator computations)
  - Request animation frame: For animations and visual updates
  - Memoization: Cache expensive function calls with same inputs
- **Rendering Optimization**:
  - Virtual scroll: For lists >100 items (react-window, vue-virtual-scroller)
  - CSS containment: `contain: layout paint` for independent components
  - Will-change: Sparingly for known animations/transforms
