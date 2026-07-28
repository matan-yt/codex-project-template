# HivePlay — DECISIONS

**Document:** DECISIONS.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document records significant product and architecture decisions. Every decision includes its rationale and expected impact.

---

# Decision Template

## ADR-XXX — Title

**Status:** Proposed | Accepted | Deprecated | Superseded

**Date:** YYYY-MM-DD

### Context

Describe the problem or decision to make.

### Decision

Describe the chosen solution.

### Rationale

Explain why this option was selected.

### Consequences

Positive:
- ...

Trade-offs:
- ...

Affected Documents:
- PRODUCT_SPEC.md
- DOMAIN_MODEL.md

---

# ADR-001 — Platform Name

**Status:** Accepted

**Date:** 2026-07-28

### Decision

The platform and the first game are both named **HivePlay**.

### Rationale

The project is focused on delivering an MVP quickly. Branding can evolve later without affecting the architecture.

---

# ADR-002 — Team Structure

**Status:** Accepted

### Decision

The MVP supports exactly two teams.

### Rationale

This simplifies gameplay, UX, realtime synchronization and game logic.

---

# ADR-003 — Team Devices

**Status:** Accepted

### Decision

Each team connects using a single mobile device.

### Rationale

Reduces operational complexity and eliminates answer conflicts.

---

# ADR-004 — Runtime Model

**Status:** Accepted

### Decision

Games are immutable templates.

Sessions contain all runtime state.

### Consequences

Historical sessions remain valid even if templates change.

---

# ADR-005 — Server Authority

**Status:** Accepted

### Decision

Only the server validates answers, awards tiles and determines winners.

---

# ADR-006 — Question Snapshots

**Status:** Accepted

### Decision

Each live session stores snapshots of questions presented during gameplay.

### Rationale

Future edits to question content must not affect completed sessions.

---

# ADR-007 — Burned Tiles

**Status:** Accepted

### Decision

If a tile has no remaining unused questions after failed attempts, it becomes burned and cannot be selected again.

---

# ADR-008 — Winning Logic

**Status:** Accepted

### Decision

Primary victory condition:
- Complete a continuous path.

Fallback victory condition:
- Team controlling the most tiles when no winning path is possible.

---

# Future Decisions

The following topics require formal decisions before implementation:

- Authentication model
- Session invitation flow
- Offline behavior
- Reconnect strategy
- Undo behavior
- Timer configuration
- Theme customization
- Statistics model
- Import / Export

---

# Change Policy

Every significant product or architecture decision must be documented here before implementation.
