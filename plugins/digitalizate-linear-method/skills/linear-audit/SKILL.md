---
name: linear-audit
description: Diagnose a Linear workspace or team against the Linear Method and return findings that cite rule IDs (LM-xxx) with severity, numeric evidence from the real workspace and a fix. Use it whenever the user asks to audit, diagnose, review, assess, "what's wrong with", "why is it slow", "find gaps in" or "health check" their Linear workspace, team, backlog, cycles, triage, projects or initiatives, and before any large cleanup. Runs the snapshot and evaluation scripts when LINEAR_API_KEY is available and falls back to the Linear MCP for a lighter audit. Invoke as /linear-audit [team key | workspace].
---

# linear-audit

Goal: findings someone can act on and argue with. Every finding names a rule ID, shows the number or the object that proves it, and says what to change. "The backlog is too big" is not a finding; "LM-105: backlog holds 6.2 cycles of work (87 issues, 14 completed per cycle); e.g. FE-204 untouched 231 days" is.

## Procedure

### 1. Scope and conventions

- Scope: a team key (`/linear-audit FE`) or the whole workspace. Default to the workspace.
- Read `linear-decisions.md` in the project (also checked at `.linear-method/` and `docs/`). Its `## Exceptions` lines (`LM-108: reason`) are not findings; its `## Threshold overrides` JSON replaces signal thresholds. If the file does not exist, say so once and proceed with the library defaults.

### 2. Get the data

Preferred (needs `LINEAR_API_KEY` in the environment; the key is never printed or stored):

```bash
cd "<project dir>" && npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/snapshot.ts" [--team FE]
npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/evaluate.ts"
```

This writes `.linear-method/snapshot.json`, `.linear-method/raw.json` and `.linear-method/findings.json`, and prints the automatic findings as markdown. Read `findings.json`; do not re-derive numbers by hand that the snapshot already contains.

Fallback (no API key, Linear MCP available): run a lighter audit with the MCP tools and say so in the report. Pull `list_teams` (settings: cycles, triage, states, labels), `list_issues` for triage and backlog (with createdAt/updatedAt), `list_projects` for active projects (lead, targetDate, status, lastUpdate if exposed), `list_initiatives` (owner, status, targetDate), `list_cycles`, and `get_triage_responsibility`. You can evaluate most structural signals (LM-103, LM-108, LM-112, LM-115, LM-119, LM-120, LM-128, LM-129, LM-130, LM-131, LM-136, LM-134, LM-122, LM-121, LM-123, LM-135) and the age-based ones with the issue timestamps (LM-102, LM-118, LM-126). Mark cycle history signals (LM-100, LM-101, LM-106, LM-138) as "not evaluated: needs API snapshot".

### 3. Open the rules

For every finding in `findings.json`, open the signal entry in `linear-library/references/signals.md` and the practice entries it `measures` (grep `^## LM-xxx`). The signal gives the number; the practice gives the rule, the tier and the evidence. Do not cite an ID you have not opened.

### 4. Add judgment findings

The scripts only see numbers. Check, with the snapshot and the MCP, what needs reading:

- Specs: open two or three started projects (`get_project` or `list_documents`). Does the content state why, what, out of scope, how, milestones? (LM-023)
- Projects as containers: names like areas, teams or "v2"; indefinite status misuse (LM-026, LM-140).
- Initiatives phrased as feature lists instead of outcomes (LM-010).
- Issue style in a sample of 10 recent issues: titles as actions, problems filed by outsiders, quotes in bugs (LM-041, LM-044, LM-045).
- Templates (`list_templates`): required description, story format, prefixes (LM-040, LM-042).
- Rituals and roles only if the user describes them; never infer meetings from data.

Each judgment finding needs evidence you saw (identifier, project name, template name). No evidence, no finding.

### 5. Severity

| Severity | Rule |
|---|---|
| High | Signal severity high, or a score-5 practice unmet, or work is invisible or unowned (no lead, no triage owner, labels as statuses, agents without human assignee) |
| Medium | Signal severity medium, or a score-4 practice unmet |
| Low | Signal severity low, score-3 practices, polish |

Interpretation-tier thresholds (LM-100, LM-102, LM-105, LM-107...) keep their severity but the report says the threshold is a recommendation that `linear-decisions.md` can override.

### 6. Write the report

In the user's language. Save it to `.linear-method/audit-<YYYY-MM-DD>.md` and show it.

```
# Linear Method audit — <workspace or team> (<date>)
Scope: <teams, projects, initiatives counted; data source: API snapshot | MCP (lighter)>
Checked: <N> automatic signals (<findings>/<passes>/<skipped>) + <M> judgment checks.

## Findings
| # | Sev | Rule | Evidence | Fix |
|---|---|---|---|---|
| 1 | High | LM-102 Triage older than 3 days (measures LM-052) | FE: max age 17 d; FE-104 (17 d), FE-103 (16 d) | Daily pass by the goalie; declare triage bankruptcy once |
…

## Passes worth keeping
LM-103, LM-109, LM-114 … (IDs only)

## Not evaluated
- LM-100, LM-101 (cycle history): needs API snapshot
- Exceptions respected: LM-108 (Maintenance project, see linear-decisions.md)

## Suggested order
1. <the two or three fixes that unblock the rest, usually ownership and triage>
2. …

## Library proposals
<a recurring problem with no matching rule, phrased as a candidate rule>, or none
```

Order findings by severity, then by how early in the flow they bite (structure → triage → projects → cycles → issues). Cap at about fifteen findings; group the rest in one "Also" line with IDs. Forty findings are not read.

### 7. After the report

- To apply fixes, hand over to `linear-fix` with `.linear-method/findings.json`.
- To record an exception, add `LM-xxx: reason` under `## Exceptions` in `linear-decisions.md`.
- To change a threshold, add it to the `## Threshold overrides` JSON block.

## Things that go wrong

- Reporting a signal without opening the practice it measures.
- Inferring rituals or roles the data cannot show.
- Treating an interpretation-tier threshold as "Linear says".
- Auditing a team that has cycles off with cycle metrics (they are skipped, say so).
- Re-computing by hand what `findings.json` already has.
