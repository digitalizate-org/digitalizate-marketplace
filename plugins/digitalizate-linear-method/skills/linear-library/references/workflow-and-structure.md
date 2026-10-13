# workflow-and-structure (references)

Each entry is the full text of its library file. Cite by ID.

## LM-070 One team by default; add teams only for a different cadence or workflow

Kind: model · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: creating a workspace, or when someone proposes a team per function or per client
Verify: The number of teams does not exceed the number of distinct cadences or workflows; no team exists only to mirror the org chart
Measured by: LM-112
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear docs, Teams (https://linear.app/docs/teams, 2026-10)
File: library/workflow-and-structure/LM-070-one-team-by-default.md

### Why

Each team carries its own workflow, cycles, triage and labels, and cycles cannot be viewed across teams. Linear ran "a single product team" at about 50 people and only split out mobile and infrastructure. A team is a unit of cadence, not a department.

### Do

- One team until a group needs a different cycle length, a different workflow, or a separate triage audience.
- Use the Area label for product areas; use sub-teams when a group must share the parent's cadence.
- Write the reason for every new team in `linear-decisions.md`.

### Anti-pattern

Frontend, Backend, QA and Design as four teams for twelve people.

### Fix

Merge into product teams; keep discipline as a label.

### Evidence

- Linear's single product team at ~50 people (Lenny's Newsletter, Sep 2023). Linear-internal.
- Langfuse keeps engineering as one team and separate teams for marketing, sales and ops (handbook, 2026). Independent company docs.

## LM-071 Use the default workflow states; add at most In Review and Won't Fix

