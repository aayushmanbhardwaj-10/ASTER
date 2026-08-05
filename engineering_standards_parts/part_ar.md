- Access reviews: quarterly review of user permissions.
- Incident response plan: tested regularly for breaches and outages.
- Business continuity plan: maintained and tested annually.

## 17. Tools and Infrastructure

### 17.1 Development Tools
- IDEs: VS Code, IntelliJ, or PyCharm with recommended plugins.
- Version Control: Git with GitHub/GitLab/Bitbucket.
- Package Managers: npm/yarn for JS, pip for poetry for Python.
- Linters and Formatters: ESLint/Prettier, flake8/black.
- Debuggers: built-in IDE debuggers, Chrome DevTools.
- API Testing: Postman, Insomnia, or curl.
- Database Clients: DBeaver, DataGrip, or CLI tools.

### 17.2 CI/CD Tools
- Preferred: GitHub Actions (integrated with repository).
- Alternatives: GitLab CI, Jenkins, CircleCI.
- Pipeline stages: lint, unit test, integration test, build, security scan, deploy.
- Artifact storage: repository packages or cloud storage (S3, GCS).
- Environment promotion: dev → staging → production.

### 17.3 Monitoring and Logging
- Logging: ELK Stack (Elasticsearch, Logstash, Kibana) or Loki/Grafana.
- Metrics: Prometheus with Grafana dashboards.
- Tracing: Jaeger or Tempo.
- Alerting: Alertmanager or equivalent.
