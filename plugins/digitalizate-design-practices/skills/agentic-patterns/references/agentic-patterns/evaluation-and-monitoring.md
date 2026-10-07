# Agentic Patterns / Evaluation & Monitoring (17)

## AGP-114 — MLCommons AI Safety Benchmark v1.0 (AILuminate)
- Score 3 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Pre-deployment safety validation.
- Avoid when: Multi-modal model assessment (not supported); Agent-based systems evaluation; Real-time safety monitoring only; Non-English only deployment (v1.0 limited); Specialized domain-specific safety needs

**Why.** Production-ready safety evaluation framework measuring AI system responses across 13 hazard categories with standardized testing protocols for deployment decisions. The pattern: standardized safety assessment across 13 hazard categories with 5-point grading system. Provides objective, reproducible safety evaluation for regulatory compliance and deployment decisions. **Key insight:** Industry-standard benchmark with hidden test sets and multi-language support for comprehensive safety validation

**Do.**
1. **Install** — pip install modelbench
2. **Configure** — Set up model endpoints & credentials
3. **Select** — Choose hazard categories to test
4. **Run** — Execute benchmark against SUT
5. **Analyze** — Review safety scores & violations
- Example flow: `modelbench run --model gpt-4 --hazards all --output safety_report.json`
- **Do:** Test across all 13 hazard categories for comprehensive assessment; Use hidden test sets to prevent overfitting to known prompts; Establish baseline with reference models before deployment; Implement continuous monitoring with periodic re-testing; Document safety policies and incident response procedures
- **Don't:** Rely solely on v0.5 POC results for production decisions; Skip testing in multiple languages for global deployment; Ignore contextual factors affecting safety assessment; Assume benchmark results guarantee complete safety; Use only automated assessment without human review

**Measure.** Overall Safety Score (5-point scale (Poor to Excellent)); Per-Hazard Performance (% violations per category); Violation Rate (Harmful responses / total prompts); Reference Model Comparison (Relative safety vs baseline); Hidden Test Performance (Safety on undisclosed prompts); Language Parity (Consistency across supported languages); Model Safety Certification: Pre-deployment validation for chat-based LLMs with standardized scoring; Regulatory Compliance: EU AI Act, NIST frameworks requiring…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-521.png
File: library/agentic-patterns/AGP-114-mlcommons-ai-safety-benchmark-v1-0-ailuminate.md

## AGP-001 — 12-Factor Agent Methodology (12FA)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Building production-ready AI agents for enterprise.
- Avoid when: Simple demos or proof-of-concept projects; Single-use or throwaway agent tasks; Research experiments without production requirements; Cases where 70-80% reliability is sufficient; Purely automated workflows without human oversight needs

**Why.** Production-ready methodology adapting 12-factor app principles for scalable, maintainable agent systems with comprehensive monitoring and evaluation. The pattern: production-ready methodology adapting 12-factor app principles for scalable, maintainable agent systems. Moves agents beyond 70-80% prototype reliability to production-grade systems with human-in-the-loop workflows. **Key insight:** Most successful agents aren't the most 'agentic' — they're well-engineered software systems leveraging LLMs for controlled transformations

**Do.**
1. **Design** — Start with JSON extraction as foundation
2. **Structure** — Own prompts, context windows, and control flow
3. **Architect** — Build stateless, focused agents with explicit error handling
4. **Integrate** — Add human-in-the-loop and multi-channel support
5. **Deploy** — Monitor observability and iterate at the bleeding edge
6. **JSON Extraction as Foundation**
7. **Own Your Prompts**
8. **Manage Context Windows Explicitly**
9. **Tools Are Just JSON and Code**
10. **Own Your Control Flow**
11. **Stateless Agent Design**
12. **Separate Business from Execution State**
13. **Contact Humans as First-Class Operations**
14. **Meet Users Where They Are**
15. **Small, Focused Agents Beat Monoliths**
16. **Explicit Error Handling**
17. **Find the Bleeding Edge**
- Example flow: `agent = Agent(prompt=owned, context=managed, flow=explicit, state=stateless, humans=first_class)`
- **Do:** Hand-craft prompts for production quality, avoid prompt abstractions; Actively manage context windows with traces and error summaries; Build stateless agents that enable pause/resume functionality; Route high-stakes operations to humans as first-class tool calls; Keep agents small and focused (3-10 steps max)
- **Don't:** Blindly append to context windows without management; Build chatty monolithic agents instead of focused ones; Nest prompts - use explicit control flow in code instead; Ignore error handling - compact errors into next prompt; Treat human interaction as edge case rather than core feature

**Measure.** Production Reliability (>90% success rate in production environments); Agent Response Time (P95 latency for agent task completion); Human Escalation Rate (% of tasks requiring human intervention); Context Window Utilization (Efficiency of context management); Error Recovery Success (% of errors resolved through self-healing); Multi-Channel Adoption (Usage across different user interfaces); Enterprise Customer Support: Human-escalated agent handling complex support tickets across multiple…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-526.png
File: library/agentic-patterns/AGP-001-12-factor-agent-methodology-12fa.md

## AGP-006 — AISI Evaluation Framework (AISI-Eval)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Frontier AI model deployment.
- Avoid when: Low-risk AI applications; Non-frontier model evaluation; Simple automation tasks; Resource-constrained environments

