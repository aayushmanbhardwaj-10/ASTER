│   ├── reuters/
│   └── alpha-vantage/
├── accounting/               # Accounting software
│   ├── quickbooks/
│   ├── sap/
│   └── oracle/
├── crm/                      # CRM systems
│   ├── salesforce/
│   └── hubspot/
└── communication/            # Messaging and notification
    ├── twilio/
    ├── sendgrid/
    └── slack/
```

### 12.2 Webhooks
```
webhooks/                     # Incoming webhook handlers
├── github/
├── gitlab/
├── stripe/
└── paypal/
```

## 13. Environment-Specific Variations

### 13.1 Development vs Production
Development includes:
- Source maps
- Verbose logging
- Debug tools
- Hot reloading
- Mock services

Production excludes:
- Development dependencies
- Debug statements
- Test files
- Documentation files (in container)

### 13.2 Feature Flags Directory
```
feature-flags/
├── flags.json                # Master feature flag definitions
├── environments/
│   ├── development.json
│   ├── staging.json
