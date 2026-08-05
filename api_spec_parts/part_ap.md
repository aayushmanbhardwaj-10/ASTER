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
