# agents (references)

Each entry is the full text of its library file. Cite by ID.

## LM-090 A delegated issue stays assigned to a human

Kind: practice · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: delegating any issue to Linear Agent, Copilot, Claude Code or another agent
Verify: Issues with a delegate also have a human assignee; no issue is owned only by an agent
Measured by: LM-113
Sources: Linear, How we use Linear Agent at Linear (https://linear.app/now/how-we-use-linear-agent-at-linear, 2026-04-10); Linear docs, Assign and delegate issues (https://linear.app/docs/assigning-issues, 2026-10)
File: library/agents/LM-090-delegated-issue-stays-assigned-to-a-human.md

### Why

When Linear delegates an issue to an agent, the issue "remains assigned" to the person. Delegation changes who executes, not who answers. An issue owned only by an agent has no one to ask when it stalls.

### Do

- Set assignee (human) and delegate (agent) together.
- The assignee reviews the agent's PR; a human approves.
- Scope delegated issues tightly (bugs and chores with full descriptions first).

### Anti-pattern

A queue of agent-only issues nobody reviews.

### Fix

Assign a human to each; cap delegated issues per person.

### Evidence

- Linear's internal usage: an agent reviews each PR and a human approves (Linear, Apr 2026). Linear-internal.
- GitHub Copilot cloud agent for Linear went GA in July 2026 (GitHub changelog). Official vendor source.

## LM-091 Every agent action has an accountable human and an audit trail

Kind: practice · Score: 5 · Tier: evidence · Verifiable by: judgment
Use when: letting agents change state in Linear (assign, move, close, prioritize, archive), including this plugin
Verify: Agent-made state changes are attributable to a person, logged with their inverse, and reversible; destructive operations are never performed (archive instead of delete)
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear, How we use Linear Agent at Linear (https://linear.app/now/how-we-use-linear-agent-at-linear, 2026-04-10)
File: library/agents/LM-091-accountable-human-and-audit-trail.md

### Why

The documented precedents keep state changes with people: Langfuse says agent changes to existing tickets are proposals and "Changing state — assigning, moving, closing, prioritising — stays with a human." Where a team chooses to let agents act autonomously, accountability must come from somewhere else: a named owner of the run, a log with the inverse of every change, batch limits, and reversible operations only.

### Do

- Name the human who owns each agent run.
- Log every mutation with enough data to undo it; prefer archive and cancel-with-comment over delete.
- Cap batch size per run; leave a standard comment on every object an agent touched.
- Keep the goalie's judgment in triage: agents pre-fill, people decide.

### Anti-pattern

Agents that close, prioritize and archive at will with no log.

### Fix

Add the run log and the owner; restrict operations to reversible ones.

### Evidence

- Langfuse rule above. Independent company docs. Linear's own practice: agent proposes, human approves PRs (Apr 2026). Linear-internal.

## LM-092 Project health is set by the lead, not generated

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: judgment
Use when: using agents to draft project updates
Verify: Update drafts may be generated, but the health value (On track, At risk, Off track) and the publication are done by the lead
Sources: Linear changelog, Agent assisted project updates (https://linear.app/changelog, 2026-06-18); Linear docs, Initiative and project updates (https://linear.app/docs/initiative-and-project-updates, 2026-10)
File: library/agents/LM-092-project-health-set-by-the-lead.md

### Why

Agent-assisted updates (June 2026) draft from activity; health is a judgment about risk that activity data cannot make. A generated "On track" on a blocked project is worse than no update because it reads as a signal.

### Do

- Let the agent draft done/next from issues and PRs.
- The lead sets health and adds risks and decisions needed, then publishes.

### Anti-pattern

Auto-published updates with health inferred from progress percentage.

### Fix

Draft only; lead publishes.

### Evidence

- Feature behavior per Linear's changelog. Official-docs.

## LM-093 Write the context agents need: specs, templates, files to touch and not to touch

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: judgment
Use when: adopting agents for triage, bugs or chores
Verify: Issues delegated to agents carry a complete description, the user's quote for bugs, the expected result, and a "do not touch" list when relevant; specs exist for anything beyond a bug
Sources: Linear, Issue tracking is dead (Karri Saarinen) (https://linear.app/next, 2026-03-24); Linear changelog, Coding sessions in Linear (https://linear.app/changelog/2026-06-11-coding-sessions, 2026-06-11)
File: library/agents/LM-093-write-context-for-agents.md

### Why

"Agents are not mind readers. They become useful through context." When execution gets cheap, the bottleneck moves to judgment and to the written context: the one-page spec becomes the agent's input, and the issue description becomes the instruction. Linear reports using coding sessions internally to resolve roughly 30% of incoming bugs, mostly on first attempt (self-reported).

### Do

- Add a "Context for the agent" block to bug and chore templates: service, function, test to add, files not to touch.
- Delegate Bugs and Chores first; Features keep a human and a spec.
- Reject agent PRs that touch files out of scope; feed the lesson back into the template.

### Anti-pattern

One-line issues delegated to an agent, then surprise at the result.

### Fix

Fill the template; narrow the scope; delegate again.

### Evidence

- Saarinen's letter and the coding sessions changelog above. Linear-internal, self-reported figures.

