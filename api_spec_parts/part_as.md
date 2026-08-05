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
