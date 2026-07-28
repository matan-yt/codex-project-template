# HivePlay — TECH_STACK

**Document:** TECH_STACK.md
**Project:** HivePlay
**Status:** Living Document
**Version:** 1.0
**Owner:** Engineering

---

# Purpose

This document defines the approved technology stack for HivePlay and the rationale behind each major technology choice.

---

# Frontend

Framework
- Next.js (App Router)

Language
- TypeScript

UI
- React

Styling
- Tailwind CSS

Icons
- Lucide React

Fonts
- Inter

---

# Backend

Application
- Next.js Route Handlers

Authentication
- Supabase Auth

Database Access
- Supabase JavaScript SDK

Realtime
- Supabase Realtime

Storage
- Supabase Storage

---

# Database

Engine
- PostgreSQL

ORM

No ORM in MVP.

Database changes are managed through SQL migrations.

---

# Infrastructure

Hosting
- Vercel

Database & Backend Services
- Supabase

CDN
- Vercel Edge Network

Object Storage
- Supabase Storage

---

# Development Tools

Package Manager
- npm

Linting
- ESLint

Formatting
- Prettier

Version Control
- Git

Repository
- GitHub

---

# Testing Roadmap

MVP
- Manual QA

Future
- Vitest
- Playwright
- React Testing Library

---

# Monitoring

- Vercel Analytics
- Vercel Logs
- Supabase Logs
- Sentry (recommended)

---

# Security

- HTTPS
- JWT Authentication
- Row Level Security
- Signed URLs
- Environment Variables

---

# Deployment Pipeline

GitHub
    ↓
Vercel Preview
    ↓
Staging
    ↓
Production

---

# Selection Criteria

Technologies should be:

- Stable
- Well documented
- TypeScript-first
- Cloud-native
- Easy to maintain
- Suitable for rapid iteration

---

# Future Evaluation

Potential technologies may be introduced only after evaluating:

- Maintenance cost
- Learning curve
- Community support
- Performance impact
- Vendor lock-in

---

# Related Documents

- ARCHITECTURE.md
- SECURITY.md
- DATABASE.md
- CONTRIBUTING.md

---

# Change Policy

Any addition or replacement of core technologies must be documented before adoption.
