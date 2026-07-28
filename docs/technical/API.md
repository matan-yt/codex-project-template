# HivePlay — API

**Document:** API.md
**Project:** HivePlay
**Status:** Living Document
**Version:** 1.0
**Owner:** Engineering

---

# Purpose

This document defines the public and internal API contract used by HivePlay.

The API is designed around REST endpoints for management operations and Realtime channels for live gameplay.

---

# Design Principles

- REST for CRUD operations
- Realtime for gameplay synchronization
- JSON request/response format
- Versioned endpoints
- Idempotent where appropriate
- Server-authoritative validation

---

# Base URL

/api/v1

---

# Authentication

Authentication uses Supabase JWT tokens.

Every protected endpoint requires:

Authorization: Bearer <token>

Roles:

- Administrator
- Host
- Team
- Read Only

Authorization is validated server-side.

---

# Resource Groups

## Authentication

POST /auth/login

POST /auth/logout

GET /auth/me

---

## Games

GET /games

GET /games/{id}

POST /games

PATCH /games/{id}

DELETE /games/{id}

POST /games/{id}/publish

---

## Questions

GET /questions

GET /questions/{id}

POST /questions

PATCH /questions/{id}

DELETE /questions/{id}

---

## Categories

GET /categories

POST /categories

PATCH /categories/{id}

DELETE /categories/{id}

---

## Media

POST /media/upload

GET /media/{id}

DELETE /media/{id}

---

## Sessions

POST /sessions

GET /sessions/{id}

PATCH /sessions/{id}

POST /sessions/{id}/start

POST /sessions/{id}/pause

POST /sessions/{id}/resume

POST /sessions/{id}/finish

---

## Teams

POST /sessions/{id}/join

GET /sessions/{id}/teams

PATCH /teams/{id}

---

## Gameplay

POST /sessions/{id}/select-tile

POST /sessions/{id}/submit-answer

POST /sessions/{id}/reveal-answer

GET /sessions/{id}/state

---

# Realtime Channels

The following events are published to subscribed clients:

- session_created
- team_joined
- session_started
- tile_selected
- question_started
- answer_received
- answer_revealed
- tile_claimed
- tile_burned
- session_paused
- session_resumed
- game_finished

Clients should treat server events as the single source of truth.

---

# Standard Response Format

Success

{
  "success": true,
  "data": {}
}

Failure

{
  "success": false,
  "error": {
    "code": "...",
    "message": "..."
  }
}

---

# Error Codes

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# Validation Rules

- Validate all input server-side.
- Never trust client state.
- Reject malformed requests.
- Return descriptive error messages.

---

# Versioning

Current version:

v1

Breaking changes require a new API version.

---

# Security

- HTTPS only
- JWT authentication
- RLS enforcement
- Rate limiting
- Input sanitization
- Server-side authorization

---

# Related Documents

- DATABASE.md
- ARCHITECTURE.md
- GAME_RULES.md
- PRODUCT_SPEC.md

---

# Change Policy

All new endpoints and contract changes must be documented here before implementation.