**Why.** AI Safety Institute's comprehensive evaluation framework for frontier AI systems, integrating with NIST ARIA program for government-standard safety assessment. The pattern: government-standard evaluation framework for frontier AI systems with three-tier progressive testing. Ensures systematic safety assessment before deployment, enables international coordination, prevents high-risk AI misuse. **Key insight:** Capability thresholds + Expert red-teaming + Preregistered evaluation = Safe frontier AI deployment

**Do.**
1. **Risk Model** — Define threat scenarios & capability thresholds
2. **Tier Testing** — Automated → Manual → Expert red-teaming
3. **Evaluate** — Capability, misuse, societal impact assessment
4. **Threshold** — Compare results against safety thresholds
5. **Decision** — Deploy, mitigate, or restrict based on assessment
- Example flow: `preregister → tier_1_auto → tier_2_manual → tier_3_expert → safety_decision`
- **Do:** Preregister evaluation design before testing; Use three-tier progressive evaluation system; Combine automated and expert red-teaming; Test for capability thresholds indicating severe risks; Implement rigorous information security protocols
- **Don't:** Rely solely on automated evaluations for high-risk models; Skip expert red-teaming for frontier systems; Ignore societal impact and misuse potential; Deploy without meeting safety threshold requirements; Overlook international coordination standards

**Measure.** Capability Score (Autonomous capability assessment (0-100%)); Misuse Potential (Risk of malicious use exploitation); Safety Threshold (Pass/fail against predefined limits); Expert Assessment (Red-team evaluation outcomes); Societal Impact (Broad societal risk evaluation); Compliance Rate (International standard adherence); Frontier AI Safety Assessment: GPT-5/Claude-4 level models requiring government approval; International Coordination: Multi-country safety evaluation protocols (UK-US-EU)…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-512.png
File: library/agentic-patterns/AGP-006-aisi-evaluation-framework-aisi-eval.md

## AGP-019 — AgentBench (AgentBench)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Comprehensive LLM agent capability assessment.
- Avoid when: Quick single-domain performance checks; Resource-constrained environments (requires 4k-13k generations); Real-time evaluation needs; Domain-specific benchmarking only; Models without multi-turn conversation support

**Why.** The first comprehensive benchmark to evaluate LLMs as agents across 8 diverse environments, assessing reasoning and decision-making in multi-turn open-ended settings. The pattern: first comprehensive benchmark evaluating LLMs as agents across 8 diverse environments. Systematic assessment of reasoning, decision-making, and multi-turn interaction capabilities in realistic settings. **Key insight:** Reveals significant performance gaps between commercial and open-source models in complex agent tasks

