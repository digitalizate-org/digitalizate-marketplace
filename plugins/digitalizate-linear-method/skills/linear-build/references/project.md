# Creating and editing projects

Rules: LM-020 (1-3 weeks, 1-3 people), LM-021 (milestones), LM-022 (one lead), LM-023 (spec), LM-024 (target date), LM-025 (weekly update), LM-026 (finite deliverable), LM-027 (statuses, not labels), LM-028 (cross-functional team), LM-010/LM-108 (initiative).

## Is it a project?

Yes if it ends with something delivered and fits in one to three weeks per stage. If it is an area, a client, a team or "maintenance", it is a label, a team, an initiative, or a project with an indefinite status. If it needs more than three weeks, define stages: each stage a project, or one project with milestones that ship.

## Checklist before `save_project`

1. Name states the deliverable ("Two-step ticket purchase"), not an area and not a version.
2. `lead` set to the person who will write the spec and the updates. Candidate projects (status Proposal or Idea) may omit it; running projects may not.
3. `addTeams` (or `setTeams`) and `leadTeam` when more than one team.
4. `targetDate` within one to three weeks for the current stage. Set `startDate` when known.
5. `description` carries the one-page spec (see `spec.md`), or create a project document with `save_document` right after.
6. `addInitiatives` with the initiative it serves; if none fits, ask whether it should exist (bugs/maintenance are the exception).
7. Members: the real team, one to three people, with a designer for user-facing work.
8. `state`: candidate statuses for ideas (Proposal, Idea), Planned when accepted, started when work begins.
9. Milestones: create them after the project with the milestone tool (names as shipped stages, each with a date).

## Shape of the call

```
save_project { name, addTeams: ["ENG"], lead: "<person>", targetDate: "2026-11-03", startDate: "2026-10-20", description: "<spec>", addInitiatives: ["<initiative>"], state?: "Planned" }
```

Then: `save_document` for a longer spec if needed; milestones; issues (each with `project`).

## Editing

- Moving a target date: write the reason in a project update the same day (LM-024).
- Removing a lead: not allowed; set another lead.
- Closing: set the completed status, move leftovers to a follow-up project or cancel them (LM-029).
