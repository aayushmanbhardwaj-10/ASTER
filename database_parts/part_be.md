- **Analytics Data**: Configurable based on business value and storage costs
- **Backups**: Typically longer retention than production data for compliance

## 14. Integration and ETL Patterns

### 14.1 Data Ingestion
- **API-Driven Ingestion**: REST/WebSocket endpoints for external data providers
- **File-Based Ingestion**: SFTP/S3 ingestion for batch files (CSV, XML, JSON)
- **Change Data Capture (CDC)**: Debezium or logical decoding for real-time sync from source systems
- **Message Queue Consumption**: Applications consuming from Kafka topics for real-time updates
- **Scheduled Jobs**: Cron-based or Airflow-managed batch loading processes
