# HivePlay

> Build. Play. Connect.

## Local development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and set the two Supabase public values.
3. In Supabase Auth, create administrator or host users; public registration is intentionally disabled.
4. Run `npm run dev`, then open `http://localhost:3000`.

Use `npm run lint`, `npm run format:check`, and `npm run build` before shipping. The browser only receives `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; never expose a service-role key.

HivePlay is a platform for creating and running live interactive team games. Teams use their mobile phones as controllers while an audience follows the action on a shared display, guided by a dedicated host console.

The platform separates reusable content, game configuration, and live gameplay. This makes games configurable, reusable, and scalable rather than tied to a single presentation or event.

## First game: HivePlay

The first game is a strategic territory-control trivia game played on a hexagonal board.

During each turn:

1. The active team selects a hexagon.
2. A trivia question is presented.
3. Both teams answer simultaneously.
4. The fastest correct answer wins the tile.
5. The system checks for a winning path; if none is possible, the team controlling the most territory wins.

## Product principles

- **Live first** — every experience should run smoothly in a live event.
- **Mobile first** — players use their own phones; no dedicated hardware is required.
- **Server authoritative** — the server validates business rules and determines outcomes.
- **Content driven** — questions, media, themes, and games are reusable and independent from game logic.
- **Simple for hosts** — hosts focus on the audience, not operating software.
- **Built to grow** — modular architecture supports new game formats without redesigning the platform.

## Key capabilities

- Live team-vs-team gameplay
- Mobile controllers for team representatives
- Shared audience screen and dedicated host console
- Reusable question bank with categories and rich media
- Real-time synchronization, timers, and secure server-side validation
- Themes and modular game architecture

## Platform model

```text
Content (questions, categories, media, themes)
                    |
              Game templates
                    |
            Live game sessions
          /         |          \\
       Host     Audience    Team phones
```

### Layers

- **Content layer:** reusable questions, categories, media, and themes.
- **Game layer:** immutable templates defining boards, rules, teams, question pools, timers, and visuals.
- **Session layer:** runtime-only state for a single event, including devices, answers, tile ownership, timers, events, and the current game state.

Live gameplay must never modify the original game template.

## Roles

- **Administrator:** manages content, builds games, launches sessions, and reviews statistics.
- **Host:** runs the event, controls timers and media, reveals answers, pauses play, undoes actions, and ends games.
- **Team representative:** joins a session from one phone per team, answers questions, chooses tiles, and sees team status.
- **Audience:** watches gameplay, questions, media, scores, and winners.

## Planned technology stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Supabase (PostgreSQL, Realtime, Storage, Edge Functions)
- Delivery: GitHub and Vercel

## Development status

HivePlay is in the **Foundation** milestone. The immediate goals are:

- Project setup
- Database architecture and authentication
- Question management
- Game builder
- Live-session engine

## Roadmap

1. **Foundation:** project setup, database, authentication, and design system.
2. **Content management:** question bank, categories, and media library.
3. **Game builder:** boards, rules, themes, and question pools.
4. **Live gameplay:** host console, team phones, audience screen, and realtime synchronization.
5. **Polish:** sound, animations, statistics, session history, and performance work.

## Future game formats

The common platform can support trivia, bingo, escape rooms, ice breakers, classroom activities, family games, surveys, and team-building experiences.

## Repository structure (target)

```text
docs/                 Product, architecture, UX, API, and decision documentation
public/               Static assets
src/                  Application source code
supabase/
  migrations/         Database migrations
  functions/          Edge Functions
  seed.sql            Local seed data
```

## Documentation and contributing

This is a private repository. Before implementing a feature, review the relevant product and technical documentation, keep business logic on the server, and update documentation whenever behavior changes.

See [AGENTS.md](AGENTS.md) for project working conventions.

## License

Private repository. All rights reserved.
