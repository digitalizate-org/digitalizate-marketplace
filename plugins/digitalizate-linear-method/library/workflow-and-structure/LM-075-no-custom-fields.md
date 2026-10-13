---
id: LM-075
title: No custom fields; use native properties
kind: model
category: workflow-and-structure
score: 4
source_tier: linear-internal
sources:
  - "The Glimpse, Building Product at Linear with Nan Yu | https://www.theglimpse.co/p/nan-yu | 2024"
  - "Linear customer story, Oscar Health | https://linear.app/customers/oscar | 2025-06"
use_when: someone asks for a field Linear does not have
verify: Every piece of information lives in a native property (priority, labels, project, milestone, estimate, due date, relations, Customer Requests, documents) and none is simulated with labels or title prefixes
verifiable_by: judgment
tags: [fields, model, clarity]
status: Active
---

## Why

Linear has refused custom fields "hundreds of times". Custom fields are where process complexity grows unchecked; Oscar Health hit Jira's custom field limit and found, after migrating without them, that "people haven't missed all those custom fields and workflows."

## Do

- Map each need to a native property; if none fits, put it in the description or a document.
- Use Customer Requests for customer links, milestones for phases, relations for dependencies.

## Anti-pattern

"[Client: Acme]" in titles, labels for sprint numbers, estimates used as story IDs.

## Fix

Move each simulated field to its native home.

## Evidence

- Oscar Health migration (Linear customer story, Jun 2025). Interested source.
