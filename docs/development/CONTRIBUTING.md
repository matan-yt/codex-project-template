# HivePlay — CONTRIBUTING

**Document:** CONTRIBUTING.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Engineering

---

# Purpose

This document defines the development workflow and contribution guidelines for HivePlay.

---

# Guiding Principles

- Keep changes small and focused.
- Prioritize readability over cleverness.
- Prefer composition over duplication.
- Leave the codebase better than you found it.

---

# Branch Strategy

Main branches:

- `main` — Production
- `develop` — Integration

Feature branches:

- `feature/<name>`
- `bugfix/<name>`
- `hotfix/<name>`
- `docs/<name>`

---

# Development Workflow

1. Create a feature branch.
2. Implement the change.
3. Update documentation if required.
4. Run tests and linting.
5. Open a Pull Request.
6. Address review comments.
7. Merge after approval.

---

# Pull Request Checklist

- Feature works as intended.
- No unrelated changes included.
- Documentation updated.
- Database migrations included (if needed).
- No secrets committed.
- Lint passes.
- Build succeeds.

---

# Commit Convention

Format:

`type(scope): summary`

Examples:

- feat(game): add tile selection
- fix(api): validate answer payload
- docs(database): update relationships
- refactor(session): simplify state handling

Types:

- feat
- fix
- docs
- refactor
- chore
- test
- style

---

# Code Review

Reviewers should verify:

- Correctness
- Readability
- Performance
- Security
- Consistency
- Test coverage

---

# Documentation

Update documentation whenever changes affect:

- Business rules
- API contracts
- Database schema
- Architecture
- UX flows

---

# Testing

Minimum expectations:

- Lint passes
- Build succeeds
- Manual verification completed

Future:

- Unit tests
- Integration tests
- End-to-end tests

---

# Database Changes

Rules:

- One logical migration per change.
- Never edit applied migrations.
- Review schema changes before merging.

---

# Related Documents

- CODING_GUIDELINES.md
- RELEASE_PROCESS.md
- ARCHITECTURE.md
- DATABASE.md

---

# Change Policy

This document should evolve alongside the team's engineering practices.