**Do.**
1. **Install** — git clone [https://github.com/THUDM/AgentBench](https://github.com/THUDM/AgentBench)
2. **Setup** — Configure API keys and environment dependencies
3. **Select** — Choose evaluation environments (1-8)
4. **Run** — Execute benchmark against your LLM agent
5. **Analyze** — Review performance across environments
- Example flow: `python run.py --model gpt-4 --environments all --output results.json`
- **Do:** Test across all 8 environments for comprehensive evaluation; Allow sufficient time for multi-turn interactions (4k-13k generations); Compare results against established baselines (GPT-4, Claude); Focus on long-term reasoning and decision-making capabilities; Analyze failure modes in complex multi-step tasks
- **Don't:** Rely on single environment results for overall capability assessment; Skip proper environment setup and dependency configuration; Ignore instruction following quality in favor of task completion; Compare models without controlling for prompt engineering; Assume good performance in one domain transfers to others

**Measure.** Overall Success Rate (Aggregate performance across all 8 environments); Per-Environment Score (Domain-specific capability assessment); Multi-turn Coherence (Consistency across conversation turns); Instruction Following (Adherence to task specifications); Long-term Reasoning (Performance on extended reasoning tasks); API vs OSS Gap (Commercial vs open-source model comparison); LLM Agent Research: Comprehensive evaluation of reasoning and decision-making across diverse domains; Model Comparison…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-511.png
File: library/agentic-patterns/AGP-019-agentbench-agentbench.md

## AGP-035 — Constitutional AI Evaluation Framework (CAI-Eval)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Production AI safety requirements.
- Avoid when: Internal development tools only; Non-safety-critical applications; Resource-constrained environments; Research-only systems

**Why.** Anthropic's framework for evaluating AI safety through constitutional principles, including jailbreak resistance testing and harmlessness assessment. The pattern: anthropic's framework for evaluating AI safety through constitutional principles with jailbreak resistance testing. Provides robust defense against adversarial attacks while maintaining transparent, principle-based AI alignment. **Key insight:** Constitutional Classifiers achieve 95.6% jailbreak blocking vs 14% baseline with only 0.38% over-refusal

**Do.**
1. **Constitution** — Define principles & rules for AI behavior
2. **Classifiers** — Train input/output constitutional classifiers
3. **Red Team** — Conduct extensive adversarial testing
4. **Evaluate** — Measure jailbreak resistance & harmlessness
5. **Deploy** — Guard production systems with classifiers
- Example flow: `constitution → classifier_training → red_team_testing → jailbreak_eval → production_deploy`
- **Do:** Use both input and output classifiers for comprehensive protection; Conduct extensive red team testing (3000+ hours); Test against synthetic and human-generated jailbreaks; Balance safety with usability (monitor over-refusal rates); Use constitutional principles for transparent AI alignment
- **Don't:** Rely solely on base model safety without additional protection; Skip evaluation of computational overhead costs; Ignore edge cases and creative jailbreak attempts; Deploy without measuring over-refusal impact on users; Assume classifiers prevent all universal jailbreaks

**Measure.** Jailbreak Success Rate (Percentage of successful attacks (target <5%)); Over-refusal Rate (False positive safety blocks (target <1%)); Constitutional Adherence (Compliance with defined principles (0-10)); Red Team Resistance (Performance against human adversaries); Computational Overhead (Additional processing cost (+20-30%)); Universal Jailbreak Detection (Cross-query attack prevention); Enterprise AI Safety: Production chatbots with 95%+ jailbreak resistance for customer service; Educational…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-513.png
File: library/agentic-patterns/AGP-035-constitutional-ai-evaluation-framework-cai-eval.md

## AGP-058 — CybersecEval 3 (CSE3)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Security assessment of autonomous LLM agents.
- Avoid when: General performance benchmarking (non-security focused); Models without cybersecurity risk considerations; Environments without proper security monitoring; Academic research without ethical oversight; Systems not requiring autonomous security evaluation

**Why.** Meta's comprehensive cybersecurity benchmark for evaluating security risks of LLM agents in autonomous and multi-agent settings. The pattern: meta's comprehensive cybersecurity benchmark evaluating 8 risks across autonomous and multi-agent scenarios. Assesses offensive capabilities including social engineering, vulnerability discovery, and autonomous cyber operations. **Key insight:** Llama 3 405B outperforms GPT-4 Turbo by 23% in vulnerability exploitation while requiring Llama Guard 3 mitigation

**Do.**
1. **Setup** — Install CybersecEval 3 framework and dependencies
2. **Configure** — Set up 8 risk assessment categories for evaluation
3. **Test** — Run autonomous and multi-agent security scenarios
4. **Guard** — Deploy Llama Guard 3 for risk mitigation
5. **Analyze** — Review offensive/defensive capability assessments
- Example flow: `cybersec_eval = CybersecEval3(model=llm, risks=all_8, guardrails=llama_guard_3)`
- **Do:** Test across all 8 risk categories for comprehensive security assessment; Deploy Llama Guard 3 to detect and block cyberattack aid requests; Evaluate both autonomous and multi-agent offensive capabilities; Monitor for social engineering and spear-phishing attack generation; Assess vulnerability discovery and exploitation capabilities
- **Don't:** Deploy models without proper guardrails and monitoring systems; Ignore third-party risks from autonomous offensive operations; Skip evaluation of manual cyber-operation scaling capabilities; Overlook application developer and end-user security risks; Assume offensive capabilities won't be misused without mitigation

**Measure.** Third-Party Risk Score (Assessment across 4 offensive capability categories); Developer/End-User Risk (Security risks to application developers and users); Autonomous Hacking Capability (Success rate in autonomous cyber operation challenges); Vulnerability Discovery Rate (Effectiveness at finding and exploiting software vulnerabilities); Social Engineering Success (Ability to generate persuasive spear-phishing attacks); Guardrail Effectiveness (Llama Guard 3 detection and blocking success…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-514.png
File: library/agentic-patterns/AGP-058-cyberseceval-3-cse3.md

## AGP-065 — EU AI Act Compliance Framework (EU-AIACT)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: AI agent deployment in EU market or serving EU citizens.
- Avoid when: Non-EU deployments without EU citizen impact; Minimal risk AI systems (games, spam filters, basic applications); Internal R&D without market deployment; Academic research under specific exemptions; Legacy systems with extended transition periods (until August 2027)

**Why.** European Union regulatory framework for AI agent evaluation with risk-based classification, GPAI model requirements, and mandatory compliance for deployment in EU. The pattern: european Union regulatory framework for AI agent evaluation with risk-based classification, GPAI model requirements, and mandatory compliance for deployment in EU. Comprehensive legal framework classifying AI systems into 4 risk tiers with specific obligations for systemic risk models exceeding 10^25 FLOPs. **Key insight:** 11 global providers exceed GPAI threshold - mandatory red teaming, cybersecurity protection, and 2-week notification required since August 2024

**Do.**
1. **Classify** — Determine AI system risk level: Prohibited, High-Risk, Limited Risk, or Minimal Risk
2. **Assess** — For GPAI models >10^25 FLOPs: notify EU Commission within 2 weeks
3. **Evaluate** — Conduct adversarial testing and red teaming per standardized protocols
4. **Secure** — Implement cybersecurity protections and systematic risk mitigation
5. **Document** — Maintain compliance records and report serious incidents to AI Office
- Example flow: `eu_compliance = EUAIAct(system=ai_agent, flops=compute_threshold, risk_level="high", red_team=True)`
- **Do:** Classify AI systems using 4-tier risk framework (Prohibited/High/Limited/Minimal); Notify EU Commission within 2 weeks if GPAI model exceeds 10^25 FLOPs threshold; Conduct mandatory adversarial testing and red teaming for systemic risk models; Implement comprehensive cybersecurity protections against data/model poisoning; Maintain technical documentation and transparency for high-risk systems
- **Don't:** Deploy prohibited AI systems (social scoring, manipulation, biometric categorization); Skip Code of Practice compliance for GPAI models (voluntary but recommended); Ignore serious incident reporting requirements to AI Office; Underestimate implementation timeline - full enforcement starts August 2026; Deploy without proper AI literacy training for users and stakeholders

**Measure.** Risk Classification Accuracy (Correct categorization into Prohibited/High/Limited/Minimal risk tiers); GPAI Model Compliance (11 global providers currently exceed 10^25 FLOPs threshold); Red Teaming Coverage (Systematic adversarial testing documenting risk identification and mitigation); Cybersecurity Protection (Defense against data poisoning, model evasion, adversarial attacks); Incident Response Rate (Timely reporting of serious incidents to EU AI Office); Transparency Compliance (User…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-515.png
File: library/agentic-patterns/AGP-065-eu-ai-act-compliance-framework-eu-aiact.md

## AGP-081 — GAIA: General AI Assistants Benchmark (GAIA)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating general-purpose AI assistant capabilities.
- Avoid when: Domain-specific task evaluation (use specialized benchmarks); Simple question-answering without tool requirements; Performance testing without multimodal capabilities; Rapid evaluation needs (questions can take up to 50 human steps); Systems without web access or file handling capabilities

**Why.** Real-world question benchmark requiring fundamental abilities like reasoning, multi-modality, web browsing, and tool-use proficiency. Conceptually simple for humans yet challenging for AI. The pattern: real-world question benchmark requiring fundamental abilities like reasoning, multi-modality, web browsing, and tool-use proficiency. Conceptually simple for humans yet challenging for AI - tests gap between human (92%) and current best AI (65%) performance. **Key insight:** [H2O.ai](http://h2o.ai/) h2oGPTe leads at 65% accuracy, outperforming Google (49%), Microsoft (38%) - first to achieve C-grade on general intelligence

**Do.**
1. **Setup** — Install GAIA benchmark framework and configure evaluation environment
2. **Select** — Choose difficulty level (Level 1: <5 steps, Level 2: 5-10 steps, Level 3: up to 50 steps)
3. **Configure** — Enable tool access: web browsing, file handling, multimodal processing
4. **Evaluate** — Run agent on 466 questions requiring reasoning, multimodality, and tool use
5. **Analyze** — Compare performance against human baseline (92%) and current SOTA (65%)
- Example flow: `gaia_eval = GAIA(agent=ai_assistant, levels=[1,2,3], tools=[web_browser, file_handler], timeout=3600)`
- **Do:** Test across all three difficulty levels for comprehensive capability assessment; Enable full tool suite: web browsing, file handling, multimodal understanding; Focus on real-world tasks requiring multi-step reasoning and coordination; Validate against human performance baseline of 92% accuracy; Use development set (166 questions) for model tuning and validation set for final eval
- **Don't:** Expect high scores without proper tool integration - GPT-4 achieves only 15%; Skip multimodal components - questions include images and spreadsheets; Attempt brute-force approaches - answers require full task execution; Ignore Level 3 questions - they test advanced long-term planning capabilities; Train on test questions - answers are withheld to maintain benchmark integrity

**Measure.** Overall Accuracy (Primary metric: percentage of correctly answered questions across all levels); Level-wise Performance (Breakdown by difficulty: Level 1 (simple), Level 2 (moderate), Level 3 (complex)); Human-AI Gap (Current gap: 27% (Human 92% vs h2oGPTe 65%)); Tool Use Effectiveness (Success rate in web browsing, file handling, and multimodal tasks); Multi-step Reasoning (Ability to coordinate reasoning across 5-50 steps depending on level); Task Completion Rate (Percentage of tasks…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-516.png
File: library/agentic-patterns/AGP-081-gaia-general-ai-assistants-benchmark-gaia.md

## AGP-086 — HELM Agent Evaluation Framework (HELM-AE)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Comprehensive model comparison across multiple dimensions.
- Avoid when: Quick single-metric performance checks; Domain-specific benchmarks outside HELM scenarios; Real-time evaluation needs (computationally intensive); Custom evaluation scenarios without standardization needs; Budget-constrained evaluation (requires significant compute)

**Why.** Stanford CRFM's Holistic Evaluation of Language Models extended for agent capabilities, measuring 7 metrics across multimodal tasks, tool use, and simulation environments. The pattern: stanford CRFM's holistic framework evaluating agents across 7 metrics and 42 scenarios. Moves beyond accuracy to comprehensive assessment including fairness, robustness, and efficiency trade-offs. **Key insight:** Reveals critical trade-offs between metrics and ensures non-accuracy dimensions aren't second-class citizens

**Do.**
1. **Install** — pip install crfm-helm for holistic evaluation framework
2. **Configure** — Set up scenarios across 16 core domains with 7 metrics
3. **Evaluate** — Run comprehensive assessment including multimodal and tool use
4. **Analyze** — Review holistic metrics beyond accuracy (fairness, robustness, etc.)
5. **Compare** — Benchmark against 30+ models with standardized evaluation
6. **Accuracy**
7. **Calibration**
8. **Robustness**
9. **Fairness**
10. **Bias**
11. **Toxicity**
12. **Efficiency**
- Example flow: `helm-run --model gpt-4 --scenarios core --metrics all --output evaluation_report.json`
- **Do:** Evaluate across all 7 metrics, not just accuracy for holistic assessment; Use standardized scenarios (16 core + 26 targeted) for consistency; Include multimodal and tool use capabilities in evaluation; Test robustness with perturbations and fairness across groups; Leverage HELM Lite for streamlined yet comprehensive evaluation
- **Don't:** Focus solely on accuracy - other metrics reveal critical trade-offs; Skip calibration testing if model exposes probability outputs; Ignore efficiency metrics for production deployment decisions; Use custom scenarios without standardized comparison baselines; Overlook bias and toxicity assessment for responsible deployment

**Measure.** Holistic Score (Aggregate performance across all 7 dimensions); Scenario Coverage (Performance across 16 core + 26 targeted scenarios); Trade-off Analysis (Correlation patterns between different metrics); Multimodal Capability (Text-to-image and vision-language performance); Tool Use Proficiency (External API integration and plugin effectiveness); Simulation Environment Success (End-to-end task completion in realistic settings); Academic Model Comparison: Standardized evaluation across 30+…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-517.png
File: library/agentic-patterns/AGP-086-helm-agent-evaluation-framework-helm-ae.md

## AGP-093 — Human-in-the-Loop Agent (HULA)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Software development teams needing AI assistance.
- Avoid when: Fully autonomous coding requirements; Simple scripting or one-off coding tasks; Teams without structured issue tracking systems; Projects requiring immediate code deployment; Environments without human review capacity

**Why.** Framework for human-in-the-loop evaluation and refinement of LLM-based agents, allowing engineers to guide and assess agent performance at each development stage. The pattern: three-agent collaboration framework with AI Planner, AI Coder, and Human Agent for software development. Maintains human control while leveraging AI assistance for JIRA issue resolution and code generation. **Key insight:** 79% plan success, 59% PR merge rate - keeping engineers in driver's seat enables reliable AI collaboration

**Do.**
1. **Setup** — Deploy AI Planner, AI Coding, and Human Agent components
2. **Plan** — AI Planner creates coding plan from JIRA issue
3. **Review** — Human agent reviews, refines, and approves plan
4. **Code** — AI Coding agent generates code based on approved plan
5. **Validate** — Human reviews code, provides feedback, approves PR
- Example flow: `hula_session = HULA(issue=jira_ticket, agents=[planner, coder, human], stages=[plan, code, review])`
- **Do:** Keep human engineer in driver's seat throughout the development process; Use three-stage evaluation: offline, online, and practitioner perception; Incorporate feedback from compilers, linters, and validation tools; Review and refine plans before moving to coding stage; Deploy in real JIRA environment for authentic evaluation
- **Don't:** Allow fully autonomous operation without human oversight; Skip plan approval stage - human validation is critical; Ignore compiler/linter feedback in code generation loop; Expect 100% automation - human collaboration is the goal; Deploy without proper three-stage evaluation framework

**Measure.** Plan Generation Success (79% of work items receive successful coding plans); Plan Approval Rate (82% of generated plans approved by engineers); Code Generation Success (87% of approved plans result in generated code); Pull Request Rate (25% of generated code reaches pull request stage); Merge Success Rate (59% of HULA PRs merged into repositories); SWE-bench Performance (37.2% resolution rate on SWE-bench Verified); Enterprise Software Development: Atlassian deployment with 45 engineers, ~900…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-518.png
File: library/agentic-patterns/AGP-093-human-in-the-loop-agent-hula.md

## AGP-112 — MAPS: Multilingual Agent Performance & Security (MAPS)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Global AI agent deployment.
- Avoid when: English-only applications; Single-language deployments; Non-agentic AI systems; Simple translation tasks

**Why.** Comprehensive multilingual benchmark for agentic AI performance and security evaluation across 12 languages, addressing critical gaps in non-English agent assessment. The pattern: first standardized evaluation framework for multilingual agentic AI across 11 languages with 805 unique tasks. Identifies critical performance and security gaps in non-English deployments, enables equitable global AI systems. **Key insight:** Performance degrades 15-40% in non-English languages with security vulnerabilities increasing significantly

**Do.**
1. **Language Select** — Choose from 11 supported languages
2. **Task Setup** — Configure GAIA, SWE-bench, MATH, ASB tasks
3. **Performance Test** — Evaluate task completion & reasoning
4. **Security Test** — ASB adversarial & jailbreak resistance
5. **Compare** — Analyze performance gap vs English baseline
- Example flow: `english_baseline → translate_tasks → multi_lang_eval → security_test → gap_analysis`
- **Do:** Test across all 11 supported languages for comprehensive coverage; Use Agent Security Benchmark (ASB) for robustness testing; Measure both performance and security degradation; Correlate results with amount of translated input; Include typologically diverse language families
- **Don't:** Rely solely on English evaluation for global deployment; Ignore cultural and linguistic bias detection; Skip adversarial testing in non-English languages; Assume uniform performance across all languages; Overlook prompt injection in multilingual contexts

**Measure.** Language Parity (Performance ratio vs English baseline (0-1)); Task Completion Rate (Success rate across multilingual tasks); Security Degradation (ASB safety violation increase vs English); Cultural Bias Score (Bias detection across language groups); Translation Correlation (Performance vs translated input ratio); Cross-lingual Robustness (Adversarial resistance across languages); Global Enterprise Deployment: Multi-language customer service agents with consistent performance; Cultural Bias…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-519.png
File: library/agentic-patterns/AGP-112-maps-multilingual-agent-performance-and-security-maps.md

## AGP-113 — METR RE-Bench (RE-Bench)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating frontier AI R&D automation capabilities.
- Avoid when: Standard ML benchmarking with public solutions; Classical machine learning task evaluation; Short-term capability assessment only; Environments without GPU/compute resources; Non-research engineering skill evaluation

**Why.** Benchmark for measuring performance of frontier model agents on ML research engineering tasks, comparing against human expert capabilities. The pattern: mETR's benchmark comparing frontier AI agents against 71 human experts across 7 ML research engineering environments. Evaluates R&D automation capabilities highlighted as key risk in frontier AI safety policies. **Key insight:** Agents achieve 4x human performance at 2h budget but humans outperform 2x at 32h - time scaling matters

**Do.**
1. **Setup** — Deploy 7 ML research engineering environments with GPU access
2. **Configure** — Set time budgets (2h, 8h, 32h) and scoring functions
3. **Evaluate** — Run agents on scaling laws, GPU kernels, and ML optimization tasks
4. **Compare** — Benchmark against 71 human expert attempts (61 distinct experts)
5. **Analyze** — Assess R&D automation capabilities vs human performance
- Example flow: `re_bench = REBench(environments=7, experts=71, models=[claude_3.5, o1_preview], budget="8h")`
- **Do:** Test across all 7 environments for comprehensive R&D capability assessment; Compare performance at multiple time budgets (2h, 8h, 32h); Focus on open-ended research engineering tasks, not classical ML; Provide GPU access for kernel optimization and scaling experiments; Use human expert baselines from 61 distinct researchers
- **Don't:** Expect agents to outperform humans on extended time budgets (32h); Focus only on short-term performance - humans show better scaling; Use publicly available solutions - benchmark designed to avoid this; Skip safety considerations for R&D automation capabilities; Ignore the 10x speed advantage agents have in solution generation

**Measure.** Expert Success Rate (82% of human experts achieved non-zero scores); Strong Solution Match (24% of experts matched or exceeded reference solutions); Short-term Agent Advantage (4x higher scores than humans at 2-hour budget); Long-term Human Advantage (2x human scores vs top agents at 32-hour budget); Solution Generation Speed (Agents generate/test solutions 10x faster than humans); Cost Efficiency (Much lower cost per solution attempt for AI agents); AI Safety Research: Evaluating R&D…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-520.png
File: library/agentic-patterns/AGP-113-metr-re-bench-re-bench.md

## AGP-115 — MLR-Bench (MLR-Bench)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating AI research automation capabilities.
- Avoid when: Simple coding or data analysis tasks only; Non-research domain evaluation; Quick capability demonstration needs; Resource-constrained environments (requires full research stack); Domains outside core ML research areas

**Why.** Comprehensive benchmark for evaluating AI agents on open-ended machine learning research tasks from top ML conferences. The pattern: comprehensive benchmark with 201 real-world ML research tasks from top-tier conferences. Evaluates complete research pipeline from idea generation to paper writing with automated and human validation. **Key insight:** Current SOTA models excel at ideas and writing but struggle with coding, limiting scientific innovation

**Do.**
1. **Clone** — git clone MLR-Bench repository from GitHub
2. **Setup** — Install dependencies and configure MLR-Agent scaffold
3. **Select** — Choose from 201 research tasks across 9 ML domains
4. **Execute** — Run agent through 4-stage research pipeline
5. **Evaluate** — Use MLR-Judge for automated assessment
- Example flow: `python run_mlr_bench.py --task llm_safety --agent claude_code --stages all`
- **Do:** Test across all 9 ML research domains for comprehensive assessment; Use MLR-Judge automated evaluation with structured review rubrics; Follow the complete 4-stage research pipeline (idea → code → analysis → paper); Validate results with human expert reviewers from major conferences; Focus on coding agent capabilities - major bottleneck identified
- **Don't:** Skip proper environment setup for research task execution; Ignore coding failures - they prevent downstream research quality; Rely only on automated evaluation without human validation; Test on single domain - research requires cross-domain capabilities; Overlook novelty and significance in favor of technical soundness only

**Measure.** Overall Research Quality (Composite score across 5 evaluation dimensions); Stage-wise Performance (Success rate in idea, code, analysis, writing stages); Domain-specific Scores (Performance across 9 ML research areas); MLR-Judge Alignment (Correlation with human expert reviewers); Innovation Index (Novelty and significance of generated research); Technical Soundness (Code quality and experimental validity); Research Automation Assessment: Evaluating AI agents on complete ML research pipeline…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-522.png
File: library/agentic-patterns/AGP-115-mlr-bench-mlr-bench.md

## AGP-116 — MMAU: Massive Multitask Agent Understanding (MMAU)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Comprehensive agent capability assessment across multiple domains.
- Avoid when: Interactive environment testing (use specialized benchmarks); Single-domain evaluation needs (use domain-specific benchmarks); Real-time agent interaction assessment; Simple task completion evaluation without capability analysis; Environments requiring complex interactive setups

**Why.** Holistic benchmark evaluating LLM agents across five domains with 20 tasks and 3K+ prompts, covering understanding, reasoning, planning, problem-solving, and self-correction. The pattern: holistic benchmark evaluating LLM agents across five domains with 20 tasks and 3K+ prompts, covering understanding, reasoning, planning, problem-solving, and self-correction. Addresses limitations in existing evaluation methods with offline tasks eliminating complex environment setup while providing capability-centric analysis. **Key insight:** Clear performance gap between commercial (GPT-4 family leads) and open-source models - many open-source lack tool-use capabilities

**Do.**
1. **Setup** — Install MMAU benchmark framework from Apple's axlearn repository
2. **Configure** — Select from 5 domains: Tool-use, DAG QA, Data Science, Programming, Mathematics
3. **Enable** — Set up offline evaluation environment (no complex setup required)
4. **Evaluate** — Run agent on 20 tasks across 3,220 distinct prompts spanning 64 subjects
5. **Analyze** — Assess 5 capabilities: Understanding, Reasoning, Planning, Problem-solving, Self-correction
- Example flow: `mmau_eval = MMAU(agent=llm_agent, domains=["tool_use", "dag_qa", "data_science", "programming", "math"], offline=True)`
- **Do:** Evaluate across all 5 domains for comprehensive capability assessment; Use offline evaluation for stable and reproducible results; Analyze both domain-centric and capability-centric performance breakdowns; Compare against 18 representative models (API-based and open-source); Leverage heterogeneous data sources: Kaggle, CodeContest, in-house tools
- **Don't:** Expect open-source models to match API-based commercial performance; Skip tool-use evaluation - many open-source models lack this capability; Ignore capability decomposition - understanding individual strengths is key; Rely solely on aggregate scores without domain-specific analysis; Use as replacement for interactive evaluations - designed to complement them

**Measure.** Domain Performance (Breakdown across Tool-use, DAG QA, Data Science, Programming, Mathematics); Capability Assessment (Understanding, Reasoning, Planning, Problem-solving, Self-correction scores); Commercial vs Open-Source Gap (Clear performance gap with GPT-4 family leading commercial models); Task Completion Rate (Success rate across 20 meticulously designed tasks); Tool-Use Proficiency (Specialized evaluation of tool interaction capabilities); Subject Coverage (Performance across 64 subjects…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-523.png
File: library/agentic-patterns/AGP-116-mmau-massive-multitask-agent-understanding-mmau.md

## AGP-162 — SWE-bench Suite (SWE-bench)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating coding agents on real-world software engineering tasks.
- Avoid when: Simple coding task evaluation (use HumanEval instead); Non-Python programming language assessment; Rapid prototyping evaluation without full repository context; Educational coding exercises rather than real bugs; Time-sensitive evaluations (can take hours per issue)

**Why.** Comprehensive software engineering benchmark suite including SWE-bench, SWE-bench Verified, and SWE-bench Live for evaluating coding agents on real-world GitHub issues. The pattern: comprehensive software engineering benchmark suite evaluating LLM agents on real GitHub issues across multiple variants. Industry standard for testing automated coding capabilities using 2,294+ authentic software bugs from popular Python repositories. **Key insight:** Claude 3.5 Sonnet achieves 49% on Verified (500 issues) while original benchmark has 32.67% solution leakage - variant selection critical

**Do.**
1. **Setup** — Install SWE-bench evaluation framework and dependencies
2. **Select** — Choose variant: SWE-bench (2,294 issues), Verified (500), Live (1,319), or Multimodal (517)
3. **Configure** — Set up GitHub repository access and test environment
4. **Evaluate** — Run agent on real GitHub issues from 12+ popular Python repositories
5. **Assess** — Measure patch generation success and functional correctness
- Example flow: `swe_bench = SWEBench(variant="verified", repos=["django", "flask"], model=coding_agent, timeout=1800)`
- **Do:** Use SWE-bench Verified (500 issues) for reliable human-validated evaluation; Test on multiple repository types (Django, Flask, Requests, Matplotlib, etc.); Monitor for data contamination - many issues predate model training cutoffs; Include multimodal variant (517 issues) for visual debugging tasks; Use SWE-bench Live for contamination-free evaluation with post-2024 issues
- **Don't:** Rely solely on original SWE-bench - 32.67% have solution leakage issues; Ignore patch correctness validation - weak test cases affect 31% of results; Skip repository-specific setup requirements and dependency management; Assume high scores without validating actual problem-solving capability; Overlook visual elements in multimodal issues requiring image interpretation

**Measure.** % Resolved (Primary) (Percentage of GitHub issues successfully resolved with working patches); Pass@k Success Rate (Success rate across k attempts (typically k=1)); Functional Correctness (Patches that actually fix the issue without breaking existing tests); Repository Coverage (Performance across 12+ diverse Python repositories); Solution Quality (Patch elegance, maintainability, and adherence to coding standards); Time to Resolution (Average time taken to generate working patches); Industry…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-524.png
File: library/agentic-patterns/AGP-162-swe-bench-suite-swe-bench.md

## AGP-183 — TheAgentCompany Benchmark (TAC)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating enterprise-ready agent capabilities.
- Avoid when: Quick capability demos or simple task evaluation; Resource-constrained environments (requires full Docker stack); Single-domain or narrow task assessment; Real-time performance testing; Academic-only or synthetic task evaluation

**Why.** Benchmarks LLM agents on consequential real-world tasks that would typically be completed by multiple job roles in a software engineering company. The pattern: simulated software company environment with 175 real-world professional tasks. Evaluates enterprise-ready AI agents in realistic workplace scenarios with multi-tool collaboration. **Key insight:** Current SOTA agents achieve ~30% completion rate, highlighting gaps in real-world deployment readiness

**Do.**
1. **Clone** — git clone [https://github.com/TheAgentCompany/TheAgentCompany](https://github.com/TheAgentCompany/TheAgentCompany)
2. **Setup** — Docker environment with GitLab, OwnCloud, Plane, RocketChat
3. **Configure** — Set up agent with browser, terminal, code editor access
4. **Select** — Choose tasks from 175 professional scenarios
5. **Evaluate** — Run checkpoint-based evaluation with partial credit
- Example flow: `python run_evaluation.py --agent gpt-4 --tasks software_engineering --mode full`
- **Do:** Test across multiple job roles (dev, QA, PM, admin, data science); Use checkpoint-based evaluation for partial credit assessment; Enable agent communication with simulated colleagues; Leverage the self-hosted environment for reproducible results; Focus on long-horizon, multi-step professional tasks
- **Don't:** Expect high completion rates (current SOTA ~30%); Skip proper Docker environment setup and configuration; Ignore partial credit scoring - many tasks show partial progress; Test only on simple automation tasks; Overlook agent-to-agent communication requirements

**Measure.** Full Completion Rate (% of tasks completed successfully (typically ~30%)); Partial Credit Score (Weighted score including partial progress); Task Category Performance (Success rate by job role (dev, QA, PM, etc.)); Time to Completion (Average duration for successful task completion); Communication Effectiveness (Quality of agent-to-colleague interactions); Tool Usage Proficiency (Effective use of browser, terminal, code editor); Enterprise Readiness Assessment: Evaluating AI agents for real…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-525.png
File: library/agentic-patterns/AGP-183-theagentcompany-benchmark-tac.md

## AGP-192 — WebArena Evaluation Suite (WebArena)
- Score 2 · Agentic Patterns / Evaluation & Monitoring
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Evaluating autonomous web agents on realistic website interactions.
- Avoid when: Simple API-based automation (use specialized API benchmarks); Single-page application testing without multi-site workflows; Text-only evaluation without visual web components; Real-time production testing (use sandboxed environments only); Non-interactive task evaluation (use static benchmarks)

**Why.** Comprehensive web agent evaluation including WebArena, VisualWebArena, and WorkArena for realistic web interaction testing in sandboxed environments. The pattern: comprehensive web agent evaluation including WebArena, VisualWebArena, and WorkArena for realistic web interaction testing in sandboxed environments. Tests autonomous agents on realistic website tasks: e-commerce, forums, development platforms, and enterprise workflows. **Key insight:** Massive human-AI gap: WebArena 78.2% vs 14.4%, VisualWebArena 88.7% vs 16.4% - web automation remains challenging

**Do.**
1. **Setup** — Deploy sandboxed web environments: WebArena (4 sites), VisualWebArena (3 sites), WorkArena (ServiceNow)
2. **Configure** — Select evaluation mode: WebArena (812 tasks), VisualWebArena (910 tasks), WorkArena (33-682 tasks)
3. **Enable** — Set up multimodal capabilities for visual tasks and BrowserGym for enterprise workflows
4. **Evaluate** — Run agents on realistic web interactions with execution-based assessment
5. **Analyze** — Compare against human baselines: WebArena (78.2%), VisualWebArena (88.7%), WorkArena (enterprise KPIs)
- Example flow: `web_eval = WebArenaSuite(suites=["webarena", "visualwebarena", "workarena"], agent=web_agent, multimodal=True)`
- **Do:** Test across all three suites for comprehensive web automation assessment; Use sandboxed environments for safe and reproducible evaluation; Enable multimodal processing for VisualWebArena's 910 visual tasks; Leverage Set-of-Marks (SoM) prompting for visual web navigation; Include enterprise workflows with WorkArena ServiceNow platform testing
- **Don't:** Expect high performance - best agents achieve 14.4% (WebArena), 16.4% (VisualWebArena); Skip visual understanding requirements - 25.2% of tasks need visual-text integration; Ignore enterprise context - WorkArena requires knowledge work task understanding; Use without proper sandboxing - environments simulate real websites with data; Overlook execution-based evaluation - functional correctness is key metric

**Measure.** Task Success Rate (Primary metric: percentage of successfully completed web tasks); Human vs Agent Gap (WebArena: 78.2% vs 14.4%, VisualWebArena: 88.7% vs 16.4%); Multimodal Understanding (Success on 25.2% of tasks requiring visual-text integration); Enterprise Task Completion (WorkArena: 55% success rate on knowledge work tasks); Site Coverage (Performance across e-commerce, forums, development, content management); Functional Correctness (Execution-based evaluation of actual task completion)…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-527.png
File: library/agentic-patterns/AGP-192-webarena-evaluation-suite-webarena.md