Kind: model · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: configuring a new team, or when a team has more than eight states
Verify: Team states are the defaults (Triage, Backlog, Todo, In Progress, Done, Canceled, Duplicate) plus at most In Review (started) and Won't Fix (canceled)
Measured by: LM-130
Sources: Linear docs, Issue status / Configuring workflows (https://linear.app/docs/configuring-workflows, 2026-10)
File: library/workflow-and-structure/LM-071-default-workflow-states.md

### Why

Defaults are Backlog > Todo > In Progress > Done > Canceled, with Triage optional and Duplicate reserved. Each state must sit in a fixed category, and categories keep their order. Linear's own product team adds In Review and Ready to Merge (started), Icebox (backlog), Could not reproduce and Won't Fix (canceled). More states than that usually encode handoffs.

### Do

- Start with defaults plus In Review when code review is a real wait.
- Add Won't Fix when the zero-bugs rule is in place.
- Remove any state that duplicates another or that nobody moves issues into.

### Anti-pattern

Fourteen states copied from Jira, "Esperando QA", "Listo para demo".

### Fix

Collapse to defaults; handle waits with blocking relations.

### Evidence

- Linear's product team workflow and the category rules are documented on the workflows page. Official-docs.
- Cotera: 14 workflows to 4 (founder post, Mar 2026). Interested author.

## LM-072 Statuses live in workflow states; never encode status in labels

Kind: model · Score: 5 · Tier: evidence · Verifiable by: query
Use when: creating labels, auditing a label list, or when someone asks for a "blocked" label
Verify: No label name expresses a position in the flow (blocked, waiting, in review, ready, done, on hold, pending)
Measured by: LM-128
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Cotera, Linear vs Jira: We migrated 2,000 issues (https://cotera.co/articles/linear-vs-jira-comparison, 2026-03-08)
File: library/workflow-and-structure/LM-072-never-encode-status-in-labels.md

### Why

A label that means "where is this issue in the flow" duplicates the workflow and drifts out of sync the first time someone forgets to remove it. Blocking is a relation; waiting is a state or a snooze; review is a state.

### Do

- Labels answer "what kind" (Bug, Feature, Chore) and "which area".
- Use blocking relations for blocked, In Review for review, snooze for waiting on input.
- Langfuse's rule: "Do not recreate owner, status, priority, dates, initiatives, or customer links as labels".

### Anti-pattern

"Bloqueado", "Esperando QA", "Awaiting External" as labels.

### Fix

Delete the label; add the relation or state; if a wait is external and long, snooze.

### Evidence

- Cotera turned an "Awaiting External" state into a label during migration, then recognized it as a mistake (founder post, Mar 2026). Interested author.

## LM-073 Labels for type and area only

Kind: model · Score: 4 · Tier: evidence · Verifiable by: query
Use when: designing or pruning labels
Verify: Labels form at most two groups (Type with Bug, Feature, Improvement, Chore; Area with 4-6 values); no priority, status, owner or date labels exist
Measured by: LM-129, LM-131
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear docs, Labels (https://linear.app/docs/labels, 2026-10)
File: library/workflow-and-structure/LM-073-labels-for-type-and-area-only.md

### Why

Two questions are worth a label: what kind of work is it, and which part of the product. Everything else has a native field. Label groups keep each issue to one value per group.

### Do

- Type group (workspace scope): Bug, Feature, Improvement, Chore. Make Type expected on every issue.
- Area group (team scope) with 4-6 values, only if the product needs it.
- Retire labels not applied in six months.

### Anti-pattern

Forty flat labels, "urgent", "p1", "frontend-blocked", "Q3".

### Fix

Rebuild as two groups; retire the rest.

### Evidence

- Langfuse requires a type label (bug, improvement, feature) plus area (handbook, 2026). Independent company docs.

## LM-074 Use the four priorities; Urgent is for incidents only

Kind: model · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: triaging, planning, or when a large share of issues is Urgent
Verify: Urgent issues are under 20% of active issues and each one is an incident or a hard blocker decided by the goalie
Measured by: LM-107
Sources: Linear docs, Priorities (https://linear.app/docs/priorities, 2026-10); Linear, Why we committed to a zero-bugs policy (https://linear.app/now/why-we-committed-to-a-zero-bugs-policy, 2025-09-24)
File: library/workflow-and-structure/LM-074-urgent-is-for-incidents.md

### Why

Linear's priorities are fixed (No priority, Urgent, High, Medium, Low). Urgent interrupts the cycle; if a quarter of the backlog is urgent, nothing is. The goalie decides Urgent, not the reporter.

### Do

- Urgent: production incident, data error, hard blocker; handled today.
- High: this or next cycle. Medium: normal candidate. Low: closes if it does not rise in a few cycles.
- Write the definitions in `linear-decisions.md` and apply them in triage.

### Anti-pattern

Urgent as the default to get attention.

### Fix

Reset priorities in triage; reserve Urgent for the goalie.

### Evidence

- Linear's own bug deadlines distinguish high priority (48 hours) from the rest (7 days) (zero-bugs post, Sep 2025). Linear-internal. The 20% threshold is the author's interpretation.

## LM-075 No custom fields; use native properties

Kind: model · Score: 4 · Tier: linear-internal · Verifiable by: judgment
Use when: someone asks for a field Linear does not have
Verify: Every piece of information lives in a native property (priority, labels, project, milestone, estimate, due date, relations, Customer Requests, documents) and none is simulated with labels or title prefixes
Sources: The Glimpse, Building Product at Linear with Nan Yu (https://www.theglimpse.co/p/nan-yu, 2024); Linear customer story, Oscar Health (https://linear.app/customers/oscar, 2025-06)
File: library/workflow-and-structure/LM-075-no-custom-fields.md

### Why

Linear has refused custom fields "hundreds of times". Custom fields are where process complexity grows unchecked; Oscar Health hit Jira's custom field limit and found, after migrating without them, that "people haven't missed all those custom fields and workflows."

### Do

- Map each need to a native property; if none fits, put it in the description or a document.
- Use Customer Requests for customer links, milestones for phases, relations for dependencies.

### Anti-pattern

"[Client: Acme]" in titles, labels for sprint numbers, estimates used as story IDs.

### Fix

Move each simulated field to its native home.

### Evidence

- Oscar Health migration (Linear customer story, Jun 2025). Interested source.

## LM-076 Estimates are optional; start without them

Kind: model · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: configuring a team, or when someone asks for story points
Verify: Estimates are disabled unless linear-decisions.md records a reason (fixed windows, capacity calibration); velocity is counted in issues
Measured by: LM-135
Sources: Linear docs, Estimates (https://linear.app/docs/estimates, 2026-10); Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10)
File: library/workflow-and-structure/LM-076-estimates-optional.md

### Why

The method asks for small work and reasonable cycles, not for estimates; on design it says "It's hard to predict... let alone to give estimates". Linear's capacity dial works on issue counts when estimates are off. Estimates earn their place only when the team needs to forecast against fixed windows.

### Do

- Off by default; count issues.
- Turn on t-shirt or points only with a written reason; never use them to compare people or teams.

### Anti-pattern

Planning poker with three people.

### Fix

Disable; plan from completed counts.

### Evidence

- Nan Yu on estimates: "we all know it's wrong, but how wrong is it actually?... Is it useful wrong?" (Product Thinking podcast, 2025). Linear-internal.

## LM-077 Prefer sub-teams that inherit the parent cadence over new teams

Kind: model · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: a group needs its own triage audience or issue prefix but should keep the team's rhythm
Verify: Groups that share a cadence with the main team are sub-teams (inheriting cycles and workflow), not independent teams
Measured by: LM-112
Sources: Linear docs, Sub-teams (https://linear.app/docs/sub-teams, 2026-10)
File: library/workflow-and-structure/LM-077-sub-teams-inherit-cadence.md

### Why

Sub-teams can inherit the cycle schedule, workflow and labels of their parent. That gives a group its own inbox and views without a second cadence to coordinate.

### Do

- When a group needs separation but not a different rhythm, create a sub-team with inheritance on.
- Keep the parent's planning as the single planning.

### Anti-pattern

A second team with the same two-week cycle offset by three days.

### Fix

Convert to a sub-team.

### Evidence

- Inheritance behavior documented on Linear's sub-teams page. Official-docs.

## LM-078 An issue belongs to one team, at most one project and at most one cycle

Kind: model · Score: 3 · Tier: official-docs · Verifiable by: judgment
Use when: explaining the model, or when people try to share an issue across projects
Verify: Cross-project needs are handled with sub-issues or relations, not by cloning issues
Sources: Linear docs, Concepts (https://linear.app/docs/conceptual-model, 2026-10)
File: library/workflow-and-structure/LM-078-one-team-one-project-one-cycle.md

### Why

Linear's model is strict so that counts and views mean something: issues record pieces of work, teams own the workflows, cycles plan short term, projects group issues around a deliverable, initiatives group projects. A project can span teams and cycles; an issue cannot.

### Do

- Split cross-team work into sub-issues per team under one parent.
- Use relations (blocks, related) between issues of different projects.

### Anti-pattern

Duplicated issues in two projects "so both see it".

### Fix

Keep one, link the other.

### Evidence

- Model described in Linear's concepts documentation. Official-docs.

## LM-079 Use views so each person sees only what is actionable

Kind: practice · Score: 3 · Tier: evidence · Verifiable by: judgment
Use when: people say Linear is noisy, or they keep lists elsewhere
Verify: Each person has a filtered My Issues view with one or two items in progress; teams have a release-blockers view separate from the incoming queue
Sources: Linear, Descript's internal guide for using Linear (https://linear.app/now/descript-internal-guide-for-using-linear, 2024-01); Linear customer story, Cursor (https://linear.app/customers/cursor, 2026-02)
File: library/workflow-and-structure/LM-079-views-as-personal-inbox.md

### Why

A tracker is only used if it is where people look. Descript filters My Issues down to what is actionable and keeps one or two issues in progress; Cursor keeps a blockers view apart from everything incoming.

### Do

- Personal view: assigned, unstarted or started, current cycle.
- Team views: triage, current cycle, release blockers, stale projects.
- Inbox to zero like email.

### Anti-pattern

Everyone looking at the full backlog, lists copied to a notes app.

### Fix

Create the views; pin them.

### Evidence

- Descript guide (Jan 2024), partially interested; Cursor story (Feb 2026), interested source.

