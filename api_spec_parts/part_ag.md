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
