
### 6.4 Dependency Management
- Regularly update dependencies to patch vulnerabilities.
- Use tools like Dependabot, Snyk, or OWASP Dependency-Check.
- Ban known-vulnerable packages.
- Review licenses of third-party components.
- Lockfile committed to repository (package-lock.json, yarn.lock, pip lock).

### 6.5 Logging and Monitoring
- Log authentication attempts (success and failure).
- Log access to sensitive data.
- Do not log passwords, tokens, or PII.
- Use structured logging (JSON) for easy parsing.
- Monitor for anomalous behavior (brute force, privilege escalation).
- Set up alerts for security events.

## 7. Performance Standards

### 7.1 Response Times
- API endpoints: 95th percentile < 200ms for cached data, < 2s for complex queries.
- Page load: First Contentful Paint < 1.5s on 3G.
- Time to Interactive: < 3.5s on 3G.
- Database queries: < 100ms for simple queries, < 1s for complex reports.

### 7.2 Optimization Techniques
- Database indexing: based on query patterns (EXPLAIN ANALYZE).
- Caching: Redis for frequently accessed data, CDN for static assets.
- Lazy loading: for images, components, and routes.
- Pagination: cursor-based for large datasets.
- Batch processing: for bulk operations.
