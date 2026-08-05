- Clean up test data after tests unless using transactions.

## 6. Security Standards

### 6.1 Authentication and Authorization
- Passwords: bcrypt with salt factor >= 12.
- Multi-factor authentication (MFA) for admin and sensitive operations.
- Session management: secure, HttpOnly cookies; short expiration.
- OAuth 2.0 and OpenID Connect for third-party auth.
- Role-Based Access Control (RBAC) with least privilege principle.
- Regular access reviews and permission audits.

### 6.2 Data Protection
- Encryption at rest: AES-256 for databases and file storage.
- Encryption in transit: TLS 1.2+ for all communications.
- Key management: Use hardware security modules (HSM) or cloud KMS.
- PII minimization: collect only what is necessary.
- Data masking in non-production environments.
- Regular vulnerability scanning and penetration testing.

### 6.3 Input Validation and Output Encoding
- Validate all input: type, length, format, range.
- Use allowlists over blocklists where possible.
- Output encoding for HTML, JavaScript, and SQL contexts.
- Use parameterized queries or ORMs to prevent SQL injection.
- Sanitize user-generated content before display.
- Implement Content Security Policy (CSP) headers.
