# Stack Defaults

Default choices for new web apps in this template.

## Next.js + TypeScript

- Use Next.js App Router with TypeScript enabled.
- Build UI as server-first components; add client components only when needed.
- Add linting, formatting, and tests early to keep quality stable.

## Supabase (Postgres, Auth, Storage)

- Postgres is the primary app database.
- Supabase Auth handles sign-in and session management.
- Supabase Storage is for user-uploaded files and static assets.
- Keep schema changes in migrations and document key data decisions in `docs/decision-log.md`.

## Vercel deployment

- Deploy preview environments on pull requests.
- Promote to production from the main branch with protected checks.
- Configure environment variables in Vercel per environment (dev/preview/prod).
