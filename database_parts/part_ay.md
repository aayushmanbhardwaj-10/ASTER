- **Subquery Optimization**: Rewriting inefficient subqueries as joins
- **Limiting Result Sets**: Using LIMIT/OFFSET appropriately (avoiding OFFSET for large offsets)

### 11.2 Connection Management
- **Connection Pooling**: PgBouncer or application-level pooling
- **Prepared Statements**: For repeated query execution
- **Asynchronous Queries**: Where supported for non-blocking operations
- **Statement Timeouts**: Preventing long-running queries from consuming resources

### 11.3 Caching Strategies
- **Application Caching**: Redis for frequently accessed computed values
- **Database Caching**: Leveraging PostgreSQL's shared buffers and OS cache
