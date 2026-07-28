# HivePlay — UX

**Document:** UX.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document defines the user experience principles, navigation patterns and screen responsibilities for HivePlay.

---

# UX Principles

- Simple before powerful.
- One primary action per screen.
- Zero training required for basic gameplay.
- Fast interactions during live sessions.
- Consistent visual language across all devices.

---

# User Roles

## Host

Responsibilities:
- Create sessions
- Control gameplay
- Present questions
- Manage timing
- End sessions

Needs:
- Confidence
- Speed
- Full visibility

---

## Team Player

Responsibilities:
- Join session
- Answer questions
- Follow game progress

Needs:
- Minimal interface
- Large touch targets
- Immediate feedback

---

## Audience

Responsibilities:
- Watch gameplay

Needs:
- Clear visibility
- Large typography
- Minimal distractions

---

## Administrator

Responsibilities:
- Build content
- Configure games
- Review sessions

Needs:
- Efficient workflows
- Powerful search
- Bulk operations

---

# Navigation

## Admin

Dashboard

├── Games

├── Questions

├── Categories

├── Media

├── Sessions

└── Settings

---

## Live Game

Host

→ Lobby

→ Active Game

→ Results

---

## Team Device

Join

↓

Waiting Room

↓

Question Screen

↓

Answer Submitted

↓

Next Question

---

# Core Screens

- Login
- Dashboard
- Game Library
- Game Editor
- Question Manager
- Session Lobby
- Host Console
- Audience Screen
- Team Screen
- Results Screen

---

# Interaction Rules

- Every click receives visual feedback.
- Every loading state is visible.
- Every destructive action requires confirmation.
- Errors must explain the next action.

---

# Responsive Strategy

Desktop:
- Administration
- Host Console

Tablet:
- Host
- Audience (optional)

Mobile:
- Team interface
- Join flow

---

# Accessibility

- Keyboard navigation where applicable.
- High color contrast.
- Large touch areas.
- Clear focus states.
- Color is never the only indicator.

---

# Performance Goals

- Screen transitions <200ms
- Question loading <500ms
- Answer submission feels instantaneous
- Realtime updates without refresh

---

# Related Documents

- DESIGN_SYSTEM.md
- GAME_FLOW.md
- GAME_RULES.md
- PRODUCT_SPEC.md

---

# Change Policy

Any new screen or user journey must be documented here before implementation.
