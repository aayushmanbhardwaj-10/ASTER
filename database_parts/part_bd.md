
### 13.2 Archiving and Purging
- **Archive Tables**: Copy old data to archive tables before deletion
- **Partition Swapping**: For time-partitioned tables, detach old partitions for archiving
- **Data Masking**: Anonymize or pseudonymize data before archiving for non-production use
- **Legal Holds**: Mechanism to preserve data despite standard retention policies

### 13.3 Data Retention Policies
- **Transaction Data**: 7 years for financial records (regulatory requirement)
- **User Activity Logs**: 2-5 years depending on sensitivity and regulations
- **Market Data**: Varies by data source license (some real-time data has short retention)
