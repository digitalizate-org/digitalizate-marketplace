# Agentic Patterns / Multi-Agent (9)

## AGP-016 — Agent Communication Protocols (ACP)
- Score 3 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Multi-protocol agent networks requiring flexible communication patterns.
- Avoid when: Simple single-protocol systems where complexity is unnecessary; Environments with strict network restrictions blocking multiple ports; Legacy systems unable to support modern protocol implementations; Ultra-constrained devices with minimal processing capabilities; Applications with extremely simple point-to-point communication needs

**Why.** Standardized communication mechanisms for agent interaction including message passing, publish-subscribe, and event-driven patterns. The pattern: comprehensive communication protocols for agent interaction including REST APIs, gRPC, GraphQL, WebSocket, SSE, and message queuing. Enables flexible synchronous/asynchronous communication, real-time updates, efficient data transfer, and scalable multi-protocol coordination. **Key insight:** Multi-protocol support + standardized interfaces + real-time capabilities = robust agent communication

**Do.**
1. **Choose Protocol Type** — Select REST, gRPC, GraphQL, WebSocket, SSE, or Message Queue based on needs
2. **Define Interface Schema** — Design API contracts, message schemas, or event structures with versioning
3. **Setup Infrastructure** — Deploy API gateways, message brokers, load balancers, and monitoring
4. **Implement Communication** — Add protocol handlers, error handling, authentication, and rate limiting
5. **Monitor & Optimize** — Track latency, throughput, error rates, and connection health
- Example flow: `REST API ↔ gRPC ↔ GraphQL ↔ WebSocket ↔ Message Queue → Multi-Protocol Agent Network`
- **Do:** Choose appropriate protocol: REST for CRUD, gRPC for performance, GraphQL for flexibility; Use WebSocket for real-time bidirectional communication and SSE for server-push updates; Implement proper API versioning, schema evolution, and backward compatibility; Add comprehensive error handling, timeouts, circuit breakers, and retry logic; Use Protocol Buffers for gRPC efficiency and OpenAPI specs for REST documentation; Implement authentication (OAuth2, JWT) and rate limiting across all protocols
- **Don't:** Use only one protocol - different use cases require different communication patterns; Ignore connection management for WebSocket and proper cleanup for SSE streams; Skip load balancing and service discovery for distributed agent networks; Use REST for real-time communication or gRPC for simple CRUD operations; Allow unbounded GraphQL queries or missing depth limiting protections

**Measure.** Message Throughput (Messages per second processed by the communication system); Delivery Latency (P50/P95 time from message send to agent processing); Delivery Success Rate (Percentage of messages successfully delivered and acknowledged); Queue Depth (Average and maximum message backlog per topic/queue); Processing Concurrency (Number of parallel message handlers per agent); Network Utilization (Bandwidth usage and connection efficiency across agents); Enterprise Agent Ecosystem: Multi-protocol…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-394.png
Notion: https://app.notion.com/p/Agent-Communication-Protocols-ACP-950a9aed5344826bb820017bb5965033

## AGP-087 — Handoff Orchestration (HO)
- Score 3 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Tasks require specialized expertise at different stages.
- Avoid when: Simple tasks that single agents can handle; Real-time systems where handoff latency is critical; Workflows with unclear handoff trigger conditions; Systems without proper context management infrastructure; Scenarios where all agents have similar capabilities

**Why.** Dynamic delegation where agents intelligently transfer control based on context and specialized capabilities. The pattern: dynamic delegation where agents intelligently transfer control based on context and specialized capabilities. Enables right expertise at right time, preserves conversation continuity, optimizes resource utilization, and improves outcome quality. **Key insight:** Context-preserving handoffs + capability routing + intelligent escalation = seamless expert delegation

**Do.**
1. **Context Design** — Define handoff context schema and preservation rules
2. **Capability Mapping** — Map agent capabilities and routing logic
3. **Handoff Protocol** — Implement seamless context transfer mechanisms
4. **Escalation Rules** — Define triggering conditions and routing decisions
5. **Monitor Transfers** — Track handoff success and context continuity
- Example flow: `TierOneAgent → [context+decision] → DatabaseAgent → [escalation] → SeniorDBAAgent`
- **Do:** Preserve complete conversation context during transfers; Use structured handoff messages with metadata; Implement capability-based routing with confidence scores; Add graceful fallback mechanisms for failed handoffs; Log handoff decisions for audit and optimization; Use standardized protocols like Model Context Protocol
- **Don't:** Lose context information during agent transitions; Create circular handoff loops between agents; Hand off without checking recipient agent availability; Ignore handoff failures and continue processing; Use hardcoded routing without dynamic capability assessment

