- **Logical Replication**: For selective data replication or data warehousing feeds
- **Cascading Replicas**: For geographic distribution without overloading primary

### 12.3 High Availability
- **Automatic Failover**: Using Patroni, repmgr, or cloud-managed solutions
- **Connection Routing**: Automatic redirection to new primary after failover
- **Split-Brain Prevention**: Fencing mechanisms to prevent dual primaries
- **Recovery Time Objectives (RTO)**: Target < 5 minutes for failover
- **Recovery Point Objectives (RPO)**: Target < 1 minute for data loss

### 12.4 Disaster Recovery
- **Cross-Region Replication**: Asynchronous replication to remote region
