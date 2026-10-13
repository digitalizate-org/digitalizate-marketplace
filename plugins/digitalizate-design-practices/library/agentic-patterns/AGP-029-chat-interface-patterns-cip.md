---
id: "AGP-029"
title: "Chat Interface Patterns (CIP)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "Team collaboration scenarios."
avoid_when: "Simple query-response needs; High-security environments; Minimal UI requirements; Single-user applications"
goals:
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-537.png"
notion: "https://app.notion.com/p/Chat-Interface-Patterns-CIP-2c8a9aed5344835aa1b201f6d2103f27"
---

## Why
Specialized chat interface patterns optimized for agent interactions, including message threading, context management, and rich content display. The pattern: specialized chat interfaces optimized for agent interactions with threading, rich content, and collaborative features. Enables complex multi-topic conversations, rich media sharing, and seamless human-AI collaboration.
**Key insight:** Threading + rich content + agent-specific features → enhanced conversational experiences

## How to implement
1. **Threading System** — Conversation branching & merging logic
1. **Rich Content** — Documents, code, images, interactive widgets
1. **Agent Features** — Thinking indicators & source citations
1. **Collaboration** — Real-time presence & message reactions
1. **Context Management** — Thread preservation & summarization
- Example flow: `user_message → thread_routing → content_rendering → agent_response → context_update`
- **Do:** Support threaded conversations for topic exploration; Show agent thinking process with visual indicators; Integrate rich media (documents, code, images); Provide source citations with expandable details; Enable message reactions and collaborative editing
- **Don't:** Force linear conversation flow only; Hide agent reasoning process from users; Limit to text-only interactions; Lose context when switching between threads; Overwhelm with too many concurrent features

## Metrics
Key metrics to track when applying this pattern:
  - Thread Engagement (Active branches per conversation)
  - Content Interaction (Rich media usage & sharing rate)
  - Collaboration Rate (Multi-participant conversation %)
  - Context Retention (Thread switching without loss)
  - User Satisfaction (Interface usability score)
  - Problem Resolution (Time to solution in threaded chats)
  **Proven use cases:**
  - Customer Support: threaded issue tracking, document sharing, escalation management
  - Educational Platforms: topic discussions, resource sharing, collaborative learning
  - Team Collaboration: project threads, code review, real-time brainstorming
  - Content Creation: draft collaboration, feedback threads, version discussions
  - Technical Support: troubleshooting threads, log analysis, solution documentation
