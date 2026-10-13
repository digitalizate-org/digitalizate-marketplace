---
id: "UX-197"
title: "Habituation — Calibrate Alert Frequency to Maintain Urgency"
category: "Feedback & Error Handling"
subcategory: "Alert System Design"
score: 5
context: "Use when designing notification and alerting systems, especially for monitoring dashboards and operational applications with high event volume."
goals:
  - "Design Effective Feedback & Error States"
  - "Reduce Cognitive Load"
wireframe: "https://files.catbox.moe/z8wuhs.jpg"
notion: "https://app.notion.com/p/Habituation-Calibrate-Alert-Frequency-to-Maintain-Urgency-afba9aed534482d398d7014135a11e0c"
---

## Why
When an attention-getting mechanism appears frequently, users rapidly habituate and stop perceiving it as urgent. The more an alert fires, the less attention it commands. Enterprise monitoring dashboards and alert systems that fire too frequently create "alert fatigue" — where critical alerts are missed because users have learned to ignore the signal. Alert threshold calibration is as important as alert visual design. If every threshold breach triggers a red alert, red becomes meaningless.

## How to implement
- Implement alert severity tiers with strictly enforced thresholds.
- Reserve the highest visual urgency tier (red, prominent, potentially audible) for genuinely critical events that require immediate action.
- Any alert that fires more than 10 times per day should be re-evaluated — its threshold is wrong or it should be downgraded to informational.
- Route medium-priority alerts to aggregated summaries or a notification inbox rather than real-time interruptions.
- Conduct quarterly alert volume reviews to identify and recalibrate over-firing alerts.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Critical alert response rate, Alert false positive rate
- **Efficiency**: Mean time to detect critical issues, Alert fatigue reduction
- **Operational**: Incident response time, Alert noise-to-signal ratio
**How to measure**: Track alert response rate by severity tier; measure time-to-acknowledge for critical alerts; monitor daily alert volume per tier and flag any tier exceeding 10 alerts/day for recalibration.

## Sources
- [100 Things #43, #45 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
