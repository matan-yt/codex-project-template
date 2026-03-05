# How We Build (Codex + Windows)

Short playbook for building projects with Codex from this template.

## Start a new repo from this template

1. Copy this template folder to a new project folder.
2. Initialize git and first commit:
   - `git init`
   - `git add .`
   - `git commit -m "chore: initialize from template"`
3. Create a remote repo and push:
   - `git remote add origin <your-repo-url>`
   - `git branch -M main`
   - `git push -u origin main`

## 4 standard prompts for Codex

1. Spec
   - "Create a concise project spec using `docs/project-spec-template.md`."
2. Plan
   - "Break the spec into a small implementation plan with milestones."
3. Implement
   - "Implement milestone 1 end-to-end, run checks, and summarize changes."
4. Finalize
   - "Update docs, add changelog entry, and prepare commit message + PR summary."

## Run locally

- `npm install`
- `npm run dev`
- Open local URL shown in terminal (usually `http://localhost:3000`).

## Commit and push

- `git checkout -b codex/<short-topic>`
- `git add .`
- `git commit -m "feat: <what changed>"`
- `git push -u origin codex/<short-topic>`
