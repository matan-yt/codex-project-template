# HivePlay — DESIGN_SYSTEM

**Document:** DESIGN_SYSTEM.md  
**Project:** HivePlay  
**Status:** Living Document  
**Version:** 1.0  
**Owner:** Product Team

---

# Purpose

This document defines the visual language, reusable UI components, and design rules used throughout HivePlay.

---

# Design Principles

- Clean over decorative.
- Consistency over creativity.
- Accessibility by default.
- Reusable components first.
- Motion should support usability.

---

# Brand Personality

- Modern
- Playful
- Confident
- Professional
- Fast

---

# Color Roles

Primary
- Brand color
- Main actions

Secondary
- Supporting actions

Accent
- Highlights
- Interactive elements

Success
- Positive feedback

Warning
- Attention required

Error
- Validation failures

Neutral
- Backgrounds
- Borders
- Text hierarchy

---

# Typography

Primary Font:
- Inter (default)

Fallback:
- System UI fonts

Hierarchy:
- Display
- H1
- H2
- H3
- Body
- Caption
- Label

Rules:
- Minimum body size: 16px
- Left aligned (LTR) / RTL-ready architecture
- Consistent spacing

---

# Spacing Scale

4px
8px
12px
16px
24px
32px
48px
64px

Use the scale consistently.

---

# Border Radius

- Small: 6px
- Medium: 10px
- Large: 16px
- Pill: 999px

---

# Elevation

Level 0
- Flat

Level 1
- Cards

Level 2
- Floating panels

Level 3
- Dialogs

---

# Icons

Requirements:

- Consistent icon library
- 24px default size
- Filled for active state
- Outline for inactive state

---

# Core Components

Buttons
- Primary
- Secondary
- Ghost
- Danger

Inputs
- Text
- Search
- Select
- Checkbox
- Radio
- Toggle

Navigation
- Sidebar
- Top Bar
- Breadcrumbs
- Tabs

Feedback
- Toast
- Modal
- Dialog
- Tooltip
- Spinner

Cards
- Standard Card
- Statistic Card
- Game Card

Tables
- Sortable
- Searchable
- Paginated

---

# Motion

Animations should:

- Be under 250ms
- Never block interaction
- Emphasize state changes
- Respect reduced-motion preferences

---

# Empty States

Every empty screen should include:

- Illustration or icon
- Short explanation
- Primary action

---

# Error States

Every error should include:

- Clear title
- Human-readable explanation
- Recovery action

---

# Responsive Breakpoints

- Mobile
- Tablet
- Desktop
- Wide Desktop

Component behavior must adapt without changing interaction patterns.

---

# Accessibility

- WCAG AA target
- Visible focus indicators
- Keyboard navigation
- Screen reader labels
- Sufficient color contrast

---

# Related Documents

- UX.md
- PRODUCT_SPEC.md
- ARCHITECTURE.md

---

# Change Policy

Any reusable UI pattern or component must be documented here before implementation.
