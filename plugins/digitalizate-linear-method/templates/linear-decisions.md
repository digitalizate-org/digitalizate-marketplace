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

## Issue writing
- issue.primary_reader: <technical | business | external>
<!-- Leave the line out to follow the method: descriptions optional, no reader-based warnings. business or external turns on the five blocks of LM-160, the technical-trail warning and the business templates. -->

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
  "thresholds": {},
  "writing": {}
}
```
<!-- Example: {"thresholds": {"LM-102": 5, "LM-105": 6}} replaces the numeric threshold of a signal's check.
     "writing" takes three optional numbers: description_max_chars (default 2500; counts the text outside checklist checkboxes), subissue_batch_count (default 5) and subissue_batch_minutes (default 10).
     Example: {"thresholds": {}, "writing": {"description_max_chars": 3000, "subissue_batch_count": 6}} -->
