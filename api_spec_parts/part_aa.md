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
