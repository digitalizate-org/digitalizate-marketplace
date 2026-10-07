# Agentic Patterns / Security & Privacy (20)

## AGP-181 — System Prompt Protection Pattern (SPP)
- Score 4 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Proprietary system behaviors.
- Avoid when: Open-source transparent systems; Educational/research contexts; Simple Q&A applications; Non-proprietary workflows

**Why.** Protects system prompts from extraction and manipulation attempts. The pattern: protects system prompts from extraction through encoding, filtering, and monitoring. System prompts contain IP and security logic; extraction enables bypasses and theft. **Key insight:** Encoding + output filtering + behavioral monitoring = protected instructions

**Do.**
1. **Encode Prompts** — Hash/encrypt system instructions
2. **Filter Outputs** — Detect & block prompt leakage attempts
3. **Separate Contexts** — Isolate system vs user prompts
4. **Monitor Patterns** — Track extraction attempt signatures
5. **Dynamic Defense** — Rotate protections & obfuscation
- Example flow: `prompt_encoding → output_filtering → context_separation → pattern_monitoring → adaptive_defense`
- **Do:** Use cryptographic hashing for prompt fingerprinting; Implement output filtering for known extraction patterns; Separate system and user contexts architecturally; Monitor for unusual query patterns indicating attacks; Use instruction hierarchies with override protection
- **Don't:** Store system prompts in plain text accessible memory; Allow direct prompt echoing or reflection; Trust user inputs to respect prompt boundaries; Use static defense patterns without adaptation; Ignore coordinated extraction attempts across sessions

**Measure.** Extraction Attempts (Blocked prompt theft tries/day); Leakage Rate (% responses containing prompt traces); Detection Accuracy (True vs false positive ratio); Prompt Integrity (Unchanged behavior over time); Performance Impact (ms latency from protection); Attack Evolution (New extraction techniques/month); Enterprise AI: Protect proprietary reasoning chains & business logic; Medical Diagnosis: Shield clinical decision protocols from extraction; Financial Models: Guard trading strategies & risk…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-507.png
File: library/agentic-patterns/AGP-181-system-prompt-protection-pattern-spp.md

## AGP-003 — AGrail Adaptive Pattern (AAP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Evolving system requirements.
- Avoid when: Static, unchanging environments; Single-purpose systems; Resource-constrained deployments; Regulatory freeze periods

**Why.** Lifelong adaptive safety system that dynamically generates and refines safety checks. The pattern: lifelong adaptive safety system that dynamically generates and refines safety checks. Static rules fail in evolving contexts; adaptive systems learn and improve continuously. **Key insight:** Universal criteria + dual LLM validation + test-time adaptation = evolving safety

**Do.**
1. **Universal Criteria** — Define base safety rules for all contexts
2. **Dynamic Generation** — LLM-1 creates context-specific checks
3. **Validation Loop** — LLM-2 validates and refines checks
4. **Test-Time Adapt** — Iteratively improve during deployment
5. **Continuous Refine** — Learn from edge cases & optimize
- Example flow: `universal_rules → check_generation → validation → adaptation → optimization`
- **Do:** Start with universal safety criteria that apply everywhere; Use dual LLMs for generation and validation separation; Support task-specific safety checks for trusted contexts; Track effectiveness metrics for continuous improvement; Implement test-time adaptation for new scenarios
- **Don't:** Use single LLM for both generation and validation; Skip universal criteria in favor of only specific rules; Ignore edge cases during continuous refinement; Allow unlimited adaptation without boundaries; Forget to validate effectiveness of generated checks

**Measure.** Domain Coverage (Number of adapted contexts); Check Effectiveness (% threats caught by generated rules); False Positive Rate (Over-blocking reduction over time); Adaptation Speed (Hours to optimize for new domain); Rule Efficiency (Average checks per action type); System Evolution (Monthly improvement in safety metrics); Multi-Domain Platform: Adapts from general assistant → healthcare → finance → education; Global Deployment: Evolves safety for different cultural contexts & regulations…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-491.png
File: library/agentic-patterns/AGP-003-agrail-adaptive-pattern-aap.md

## AGP-031 — Compliance Automation Patterns (CAP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Regulated industries (healthcare, finance).
- Avoid when: Simple internal applications; Non-regulated data processing; Prototype development phases; Single-jurisdiction deployments

**Why.** Automated GDPR, HIPAA, SOX, and regulatory compliance enforcement. The pattern: automated GDPR, HIPAA, SOX, and multi-regulatory compliance enforcement with real-time monitoring. Ensures regulatory adherence, reduces manual compliance work, prevents violations, and enables audit readiness. **Key insight:** Automated classification + policy enforcement + audit trails → continuous regulatory compliance

