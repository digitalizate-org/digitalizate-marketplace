# Writing project and initiative updates

Rules: LM-025 (weekly, by the lead, with health), LM-092 (health set by the lead, not generated), LM-024 (date changes with reasons), LM-017 (initiative updates monthly).

Template: `templates/project-update.md`.

## Checklist before `save_status_update`

1. `type`: project or initiative; `project` or `initiative` reference.
2. `health`: onTrack, atRisk or offTrack, stated by the lead or the user. If you are drafting for a lead, leave health to them: draft the body, ask for health, then post. Never infer health from progress.
3. Body: this week (with identifiers), next, risks or decisions needed (who decides what by when), date changes with the reason.
4. Length: a few lines; long updates are not read. The next step is mandatory.

## Shape of the call

```
save_status_update { type: "project", project: "<name or id>", health: "atRisk", body: "<template filled>" }
```

## Drafting with activity data

You may build the "this week" section from completed issues and merged PRs (`list_issues` with the project and `updatedAt`), then hand the draft to the lead for health and risks. This is the only acceptable form of agent-assisted update (LM-092).

## Missing updates

If a project has no update in seven days, the fix is an update now, not a comment. If the lead is absent, the sponsor writes it and says so.
