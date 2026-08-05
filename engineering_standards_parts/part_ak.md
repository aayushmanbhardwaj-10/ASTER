
## 11. Data Management Standards

### 11.1 Database Design
- Third Normal Form (3NF) as starting point; denormalize for performance when needed.
- Use UUIDs or ULIDs for distributed systems; auto-increment for simple cases.
- Timestamps: UTC with timezone offset.
- Financial data: use DECIMAL type for monetary values (precision 20, scale 4).
- Indexing: based on query patterns; avoid over-indexing.
- Partitioning: by date or key for large tables.
- Constraints: NOT NULL, UNIQUE, CHECK, FOREIGN KEY where appropriate.

### 11.2 Data Quality
- Validation at ingest: type, format, range, consistency.
- Duplicate detection and resolution.
- Data profiling: regularly assess completeness, uniqueness, validity.
- Master Data Management (MDM) for core entities (customers, products).
- Data lineage tracking for regulatory compliance.
- Regular data audits and cleansing processes.

### 11.3 Data Lifecycle
- Retention policies: based on regulatory requirements and business needs.
- Archiving: move old data to cheaper storage.
- Anonymization/pseudonymization for analytics.
- Secure deletion: when data is no longer needed.
- Backup strategy: 3-2-1 rule (3 copies, 2 media types, 1 offsite).
