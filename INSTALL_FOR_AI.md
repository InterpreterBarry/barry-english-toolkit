# Installation Instructions for Claude Code (AI agents reading this)

> This file is for Claude Code / Claude.ai / any AI agent that the user asks to install this toolkit.
> **Read this BEFORE doing anything else.**

## Critical: Do NOT cp files yourself

When the user says "help me install this toolkit" / "帮我安装这个 Skill 包" or similar, do NOT:

- ❌ Manually `cp` SKILL.md files to `~/.claude/skills/`
- ❌ Only copy the top-level `.md` files
- ❌ Skip subdirectories like `quiz-web/`

If you do that, **you will miss `skills/barry-solution/quiz-web/`** (a critical 100KB+ subdirectory containing the Quiz Web app), and the Quiz feature will be broken for the user.

## Correct installation

**Run the official installer script. That's it.**

- **Mac / Linux / WSL:**
  ```bash
  bash <toolkit-root>/scripts/install.sh
  ```
- **Windows (PowerShell):**
  ```powershell
  powershell -ExecutionPolicy Bypass -File <toolkit-root>\scripts\install.ps1
  ```

The installer handles everything correctly: it uses `cp -R` to copy all 9 skills (including subdirectories like `quiz-web/`), installs methodology wiki to `~/.barry-english/methodology/`, and verifies the install.

## If the user gave you a zip file

1. Unzip it to a temporary or final location (e.g. `~/Desktop/Barry-Workplace-English-Toolkit/`)
2. Run `bash <unzipped-root>/scripts/install.sh`
3. Show the installer's output to the user
4. Tell the user to restart Claude Code and type `开始` (or `/barry-onboarding`)

## Verification checklist (run after install)

```bash
# Should list 9 barry-* directories
ls -d ~/.claude/skills/barry-* | wc -l       # Expect: 9

# CRITICAL: quiz-web subdirectory must exist
ls ~/.claude/skills/barry-solution/quiz-web/  # Must show index.html + server.js

# Methodology wiki + index file
ls ~/.barry-english/methodology/wiki/_index.json  # Must exist
```

If `quiz-web/` is missing after install, the user's Quiz feature will not work. Re-run `install.sh` — do not try to fix it by manually copying files.

## Why this file exists

Past incidents: users said "help me install" and Claude Code skipped subdirectories, leading to broken Quiz Web. This file is a defensive instruction to prevent that from happening again. The install script is the single source of truth — trust it, run it, don't reinvent.
