```
node_modules/                 # JavaScript dependencies
dist/                         # Production build output
build/                        # Intermediate build files
.coverage/                    # Test coverage reports
.env*                        # Environment variables
.DS_Store                    # macOS metadata
Thumbs.db                     # Windows metadata
```

### 8.2 IDE and Editor Settings
```
.vscode/                      # VS Code settings
.idea/                        # IntelliJ/Idea settings
*.sublime-workspace          # Salsa Text workspace
```

### 8.3 Logs and Runtime Data
```
logs/                         # Application logs
tmp/                          # Temporary files
cache/                        # Application cache
uploads/                      # User-uploaded files (if applicable)
```

## 9. Deployment and Infrastructure

### 9.1 Docker Configuration
```
docker/
├── Dockerfile                # Multi-stage build
├── docker-compose.yml        # Local development
├── docker-compose.prod.yml   # Production override
├── nginx/                    # Nginx configuration
