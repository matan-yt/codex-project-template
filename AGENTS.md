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

## Git & delivery

- Default behavior: after each meaningful change, stage, commit, and push.
- Use conventional commit messages (`feat`, `fix`, `docs`, `chore`).
- If `git` is not available in the current shell, use the full path: `C:\Program Files\Git\cmd\git.exe`.
- If push fails due to auth, stop and tell the user what to do (do not loop).
