# cycles (references)

Each entry is the full text of its library file. Cite by ID.

## LM-030 Work in n-week cycles, two weeks by default

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: enabling cycles for a team, or choosing their length
Verify: Cycles are enabled, last one or two weeks, start on a fixed weekday, and the team plans at the start of each
Measured by: LM-110
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10); Linear, Building at the early stage (Karri Saarinen) (https://linear.app/now/building-at-the-early-stage, 2021-01)
File: library/cycles/LM-030-work-in-n-week-cycles.md

### Why

"2-week cycles are the most common in software building", short enough to keep other priorities in view and long enough to build meaningful features. Linear recommends one-week cycles for the early stage, when the team is tiny and feedback must come weekly. Cycles create routine: the team decides priorities and owners on a fixed rhythm.

### Do

- Enable cycles; choose two weeks (one week for teams of two to five or very early products).
- Start on a fixed weekday (Monday by default) and keep the day constant.
- Plan at the start (30-45 minutes) and review at the close (20-30 minutes); no other mandatory ceremony.
- Let Linear create upcoming cycles automatically.

### Anti-pattern

Cycles of four or more weeks that behave like releases, or cycles disabled "because we do Kanban" while nobody reviews the plan.

### Fix

Set the duration and start day in team settings; schedule the two short meetings.

### Evidence

- Linear early on used one-week cycles, deciding on Monday and reviewing on Friday (Building at the early stage, Jan 2021). Linear-internal.
- Cursor ships every two weeks and keeps a blockers view per release (Linear customer story, Feb 2026). Interested source.

## LM-031 Cycles are not tied to releases

Kind: model · Score: 4 · Tier: official-docs · Verifiable by: judgment
Use when: someone proposes a sprint goal, a demo day, or a release at the end of each cycle
Verify: Releases happen when a project or milestone is ready, not at cycle boundaries; no cycle has a "goal" that must be met
Sources: Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10); Linear changelog, Releases (https://linear.app/changelog/2026-04-30-releases, 2026-04-30)
File: library/cycles/LM-031-cycles-not-tied-to-releases.md

### Why

"Unlike sprints, cycles are not tied to releases." Shipping continuously per project is what makes rollover harmless; if the cycle were a release, unfinished work would be a failure instead of a planning signal. Since April 2026 Linear has a separate Releases object for deployments and release notes.

### Do

- Ship when a milestone is ready, inside or across cycles.
- Use Releases (or the changelog) to track what went out, independently of the cycle.
- Drop sprint goals and mandatory demos.

### Anti-pattern

"Sprint review" demos that delay a ready feature until the cycle ends.

### Fix

Separate the release calendar from the cycle calendar.

### Evidence

- Linear's docs state the distinction explicitly (Cycles page). Official-docs.

## LM-032 Don't overload cycles

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: planning a cycle, or when completion stays low cycle after cycle
Verify: Cycle load at start does not exceed the average completed count of the previous three cycles, and completion stays above 60%
Measured by: LM-100
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10)
File: library/cycles/LM-032-dont-overload-cycles.md

### Why

"Don't overload cycles with tasks and let unfinished items move to the next cycle automatically." Linear's capacity indicator uses the velocity of the previous three completed cycles. A cycle planned at 130% of what the team completes teaches everyone that the plan is fiction.

### Do

- Plan from the last three cycles' completed counts (issues or points).
- Leave 20-30% for bugs, requests and the unexpected.
- If completion stays under 60%, cut the load before changing anything else.

### Anti-pattern

Cycles that complete 40% every time, with the rest rolling forward as a habit.

### Fix

Halve the plan for one cycle, then grow it from measured completion.

### Evidence

- Linear's capacity dial is based on "the velocity of the previous three completed cycles" (Linear docs, Cycles). Official-docs.

## LM-033 Unfinished work rolls over automatically; repeated rollover is a signal

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: closing a cycle, or when the same issues appear in three consecutive cycles
Verify: Rollover is automatic and the share of issues rolling over stays under a quarter; any issue that rolled more than twice is re-scoped or cancelled
Measured by: LM-101
Sources: Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10); Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/cycles/LM-033-rollover-is-a-signal.md

### Why

Linear moves unfinished issues to the next cycle on its own; "there is no way to keep unfinished issues in a closed cycle." That removes the end-of-cycle ritual. What remains is the signal: an issue that rolls twice is either too big, not a priority, or blocked.

### Do

- Keep automatic rollover on; never move issues by hand to make the cycle look complete.
- At the cycle review, read the rolled list: split, cancel, or unblock each item that rolled twice.
- Track the rollover share; above 25% the plan is too big.

