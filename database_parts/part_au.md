- **CHECK**: For domain validation (e.g., price >= 0, percentage between 0 and 100)
- **FOREIGN KEY**: For referential integrity between related tables
- **EXCLUSION**: For preventing overlapping date ranges (using btree_gist extension)

### 9.2 Triggers and Rules
- **Data Validation Triggers**: Complex validation rules beyond CHECK constraints
- **Audit Triggers**: Automatic population of audit columns (created_at, updated_at, etc.)
- **Derived Data Triggers**: Auto-calculation of dependent fields
- **Constraint Triggers**: For complex cross-table constraints

### 9.3 Data Quality Measures
- **Validation Layers**: Application-level validation before database writes
