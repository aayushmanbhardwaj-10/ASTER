- **experiments**: ML experiment tracking (parameters, metrics, artifacts)
- **analytical_views**: Pre-computed aggregations for dashboards/reports
- **data_lineage**: Tracking of data transformations and origins

## 5. Data Modeling Approaches

### 5.1 Relational Modeling
- **Normalization**: 3NF for transactional data to prevent anomalies
- **Denormalization**: Strategic denormalization for read-heavy analytical queries
- **Surrogate Keys**: UUIDs or bigints for primary keys to support distribution
- **Natural Keys**: Business keys where appropriate (ticker symbols, CIK numbers)
- **Indexing Strategy**: Composite indexes for common query patterns, covering indexes