### Anti-pattern

Manual cleanup on the last day, or ignoring the rolled list for months.

### Fix

Review the rolled list every cycle close; split or cancel.

### Evidence

- Cotera moved from Jira grooming sessions to cycles with rollover and "People groom as they go" (founder post, Mar 2026). Interested author.

## LM-034 Auto-add started and completed issues to the active cycle

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: configuring a team's cycles, or when work is done outside the cycle and completion numbers look wrong
Verify: Team settings have both "auto-add started issues" and "auto-add completed issues" to the active cycle enabled
Measured by: LM-121
Sources: Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10)
File: library/cycles/LM-034-auto-add-started-and-completed.md

### Why

Work that starts or finishes outside the cycle is still work. Auto-adding it keeps the cycle an honest record of what the team did, which is what makes completion and rollover numbers mean something.

### Do

- Enable `cycleIssueAutoAssignStarted` and `cycleIssueAutoAssignCompleted` in team settings.
- Keep "lock issues to active cycle" off unless the team has a reason.

### Anti-pattern

A cycle at 100% while half the merged PRs were never in it.

### Fix

Turn the two settings on; the next cycle reflects reality.

### Evidence

- The two settings are documented on Linear's Cycles page. Official-docs.

## LM-035 Cooldown is optional; use it for debt, tooling and planning

Kind: practice · Score: 3 · Tier: official-docs · Verifiable by: judgment
Use when: the team accumulates debt or exhaustion across cycles, or runs an open-source project with external PRs to review
Verify: If cooldown is enabled, it is one week or less per two or three cycles and is used for debt, tooling and planning, not for more feature work
Sources: Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10)
File: library/cycles/LM-035-cooldown-is-optional.md

### Why

Linear's docs describe cooldown as time "to give your team a break and time to work through technical debt and planning"; issues cannot be assigned to a cooldown. It is the method's borrowing from Shape Up, and it is optional.

### Do

- Start without cooldown.
- Add one week every two or three cycles when debt, tooling or review backlog builds up.
- Use it for what it is named; do not plan features into it.

### Anti-pattern

Cooldown as a hidden extra cycle, or a team that never stops to pay debt.

### Fix

Enable one week of cooldown in team settings and protect it.

### Evidence

- Settings and behavior documented on Linear's Cycles page. Official-docs.

## LM-036 Keep two or three upcoming cycles visible, not more

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: configuring upcoming cycle count, or when people plan issues months ahead
Verify: Team setting `upcomingCycleCount` is between 1 and 3
Measured by: LM-122
Sources: Linear docs, Cycles (https://linear.app/docs/use-cycles, 2026-10); Linear Method, Set the product direction (https://linear.app/method/product-direction, 2026-10)
File: library/cycles/LM-036-two-or-three-upcoming-cycles.md

### Why

Linear can create up to 15 future cycles. Planning issues into cycles months away is the same mistake as a long backlog: it feels like control and is not. Direction lives in initiatives and projects; cycles are for the next few weeks.

### Do

- Set upcoming cycles to 2 or 3.
- Plan beyond that with projects, milestones and target dates.

### Anti-pattern

Issues pre-assigned to cycle 14.

### Fix

Reduce the setting; move far-future issues to their projects without a cycle.

### Evidence

- Setting documented on Linear's Cycles page (up to 15 future cycles). Official-docs. The 2-3 range is the author's interpretation.

## LM-037 Use one-week cycles when the team is tiny or the product is early

Kind: practice · Score: 3 · Tier: linear-internal · Verifiable by: judgment
Use when: two to five people, pre-launch or just launched, many small changes, heavy use of agents
Verify: Teams of five or fewer with weekly feedback loops run one-week cycles
Sources: Linear, Building at the early stage (Karri Saarinen) (https://linear.app/now/building-at-the-early-stage, 2021-01)
File: library/cycles/LM-037-one-week-cycles-early.md

### Why

Linear's founders ran one-week cycles "which we recommend for... the early stage": decide on Monday what to do and who does it, park new ideas in the backlog during the week, review on Friday what shipped and what was learned. Weekly feedback is the point when nothing is known yet.

### Do

- One-week cycles starting Monday; a single product discussion per week.
- Ideas raised mid-week go to the backlog, not into the running week.
- Move to two weeks when weekly planning starts to feel like overhead.

### Anti-pattern

Two-week cycles for a three-person team shipping daily.

### Fix

Change the team setting; the rhythm adapts in a week.

### Evidence

- Described by Saarinen for Linear's own first months (Building at the early stage). Linear-internal.

