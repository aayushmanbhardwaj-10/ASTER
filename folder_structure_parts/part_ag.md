│   ├── flows/
│   └── specifications/
├── performance/              # Load and stress testing
│   ├── scenarios/
│   └── benchmarks/
├── visual/                   # Visual regression testing
│   ├── baselines/
│   └── diffs/
├── fixtures/                 # Test data and mocks
│   ├── api/
│   └── database/
├── helpers/                  # Test utilities and setup
└── config/                   # Test configuration files
```

### 3.5 configs/
Environment and application configurations:
```
configs/
├── environments/             # Environment-specific configs
│   ├── development.js
│   ├── staging.js
│   └── production.js
├── database/                 # Database connection configs
├── logging/                  # Logging framework configuration
├── feature-flags/            # Feature toggle definitions
├── third-party/              # External service configurations
│   ├── api-keys.json.example
