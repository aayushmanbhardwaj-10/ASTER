
### 10.2 Access Control
- **Role-Based Access Control (RBAC)**: Database roles mapped to application roles
- **Row-Level Security (RLS)**: Policies to restrict row visibility based on user context
- **Column-Level Security**: Masking or encryption for sensitive columns
- **Database Firewalls**: Whitelisting allowed application servers
- **Authentication**: Integration with LDAP/Active Directory, OAuth, or certificate-based auth

### 10.3 Auditing and Compliance
- **Activity Logging**: pgAudit or custom audit tables for all DDL/DML
- **Data Masking**: Dynamic masking for non-production environments
