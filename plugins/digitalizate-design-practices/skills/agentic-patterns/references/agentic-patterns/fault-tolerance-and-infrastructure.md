# Agentic Patterns / Fault Tolerance & Infrastructure (4)

## AGP-017 — Agent Context Preservation and Recovery (ACP)
- Score 3 · Agentic Patterns / Fault Tolerance & Infrastructure
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Multi-turn conversational systems.
- Avoid when: Stateless single-query systems; Privacy-sensitive one-time interactions; Real-time low-latency responses; Simple FAQ chatbots

**Why.** Systematic preservation and recovery of agent conversation context, memory state, and reasoning chains during failures. The pattern: systematic preservation and recovery of agent conversation context, memory state, and reasoning chains. Enables seamless conversation continuity across failures, 73% reduction in redundant computations, 89% improvement in context relevance. **Key insight:** Hierarchical memory (STM/LTM/semantic) + vector search + secure context sharing = persistent agent intelligence

**Do.**
1. **Define Memory** — Establish memory hierarchy (STM, LTM, semantic)
2. **Implement Storage** — Vector DB + knowledge graph for context
3. **Context Snapshots** — Capture conversation state at checkpoints
4. **Recovery Logic** — Rebuild agent state from stored context
5. **Validate Continuity** — Ensure seamless conversation flow
- Example flow: `conversation_state → memory_snapshot → failure_recovery → context_reconstruction → seamless_continuation`
- **Do:** Use hierarchical memory (short-term, long-term, semantic); Implement vector-based semantic search for context discovery; Cache conversation state with TTL based on importance; Use knowledge graphs for temporal and multi-hop reasoning; Implement secure access controls (SAMEP protocol)
- **Don't:** Store all conversation history without pruning strategies; Ignore semantic validation during context reconstruction; Mix episodic and semantic memory without clear boundaries; Skip encryption for sensitive conversation context; Assume all past context is equally relevant for recovery

**Measure.** Context Relevance (% accurate context reconstruction); Recovery Time (Seconds to restore conversation state); Memory Efficiency (% reduction in redundant processing); Continuity Score (User perceived conversation flow); Storage Overhead (MB per conversation session); Security Compliance (% encrypted context access); Customer Support: Maintain context across support ticket sessions and agent handoffs; Personal Assistants: Remember user preferences, history, and ongoing projects; Educational…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-529.png
Notion: https://app.notion.com/p/Agent-Context-Preservation-and-Recovery-ACP-50da9aed534483cc9d3081c78d5f30bf

## AGP-015 — Agent Communication Fault Tolerance (ACF)
- Score 2 · Agentic Patterns / Fault Tolerance & Infrastructure
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Multi-agent collaborative systems.
- Avoid when: Single-agent applications; Local-only agent systems; Simple request-response patterns; Latency-critical real-time systems

**Why.** Comprehensive fault tolerance mechanisms for agent-to-agent communication failures, message routing recovery, and protocol-agnostic resilience. The pattern: comprehensive fault tolerance mechanisms for agent-to-agent communication using modern protocols. Prevents cascading failures, enables network partition tolerance, achieves 99.94% message delivery reliability. **Key insight:** Protocol-agnostic resilience (MCP/A2A/ACP/ANP) + circuit breakers + dynamic routing = robust agent communication

**Do.**
1. **Protocol Setup** — Implement MCP/A2A/ACP with message delivery guarantees
2. **Circuit Breakers** — Deploy per-agent-pair circuit breakers with thresholds
3. **Retry Logic** — Configure exponential backoff with jitter and dead letter queues
4. **Route Discovery** — Enable dynamic topology adaptation and alternative routing
5. **Monitor Health** — Implement real-time communication health monitoring
- Example flow: `agent_message → protocol_send → failure_detection → circuit_breaker → retry_backoff → alternative_route → success`
- **Do:** Use protocol-agnostic fault tolerance (MCP/A2A/ACP/ANP); Implement circuit breakers with 3-5 failure threshold per minute; Use exponential backoff with jitter to prevent thundering herd; Enable message persistence with dead letter queues; Support both synchronous and asynchronous communication patterns
- **Don't:** Rely on single communication path without redundancy; Ignore message ordering guarantees in distributed scenarios; Skip authentication and encryption for agent communication; Use static routing without dynamic topology adaptation; Forget to implement timeout and rate limiting mechanisms

**Measure.** Message Delivery Rate (% successful message delivery (target: 99.94%)); Circuit Breaker Efficiency (% failures prevented from cascading); Recovery Time (Seconds to restore communication after failure); Alternative Route Success (% messages delivered via backup paths); Protocol Overhead (% additional latency for fault tolerance); Network Partition Tolerance (Time to detect and adapt to partitions); Enterprise AI Orchestration: Coordinate 100+ agents across departments with 99.94% delivery rate…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-528.png
Notion: https://app.notion.com/p/Agent-Communication-Fault-Tolerance-ACF-49aa9aed534482b1886f01da3f73a51b

