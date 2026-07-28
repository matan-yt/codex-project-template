# HivePlay — CODING_GUIDELINES

**Document:** CODING_GUIDELINES.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Engineering

---

# Purpose

This document defines the coding standards and conventions used throughout the HivePlay codebase.

---

# Core Principles

- Write code for humans first.
- Prefer clarity over cleverness.
- Keep functions small and focused.
- Avoid duplication.
- Fail fast with meaningful errors.

---

# Technology Standards

- TypeScript only
- React functional components
- Next.js App Router
- Tailwind CSS
- Supabase SDK
- ESLint + Prettier

---

# Naming Conventions

Files:
- kebab-case

React Components:
- PascalCase

Variables:
- camelCase

Types & Interfaces:
- PascalCase

Constants:
- UPPER_SNAKE_CASE

Database Tables:
- snake_case

---

# TypeScript

- Avoid `any`
- Prefer explicit types
- Use enums sparingly
- Prefer discriminated unions where appropriate
- Keep shared types centralized

---

# React

- One responsibility per component
- Extract reusable UI early
- Keep component nesting shallow
- Avoid unnecessary state
- Prefer composition over inheritance

---

# State Management

Priority:

1. Local component state
2. URL state
3. Server state
4. Global state only when required

---

# API

- Validate all input
- Return consistent response shapes
- Never trust client data
- Handle expected errors gracefully

---

# Database

- Use migrations only
- Never modify production data manually
- Keep queries efficient
- Prefer indexes over premature optimization

---

# Styling

- Tailwind utility classes
- Reusable UI primitives
- Consistent spacing scale
- Mobile-first layouts
- No inline styles unless justified

---

# Error Handling

- Throw meaningful errors
- Log actionable information
- Never expose internal implementation details to users

---

# Performance

- Lazy-load heavy components
- Minimize unnecessary renders
- Optimize database queries
- Use caching where appropriate

---

# Security

- Sanitize inputs
- Authorize every protected action
- Never expose secrets
- Validate permissions server-side

---

# Documentation

Document:

- Public APIs
- Complex business rules
- Architectural decisions
- Non-obvious implementation details

Avoid documenting self-explanatory code.

---

# Definition of Clean Code

Clean code is:

- Readable
- Predictable
- Testable
- Maintainable
- Consistent

---

# Related Documents

- CONTRIBUTING.md
- ARCHITECTURE.md
- SECURITY.md
- API.md

---

# Change Policy

Update these guidelines whenever a new engineering convention becomes standard.
