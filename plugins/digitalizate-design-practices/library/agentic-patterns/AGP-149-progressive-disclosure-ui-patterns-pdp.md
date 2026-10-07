---
id: "AGP-149"
title: "Progressive Disclosure UI Patterns (PDP)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "Complex reasoning explanation needed."
avoid_when: "Simple, single-step responses; Critical alerts requiring immediate attention; Linear workflows without complexity; Time-sensitive decision making"
goals:
  - "Simplify a Cluttered Interface"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-550.png"
notion: "https://app.notion.com/p/Progressive-Disclosure-UI-Patterns-PDP-b6fa9aed53448325824481e2438239f6"
---

## Why
Interface patterns for gradually revealing agent capabilities, reasoning, and complex information to prevent cognitive overload. The pattern: gradually reveal information layers to prevent cognitive overload. Users need complex AI reasoning but get overwhelmed by technical details upfront.
**Key insight:** Start simple, expand on-demand: summary → detailed → technical with clear visual hierarchy

## How to implement
1. **Layer Info** — Define summary → detailed → technical levels
1. **UI Triggers** — Click/expand controls for each level
1. **Context Aware** — Show relevant depth based on user type
1. **Visual Hierarchy** — Clear typography and spacing levels
1. **State Management** — Remember user preferences for disclosure
- Example flow: `agent_response → [show reasoning] → [technical details] → [full trace]`
- **Do:** Start with essential information only; Use consistent expand/collapse icons across UI; Implement smooth animations for transitions; Remember user disclosure preferences; Provide "expand all" / "collapse all" options
- **Don't:** Show all complex information at once; Use misleading or unclear labels for disclosure; Nest disclosure levels too deeply (max 3-4); Hide critical information behind multiple clicks; Ignore keyboard navigation for disclosure controls

## Metrics
Key metrics to track when applying this pattern:
  - Cognitive Load (User task completion time)
  - Comprehension (% users understanding agent actions)
  - Engagement (Disclosure interaction rates)
  - User Satisfaction (Preference for progressive vs full disclosure)
  - Error Rate (Mistakes due to insufficient information)
  - Learning Efficiency (Time to understand new capabilities)
  **Proven use cases:**
  - Agent Reasoning: Show summary → detailed steps → technical reasoning trace
  - Capability Introduction: Basic features → advanced tools → expert features
  - Error Explanation: What happened → why it occurred → how to fix it
  - Decision Process: Final recommendation → factors considered → detailed analysis
  - Onboarding: Core concepts → intermediate features → advanced workflows
