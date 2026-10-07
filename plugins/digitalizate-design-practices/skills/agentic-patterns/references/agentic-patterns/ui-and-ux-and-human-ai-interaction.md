# Agentic Patterns / UI/UX & Human-AI Interaction (21)

## AGP-018 — Agent Status & Activity UI Patterns (ASP)
- Score 5 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Long-running agent tasks (>2 seconds).
- Avoid when: Instant responses (<500ms); Simple confirmation actions; Static information displays; Single-step operations

**Why.** Interface elements showing real-time agent activities, thinking states, and operational status for user awareness. The pattern: real-time visual indicators showing agent activities and operational status. Users need transparency about agent progress to build trust and know when intervention is needed. **Key insight:** Show not just that agent is working, but specifically what it's doing and how long it might take

**Do.**
1. **Status States** — Define thinking, processing, waiting, completed states
2. **Visual Indicators** — Animated icons, progress bars, and status badges
3. **Real-time Updates** — WebSocket or polling for live status changes
4. **Progress Tracking** — Show percentage complete and time estimates
5. **Activity Logs** — Timestamped history of agent actions
- Example flow: `Thinking 🧠 → Processing ⚙️ → Searching 🔍 → Completed ✅`
- **Do:** Show status updates within 100ms of state changes; Use consistent icons and animations across all states; Provide meaningful descriptions of current activities; Display progress bars for long-running tasks; Include estimated completion times when possible
- **Don't:** Use generic "loading" states without context; Show rapid status flickering or jumpy animations; Hide critical error states from the user; Leave users guessing what the agent is doing; Overwhelm with too many simultaneous status indicators

**Measure.** Status Clarity (User understanding of agent activity); Update Latency (Time between state change and UI update); Progress Accuracy (Estimation vs actual completion time); User Interruptions (Frequency of unnecessary user interventions); Error Recovery (Success rate of handling failed states); Trust Building (User confidence in agent reliability); Document Processing: Show parsing → analysis → summarization → completion stages; Data Analysis: Display loading → processing → calculating →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-535.png
Notion: https://app.notion.com/p/Agent-Status-Activity-UI-Patterns-ASP-f8ca9aed534482e9b0fb01be3ca07cb9

## AGP-045 — Context Window Management UI (CWM)
- Score 5 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Cognitive Load
- Use when: Long conversations and sessions.
- Avoid when: Single-turn question answering; Short conversational interactions; Stateless API calls; Simple tool usage scenarios

**Why.** Visual patterns for managing LLM context limits, token usage, and context window optimization in agent interfaces. The pattern: visual interfaces for managing LLM token limits and conversation context. Context windows have hard limits that can break conversations and waste tokens without proper management. **Key insight:** Show token usage in real-time + let users prioritize context + auto-compress when needed

**Do.**
1. **Token Tracking** — Real-time counting of input/output tokens
2. **Usage Meters** — Visual progress bars showing context consumption
3. **Priority Controls** — Pin important messages, compress or remove others
4. **Smart Compression** — Summarize old conversations while preserving key info
5. **Auto-Management** — Proactive suggestions when approaching limits
- Example flow: `Token meter (75% full) → Warning → Pin key messages → Compress old → Continue conversation`
- **Do:** Show real-time token usage with clear visual indicators; Allow users to pin critical messages and context; Provide reversible compression and smart summarization; Warn users before approaching token limits; Implement sliding window management for long conversations
- **Don't:** Let conversations fail without warning; Remove context without user awareness or control; Hide token consumption and usage patterns; Lose critical context during compression; Make context management too complex for users

**Measure.** Context Efficiency (% of useful tokens vs total consumed); Compression Ratio (Token reduction from smart compression); User Satisfaction (Preference for auto vs manual context management); Conversation Length (Extended interactions enabled by management); Error Prevention (Reduction in context overflow failures); Cost Optimization (Token cost savings from efficient management); Document Analysis: Manage large PDF context while maintaining conversation history; Code Review: Pin critical code…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-539.png
Notion: https://app.notion.com/p/Context-Window-Management-UI-CWM-bd1a9aed534482a7b13901d20edd4b55

## AGP-071 — Error Handling and Recovery Patterns (ERP)
- Score 5 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Design Effective Feedback & Error States
- Use when: Production systems with high user dependency.
- Avoid when: Simple prototype or demonstration systems; Internal tools with technical users only; Low-stakes experimental applications; Systems with 100% reliable operations

**Why.** Comprehensive error communication and recovery interface patterns for graceful failure handling in agent systems. The pattern: comprehensive error communication and recovery interfaces for graceful failure handling. Agent system failures need clear communication and effective recovery paths to maintain user trust. **Key insight:** Use three-element structure: Problem + Cause + Solution with context preservation and progressive disclosure

**Do.**
1. **Error Classification** — Categorize errors by severity, recoverability, and user impact
2. **Display Strategy** — Choose appropriate modality: inline, tooltip, modal, or banner
3. **Message Structure** — Problem + Cause + Solution with progressive disclosure
4. **Recovery Mechanisms** — Automatic retry, context preservation, and manual recovery
5. **Prevention Patterns** — Input validation, confirmation dialogs, and undo capabilities
- Example flow: `agent_failure → classify_error → context_preserved → recovery_options → user_choice`
- **Do:** Use clear, jargon-free language for error messages; Provide specific actionable solutions, not generic advice; Preserve user context and work during error recovery; Implement progressive disclosure for technical details; Use consistent visual design for error states
- **Don't:** Blame users or use negative language in error messages; Show technical stack traces or error codes to end users; Use error dialogs for non-critical validation messages; Leave users stranded without clear next steps; Hide errors or fail silently without user notification

