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

## LM-093 Give agents context through the repository and the plan, not through a block in every issue

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: judgment
Use when: adopting agents for triage, bugs or chores
Verify: Standing context lives in the repository or in agent guidance; issues delegated to agents carry the outcome, scope and constraints of the task (and the user's quote for bugs); specs exist for anything beyond a bug
Sources: Linear, Issue tracking is dead (Karri Saarinen) (https://linear.app/next, 2026-03-24); Linear changelog, Coding sessions in Linear (https://linear.app/changelog/2026-06-11-coding-sessions, 2026-06-11); OpenAI, Codex best practices (https://learn.chatgpt.com/guides/best-practices, 2026-10); Factory docs, AGENTS.md (https://docs.factory.com/cli/configuration/agents-md, 2026-10); AGENTS.md (https://agents.md, 2026-10); Linear docs, AI Agents in Linear (https://linear.app/docs/agents-in-linear, 2026-10)
File: library/agents/LM-093-write-context-for-agents.md

### Why

"Agents are not mind readers. They become useful through context." No agent vendor reviewed puts a separate "for the agent" section inside the issue: standing rules live in a repo file or the tracker's agent guidance; the task lives in the issue; follow-ups in comments. Linear's coding sessions start "from the issue you delegate" and work better when it "defines the desired outcome, scope, and constraints". When the same writer drafts every issue, a per-issue agent block grows into the whole description and the issue becomes a runbook (LM-153). Linear reports using coding sessions internally to resolve roughly 30% of incoming bugs, mostly on first attempt (self-reported).

### Do

- Standing context (conventions, commands, files never to touch) goes in AGENTS.md, CLAUDE.md, path rules or Linear agent guidance (LM-094).
- In the issue: outcome, scope and constraints specific to this task (LM-160). When delegating, the issue may name the files and patterns of that task (Linear's own coding-sessions example does); what repeats across issues goes to the repo file or agent guidance (LM-094).
- Ask the agent for a plan before it codes, in the PR description or a comment (LM-163).
- Delegate Bugs and Chores first; Features keep a human and a spec.
- Reject agent PRs that touch files out of scope; feed the lesson back into the repo file.

### Anti-pattern

One-line issues delegated to an agent, then surprise at the result; or the opposite, a "Context for the agent" block in every template that turns each issue into a runbook.

### Fix

Move what repeats to the repo file; narrow the scope; ask for the plan; delegate again.

### Evidence

- Saarinen's letter and the coding sessions changelog above. Linear-internal, self-reported figures.
- Codex: "Overloading the prompt with durable rules instead of moving them into AGENTS.md" is a common mistake; Factory keeps task notes out of AGENTS.md. External-method.

## LM-094 Standing technical context lives in the repository, not in each issue

Kind: practice · Score: 4 · Tier: external-method · Verifiable by: judgment
Use when: adopting coding agents, writing agent-facing templates, or when issues repeat the same conventions, commands or "do not touch" lists
Verify: Repository conventions, build and test commands and standing restrictions live in AGENTS.md, CLAUDE.md, path rules or the tracker's agent guidance; open issues do not repeat them
Sources: OpenAI, Codex best practices (https://learn.chatgpt.com/guides/best-practices, 2026-10); AGENTS.md (https://agents.md, 2026-10); Factory docs, AGENTS.md (https://docs.factory.com/cli/configuration/agents-md, 2026-10); Linear docs, AI Agents in Linear (https://linear.app/docs/agents-in-linear, 2026-10); Anthropic, Best practices for Claude Code (https://code.claude.com/docs/en/best-practices, 2026-10); Cognition, Instructing Devin effectively (https://docs.devin.ai, 2026-10)
File: library/agents/LM-094-standing-context-in-the-repo.md

### Why

No agent vendor reviewed defines a "section for the agent" inside the issue. They split by artifact: standing rules in a repo file or tool setting, the task in the issue, follow-ups in comments. Codex lists as a common mistake "Overloading the prompt with durable rules instead of moving them into AGENTS.md or a skill"; Factory keeps out of AGENTS.md the "Temporary task notes that belong in an issue, PR, or spec", so the boundary is explicit both ways. Linear has workspace and team "Agent guidance" that agents "automatically receive"; Devin has Skills for "context that apply broadly across sessions".

### Do

- Put conventions, commands, review process and "never touch" lists in the repo's agent file or in the tracker's agent guidance, once.
- In the issue: only what is specific to this task (outcome, scope, constraints that are specific to it).
- When an agent makes the same mistake twice, fix the repo file, not the next issue.

### Anti-pattern

A "Context for the agent" block in every bug and chore template (service, function, test, files not to touch) that grows until it is the whole description.

### Fix

Move what repeats into the repo file or agent guidance; keep in the issue only what differs for this task.

### Evidence

- Codex, Factory, AGENTS.md, Claude Code and Devin docs above. External-method.
- Linear agent guidance docs. Official-docs.

## LM-095 When an agent drafts issues, a human accepts the reader layer and the partition

Kind: practice · Score: 4 · Tier: evidence · Verifiable by: judgment
Use when: an agent creates or edits issues (from a session, a document, Slack, email or meeting notes)
Verify: Agent-drafted issues enter Triage (or are shown before saving) and a human accepts them; batches of more than one issue from the same source were proposed as a list and confirmed
Measured by: LM-171
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear developers, AIG (https://linear.app/developers/aig, 2026-10); Linear, How we use Linear Agent at Linear (https://linear.app/now/how-we-use-linear-agent-at-linear, 2026-04-10)
File: library/agents/LM-095-agent-drafts-human-accepts.md

### Why

Agents now write a large share of issues (Linear's CX team turns emails into scoped issues through its agent; Linear reports agents authored nearly a quarter of new issues in early 2026). An agent writes from the context the session has at that moment: often a diagnosis, so it writes the diagnosis. The documented precedents keep a human between the draft and the record: Langfuse treats agent edits to existing tickets as "proposals first"; Linear's AIG states that "the final responsibility should always remain with a human". This connects with LM-091 (an accountable human and an audit trail).

### Do

- Agent-drafted issues go to Triage, or are shown to a human before saving when triage is off.
- The human checks two things before accepting: the description reads for the declared reader (LM-160), and the partition follows the work (LM-165, LM-166).
- More than one issue from one source: the agent proposes the list (titles, what each absorbs, the split reason) and creates after a human confirms.
- The agent never prescribes the plan in the description; it may draft a plan comment if it is also the implementer (LM-163).

### Anti-pattern

An agent that turns a diagnosis session into ten issues in thirty seconds, each written for itself.

### Fix

Route agent-created issues to Triage; require a proposed list for batches; give the drafting agent the reader rule in its instructions.

### Evidence

- Langfuse rule above. Independent company docs.
- Linear developer docs. Official-docs.
- Linear's internal usage (Apr 2026). Linear-internal.

