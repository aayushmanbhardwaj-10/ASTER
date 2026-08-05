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
