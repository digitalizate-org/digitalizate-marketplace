---
id: "UX-459"
title: "Avoid the Redundancy Effect: Don't Duplicate What Users Already Know"
category: "Cognitive Load"
subcategory: "Extraneous Load Management"
score: 3
context: "Apply primarily to expert or returning users; new users benefit from more scaffolding, so the redundancy threshold varies by audience."
goals:
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "navigation"
wireframe: "https://files.catbox.moe/enui0p.jpg"
notion: "https://app.notion.com/p/Avoid-the-Redundancy-Effect-Don-t-Duplicate-What-Users-Already-Know-68da9aed534483e5a7de0169e0287e8f"
---

## Why
The redundancy effect (Sweller et al.) shows that presenting information users already possess — whether from their expertise or from earlier in the same screen — increases rather than decreases cognitive load. Users must process both the redundant information and their existing knowledge, then reconcile any apparent differences. In UI design, this manifests as over-explaining, repeated links, visible labels that replicate icon meaning for expert users, and status messages that restate what just happened in multiple formats simultaneously.

## How to implement
- Audit tooltips and help text for whether they restate information already visible in the UI; remove text that paraphrases an icon label the user can already read.
- Avoid placing the same link to a page in multiple locations on a single view — duplicate links force users to process whether they differ, consuming working memory.
- For error states, provide one error message in one location (inline, adjacent to the field) rather than duplicating in a banner plus inline plus toast notification.
- In user onboarding, skip explanations for interactions the target user already knows from common digital conventions.
- Remove instructional copy that describes what a button's label already communicates: a 'Submit' button does not need a paragraph explaining that it submits the form.
- Test with expert users specifically to identify where scaffolding has become redundant noise.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct usability tests with expert users measuring whether redundant instructional content causes frustration or slows task completion; compare time-on-task and error rates between interfaces with and without redundancy. Use post-session surveys to capture perceived efficiency and whether explanations felt unnecessary given users' existing knowledge.

## Sources
- [Reduce Redundancy — Nielsen Norman Group](https://www.nngroup.com/articles/reduce-redundancydecrease-duplicated-design-decisions/)
- [The Same Link Twice — Nielsen Norman Group](https://www.nngroup.com/articles/duplicate-links/)
- [Split Attention Effect — Taylor & Francis](https://taylorandfrancis.com/knowledge/Engineering_and_technology/Engineering_support_and_special_topics/Split_attention_effect/)
- [Cognitive Load Theory — UKY](https://www.uky.edu/~gmswan3/544/Cognitive_Load_&_ID.pdf)
