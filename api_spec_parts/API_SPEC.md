# API_SPEC.md - ASTER AI Financial Intelligence Platform API Specification

## 1. Overview
The ASTER API provides programmatic access to financial data, analytics, valuation models, portfolio management, and collaboration features. This RESTful API follows JSON:API specification where applicable and uses standard HTTP response codes.

## 2. Authentication
- All API requests require authentication via Bearer token in Authorization header
- Tokens obtained via OAuth 2.0 Authorization Code flow or API keys for service-to-service communication
- Token expiration: 1 hour for access tokens, 7 days for refresh tokens
- Example: `Authorization: Bearer <access_token>`

## 3. Rate Limiting
- Default rate limit: 1000 requests per hour per user
- Burst allowance: 100 requests per minute
- Rate limit headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- HTTP 429 response when limit exceeded with Retry-After header

## 4. Error Handling
- Standard HTTP status codes used (2xx success, 4xx client errors, 5xx server errors)
- Error responses follow JSON:API error format:
  ```json
  {
    "errors": [{
      "id": "unique-error-id",
      "status": "400",
      "code": "validation_error",
      "title": "Invalid request parameters",
      "detail": "Symbol parameter is required",
      "source": { "parameter": "symbol" }
    }]
  }
  ```
- Validation errors include field-specific details

## 5. Versioning
- API versioned via URL path: `/api/v1/`
- Backward compatibility maintained within major versions
- Deprecation notices provided 6 months in advance
- Version headers: `API-Version: 1.0`

## 6. Data Formats
- Request/Response body: JSON UTF-8
- Dates: ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
- Monetary values: Decimal strings to preserve precision
- Percentages: Decimal strings (e.g., "0.0525" for 5.25%)
- Large numbers: String representation to avoid JSON number precision limits

## 7. Pagination
- Cursor-based pagination for large datasets
- Parameters: `page[limit]` (default 100, max 1000), `page[cursor]`
- Response includes `links` object with `next` and `prev` URLs
- Total count available in `meta.count` when requested

