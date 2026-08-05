│   └── webhooks/
├── webpack/                  # Webpack configuration (if used)
├── jest/                     # Jest testing configuration
└── eslint/                   # ESLint configuration
```

### 3.6 scripts/
Automation and utility scripts:
```
scripts/
├── build/                    # Build and compilation scripts
│   ├── dev.sh
│   ├── prod.sh
│   └── docker-build.sh
├── deploy/                   # Deployment scripts
│   ├── staging.sh
│   └── production.sh
├── test/                     # Test execution scripts
│   ├── unit.sh
│   ├── integration.sh
│   └── e2e.sh
├── db/                       # Database management scripts
│   ├── migrate.sh
│   ├── seed.sh
│   └── backup.sh
├── utils/                    # General utility scripts
│   ├── code-format.sh
│   ├── license-check.sh
│   └── security-scan.sh
├── setup/                    # Environment setup scripts
│   ├── dev-env.sh
│   └── ci-env.sh
