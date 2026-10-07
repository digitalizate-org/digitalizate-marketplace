---
id: "AGP-052"
title: "Conversational Interface Patterns (CIP)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 4
context: "Natural language interaction is primary UX goal."
avoid_when: "Simple CRUD operations suffice; Real-time precision control needed; Visual data manipulation required; Users prefer traditional GUI patterns"
goals:
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-540.png"
notion: "https://app.notion.com/p/Conversational-Interface-Patterns-CIP-bafa9aed5344835a895e812e4ce53bca"
---

## Why
Advanced conversational UI/UX patterns that move beyond traditional chatbots to agent-driven, multimodal experiences. The pattern: agent-driven conversational interfaces that move beyond traditional chatbots to multimodal, adaptive experiences. Enables natural human-computer interaction, reduces cognitive load, and provides accessible interfaces for diverse users.
**Key insight:** Intent-based outcome specification with seamless multimodal transitions - conversation becomes the universal interface

## How to implement
1. **Define Persona** — Create distinct system and user personas with clear roles
1. **Design Flow** — Map conversation paths with branching and error handling
1. **Implement Intent** — Build intent-based outcome specification interface
1. **Add Multimodal** — Integrate voice, text, visual, and gesture inputs
1. **Test & Refine** — Iterate on user testing with diverse conversation scenarios
- Example flow: `persona_design → flow_mapping → intent_interface → multimodal_integration → user_testing`
- **Do:** Design for natural human conversation patterns first; Create clear system persona with consistent personality; Use machine-appropriate language like "processing" not "thinking"; Implement progressive disclosure for complex information; Provide multiple conversation recovery options; Enable seamless modality switching (voice/text/visual)
- **Don't:** Anthropomorphize AI with human emotions or consciousness; Force single-turn interactions for complex tasks; Hide AI limitations or pretend system is human; Use endless scrolling chat for all interaction patterns; Ignore accessibility and diverse user communication needs

## Metrics
Key metrics to track when applying this pattern:
  - Conversation Completion Rate (% users completing intended task flow)
  - Intent Recognition Accuracy (Success rate of understanding user goals)
  - User Satisfaction Score (CSAT rating vs traditional interface)
  - Error Recovery Success (% failed conversations successfully recovered)
  - Modality Switching Smoothness (Friction in voice/text/visual transitions)
  - Accessibility Compliance (WCAG 2.1 AA adherence across modalities)
  **Proven use cases:**
  - Customer Support: Natural troubleshooting → guided resolution → escalation handoff
  - Educational Tutoring: Adaptive questioning → conceptual explanation → progress tracking
  - Healthcare Assistance: symptom collection → triage guidance → appointment coordination
  - Enterprise Workflows: task initiation → step-by-step guidance → completion verification
  - Content Creation: brainstorming → structured authoring → collaborative editing