**Measure.** Handoff Success Rate (Percentage of successful context transfers); Context Preservation (Completeness of transferred information); Routing Accuracy (Correct agent selection based on capabilities); Transfer Latency (Time taken for handoff completion); Resolution Quality (Task success after handoff vs direct handling); Escalation Efficiency (Reduction in unnecessary agent hops); Customer Support: TierOne → Technical → Senior Engineer handoffs with full conversation history and customer context…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-396.png
Notion: https://app.notion.com/p/Handoff-Orchestration-HO-efba9aed534482538c1d810beaa6e4ae

## AGP-172 — Sequential Pipeline Agents (SPA)
- Score 3 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Multi-step workflows with distinct phases.
- Avoid when: Simple single-step tasks; Highly interactive or conversational flows; Real-time systems requiring low latency; Tasks requiring dynamic branching or loops; When stage dependencies are unclear

**Why.** Specialized agents process tasks in a linear pipeline where each agent's output becomes the next agent's input. The pattern: specialized agents process tasks sequentially where each agent's output feeds the next agent's input. Enables expertise specialization, quality control gates, independent optimization, and clear error isolation per stage. **Key insight:** Linear agent pipeline with validation checkpoints - each stage optimized for specific capabilities

**Do.**
1. **Design Stages** — Define specialized agent roles & capabilities
2. **Define Interfaces** — Standardize input/output schemas between agents
3. **Implement Pipeline** — Chain agents with validation & error handling
4. **Add Checkpoints** — Quality gates & fallback mechanisms
5. **Monitor Flow** — Track performance & bottlenecks per stage
- Example flow: `ResearchAgent → ContentAgent → EditorAgent → ReviewAgent → PublishAgent`
- **Do:** Design agents for single, specialized responsibilities; Use structured data formats between agents (JSON/schemas); Implement quality checkpoints at each stage transition; Add circuit breakers for failed stages; Log detailed execution traces for debugging; Cache intermediate results for expensive stages
- **Don't:** Create monolithic agents handling multiple concerns; Allow unstructured data to flow between stages; Skip validation between pipeline stages; Let pipeline failures cascade without recovery; Ignore stage-specific performance bottlenecks

**Measure.** Pipeline Success Rate (End-to-end completion percentage); Stage Performance (Latency & throughput per agent); Quality Gates (Validation success rate at checkpoints); Error Recovery (Failed stage recovery percentage); Resource Utilization (Compute/API costs per stage); Bottleneck Analysis (Slowest stage identification); Content Production: Research → Draft → Edit → Review → Publish (journalism, marketing); Data Processing: Extract → Transform → Validate → Enrich → Load (ETL pipelines); Code…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-399.png
Notion: https://app.notion.com/p/Sequential-Pipeline-Agents-SPA-66ca9aed53448219984b81b18589a873

## AGP-173 — Shared Scratchpad Collaboration (SSC)
- Score 3 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Collaborative content creation workflows.
- Avoid when: Independent parallel processing needs; High-security compartmentalized tasks; Simple linear workflow requirements; Resource-constrained environments; Real-time performance critical systems; Single-agent sufficient scenarios

**Why.** Multiple agents collaborate transparently on a common workspace with shared visibility of all work. The pattern: multiple agents collaborate transparently on a common workspace with shared visibility of all work. Eliminates information silos, enables natural collaboration flow, and provides transparent decision-making through real-time visibility. **Key insight:** Shared state + real-time visibility + progressive building + transparent process = natural collaborative intelligence

