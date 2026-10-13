---
id: "UX-251"
title: "AI Suggestion Autocomplete — Ghost Text Pattern"
category: "Interaction Patterns"
subcategory: "AI-Assisted Interfaces"
score: 4
context: "Use in search boxes, text editors, form fields with common patterns, and command palette inputs where AI can predict the user's likely completion."
goals:
  - "Reduce Cognitive Load"
tags:
  - "ai-patterns"
wireframe: "https://files.catbox.moe/3mt16p.jpg"
notion: "https://app.notion.com/p/AI-Suggestion-Autocomplete-Ghost-Text-Pattern-0fda9aed53448211928501ba3cbe78c7"
---

## Why
Inline AI-powered suggestions (autocomplete, predictive completions) dramatically accelerate text entry when the key design principle is followed: suggestions must be easy to accept and easy to ignore. Accept with Tab key or right-arrow; dismiss by continuing to type (any other keystroke). Suggestions that require active dismissal create friction for users who don't want them and train users to avoid triggering them. Show suggestions as ghost text (light gray) inline with the cursor, never as a dropdown that replaces the user's focus position.

## How to implement
- Show suggestions as ghost text at 40% opacity or equivalent light gray inline with the cursor position.
- Tab or right-arrow accepts the suggestion.
- Escape or any regular keystroke dismisses without accepting.
- Never overwrite the user's text without explicit Tab/accept action.
- Provide a setting to disable suggestions for users who find them distracting.
- Apply suggestion latency of 100–300ms after user stops typing to avoid constantly changing ghost text.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Time saved per task, Completion time
  - **Effectiveness**: Task success rate, Completion rate
  - **Engagement & Usage**: Feature usage, Active users
  **How to measure**: Track acceptance rates of ghost text suggestions via analytics and measure time-to-completion for text entry tasks with and without autocomplete. Monitor whether suggestion acceptance reduces perceived task duration (via post-task time estimates) and compare error rates in outputs produced with vs. without autocomplete assistance.

## Sources
- [Touch4IT — Role of Microinteractions in UX](https://www.touch4it.com/blog/role-microinteractions-ux-design)
