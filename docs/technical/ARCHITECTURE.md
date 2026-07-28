# HivePlay — ARCHITECTURE

**Document:** ARCHITECTURE.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Engineering

---

# Purpose

This document describes the high-level system architecture for HivePlay and the responsibilities of each layer.

---

# Architecture Principles

- API-first
- Stateless application servers
- Realtime by design
- Clear separation between template data and runtime data
- Secure by default
- Horizontal scalability

---

# High-Level Architecture

```text
                Browser Clients
        ┌──────────┬──────────┬──────────┐
        │ Admin UI │ Host UI  │ Team UI  │
        └────┬─────┴────┬─────┴────┬─────┘
             │           │          │
             └────────── HTTP / WebSocket ──────────┐
                                                    │
                                            Next.js Application
                                                    │
                           ┌────────────────────────┼────────────────────────┐
                           │                        │                        │
                       Authentication         Business Logic           Realtime
                           │                        │                        │
                           └────────────────────────┼────────────────────────┘
                                                    │
                                               Supabase
                               PostgreSQL • Auth • Storage • Realtime
```

---

# Technology Stack

Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend
- Next.js Route Handlers
- Supabase

Database
- PostgreSQL

Storage
- Supabase Storage

Authentication
- Supabase Auth

Realtime
- Supabase Realtime

Deployment
- Vercel

---

# Application Layers

## Presentation

Responsibilities:
- Rendering UI
- Input validation
- User interactions

---

## Application

Responsibilities:
- Business rules
- Session orchestration
- Authorization
- API endpoints

---

## Data

Responsibilities:
- Persistence
- Queries
- Transactions
- Realtime subscriptions

---

# Client Types

- Administrator
- Host
- Team Device
- Audience Display

Each client consumes the same backend with role-specific permissions.

---

# Runtime Flow

1. Client sends request.
2. Authentication validated.
3. Authorization checked.
4. Business rules executed.
5. Database updated.
6. Realtime event published.
7. Connected clients synchronize automatically.

---

# Security

- Row Level Security (RLS)
- HTTPS only
- JWT authentication
- Server-side validation
- Secure storage buckets
- Principle of least privilege

---

# Scalability

Designed to scale by:
- Stateless frontend
- Managed database
- CDN delivery
- Object storage
- Realtime channels

---

# Error Handling

- Structured error responses
- Central logging
- Graceful UI fallbacks
- Retry transient failures

---

# Monitoring

Recommended:
- Vercel Analytics
- Vercel Logs
- Supabase Logs
- Error tracking (e.g. Sentry)

---

# Related Documents

- DATABASE.md
- API.md
- SECURITY.md
- PRODUCT_SPEC.md

---

# Change Policy

Any architectural decision affecting system boundaries or responsibilities must be documented here before implementation.
