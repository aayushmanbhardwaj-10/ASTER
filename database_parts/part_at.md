- **Expression Indexes**: For computed values used in WHERE clauses
- **Bloom Filters**: For high-cardinality columns in large tables (via extensions)

### 8.4 Specialized Indexes
- **GIN/GiST Indexes**: For JSONB, array, and full-text search columns
- **BRIN Indexes**: For very large tables with natural ordering (time-series)
- **SP-GiST Indexes**: For geometric or hierarchical data
- **Hash Indexes**: For equality-only lookups on high-cardinality columns

## 9. Data Integrity and Validation

### 9.1 Constraints
- **NOT NULL**: For mandatory fields
- **UNIQUE**: For business keys that must be unique
