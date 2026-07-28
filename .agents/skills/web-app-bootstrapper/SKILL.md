---
name: web-app-bootstrapper
description: use this skill when starting a new web app project from the repository template. best for new internal tools, client-facing web apps, dashboards, and workflow systems that should begin with a clean, modern, runnable foundation. use when codex needs to inspect a freshly created repo from the template, ask a few setup questions, and then turn the generic template into a real next.js app router project with typescript, tailwind, shadcn/ui, updated project docs, a placeholder home page, and a clean first commit. do not use for backend-only work, local python tools, games, or projects that already have an established app structure.
---

# Purpose

This skill turns a fresh repository created from the project template into a real, runnable web application foundation.

The template already contains shared project files such as:
- README.md
- AGENTS.md
- CHANGELOG.md
- .env.example
- docs/
- scripts/

This skill should not recreate the template.  
It should convert the generic template into a project-specific web app foundation.

# Default stack

Unless the user explicitly says otherwise, use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

Do not include by default:
- database setup
- auth
- Supabase
- Vercel deployment setup
- test framework
- Motion
- business logic beyond a placeholder screen

# Required workflow

## 1. Inspect the repository first

Before making changes:
- inspect the current repo
- confirm it looks like a fresh project created from the template
- read AGENTS.md and relevant docs if present
- identify whether the repo already contains app code or only template scaffolding

If the repo already has a clear app structure, do not blindly bootstrap again.  
Pause and explain what already exists.

## 2. Ask a few setup questions

Ask a short, focused set of questions before bootstrapping.

Keep it to the essentials. For example:
- What kind of web app is this: internal tool, client-facing app, dashboard, workflow system, or landing-style app?
- Is this meant to stay local-only or be deployable later?
- Does the app probably need auth later?
- Does the app probably need a database later?
- What short project description should replace the generic template README text?
- What should the placeholder homepage communicate?

Do not ask too many questions.  
If the user does not know, choose sensible defaults and state assumptions clearly.

## 3. Convert the template into a runnable app foundation

Bootstrap the project into a real web app.

Expected result:
- a runnable Next.js App Router project
- TypeScript enabled
- Tailwind configured
- shadcn/ui initialized if appropriate for the repo
- app structure created inside the existing repo
- no unnecessary extras

Prefer incremental setup.  
Do not add tools or libraries that are not needed for the first useful version.

## 4. Update template files into project-specific files

The template files already exist, but they must be rewritten to match the actual project.

Update:
- README.md
- .env.example
- docs/project-spec.md if available or create it if needed
- other relevant docs only if useful

README.md should stop being “template README” and become “project README”.

README should include:
- what this project is
- stack used
- how to install and run locally
- important scripts
- current scope of the app
- future integration notes only if relevant

.env.example should include only variables relevant to the current project stage.  
Do not invent secret values.

## 5. Create a minimal but good app structure

Create a clean structure suitable for a modern Next.js project.

Prefer a simple structure such as:
- app/
- components/
- lib/
- public/

Only add extra folders if they are clearly justified.

Avoid overengineering.

## 6. Create a meaningful placeholder homepage

Create a placeholder first screen that makes the project feel real.

It should:
- reflect the project type
- use the chosen stack cleanly
- look modern and credible
- not be generic boilerplate if the user already gave enough context

A good placeholder homepage should include:
- project title
- short explanation
- one or two clear UI sections
- clean spacing and hierarchy
- a tone that matches the project type

Do not build full product logic at this stage.

## 7. Summarize clearly before and after big steps

Before installing major dependencies or making structural changes:
- briefly explain the plan

After bootstrapping:
- summarize what was created
- list dependencies added
- mention assumptions
- mention what was intentionally left out

## 8. Git workflow

After a meaningful bootstrap step is complete:
- stage all relevant files
- create a clear commit
- push

Use a commit message such as:
- feat: bootstrap web app foundation
- docs: update project readme after bootstrap
- chore: initialize shadcn ui

If push fails due to auth or environment issues, stop and explain exactly what the user needs to do.

# Rules

- do not recreate the repository template itself
- do not overwrite user-specific project intent with generic placeholder text if enough context exists
- do not add database, auth, deployment, or tests by default
- do not silently install many extra dependencies
- do not overbuild the folder structure
- do not turn bootstrap into full product development
- do not introduce multiple UI systems
- prefer Tailwind + shadcn/ui as the default visual foundation
- if the repo already contains a different coherent UI stack, stop and ask before changing direction

# When to pause and ask

Pause before proceeding if:
- the repo already contains meaningful app code
- the user wants a local-only script or non-web project
- the user explicitly wants a different framework
- the project clearly needs DB/auth decisions before the homepage can make sense
- shadcn/ui would conflict with the current setup

# Definition of done

A task using this skill is done when:
- the generic template has been converted into a real web project
- the repo runs locally
- the stack is clear and minimal
- the README is project-specific
- .env.example matches the current stage
- the homepage is a credible placeholder
- the changes are committed and pushed