- **user_roles**: Many-to-many mapping of users to roles
- **role_permissions**: Many-to-many mapping of roles to permissions
- **sessions**: Active user sessions with token information
- **audit_log**: Comprehensive audit trail for security-relevant events

### 4.2 Company and Entity Schema
- **companies**: Core company information (name, ticker, sector, industry)
- **exchanges**: Stock exchange information
- **securities**: Individual securities (stocks, bonds, ETFs, etc.)
- **security_prices**: Time-series pricing data (OHLCV)
- **fundamentals**: Fundamental financial data (market cap, P/E, dividend yield, etc.)
- **filings**: Regulatory filings (10-K, 10-Q, 8-K, etc.) with metadata
