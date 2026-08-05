└── cron/                     # Scheduled tasks (cron jobs)
    ├── daily-report.sh
    └── cleanup.sh
```

### 3.7 assets/
Static assets used across the application:
```
assets/
├── images/                   # Raster images (optimized web formats)
│   ├── logos/
│   ├── illustrations/
│   ├── screenshots/
│   └── icons/                # PNG fallbacks for SVG
├── icons/                    # SVG icons (primary format)
│   ├── menu/
│   ├── actions/
│   ├── status/
│   └── social/
├── animations/               # Lottie JSON, CSS animations
├── sounds/                   # Audio feedback (minimal use)
├── fonts/                    # Custom font files
│   ├── inter/
│   └── roboto-mono/
└── styles/                   # Global CSS/Sass files (legacy)
```

### 3.8 requirements/
Dependency specifications for different environments:
```
requirements/
├── base.txt                  # Core dependencies
├── development.txt           # Dev-only dependencies
