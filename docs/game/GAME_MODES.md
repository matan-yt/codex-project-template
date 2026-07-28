# HivePlay — GAME_MODES

**Document:** GAME_MODES.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document defines the supported gameplay modes for HivePlay and the roadmap for future modes.

---

# Design Principles

- All modes use the same game engine.
- Modes should differ through configuration rather than custom code.
- Rules shared across modes remain in `GAME_RULES.md`.

---

# MVP Mode — Classic

## Description

The default competitive experience.

### Players

- 2 Teams
- 1 Host
- 1 Audience Screen
- 1 Device per Team

### Objective

Create a continuous path between the assigned sides of the board.

### Characteristics

- Simultaneous answering
- Fastest correct answer wins ties
- Burned tiles supported
- Immediate victory detection

Status: **Supported**

---

# Planned Mode — Practice

Purpose:

Allow a single team or facilitator to test questions without competition.

Characteristics:

- No scoring race
- Unlimited retries
- Optional answer reveal
- Statistics disabled

Status: **Planned**

---

# Planned Mode — Tournament

Purpose:

Run multiple Classic games within a tournament bracket.

Potential Features:

- Match scheduling
- Bracket generation
- Leaderboard
- Finals

Status: **Future**

---

# Planned Mode — Classroom

Purpose:

Educational sessions led by a teacher.

Potential Features:

- Individual players
- Class statistics
- Discussion pauses
- Hint support

Status: **Future**

---

# Planned Mode — Audience Challenge

Purpose:

Allow the audience to actively participate.

Potential Features:

- Live voting
- Audience scoring
- Bonus questions
- Polls

Status: **Future**

---

# Configuration Matrix

| Feature | Classic | Practice | Tournament | Classroom | Audience |
|---------|:-------:|:--------:|:----------:|:----------:|:--------:|
| Two Teams | ✓ | | ✓ | Optional | Optional |
| Host | ✓ | ✓ | ✓ | ✓ | ✓ |
| Scoring | ✓ | | ✓ | ✓ | ✓ |
| Winning Path | ✓ | | ✓ | Optional | Optional |
| Burned Tiles | ✓ | Optional | ✓ | Optional | Optional |
| Session History | ✓ | ✓ | ✓ | ✓ | ✓ |

---

# Extensibility

Every future mode should be configurable through data wherever possible, minimizing mode-specific business logic.

---

# Related Documents

- GAME_RULES.md
- GAME_FLOW.md
- PRODUCT_SPEC.md
- ROADMAP.md

---

# Change Policy

Add new gameplay modes here before implementation begins.