## AGP-103 — LLM Checkpoint Recovery (Mnemosyne) (LCR)
- Score 2 · Agentic Patterns / Fault Tolerance & Infrastructure
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Distributed LLM training (7B+ parameters).
- Avoid when: Small model training (<1B parameters); Single-node deployments; Stable hardware environments; Short training cycles (<24h)

**Why.** Lightweight device proxy architecture for LLM fault recovery with just-in-time checkpointing and partial topology reconstruction. The pattern: device proxy architecture with just-in-time checkpointing for LLM fault recovery. Reduces recovery overhead by 58.8% vs traditional approaches, enables partial topology reconstruction. **Key insight:** Lightweight device proxies + flexible CCL + incremental communication reinitialization = 3.6% daily overhead

**Do.**
1. **Setup Proxy** — Deploy device proxy layer for error interception
2. **Configure CCL** — Initialize flexible collective communication library
3. **Enable JIT** — Activate just-in-time checkpointing triggers
4. **Partial Recovery** — Implement incremental topology reconstruction
5. **Monitor** — Track failure patterns and recovery times
- Example flow: `device_proxy → failure_detection → checkpoint_trigger → partial_reconstruction → resume_training`
- **Do:** Use lightweight device proxies optimized for fault tolerance; Implement partial topology reconstruction around failed nodes; Cache gradient states and optimizer checkpoints separately; Use incremental communication reinitialization (not full restart); Monitor memory usage patterns to predict failures
- **Don't:** Rely on elastic training features for pure fault tolerance; Perform global communication reinitialization on single failures; Store massive checkpoints to slow storage during training; Ignore temporal dominance of communication overhead; Use generic checkpointing for 70B+ parameter models

**Measure.** Recovery Time (Seconds to resume training); Overhead (% daily training time lost); Checkpoint Size (GB per model snapshot); Failure Detection (Time to detect node failure); Memory Utilization (% peak memory preserved); Communication Cost (Bandwidth for reconstruction); LLM Pre-training: 70B+ parameter models with week-long training cycles; Distributed Fine-tuning: Multi-node adaptation with frequent hardware failures; MoE Training: Sparse mixture-of-experts with massive checkpoint sizes; Hybrid…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-530.png
Notion: https://app.notion.com/p/LLM-Checkpoint-Recovery-Mnemosyne-LCR-13da9aed53448221926f01a4ab04b215

## AGP-145 — Predictive Agent Fault Tolerance (PAF)
- Score 2 · Agentic Patterns / Fault Tolerance & Infrastructure
- Tags: ai-patterns
- Goals: Improve Perceived Performance & Loading
- Use when: Mission-critical production systems.
- Avoid when: Simple single-agent applications; Environments without failure history; Ultra-low latency requirements; Resource-constrained edge deployments

**Why.** AI-driven predictive systems that anticipate agent failures before they occur and implement preemptive recovery measures. The pattern: aI-driven predictive systems that anticipate agent failures before they occur using ML-based anomaly detection. Proactive failure prevention vs reactive response, 78% reduction in unplanned downtime, 67% faster mean time to recovery. **Key insight:** Ensemble ML models (Random Forest + LSTM + Isolation Forest) + behavioral monitoring = failure prediction with lead times

**Do.**
1. **Monitor Setup** — Deploy multi-dimensional monitoring (performance, behavior, communication)
2. **ML Training** — Train anomaly detection models on historical failure patterns
3. **Predictive Models** — Implement LSTM, Isolation Forest, and ensemble methods
4. **Alert System** — Configure tiered alerts with confidence thresholds
5. **Auto-Recovery** — Trigger preemptive actions based on predictions
- Example flow: `monitoring_data → anomaly_detection → failure_prediction → preemptive_action → prevention_success`
- **Do:** Use ensemble methods (Random Forest + LSTM + Isolation Forest); Monitor behavioral patterns, not just performance metrics; Implement dynamic baselines that evolve with system behavior; Create prediction confidence intervals and uncertainty quantification; Use federated learning for multi-agent anomaly detection
- **Don't:** Rely solely on reactive threshold-based monitoring; Ignore communication anomalies between agents; Train models on incomplete or imbalanced failure datasets; Deploy predictions without interpretability mechanisms; Skip validation on real-world deployment environments

**Measure.** Prediction Accuracy (% correct failure predictions (precision/recall)); False Positive Rate (% incorrect failure alarms); Lead Time (Minutes/hours before failure prediction); Prevention Success (% failures avoided through preemptive action); Model Confidence (Uncertainty quantification scores); Detection Latency (Time to identify anomalous patterns); Enterprise AI Fleets: Monitor 100+ agents with 97.2% accuracy for behavioral anomalies; Cloud Infrastructure: Predict resource exhaustion and…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-531.png
Notion: https://app.notion.com/p/Predictive-Agent-Fault-Tolerance-PAF-13aa9aed53448254878b81eade8aabc1