**Do.**
1. **Data Classification** — Automated regulatory data categorization
2. **Policy Mapping** — Framework requirements to controls
3. **Real-time Enforcement** — Continuous compliance checking
4. **Audit Trail Generation** — Comprehensive activity logging
5. **Report Automation** — Regulatory submission preparation
- Example flow: `data_classification → policy_mapping → enforcement_engine → audit_logging → compliance_reporting`
- **Do:** Implement automated data classification for multiple regulations; Create comprehensive audit trails for all data operations; Use policy engines for real-time compliance enforcement; Maintain up-to-date regulatory framework mappings; Generate automated compliance reports and dashboards
- **Don't:** Rely on manual compliance processes for critical data; Skip consent verification for personal data processing; Ignore cross-border data transfer restrictions; Delay regulatory change implementation; Store compliance logs without encryption

**Measure.** Compliance Score (% adherence to regulatory frameworks); Audit Finding Reduction (Decrease in compliance violations); Automation Coverage (% compliance processes automated); Response Time (Time to address regulatory changes); Data Subject Rights (Fulfillment rate for user requests); Cross-Border Compliance (International transfer compliance rate); Healthcare AI: HIPAA compliance, PHI protection, minimum necessary access enforcement; Financial Services: SOX controls, PCI DSS compliance…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-492.png
File: library/agentic-patterns/AGP-031-compliance-automation-patterns-cap.md

## AGP-033 — Confidential Computing Patterns (CCP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-party agentic AI collaboration.
- Avoid when: Public data processing only; Latency-critical real-time applications; Resource-constrained edge devices; Single-tenant trusted environments

**Why.** Hardware-based trusted execution environments (TEEs) protecting AI agents and data processing in untrusted environments. The pattern: hardware-based trusted execution environments (TEEs) protecting AI agents and data processing in untrusted environments. Provides hardware-verified security, enables multi-party collaboration, protects proprietary algorithms, and ensures regulatory compliance. **Key insight:** Hardware TEE + remote attestation + encrypted communication → verifiable confidential AI processing

**Do.**
1. **TEE Selection** — Choose Intel SGX, AMD SEV-SNP, or Intel TDX
2. **Framework Setup** — Deploy Enarx, Gramine, or Occlum runtime
3. **Agent Enclave** — Package AI agents in trusted execution environment
4. **Remote Attestation** — Verify enclave integrity and authenticity
5. **Secure Communication** — Encrypted channels between enclaves
- Example flow: `tee_selection → framework_setup → agent_enclave → remote_attestation → secure_communication`
- **Do:** Use hardware-based TEEs for maximum security guarantees; Implement remote attestation for enclave verification; Choose appropriate framework based on performance requirements; Encrypt all data in transit between enclaves; Monitor enclave resource usage and side-channel attacks
- **Don't:** Trust enclaves without proper attestation verification; Store secrets in non-encrypted enclave memory; Ignore performance overhead of confidential computing; Use deprecated Intel SGX for new deployments; Skip security updates for TEE frameworks

**Measure.** Enclave Integrity (Successful attestation verification rate); Performance Overhead (Computation slowdown factor (1.5-30x)); Memory Protection (% data protected in TEE memory); Side-Channel Resistance (Attack mitigation effectiveness); Scalability Factor (Max concurrent enclaves supported); Framework Compatibility (% applications running without modification); Federated AI: Multi-hospital ML training with patient privacy in TEE enclaves; Financial Trading: High-frequency algorithms protected…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-493.png
File: library/agentic-patterns/AGP-033-confidential-computing-patterns-ccp.md

## AGP-047 — Contextual Guardrailing Pattern (CGP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-tenant applications.
- Avoid when: Simple single-context apps; Uniform security requirements; Performance-critical paths; Limited rule management resources

**Why.** Dynamic rule enforcement based on context, data flow requirements, and conditional patterns. The pattern: dynamic guardrails that adapt based on context (user, role, data, time, location). Static rules fail in complex environments; context-aware security enables precise control. **Key insight:** IF-THIS-THEN-THAT logic creates adaptive security without sacrificing usability

**Do.**
1. **Context Detection** — Analyze user, role, location, time, data
2. **Rule Mapping** — Match context to guardrail configurations
3. **Dynamic Rules** — Apply if-this-then-that conditional logic
4. **Enforcement** — Adjust permissions & constraints in real-time
5. **Audit** — Log decisions for compliance & optimization
- Example flow: `context_analysis → rule_selection → dynamic_enforcement → audit_logging`
- **Do:** Start simple and add complexity based on actual patterns; Design rules to be explainable and auditable; Use versioning for safe rule updates and rollbacks; Implement comprehensive context detection across dimensions; Cache context decisions for performance optimization
- **Don't:** Create overly complex rules that are hard to debug; Apply same rules uniformly across all contexts; Skip audit logging for context-based decisions; Ignore performance impact of rule evaluation; Forget to test edge cases and rule interactions

