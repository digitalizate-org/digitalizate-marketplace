---
name: linear-sync
description: Rebuild the linear-library index and references from the markdown canon in library/, validate IDs and cross-references, and run the plugin's tests. Use it after adding or editing rules in library/, when the overview build date is older than the latest library change, when the index or references are missing, or when the user asks to sync, rebuild, recompile, validate or lint the Linear Method library. Invoke as /linear-sync.
---

# linear-sync

Goal: `skills/linear-library/index` and `references` always reflect `library/`, and the canon stays consistent.

## Procedure

1. From the plugin root: `npm run build` (runs `scripts/build-index.ts`). It refuses duplicate IDs, unknown references in `measured_by`, `measures` or `violates`, and signals without `check`, `check_scope` or `severity`. Fix the library file it names, never the generated output.
2. `npm test`: library loads, signals parse, fixtures fire the expected signals, guard rules behave.
3. Report: entry count per category and tier (from `index/_overview.md`), any rule marked `status: Proposed`, and the build date.

## Adding a rule

Copy a neighboring file in `library/<category>/`, take the next free ID in that block (principles 001-009, direction 010-019, projects 020-029, cycles 030-039, issues 040-049, triage-and-backlog 050-059, quality 060-069, workflow-and-structure 070-079, design-and-users 080-089, agents 090-099, signals 100-139, antipatterns 140-159), set `source_tier` honestly (an `interpretation` rule scores 3 at most), and add Evidence from real sources only. A signal needs a metric that `scripts/lib/metrics.ts` produces; add the metric there with a test before adding the signal.

## Things that go wrong

- Editing `index/` or `references/` by hand (they are overwritten).
- Citing a simulated case as evidence.
- Marking an author's threshold as `official-method`.
