# linear-library overview

Build date: 2026-10-13
Entries: 129

## Categories

- principles: 8 entries → index/by-category/principles.md, references/principles.md
- direction: 8 entries → index/by-category/direction.md, references/direction.md
- projects: 10 entries → index/by-category/projects.md, references/projects.md
- cycles: 8 entries → index/by-category/cycles.md, references/cycles.md
- issues: 10 entries → index/by-category/issues.md, references/issues.md
- triage-and-backlog: 8 entries → index/by-category/triage-and-backlog.md, references/triage-and-backlog.md
- quality: 4 entries → index/by-category/quality.md, references/quality.md
- workflow-and-structure: 10 entries → index/by-category/workflow-and-structure.md, references/workflow-and-structure.md
- design-and-users: 7 entries → index/by-category/design-and-users.md, references/design-and-users.md
- agents: 4 entries → index/by-category/agents.md, references/agents.md
- signals: 39 entries → index/by-category/signals.md, references/signals.md
- antipatterns: 13 entries → index/by-category/antipatterns.md, references/antipatterns.md

## Kinds

- principle: 8 → index/by-kind/principle.md
- practice: 57 → index/by-kind/practice.md
- model: 12 → index/by-kind/model.md
- signal: 39 → index/by-kind/signal.md
- antipattern: 13 → index/by-kind/antipattern.md

## Source tiers

- official-method: 50
- linear-internal: 15
- official-docs: 26
- interpretation: 14
- evidence: 24

## Signals with automatic checks

- LM-100 (team, high): `cycles.last3_completion_avg < 0.6` measures LM-032, LM-003
- LM-101 (team, medium): `cycles.rollover_rate_last3 > 0.25` measures LM-033, LM-032
- LM-102 (team, high): `triage.max_age_days > 3` measures LM-052, LM-050, LM-051
- LM-103 (workspace, high): `projects.active_without_lead_count > 0` measures LM-022
- LM-104 (workspace, high): `projects.active_over_6w_without_milestones_count > 0` measures LM-020, LM-021, LM-026
- LM-105 (team, medium): `backlog.cycles_of_work > 4` measures LM-054, LM-056
- LM-106 (team, medium): `cycles.cycles_with_zero_bugs_last3 > 0` measures LM-060, LM-061, LM-063
- LM-107 (team, medium): `issues.urgent_share > 0.2` measures LM-074
- LM-108 (workspace, low): `projects.active_without_initiative_count > 0` measures LM-004, LM-010, LM-015
- LM-109 (workspace, medium): `integrations.git_connected == false` measures LM-048, LM-006
- LM-110 (team, medium): `cycles.enabled == false` measures LM-030
- LM-111 (team, medium): `issues.user_story_count > 0` measures LM-040
- LM-112 (workspace, medium): `teams.excess_over_cadences > 0` measures LM-070, LM-077
- LM-113 (team, high): `issues.delegated_without_assignee_count > 0` measures LM-090, LM-091
- LM-114 (workspace, high): `projects.active_update_stale_7d_count > 0` measures LM-025
- LM-115 (workspace, medium): `projects.active_without_target_date_count > 0` measures LM-024
- LM-116 (workspace, medium): `projects.active_without_spec_count > 0` measures LM-023
- LM-117 (workspace, low): `projects.active_progress_over_85_count > 0` measures LM-029, LM-008
- LM-118 (team, medium): `backlog.stale_180d_count > 0` measures LM-054, LM-055
- LM-119 (workspace, high): `initiatives.active_without_owner_count > 0` measures LM-010
- LM-120 (workspace, low): `initiatives.active_count > 4` measures LM-010
- LM-121 (team, low): `cycles.auto_add_started == false` measures LM-034
- LM-122 (team, low): `cycles.upcoming_count > 3` measures LM-036
- LM-123 (team, low): `settings.auto_close_enabled == false` measures LM-055, LM-054
- LM-124 (team, low): `issues.long_title_count > 0` measures LM-041
- LM-125 (team, medium): `issues.active_unassigned_count > 0` measures LM-047
- LM-126 (team, low): `issues.started_over_14d_count > 0` measures LM-046
- LM-127 (team, low): `issues.single_creator_share > 0.6` measures LM-043, LM-044
- LM-128 (team, high): `labels.status_like_count > 0` measures LM-072
- LM-129 (team, medium): `labels.priority_like_count > 0` measures LM-073, LM-074
- LM-130 (team, low): `states.extra_count > 0` measures LM-071
- LM-131 (team, low): `labels.type_group_present == false` measures LM-073, LM-060
- LM-132 (workspace, low): `initiatives.active_update_stale_30d_count > 0` measures LM-017
- LM-133 (workspace, low): `projects.active_members_over_3_count > 0` measures LM-028, LM-020
- LM-134 (team, medium): `triage.has_responsibility == false` measures LM-051
- LM-135 (team, low): `settings.estimates_enabled == true` measures LM-076
- LM-136 (team, medium): `triage.enabled == false` measures LM-050
- LM-137 (team, low): `issues.in_cycle_without_project_count > 3` measures LM-004
- LM-138 (team, low): `cycles.last3_completion_min > 0.98` measures LM-011, LM-032

