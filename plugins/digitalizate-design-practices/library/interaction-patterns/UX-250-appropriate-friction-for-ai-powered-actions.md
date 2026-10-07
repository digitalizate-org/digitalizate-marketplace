---
id: "UX-250"
title: "Appropriate Friction for AI-Powered Actions"
category: "Interaction Patterns"
subcategory: "AI-Assisted Interfaces"
score: 4
context: "Use for AI operations that modify persistent data, send communications, or make consequential decisions."
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/lcmbp4.jpg"
notion: "https://app.notion.com/p/Appropriate-Friction-for-AI-Powered-Actions-963a9aed5344824ead470184cae7cfd7"
---

## Why
Unlike traditional UI where friction is always the enemy, AI-powered features benefit from strategic friction to slow users down before they act on potentially incorrect AI output. A confirmation step before applying AI-generated changes to critical data, or a preview showing exactly what will change, allows users to catch AI errors before they propagate. The level of friction should scale with the reversibility and consequence of the action — low friction for easily reversible changes, high friction for permanent or consequential ones.

## How to implement
- Define a friction matrix based on two axes: consequence (low vs. high) and reversibility (easily reversed vs. permanent).
- Low consequence + reversible: apply immediately with undo available.
- High consequence or irreversible: require preview and explicit confirmation.
- Show a diff view of what will change for operations affecting existing content.
- Display a confidence score where available.
- For ambiguous operations, default to the safer interpretation and offer an "Apply differently" option.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: Confidence rating, CSAT, Ease-of-use score
  **How to measure**: Track AI action error rates and correction frequency before and after adding appropriate friction gates (e.g., confirmation dialogs for destructive or irreversible AI actions). Use post-task surveys to assess whether friction increases or decreases user confidence in AI-powered workflows.

## Sources
- [Microsoft — Copilot UX Guidance](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance)
