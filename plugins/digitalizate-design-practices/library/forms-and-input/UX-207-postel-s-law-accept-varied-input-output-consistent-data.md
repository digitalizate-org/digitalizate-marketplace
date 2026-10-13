---
id: "UX-207"
title: "Postel's Law — Accept Varied Input, Output Consistent Data"
category: "Forms & Input"
subcategory: "Input tolerance and normalization"
score: 5
context: "Apply to all input fields with specific expected formats — phone numbers, dates, currencies, URLs, CSV imports, search fields — in any enterprise data entry context."
goals:
  - "Design Forms That Work"
tags:
  - "forms"
verify: "Entering the same phone number as \"555-123-4567\", \"(555) 123 4567\" and \" 5551234567 \" is accepted in all three cases and stored in one normalized format."
verifiable_by: "test"
anti_pattern: "A strict regex like /^\\d{10}$/ that rejects dashes, spaces or surrounding whitespace with \"Invalid format\"."
wireframe: "https://files.catbox.moe/s83jtn.jpg"
notion: "https://app.notion.com/p/Postel-s-Law-Accept-Varied-Input-Output-Consistent-Data-8eda9aed53448264a0a981f67dd58bbb"
---

## Why
"Be liberal in what you accept, and conservative in what you send." Accept varied, imperfect user inputs flexibly while outputting consistent, well-formatted data. Users enter phone numbers with dashes, without dashes, with parentheses, with spaces — all of these are correct from the user's perspective. Rejecting them with "invalid format" errors is a system failure, not a user failure. The system should do the normalization work so users don't have to remember format rules.

## How to implement
- Accept phone numbers in any format and normalize to a standard format on save/display.
- Accept date inputs in natural language ("next Friday," "Q3 2025") where feasible.
- Trim leading/trailing whitespace from all text inputs automatically.
- In CSV import, auto-detect column types, handle missing headers gracefully, and show what was parsed before committing.
- Accept currency variants ("$1,000," "1000," "$1000") and normalize to canonical format.
- For search, handle typos, partial matches, and case variations — never return zero results from simple variants.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate, Completion rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Track form submission error rates related to input format validation before and after applying liberal input acceptance (e.g., accepting phone numbers with or without dashes). Measure form abandonment rates for fields with strict input formatting requirements vs. those that accept varied input formats.

## Sources
- [Laws of UX — Postel's Law](https://lawsofux.com/postels-law/)
- [Good UI — Forgiving Inputs](https://goodui.org/#34)
