
## 8. Indexing Strategy

### 8.1 Primary Indexes
- **Primary Keys**: Clustered indexes on primary key columns (usually ID columns)
- **Unique Constraints**: Unique indexes where business rules require uniqueness

### 8.2 Foreign Key Indexes
- Automatic indexing of foreign key columns for join performance
- Composite foreign keys covered by appropriate indexes

### 8.3 Query-Specific Indexes
- **Composite Indexes**: For common query patterns (e.g., WHERE company_id AND date BETWEEN)
- **Covering Indexes**: Include all columns needed for frequent queries to avoid table lookups
- **Partial Indexes**: For subsets of data (e.g., active users only, recent filings)
