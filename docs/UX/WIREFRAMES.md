# HivePlay — WIREFRAMES

**Document:** WIREFRAMES.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product & UX

---

# Purpose

This document provides low-fidelity wireframes and screen responsibilities for the primary HivePlay interfaces.

The goal is to define structure and information hierarchy before visual design.

---

# Screen Inventory

## Administration

- Login
- Dashboard
- Games
- Questions
- Categories
- Media Library
- Sessions
- Settings

## Live Experience

- Host Lobby
- Host Console
- Audience Display
- Team Join
- Team Waiting Room
- Team Question
- Results

---

# Admin Dashboard

```
+------------------------------------------------------+
| Top Navigation                                       |
+---------+--------------------------------------------+
| Sidebar | KPI Cards                                  |
|         |--------------------------------------------|
|         | Recent Games                               |
|         | Recent Sessions                            |
|         | Quick Actions                              |
+---------+--------------------------------------------+
```

---

# Game Editor

```
+------------------------------------------------------+
| Header                                               |
+------------------------------------------------------+
| General Information                                  |
|------------------------------------------------------|
| Board Configuration                                  |
|------------------------------------------------------|
| Question Pools                                       |
|------------------------------------------------------|
| Publish                                               |
+------------------------------------------------------+
```

---

# Host Console

```
+------------------------------------------------------+
| Timer | Score | Current Turn                         |
+------------------------------------------------------+
|                                              Board   |
|                                                      |
|                                                      |
|                                                      |
+------------------------------+-----------------------+
| Current Question             | Team Status           |
+------------------------------+-----------------------+
| Controls                                             |
+------------------------------------------------------+
```

---

# Audience Display

```
+------------------------------------------------------+
|                Current Question                      |
|                                                      |
|                    Media                             |
|                                                      |
|                 Countdown Timer                      |
+------------------------------------------------------+
```

---

# Team Device

## Waiting

```
+---------------------------+
| Team Name                 |
| Waiting for next question |
+---------------------------+
```

## Question

```
+---------------------------+
| Timer                     |
|                           |
| Question                  |
|                           |
| Answer A                  |
| Answer B                  |
| Answer C                  |
| Answer D                  |
+---------------------------+
```

## Submitted

```
+---------------------------+
| ✓ Answer Submitted        |
| Waiting for results...    |
+---------------------------+
```

---

# Results Screen

```
+------------------------------------------------------+
| Winner                                               |
|------------------------------------------------------|
| Final Board                                          |
|------------------------------------------------------|
| Statistics                                           |
|------------------------------------------------------|
| Play Again                                           |
+------------------------------------------------------+
```

---

# Navigation Principles

- Maximum two levels of navigation.
- One primary action per screen.
- Consistent header and sidebar.
- Live screens avoid unnecessary controls.

---

# Related Documents

- UX.md
- DESIGN_SYSTEM.md
- GAME_FLOW.md
- PRODUCT_SPEC.md

---

# Change Policy

Update this document whenever a screen layout or navigation flow changes.
