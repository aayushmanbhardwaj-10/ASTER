- **User Data**: Sharded by user ID or geographic region
- **Company Data**: Sharded by market cap or sector for analytical workloads
- **Portfolio Data**: Sharded by portfolio owner ID
- **Implementation**: Application-level sharding or proxy-based (Vitess, ProxySQL)
- **Considerations**: Cross-shard transactions, rebalancing strategies

### 7.3 Vertical Partitioning
- **Hot vs Cold Data**: Frequently accessed data in primary tables, archived data in separate tables/schemas
- **LOB Data**: Large objects (documents, images) stored separately with references in main tables
- **Audit Logs**: Separated from operational tables for performance and security
