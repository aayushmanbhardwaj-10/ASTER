
## 6. Key Tables and Relationships

### 6.1 Companies and Securities
```
companies
├── securities (one-to-many)
│   ├── security_prices (one-to-many, time-series)
│   ├── fundamentals (one-to-many, periodic)
│   └── filings (one-to-many)
```
- Companies can have multiple securities (different share classes)
- Securities link to exchanges and have security types (common stock, preferred, bond, etc.)

### 6.2 Financial Statements
```
companies
├── financial_statements (one-to-many, per period)
│   ├── income_statement_items (one-to-many)
│   ├── balance_sheet_items (one-to-many)
