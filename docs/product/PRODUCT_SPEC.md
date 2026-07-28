# HivePlay Product Specification

**Document:** PRODUCT.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document defines the product vision, goals, principles, terminology and scope of HivePlay.

It serves as the primary product reference for designers, developers and AI coding assistants.

Whenever a product decision conflicts with another document, this document takes precedence unless explicitly stated otherwise.

---

# Product Summary

HivePlay is a platform for building and running live interactive team games.

The platform combines reusable content, configurable game templates and a real-time game engine into a single product that enables anyone to create engaging live experiences without writing code.

The first implementation of the platform is a competitive trivia game that combines knowledge, speed and strategy on a hexagonal board.

---

# Problem Statement

Today's live trivia solutions generally fall into two categories:

- Presentation-based quiz software with limited flexibility.
- Fully custom-built event experiences that require significant development effort.

Neither approach provides a reusable platform where organizers can build multiple branded games while sharing the same infrastructure.

HivePlay bridges this gap by separating content, game configuration and live execution.

---

# Vision

To become the simplest and most enjoyable platform for creating live interactive games.

# Mission

Enable organizations, educators and event organizers to build memorable interactive experiences in minutes instead of days.

---

# Product Goals

## Primary Goals

- Extremely simple live operation
- Professional audience experience
- Reusable game content
- Flexible game configuration
- Fast game creation
- Reliable real-time synchronization

## Secondary Goals

- Theme customization
- Statistics
- Session history
- Easy onboarding
- Expandability

---

# Non Goals (Current Version)

- Public game marketplace
- Online multiplayer
- Audience voting
- AI-generated questions inside gameplay
- Tournament management
- Monetization

---

# Core Product Principles

## Simplicity

The software should disappear during gameplay.

## Reliability

Every action should have predictable results.

## Reusability

Questions belong to the content layer.

Games belong to the configuration layer.

Sessions belong to runtime.

## Server Authority

Only the server determines game outcomes.

## Extensibility

New games should reuse existing infrastructure whenever possible.

## Consistency

The same UX principles apply across all interfaces.

---

# Product Scope

Included:

- Question management
- Categories
- Media
- Themes
- Game Builder
- Session management
- Live gameplay
- Team mobile interface
- Audience display
- Host console

Excluded:

- CRM
- Payments
- Video conferencing
- LMS functionality

---

# Product Architecture

Content

↓

Game Templates

↓

Live Sessions

Each layer has one responsibility.

---

# Personas

## Administrator

Maintains reusable content.

## Host

Runs live sessions.

## Team Representative

Answers questions and selects tiles.

## Audience

Views the game.

---

# Success Metrics

- Launch a session in under two minutes.
- Teams join without assistance.
- Reusable content across games.
- Stable realtime gameplay.

---

# Product Terminology

| Term | Definition |
|------|------------|
| Question | Reusable question |
| Category | Question grouping |
| Theme | Visual styling |
| Game | Reusable template |
| Session | Live execution |
| Tile | One hexagon |
| Board | Collection of tiles |
| Team | Competing side |
| Connection | Connected client |
| Host | Session operator |

---

# MVP Constraints

- Two teams
- One phone per team
- One host
- One audience screen
- One active question

---

# Related Documents

- README.md
- DOMAIN_MODEL.md
- GAME_RULES.md
- DATABASE.md
- ARCHITECTURE.md
- API.md
- UX.md
- ROADMAP.md
- DECISIONS.md

---

# Change Policy

Product behavior changes must be reflected here before implementation.
