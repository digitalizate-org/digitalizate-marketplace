# Linear decisions

Workspace conventions the team agreed on. Read by the linear-* skills before acting; edit by hand or through linear-build/linear-setup.

## Structure
- Teams: <one team by default; list each team and the cadence reason that justifies it>
- Cycle length and start day: <2 weeks, Monday>
- Cooldown: <none | 1 week every 3 cycles>
- Estimates: <off | on, reason>

## Triage
- Responsibility: <Linear triage responsibility | manual weekly rotation: names>
- Daily pass: <when, how long>
- Priority definitions: Urgent = <...>; High = <...>; Medium = <...>; Low = <...>

## Labels
- Type (required): Bug, Feature, Improvement, Chore
- Area: <values or "none">

## Definition of Done
<merged | deployed | documented and changelog written>

## Quality
- Share of each cycle for bugs and tooling: <20-30%>
- Bug deadlines: <48h high priority, 7 days otherwise>

## Exceptions
<rule ID: reason; e.g. LM-108: the Maintenance project has no initiative on purpose>

## Agents
- Run owner: <person accountable for autonomous runs>
- Operations allowed: <archive, cancel with comment, set state, set priority, assign, create>
- Batch limit per run: <200>

## Threshold overrides
```json
{
  "thresholds": {}
}
```
<!-- Example: {"thresholds": {"LM-102": 5, "LM-105": 6}} replaces the numeric threshold of a signal's check. -->
