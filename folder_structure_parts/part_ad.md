    ├── product-governance.md
    ├── sprint-governance.md
    ├── release-governance.md
    └── adr-policy.md
```

### 3.3 src/
Main source code directory following domain-driven design:
```
src/
├── components/               # Shared UI components
│   ├── atoms/                # Basic building blocks (buttons, inputs)
│   ├── molecules/            # Groups of atoms (form fields, cards)
│   ├── organisms/            # Complex UI sections (headers, dashboards)
│   └── templates/            # Page layouts
├── modules/                  # Feature-specific modules
│   ├── auth/                 # Authentication and authorization
│   ├── market-data/          # Financial market data handling
│   ├── fundamentals/         # Company financials and ratios
│   ├── valuation/            # Valuation models and calculations
│   ├── portfolio/            # Portfolio management
│   ├── company-research/     # Company analysis tools
│   ├── collaboration/        # Real-time collaboration features
