# Services Directory

This directory contains business logic and API services organized by concern.

## Structure

- `api/` - API route handlers and endpoints
- `auth/` - Authentication services (login, logout, token management)
- `data/` - Data access and manipulation services
- `external/` - Third-party API integrations (Bloomberg, FactSet, etc.)
- `utils/` - Shared utility functions used across services

Services should contain pure business logic without UI concerns and be easily testable.