**Measure.** Error Recovery Rate (% of errors successfully resolved automatically); User Error Resolution (Time from error to successful user resolution); Context Preservation (% of user work preserved during error recovery); Error Comprehension (User understanding of error cause and solution); Prevention Effectiveness (Reduction in preventable errors over time); Support Ticket Reduction (Decrease in error-related support requests); Agent Communication Failures: Network timeouts with automatic retry and…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-542.png
Notion: https://app.notion.com/p/Error-Handling-and-Recovery-Patterns-ERP-8d2a9aed53448224be80816815e65c32

## AGP-092 — Human-in-the-Loop (HITL)
- Score 5 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes decisions requiring human judgment.
- Avoid when: High-volume, low-stakes decisions; Time-critical autonomous operations; Well-defined rule-based processes; Resource-constrained environments

**Why.** Strategic integration of human judgment at critical decision points in AI workflows. The pattern: strategic integration of human judgment at critical decision points in AI workflows with active participation. Combines AI efficiency with human expertise for complex decisions, ensuring safety and quality in high-stakes scenarios. **Key insight:** Humans actively participate in decision-making process, providing continuous feedback that improves AI performance

**Do.**
1. **Define Triggers** — Set confidence thresholds & intervention points
2. **Design Interface** — Create human-friendly decision interfaces
3. **Route Decisions** — Channel complex cases to domain experts
4. **Capture Feedback** — Record human decisions & reasoning
5. **Learn & Adapt** — Update AI models from human expertise
- Example flow: `confidence_check → human_escalation → expert_decision → feedback_capture → model_update`
- **Do:** Set clear confidence thresholds for human escalation; Design intuitive interfaces for human decision-makers; Capture reasoning behind human decisions for learning; Route decisions to appropriate domain experts; Implement active learning from human feedback
- **Don't:** Escalate every decision to humans (automation defeats purpose); Ignore human feedback in model improvement cycles; Overload humans with too many simultaneous decisions; Skip validation of human decision quality; Use HITL where HOTL supervision would suffice

**Measure.** Escalation Rate (Percentage of decisions requiring human input); Human Decision Quality (Accuracy and consistency of human choices); Response Time (Time from escalation to human decision); Learning Efficiency (AI improvement from human feedback); Cost per Decision (Total cost including human expert time); User Satisfaction (Satisfaction with human-AI collaboration); Medical Diagnosis: AI screens routine cases, escalates complex symptoms to doctors with 95% accuracy improvement; Legal Document…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-543.png
Notion: https://app.notion.com/p/Human-in-the-Loop-HITL-278a9aed534482679aca81bd6b3a7d2d

## AGP-140 — Onboarding and Education Patterns (OEP)
- Score 5 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Optimize Onboarding & First-Time Experience
- Use when: Introducing novel AI agent capabilities.
- Avoid when: Expert users already familiar with similar agents; Simple, single-purpose agent tools; Internal tools with extensive training programs; Temporary or experimental prototypes

**Why.** User education and onboarding patterns for introducing agent capabilities, building appropriate mental models, and fostering trust. The pattern: user education and onboarding patterns for building appropriate mental models and trust in AI agents. Users need proper introduction to agent capabilities to develop appropriate expectations and effective usage patterns. **Key insight:** Build trust through progressive capability disclosure, hands-on practice, and transparent limitation communication

**Do.**
1. **Mental Model Building** — Establish clear agent capabilities and limitations early
2. **Progressive Disclosure** — Layer complexity from basic to advanced features
3. **Interactive Tutorials** — Hands-on practice with real agent interactions
4. **Trust Calibration** — Demonstrate reliability and failure scenarios
5. **Contextual Help** — Just-in-time assistance and feature discovery
- Example flow: `intro_capabilities → guided_interaction → trust_demo → practice_scenarios → ongoing_support`
- **Do:** Start with clear capability boundaries and limitations; Use progressive disclosure to prevent cognitive overload; Provide hands-on practice with immediate feedback; Build trust gradually through transparency and reliability; Offer contextual help and feature discovery prompts
- **Don't:** Overwhelm users with all features at once; Promise capabilities the agent cannot deliver; Use lengthy text-heavy tutorials without interaction; Hide important limitations or failure modes; Force users through rigid linear onboarding flows

**Measure.** Onboarding Completion (% of users completing initial training flow); Feature Adoption (Rate of advanced feature discovery and usage); Trust Calibration (Appropriate reliance on agent recommendations); Time to Productivity (Duration from first use to effective task completion); User Retention (% of users returning after initial onboarding); Support Reduction (Decrease in help requests post-onboarding); AI Assistant Introduction: Progressive capability reveal with trust-building scenarios…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-548.png
Notion: https://app.notion.com/p/Onboarding-and-Education-Patterns-OEP-85ba9aed534483feb59f018bb7b817ca

## AGP-008 — Accessibility in Agent Design (AAD)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Design for Accessibility & Inclusion
- Use when: Public-facing AI applications and services.
- Avoid when: Internal prototypes for technical teams only; Specialized tools for homogeneous expert users; Temporary experimental systems; Single-use demonstration applications

**Why.** Universal design patterns for accessible agent interfaces supporting diverse abilities and assistive technologies. The pattern: universal design patterns for accessible agent interfaces supporting diverse abilities and assistive technologies. AI agents must be accessible to users with disabilities to ensure equitable access and legal compliance. **Key insight:** Design inclusive experiences from the start with multimodal access, assistive technology integration, and cognitive support

