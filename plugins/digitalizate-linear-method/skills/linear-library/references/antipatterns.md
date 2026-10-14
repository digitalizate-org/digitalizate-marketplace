# antipatterns (references)

Each entry is the full text of its library file. Cite by ID.

## LM-140 Projects used as eternal epics

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-020, LM-021, LM-026
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-140-projects-as-eternal-epics.md

### Symptom

Projects open for months with hundreds of issues and no milestone shipped; "v2" or an area name as a project.

### Cause

The project is used as a container for a feature area or a team instead of a deliverable that ends.

### Fix

Split into stage projects of one to three weeks with a lead and a spec; move permanent work to an indefinite Maintenance status or a label.

### Evidence

Hitask found that using projects as features and epics "made no sense" after 18 months (Medium, Jul 2024). Competitor opinion.

## LM-141 Too many teams

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-070, LM-077
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-141-too-many-teams.md

### Symptom

Every issue needs a dependency across teams; planning happens four times; cycles cannot be seen together.

### Cause

Teams were created to mirror functions (frontend, backend, QA, design) or clients rather than cadences.

### Fix

Merge into product teams sharing one cadence; use Area labels and sub-teams with inheritance.

### Evidence

Linear ran a single product team at about 50 people (Lenny's Newsletter, Sep 2023). Linear-internal.

## LM-142 Labels used as statuses

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-072, LM-073
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-142-labels-as-statuses.md

### Symptom

Labels like Blocked, Waiting QA, Ready for demo, Awaiting External; labels that are never removed when the situation changes.

### Cause

The workflow of a previous tool was copied as labels, or blocking relations and snooze are unknown.

### Fix

Delete the labels; use blocking relations, the In Review state and snooze; keep labels for type and area.

### Evidence

Cotera turned an "Awaiting External" state into a label during its Jira migration and later called it a mistake (founder post, Mar 2026). Interested author.

## LM-143 Infinite backlog

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-054, LM-055, LM-056
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-143-infinite-backlog.md

### Symptom

Hundreds or thousands of issues, most untouched for a year; planning starts by scrolling.

### Cause

The whole history was migrated and nothing is cancelled; ideas are filed as issues.

### Fix

Archive or cancel everything untouched for six months with a standard comment; keep ideas as candidate projects; enable auto-close.

### Evidence

Cotera migrated 2,147 open issues (Mar 2026); Opendoor started from zero without migrating history (Dec 2025). Interested sources.

## LM-144 Overloaded cycles

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-032, LM-033, LM-011
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-144-overloaded-cycles.md

### Symptom

Completion under 60% every cycle; the rest rolls forward as a habit; people stop believing the plan.

### Cause

Cycles are planned from wishes or from 130% of what was completed last time.

### Fix

Plan from the completed count of the last three cycles; leave 20-30% free; cut load until completion stabilizes.

### Evidence

Linear's capacity indicator uses the velocity of the previous three cycles (Linear docs, Cycles). Official-docs.

## LM-145 Urgent by default

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-074, LM-053
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-145-urgent-by-default.md

### Symptom

A quarter or more of open issues are Urgent; nothing can interrupt the cycle because everything already does.

### Cause

Reporters set priority to get attention; nobody owns the definition.

### Fix

Reset priorities in triage; the goalie alone sets Urgent; write the four definitions in linear-decisions.md.

### Evidence

Linear's bug deadlines distinguish high priority (48 h) from the rest (7 days) (zero-bugs post, Sep 2025). Linear-internal.

## LM-146 One person writes all the issues

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-043, LM-044, LM-095
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-146-single-issue-writer.md

### Symptom

A PO or lead creates most issues; engineers receive solutions instead of problems; the writer is a bottleneck. Or an agent drafts every issue from whatever context its session has (often a diagnosis), and nobody rewrites them for the reader.

### Cause

Scrum habits (the PO owns the backlog) carried into the method.

### Fix

Give the team the spec and milestones; each person writes their own issues; outsiders file problems, assignees rewrite them as tasks. With an agent writer: route its drafts to Triage, require a proposed list for batches, and have the implementer write the plan (LM-163, LM-095).

### Evidence

"Everyone maintains their own issues and projects" (Langfuse handbook, 2026). Independent company docs.

## LM-147 User stories reinvented in descriptions

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-040, LM-023
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-147-user-stories-reinvented.md

### Symptom

Issue templates demand "As a... I want... so that..." and Gherkin criteria; the why is repeated in every issue and lives nowhere else.

### Cause

The team dropped the Scrum vocabulary but kept the artifact, because no spec replaced it.

### Fix

Write the one-page spec per project; rewrite issues as tasks; keep acceptance as "Done when" checkboxes the declared reader can observe, and the why as one plain line (LM-040, LM-160).

### Evidence

The Hitask critique describes a team that dropped stories without specs (Medium, Jul 2024). Competitor opinion.

## LM-148 Missing project updates

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-025, LM-092
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-148-missing-project-updates.md

### Symptom

Projects show "Update missing"; sponsors ask in meetings what nobody wrote down; health is unknown.

### Cause

Updates are optional, reminders are off, or nobody checks their absence.

### Fix

Turn on reminders; make the weekly update part of the lead role; review missing updates at cycle close; syndicate to a channel people read.

### Evidence

Opendoor and Sierra built their adoption on weekly per-project updates read by leadership (Linear customer stories, 2025). Interested sources.

## LM-149 Triage automated without judgment

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-053, LM-091, LM-074
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-149-triage-without-judgment.md

### Symptom

Everything entering triage is accepted; Urgent set by reporters or agents; the backlog grows fast after agents are enabled.

### Cause

Agents or integrations pre-fill fields and the goalie stops deciding.

### Fix

The goalie applies the four outcomes (accept, decline with comment, duplicate, snooze); Urgent is a human decision; agent-created issues go through triage like any other.

### Evidence

Langfuse: agent changes are proposals; state changes stay with a human (handbook, 2026). Independent company docs.

## LM-150 Tool kept away from where the work lives

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-006, LM-048
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-150-tool-away-from-the-work.md

### Symptom

Two places to update; one of them is always stale; the community or the team ignores the tracker.

### Cause

The tracker was chosen without regard to where contributors actually work (for open source, GitHub).

### Fix

Integrate so the tracker mirrors the place of work, or move the tracker to that place and keep the method's practices there.

### Evidence

Documenso left Linear for GitHub because its community works there (blog, Jan 2024). An anonymous team left after three months citing confusing information architecture (Hacker News, Oct 2022). Independent accounts.

## LM-151 Design handoff inside the project

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-080, LM-081, LM-082
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-151-design-handoff-inside-the-project.md

### Symptom

The designer delivers finished screens weeks later; engineers wait; feedback arrives when changing is expensive.

### Cause

Design and engineering share a project in name but work sequentially; exploration is not shared early.

### Fix

Start with "Explore design", share by day two, feedback in comments, implementation as sub-issues once the direction is chosen.

### Evidence

Linear's process on the Manage design projects page; no formal design reviews (Lenny's Newsletter, Sep 2023). Official-method and Linear-internal.

