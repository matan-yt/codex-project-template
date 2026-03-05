# AGENTS

## Working style

- Plan first: write a short plan before making changes.
- Keep changes small and focused.
- Prefer one concern per PR.

## Safety

- Never commit secrets, tokens, or private keys.
- Keep `.env` local; commit only `.env.example` placeholders.
- Ask for approval before any network access (downloads, API calls, external services).

## Delivery

- Explain what changed and why.
- Run relevant checks before finishing.
- Update docs when behavior or setup changes.