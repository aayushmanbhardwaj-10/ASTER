- **SensitivityResult**: modelId, variable, lowValue, baseValue, highValue, lowResult, baseResult, highResult

### 11.5 Portfolio
- **Portfolio**: id, name, description, currency, createdAt, updatedAt, ownerId
- **Holding**: id, portfolioId, symbol, quantity, averageCost, currentPrice, marketValue, weight
- **Transaction**: id, portfolioId, symbol, transactionType, quantity, price, amount, fees, timestamp
- **PerformanceMetric**: portfolioId, periodStart, periodEnd, return, benchmarkReturn, alpha, beta, sharpe, sortino, maxDrawdown
- **Rebalancing Suggestion**: portfolioId, symbol, action, quantity, rationale

### 11.6 Company Analysis
- **CompanyProfile**: symbol, name, exchange, currency, sector, industry, marketCap, employees, description, website