**Do.**
1. **Universal Design** — Design for diverse abilities from the start, not as afterthought
2. **Assistive Technology** — Integrate with screen readers, voice control, and adaptive devices
3. **Multimodal Access** — Provide multiple communication channels: text, voice, visual, haptic
4. **Cognitive Support** — Simplify language, reduce cognitive load, provide memory aids
5. **Dynamic Adaptation** — AI-powered real-time adjustment to user accessibility needs
- Example flow: `detect_needs → adapt_interface → multiple_modalities → assistive_integration → cognitive_support`
- **Do:** Follow WCAG 2.1 AA standards as minimum baseline; Test with real users who have disabilities; Provide multiple ways to access the same functionality; Use semantic HTML and proper ARIA attributes; Design with keyboard navigation as primary interaction
- **Don't:** Rely solely on color to convey important information; Use accessibility overlays as primary solution; Assume one solution works for all disability types; Hide accessibility features in separate interfaces; Ignore cognitive and learning disabilities in design

**Measure.** WCAG Compliance Score (Percentage of AA/AAA criteria met); Assistive Technology Support (Screen reader, voice control compatibility); Task Completion Equity (Success rates across different ability groups); Cognitive Load Assessment (Mental effort required for task completion); User Satisfaction Parity (Equal satisfaction across accessibility needs); Adaptation Effectiveness (Success of dynamic accessibility adjustments); Vision Accessibility: Screen reader optimization, high contrast, voice…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-532.png
Notion: https://app.notion.com/p/Accessibility-in-Agent-Design-AAD-342a9aed5344828c91d401eab49cf7b3

## AGP-012 — Adaptive Interface Patterns (AIP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Increase User Engagement & Retention
- Use when: Users have diverse needs and contexts.
- Avoid when: Simple, single-purpose interfaces; Highly regulated environments requiring consistency; Privacy-sensitive contexts without consent mechanisms; Time-critical applications where stability is crucial

**Why.** Dynamic UI/UX adaptation and creation patterns that personalize agent interfaces based on user context, behavior, and preferences. The pattern: dynamic UI/UX adaptation and creation based on user context, behavior, and real-time needs. One-size-fits-all interfaces fail to serve diverse users with varying contexts and abilities. **Key insight:** Combine multiple signals (intent, environment, accessibility needs) for intelligent interface personalization

**Do.**
1. **Context Detection** — Monitor user behavior, environment, and intent signals
2. **Adaptation Engine** — Real-time analysis and interface adjustment decisions
3. **Dynamic UI** — Flexible components that adapt layout, style, and content
4. **Learning Loop** — Capture feedback and improve adaptation accuracy
5. **User Control** — Override settings and adaptation preferences
- Example flow: `user_stressed → simplify_interface + reduce_options + gentle_tone`
- **Do:** Start with explicit user preferences and consent; Provide clear adaptation explanations and controls; Use multiple signals for robust context detection; Implement graceful fallbacks for adaptation failures; Allow users to override any automatic adaptation
- **Don't:** Adapt too frequently or dramatically without warning; Use sensitive data without explicit consent; Hide adaptation logic completely from users; Assume adaptation preferences transfer between contexts; Sacrifice core functionality for adaptive features

**Measure.** Adaptation Accuracy (% of appropriate interface adjustments); User Satisfaction (Preference for adaptive vs static interface); Task Completion (Efficiency gains from personalization); Error Reduction (Mistakes prevented by context-aware adaptations); Engagement (Time spent and feature usage with adaptations); Override Rate (% of adaptations manually reversed by users); Intent Detection: Adapt interface complexity based on user goals (quick vs detailed); Accessibility: Real-time adjustments for…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-533.png
Notion: https://app.notion.com/p/Adaptive-Interface-Patterns-AIP-54ca9aed53448210be0d81ee670962e3

## AGP-014 — Agent Collaboration UX (ACX)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex workflows requiring specialized agent expertise.
- Avoid when: Simple single-step tasks manageable by one agent; Real-time applications requiring immediate responses; Limited resources unable to support multi-agent infrastructure; Use cases where coordination overhead exceeds benefits; Highly regulated environments with strict single-point accountability

**Why.** User experience patterns for multi-agent coordination, handoffs, and collaborative workflows with transparent orchestration. The pattern: multi-agent coordination interfaces with seamless handoffs, transparent orchestration, and specialized agent collaboration. Enables complex enterprise workflows, reduces coordination overhead, and provides scalable automation with human oversight integration. **Key insight:** Complexity-based handoff triggers with context preservation - coordination becomes transparent and manageable at enterprise scale

**Do.**
1. **Design Agent Network** — Define specialized agent roles, capabilities, and coordination hierarchy
2. **Implement Handoff Logic** — Build context-preserving handoff mechanisms with complexity thresholds
3. **Create Coordination Dashboard** — Develop real-time status visualization and orchestration controls
4. **Build Transparency Layer** — Add visual indicators for agent activities, handoffs, and decision points
5. **Test & Optimize** — Validate coordination flows and optimize handoff timing with user feedback
- Example flow: `agent_mapping → handoff_implementation → dashboard_creation → transparency_design → flow_optimization`
- **Do:** Implement complexity-based handoff triggers to avoid rigid rule-based systems; Preserve full conversation context during agent handoffs; Use visual consistency across coordination dashboards and status indicators; Provide real-time transparency of agent activities and decision-making; Design for both centralized and decentralized coordination patterns; Include human-in-the-loop intervention points for high-stakes decisions; Implement agent specialization indicators showing expertise areas
- **Don't:** Force customers to repeat information during agent handoffs; Hide agent coordination complexity without providing transparency options; Use single-agent solutions for inherently multi-step collaborative workflows; Implement handoffs without clear reasoning or user feedback; Ignore state management across distributed multi-agent architectures

