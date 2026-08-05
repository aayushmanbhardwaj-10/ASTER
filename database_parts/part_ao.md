│   └── cash_flow_items (one-to-many)
```
- Each financial statement represents a filing (10-Q, 10-K) for a specific period
- Line items linked to standardized taxonomies (US GAAP, IFRS)
- Support for restatements and revisions

### 6.3 Valuation Models
```
valuation_models
├── model_assumptions (one-to-many)
├── model_calculations (one-to-many)
├── scenario_analysis (one-to-many)
└── sensitivity_analysis (one-to-many)
```
- Models can be versioned and compared
- Assumptions drive calculations which produce outputs
- Sensitivity analysis shows impact of assumption changes
