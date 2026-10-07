---
name: ux-sync
description: Rebuild the ux-library and agentic-patterns skills from the Notion "Design - Best Practices Library" database. Use it when the user asks to sync, refresh, update, rebuild, re-export or re-import the UX library, when they say they added or edited practices in Notion, when index/_overview.md is older than a month, or when the library files are missing. Also handles pushing canonical IDs and approved enrichment fields back to Notion. Invoke as /ux-sync.
---

# ux-sync

Runs the pipeline in `scripts/` and reports what changed. All scripts use only the Python standard library and need `NOTION_TOKEN` in the environment (an internal Notion integration connected to the database).

## Steps

1. Check prerequisites: `python3 --version` (3.10+), `NOTION_TOKEN` set, `config/build.json` present. If the token is missing, stop and tell the user how to create one (Notion → Settings → Connections → Develop or manage integrations → new internal integration → copy token → open the database page → ⋯ → Connections → add the integration).
2. Export: `python scripts/export_notion.py` (incremental; add `--full` if the user says bodies changed without property edits, or `--legacy` if the API rejects the data-source endpoint).
3. Audit: `python scripts/audit_library.py`. Read `reports/audit.md`. Surface to the user: new ID collisions, entries without ID, near-duplicate pairs added since last time, entries missing How to Implement.
4. Build: `python scripts/build_skills.py --clean`. Read the summary line.
5. Diff: `git status --short skills/ data/id_map.json` (or compare `index/_overview.md` counts with the previous version). Tell the user how many entries were added, changed or removed and which categories moved.
6. If `data/id_changes.csv` is non-empty, offer `python scripts/push_notion.py --ids` (dry-run) and then `--apply`. Never run `--apply` without the user's explicit yes. After a push, rerun steps 2 and 4 so Notion and the skill agree.
7. If `data/enrichment/*.json` exists with reviewed rows (see `ux-enrich`), offer to push them with `--updates`, same confirmation rule.
8. Remind the user to commit `skills/`, `data/id_map.json` and `data/practices.json` together; `data/raw/` is a cache and can stay untracked.

## Report shape

Three to six lines: build date, totals per group, what changed, what needs a decision (collisions, duplicates, pending pushes). No file-by-file listing.

## Failure modes

- 401/403 from Notion: the integration is not connected to the database page, or the token is from another workspace.
- 404 on `/data_sources/…`: the API version in `config/build.json` is older than the data-source API; use `--legacy` or update `api_version`.
- 429 storms: raise `throttle_seconds` in the config to 0.5.
- Build reports "grupo sin skill": a new category was mapped to a group that has no `skills` entry in the config; add it.
