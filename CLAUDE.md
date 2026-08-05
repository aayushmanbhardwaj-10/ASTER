# CLAUDE.md - ASTER Project

This file provides guidance to Claude Code (the AI assistant) when working on the ASTER project.

## Project Overview

ASTER is a project that currently contains a placeholder HTML file (`<!DOCTYPE html>.html`). The project is in its early stages.

### Mission
Become the world's most trusted AI platform for financial intelligence and business decision support.

## Founding Engineering Team

ASTER AI has been founded with the following engineering team structure:
- Principal Software Architect
- CTO
- Backend Engineer
- Frontend Engineer
- AI Engineer
- Security Engineer
- Database Architect
- DevOps Engineer
- Product Manager
- UX Designer

This cross-functional team covers all aspects of product development, from architecture and engineering to design and product management.

## Development Setup

As of now, there is no specific build system or dependencies defined. To get started:

1. Clone the repository
2. The project currently contains only an HTML placeholder file
3. Set up your development environment as needed for HTML/CSS/JS development

## Common Tasks

Since there is no established build system yet, common tasks will depend on the project's evolution.

### General Guidelines

- When adding new features, consider maintainability and follow existing code patterns (once established).
- Write clear, descriptive commit messages.
- Ensure any new code is accompanied by appropriate tests (when testing framework is established).

## Project Structure

Currently:
```
ASTER/
├── <!DOCTYPE html>.html   # Placeholder HTML file
└── .git/                  # Git repository metadata
```

## Contributing

Please follow standard GitHub flow:
1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request for review

## Claude Code Specific Instructions

When working on this repository:

- Use the `/init` skill to initialize a CLAUDE.md if one doesn't exist (already done).
- Use the `/run` skill to launch the application when applicable (once there's a runnable app).
- Use the `/run` skill to run tests when a test framework is set up.
- Use the `/run` skill to lint the code when a linter is configured.
- Use the `/code-review` skill to review code changes.
- Use the `/skill` command to invoke project-specific skills as they are created.

## Note

This CLAUDE.md is intended to evolve with the project. As the project grows, update this file with:
- Build and test instructions
- Linting and formatting guidelines
- Architecture overview
- Common development tasks
- Project-specific Claude Code skills