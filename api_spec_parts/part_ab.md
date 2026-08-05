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
