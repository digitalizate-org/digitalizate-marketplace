# signals (references)

Each entry is the full text of its library file. Cite by ID.

## LM-100 Cycle completion below 60% over the last three cycles

Kind: signal · Score: 5 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Cycle completion below 60% over the last three cycles is false for the audited scope
Check: `cycles.last3_completion_avg < 0.6` (team, severity high)
Measures: LM-032, LM-003
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-100-cycle-completion-too-low.md

### What it measures

Average of completed over planned issues across the last three closed cycles. Linear's capacity dial uses the same three-cycle window.

### When it fires

`cycles.last3_completion_avg < 0.6` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Plan the next cycle from the completed count, not from wishes; cut load until completion stabilizes between 70% and 90%.

### Evidence

See the practices this signal measures (LM-032, LM-003); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-101 More than a quarter of cycle issues roll over

Kind: signal · Score: 4 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: More than a quarter of cycle issues roll over is false for the audited scope
Check: `cycles.rollover_rate_last3 > 0.25` (team, severity medium)
Measures: LM-033, LM-032
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-101-rollover-too-high.md

### What it measures

Share of issues left uncompleted when each of the last three cycles closed (Linear's uncompletedIssuesUponClose), averaged.

### When it fires

`cycles.rollover_rate_last3 > 0.25` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Review the rolled list at cycle close: split, cancel or unblock every issue that rolled twice; plan less.

### Evidence

See the practices this signal measures (LM-033, LM-032); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-102 An issue has waited in triage for more than three days

Kind: signal · Score: 5 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An issue has waited in triage for more than three days is false for the audited scope
Check: `triage.max_age_days > 3` (team, severity high)
Measures: LM-052, LM-050, LM-051
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-102-triage-older-than-3-days.md

### What it measures

Age in days of the oldest issue currently in a triage-type state. Langfuse clears triage in about a day; Sierra reviews daily.

### When it fires

`triage.max_age_days > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Run the daily pass today; declare triage bankruptcy once if the inbox is large (decline with a comment, keep what someone defends).

### Evidence

See the practices this signal measures (LM-052, LM-050, LM-051); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-103 An active project has no lead

Kind: signal · Score: 5 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project has no lead is false for the audited scope
Check: `projects.active_without_lead_count > 0` (workspace, severity high)
Measures: LM-022
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-103-projects-without-lead.md

### What it measures

Count of projects in planned or started statuses with no lead set.

### When it fires

`projects.active_without_lead_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Assign a lead from the project team for each one; if nobody can lead it, the project is not ready to run.

### Evidence

See the practices this signal measures (LM-022); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-104 An active project is older than six weeks and has no milestones

Kind: signal · Score: 5 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project is older than six weeks and has no milestones is false for the audited scope
Check: `projects.active_over_6w_without_milestones_count > 0` (workspace, severity high)
Measures: LM-020, LM-021, LM-026
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-104-projects-over-6-weeks-without-milestones.md

### What it measures

Count of started projects whose start is more than 42 days ago and that have no milestones. The method asks for one to three weeks per stage.

### When it fires

`projects.active_over_6w_without_milestones_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Split into stage projects or add shipped-stage milestones with dates; close containers that will never end and give them an indefinite status.

### Evidence

See the practices this signal measures (LM-020, LM-021, LM-026); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-105 The backlog holds more than four cycles of work

Kind: signal · Score: 4 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: The backlog holds more than four cycles of work is false for the audited scope
Check: `backlog.cycles_of_work > 4` (team, severity medium)
Measures: LM-054, LM-056
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-105-backlog-larger-than-4-cycles.md

### What it measures

Backlog issue count divided by the average completed count of the last three cycles.

### When it fires

`backlog.cycles_of_work > 4` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Prune: cancel what nobody defends, convert far-off ideas into candidate projects, enable auto-close.

### Evidence

See the practices this signal measures (LM-054, LM-056); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-106 A recent cycle completed no bug or quality work

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: A recent cycle completed no bug or quality work is false for the audited scope
Check: `cycles.cycles_with_zero_bugs_last3 > 0` (team, severity medium)
Measures: LM-060, LM-061, LM-063
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-106-cycles-without-bugs.md

### What it measures

Number of the last three closed cycles whose completed issues include no Bug (or Chore) label.

### When it fires

`cycles.cycles_with_zero_bugs_last3 > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Pull bugs into the current cycle; reserve 20-30% of each cycle for quality.

### Evidence

See the practices this signal measures (LM-060, LM-061, LM-063); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-107 More than 20% of active issues are Urgent

Kind: signal · Score: 4 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: More than 20% of active issues are Urgent is false for the audited scope
Check: `issues.urgent_share > 0.2` (team, severity medium)
Measures: LM-074
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-107-urgent-share-over-20-percent.md

### What it measures

Share of non-completed, non-canceled issues with priority Urgent.

### When it fires

`issues.urgent_share > 0.2` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Reset priorities in triage; reserve Urgent for incidents decided by the goalie; write the priority definitions in linear-decisions.md.

### Evidence

See the practices this signal measures (LM-074); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-108 An active project belongs to no initiative

Kind: signal · Score: 3 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project belongs to no initiative is false for the audited scope
Check: `projects.active_without_initiative_count > 0` (workspace, severity low)
Measures: LM-004, LM-010, LM-015
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-108-projects-without-initiative.md

### What it measures

Count of planned or started projects with no initiative. Maintenance containers are an acceptable exception; record them in linear-decisions.md.

### When it fires

`projects.active_without_initiative_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Attach each project to one of the active initiatives, or record the exception.

### Evidence

See the practices this signal measures (LM-004, LM-010, LM-015); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-109 No GitHub or GitLab integration is connected

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: No GitHub or GitLab integration is connected is false for the audited scope
Check: `integrations.git_connected == false` (workspace, severity medium)
Measures: LM-048, LM-006
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-109-git-not-connected.md

### What it measures

Whether a GitHub or GitLab integration exists in the workspace, so PRs can move issue states.

### When it fires

`integrations.git_connected == false` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Connect the repository; let PR events move states; define Done.

### Evidence

See the practices this signal measures (LM-048, LM-006); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-110 Cycles are disabled on a team that plans work

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Cycles are disabled on a team that plans work is false for the audited scope
Check: `cycles.enabled == false` (team, severity medium)
Measures: LM-030
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-110-cycles-disabled.md

### What it measures

Team setting cyclesEnabled.

### When it fires

`cycles.enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Enable cycles at two weeks (one week for tiny or early teams), starting on a fixed weekday.

### Evidence

See the practices this signal measures (LM-030); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-111 Open issues use the user-story template

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Open issues use the user-story template is false for the audited scope
Check: `issues.user_story_count > 0` (team, severity medium)
Measures: LM-040
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-111-user-story-pattern-in-issues.md

### What it measures

Count of active issues whose title or description matches an "As a <role>, I want..." or "Como <rol>, quiero..." pattern.

### When it fires

`issues.user_story_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Move the why to the project spec; rewrite the issue as a task; remove the template requirement.

### Evidence

See the practices this signal measures (LM-040); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-112 More teams exist than distinct cadences

Kind: signal · Score: 4 · Tier: linear-internal · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: More teams exist than distinct cadences is false for the audited scope
Check: `teams.excess_over_cadences > 0` (workspace, severity medium)
Measures: LM-070, LM-077
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-112-more-teams-than-cadences.md

### What it measures

Team count minus the number of distinct cycle configurations (enabled, duration, start day, cooldown). Teams that share a cadence usually mirror the org chart.

### When it fires

`teams.excess_over_cadences > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Merge teams that share a cadence; use Area labels or sub-teams with inheritance.

### Evidence

See the practices this signal measures (LM-070, LM-077); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-113 An issue delegated to an agent has no human assignee

Kind: signal · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An issue delegated to an agent has no human assignee is false for the audited scope
Check: `issues.delegated_without_assignee_count > 0` (team, severity high)
Measures: LM-090, LM-091
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-113-delegated-without-human-assignee.md

### What it measures

Count of issues with a delegate set and no assignee.

### When it fires

`issues.delegated_without_assignee_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Assign a human to each delegated issue; the assignee reviews the agent's output.

### Evidence

See the practices this signal measures (LM-090, LM-091); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-114 An active project has no update in the last 7 days

Kind: signal · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project has no update in the last 7 days is false for the audited scope
Check: `projects.active_update_stale_7d_count > 0` (workspace, severity high)
Measures: LM-025
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-114-project-updates-stale.md

### What it measures

Count of started projects whose last update is older than 7 days or missing.

### When it fires

`projects.active_update_stale_7d_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Turn on update reminders; the lead writes the update this week; review missing updates at cycle close.

### Evidence

See the practices this signal measures (LM-025); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-115 An active project has no target date

Kind: signal · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project has no target date is false for the audited scope
Check: `projects.active_without_target_date_count > 0` (workspace, severity medium)
Measures: LM-024
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-115-projects-without-target-date.md

### What it measures

Count of planned or started projects with no target date.

### When it fires

`projects.active_without_target_date_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Set a target date within one to three weeks for the current stage; move it only in an update.

### Evidence

See the practices this signal measures (LM-024); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-116 An active project has no spec content

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project has no spec content is false for the audited scope
Check: `projects.active_without_spec_count > 0` (workspace, severity medium)
Measures: LM-023
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-116-projects-without-spec.md

### What it measures

Count of started projects whose overview content and description are both shorter than 200 characters and that have no project document.

### When it fires

`projects.active_without_spec_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Write the one-page spec with the template before writing more issues.

### Evidence

See the practices this signal measures (LM-023); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-117 A project has sat above 85% progress for more than a cycle

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: A project has sat above 85% progress for more than a cycle is false for the audited scope
Check: `projects.active_progress_over_85_count > 0` (workspace, severity low)
Measures: LM-029, LM-008
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-117-projects-stuck-above-85-percent.md

### What it measures

Count of started projects with progress above 0.85 and no completion. The snapshot cannot see how long; treat as a prompt to decide.

### When it fires

`projects.active_progress_over_85_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Complete the project and move leftovers to a follow-up project or cancel them.

### Evidence

See the practices this signal measures (LM-029, LM-008); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-118 Backlog issues untouched for six months

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Backlog issues untouched for six months is false for the audited scope
Check: `backlog.stale_180d_count > 0` (team, severity medium)
Measures: LM-054, LM-055
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-118-backlog-items-untouched-6-months.md

### What it measures

Count of backlog issues not updated in 180 days.

### When it fires

`backlog.stale_180d_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Cancel or archive with a standard comment; enable auto-close.

### Evidence

See the practices this signal measures (LM-054, LM-055); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-119 An active initiative has no owner

Kind: signal · Score: 5 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active initiative has no owner is false for the audited scope
Check: `initiatives.active_without_owner_count > 0` (workspace, severity high)
Measures: LM-010
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-119-initiatives-without-owner.md

### What it measures

Count of Planned or Active initiatives with no owner.

### When it fires

`initiatives.active_without_owner_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Assign an owner who writes the initiative updates.

### Evidence

See the practices this signal measures (LM-010); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-120 More than four initiatives are active

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: More than four initiatives are active is false for the audited scope
Check: `initiatives.active_count > 4` (workspace, severity low)
Measures: LM-010
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-120-too-many-active-initiatives.md

### What it measures

Count of Active initiatives. Linear's own roadmap ran two strategic workstreams plus asks and keep-the-lights-on.

### When it fires

`initiatives.active_count > 4` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Merge or sequence initiatives; keep one to four active.

### Evidence

See the practices this signal measures (LM-010); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-121 Started issues are not auto-added to the active cycle

Kind: signal · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Started issues are not auto-added to the active cycle is false for the audited scope
Check: `cycles.auto_add_started == false` (team, severity low)
Measures: LM-034
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-121-auto-add-started-disabled.md

### What it measures

Team setting cycleIssueAutoAssignStarted (evaluated only when cycles are enabled).

### When it fires

`cycles.auto_add_started == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Enable auto-add for started and completed issues in team settings.

### Evidence

See the practices this signal measures (LM-034); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-122 More than three upcoming cycles are created

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: More than three upcoming cycles are created is false for the audited scope
Check: `cycles.upcoming_count > 3` (team, severity low)
Measures: LM-036
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-122-too-many-upcoming-cycles.md

### What it measures

Team setting upcomingCycleCount.

### When it fires

`cycles.upcoming_count > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Set upcoming cycles to 2 or 3; plan further out with projects and milestones.

### Evidence

See the practices this signal measures (LM-036); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-123 Auto-close of inactive backlog issues is off

Kind: signal · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Auto-close of inactive backlog issues is off is false for the audited scope
Check: `settings.auto_close_enabled == false` (team, severity low)
Measures: LM-055, LM-054
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-123-auto-close-disabled.md

### What it measures

Team setting autoClosePeriod is null.

### When it fires

`settings.auto_close_enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Enable auto-close (3 or 6 months) and auto-archive.

### Evidence

See the practices this signal measures (LM-055, LM-054); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-124 Open issues have titles longer than 80 characters

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Open issues have titles longer than 80 characters is false for the audited scope
Check: `issues.long_title_count > 0` (team, severity low)
Measures: LM-041
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-124-issue-titles-over-80-chars.md

### What it measures

Count of active issues with a title longer than 80 characters.

### When it fires

`issues.long_title_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Shorten the titles; move detail to the description, type to labels, priority to the field.

### Evidence

See the practices this signal measures (LM-041); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-125 Issues in Todo or In Progress have no assignee

Kind: signal · Score: 4 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Issues in Todo or In Progress have no assignee is false for the audited scope
Check: `issues.active_unassigned_count > 0` (team, severity medium)
Measures: LM-047
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-125-active-issues-unassigned.md

### What it measures

Count of issues in unstarted or started states with no assignee.

### When it fires

`issues.active_unassigned_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Assign at planning; send unassigned issues back to backlog.

### Evidence

See the practices this signal measures (LM-047); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-126 Issues have been in progress for more than 14 days

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Issues have been in progress for more than 14 days is false for the audited scope
Check: `issues.started_over_14d_count > 0` (team, severity low)
Measures: LM-046
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-126-issues-in-progress-over-14-days.md

### What it measures

Count of issues in started states whose startedAt is more than 14 days ago.

### When it fires

`issues.started_over_14d_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Split into sub-issues with visible results, or unblock.

### Evidence

See the practices this signal measures (LM-046); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-127 One person created most of the active issues

Kind: signal · Score: 3 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: One person created most of the active issues is false for the audited scope
Check: `issues.single_creator_share > 0.6` (team, severity low)
Measures: LM-043, LM-044
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-127-single-creator-dominates.md

### What it measures

Largest share of active issues created by a single user.

### When it fires

`issues.single_creator_share > 0.6` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Give the team the spec and milestones; let each person write their own issues.

### Evidence

See the practices this signal measures (LM-043, LM-044); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-128 Labels encode workflow status

Kind: signal · Score: 5 · Tier: evidence · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Labels encode workflow status is false for the audited scope
Check: `labels.status_like_count > 0` (team, severity high)
Measures: LM-072
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-128-status-like-labels.md

### What it measures

Count of labels whose name matches blocked, waiting, review, qa, ready, done, todo, in progress, on hold, pending, awaiting.

### When it fires

`labels.status_like_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Delete the label; use blocking relations, the In Review state, or snooze.

### Evidence

See the practices this signal measures (LM-072); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-129 Labels encode priority

Kind: signal · Score: 4 · Tier: evidence · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Labels encode priority is false for the audited scope
Check: `labels.priority_like_count > 0` (team, severity medium)
Measures: LM-073, LM-074
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-129-priority-like-labels.md

### What it measures

Count of labels whose name matches urgent, critical, p0-p3, high or low priority.

### When it fires

`labels.priority_like_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Delete the label; set the native priority in triage.

### Evidence

See the practices this signal measures (LM-073, LM-074); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-130 The team has states beyond the defaults plus In Review and Won't Fix

Kind: signal · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: The team has states beyond the defaults plus In Review and Won't Fix is false for the audited scope
Check: `states.extra_count > 0` (team, severity low)
Measures: LM-071
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-130-extra-workflow-states.md

### What it measures

Count of workflow states whose names are outside the default set and the two allowed additions.

### When it fires

`states.extra_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Collapse to defaults; handle waits with relations; keep Won't Fix if the zero-bugs rule is in place.

### Evidence

See the practices this signal measures (LM-071); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-131 No Bug/Feature/Improvement/Chore labels exist

Kind: signal · Score: 3 · Tier: evidence · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: No Bug/Feature/Improvement/Chore labels exist is false for the audited scope
Check: `labels.type_group_present == false` (team, severity low)
Measures: LM-073, LM-060
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-131-no-type-labels.md

### What it measures

Whether the team or workspace has labels named Bug, Feature, Improvement or Chore.

### When it fires

`labels.type_group_present == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Create the Type label group and require it in triage.

### Evidence

See the practices this signal measures (LM-073, LM-060); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-132 An active initiative has no update in 30 days

Kind: signal · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active initiative has no update in 30 days is false for the audited scope
Check: `initiatives.active_update_stale_30d_count > 0` (workspace, severity low)
Measures: LM-017
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-132-initiative-updates-stale.md

### What it measures

Count of Active initiatives whose last update is older than 30 days or missing.

### When it fires

`initiatives.active_update_stale_30d_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Write the initiative update; schedule the monthly review.

### Evidence

See the practices this signal measures (LM-017); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-133 An active project has more than three members

Kind: signal · Score: 3 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: An active project has more than three members is false for the audited scope
Check: `projects.active_members_over_3_count > 0` (workspace, severity low)
Measures: LM-028, LM-020
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-133-projects-with-more-than-3-members.md

### What it measures

Count of started projects with more than three members.

### When it fires

`projects.active_members_over_3_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Split into parallel projects of one to three people.

### Evidence

See the practices this signal measures (LM-028, LM-020); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-134 Triage is enabled but nobody is responsible

Kind: signal · Score: 4 · Tier: linear-internal · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Triage is enabled but nobody is responsible is false for the audited scope
Check: `triage.has_responsibility == false` (team, severity medium)
Measures: LM-051
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-134-triage-without-responsibility.md

### What it measures

Team has triage enabled and no triage responsibility configured (evaluated only when triage is enabled). A manual rotation recorded in linear-decisions.md counts as an exception.

### When it fires

`triage.has_responsibility == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Configure triage responsibility or record the weekly rotation in linear-decisions.md.

### Evidence

See the practices this signal measures (LM-051); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-135 Estimates are enabled

Kind: signal · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Estimates are enabled is false for the audited scope
Check: `settings.estimates_enabled == true` (team, severity low)
Measures: LM-076
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-135-estimates-enabled.md

### What it measures

Team issueEstimationType is not notUsed. A reason in linear-decisions.md makes this an accepted exception.

### When it fires

`settings.estimates_enabled == true` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Disable estimates unless a written reason exists; plan from completed counts.

### Evidence

See the practices this signal measures (LM-076); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-136 Triage is disabled

Kind: signal · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Triage is disabled is false for the audited scope
Check: `triage.enabled == false` (team, severity medium)
Measures: LM-050
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-136-triage-disabled.md

### What it measures

Team setting triageEnabled.

### When it fires

`triage.enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Enable triage and route integrations to it.

### Evidence

See the practices this signal measures (LM-050); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-137 Issues in the active cycle belong to no project

Kind: signal · Score: 3 · Tier: official-method · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Issues in the active cycle belong to no project is false for the audited scope
Check: `issues.in_cycle_without_project_count > 3` (team, severity low)
Measures: LM-004
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-137-cycle-issues-without-project.md

### What it measures

Count of issues in the active cycle with no project. Bugs and chores are expected here; the threshold allows a few.

### When it fires

`issues.in_cycle_without_project_count > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Attach feature work to projects; keep bugs and chores as the explicit exception.

### Evidence

See the practices this signal measures (LM-004); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-138 Every one of the last three cycles completed above 98%

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Every one of the last three cycles completed above 98% is false for the audited scope
Check: `cycles.last3_completion_min > 0.98` (team, severity low)
Measures: LM-011, LM-032
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles / Triage / Projects / Teams (https://linear.app/docs, 2026-10)
File: library/signals/LM-138-cycle-completion-always-100.md

### What it measures

Minimum completion across the last three closed cycles. Consistent 100% suggests under-planning or manual cleanup.

### When it fires

`cycles.last3_completion_min > 0.98` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

### Fix

Plan a little above last cycle's completed count; keep rollover automatic.

### Evidence

See the practices this signal measures (LM-011, LM-032); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.

## LM-139 Many open issue descriptions carry a technical trail

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Many open issue descriptions carry a technical trail is false for the audited scope
Check: `issues.technical_description_share > 0.3` (team, severity low)
Measures: LM-160, LM-161
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Mozilla, Bug writing guidelines (https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html, 2026-10)
File: library/signals/LM-139-technical-descriptions.md

### What it measures

Share of active issues with a non-empty description whose description carries a technical trail: 10 or more inline code spans, or 3 or more file paths, or 2 or more shell commands, or a fenced code block in an issue without a Bug label. Fenced blocks are allowed in bugs because a log or stack trace is evidence.

### When it fires

`issues.technical_description_share > 0.3` evaluated against the team metrics of the snapshot. Evaluated only when `linear-decisions.md` declares `issue.primary_reader` business or external; otherwise the metric is null and the signal is skipped. Also skipped when no active issue has a description.

### Fix

Rewrite the samples for the declared reader (LM-160): move the diagnosis to the repo document and the plan to the PR or a comment (LM-161, LM-163); remove file, line and command fields from templates (LM-168).

### Evidence

See the practices this signal measures (LM-160, LM-161). The density definition and the 0.3 threshold are interpretation: they were tested on one real workspace (7 of 11 open issues flagged) and on the healthy fixture (no flags), and should be tuned per workspace.

## LM-170 Many open issue descriptions exceed the agreed length

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: Many open issue descriptions exceed the agreed length is false for the audited scope
Check: `issues.long_description_share > 0.25` (team, severity low)
Measures: LM-160, LM-161, LM-042
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Malte Ubl, Design Docs at Google (https://www.industrialempathy.com/posts/design-docs-at-google/, 2020-07-06)
File: library/signals/LM-170-long-descriptions.md

### What it measures

Share of active issues with a non-empty description whose text outside checklist items is longer than the agreed maximum: 2 500 characters by default (`writing.description_max_chars` in the JSON block of `linear-decisions.md`); there is no separate value for bugs. Checklist items and their indented continuation lines do not count: a long "Done when" with a check per item is the shape the standard asks for, and counting it flagged the reference issue of the workspace where it was tested.

### When it fires

`issues.long_description_share > 0.25` evaluated against the team metrics of the snapshot. Skipped when no active issue has a description.

### Fix

Check the samples: a long description usually holds a diagnosis, a procedure or a data table. Move it to the linked document or the plan comment (LM-161, LM-163); keep the five blocks of LM-160.

### Evidence

"Write only as much as you need" (Linear Method); "Keep it succinct!" (Google design docs). No source gives a number: the lengths and the 0.25 share are interpretation, tuned per workspace.

## LM-171 A parent has many sub-issues created in one batch

Kind: signal · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
Verify: A parent has many sub-issues created in one batch is false for the audited scope
Check: `issues.batched_subissue_parent_count > 0` (team, severity low)
Measures: LM-165, LM-166, LM-095
Sources: Linear docs, Parent and sub-issues (https://linear.app/docs/parent-and-sub-issues, 2026-10); Lawrence and Green, The Humanizing Work Guide to Splitting User Stories (https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/, 2026-10)
File: library/signals/LM-171-batched-sub-issues.md

### What it measures

Number of parents with at least `writing.subissue_batch_count` active sub-issues (default 5) created by the same creator within `writing.subissue_batch_minutes` minutes (default 10), both in the JSON block of `linear-decisions.md`.

### When it fires

`issues.batched_subissue_parent_count > 0` evaluated against the team metrics of the snapshot. Only active sub-issues are counted, because the snapshot does not fetch completed or cancelled issues.

### Fix

Check each sample against the three split reasons of LM-165. Fold children that share assignee, gate and verification into the parent as a checklist; move the set to a project if it spans more than a cycle.

### Evidence

See LM-165 and LM-166. A batch under one parent is not wrong by itself (a lead may decompose a spec at once); it is the pattern of a partition copied from a source document (LM-154). Thresholds are interpretation, tested on one real workspace (one parent with 6 sub-issues in 22 seconds) and on the healthy fixture (no flags).

