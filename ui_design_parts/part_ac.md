- **Color Usage**:
  - Semantic meaning over aesthetics (green=up, red=down)
  - Colorblind-safe palettes (avoid red/green alone)
  - Maximum 6 distinct colors per chart
  - Patterns/textures for B&W printing accessibility
- **Typography in Charts**:
  - Axis labels: 12pt, 500 weight, #6C757D
  - Tick labels: 11pt, 400 weight, #ADB5BD
  - Title: 14pt, 600 weight, #212529
  - Legend: 12pt, 400 weight, #495057
- **Interactions**:
  - Hover: Tooltip with crosshair, series highlight
  - Click: Drill-down, filter application, legend toggle
  - Brush/zoom: For time-series exploration
  - Reset: Double-click or reset button
- **Responsiveness**:
  - Mobile: Stacked legends, simplified tooltips
  - Touch targets: Minimum 44x44px for interactive elements
  - Orientation: Landscape-preferred for complex charts

### 5.3 Financial-Specific Visualizations
- **Candlestick Charts**:
  - Traditional OHLC with volume pane below
  - Bullish: Green/white, Bearish: Red/black
  - Moving averages, Bollinger bands overlays
- **Waterfall Charts**:
  - Income statement decomposition
  - Starting/base value, intermediate floats, ending total
  - Color code: Revenue (+), Expenses (-), Net (=)
- **Funnel Charts**:
  - Sales pipeline, user conversion flows
  - Segment widths proportional to values
  - Conversion rates between stages
- **Gantt Charts**:
  - Project timelines, bond maturities
  - Milestone markers, dependency lines
  - Resource allocation views
- **Heat Maps for Matrices**:
  - Sector performance, factor correlations
  - Interactive sorting, filtering
  - Cell values with conditional formatting

## 6. Platform Sections and User Flows

### 6.1 Dashboard Experience
- **Default View**: Configurable widget dashboard
- **Widget Types**:
  - Market Overview: Major indices, sectors, currencies
  - Watchlist: Personalized securities with real-time quotes
  - Performance: Portfolio vs bencherts over time
  - Alerts: Price targets, news, earnings
  - News Feed: Customizable sources and topics
  - Quick Actions: Create model, run screen, new trade
- **Layout Customization**:
  - Drag-and-drop widget positioning
  - Resizable widgets (small/medium/large)
  - Save/load layouts
  - Reset to default
- **Personalization**:
  - Greeting with user name
  - Recommended based on usage patterns
  - Today's agenda (meetings, deadlines)
  - Market status banner (open/closed/pre/post)

### 6.2 Market Data and Screening
- **Quote Page**:
  - Header: Symbol, company name, exchange, currency
  - Price display: Large current price, change ($ and %), day range
  - Key metrics: Market cap, P/E, dividend yield, volume
  - Charts: Intraday, 1D, 1W, 1M, 3M, YTD, 1Y, 5Y, MAX
  - Depth: Level 2 bid/ask with size
  - Fundamentals: TTM, forward, quarterly trends
  - News: Latest headlines with sentiment
  - Related: Peers, ETFs containing, institutional holders
- **Screeners**:
  - Wizard interface: Step-by-step criteria building
  - Saved screens: Name, description, schedule
  - Real-time vs delayed data toggle
  - Results grid: Sortable, exportable, chart-preview column
  - Backtesting: Historical performance simulation
  - Alert creation: From results with notification preferences

### 6.3 Portfolio Management
- **Portfolio Overview**:
  - Summary cards: Total value, day change, period return
  - Allocation: Asset class, sector, geographic pie charts
  - Performance: Cumulative vs benchmark, drawdown chart
  - Holdings: Table with P/L, % weight, quantity, cost basis
  - Activity: Recent transactions, dividends, corporate actions
- **Position Detail**:
  - Security quote pane (mini-version)
  - Performance: Holding-specific vs benchmark
  - Transactions: Filterable history
  - Analytics: Cost basis methods, holding period
  - Tax: Realized/unrealized gains, holding periods
- **Trading Interface**:
  - Order ticket: Buy/sell, quantity, price type (market/limit/stop)
  - Preview: Estimated cost, commission, impact
  - Validation: Sufficient funds, position limits
  - History: Order status, fills, cancellations
  - Advanced: Brackets, OCO, algos (institutional)

### 6.4 Financial Modeling and Valuation
- **Model Canvas**:
  - Left panel: Assumptions panel (inputs)
  - Center: Worksheet (rows=line items, columns=time periods)
  - Right panel: Results/outputs (charts, metrics, sensitivities)
