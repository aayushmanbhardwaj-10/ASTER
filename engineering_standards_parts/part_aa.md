# ENGINEERING_STANDARDS.md - ASTER AI Financial Intelligence Platform Engineering Standards

## 1. Introduction
This document outlines the engineering standards and best practices for the ASTER project. Adhering to these standards ensures code quality, maintainability, security, and consistency across the codebase.

## 2. Code Style and Formatting

### 2.1 Language-Specific Standards
#### JavaScript/TypeScript
- Use ESLint with Airbnb base configuration and Prettier for formatting.
- TypeScript strict mode enabled (`strict: true` in tsconfig.json).
- Prefer `const` and `let` over `var`.
- Use arrow functions for callbacks and inline functions.
- Template literals for string concatenation.
- Destructuring for objects and arrays.
- Default parameters instead of checking for `undefined`.
- No `console.log` in production code (remove or use logger).

#### Python
- Follow PEP 8 style guide.
- Use flake8 and black for formatting.
- Docstrings for all public modules, classes, and functions (Google or NumPy style).
- Type hints for function signatures and variables.
- Use virtual environments (venv or conda).
- Requirements pinned in `requirements.txt`.

#### SQL
- Keywords in uppercase, identifiers in lowercase.
