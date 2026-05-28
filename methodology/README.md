# Barry English Methodology Wiki (Open-Source Subset)

This is the **read-only** open-source mirror of Barry's English Communication Methodology Wiki.

- Source of truth: Barry's private knowledge base (not in this repo)
- Synced via: `scripts/sync-methodology.sh`
- Last synced: 2026-05-14 23:49:48 CST

## Structure

```
methodology/
├── README.md          (this file)
├── index.md           (top-level table of contents)
└── wiki/              (108 atomic concept pages organized in 8 sub-folders 00-07)
```

## How to use

- Browse `index.md` for the full structure
- Each wiki page is a self-contained atomic concept (one page = one concept)
- Wiki is consumed by the `barry-coach` Skill via RAG (read-on-demand)
- After learner installation (`barry-solution` Step 4), this directory is copied to `~/.barry-english/methodology/` for Coach to read

## License & contributing

Methodology authored by Barry. This open-source ship is released alongside Barry Workplace English Toolkit. Please do not submit PRs to wiki content directly here — open issues in Barry Workplace English Toolkit repo instead.