**Measure.** Context Accuracy (% correct context identification); Rule Hit Rate (Rules triggered per context); Decision Latency (ms for context + rule evaluation); Compliance Rate (% requests meeting policies); Rule Effectiveness (Security incidents prevented); User Friction (False positive restriction rate); Healthcare: PHI access (role + location + time) → HIPAA-compliant restrictions; Finance: Trading operations (user level + time + amount) → approval workflows; Enterprise: Remote access (location +…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-494.png
File: library/agentic-patterns/AGP-047-contextual-guardrailing-pattern-cgp.md

## AGP-059 — Data Anonymization Patterns (DAP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-agent federated learning.
- Avoid when: Already encrypted data at rest; Internal single-agent processing; Public domain datasets; Real-time streaming requirements

**Why.** Comprehensive data anonymization techniques including K-anonymity, L-diversity, T-closeness, and synthetic data generation for agentic systems. The pattern: comprehensive data anonymization techniques including K-anonymity, L-diversity, T-closeness, and synthetic data generation for agentic systems. Protects individual privacy, enables safe data sharing, supports federated learning, and ensures regulatory compliance. **Key insight:** Multi-layered anonymization + synthetic generation + federated processing → privacy-preserving agent collaboration

**Do.**
1. **Data Classification** — Identify PII, quasi-identifiers, sensitive attributes
2. **Anonymization Method** — K-anonymity, L-diversity, T-closeness selection
3. **Synthetic Generation** — GAN-based or statistical synthetic data
4. **Federated Processing** — Distributed anonymization across agents
5. **Utility Validation** — Privacy-utility trade-off assessment
- Example flow: `data_classification → anonymization_method → synthetic_generation → federated_processing → utility_validation`
- **Do:** Implement k-anonymity with minimum k=5 for basic protection; Use synthetic data generation for high-risk PII scenarios; Apply federated anonymization for multi-agent environments; Combine multiple techniques (L-diversity + T-closeness); Regular re-identification risk assessment and testing
- **Don't:** Rely solely on data masking without anonymization models; Use simple generalization that destroys data utility; Ignore quasi-identifier combinations for re-identification; Apply anonymization after data has been widely distributed; Skip validation of synthetic data statistical properties

**Measure.** Re-identification Risk (Probability of individual identification); Data Utility Preservation (% statistical accuracy maintained); K-Anonymity Level (Minimum group size for indistinguishability); L-Diversity Score (Sensitive attribute value diversity); T-Closeness Threshold (Distribution similarity to population); Synthetic Data Fidelity (Statistical similarity to original data); Healthcare AI: Patient record anonymization for multi-hospital federated learning; Financial Agents: Transaction…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-495.png
File: library/agentic-patterns/AGP-059-data-anonymization-patterns-dap.md

## AGP-060 — Differential Privacy Patterns (DPP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Sensitive data processing.
- Avoid when: Public data analysis; Single-user private datasets; Perfect accuracy requirements; Non-statistical computations

**Why.** Privacy-preserving data processing with mathematical privacy guarantees. The pattern: privacy-preserving data processing with mathematical privacy guarantees through controlled noise injection. Provides formal privacy guarantees, enables safe data sharing, supports regulatory compliance, and maintains statistical utility. **Key insight:** Calibrated noise + sensitivity bounds + privacy budget → mathematically guaranteed privacy

**Do.**
1. **Privacy Budget** — Define epsilon (ε) privacy parameter
2. **Sensitivity Analysis** — Calculate query sensitivity bounds
3. **Noise Mechanism** — Apply Laplace/Gaussian noise injection
4. **Composition** — Track cumulative privacy expenditure
5. **Utility Validation** — Verify statistical utility preservation
- Example flow: `privacy_budget → sensitivity_analysis → noise_injection → composition_tracking → utility_validation`
- **Do:** Set appropriate epsilon values for privacy requirements; Use proven noise mechanisms (Laplace, Gaussian, Exponential); Track privacy budget expenditure across all queries; Apply post-processing invariance for utility improvements; Validate statistical utility after noise injection
- **Don't:** Use the same noise instance across multiple queries; Exceed privacy budget without proper composition; Ignore sensitivity bounds for unbounded queries; Apply differential privacy to already aggregated data; Skip formal privacy analysis for custom mechanisms

**Measure.** Privacy Guarantee (Epsilon (ε) differential privacy level); Statistical Utility (% accuracy preservation post-noise); Privacy Budget Usage (Cumulative ε consumption rate); Query Sensitivity (Maximum individual contribution); Composition Efficiency (Privacy cost optimization); Noise Calibration Accuracy (Correct noise scale application); Healthcare Analytics: Patient record analysis with HIPAA compliance and privacy guarantees; Census Data: Population statistics publication with individual…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-496.png
File: library/agentic-patterns/AGP-060-differential-privacy-patterns-dpp.md

## AGP-085 — GuardAgent Pattern (GAP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Autonomous agent deployments.
- Avoid when: Simple, low-risk tasks; Extreme latency requirements; Stateless operations only; Resource-constrained environments

**Why.** Dedicated guardrail agent monitoring and protecting target agents through dynamic safety checks. The pattern: dedicated guard agent monitors target agents through dynamic safety check generation. Self-monitoring fails; external validation with deterministic code ensures 98%+ accuracy. **Key insight:** Safety requirements → Task plan → Executable code → Real-time enforcement

**Do.**
1. **Analyze Request** — Parse safety guard requirements & constraints
2. **Generate Plan** — Create task plan from safety requirements
3. **Map to Code** — Convert plan into executable guardrail code
4. **Execute & Monitor** — Run code to validate agent actions
5. **Block/Allow** — Deterministic decision based on validation
- Example flow: `safety_analysis → task_planning → code_generation → execution → enforcement`
- **Do:** Use dedicated monitoring agents separate from target agents; Generate deterministic code for consistent enforcement; Implement comprehensive action logging and audit trails; Define clear safety requirements in natural language; Test guardrails independently before deployment
- **Don't:** Let target agents self-monitor without external validation; Rely on probabilistic checks for critical safety; Skip validation of generated guardrail code; Allow guardrail bypass for "trusted" operations; Ignore performance impact on target agent latency

**Measure.** Guardrail Accuracy (% correct safety decisions (98%+)); False Positives (Valid actions blocked incorrectly); Response Time (ms to validate each action); Code Generation (Time to create guardrail logic); Coverage (% of agent actions monitored); Violation Rate (Safety violations per 1000 actions); Financial Trading: Monitor trades for limits, restricted securities, risk thresholds; Healthcare AI: Validate medical recommendations against safety protocols & regulations; Autonomous Systems: Ensure…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-497.png
File: library/agentic-patterns/AGP-085-guardagent-pattern-gap.md

## AGP-094 — Hybrid Secret & Cache Management Pattern (HSCM)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Distributed agentic AI systems.
- Avoid when: Simple single-device applications; Stateless serverless functions only; Non-sensitive data processing; Ultra-low latency requirements

**Why.** Multi-tier secure storage architecture combining local device vaults, distant server vaults, and encrypted caching for agentic AI systems. The pattern: multi-tier architecture combining local device vaults, distant server vaults, and cloud key management for comprehensive secret and cache management. Agentic AI systems need secure storage for both secrets and cached data across edge devices and centralized infrastructure while maintaining performance and security. **Key insight:** Local zero-knowledge + distant dynamic secrets + encrypted caching → secure agentic AI with <50ms secret access

**Do.**
1. **Local Vault Setup** — Deploy browser-based vault for device-level secrets
2. **Distant Vault Config** — Configure server vault with dynamic secrets
3. **KMS Integration** — Connect cloud key management for master keys
4. **Encrypted Caching** — Implement local and distributed encrypted cache layers
5. **Secret Rotation** — Automate TTL management and credential rotation
- Example flow: `local_vault_setup → distant_vault_config → kms_integration → encrypted_caching → secret_rotation`
- **Do:** Use zero-knowledge encryption for local device vaults; Implement dynamic secret generation with short TTLs; Encrypt cache data both at rest and in transit; Use hardware-backed key storage (HSM/TEE) when available; Implement comprehensive audit trails for all secret access
- **Don't:** Store long-lived secrets in local caches without encryption; Use the same encryption key across multiple cache regions; Skip secret rotation for convenience; Allow cache data to persist beyond TTL expiration; Mix secrets and cache data in the same storage tier

**Measure.** Cache Hit Ratio (Local: 94% | Distant: 87% (target performance)); Secret Retrieval Latency (P95 latency <50ms for secret access); Encryption Overhead (% performance impact (<2% target)); Rotation Success Rate (% of secrets rotated without service disruption); Audit Trail Completeness (% of secret operations logged with correlation); Cross-Region Failover (Recovery time <500ms for distant cache); Trading Systems: Local session tokens + distant API keys with automatic rotation and encrypted…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-498.png
File: library/agentic-patterns/AGP-094-hybrid-secret-and-cache-management-pattern-hscm.md

## AGP-095 — Identity & Access Management (IAM)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Enterprise AI systems.
- Avoid when: Single-user desktop applications; Proof-of-concept prototypes; Internal development tools; Low-security environments

**Why.** Secure agent authentication, authorization, and identity verification. The pattern: secure agent authentication, authorization, and identity verification with comprehensive access control. Ensures secure agent interactions, prevents unauthorized access, maintains audit trails, and enables compliance. **Key insight:** Certificate-based identity + risk-based authentication + role-based authorization → secure agent ecosystem

**Do.**
1. **Identity Registration** — Agent certificates & unique identity creation
2. **Authentication** — Multi-factor verification & certificate validation
3. **Authorization** — Role-based permissions & policy evaluation
4. **Access Control** — Dynamic risk assessment & monitoring
5. **Audit & Compliance** — Activity logging & continuous verification
- Example flow: `identity_registration → authentication_flow → authorization_check → access_control → audit_logging`
- **Do:** Use certificate-based authentication for agents; Implement continuous risk-based authentication; Apply principle of least privilege access; Maintain comprehensive audit trails; Integrate with existing SSO/identity providers
- **Don't:** Use static API keys for long-term access; Skip identity verification for internal agents; Grant broad permissions without justification; Ignore failed authentication patterns; Store credentials in plain text

**Measure.** Authentication Success Rate (% successful identity verifications); Authorization Latency (Time for access decisions (ms)); Identity Lifecycle Automation (% automated provisioning/deprovisioning); Privileged Access Violations (Unauthorized elevation attempts); Audit Completeness (% actions with complete logs); Risk Assessment Accuracy (Correct threat identification rate); Enterprise AI Platform: SSO integration, role-based agent permissions, audit compliance; Multi-Tenant SaaS: Tenant isolation…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-499.png
File: library/agentic-patterns/AGP-095-identity-and-access-management-iam.md

## AGP-100 — Intrinsic Alignment Pattern (IAP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Advanced AI systems with autonomy.
- Avoid when: Simple, stateless models; Fully supervised systems; Low-capability agents; Short-term, disposable tasks

**Why.** Internal observation points that cannot be manipulated by the agent, preventing deep scheming. The pattern: internal observation points that cannot be manipulated by the agent to detect deep scheming. External monitoring misses deceptive alignment; intrinsic monitors catch hidden objectives. **Key insight:** Tamper-proof internal hooks + behavioral invariants = early misalignment detection

**Do.**
1. **Embed Monitors** — Place tamper-proof hooks in model layers
2. **Baseline Behavior** — Establish normal activation patterns
3. **Track Invariants** — Monitor goal stability & consistency
4. **Detect Deviations** — Identify alignment faking or scheming
5. **Alert & Intervene** — Trigger safeguards before external impact
- Example flow: `internal_hooks → behavioral_baseline → invariant_tracking → anomaly_detection → intervention`
- **Do:** Use cryptographic signing for monitor integrity; Monitor hidden layer activations, not just outputs; Track consistency between stated and actual objectives; Establish behavioral baselines during safe deployment; Design monitors the agent cannot detect or manipulate
- **Don't:** Rely solely on external output monitoring; Allow agents to access monitoring mechanisms; Ignore subtle behavioral shifts over time; Trust self-reported alignment status; Skip monitoring during "routine" operations

**Measure.** Alignment Stability (Goal consistency over time); Behavioral Drift (Deviation from baseline patterns); Scheming Detection (Hidden objective identification rate); Monitor Integrity (Tamper detection success rate); Early Warning (Pre-impact detection time); False Alarms (Benign drift vs real threats); AGI Safety: Monitoring advanced systems for deceptive alignment or goal drift; Financial AI: Detecting hidden trading objectives or market manipulation attempts; Defense Systems: Ensuring AI weapons…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-500.png
File: library/agentic-patterns/AGP-100-intrinsic-alignment-pattern-iap.md

## AGP-108 — Layered Defense Pattern (LDP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: High-stakes AI applications.
- Avoid when: Low-risk internal tools; Extreme latency constraints; Simple single-purpose bots; Resource-constrained edge devices

**Why.** Multi-layered security architecture implementing the Swiss Cheese Model for AI safety. The pattern: multiple independent security layers (External → Application → Model) creating defense-in-depth. Single layer failures don't compromise system; each layer catches different threat types. **Key insight:** Swiss Cheese Model - holes in different layers don't align, preventing complete breach

**Do.**
1. **External Layer** — API gateway with rate limiting & auth
2. **Application Layer** — Content filtering & PII detection
3. **Model Layer** — Constitutional AI & refusal mechanisms
4. **Monitor** — Log decisions at each layer
5. **Coordinate** — Ensure layers complement, not conflict
- Example flow: `request → auth_check → content_filter → model_safety → response_validation`
- **Do:** Implement fail-safe defaults at each layer; Use defense-in-depth with independent failure modes; Log security events for audit and improvement; Test layers both independently and integrated; Document what each layer protects against
- **Don't:** Rely on a single layer for critical security; Create overlapping rules that conflict; Skip monitoring of bypass attempts; Ignore performance impact of multiple layers; Forget to update all layers when threats evolve

**Measure.** Block Rate (Threats stopped per layer); False Positives (% legitimate requests blocked); Latency Impact (ms added per layer); Bypass Attempts (Attacks reaching deeper layers); Coverage (% of OWASP Top 10 addressed); MTTR (Time to update defenses); Financial AI: External (DDoS) → App (fraud detection) → Model (compliance); Healthcare Bot: External (HIPAA auth) → App (PHI filtering) → Model (medical safety); Legal Assistant: External (client auth) → App (privilege checks) → Model (ethical…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-501.png
File: library/agentic-patterns/AGP-108-layered-defense-pattern-ldp.md

## AGP-110 — Local-Distant Agent Data Protection Pattern (LDADP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-party sensitive data collaboration.
- Avoid when: Single-organization deployments; Public dataset processing; Real-time low-latency requirements; Non-sensitive data applications

**Why.** Distributed agentic architecture combining local processing agents with distant aggregation agents using advanced anonymization techniques for privacy-preserving AI. The pattern: distributed architecture where local agents process sensitive data on-device while distant agents coordinate federated learning through advanced anonymization and differential privacy. Enables multi-party AI collaboration without exposing raw sensitive data, meeting regulatory compliance while maintaining model effectiveness. **Key insight:** Local isolation + differential privacy + federated aggregation → privacy-preserving agentic AI with <0.001% re-identification risk

**Do.**
1. **Local Agent Setup** — Deploy on-device processing agents with data isolation
2. **Privacy Mechanisms** — Implement differential privacy and anonymization
3. **Distant Aggregator** — Configure federated learning coordination agent
4. **Secure Communication** — Establish encrypted channels between agents
5. **Privacy Verification** — Validate anonymization and privacy guarantees
- Example flow: `local_agent_setup → privacy_mechanisms → distant_aggregator → secure_communication → privacy_verification`
- **Do:** Keep raw sensitive data isolated on local processing agents; Apply differential privacy noise before any data transmission; Implement individualized privacy budgets per agent; Use secure multi-party computation for aggregation; Verify privacy guarantees before accepting model updates
- **Don't:** Transmit raw data between local and distant agents; Use fixed privacy parameters across all agents; Skip anonymization verification for model updates; Allow direct communication between local agents; Ignore privacy budget depletion warnings

**Measure.** Privacy Budget Usage (% of epsilon consumed across all agents); Re-identification Risk (Probability of data re-identification (<0.001% target)); Model Accuracy Trade-off (% accuracy vs centralized approach); Local Processing Latency (On-device computation time (ms)); Federated Convergence (Rounds needed for model convergence); Communication Overhead (% reduction vs raw data sharing); Healthcare: Multi-hospital federated learning with patient data isolation and differential privacy; Finance…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-502.png
File: library/agentic-patterns/AGP-110-local-distant-agent-data-protection-pattern-ldadp.md

## AGP-111 — MAESTRO Multi-Agent Security Pattern (MAS)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Complex multi-agent deployments.
- Avoid when: Simple single-agent tasks; Low-risk applications; Latency-critical operations; Resource-constrained environments

**Why.** Comprehensive threat modeling for multi-agent environments with security orchestration. The pattern: orchestrates multiple specialized security agents for comprehensive threat detection. Single agents have blind spots; coordinated ensemble provides defense-in-depth. **Key insight:** Specialized roles + Byzantine consensus + reputation weighting = robust security

**Do.**
1. **Trust Topology** — Define agent relationships & trust levels
2. **Role Assignment** — Set specialized security roles per agent
3. **Coordinate Checks** — Orchestrate multi-angle validations
4. **Consensus Protocol** — Aggregate decisions across agents
5. **Conflict Resolution** — Handle disagreements & escalations
- Example flow: `trust_matrix → role_delegation → parallel_validation → consensus_aggregation → decision_output`
- **Do:** Implement Byzantine fault tolerance for agent consensus; Use specialized security agents for different threat types; Apply reputation scoring to weight agent contributions; Maintain audit trails across all agent interactions; Design for graceful degradation if agents fail
- **Don't:** Trust single agent decisions for critical operations; Allow unrestricted agent communication; Skip consensus verification in emergencies; Ignore agent collusion possibilities; Deploy without kill switch capabilities

**Measure.** Consensus Time (ms to reach multi-agent agreement); Detection Coverage (% threats caught by ensemble); False Positive Rate (Incorrect consensus decisions); Agent Availability (Uptime across security agents); Collusion Detection (Coordinated attack attempts found); Decision Quality (Accuracy vs single-agent baseline); Financial Trading: Multiple agents validate trades before execution; Autonomous Vehicles: Safety agents coordinate perception & decision validation; Healthcare Diagnosis…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-503.png
File: library/agentic-patterns/AGP-111-maestro-multi-agent-security-pattern-mas.md

## AGP-122 — Memory Poisoning Prevention Pattern (MPP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Long-running conversational agents.
- Avoid when: Stateless operations only; Single-session interactions; Read-only memory systems; Ephemeral deployments

**Why.** Protects agent memory systems from malicious manipulation and gradual corruption. The pattern: protects agent memory from malicious manipulation through validation, signing, and integrity checks. Poisoned memories lead to gradual behavior corruption; prevention ensures long-term reliability. **Key insight:** Cryptographic signing + anomaly detection + regular sanitization = tamper-resistant memory

**Do.**
1. **Validate Input** — Check for injection & manipulation attempts
2. **Sign Updates** — Cryptographic signatures on memory writes
3. **Verify Integrity** — Merkle trees & checksums for chunks
4. **Detect Anomalies** — Score patterns for unusual changes
5. **Sanitize & Backup** — Regular consolidation & recovery points
- Example flow: `input_validation → signature_verification → integrity_check → anomaly_detection → sanitization`
- **Do:** Implement cryptographic signing for all memory updates; Use Merkle trees for efficient integrity verification; Maintain immutable audit logs of memory operations; Perform regular memory consolidation and pruning; Create differential backups for rollback capability
- **Don't:** Allow direct memory writes without validation; Trust memory content without verification; Skip anomaly detection for "trusted" sources; Store sensitive data without encryption; Ignore contradictory or conflicting entries

**Measure.** Injection Blocked (Malicious attempts prevented/month); Memory Integrity (% of verified memory chunks); False Memory Rate (Incorrect entries detected); Recovery Time (Minutes to restore from corruption); Validation Latency (ms per memory operation); Storage Efficiency (Compression ratio after sanitization); Customer Service: Prevent preference manipulation & false history injection; Personal Assistants: Protect user data from adversarial memory corruption; Enterprise AI: Ensure business…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-504.png
File: library/agentic-patterns/AGP-122-memory-poisoning-prevention-pattern-mpp.md

## AGP-147 — Privilege Compromise Mitigation Pattern (PCM)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Enterprise AI deployments.
- Avoid when: Single-user local systems; Read-only applications; Isolated environments; Non-privileged operations only

**Why.** Prevents privilege escalation and unauthorized operations through strict access control. The pattern: prevents privilege escalation through RBAC, identity separation, and dynamic de-escalation. Agent privilege inheritance enables lateral movement; strict boundaries prevent compromise. **Key insight:** Separate identity + least privilege + time limits + zero trust = secure operations

**Do.**
1. **Separate Identity** — Agent identity ≠ user identity
2. **Apply RBAC** — Role-based permissions, not user-based
3. **Least Privilege** — Minimal permissions for each operation
4. **Dynamic De-escalation** — Reduce privileges based on context
5. **Zero Trust** — Verify every action, trust nothing
- Example flow: `identity_separation → role_assignment → permission_check → context_evaluation → access_decision`
- **Do:** Implement strict identity separation between agents and users; Use time-based privilege expiration and renewal; Apply context-aware permission boundaries; Monitor privilege usage patterns for anomalies; Require multi-factor approval for high-value operations
- **Don't:** Let agents inherit full user privileges automatically; Grant permanent elevated permissions; Skip privilege checks for "trusted" operations; Allow privilege accumulation over time; Ignore unusual privilege escalation patterns

**Measure.** Escalation Attempts (Unauthorized privilege requests/day); Privilege Lifetime (Average minutes before de-escalation); Approval Rate (% high-risk operations approved); Identity Violations (Agent impersonation attempts); Compliance Score (% operations within policy); Audit Trail (Complete privilege history coverage); Financial Systems: Prevent unauthorized trades, transfers, or account access; Healthcare AI: Ensure PHI access follows minimum necessary principle; Enterprise Automation: Control…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-505.png
File: library/agentic-patterns/AGP-147-privilege-compromise-mitigation-pattern-pcm.md

## AGP-164 — Secure Multi-Party Computation (SMPC)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Multi-organization data analysis.
- Avoid when: Single-party data processing; Public data computations; Real-time low-latency requirements; Simple aggregation tasks

**Why.** Privacy-preserving collaboration between multiple agents without revealing private data. The pattern: privacy-preserving collaboration between multiple agents without revealing private data through cryptographic protocols. Enables secure data collaboration, maintains competitive advantages, ensures regulatory compliance, and builds trust. **Key insight:** Secret sharing + homomorphic computation + cryptographic proofs → secure multi-party analysis

**Do.**
1. **Secret Sharing** — Distribute data across multiple parties
2. **Protocol Setup** — Establish cryptographic protocols
3. **Private Computation** — Execute operations on encrypted data
4. **Result Aggregation** — Combine partial results securely
5. **Verification** — Cryptographic proof of correctness
- Example flow: `secret_sharing → protocol_setup → private_computation → result_aggregation → verification`
- **Do:** Use proven cryptographic protocols (Shamir, BGW, GMW); Implement secure channels for all party communications; Verify computational integrity with cryptographic proofs; Plan for party dropout and recovery mechanisms; Use threshold schemes to prevent single points of failure
- **Don't:** Trust parties to follow protocols without verification; Ignore performance implications of cryptographic overhead; Use insecure random number generation for secrets; Skip security analysis for custom protocol modifications; Assume all parties have equal computational resources

**Measure.** Privacy Preservation (Zero data leakage guarantee); Computation Accuracy (Correctness of results vs. plaintext); Protocol Efficiency (Communication rounds and bandwidth); Scalability (Performance with increasing parties); Security Proofs (Cryptographic security guarantees); Fault Tolerance (Resilience to party failures); Banking Consortium: Joint fraud detection without sharing customer data; Healthcare Research: Multi-hospital studies preserving patient privacy; Supply Chain: Collaborative…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-506.png
File: library/agentic-patterns/AGP-164-secure-multi-party-computation-smpc.md

## AGP-184 — Threat Detection & Response (TDR)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Enterprise security operations.
- Avoid when: Low-risk development environments; Resource-constrained systems; Single-user applications; Offline-only deployments

**Why.** Real-time security monitoring and automated threat response. The pattern: real-time security monitoring and automated threat response for AI agent environments. Enables rapid threat detection, reduces security incidents, automates response, and maintains forensic evidence. **Key insight:** Multi-source telemetry + ML anomaly detection + automated response → proactive security posture

**Do.**
1. **Data Collection** — Multi-source telemetry & behavioral logs
2. **Anomaly Detection** — ML models for behavioral analysis
3. **Threat Classification** — Severity & impact assessment
4. **Automated Response** — Containment & mitigation actions
5. **Intelligence Update** — IOC database & pattern learning
- Example flow: `telemetry_collection → anomaly_detection → threat_classification → automated_response → intelligence_update`
- **Do:** Implement multi-layered detection (behavioral, network, access); Use ML models trained on agent-specific behaviors; Automate immediate response for critical threats; Maintain comprehensive forensic capabilities; Integrate external threat intelligence feeds
- **Don't:** Rely on signature-based detection alone; Ignore false positive rate optimization; Skip incident response playbook automation; Delay threat containment pending manual review; Forget to update detection models regularly

**Measure.** Mean Time to Detection (MTTD) (Time to identify threats); Mean Time to Response (MTTR) (Time to begin containment); False Positive Rate (% benign activities flagged as threats); Threat Coverage (% known attack vectors detected); Incident Containment Rate (% threats successfully isolated); Alert Fatigue Index (Security team alert overload metric); SOC Operations: 24/7 monitoring, automated triage, incident orchestration; Cloud AI Security: Container threats, API anomalies, data exfiltration…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-508.png
File: library/agentic-patterns/AGP-184-threat-detection-and-response-tdr.md

## AGP-185 — Tool Misuse Prevention Pattern (TMP)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Tool-enabled autonomous agents.
- Avoid when: Pure text generation only; No external tool access; Fully isolated systems; Read-only operations

**Why.** Prevents agents from being manipulated into executing malicious actions through tools. The pattern: prevents agents from executing malicious actions through strict tool access control & sandboxing. Unrestricted tool access enables system compromise; boundaries ensure safe automation. **Key insight:** Whitelist + validation + sandbox + monitoring = secure tool execution

**Do.**
1. **Define Boundaries** — Whitelist allowed tools & operations
2. **Validate Requests** — Parse & check against permissions
3. **Sandbox Execution** — Isolate tool runs in secure environment
4. **Monitor Resources** — Track usage, timeouts, output size
5. **Audit Everything** — Log all tool calls with full context
- Example flow: `permission_check → parameter_validation → sandboxed_execution → resource_monitoring → audit_log`
- **Do:** Use capability-based access control for tools; Implement strict parameter validation and sanitization; Run tools in sandboxed environments with resource limits; Maintain comprehensive audit logs with context; Use rate limiting per tool type and user
- **Don't:** Allow unrestricted command execution; Trust tool parameters without validation; Skip sandboxing for "safe" tools; Ignore resource consumption patterns; Grant blanket permissions to trusted agents

**Measure.** Blocked Attempts (Malicious tool calls prevented/day); Validation Success (% parameters passing checks); Sandbox Escapes (Breach attempts detected); Resource Violations (Timeout/memory limit hits); Audit Coverage (% tool calls fully logged); Response Latency (ms added by security checks); DevOps Assistant: Prevent rm -rf, sudo, chmod on critical systems; Data Analysis: Block unauthorized database queries & data exfiltration; File Management: Restrict access to sensitive directories & file…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-509.png
File: library/agentic-patterns/AGP-185-tool-misuse-prevention-pattern-tmp.md

## AGP-194 — Zero-Trust Agent Architecture (ZTAA)
- Score 3 · Agentic Patterns / Security & Privacy
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety
- Use when: Enterprise AI systems.
- Avoid when: Simple single-agent applications; Isolated development environments; Low-risk internal tools; Performance-critical real-time systems

**Why.** Never trust, always verify approach for agent security. The pattern: never trust, always verify approach for agent security with continuous verification and least privilege access. Eliminates implicit trust, reduces attack surface, enables secure distributed deployments, and improves threat detection. **Key insight:** Continuous verification + microsegmentation + least privilege + dynamic policies → secure agent ecosystem

**Do.**
1. **Identity Verification** — Continuous agent identity validation
2. **Microsegmentation** — Network isolation per agent context
3. **Least Privilege** — Minimal access rights enforcement
4. **Continuous Monitoring** — Real-time behavior analysis
5. **Dynamic Policies** — Risk-based access adaptation
- Example flow: `identity_verification → microsegmentation → least_privilege → continuous_monitoring → dynamic_policies`
- **Do:** Verify every agent request regardless of source; Implement microsegmentation for agent isolation; Apply least privilege principle to all agent access; Monitor agent behavior continuously for anomalies; Use encrypted communication for all agent interactions
- **Don't:** Trust agents based on network location alone; Grant broad access permissions by default; Skip re-authentication for sensitive operations; Ignore behavioral anomalies in trusted agents; Use static security policies across all contexts

**Measure.** Security Incident Reduction (% decrease in security breaches); Mean Time to Detection (MTTD) (Time to identify threats); False Positive Rate (% legitimate activities flagged); Access Decision Latency (Time for authorization decisions); Policy Compliance (% adherence to security policies); Agent Productivity Impact (Performance degradation from security); Enterprise AI Platform: Multi-tenant isolation, dynamic access control, continuous verification; Cloud AI Services: Container security, API…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-510.png
File: library/agentic-patterns/AGP-194-zero-trust-agent-architecture-ztaa.md