**Do.**
1. **Initialize** — Create shared state/workspace accessible to all agents
2. **Define** — Establish collaboration protocols and update formats
3. **Coordinate** — Agents read, contribute, and build upon shared work
4. **Synchronize** — Real-time visibility of all agent contributions
5. **Converge** — Collaborative refinement toward final outcome
- Example flow: `shared_workspace.init() → agents.collaborate() → real_time_updates() → iterative_refinement()`
- **Do:** Design clear shared state schema with structured sections; Implement real-time visibility of all agent contributions; Use version control and conflict resolution mechanisms; Establish clear protocols for agent contribution formats; Enable progressive building and iterative refinement; Implement proper access control and edit permissions; Maintain clear audit trails of all contributions; Design for transparent decision-making processes
- **Don't:** Allow unstructured or conflicting update formats; Create information silos between agents; Skip conflict resolution for simultaneous edits; Ignore the computational overhead of shared state; Allow agents to overwrite each other without coordination; Forget to implement rollback mechanisms for errors

**Measure.** Collaboration Efficiency (% time agents building vs duplicating work); Transparency Score (Visibility of decision-making process); Convergence Rate (Time to reach collaborative consensus); Cross-Agent Learning (% insights shared between agents); State Synchronization (Real-time update propagation speed); Conflict Resolution (% edit conflicts resolved automatically); Progressive Quality (Output improvement over iterations); Collaborative Document Creation: Multiple writing agents (research…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-400.png
Notion: https://app.notion.com/p/Shared-Scratchpad-Collaboration-SSC-a68a9aed53448284950381a415d06c78

## AGP-195 — Concurrent Orchestration (CO)
- Score 3 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Need diverse perspectives on complex decisions.
- Avoid when: Simple tasks with clear optimal solutions; Real-time systems requiring immediate responses; Limited computational resources available; Tasks requiring strict sequential dependencies; When agent coordination overhead exceeds benefits

**Why.** Multiple agents work simultaneously on the same task to provide diverse perspectives and parallel processing power. The pattern: multiple agents execute the same task concurrently to provide diverse perspectives and ensemble reasoning. Harnesses collective intelligence, reduces bias through diversity, increases accuracy via consensus, and accelerates decision-making. **Key insight:** Parallel execution + diverse expertise + consensus mechanisms = superior decision quality and speed

**Do.**
1. **Design Agents** — Create diverse agents with complementary expertise
2. **Setup Parallel Exec** — Configure concurrent processing with shared inputs
3. **Implement Consensus** — Add voting/aggregation mechanisms for result synthesis
4. **Add Coordination** — Implement orchestrator for resource management
5. **Monitor & Optimize** — Track performance metrics and optimize throughput
- Example flow: `FinancialAgent ∥ MarketAgent ∥ RiskAgent ∥ TechAgent → Consensus → Decision`
- **Do:** Design agents with truly diverse perspectives and expertise; Use confidence-weighted voting for better consensus quality; Implement timeout mechanisms to prevent blocking operations; Cache results to avoid redundant processing across agents; Monitor consensus quality and agent contribution metrics; Use structured output formats for consistent aggregation
- **Don't:** Create agents with overlapping roles and identical perspectives; Use simple majority voting without considering expertise levels; Allow infinite processing time without deadlock protection; Ignore resource contention and memory pressure issues; Accept first consensus without quality validation

**Measure.** Consensus Quality (Agreement level and confidence scores); Response Diversity (Variance in agent perspectives and solutions); Processing Efficiency (Parallel speedup vs sequential execution); Decision Accuracy (Ensemble performance vs individual agents); Resource Utilization (CPU/memory usage during concurrent execution); Coordination Overhead (Time spent in synchronization and aggregation); Investment Decision Analysis: Financial + Market + Risk + Technology agents parallel analysis with…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-395.png
Notion: https://app.notion.com/p/Concurrent-Orchestration-CO-534a9aed5344835aa78c01feab6469e0

## AGP-002 — A2A Protocol (Agent2Agent) (A2A)
- Score 2 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Cross-platform agent collaboration.
- Avoid when: Single-platform deployments; Simple single-agent workflows; Ultra-low-latency requirements; Offline-only applications; Prototype/development phases; Tightly coupled agent systems

**Why.** Open standard for AI agent interoperability enabling seamless collaboration across platforms. The pattern: open standard enabling seamless interoperability between AI agents across platforms. Eliminates vendor lock-in, enables agent ecosystems, accelerates enterprise adoption with standardized communication. **Key insight:** Universal Agent Card discovery + OAuth auth + Task ID correlation + SSE streaming = cross-platform collaboration

**Do.**
1. **Discover** — Fetch Agent Card from /.well-known/agent.json
2. **Authenticate** — OAuth 2.0 or API key exchange
3. **Initiate** — POST /tasks with unique Task ID
4. **Stream** — SSE for real-time state updates
5. **Monitor** — Track progress & handle failures
- Example flow: `discover() → auth() → initiate_task() → stream_updates() → aggregate_results()`
- **Do:** Use standard Agent Card format for capability discovery; Implement proper OAuth 2.0 or JWT authentication; Support Server-Sent Events for real-time updates; Use unique Task IDs for correlation and tracking; Handle network failures with exponential backoff; Implement message versioning for compatibility; Use schema-first contracts for messages and artifacts; Prevent circular agent loops with hop-count limits
- **Don't:** Hardcode agent endpoints or capabilities; Send sensitive data without encryption; Ignore task lifecycle state management; Block on synchronous calls to remote agents; Skip capability validation before task delegation; Use long-lived or overly broad tokens

**Measure.** Interoperability Rate (% successful cross-platform tasks); Discovery Latency (Time to fetch & parse Agent Card); Authentication Success (% successful auth handshakes); Task Completion Rate (% tasks completed end-to-end); Real-time Updates (SSE message delivery rate); Network Resilience (% recovery from connection failures); Protocol Compliance (% messages following A2A spec); Cross-Platform Research: Research agent (LangChain) → Analysis agent (Google ADK) → Visualization agent (Custom)…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-393.png
Notion: https://app.notion.com/p/A2A-Protocol-Agent2Agent-A2A-3faa9aed534483a2840481510873d065

## AGP-088 — Hierarchical Coordination (HC)
- Score 2 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex workflows requiring approval gates and oversight.
- Avoid when: Simple single-step tasks without coordination needs; Real-time systems where review latency breaks SLAs; Creative brainstorming requiring fluid collaboration; Small teams where hierarchy creates unnecessary overhead; Highly dynamic environments requiring rapid adaptation

**Why.** Multi-level agent coordination with supervisory relationships, centralized orchestration, and authority delegation. The pattern: multi-level agent coordination with supervisory relationships, centralized orchestration, and authority delegation. Enables scalable task decomposition, policy enforcement, quality control, and clear accountability chains. **Key insight:** Hierarchical structure + task delegation + escalation protocols = enterprise-grade coordination

**Do.**
1. **Define Hierarchy** — Establish supervisor-subordinate tiers with clear authority levels
2. **Task Decomposition** — Break complex goals into hierarchical subtasks (HTN-style)
3. **Delegation Protocol** — Implement task assignment with acceptance criteria and SLAs
4. **Escalation Rules** — Define when and how issues bubble up hierarchy
5. **Monitor & Coordinate** — Track execution, aggregate results, enforce policies
- Example flow: `ExecutiveAgent → ManagerAgents → TeamLeadAgents → WorkerAgents`
- **Do:** Define explicit roles, permissions, and authority boundaries per tier; Use structured task specifications with clear success criteria; Implement bounded re-decomposition with recursion depth limits; Summarize between levels to control context growth; Use smaller models for routine tasks, larger for strategic decisions; Instrument comprehensive traces and audit logs per tier
- **Don't:** Create single points of failure at supervisor level; Allow excessive escalation that inflates latency and cost; Use ambiguous authority that blocks worker task completion; Forward full transcripts across tiers instead of summaries; Skip policy enforcement checks at higher tiers

**Measure.** Task Success Rate (End-to-end completion vs flat baseline); Tier Latency (P50/P95 processing time per hierarchical level); Escalation Rate (Percentage of tasks requiring higher-tier review); Policy Compliance (Violations caught and resolved at checkpoints); Resource Utilization (Cost and compute efficiency across tiers); Delegation Accuracy (Successful task assignments without rework); Enterprise Workflows: Multi-tier approval processes for compliance, finance, procurement with policy…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-397.png
Notion: https://app.notion.com/p/Hierarchical-Coordination-HC-f7ea9aed534483049edb01ced03394ee

## AGP-144 — Peer Collaboration
- Score 2 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Distributed problem-solving across organizations.
- Avoid when: Tasks requiring strict hierarchical control; Time-critical decisions needing immediate response; Simple problems solvable by single agents; Scenarios with well-defined optimal solutions; Environments with unreliable network connectivity

**Why.** Decentralized collaboration between equal agents without central authority. The pattern: decentralized collaboration between equal agents without central authority using peer-to-peer communication. Eliminates single points of failure, enables cross-organizational cooperation, harnesses collective intelligence, and provides Byzantine fault tolerance. **Key insight:** P2P topology + consensus mechanisms + self-organization = resilient distributed intelligence

**Do.**
1. **Network Design** — Define peer-to-peer communication topology and protocols
2. **Consensus Rules** — Implement voting, reputation, and agreement mechanisms
3. **Self-Organization** — Enable dynamic role assignment and task distribution
4. **Conflict Resolution** — Add negotiation and dispute resolution protocols
5. **Adaptive Learning** — Implement collective intelligence and knowledge sharing
- Example flow: `AgentA ↔ AgentB ↔ AgentC → Consensus → Collective Decision`
- **Do:** Implement robust consensus mechanisms for critical decisions; Enable dynamic topology adaptation based on agent performance; Use reputation systems to weight agent contributions; Design fault-tolerant protocols for agent failures; Implement privacy-preserving communication when needed; Enable emergent behavior through local interaction rules
- **Don't:** Create single points of failure in the peer network; Allow unchecked consensus manipulation by malicious agents; Ignore network partition and Byzantine fault scenarios; Use synchronous protocols that block on slow peers; Neglect scalability limits in peer-to-peer architectures

**Measure.** Consensus Quality (Agreement strength and decision confidence); Network Resilience (Performance under node failures and attacks); Convergence Time (Speed of reaching collaborative decisions); Knowledge Diversity (Variety of perspectives and solutions generated); Scalability Factor (Performance degradation with network size); Byzantine Tolerance (Robustness against malicious agents); Scientific Research Collaboration: Distributed peer review with consensus-based evaluation and knowledge…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-398.png
Notion: https://app.notion.com/p/Peer-Collaboration-16fa9aed534482e7b79301014db7b559

## AGP-180 — Supervisor-Worker Pattern (SVW)
- Score 2 · Agentic Patterns / Multi-Agent
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Complex, multi-domain research queries.
- Avoid when: Simple, single-domain questions; Cost-sensitive applications (15x token usage); Real-time/low-latency requirements; Well-defined procedural tasks; Limited API quota scenarios; Sequential dependency workflows

**Why.** Orchestrator-worker architecture where a lead agent coordinates specialized subagents for parallel task execution. The pattern: orchestrator-worker architecture where a lead agent coordinates specialized subagents for parallel task execution. Achieves 90% performance improvement through parallel exploration and specialized expertise while maintaining centralized quality control. **Key insight:** Dynamic task decomposition + separate worker contexts + real-time coordination = superior research quality at 15x token cost

**Do.**
1. **Decompose** — Break query into 3-5 parallel subtasks
2. **Spawn** — Create specialized worker agents dynamically
3. **Coordinate** — Monitor progress across separate contexts
4. **Adapt** — Spawn additional workers if needed
5. **Synthesize** — Aggregate all findings into final result
- Example flow: `query → decompose(4_tasks) → spawn_workers() → monitor_parallel() → synthesize_results()`
- **Do:** Use separate context windows for each worker agent; Implement dynamic worker spawning based on complexity; Monitor worker progress and adjust strategies in real-time; Set clear objectives and success criteria for each worker; Use interleaved thinking for worker self-evaluation; Implement timeout and failure handling for workers; Cache expensive operations and intermediate results; Use structured output formats for worker communication
- **Don't:** Create too many workers (diminishing returns after 5-7); Share context between workers (reduces parallel benefits); Ignore token consumption explosion (15x normal usage); Skip quality control in final synthesis step; Use for simple queries that don't need decomposition; Forget to implement worker error propagation handling

**Measure.** Research Quality (90% improvement over single-agent); Token Consumption (15x baseline usage (cost planning)); Parallel Efficiency (% workers completing successfully); Task Decomposition (Optimal subtask count (3-5 workers)); Synthesis Quality (Coherence of final aggregated result); Worker Utilization (% workers contributing unique value); Error Recovery (% failed workers handled gracefully); Research Analysis: "Impact of AI on healthcare" → Medical, Regulatory, Economic, Ethics workers →…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-401.png
Notion: https://app.notion.com/p/Supervisor-Worker-Pattern-SVW-444a9aed534482bbb40f017dcb1b386c
