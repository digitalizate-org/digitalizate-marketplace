---
id: "UX-252"
title: "Transparency About AI Limitations"
category: "Interaction Patterns"
subcategory: "AI-Assisted Interfaces"
score: 4
context: "Use in all AI-powered features, especially where users may over-rely on AI-generated outputs or treat them as authoritative."
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/y2giqk.jpg"
notion: "https://app.notion.com/p/Transparency-About-AI-Limitations-0f2a9aed534482059b0901cffc77236b"
---

## Why
Clearly communicate what the AI system can and cannot do, and how often it may be wrong. Avoid anthropomorphizing AI with words like "understand," "think," or "feel." Use machine-appropriate language ("processing," "analyzing"). Provide confidence indicators or source citations for AI-generated content. Users who understand AI limitations use it more effectively — they know when to verify, when to trust, and when to override. Users who don't understand limitations either over-rely on AI outputs or reject AI features entirely after a single error.

## How to implement
- Include onboarding that explains AI capabilities and limitations in plain language.
- Add inline disclaimers to AI-generated content ("AI-generated — verify before use").
- Design error states that explain what went wrong without technical jargon.
- Never present AI output as authoritative without citation or confidence indicator.
- Provide a feedback mechanism (thumbs up/down) on AI outputs that improves the model and signals to users that their feedback matters.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Satisfaction & Perception**: CSAT, Confidence rating, NPS, Brand perception
  - **Effectiveness**: Task success rate, Error rate
  - **Adoption & Retention**: Returning visitors, Account creation rate
  **How to measure**: Survey users on trust and confidence levels after AI interactions with explicit limitation disclosures vs. without. Track error recovery rates (how often users correct AI outputs) as a measure of whether transparency helps users appropriately calibrate reliance on AI suggestions.

## Sources
- [Microsoft — Copilot UX Guidance](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance)
