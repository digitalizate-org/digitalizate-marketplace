# HANDOFF: live verification of digitalizate-linear-method in Claude Code

Audience: a Claude Code instance (opusplan is fine) running in a repository that has this plugin available and a Linear workspace to test against. Everything here was built and unit-tested offline; the API schema was checked against `@linear/sdk` 97.1.0 and the MCP tool schemas against the Linear connector in claude.ai. What remains is to run it against a real workspace and fix whatever reality disagrees with.

Do not change the canon's content or the autonomy policy while verifying. Fix mechanics only, and record each change in the "Changes made" section at the end of this file.

## 0. Setup

```bash
cd <plugin dir>
npm install
npm run build && npm test          # expect 143 entries built, 24 tests passing
claude plugin validate .           # expect "Validation passed" (warnings about author email/url are fine)
export LINEAR_API_KEY=lin_api_...  # never commit it
export LINEAR_METHOD_RUN_OWNER="<your name>"
```

Load the plugin in a project directory: `claude --plugin-dir <plugin dir>` from the project you want to work in. Confirm the Linear MCP is connected: `/mcp` should list it; note its exact server name.

## 1. MCP tool names (hooks matcher)

The hooks matcher expects tool names like `mcp__linear__save_issue`. Check the actual names: ask Claude to list the Linear tools, or inspect `/mcp`. If the server is named differently (for example `mcp__linear-server__...`) or the tools are `create_issue`/`update_issue`, the matcher in `hooks/hooks.json` already allows `[Ll]inear.*__` and `create_|update_`; if the prefix differs further, edit the two matchers and note it below.

Test the guard live: ask Claude to create an issue titled "As a user I want to export invoices" in a test team. Expected: the PreToolUse hook denies with the LM-040 reason and Claude rewrites it as a task. Then create "Add CSV export to invoices" with no labels: expected allow plus a PostToolUse warning (LM-073) visible to Claude, and a line in `.linear-method/mcp-writes.log`.

Writing warnings (0.2.0): create a `linear-decisions.md` in the project with `- issue.primary_reader: business` under `## Issue writing`. Ask Claude for an issue whose description contains commands and three file paths: expected allow, plus a visible PostToolUse warning LM-160. Create five sub-issues of the same parent in under ten minutes: the fifth carries LM-165 and `.linear-method/mcp-writes.log` shows `parentId`. Write a description of more than 2,500 characters outside the checklist, also when editing: LM-161. Without the reader line, LM-160 must not appear.

If the deny does not fire: run `claude --debug` and look for the hook execution; check that `node` is on PATH for hooks; check `${CLAUDE_PLUGIN_ROOT}` resolves (print it from a Bash command inside a skill).

## 2. Snapshot against the real workspace

```bash
cd <project dir>
npx --yes tsx "<plugin dir>/scripts/snapshot.ts" --team <KEY>
```

Expected: `.linear-method/snapshot.json` and `raw.json`. Known risks, in order of likelihood:

- `integrations` query rejected (permissions): the script already catches it and sets `integrations.git_connected` to null (LM-109 is then skipped). Fine.
- Field name errors from the API (schema drift): the error message names the field. Fix the query in `snapshot.ts`, keep the `RawTypes` in sync, re-run.
- Large workspaces: issues are paginated at 100; projects at 50; cycles limited to the last 120 days. If a team has thousands of active issues, add `--team` and raise nothing else.
- Rate limits: the client retries on 429 up to five times with backoff.

Since 0.2.0 the script prints the applied reader to stderr (read from `linear-decisions.md`); without a declared reader, LM-139 appears under "Not evaluated".

Then `npx --yes tsx "<plugin dir>/scripts/evaluate.ts"` and read the markdown. Sanity-check three findings by opening the objects in Linear. Record false positives below (a false positive usually means a metric definition needs a tweak in `scripts/lib/metrics.ts`, plus a test in `tests/helpers.ts`).

## 3. Skills end to end

Run each once in a test team:

1. `/linear-audit <KEY>`: produces `.linear-method/audit-<date>.md` citing IDs with evidence.
2. `/linear-build create a bug for ...`: the issue appears with a Type label, no story format, quote and link.
3. `/linear-build create a project ...`: lead, target date, spec in the description, initiative attached.
4. `/linear-plan <KEY> next`: proposal at or below capacity; issues assigned to the cycle afterwards.
5. `/linear-fix` on the audit findings with `--include LM-118` only, then `fix.ts undo` on the run file: archived issues come back.
6. `/linear-setup` on an empty test team: settings via `fix.ts apply` (team.update), labels, decisions file. Since 0.2.0 it also asks who reads the issues and writes `issue.primary_reader`.
7. `/linear-sync` after adding one dummy rule with `status: Proposed`, then remove it.

## 4. Things I could not verify offline

- Verified live on 2026-10-14 (Claude Code 2.1.296, Linear MCP `mcp__claude_ai_Linear__*`): `permissionDecision: "deny"` plus exit 0 blocks the call with the LM-040 reason, and PostToolUse `additionalContext` reaches the model with the warnings. No change needed.
- `issueLabelRestore` behavior for retired labels (used by undo of LM-128/LM-129).
- `Project.content` availability through the API for the spec-presence metric (LM-116). If it comes back null for projects that do have content, switch the metric to `documents` + `description` only.
- `save_initiative` input field names (`owner`, `targetDate`, `status`) in the guard's `checkInitiative`; adjust `hooks/rules.mjs` if the MCP uses `ownerId` or different names.

## 5. Acceptance

- `npm test` green, `claude plugin validate` passes.
- Guard denies the four hard cases (story format, status label, Urgent without justification, delegate without assignee) live.
- Audit of a real team runs end to end with at most one false positive per ten findings, each explained below.
- One fix run applied and undone cleanly.

## Changes made

(append here: date, file, what and why; newest first)

2026-10-14 · live check · Section 1 run against a test team: story title denied (LM-040); task without labels allowed with LM-073 surfaced and logged; with `issue.primary_reader: business`, a technical description warned LM-160, the fifth sub-issue under one parent within ten minutes warned LM-165 with `parentId` in `mcp-writes.log`, and a 2,829-character description warned LM-161 on edit; without the reader line, no LM-160. The 0.2.0 hooks ran as processes on the real tool inputs and responses because the session still loaded the 0.1.0 copy (plugins reload on restart). Test issues canceled with a comment. Known gap: Type labels named in Spanish (Mejora, Funcionalidad) trigger LM-073 on every issue; the alias support proposed in the Contravía audit is still pending.
2026-10-13 · 0.2.0 · Canon grows to 143 rules (new `writing` category, LM-094/095/058, antipatterns LM-153/154, signals LM-139/170/171, eight rules edited). New source tier `external-method` with `deviates_from`. Guard adds three non-blocking warnings (LM-160, LM-161, LM-165); declared reader in `linear-decisions.md` and a `writing` threshold block. New issue templates (business, request, support). 24 tests.
