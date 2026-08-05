
### 11.3 Fundamentals
- **FinancialStatement**: id, symbol, statementType, periodEndDate, fiscalPeriod, fiscalYear, currency
- **FinancialStatementItem**: statementId, concept, value, unit, format
- **Ratio**: symbol, ratioName, value, period, fiscalYear
- **Estimate**: symbol, estimateType, period, meanEstimate, highEstimate, lowEstimate, numAnalysts
- **CorporateAction**: symbol, actionType, exDate, recordDate, payDate, value

### 11.4 Valuation
- **ValuationModel**: id, name, modelType, symbol, baseDate, currency, status, createdAt, updatedAt
- **ModelAssumption**: modelId, name, value, description, isEditable
- **ModelCalculation**: modelId, calculationName, value, currency, asOfDate
- **ScenarioResult**: modelId, scenarioName, keyMetrics (JSON)
