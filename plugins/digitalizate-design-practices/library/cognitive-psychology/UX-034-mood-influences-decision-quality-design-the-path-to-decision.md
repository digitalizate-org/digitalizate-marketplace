---
id: "UX-034"
title: "Mood Influences Decision Quality — Design the Path to Decisions"
category: "Cognitive Psychology"
subcategory: "Contextual Factors"
score: 3
context: "Use when designing user flows leading to high-stakes decisions, and when evaluating performance and reliability requirements for critical-path features."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Drive Conversion & Decision-Making"
tags:
  - "performance"
  - "forms"
wireframe: "https://files.catbox.moe/n27qvr.jpg"
notion: "https://app.notion.com/p/Mood-Influences-Decision-Quality-Design-the-Path-to-Decisions-b0aa9aed5344838592a40199cac63eae"
---

## Why
A user's emotional state at the time of interaction significantly influences how they evaluate options, how risk-tolerant they are, and how much cognitive effort they invest. Negative mood states — frustration, anxiety, fatigue — impair decision quality and increase error rates. Enterprise software that frustrates users before they reach complex decisions (through slow loading, cryptic errors, or failed actions) is actively degrading the quality of the business decisions made through the tool. The path to the decision matters as much as the decision interface itself.

## How to implement
- Audit the path from login to primary decision points.
- Eliminate any frustrating, confusing, or slow interactions that users experience before reaching important decisions.
- Prioritize reliability and performance on all screens used immediately before high-stakes workflows (financial approvals, configuration commits, data publishes).
- Measure and optimize time-to-productive-state after login as a leading indicator of decision-context quality.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Decision quality, Error rate at high-stakes decision points
- **Efficiency**: Time-to-productive-state after login, Pre-decision frustration events
- **Satisfaction**: User satisfaction score leading up to critical workflows
**How to measure**: Audit the path to key decisions for friction events (errors, slow loads, confusion); measure time-to-productive-state after login; correlate pre-decision frustration events with downstream error rates.

## Sources
- [100 Things #95 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
