- Recovery Point Objective (RPO) and Recovery Time Objective (RTO) defined and tested.

## 12. API Design Standards

### 12.1 RESTful Principles
- Use nouns for endpoints (not verbs).
- HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).
- Status codes: 2xx success, 4xx client error, 5xx server error.
- Versioning: in URL path (e.g., `/api/v1/resource`).
- Consistent naming: snake_case or camelCase for JSON keys (choose one and stick).
- Pagination: limit and offset or cursor-based.
- Filtering, sorting, and field selection as query parameters.
- HATEOAS optional but encouraged for discoverability.

### 12.2 Request/Response Format
- JSON UTF-8 for request and response bodies.
- ISO 8601 for timestamps (e.g., `2023-08-06T10:30:00Z`).
- Errors: standardized error object with code, message, and details.
- Success responses: data envelope or direct payload based on convention.
- ETags for caching and conditional requests.

### 12.3 Security
- HTTPS only; redirect HTTP to HTTPS.
- Authentication: Bearer tokens or API keys in header.
- Rate limiting: per IP or API key, with headers indicating limits.
- Input validation: strict schema validation (e.g., Joi, Yup).
