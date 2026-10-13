---
id: "AGP-018"
title: "Agent Status & Activity UI Patterns (ASP)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 5
context: "Long-running agent tasks (>2 seconds)."
avoid_when: "Instant responses (<500ms); Simple confirmation actions; Static information displays; Single-step operations"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-535.png"
notion: "https://app.notion.com/p/Agent-Status-Activity-UI-Patterns-ASP-f8ca9aed534482e9b0fb01be3ca07cb9"
---

## Why
Interface elements showing real-time agent activities, thinking states, and operational status for user awareness. The pattern: real-time visual indicators showing agent activities and operational status. Users need transparency about agent progress to build trust and know when intervention is needed.
**Key insight:** Show not just that agent is working, but specifically what it's doing and how long it might take

## How to implement
1. **Status States** — Define thinking, processing, waiting, completed states
1. **Visual Indicators** — Animated icons, progress bars, and status badges
1. **Real-time Updates** — WebSocket or polling for live status changes
1. **Progress Tracking** — Show percentage complete and time estimates
1. **Activity Logs** — Timestamped history of agent actions
- Example flow: `Thinking 🧠 → Processing ⚙️ → Searching 🔍 → Completed ✅`
- **Do:** Show status updates within 100ms of state changes; Use consistent icons and animations across all states; Provide meaningful descriptions of current activities; Display progress bars for long-running tasks; Include estimated completion times when possible
- **Don't:** Use generic "loading" states without context; Show rapid status flickering or jumpy animations; Hide critical error states from the user; Leave users guessing what the agent is doing; Overwhelm with too many simultaneous status indicators

## Metrics
Key metrics to track when applying this pattern:
  - Status Clarity (User understanding of agent activity)
  - Update Latency (Time between state change and UI update)
  - Progress Accuracy (Estimation vs actual completion time)
  - User Interruptions (Frequency of unnecessary user interventions)
  - Error Recovery (Success rate of handling failed states)
  - Trust Building (User confidence in agent reliability)
  **Proven use cases:**
  - Document Processing: Show parsing → analysis → summarization → completion stages
  - Data Analysis: Display loading → processing → calculating → visualizing status
  - Search Operations: Indicate querying → filtering → ranking → presenting results
  - Background Tasks: Monitor email sync, backup, or cleanup operations
  - Multi-Agent Systems: Track status of multiple agents working in parallel
