---
id: "AGP-034"
title: "Constitutional AI (CAI)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 2
context: "Building systems requiring strong ethical alignment."
avoid_when: "Simple tasks with clear objective metrics; Domains requiring strict regulatory compliance; Systems needing real-time human oversight; Applications with zero tolerance for errors; Contexts with highly contested moral principles"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-459.png"
notion: "https://app.notion.com/p/Constitutional-AI-CAI-48aa9aed53448327b2a8813dedf36ba4"
---

## Why
Training AI agents to follow constitutional principles through self-critique and improvement cycles. The pattern: train AI systems using explicitly defined principles and AI-generated feedback to achieve harmless, helpful behavior. Scales oversight beyond human capacity, reduces harmful outputs, and creates transparent value-aligned AI systems.
**Key insight:** Constitutional principles guide AI feedback generation, creating self-supervising systems aligned with explicit values

## How to implement
1. **Constitution** — Define principles and behavioral constraints
1. **SFT** — Supervised fine-tuning on helpful behaviors
1. **AI Feedback** — Generate critiques based on constitution
1. **RL Training** — Train preference model on AI feedback
1. **Validate** — Test constitutional adherence and safety
- Example flow: `constitution + sft_model → ai_feedback → preference_model → constitutional_model`
- **Do:** Create clear, specific, and actionable constitutional principles; Use diverse constitutional principles covering multiple values; Implement iterative constitutional refinement processes; Monitor for constitutional principle conflicts and trade-offs; Validate AI feedback quality against human judgment; Test edge cases and adversarial scenarios thoroughly
- **Don't:** Use vague or contradictory constitutional principles; Skip human validation of AI-generated feedback; Apply single constitutional framework to all domains; Ignore cultural and contextual variations in values; Deploy without extensive red team testing

## Metrics
Key metrics to track when applying this pattern:
  - Constitutional Adherence (% responses following defined principles)
  - Harmlessness Rate (% outputs avoiding harmful content)
  - Helpfulness Score (Quality of assistance provided)
  - Value Alignment (Agreement with intended ethical framework)
  - AI Feedback Quality (Correlation with human feedback)
  - Robustness Score (Performance under adversarial testing)
  **Proven use cases:**
  - Conversational AI: Align chatbots with ethical principles and reduce harmful outputs
  - Content Moderation: Automatically enforce community guidelines and platform values
  - Legal AI Assistants: Ensure compliance with professional ethics and legal standards
  - Educational AI: Implement age-appropriate and pedagogically sound interactions
  - Healthcare AI: Maintain patient privacy and medical ethics in AI-assisted care
