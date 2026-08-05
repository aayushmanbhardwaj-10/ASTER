- **End-to-End (E2E) Tests**: Test user flows from UI to backend.
- **Performance Tests**: Load, stress, and scalability testing.
- **Security Tests**: Vulnerability scanning and penetration testing.

### 5.2 Test Coverage
- Minimum 80% line coverage for new code.
- Critical paths (authentication, financial calculations) require 90%+.
- Coverage reports generated on each build.
- Tests that don't add value (e.g., trivial getters/setters) may be excluded.

### 5.3 Test Quality
- Tests should be independent and repeatable.
- Use descriptive test names: `should do X when Y`.
- Follow Arrange-Act-Assert (AAA) pattern.
- Mock external dependencies (databases, APIs).
- Test both positive and negative cases.
- Avoid testing implementation details; focus on behavior.
- Use test factories or fixtures for consistent test data.

### 5.4 Test Frameworks
- JavaScript/TypeScript: Jest, React Testing Library, Cypress.
- Python: Pytest, Unittest.
- SQL: tSQLt or custom scripts.
- Continuous Integration: GitHub Actions, Jenkins, or GitLab CI.

### 5.5 Test Data
- Use anonymized or synthetic data for testing.
- Never use production data in test environments.
- Seed databases with known test data.
