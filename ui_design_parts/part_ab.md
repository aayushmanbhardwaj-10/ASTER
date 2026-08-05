- **History**: Back/forward navigation with visual indication
- **Deep Linking**: Hash-based URLs for shareable states

## 4. Core Components

### 4.1 Data Display Components
- **Data Tables**:
  - Features: Sorting, filtering, column selection, pagination, row selection
  - Striped rows: #FFFFFF / #F8F9FA
  - Hover state: #E9ECEF
  - Selected: #E3F2FD with blue border
  - Empty state: Illustrative guidance with action button
- **Financial Cards**:
  - Metric display: Large value, label, trend indicator (up/down/neutral)
  - Variants: Primary (blue border), Success (green border), Warning (yellow border), Danger (red border)
  - Interactive: Hover elevation, click to drill down
  - Sparkline integration: Mini-charts showing trend
- **Badges and Tags**:
  - Status indicators: Pill shapes with appropriate semantic colors
  - Filter tags: Removable with × icon
  - Category tags: outline style for non-interactive
- **Tooltips and Popovers**:
  - Trigger: Hover/focus (delay 100ms) or click
  - Positioning: Auto-adjusting with arrow pointer
  - Content: Formatted text, rich data, actions
  - Dark variant: For use on dark backgrounds

### 4.2 Input and Control Components
- **Form Elements**:
  - Inputs: 44px min height, 2px border, 4px radius, focus ring (2px blue)
  - Selects: Same as inputs with dropdown indicator
  - Textareas: Resizable vertically, min 3 rows
  - Checkboxes/Radios: 20x20px with 2px border, checked state blue fill
  - Toggles: 40x20px track, 20px thumb, smooth transition
- **Validation States**:
  - Default: Border #CED4DA
  - Focus: Border #007BFF + shadow
  - Error: Border #DC3545 + icon
  - Success: Border #28A745 + icon
  - Warning: Border #FFC107 + icon
- **Date and Time Pickers**:
  - Compact inline calendars
  - Keyboard navigation support
  - Preset ranges (Today, YTD, 1M, 3M, 1Y, Custom)
  - Timezone selectors with UTC offset display
- **Financial Inputs**:
  - Currency: Auto-formatting, symbol positioning (prefix/suffix based on locale)
  - Percentage: % symbol, decimal precision control
  - Large numbers: Abbreviation (K, M, B, T) with hover to show full value
  - Ratios: Fixed decimal places (typically 2-4)

### 4.3 Feedback and Notification Components
- **Alerts and Notifications**:
  - Inline: Banner style at top of content area
  - Toast: Bottom-right corner, auto-dismiss (5s), pause on hover
  - Modal: Blocking dialogs for critical actions
  - Types: Info, Success, Warning, Error with corresponding icons/colors
- **Loading States**:
  - Skeleton screens: Gray shimmering placeholders
  - Spinners: 24px/32px/48px sizes, 2px stroke
  - Progress bars: For determinate operations
  - Empty states: Illustrated guidance with primary action
- **Modals and Drawers**:
  - Modal: Centered, max-width 500px (small), 700px (medium), 900px (large)
  - Drawer: Slide-in from right, 360px width (expandable to 500px)
  - Backdrop: Semi-transparent black (rgba(0,0,0,0.5))
  - Focus trap: Keyboard navigation confined to modal

## 5. Data Visualization Guidelines

### 5.1 Chart Types and Usage
- **Line Charts**: 
  - Trends over time (prices, performance, metrics)
  - Multiple series with distinct colors/patterns
  - Tooltips with exact values, percentage change
  - Interactive: Zoom, pan, series toggle
- **Bar/Column Charts**:
  - Comparisons (period-over-period, segment breakdown)
  - Horizontal for long labels, vertical for time series
  - Value labels on bars when space permits
  - Stacked for part-to-whole relationships
- **Area Charts**:
  - Cumulative values, volume with price
  - Stacked area for contribution analysis
  - Transparency (30% opacity) for overlap visibility
- **Scatter Plots**:
  - Correlation analysis, risk vs return
  - Trend lines, quadrant labeling
  - Hover tooltips with multiple data points
- **Heatmaps**:
  - Correlation matrices, performance grids
  - Diverging color scales (negative-neutral-positive)
  - Cell values on hover/click
- **Pie and Donut Charts**:
  - Limited to 5 segments max
  - Use only for clear part-to-whole (avoid for comparisons)
  - Always include labels or legend
- **Gauges and Meters**:
  - KPI progress, utilization percentages
  - Semi-circle or full circle variants
  - Threshold indicators (poor/fair/good/excellent)

### 5.2 Chart Styling Standards
