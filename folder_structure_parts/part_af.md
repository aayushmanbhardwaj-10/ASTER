│   └── animations/           # Lottie files, CSS animations
├── utils/                    # Cross-cutting utilities
│   ├── formatters/           # Date, currency, number formatting
│   ├── validators/           # Input validation logic
│   ├── helpers/              # General helper functions
│   └── constants/            # Application-wide constants
├── hooks/                    # Custom React hooks (if applicable)
├── contexts/                 # React context providers
├── routes/                   # Application routing configuration
└── App.js/tsx                # Root application component
```

### 3.4 tests/
Testing infrastructure organized by test type:
```
tests/
├── unit/                     # Unit tests for individual functions
│   ├── components/
│   ├── services/
│   └── utils/
├── integration/              # Integration tests
│   ├── api/
│   └── database/
├── e2e/                      # End-to-end tests (Cypress/Playwright)
