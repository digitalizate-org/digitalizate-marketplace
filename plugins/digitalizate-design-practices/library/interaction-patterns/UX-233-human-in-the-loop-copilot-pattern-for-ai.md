---
id: "UX-233"
title: "Human-in-the-Loop Copilot Pattern for AI"
category: "Interaction Patterns"
subcategory: "AI-Assisted Interfaces"
score: 5
context: "Use when designing any AI-powered feature in a product, regardless of the AI's actual capability level."
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/2wp3xe.jpg"
notion: "https://app.notion.com/p/Human-in-the-Loop-Copilot-Pattern-for-AI-802a9aed534482b9832c81cc856c6428"
---

## Why
Design AI assistance as a copilot that supports the human decision-maker rather than replacing them. The user is the pilot; the AI provides suggestions, generates content, and accelerates tasks, but the human retains final control and responsibility. This framing manages user expectations appropriately, maintains accountability for outcomes, and builds calibrated trust in AI outputs. Features that allow AI to autonomously apply significant changes without user review create errors that are difficult to trace and undermine user confidence when discovered.

## How to implement
- Language framing: use "Generate with AI," not "AI will do X." Always allow users to edit AI outputs before they are applied.
- Provide "Regenerate" and "Reject" actions alongside all AI-generated content.
- For high-stakes operations (modifying persistent data, sending communications), require explicit user review and confirmation before applying AI-generated changes.
- Show a diff of what the AI will change for operations affecting existing content.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate, Completion rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Confidence rating, CSAT, Ease-of-use score
  - **Adoption & Retention**: Feature usage, Account creation rate
  **How to measure**: Track error rates and correction rates when users operate AI copilot features with vs. without review steps. Measure user confidence via post-task surveys and monitor feature adoption rates to assess whether the copilot model drives or deters use.

## Sources
- [Microsoft — Copilot UX Guidance](https://learn.microsoft.com/en-us/microsoft-cloud/dev/copilot/isv/ux-guidance)
