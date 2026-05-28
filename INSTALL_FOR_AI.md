# Installation Instructions for AI Agents

> This file is for Claude Code / Codex / Cursor / any AI agent that the user asks to install this toolkit.
> Read this before doing anything else.

## Preferred installation

Use the standard Skills installer:

```bash
npx -y skills add InterpreterBarry/barry-english-toolkit -g --all
```

This installs every Barry skill, including required subdirectories:

- `barry-solution/quiz-web/` for the Quiz web app
- `barry-methodology/methodology/` for the methodology wiki used by `barry-coach`

After installing, tell the user to fully quit and reopen their AI agent, then type `开始` or `/barry-onboarding`.

## Do not manually copy only SKILL.md

Do not:

- Copy only top-level `SKILL.md` files
- Skip subdirectories like `quiz-web/`
- Skip the `barry-methodology` resource skill

Doing so will break Quiz or methodology Q&A.

## Fallback installation

If `npx` / npm is unavailable, use the legacy installer:

Mac / Linux / WSL:

```bash
bash <toolkit-root>/scripts/install.sh
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File <toolkit-root>\scripts\install.ps1
```

The fallback installer currently targets Claude Code's `~/.claude/skills/` path and also copies methodology to `~/.barry-english/methodology/`.

## Verification checklist

Check whichever Agent skills directory was used, for example `~/.claude/skills`, `~/.codex/skills`, `~/.cursor/skills`, or project `.agents/skills`.

Required files:

```text
barry-onboarding/SKILL.md
barry-coach/SKILL.md
barry-methodology/SKILL.md
barry-methodology/methodology/wiki/_index.json
barry-solution/SKILL.md
barry-solution/quiz-web/index.html
barry-solution/quiz-web/server.js
```

If any of those are missing, rerun the preferred `npx skills add` command rather than hand-copying files.
