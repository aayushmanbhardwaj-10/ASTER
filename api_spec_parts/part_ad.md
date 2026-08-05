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
