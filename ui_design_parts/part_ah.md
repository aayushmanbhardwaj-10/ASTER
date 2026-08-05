- **Helpful**: Anticipate next question, provide guidance
- **Error Messages**:
  - Problem + Solution: "Invalid date format. Use MM/DD/YYYY"
  - Avoid technical jargon: "Validation failed" → "Please check your entry"
  - Friendly tone: Avoid blame ("You entered" vs "The system received")
- **Placeholder Text**:
  - Examples: "e.g., john@example.com" (not "Enter email")
  - Format hints: "(XXX) XXX-XXXX" for phone
  - Never replace labels: Always have visible label above/beside
- **Loading States**:
  - Progress indication: "Loading prices..." vs "Please wait"
  - Skeleton labels: "Company Name", "Current Price"
  - Estimated time: "Updating data (~15s)" for longer operations

### 11.3 Labeling and Naming Conventions
- **UI Controls**:
  - Buttons: Verb + object ("Create Portfolio", not "Submit")
  - Tabs: Nouns ("Holdings", "Performance", not "View Holdings")
  - Checkboxes: Positive statement ("Include dividends in calculation")
  - Radio groups: Question as group label, options as answers
  - Dropdowns: Clear descriptor ("Select time period")
- **Data Labels**:
  - Units: Explicit where ambiguous ("Revenue (USD millions)")
  - Time periods: Standardized ("Q1 2024", not "March Quarter")
  - Financial terms: Consistent with GAAP/IFRS where applicable
  - Abbreviations: Only when space-constrained, with tooltip expansion
- **Navigation and Wayfinding**:
  - Path names: Clear hierarchy ("Portfolio > Holdings > AAPL")
  - Icons: Always paired with text unless universally recognized
  - Breadcrumbs: Show full path, clickable segments
  - Search: Clear placeholder ("Search symbols, companies...")

### 11.4 Error Prevention and Guidance
- **Preventive Guidance**:
  - Inline: "Password must contain 8+ chars, number & special char"
  - Before action: "This will delete all associated data. Continue?"
  - Format examples: Show expected format in field or helper text
- **Contextual Help**:
  - Tooltips: Short definitions (1-2 lines) for terms/icons
  - Help icons: (i) expandable to full explanation with examples
  - Guided tours: Step-by-step for complex workflows
  - Video tutorials: Embedded for multi-step procedures
- **Financial Specifics**:
  - Term definitions: P/E ratio, EBITDA, beta with examples
  - Calculation transparency: Show formula or methodology link
  - Data freshness: "As of 15:30 EST" or "End of day"
  - Limitations: Clearly state if data is delayed, estimated, or sample
- **Multilingual Considerations**:
  - Text expansion: UI accommodates up to 30% growth (German)
  - Right-to-left: Mirror layouts, right-aligned numbers
  - Culturally specific: Examples, holidays, fiscal year variations
  - Legal terms: Locally accurate translations reviewed by counsel

## 12. User Onboarding and Education

### 12.1 First-Time User Experience
- **Welcome Flow**:
  - Progressive disclosure: Essentials first, advanced later
  - Personalization: Role selection (investor/trader/advisor), goals
  - Sample data: Pre-populated watchlist with familiar companies
  - Quick wins: Guided first action (create watchlist, view quote)
- **Setup Wizard**:
  - Step 1: Profile basics (name, email, time zone)
  - Step 2: Investment profile (experience, goals, risk tolerance)
  - Step 3: Data preferences (markets, sectors, update frequency)
  - Step 4: Interface preferences (theme, density, chart style)
  - Step 5: Connect accounts (optional brokerage/bank linking)
- **Educational Overlay**:
  - Coach marks: Highlight key areas with callouts
  - Tooltip sequence: Explain iconography and navigation
  - Skip option: Always available, progress saved
  - Completion reward: Badge or points toward premium feature trial

### 12.2 Learning Resources
- **In-App Education**:
  - ToolTips: Context-sensitive on icons/terms
  - Mini-lessons: 60-second videos in sidebar/widget
  - Glossary: Searchable, clickable terms open definition popup
  - Walkthroughs: Interactive simulations (no real data affected)
  - Sandbox mode: Practice with fake data, reset button
- **Knowledge Base**:
  - Searchable: Full-text search with faceted filtering
  - Categorized: By feature, use case, skill level
  - Multimedia: Articles, videos, infographics, checklists
  - Community: User tips, templates, shared models
  - Localized: Available in supported languages
- **Progress Tracking**:
