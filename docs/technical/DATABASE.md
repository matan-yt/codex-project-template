# HivePlay — DATABASE

**Document:** DATABASE.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Engineering

---

# Purpose

This document defines the logical database structure for HivePlay.

The schema is designed to separate reusable templates from runtime session data.

---

# Design Principles

- Templates are immutable during gameplay.
- Runtime data is isolated from configuration.
- UUID primary keys for all entities.
- Soft delete only where business value exists.
- Foreign keys enforce integrity.

---

# Core Domains

1. Authentication
2. Content
3. Game Templates
4. Live Sessions
5. Statistics
6. Administration

---

# Entity Overview

## Users

Stores authenticated administrators and hosts.

Key Fields

- id
- name
- email
- role
- created_at

---

## Categories

Groups questions.

Key Fields

- id
- name
- description
- sort_order

---

## Media

Stores uploaded assets.

Key Fields

- id
- type
- storage_path
- duration
- metadata

---

## Questions

Reusable question bank.

Key Fields

- id
- category_id
- title
- question_type
- difficulty
- media_id

Relationships

- One Category → Many Questions
- One Media → Many Questions

---

## Answers

Possible answers for each question.

Key Fields

- id
- question_id
- label
- is_correct
- display_order

---

## Games

Reusable game templates.

Key Fields

- id
- name
- description
- status
- published_at

---

## Board Tiles

Defines board layout.

Key Fields

- id
- game_id
- position
- question_pool

---

## Sessions

Runtime game instances.

Key Fields

- id
- game_id
- status
- started_at
- completed_at

---

## Teams

Teams participating in a session.

Key Fields

- id
- session_id
- name
- color
- score

---

## Tile State

Stores runtime ownership.

Key Fields

- id
- session_id
- tile_id
- state
- owner_team_id

States

- available
- selected
- claimed
- burned

---

## Responses

Stores submitted answers.

Key Fields

- id
- session_id
- team_id
- question_id
- answer_id
- submitted_at
- response_time_ms
- is_correct

---

## Events

Append-only gameplay event log.

Examples

- session_started
- tile_selected
- answer_submitted
- tile_claimed
- tile_burned
- game_finished

---

# Relationships

Users
    ↓
Games
    ↓
Board Tiles
    ↓
Sessions
    ↓
Teams
    ↓
Responses

Questions
    ↓
Answers

Categories
    ↓
Questions

Media
    ↓
Questions

---

# Indexing

Recommended indexes:

- session_id
- game_id
- question_id
- category_id
- submitted_at
- created_at

---

# Audit Strategy

Store:

- created_at
- updated_at
- created_by
- updated_by

Runtime events are never modified.

---

# Storage

Media files are stored in object storage.

Database stores only metadata and references.

---

# Migration Strategy

- One migration per logical change.
- Never edit existing migrations.
- All schema changes reviewed before deployment.

---

# Related Documents

- DOMAIN_MODEL.md
- GAME_RULES.md
- ARCHITECTURE.md
- API.md

---

# Change Policy

Any schema modification must be documented before implementation.