## 8. Filtering, Sorting, and Field Selection
- Filtering: `filter[field]=value` syntax with operators (`eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `not_in`, `contains`)
- Sorting: `sort=field1,-field2` (prefix `-` for descending)
- Field selection: `fields[resource-type]=field1,field2,field3`

## 9. Idempotency
- POST, PATCH, DELETE requests can be made idempotent using `Idempotency-Key` header
- Idempotency keys expire after 24 hours
- Recommended for financial transactions and non-idempotent operations

## 10. Endpoints

### 10.1 Authentication Endpoints
- `POST /auth/token` - Exchange authorization code for tokens
- `POST /auth/refresh` - Refresh access token
- `POST /auth/revoke` - Revoke refresh token
- `GET /auth/userinfo` - Get authenticated user profile

### 10.2 Market Data Endpoints
- `GET /market/data/{symbol}` - Get latest quote for symbol
- `GET /market/data/{symbol}/history` - Get historical price data
- `GET /market/screener` - Screen stocks based on criteria
- `GET /market/indices` - Get major index values
- `GET /market/forex/{pair}` - Get forex rates
- `GET /market/crypto/{symbol}` - Get cryptocurrency data

### 10.3 Fundamental Data Endpoints
- `GET /fundamentals/{symbol}/statements` - Get financial statements
- `GET /fundamentals/{symbol}/ratios` - Get financial ratios
- `GET /fundamentals/{symbol}/estimates` - Get analyst estimates
- `GET /fundamentals/{symbol}/events` - Get corporate actions
- `GET /fundamentals/search` - Search companies by criteria

### 10.4 Valuation Endpoints
- `POST /valuation/models` - Create a valuation model
- `GET /valuation/models/{model_id}` - Get valuation model details
- `PUT /valuation/models/{model_id}` - Update valuation model
- `DELETE /valuation/models/{model_id}` - Delete valuation model
- `POST /valuation/models/{model_id}/calculate` - Calculate valuation
- `GET /valuation/models/{model_id}/sensitivity` - Run sensitivity analysis
- `GET /valuation/models/{model_id}/scenarios` - Get scenario analysis results
- `GET /valuation/templates` - Get predefined valuation templates

### 10.5 Portfolio Endpoints
- `GET /portfolios` - List user portfolios
- `POST /portfolios` - Create new portfolio
- `GET /portfolios/{portfolio_id}` - Get portfolio details
- `PUT /portfolios/{portfolio_id}` - Update portfolio
- `DELETE /portfolios/{portfolio_id}` - Delete portfolio
- `GET /portfolios/{portfolio_id}/holdings` - Get portfolio holdings
- `POST /portfolios/{portfolio_id}/holdings` - Add holding to portfolio
- `PUT /portfolios/{portfolio_id}/holdings/{holding_id}` - Update holding
- `DELETE /portfolios/{portfolio_id}/holdings/{holding_id}` - Remove holding
- `POST /portfolios/{portfolio_id}/transactions` - Record transaction
- `GET /portfolios/{portfolio_id}/performance` - Get performance metrics
- `POST /portfolios/{portfolio_id}/rebalance` - Generate rebalancing suggestions

### 10.6 Company Analysis Endpoints
- `GET /companies/{symbol}` - Get company profile
- `GET /companies/{symbol}/news` - Get company news
- `GET /companies/{symbol}/filings` - Get SEC filings
- `GET /companies/{symbol}/transcripts` - Get earnings call transcripts
- `GET /companies/{symbol}/estimates` - Get analyst estimates
- `GET /companies/{symbol}/peers` - Get peer companies
- `GET /companies/{symbol}/ownership` - Get ownership breakdown
- `GET /companies/search` - Search companies

### 10.7 Collaboration Endpoints
- `GET /collab/models` - List financial models
- `POST /collab/models` - Create new financial model
- `GET /collab/models/{model_id}` - Get model details
- `PUT /collab/models/{model_id}` - Update model
- `DELETE /collab/models/{model_id}` - Delete model
- `GET /collab/models/{model_id}/versions` - Get model version history
- `POST /collab/models/{model_id}/versions` - Create new model version
- `GET /collab/models/{model_id}/elements` - Get model elements
- `POST /collab/models/{model_id}/elements` - Add model element
- `GET /collab/models/{model_id}/comments` - Get model comments
- `POST /collab/models/{model_id}/comments` - Add comment to model
- `POST /collab/models/{model_id}/share` - Share model with users
- `GET /collab/notifications` - Get user notifications

### 10.8 AI/ML Endpoints
- `POST /ai/predictions` - Get ML model predictions
- `GET /ai/models` - List available AI models
- `GET /ai/models/{model_id}` - Get AI model details
- `POST /ai/models/{model_id}/train` - Train custom model
- `GET /ai/explanations` - Get explain model predictions
- `POST /ai/sentiment` - Analyze text sentiment
- `POST /ai/summarize` - Summarize financial documents
- `GET /ai/anomalies/{symbol}` - Detect anomalies in stock data
- `POST /ai/clustering` - Perform clustering analysis

### 10.9 User & Account Endpoints
- `GET /users/profile` - Get current user profile
- `PUT /users/profile` - Update user profile
- `GET /users/preferences` - Get user preferences
- `PUT /users/preferences` - Update user preferences
- `GET /users/api-keys` - List API keys
- `POST /users/api-keys` - Create new API key
- `DELETE /users/api-keys/{key_id}` - Delete API key
- `GET /users/activity` - Get user activity log

### 10.10 Administrative Endpoints (Admin only)
- `GET /admin/users` - List users
- `POST /admin/users` - Create user
- `GET /admin/users/{user_id}` - Get user details
- `PUT /admin/users/{user_id}` - Update user
- `DELETE /admin/users/{user_id}` - Delete user
- `GET /admin/usage` - Get platform usage metrics
- `GET /admin/health` - System health check
- `GET /admin/metrics` - Prometheus metrics endpoint

## 11. Data Models

### 11.1 Common Objects
- **Meta**: Pagination and response metadata
- **Links**: Pagination and related resource links
- **Error**: Error details as per JSON:API spec

### 11.2 Market Data
- **Quote**: symbol, price, change, changePercent, volume, timestamp
- **HistoricalPrice**: timestamp, open, high, low, close, volume
- **Index**: name, value, change, changePercent
- **ForexRate**: pair, bid, ask, timestamp
- **CryptoQuote**: symbol, price, volume24h, marketCap, timestamp

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
- **SensitivityResult**: modelId, variable, lowValue, baseValue, highValue, lowResult, baseResult, highResult

### 11.5 Portfolio
- **Portfolio**: id, name, description, currency, createdAt, updatedAt, ownerId
- **Holding**: id, portfolioId, symbol, quantity, averageCost, currentPrice, marketValue, weight
- **Transaction**: id, portfolioId, symbol, transactionType, quantity, price, amount, fees, timestamp
- **PerformanceMetric**: portfolioId, periodStart, periodEnd, return, benchmarkReturn, alpha, beta, sharpe, sortino, maxDrawdown
- **Rebalancing Suggestion**: portfolioId, symbol, action, quantity, rationale

### 11.6 Company Analysis
- **CompanyProfile**: symbol, name, exchange, currency, sector, industry, marketCap, employees, description, website
- **NewsArticle**: id, symbol, headline, summary, content, source, publishedAt, sentiment
- **Filing**: id, symbol, formType, filingDate, periodOfReport, url, size
- **Transcript**: id, symbol, quarter, year, speaker, sentiment, keyTopics
- **Peer**: symbol, relationType, similarityScore

### 11.7 Collaboration
- **FinancialModel**: id, name, description, ownerId, isPublic, tags, createdAt, updatedAt
- **ModelVersion**: id, modelId, versionNumber, changelog, createdBy, createdAt
- **ModelElement**: id, modelId, elementType, label, value, formula, dependencies
- **Comment**: id, modelId, elementId, authorId, content, createdAt
- **Notification**: id, userId, type, title, message, isRead, createdAt, relatedObjectId, relatedObjectType

### 11.8 AI/ML
- **PredictionRequest**: modelId, inputData (JSON), options (JSON)
- **PredictionResponse**: modelId, prediction, confidence, explanation (JSON)
- **ModelInfo**: id, name, type, description, status, accuracyMetrics, createdAt, updatedAt
- **SentimentResult**: text, sentiment (positive/negative/neutral), score, entities
- **Summary**: originalText, summaryText, compressionRatio, keyPoints

## 12. WebSocket API (Real-time Data)
- Connection: `wss://api.aster.ai/ws`
- Authentication: Send auth token in first message: `{"action": "auth", "token": "jwt_token"}`
- Subscriptions: 
  - Market data: `{"action": "subscribe", "channel": "quotes", "symbols": ["AAPL", "GOOGL"]}`
  - Portfolio updates: `{"action": "subscribe", "channel": "portfolio", "portfolioId": "123"}`
  - News alerts: `{"action": "subscribe", "channel": "news", "symbols": ["MSFT"]}`
- Messages:
  - Quote update: `{"type": "quote", "symbol": "AAPL", "price": 150.25, "change": 1.25, "timestamp": "..."}`
  - Trade execution: `{"type": "trade", "symbol": "AAPL", "price": 150.25, "quantity": 100, "timestamp": "..."}`
  - System message: `{"type": "system", "message": "Market data delayed by 15 minutes", "level": "info"}`

## 13. SDKs and Client Libraries
- Official SDKs available for:
  - JavaScript/TypeScript (browser and Node.js)
  - Python
  - Java
  - .NET
  - Go
- Features: automatic retries, token refresh, request/response logging, error handling
- Installation: Available via npm, PyPI, Maven, NuGet, Go modules

## 14. Security Considerations
- All data transmitted over TLS 1.2+
- Sensitive data encrypted at rest using AES-256
- Regular security audits and penetration testing
- OWASP Top 10 protections implemented
- API key rotation recommended every 90 days
- IP whitelisting available for enterprise customers
- Request signing for high-value transactions (HMAC-SHA256)

## 15. Sandbox Environment
- Separate sandbox environment for testing: `https://sandbox-api.aster.ai`
- Identical API structure to production
- Pre-populated with sample data
- Rate limits: 100 requests/hour
- Data resets daily at 00:00 UTC
- No real financial transactions processed

## 16. API Explorer and Documentation
- Interactive API documentation at https://docs.aster.io
- OpenAPI 3.0 specification available at `/openapi.json`
- Postman collection available for download
- Code snippets in multiple languages for each endpoint
- Try-it-out feature with test credentials

## 17. Changelog
### v1.2.0 (Upcoming)
- Added options chain endpoints
- Enhanced cryptocurrency data
- New ESG scoring metrics
- Webhook delivery improvements

### v1.1.0 (Current)
- Portfolio rebalancing API
- AI sentiment analysis endpoints
- Improved pagination performance
- Bulk operation support for holdings

### v1.0.0 (Initial Release)
- Core market and fundamentals data
- Basic valuation models
- Portfolio tracking
- User management
- Documentation and SDKs

## 18. Support and SLA
- Developer support: devsupport@aster.io
- Status page: https://status.aster.io
- SLA: 99.9% uptime for API gateway
- Response times: <200ms 95th percentile for cached data
- Deprecation policy: 6-month notice for breaking changes
- Beta features: Clearly marked, subject to change

## 19. Example Usage

### Getting Stock Quote
```bash
curl -H "Authorization: Bearer $TOKEN" \
     "https://api.aster.ai/api/v1/market/data/AAPL"
```

### Creating a Valuation Model
```bash
curl -X POST "https://api.aster.ai/api/v1/valuation/models" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
        "data": {
          "type": "valuation-models",
          "attributes": {
            "name": "AAPL DCF Model",
            "modelType": "DCF",
            "symbol": "AAPL",
            "baseDate": "2023-12-31"
          }
        }
      }'
```

### Getting Portfolio Performance
```bash
curl -H "Authorization: Bearer $TOKEN" \
     "https://api.aster.ai/api/v1/portfolios/123/performance?period=1y"
```

## 20. Conclusion
The ASTER API provides comprehensive access to financial data and analytics capabilities designed for developers building financial applications. With robust security, comprehensive documentation, and scalable infrastructure, it enables the creation of sophisticated financial tools and services.

For the latest information, visit https://docs.aster.io or contact the developer relations team at devrel@aster.io.
