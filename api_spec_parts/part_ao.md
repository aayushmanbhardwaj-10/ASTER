
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