**Measure.** Handoff Success Rate (% of successful context-preserving agent transitions); Task Completion Efficiency (Time to complete multi-agent workflows vs single-agent baseline); Coordination Transparency Score (User understanding of agent activities and decision-making); Agent Utilization Balance (Workload distribution across specialized agents); Error Recovery Time (Time to resolve coordination failures and restore workflow); User Intervention Frequency (% of workflows requiring human oversight or…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-534.png
Notion: https://app.notion.com/p/Agent-Collaboration-UX-ACX-da6a9aed53448361bc1c01f76b8190cc

## AGP-021 — Ambient Agent Patterns (AAP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Increase User Engagement & Retention
- Use when: Long-running background processes.
- Avoid when: Single-shot query-response needs; Real-time interactive conversations; Simple automation without ambient signals; Stateless operation requirements

**Why.** Always-present, contextually-aware agent interfaces that operate seamlessly in the background while remaining accessible when needed. The pattern: agents that respond to ambient signals and demand user input only when they detect important opportunities or require feedback. Saves user attention for when it matters most, enables multiple concurrent tasks, mimics natural human communication. **Key insight:** Event stream listening + selective human interaction → long-term learning with persistent state

**Do.**
1. **Event Stream** — Listen to ambient signals continuously
2. **State Management** — Persistent tracking with stateful workflows
3. **Human Interaction** — Notify/Question/Review patterns
4. **Concurrent Tasks** — Multiple simultaneous operations
5. **Long-term Memory** — Learning and adaptation over time
- Example flow: `ambient_signals → event_detection → selective_interaction → concurrent_processing → memory_update`
- **Do:** Listen to ambient signals continuously for opportunities; Use Notify/Question/Review interaction patterns; Handle multiple concurrent tasks simultaneously; Build persistent state with stateful workflows; Save user attention for when it matters most
- **Don't:** Require constant human input for every decision; Block on human feedback for routine operations; Create notification fatigue with non-critical alerts; Lose conversational context between interactions; Ignore the ambient nature - wait only for explicit triggers

**Measure.** Signal Detection Rate (% ambient events correctly identified); Human Interaction Quality (Notify/Question/Review effectiveness); Task Concurrency (Simultaneous operations handled); State Persistence (Context retention across sessions); Attention Efficiency (Valuable vs noise interactions ratio); Long-term Learning (Adaptation improvement over time); AI Email Assistant: background triage, priority detection, draft suggestions; Project Management: task monitoring, deadline tracking, team…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-536.png
Notion: https://app.notion.com/p/Ambient-Agent-Patterns-AAP-0d5a9aed53448371bdcf013668f48df5

## AGP-029 — Chat Interface Patterns (CIP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Learning Curve for Complex Tools
- Use when: Team collaboration scenarios.
- Avoid when: Simple query-response needs; High-security environments; Minimal UI requirements; Single-user applications

**Why.** Specialized chat interface patterns optimized for agent interactions, including message threading, context management, and rich content display. The pattern: specialized chat interfaces optimized for agent interactions with threading, rich content, and collaborative features. Enables complex multi-topic conversations, rich media sharing, and seamless human-AI collaboration. **Key insight:** Threading + rich content + agent-specific features → enhanced conversational experiences

**Do.**
1. **Threading System** — Conversation branching & merging logic
2. **Rich Content** — Documents, code, images, interactive widgets
3. **Agent Features** — Thinking indicators & source citations
4. **Collaboration** — Real-time presence & message reactions
5. **Context Management** — Thread preservation & summarization
- Example flow: `user_message → thread_routing → content_rendering → agent_response → context_update`
- **Do:** Support threaded conversations for topic exploration; Show agent thinking process with visual indicators; Integrate rich media (documents, code, images); Provide source citations with expandable details; Enable message reactions and collaborative editing
- **Don't:** Force linear conversation flow only; Hide agent reasoning process from users; Limit to text-only interactions; Lose context when switching between threads; Overwhelm with too many concurrent features

**Measure.** Thread Engagement (Active branches per conversation); Content Interaction (Rich media usage & sharing rate); Collaboration Rate (Multi-participant conversation %); Context Retention (Thread switching without loss); User Satisfaction (Interface usability score); Problem Resolution (Time to solution in threaded chats); Customer Support: threaded issue tracking, document sharing, escalation management; Educational Platforms: topic discussions, resource sharing, collaborative learning; Team…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-537.png
Notion: https://app.notion.com/p/Chat-Interface-Patterns-CIP-2c8a9aed5344835aa1b201f6d2103f27

## AGP-032 — Confidence Visualization UI Patterns (CVP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes decision making.
- Avoid when: Simple confirmatory tasks; Deterministic rule-based outputs; Users prefer definitive answers; Low-risk casual interactions

**Why.** Visual interface elements for displaying AI confidence levels, uncertainty, and prediction reliability in user-friendly formats. The pattern: display AI model confidence to help users make informed decisions. Users need to understand when AI is certain vs uncertain to build appropriate trust. **Key insight:** Show not just what AI thinks, but how confident it is + explain what drives that confidence

**Do.**
1. **Define Scale** — Use 0-100% or Low/Med/High confidence levels
2. **Visual Design** — Progress bars, color gradients, or uncertainty bands
3. **Context Display** — Show what drives confidence (data quality, model certainty)
4. **Action Triggers** — Different UI states based on confidence thresholds
5. **User Education** — Help users understand confidence meaning
- Example flow: `High (95%): Green check → Medium (70%): Orange caution → Low (30%): Red warning`
- **Do:** Use consistent color schemes for confidence levels; Explain what factors influence confidence scores; Provide confidence calibration with historical accuracy; Show uncertainty ranges not just point estimates; Include confidence in voice/conversational interfaces
- **Don't:** Show false precision (99.73% vs ~very high); Hide uncertainty when model is genuinely unsure; Use confidence as the only decision factor; Overwhelm users with technical probability details; Make low confidence visually alarming for normal uncertainty

**Measure.** Confidence Visualization UI Patterns ((); CVP ()); Visual interface elements for displaying AI confidence levels, uncertainty, and prediction reliability in user-friendly formats (Complexity:); high (UI/UX & Human-AI Interaction); Overview (Flow Visualization); Interactive Demo (Code Playground); Overview (Flow); Demo (Code); 🎯 30-Second Overview (Pattern:); Display AI model confidence to help users make informed decisions (Why:); Users need to understand when AI is certain vs uncertain to…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-538.png
Notion: https://app.notion.com/p/Confidence-Visualization-UI-Patterns-CVP-592a9aed534482a78d2b01fa47a66e0d

## AGP-052 — Conversational Interface Patterns (CIP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Learning Curve for Complex Tools
- Use when: Natural language interaction is primary UX goal.
- Avoid when: Simple CRUD operations suffice; Real-time precision control needed; Visual data manipulation required; Users prefer traditional GUI patterns

**Why.** Advanced conversational UI/UX patterns that move beyond traditional chatbots to agent-driven, multimodal experiences. The pattern: agent-driven conversational interfaces that move beyond traditional chatbots to multimodal, adaptive experiences. Enables natural human-computer interaction, reduces cognitive load, and provides accessible interfaces for diverse users. **Key insight:** Intent-based outcome specification with seamless multimodal transitions - conversation becomes the universal interface

**Do.**
1. **Define Persona** — Create distinct system and user personas with clear roles
2. **Design Flow** — Map conversation paths with branching and error handling
3. **Implement Intent** — Build intent-based outcome specification interface
4. **Add Multimodal** — Integrate voice, text, visual, and gesture inputs
5. **Test & Refine** — Iterate on user testing with diverse conversation scenarios
- Example flow: `persona_design → flow_mapping → intent_interface → multimodal_integration → user_testing`
- **Do:** Design for natural human conversation patterns first; Create clear system persona with consistent personality; Use machine-appropriate language like "processing" not "thinking"; Implement progressive disclosure for complex information; Provide multiple conversation recovery options; Enable seamless modality switching (voice/text/visual)
- **Don't:** Anthropomorphize AI with human emotions or consciousness; Force single-turn interactions for complex tasks; Hide AI limitations or pretend system is human; Use endless scrolling chat for all interaction patterns; Ignore accessibility and diverse user communication needs

**Measure.** Conversation Completion Rate (% users completing intended task flow); Intent Recognition Accuracy (Success rate of understanding user goals); User Satisfaction Score (CSAT rating vs traditional interface); Error Recovery Success (% failed conversations successfully recovered); Modality Switching Smoothness (Friction in voice/text/visual transitions); Accessibility Compliance (WCAG 2.1 AA adherence across modalities); Customer Support: Natural troubleshooting → guided resolution → escalation…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-540.png
Notion: https://app.notion.com/p/Conversational-Interface-Patterns-CIP-bafa9aed5344835a895e812e4ce53bca

## AGP-056 — Cross-Platform Agent UX (CPX)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Design a Consistent System at Scale
- Use when: Multi-device user workflows.
- Avoid when: Single-platform specialized tools; Resource-constrained environments; Platform-specific features required; Simple single-purpose applications

**Why.** Consistent agent experience patterns across devices and platforms with seamless synchronization and adaptation. The pattern: consistent agent experiences across desktop, mobile, and web with seamless synchronization and platform-optimized adaptation. Enables fluid multi-device workflows, maintains user context, and leverages each platform's unique strengths. **Key insight:** Design consistency + platform adaptation + real-time sync → unified cross-device experience

**Do.**
1. **Design System** — Unified colors, typography, layouts
2. **State Sync** — Real-time cross-device synchronization
3. **Platform Adaptation** — Device-specific optimizations
4. **Context Transfer** — Seamless device switching
5. **Feature Parity** — Consistent capabilities across platforms
- Example flow: `design_system → state_sync → platform_adaptation → context_transfer → feature_parity`
- **Do:** Maintain visual consistency across all platforms; Adapt interactions to platform conventions (gestures, navigation); Sync agent state and conversation history in real-time; Preserve context when users switch between devices; Optimize for each platform's strengths and capabilities
- **Don't:** Create completely different experiences per platform; Ignore platform-specific interaction patterns; Lose conversation state during device transitions; Force mobile interfaces to match desktop layouts; Sacrifice performance for visual consistency

**Measure.** Cross-Device Usage (% users active on multiple platforms); Context Transfer Success (Seamless device switching rate); Platform Consistency Score (UI/UX uniformity rating); Feature Parity (Capability availability across platforms); Sync Performance (Real-time state synchronization latency); User Satisfaction (Cross-platform experience rating); Personal Assistant: mobile voice → desktop detailed responses → tablet visual review; Enterprise Tools: mobile field work → desktop analysis → tablet…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-541.png
Notion: https://app.notion.com/p/Cross-Platform-Agent-UX-CPX-26da9aed534483dfa17e8170e78300bb

## AGP-091 — Human On the Loop (HOTL)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: High-speed autonomous operations.
- Avoid when: Continuous human decision-making needed; Unreliable or unproven AI systems; Legal requirements for active human approval; High-touch customer interactions

**Why.** Human supervisory oversight of autonomous AI systems with ability to monitor, intervene, or take control when necessary. The pattern: human supervisory oversight of autonomous AI systems with monitoring and intervention capabilities. Enables high-speed autonomous operation while maintaining human control and safety oversight for edge cases. **Key insight:** Humans supervise rather than participate, intervening only when AI encounters exceptional situations

**Do.**
1. **Monitor Setup** — Create real-time dashboards & alert systems
2. **Define Boundaries** — Set operational parameters & risk limits
3. **Exception Detection** — Configure anomaly & threshold alerts
4. **Override Controls** — Build intervention & takeover mechanisms
5. **Resume Automation** — Enable smooth return to autonomous operation
- Example flow: `autonomous_operation → monitor_dashboard → exception_alert → human_override → resume_autonomy`
- **Do:** Design comprehensive real-time monitoring dashboards; Set clear operational boundaries and risk parameters; Implement fast, intuitive override mechanisms; Provide contextual information for human decisions; Test emergency takeover procedures regularly
- **Don't:** Overwhelm operators with too many alerts; Design overly complex intervention interfaces; Allow autonomous operation without clear boundaries; Skip training operators on override procedures; Ignore human workload and attention limitations

**Measure.** Autonomous Operation Time (Percentage of time running without intervention); Mean Time to Detection (Average time to identify anomalies); Intervention Response Time (Time from alert to human action); False Alert Rate (Percentage of unnecessary human alerts); Successful Takeover Rate (Percentage of successful human interventions); Return to Autonomy Time (Time to resume autonomous operation); Autonomous Vehicles: AI drives normally, human supervisor ready to take control in emergencies with…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-544.png
Notion: https://app.notion.com/p/Human-On-the-Loop-HOTL-24ba9aed534482e19e1c01363794ba47

## AGP-127 — Mixed-Initiative Interface Patterns (MIP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Learning Curve for Complex Tools
- Use when: Complex problem-solving tasks.
- Avoid when: Simple, single-step operations; Fully automated background processes; Emergency situations requiring immediate action; Users preferring complete AI autonomy

**Why.** UI patterns for seamless control switching between human and AI agents, enabling collaborative initiative-taking. The pattern: dynamic control-sharing between humans and AI based on task context. Neither full automation nor manual control alone maximizes human-AI collaborative potential. **Key insight:** Design flexible handoffs: AI proposes → Human decides → Either can take initiative as needed

**Do.**
1. **Define Roles** — Clarify when AI leads vs when human leads interaction
2. **Control Handoffs** — Smooth transitions between AI and human initiative
3. **Override Mechanisms** — Easy ways for humans to take control anytime
4. **Status Indicators** — Show who is currently driving the interaction
5. **Collaboration Cues** — Visual hints for when to collaborate vs lead
- Example flow: `AI suggests → Human reviews → Human modifies → AI adapts → Joint execution`
- **Do:** Make it clear who has control at any moment; Provide immediate override/takeover options; Show AI suggestions as starting points, not final answers; Enable seamless handoffs between AI and human control; Design for varying levels of human engagement
- **Don't:** Force users into rigid interaction patterns; Make AI takeover feel sudden or unexpected; Hide how to regain control from AI automation; Assume users want the same level of AI involvement; Make collaboration feel like competing for control

**Measure.** Initiative Balance (% time human vs AI leads interaction); Handoff Quality (Smooth transitions without friction); User Satisfaction (Preference for mixed vs single-initiative); Task Completion (Success rate of collaborative tasks); Override Usage (Frequency of human control takeovers); Collaboration Efficiency (Time saved vs full manual work); Content Creation: AI drafts → Human edits → AI suggests improvements → Human finalizes; Data Analysis: Human defines question → AI explores data → Human…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-545.png
Notion: https://app.notion.com/p/Mixed-Initiative-Interface-Patterns-MIP-761a9aed534482e292cc81e42b842968

## AGP-130 — Monitoring and Control Patterns (MCP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Managing complex multi-agent systems.
- Avoid when: Simple single-agent applications; Prototype or development environments; Low-risk, non-critical operations; Resource-constrained environments

**Why.** Mission-control style interfaces for real-time agent oversight, intervention capabilities, and system monitoring. The pattern: mission-control style interfaces for real-time agent oversight and intervention. Complex agent systems need centralized monitoring and rapid intervention capabilities. **Key insight:** Design hierarchical dashboards with exception-based alerts and clear control mechanisms

**Do.**
1. **Dashboard Design** — Multi-level information hierarchy from summary to detail
2. **Real-time Monitoring** — Live agent status, performance metrics, and alerts
3. **Control Interface** — Start/stop/pause controls with clear feedback
4. **Exception Handling** — Automated alerts and manual intervention points
5. **Audit Trail** — Comprehensive logging of all control actions
- Example flow: `agent_network → status_dashboard → anomaly_detected → alert + intervention_options`
- **Do:** Design clear visual hierarchy from overview to detail; Implement real-time updates with minimal latency; Provide emergency stop/pause for all operations; Use consistent color coding for status indicators; Include context-aware alerts and recommendations
- **Don't:** Overwhelm operators with too much real-time data; Hide critical controls behind multiple navigation levels; Use confusing or ambiguous status indicators; Implement controls without confirmation for destructive actions; Ignore accessibility requirements for mission-critical interfaces

**Measure.** System Reliability (Uptime percentage and mean time to recovery); Alert Response Time (Time from anomaly detection to human response); Intervention Accuracy (% of appropriate vs unnecessary interventions); Operator Efficiency (Tasks managed per operator and error rates); Dashboard Usability (Time to find information and complete actions); System Visibility (% of system state observable through interface); Enterprise Agent Networks: Monitor hundreds of agents with hierarchical status views…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-546.png
Notion: https://app.notion.com/p/Monitoring-and-Control-Patterns-MCP-47fa9aed534482e093c881224a36829c

## AGP-135 — Multimodal Interaction Patterns (MMIP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Learning Curve for Complex Tools
- Use when: Natural human-computer interaction.
- Avoid when: Simple text-only applications; High-security environments; Resource-constrained systems; Privacy-sensitive contexts

**Why.** Advanced multimodal agent interaction patterns integrating voice, visual, gesture, and text communication seamlessly. The pattern: advanced multimodal agent interactions integrating voice, visual, gesture, and text communication seamlessly. Enables natural human-computer interaction, supports accessibility, and adapts to environmental contexts. **Key insight:** Context-aware modality selection + input fusion + semantic alignment → fluid multimodal experiences

**Do.**
1. **Modality Detection** — Context-aware communication mode selection
2. **Input Fusion** — Voice, gesture, text, visual integration
3. **Semantic Alignment** — Cross-modal meaning consistency
4. **Adaptive Response** — Context-appropriate output modality
5. **Transition Management** — Seamless modality switching
- Example flow: `context_analysis → modality_selection → input_fusion → semantic_processing → adaptive_response`
- **Do:** Adapt modality selection based on environmental context; Ensure semantic consistency across all input modalities; Support seamless transitions between communication modes; Learn user preferences for modality combinations; Provide fallback options when modalities fail
- **Don't:** Force users into single-modality interactions; Ignore environmental factors (noise, privacy, accessibility); Create jarring transitions between modalities; Assume all users prefer the same modality mix; Overwhelm with too many simultaneous input channels

**Measure.** Modality Switch Success (% seamless transitions between modes); Context Recognition Accuracy (Appropriate modality selection rate); Cross-Modal Consistency (Semantic alignment across inputs); User Preference Learning (Adaptation to individual patterns); Natural Interaction Score (User satisfaction with fluidity); Error Recovery Rate (Successful fallback handling); Smart Home Control: voice commands + gesture recognition + visual feedback; Automotive Interfaces: speech + touch + eye tracking for…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-547.png
Notion: https://app.notion.com/p/Multimodal-Interaction-Patterns-MMIP-f14a9aed534483e6ae2e81e0e6c26e53

## AGP-146 — Privacy and Security UX (PSX)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Handling personal or sensitive data.
- Avoid when: Anonymous data processing only; Internal tools with no personal data; Prototype systems without real data; Simple single-purpose utilities

**Why.** Privacy-first design patterns for agent systems with transparent data handling, granular controls, and user empowerment. The pattern: privacy-first design patterns with transparent data handling, granular controls, and user empowerment. AI agents handle sensitive data requiring robust privacy protection and regulatory compliance. **Key insight:** Implement privacy by design with granular controls, plain language transparency, and usable security

**Do.**
1. **Privacy by Design** — Build granular controls and transparency into core UX
2. **Data Minimization** — Clear purpose specification and essential data collection only
3. **User Empowerment** — Easy access, correction, deletion, and portability controls
4. **Transparent Processing** — Plain language explanations of data use and AI decisions
5. **Security UX** — Usable security controls that balance protection and usability
- Example flow: `consent_granular → data_purpose_clear → processing_transparent → controls_accessible → security_usable`
- **Do:** Use plain language for privacy notices and consent forms; Provide granular control over data types and purposes; Make privacy settings easily discoverable and accessible; Implement just-in-time consent for new data uses; Design security features for usability and adoption
- **Don't:** Hide privacy settings in deep menu structures; Use dark patterns to manipulate privacy choices; Overwhelm users with complex legal language; Make privacy-protective choices harder than permissive ones; Sacrifice security for convenience without user awareness

**Measure.** Privacy Control Usage (% of users actively managing privacy settings); Consent Quality (Informed consent vs manipulated agreement rates); Data Subject Rights (Success rate of access, correction, deletion requests); Security Adoption (% of users enabling optional security features); Transparency Effectiveness (User understanding of data processing purposes); Compliance Efficiency (Time to fulfill regulatory requirements); GDPR Compliance Dashboard: Granular consent management with clear data…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-549.png
Notion: https://app.notion.com/p/Privacy-and-Security-UX-PSX-6c6a9aed534482a3b2e60109a555e692

## AGP-149 — Progressive Disclosure UI Patterns (PDP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Simplify a Cluttered Interface
- Use when: Complex reasoning explanation needed.
- Avoid when: Simple, single-step responses; Critical alerts requiring immediate attention; Linear workflows without complexity; Time-sensitive decision making

**Why.** Interface patterns for gradually revealing agent capabilities, reasoning, and complex information to prevent cognitive overload. The pattern: gradually reveal information layers to prevent cognitive overload. Users need complex AI reasoning but get overwhelmed by technical details upfront. **Key insight:** Start simple, expand on-demand: summary → detailed → technical with clear visual hierarchy

**Do.**
1. **Layer Info** — Define summary → detailed → technical levels
2. **UI Triggers** — Click/expand controls for each level
3. **Context Aware** — Show relevant depth based on user type
4. **Visual Hierarchy** — Clear typography and spacing levels
5. **State Management** — Remember user preferences for disclosure
- Example flow: `agent_response → [show reasoning] → [technical details] → [full trace]`
- **Do:** Start with essential information only; Use consistent expand/collapse icons across UI; Implement smooth animations for transitions; Remember user disclosure preferences; Provide "expand all" / "collapse all" options
- **Don't:** Show all complex information at once; Use misleading or unclear labels for disclosure; Nest disclosure levels too deeply (max 3-4); Hide critical information behind multiple clicks; Ignore keyboard navigation for disclosure controls

**Measure.** Cognitive Load (User task completion time); Comprehension (% users understanding agent actions); Engagement (Disclosure interaction rates); User Satisfaction (Preference for progressive vs full disclosure); Error Rate (Mistakes due to insufficient information); Learning Efficiency (Time to understand new capabilities); Agent Reasoning: Show summary → detailed steps → technical reasoning trace; Capability Introduction: Basic features → advanced tools → expert features; Error Explanation: What…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-550.png
Notion: https://app.notion.com/p/Progressive-Disclosure-UI-Patterns-PDP-b6fa9aed53448325824481e2438239f6

## AGP-188 — Trust and Transparency Patterns (TTP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes decision-making applications (healthcare, finance, legal).
- Avoid when: Simple, low-risk applications where transparency adds unnecessary complexity; Performance-critical systems where explanation overhead is prohibitive; Internal tools where users have high AI literacy and trust; Applications with clear, deterministic rule-based logic; Systems where IP protection conflicts with transparency requirements

**Why.** Design patterns for building user trust through explainable AI interfaces, decision transparency, and source attribution. The pattern: explainable AI interfaces with decision transparency, source attribution, and trust-building patterns for responsible AI deployment. Builds user trust, meets regulatory requirements, enables informed decision-making, and ensures accountability in AI systems. **Key insight:** Three-level transparency framework (what/how/why) with progressive disclosure - trust through understanding rather than blind faith

**Do.**
1. **Design Transparency Framework** — Implement three-level transparency: what/how/why with algorithmic, interaction, and social layers
2. **Build Explainability Components** — Create progressive disclosure interfaces with feature importance and counterfactual explanations
3. **Add Trust Indicators** — Implement confidence visualization, source attribution, and AI-generated content markers
4. **Create Decision Visualization** — Design decision trees, reasoning paths, and interactive exploration interfaces
5. **Implement Model Cards** — Build structured documentation with multi-stakeholder information architecture
- Example flow: `transparency_levels → explainability_ui → trust_signals → decision_viz → model_documentation`
- **Do:** Use clear visual indicators (like Einstein sparkles) to show AI-generated content; Implement three levels of transparency: what happened, how decisions were made, why they matter; Provide progressive disclosure with expandable explanation panels; Include source attribution and citations for all AI recommendations; Design for different stakeholder needs: technical, legal, and user-friendly explanations; Implement mindful friction for high-stakes decisions with confirmation dialogs; Use counterfactual explanations to show "what if" scenarios; Create interactive model cards with layered information architecture
- **Don't:** Hide uncertainty or present AI decisions as infallible; Use technical jargon without providing accessible explanations; Overwhelm users with too much technical detail upfront; Implement transparency without considering user cognitive load; Skip bias detection warnings and toxicity safeguards; Provide explanations without actionable information for users

**Measure.** Trust Calibration Score (Alignment between user trust levels and actual AI reliability); Explanation Comprehension Rate (% of users who correctly understand AI reasoning explanations); Decision Confidence Improvement (Increase in user confidence when making AI-assisted decisions); Transparency Engagement Rate (% of users who actively explore explanation features); Error Detection Accuracy (User ability to identify when AI makes mistakes); Stakeholder Satisfaction Index (Multi-stakeholder rating…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-551.png
Notion: https://app.notion.com/p/Trust-and-Transparency-Patterns-TTP-601a9aed534482b48e6a01e662716fcd

## AGP-191 — Visual Reasoning Patterns (VRP)
- Score 4 · Agentic Patterns / UI/UX & Human-AI Interaction
- Tags: ai-patterns
- Goals: Reduce Cognitive Load
- Use when: High-stakes decision support systems.
- Avoid when: Simple query-response interactions; Speed-critical applications; Minimal UI requirements; Low-complexity decisions

**Why.** Visual representation patterns for agent reasoning, decision-making processes, and cognitive transparency. The pattern: visual representation of agent reasoning processes, decision trees, and cognitive transparency for better understanding. Builds user trust, enables debugging, supports learning, and improves decision quality through transparency. **Key insight:** Visual reasoning paths + confidence metrics + interactive exploration → transparent AI decisions

**Do.**
1. **Decision Trees** — Visualize reasoning paths and logic flow
2. **Progress Indicators** — Step-by-step workflow transparency
3. **Confidence Metrics** — Uncertainty and reliability display
4. **Source Attribution** — Information provenance highlighting
5. **Interactive Exploration** — Drill-down and comparison capabilities
- Example flow: `reasoning_data → decision_tree → progress_visualization → confidence_display → interactive_exploration`
- **Do:** Show step-by-step reasoning process visually; Use progressive disclosure for complex decision trees; Display confidence levels and uncertainty ranges; Highlight key information sources and influences; Provide interactive exploration of reasoning paths
- **Don't:** Overwhelm users with too much detail at once; Hide uncertainty or low confidence areas; Use static visualizations for complex reasoning; Ignore the need for comparison views; Make visualizations purely decorative without function

**Measure.** Reasoning Clarity (User understanding of agent logic); Trust Calibration (Appropriate confidence in decisions); Exploration Depth (User interaction with reasoning paths); Decision Quality (Improved outcomes with transparency); Learning Effectiveness (Knowledge transfer from visualizations); Error Detection (User ability to spot reasoning flaws); Medical Diagnosis: decision tree visualization, confidence intervals, source evidence; Financial Analysis: risk assessment paths, model explanations…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-552.png
Notion: https://app.notion.com/p/Visual-Reasoning-Patterns-VRP-804a9aed5344820a9b6801775bced6fa
