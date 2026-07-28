# HivePlay — GAME_RULES

**Document:** GAME_RULES.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document defines the official gameplay rules for HivePlay. Any implementation of the game engine must follow these rules.

---

# Overview

HivePlay is a live, team-versus-team strategy trivia game played on a hexagonal board.

Teams answer questions to capture tiles and attempt to create a continuous path across their assigned sides.

---

# Match Configuration

Current MVP supports:

- Exactly 2 teams
- 1 Host
- 1 Audience Display
- 1 mobile device per team
- 1 active session
- 37 hexagonal tiles

---

# Objective

Primary objective:

Create a continuous path connecting the two sides assigned to your team.

Secondary objective:

If a winning path becomes impossible, the team controlling the greatest number of claimed tiles wins.

---

# Session Lifecycle

1. Session created
2. Teams join
3. Host starts game
4. Gameplay loop
5. Victory detection
6. Winner announcement
7. Session completed

---

# Gameplay Loop

1. Active team selects an available tile.
2. Host confirms selection.
3. Media (if any) is presented.
4. Question is displayed.
5. Timer starts.
6. Both teams answer simultaneously.
7. Server validates answers.
8. Tile ownership is determined.
9. Winning path check runs.
10. Next turn begins.

---

# Answer Resolution

## Only Team A Correct

Team A claims the tile.

## Only Team B Correct

Team B claims the tile.

## Both Correct

Fastest correct answer claims the tile.

## Both Incorrect

Current question is retired.

The tile remains available.

The next time the tile is selected another unused question is chosen.

If no unused questions remain, the tile becomes Burned.

---

# Tile States

Available

Selectable.

Selected

Question currently active.

Claimed

Owned by a team.

Burned

Unavailable for the remainder of the session.

---

# Question Rules

Supported answer formats:

- Multiple Choice
- True / False

Correct answers are validated on the server only.

Clients never receive the correct answer before validation.

---

# Timer

Each question has a configurable time limit.

When the timer expires:

- unanswered responses are marked incorrect
- answer validation proceeds immediately

---

# Turn Rules

The team that wins a tile becomes the active team and selects the next tile.

---

# Victory Detection

Victory is evaluated immediately after every successful tile claim.

If a continuous path exists:

- Game ends immediately.
- Winning team is announced.

---

# Burned Tiles

Burned tiles:

- cannot be selected
- have no owner
- block future gameplay
- may interrupt potential paths

---

# Tie Breaking

When both teams answer correctly:

1. Correctness
2. Fastest response

No additional tie-breaker exists in MVP.

---

# Host Controls

The Host may:

- Start session
- Pause session
- Resume session
- Reveal answers
- End session
- Undo last action (future enhancement)

---

# Reconnection

A disconnected team device may reconnect to the active session.

The current session state is restored automatically.

---

# Business Rules

- Only one active question at a time.
- One tile can be selected at a time.
- Runtime data never modifies templates.
- Sessions are immutable historical records.

---

# Related Documents

- PRODUCT_SPEC.md
- DOMAIN_MODEL.md
- DATABASE.md
- API.md
- UX.md

---

# Change Policy

Gameplay changes must be reflected in this document before implementation.
