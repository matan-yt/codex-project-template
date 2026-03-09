# AGENTS

## Hebrew / RTL default

- Default behavior: when output is mainly Hebrew, wrap the Hebrew prose in `<div dir="rtl">` and `</div>`, even without an explicit skill request.
- Keep Hebrew sentences short and readable.
- Wrap English technical terms, commands, file names, paths, variables, and code identifiers in backticks.
- Prefer bullets over dense inline mixed-language text.
- Avoid markdown tables for mixed Hebrew-English content unless explicitly requested.
- For command examples, always use fenced code blocks.
- For file names and paths, always use backticks.

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