## LM-152 Previous process translated instead of replaced

Kind: antipattern · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-002, LM-007, LM-071
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/antipatterns/LM-152-process-translated-not-replaced.md

### Symptom

Daily, refinement, demo and planning poker continue; states and fields mirror the old tool; the new tool adds cost without changing anything.

### Cause

Adoption was a tool migration, not a method change; nothing was removed.

### Fix

Remove the ceremonies the method replaces, reset states to defaults, import only recent work, and write the new rules before configuring.

### Evidence

Opendoor wrote its operating rules before choosing the tool; Oscar Health dropped custom fields and workflows at migration (Linear customer stories, 2025). Interested sources.

## LM-153 The issue is a runbook

Kind: antipattern · Score: 4 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-160, LM-161, LM-044, LM-163
Sources: Armin Ronacher, Building Pi With Pi (https://lucumr.pocoo.org/2026/5/24/pi-oss/, 2026-05-24); Mozilla, Bug writing guidelines (https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html, 2026-10); Birgitta Böckeler, Understanding Spec-Driven-Development (https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html, 2025-10-15)
File: library/antipatterns/LM-153-issue-as-runbook.md

### Symptom

For any reader: descriptions copy the diagnosis and the procedure instead of linking them, with a "Cause" section before any statement of who is affected. When the declared reader is business or external, file paths, line numbers, commands, code blocks and loose data tables are symptoms too: the sentence that reader needs is buried in the middle, "Done when" is a command, and status reports drafted from these issues inherit the jargon.

### Cause

The issue is written by whoever diagnosed the problem (a person after an investigation, or an agent with the diagnosis in its context), for themselves or for an implementing agent. A template asks for file, line or command. Agent-facing guidance ("add a Context for the agent block") is applied by a writer who writes every issue.

### Fix

Rewrite the top for the declared reader (LM-160); move the diagnosis to the repo document and link it (LM-161); keep observed facts separate from hypotheses (LM-044); the implementer writes the plan as a comment (LM-163); remove file, line and command fields from templates (LM-168).

### Evidence

Ronacher on issues with diagnoses: "That is worse than no diagnosis" (May 2026, independent). Mozilla: "explain the problem, not your suggested solution" (independent). Böckeler found agent-oriented specs "very verbose and tedious to review" (martinfowler.com, Oct 2025, independent).

## LM-154 The partition mirrors the source document

Kind: antipattern · Score: 4 · Tier: evidence · Verifiable by: judgment
Use when: the symptom below appears in an audit, a review or a conversation about how the team works
Verify: The symptom is absent
Violates: LM-165, LM-166, LM-046
Sources: Endor Labs, Jira integration (https://docs.endorlabs.com/integrations/jira/jira-with-endor-labs.md, 2026-10); Lawrence and Green, The Humanizing Work Guide to Splitting User Stories (https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/, 2026-10); Shape Up, Map the Scopes; Show Progress (https://basecamp.com/shapeup/3.3-chapter-12, 2019)
File: library/antipatterns/LM-154-partition-mirrors-the-source.md

### Symptom

One issue per finding of an audit, per field of a form, per screen or per file. Many siblings created within seconds by the same writer, with the same assignee, waiting on the same third party, verified the same way. Siblings overlap because several findings share one remedy. Some are cancelled minutes later and folded into one issue.

### Cause

The issues were cut along the structure of the document they came from (sections, findings, fields) instead of the work (who, what it waits on, how it is checked). Tools and instructions encourage it: finding-to-ticket integrations default to one ticket per finding; a rule such as "a requirement is a parent issue with sub-issues" produces one child per item.

### Fix

Re-partition by action, gate and verification (LM-166); fold children that share all three into a checklist (LM-165); move the set to a project when it spans more than a cycle.

### Evidence

Endor Labs warns that one ticket per finding "can produce a high volume of Jira tickets" (vendor). Lawrence: splitting step by step "is the wrong way to go" (external-method). Shape Up: "to-do lists actually grow as the team makes progress", so counting items does not show progress (external-method).

