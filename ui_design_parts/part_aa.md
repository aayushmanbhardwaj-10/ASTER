# UI_DESIGN.md - ASTER AI Financial Intelligence Platform UI/UX Design System

## 1. Design Philosophy and Principles
ASTER's interface design follows a data-driven, user-centered approach focused on clarity, precision, and actionable insights for financial professionals. Our design system prioritizes:
- **Clarity over complexity**: Present complex financial data in understandable ways
- **Precision and accuracy**: Ensure data integrity is visually communicated
- **Actionable insights**: Design interfaces that facilitate decision-making
- **Consistency**: Maintain predictable patterns across all touchpoints
- **Accessibility**: Ensure usability for all users regardless of ability
- **Efficiency**: Minimize cognitive load and interaction cost
- **Trust and credibility**: Professional appearance that inspires confidence

## 2. Design System Foundation

### 2.1 Color System
- **Primary Palette**: 
  - Deep Blue (#003366): Trust, stability, professionalism
  - Emerald Green (#009688): Growth, positive performance
  - Coral Red (#FF6B6B): Risk, alerts, negative indicators
  - Slate Gray (#6C757D): Neutral text, secondary elements
- **Semantic Colors**:
  - Positive: #28A745 (success, gains)
  - Negative: #DC3545 (danger, losses)
  - Warning: #FFC107 (caution, attention needed)
  - Info: #17A2B8 (neutral information)
- **Neutral Scale**: 10-step grayscale (#FFFFFF to #000000) for text, backgrounds, dividers
- **Accessibility**: All color combinations meet WCAG 2.1 AA contrast ratios

### 2.2 Typography
- **Primary Font**: Inter (sans-serif) - designed for digital interfaces, excellent readability
- **Heading Hierarchy**: 
  - H1: 2.5rem (40px) - Page titles
  - H2: 2rem (32px) - Section headers
  - H3: 1.75rem (28px) - Subsection headers
  - H4: 1.5rem (24px) - Card titles
  - Body: 1rem (16px) - Primary text
  - Caption: 0.875rem (14px) - Auxiliary text
- **Numerical Data**: Roboto Mono for financial figures (monospace for alignment)
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Line Height**: 1.5 for body, 1.2 for headings, 1.4 for captions

### 2.3 Spacing and Layout
- **Base Unit**: 8px (all spacing multiples of 8)
- **Spacing Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px
- **Container Widths**: 
  - Compact: 640px
  - Standard: 960px
  - Wide: 1280px
  - Fluid: 90% viewport width with max 1440px
- **Grid System**: 12-column grid with 24px gutters, responsive breakpoints at 640px, 768px, 1024px, 1440px
- **Border Radius**: 4px (tight), 8px (standard), 12px (soft), 16px (prominent)

### 2.4 Iconography
- **Primary Set**: Custom-designed line icons (16px, 20px, 24px) for consistency
- **Secondary Set**: Filled variants for emphasis states
- **Usage**: 
  - 16px: Inline with text, buttons
  - 20px: Toolbar items, list items
  - 24px: Primary navigation, action buttons
- **Style**: 2px stroke weight, geometric precision, financial-appropriate metaphors
- **Accessibility**: All icons have accessible labels, decorative items hidden from screen readers

## 3. Layout and Navigation

### 3.1 Application Layout
- **Global Header**: 
  - Fixed height: 64px
  - Left: Logo + product name
  - Center: Contextual navigation (breadcrumb or dashboard selector)
  - Right: User profile, notifications, settings, help
- **Sidebar Navigation** (collapsible):
  - Width: 240px (expanded), 64px (collapsed icon-only)
  - Sections: Dashboard, Analysis, Portfolio, Company Research, Tools, Collaboration, Settings
  - Icons with text labels (expanded), icons only (collapsed)
  - Active state: Blue accent bar + text/icon color change
- **Main Content Area**: 
  - Fluid width between header and footer
  - Padding: 24px standard, 16px compact, 32px spacious
  - Background: #F8F9FA (light gray) for reduced eye strain
- **Footer** (optional):
  - Height: 48px
  - Links: Documentation, Support, Legal, Version info
  - Background: #F1F3F5

### 3.2 Navigation Patterns
- **Primary Navigation**: Persistent sidebar for top-level sections
- **Secondary Navigation**: Horizontal tabs within sections for related views
- **Breadcrumbs**: Shown when depth > 2 levels
- **Contextual Menus**: Right-click and action menus for object-specific operations
- **Search**: Global Cmd/K bar (⌘K/Ctrl+K) for instant navigation
