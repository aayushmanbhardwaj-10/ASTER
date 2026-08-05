
### 6.4 Portfolio Management
```
users
├── portfolios (one-to-many)
│   ├── holdings (one-to-many)
│   │   └── securities (many-to-one)
│   ├── transactions (one-to-many)
│   └── performance_metrics (one-to-many, time-series)
```
- Holdings represent current positions
- Transactions represent historical activity
- Performance calculated from transactions and market data

### 6.5 Collaboration
```
users
├── models (one-to-many)
│   ├── model_versions (one-to-many)
│   │   └── model_elements (one-to-many)
│   ├── comments (one-to-many)
│   └── shared_with (many-to-many with users, via shared_objects)
