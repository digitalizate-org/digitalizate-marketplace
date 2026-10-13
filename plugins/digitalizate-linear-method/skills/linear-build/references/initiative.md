# Creating and editing initiatives

Rules: LM-010 (outcome, owner, few), LM-011 (slightly out of reach, slack reserved), LM-012 (useful goals, no OKR machinery), LM-016 (one roadmap), LM-017 (cadence), LM-119/LM-120 (signals).

Template: `templates/initiative.md`.

## Checklist before `save_initiative`

1. Name is an outcome ("First-week activation"), not a list of features. If the name has commas, it is a list.
2. `owner` set; the owner writes the monthly initiative update.
3. `targetDate` on the quarter or semester.
4. Description: why it matters, what success looks like, the projects (existing or candidates).
5. Count: with this one, are there more than four active initiatives? If so, sequence or merge.
6. Status: Planned until a project starts; Active after.

## Shape of the call

```
save_initiative { name, owner: "<person>", targetDate: "2026-12-31", description: "<why, success, projects>", status?: "Planned" }
```

Then attach projects with `save_project { id, addInitiatives: ["<initiative>"] }`.

## Sub-initiatives

Only on Enterprise and only when a large organization needs hierarchy. A small team never needs them.
