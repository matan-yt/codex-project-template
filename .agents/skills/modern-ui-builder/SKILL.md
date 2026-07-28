---
name: modern-ui-builder
description: Use this skill when building or refreshing modern web UI in React or Next.js projects. Best for pages, dashboards, landing pages, auth flows, CRUD screens, and interface systems that should feel modern, sharp, accessible, and implementation-ready. Do not use this skill for backend-only tasks or for unrelated code changes. Do not trigger if the repository already has a clearly different UI stack unless the user explicitly asks to extend or migrate it.
---

# Purpose

This skill helps Codex implement high-quality modern UI with consistent decisions, restrained motion, strong hierarchy, and a clear component strategy.

Use this skill when the task involves:
- building a new interface
- redesigning an existing page or flow
- creating a landing page
- improving visual hierarchy and usability
- choosing UI primitives and components
- turning approved design direction into code

# Default UI strategy

Prefer this order of choice:

1. **shadcn/ui**
   - Use as the default code-level component foundation when the repo is compatible.
   - Prefer it for common app UI: buttons, inputs, cards, dialogs, sheets, forms, tables, dropdowns, tabs, toasts.
   - Customize rather than blindly installing many components.

2. **Radix Primitives** or **Base UI**
   - Use when lower-level control is needed, especially for custom interactions, accessibility-heavy patterns, menus, popovers, comboboxes, dialogs, and composable primitives.
   - Prefer these when the product needs stronger visual differentiation or more control than a prebuilt component layer.

3. **Motion**
   - Use for subtle, purposeful motion only.
   - Good uses:
     - enter/exit transitions
     - hover and press feedback
     - sheet/dialog transitions
     - layout animations
     - progressive reveal of important content
   - Avoid decorative or excessive motion.

# Rules

- First inspect the existing repo and design stack before adding anything.
- Extend the current UI system if one already exists.
- Do not introduce multiple full UI kits into the same repo without a strong reason.
- Keep the visual language consistent across spacing, radius, shadows, typography, and interaction behavior.
- Prefer accessibility and clarity over flashy visuals.
- Prefer scalable layout systems over one-off styling.
- Avoid overbuilding.
- Do not add trendy patterns that hurt readability, density, or trust.
- Keep B2B interfaces modern but credible.
- Never install dependencies silently if project guidance says approval is required.

# Required workflow

1. Inspect the repository.
   - Identify framework, styling solution, component patterns, form strategy, table strategy, and existing tokens.
   - Check if AGENTS.md or project docs define a preferred stack.

2. Decide the path.
   - If the repo already uses a coherent UI stack, continue that stack.
   - If the repo has no clear UI foundation, propose a small plan before changing files.

3. Define the interface system.
   - Identify:
     - typography scale
     - spacing rhythm
     - radius levels
     - border treatment
     - surface hierarchy
     - motion rules
   - Reuse or document these decisions.

4. Build the screen or feature.
   - Structure first
   - hierarchy second
   - interactions third
   - polish last

5. Sanity-check the result.
   - Verify responsiveness
   - verify keyboard flow where relevant
   - verify states:
     - default
     - hover
     - active
     - disabled
     - loading
     - empty
     - error

6. Summarize what was changed.
   - Mention components added
   - mention dependencies added
   - mention any assumptions
   - update docs when behavior or stack changed

# Design expectations

Every UI task should aim for:
- a clear primary action
- obvious section hierarchy
- controlled density
- trustworthy visual tone
- consistent component choices
- meaningful empty states
- sensible feedback for success/error/loading
- no visual clutter

# Preferred implementation patterns

## Landing pages
- Build section-first
- Keep a strong hero
- Make CTA hierarchy obvious
- Use testimonials, trust blocks, and proof carefully
- Use motion sparingly

## Dashboards / internal tools
- Prioritize scanning and task completion
- Use cards and tables carefully
- Reduce decorative noise
- Make filters, actions, and statuses obvious
- Design for real data density

## Forms
- Prefer clear grouping
- Keep labels explicit
- Use inline validation where helpful
- Avoid long walls of fields when progressive disclosure is possible

## Dialogs / overlays
- Use accessible primitives
- Make destructive actions clear
- Keep dismissal behavior predictable

# Output style when working

When this skill is used, always:
- explain the chosen UI path briefly
- say whether you are using existing stack vs introducing a new one
- name any new dependencies before adding them if approval is required
- keep changes incremental
- avoid giant UI rewrites unless requested

# When to stop and ask

Pause and ask before proceeding if:
- the repo already uses a different component library and migration would be non-trivial
- the user asks for “unique” design but provides no brand direction
- installing a new dependency could conflict with the current stack
- there is no clear answer on whether the interface is B2B, consumer, internal, or marketing-facing

# Definition of done

A task using this skill is done when:
- the UI is coherent and noticeably improved
- the chosen stack is justified
- core states are handled
- the result is responsive enough for intended use
- any stack-level decisions are documented if they changed