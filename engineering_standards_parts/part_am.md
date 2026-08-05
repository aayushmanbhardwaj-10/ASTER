- Output encoding: prevent XSS in JSON responses (rare but possible).
- CORS: restrict origins to trusted domains.
- Security headers: X-Content-Type-Options, X-Frame-Options, etc.

### 12.4 Documentation
- OpenAPI 3.0 specification for all public APIs.
- Examples for requests and responses.
- Authentication requirements clearly documented.
- Error codes and meanings listed.
- Deprecation notices with sunset dates.
- Interactive documentation (Swagger UI/Redoc) available.

## 13. Machine Learning and AI Standards

### 13.1 Model Development
- Experiment tracking: MLflow, Weights & Biases, or similar.
- Version control for data, code, and model configurations.
- Reproducible environments: conda or virtualenv with locked dependencies.
- Data splitting: train/validation/test sets with temporal awareness for time series.
- Avoid data leakage: strict separation of training and future data.
- Baseline models: compare against simple heuristics.

### 13.2 Model Validation
- Metrics: accuracy, precision, recall, F1, AUC-ROC for classification; MAE, RMSE, R² for regression.
- Cross-validation: k-fold or time-series split.
- Bias and fairness analysis: check for disparate impact across groups.
- Explainability: SHAP, LIME, or feature importance for model interpretability.
