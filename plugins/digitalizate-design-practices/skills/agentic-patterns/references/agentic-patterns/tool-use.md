# Agentic Patterns / Tool Use (3)

## AGP-080 — Function Calling
- Score 5 · Agentic Patterns / Tool Use
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Need real-time data beyond model training cutoff.
- Avoid when: Information available in model knowledge with acceptable quality; Hard real-time requirements where tool overhead breaks SLOs; High-risk irreversible actions without human approval; Simple tasks solvable with basic text generation

**Why.** Structured interface for AI to invoke external functions and APIs. The pattern: enable AI to invoke external functions and APIs through structured schemas. Breaks LLM knowledge limitations, enables real-time data access, external actions, and precise calculations. **Key insight:** Schema-driven function calling with parameter validation, parallel execution, and security controls

**Do.**
1. **Define Schema** — JSON schema with parameters & types
2. **Register Tools** — Add to function registry with auth
3. **Validate Params** — Sanitize & validate all inputs
4. **Execute** — Call API with timeouts & retries
5. **Process Results** — Normalize & integrate responses
- Example flow: `get_weather(location="NYC", units="celsius") → {"temp": 18, "condition": "cloudy"}`
- **Do:** Write detailed function descriptions (3-4+ sentences minimum); Use strict JSON schemas with required/optional field validation; Implement parameter sanitization and injection attack prevention; Add timeouts, retries with exponential backoff, and circuit breakers; Use parallel execution for independent function calls; Cache deterministic function results for cost optimization
- **Don't:** Use vague function descriptions that lead to hallucinated parameters; Allow unbounded parallel calls without rate limiting; Retry non-idempotent operations after timeouts; Expose raw API credentials or secrets in function calls; Skip input validation and security scanning

**Measure.** Function Selection Accuracy (% correct tool chosen from registry); Parameter Extraction Rate (% required params correctly identified); Schema Validation Success (% calls passing validation checks); API Success Rate (% successful external function calls); Parallel Execution Efficiency (Latency reduction vs sequential); Token Usage Optimization (Context tokens per function call); Security Incident Rate (Injection/XSS attempts blocked); Cost per Task (Total cost: model + API + infrastructure)…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-387.png
File: library/agentic-patterns/AGP-080-function-calling.md

## AGP-030 — Code Execution
- Score 4 · Agentic Patterns / Tool Use
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Untrusted/AI-generated code requiring maximum security isolation.
- Avoid when: Simple calculations answerable through LLM reasoning alone; Environments where container isolation is sufficient (trusted code); Resource-constrained edge devices without KVM virtualization support; Legacy applications requiring full hardware emulation or BIOS support

**Why.** Safely execute LLM-generated code in isolated environments for calculations and data processing. The pattern: execute LLM-generated code safely in isolated microVM environments. LLMs can generate code for calculations, data analysis, and algorithms but require secure execution due to potential malicious or buggy output. **Key insight:** Treat LLM code as untrusted - use Firecracker microVMs for hardware isolation with <125ms startup

**Do.**
1. **Generate Code** — Create minimal, purpose-built scripts
2. **Security Scan** — Static analysis & import validation
3. **MicroVM Launch** — Start Firecracker microVM (<125ms)
4. **Execute** — Run in isolated kernel with limits
5. **Process Results** — Capture outputs & destroy microVM
- Example flow: `User: "Calculate fibonacci(20)" → Generate Python → Validate imports → Launch Firecracker → Return: 6765`
- **Do:** Use Firecracker microVMs for hardware-enforced isolation; Implement VM-level security with dedicated kernels per execution; Leverage KVM hypervisor with <5 MiB memory overhead per microVM; Use jailer process for additional cgroup/namespace isolation; Destroy microVMs after each execution for perfect isolation; Pool warm microVMs for <125ms startup performance
- **Don't:** Rely solely on containers for untrusted code (shared kernel risk); Use traditional VMs (minutes startup vs 125ms microVM); Skip hardware virtualization for critical security boundaries; Reuse microVMs across different execution contexts; Enable unnecessary devices (keep minimal virtio interface)

**Measure.** MicroVM Startup Time (<125ms boot to userspace (vs minutes for VMs)); Security Isolation Rate (Hardware VM barriers + process isolation (target: 100%)); Resource Density (Thousands of microVMs per host with <5 MiB overhead); Performance Overhead (>95% bare-metal performance in microVM); Creation Rate (Up to 150 microVMs/second per host); Memory Elasticity (2-3 orders magnitude improvement with Faascale); Security Incident Rate (VM escapes + kernel compromises (target: 0%)); Cost Efficiency…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-386.png
File: library/agentic-patterns/AGP-030-code-execution.md

## AGP-128 — Model Context Protocol (MCP)
- Score 4 · Agentic Patterns / Tool Use
- Tags: ai-patterns
- Goals: Handle Complex Multi-Step Workflows
- Use when: Multi-tool agent systems requiring standardized integration.
- Avoid when: Single, static tool integrations where function calling suffices; Ultra-low-latency paths that cannot afford protocol overhead; Simple applications without complex tool orchestration needs; Environments where server process deployment is infeasible

**Why.** Standardized protocol for sharing context and capabilities between AI models and tools. The pattern: standardize AI application context sharing and tool integration via JSON-RPC protocol. Enables seamless interoperability between AI models and external tools/data sources across platforms. **Key insight:** Open standard solving N×M integration problem - 1000+ servers available, adopted by OpenAI/GitHub

**Do.**
1. **Choose Transport** — stdio (local) or HTTP/SSE (remote)
2. **Initialize Session** — Capability negotiation & discovery
3. **Discover Tools** — List available tools, resources, prompts
4. **Invoke Tools** — JSON-RPC calls with typed parameters
5. **Handle Resources** — Use handles vs embedding content
- Example flow: `Client connects → initialize() → list_tools() → call_tool("github_search") → get_resource(handle)`
- **Do:** Use JSON Schema for all tool parameters and response validation; Implement OAuth 2.1 with PKCE for secure authentication; Use resource handles instead of inlining large content; Implement streaming for large outputs with backpressure control; Version capabilities and maintain backward compatibility; Apply least privilege principle for server access scoping
- **Don't:** Pass tokens through servers (token passthrough anti-pattern); Skip server validation (vulnerable to spoofing attacks); Embed large documents in prompts instead of using handles; Deploy without conformance tests (schema drift risk); Ignore structured error codes for proper fallback handling

**Measure.** Tool-hop Latency (218ms average (Li & Xie 2025 study)); Integration Efficiency (25-40% improvement vs custom implementations); Protocol Failure Rate (0.7% (mainly parameter mismatches)); Development Time Reduction (50% faster project rollout times); Cost Optimization (30% reduction in integration costs); Session Establishment (Sub-second capability discovery & negotiation); Security Incident Rate (Token spoofing & confused deputy attacks); Ecosystem Growth (1000+ community MCP servers (2025))…

Wireframe: https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-388.png
File: library/agentic-patterns/AGP-128-model-context-protocol-mcp.md
