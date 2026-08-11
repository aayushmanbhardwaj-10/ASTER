# Modules Directory

This directory contains feature-specific modules following domain-driven design principles.
Each module encapsulates a specific business domain and contains all related components,
styles, assets, and logic.

## Modules

- `auth/` - Authentication and authorization features
- `market-data/` - Financial market data handling and visualization
- `fundamentals/` - Company financials, ratios, and fundamental analysis
- `valuation/` - Valuation models and calculations (DCF, DDM, etc.)
- `portfolio/` - Portfolio management and analytics
- `company-research/` - Company analysis tools and research features
- `collaboration/` - Real-time collaboration features
- `ai-ml/` - Artificial intelligence and machine learning features
- `notifications/` - Alerting and notification system
- `admin/` - Administrative interfaces and settings

Each module should be self-contained and follow the same internal structure:

- components/ (module-specific components)
- styles/ (module-specific styles)
- assets/ (module-specific assets)
- utils/ (module-specific utilities)
- services/ (module-specific services)
