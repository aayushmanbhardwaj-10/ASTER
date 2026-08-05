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
