---
name: ux-sync
description: Validate, audit and recompile the ux-library and agentic-patterns skills from the markdown library in library/. Use it when the user asks to sync, refresh, rebuild or recompile the UX library, after they add or edit files in library/, when index/_overview.md is older than the last change to library/, or when the index or references files are missing. Invoke as /ux-sync.
---

# ux-sync

Runs the scripts in `scripts/` and reports what changed. The scripts use only the Python standard library and need no credentials: the source of truth is `library/<category>/<ID>-<slug>.md`. Run it from the kit's root directory (the checkout that holds `scripts/`, `config/` and `library/`), with the plugin loaded from another path or installed from a marketplace: Claude Code blocks agent writes (file tools and Bash alike) inside the directory loaded with `--plugin-dir`.

## Steps

1. Check prerequisites: `python3 --version` (3.10+), `config/build.json` and `library/` present.
2. Audit: `python3 scripts/audit_library.py`. Read `reports/audit.md`. Surface to the user: validation errors (duplicate or malformed IDs, wrong prefix or folder, bad score), near-duplicate pairs added since last time, entries missing How to implement or Why.
3. Build: `python3 scripts/build_skills.py --clean`. It stops on validation errors; otherwise read the summary line (entries per group, categories, goals, entries with a Verify criterion, next free ID per prefix).
4. Diff: `git status --short skills/ library/` and, when useful, `git diff --stat skills/`. Tell the user how many entries were added, changed or removed and which categories moved.
5. Remind the user to commit `library/` and `skills/` together; `reports/` is regenerated and can go in the same commit.

## Adding or changing a practice

- One file per practice under `library/<category-slug>/<ID>-<slug>.md`; copy a neighbouring file as the template. The front matter is a restricted YAML: one-line scalars in double quotes, integers, and lists of strings written as `- "item"`; no `|` or `>` blocks, no `[a, b]`, no nested maps.
- The `id` carries the prefix of its group (`UX-` for every category except Agentic Patterns, which uses `AGP-`); the build prints the next free ID of each prefix. The file name must start with the ID.
- `status: "Proposed"`, `"Merged"` or `"Deprecated"` keeps a file out of the build without deleting it.
- Body sections: `## Why`, `## How to implement`, `## Metrics`, `## Sources` (a list of markdown links); any other `## Heading` is kept as its own block in the reference.

## Report shape

Three to six lines: build date, totals per group, what changed, what needs a decision (validation errors, duplicates, proposals waiting for review). No file-by-file listing.

## Failure modes

- "La librería tiene N errores": the build refuses to compile; fix the files it lists (duplicate IDs, wrong folder, bad front matter) and rerun.
- "sintaxis no admitida en el front matter": a file uses YAML features outside the subset above; rewrite that line with a quoted scalar or a `- "item"` list.
- Build reports "grupo sin skill": a new category was mapped to a group that has no `skills` entry in `config/build.json`; add it.
