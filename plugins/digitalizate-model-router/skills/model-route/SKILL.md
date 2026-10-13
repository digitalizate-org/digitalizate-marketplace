---
name: model-route
description: Decide which Claude model (Sonnet 5.5, Opus 5.5, Fable 5.1), which effort level and which execution path (stay, delegate to a fixed-model sub-agent, switch with /model, plan mode) fits a task, following Digitalízate's model guide; split a plan into steps with a model per step; write the delegation brief tuned to the target model; estimate whether a model switch pays off; and check a Claude Code setup against the guide. Use it whenever the user asks which model or effort to use ("qué modelo uso", "en qué modelo corro esto", "Sonnet u Opus", "vale la pena Fable"), whether or to whom to delegate, how to split work across models, what switching models costs, or to review their model settings and agents. Invoke as /model-route [task | split <plan> | brief <task> | cost | doctor].
---

# model-route

Goal: a routing decision someone can act on and argue with. It names the model, the effort, how to run it, the guide's reason, what would change the decision, and the cost against the alternatives. "Use Opus, it's complex" is a failure of this skill; "Opus 5.5 · high, delegate to opus-debugger: intermittent failure with no reproduction; once a repro exists, Sonnet can fix it" is the bar.

The guide in one line: Sonnet 5.5 by default. Opus 5.5 when the change is structural or Sonnet hesitates. Fable 5.1 only to plan big things or to work an open problem for hours. Measure cost per finished task, not per token.

Answer in the user's language. The guide and the team speak Spanish.

## Modes

| The user brings | Mode |
|---|---|
| A task, "qué modelo para X" | evaluate |
| A plan, a spec, a list of steps, a Linear project | split |
| "escríbele el prompt al sub-agente", or you are about to call Agent | brief |
| "¿cambio a X?", "¿vale la pena /model X?" | cost |
| "revisa mi setup", "¿está bien mi configuración de modelos?" | doctor |

The script below gives the deterministic reading of the matrix. It runs where Claude Code can run Node (`npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/route.ts" <command>`). Where scripts cannot run (claude.ai, Cowork), apply [references/matrix.md](references/matrix.md) by hand: same categories, same rules.

## Evaluate

1. **Read the matrix.** `route.ts evaluate "<task>" --model <current model> [--plan-mode] [--context <tokens>]`. It returns the category, model tier, effort, confidence (alta, media, baja), the signals that matched, a risk override when one applies, and the action for the current session.
2. **Judge what the matrix cannot see.** Push up when there is no reproduction, the change crosses modules or layers, the cost of an error is high (auth, money, data, migrations), the input is visual, or a previous attempt already failed. Push down when there is a pattern in the repo to copy, a test or a command verifies the result in seconds, or the change stays inside one file. When you disagree with the script, say so and why.
3. **Pick the path.** These rules carry the guide's judgment:
   - Same tier as the session: stay.
   - A bounded subtask that fits another tier: delegate to the fixed-model agent (`sonnet-implementer`, `opus-debugger`, `opus-reviewer`, `fable-researcher`). Delegation keeps the session's prompt cache; a model switch rewrites all of it and drops the earlier reasoning.
   - The whole session should run elsewhere: `/model <alias>`, only with strong evidence, and with its cost (cost mode).
   - Design decisions in an `opusplan` session: plan mode (Shift+Tab twice). Opus plans, Sonnet executes.
   - Fable only for big plans, open problems, deep research, legacy code nobody documented, hard algorithms or math, and long autonomous runs. Never for normal code. With a large session context, prefer `fable-researcher` (clean context) over switching.
   - A tiny task (a typo, one line): stay. Delegating costs more than doing it.
4. **Answer with the card**, then the "Plan de modelos:" line if the work starts now:

```
Tarea: <label> (<category>) · confianza <alta|media|baja>
Modelo: <Model> · effort <level>
Cómo: <sigo en X | delego a <agente> | /model <alias> | plan mode>
Por qué: <guide reason + the signals that decided it>
Escala si: <the signal that would change the decision>
Costo: <relative, e.g. "~2x menos por turno que Opus"; switch cost when it applies>
```

## Split

Input: a plan, a spec, an issue list or any markdown with steps. Run `route.ts split <file>` (or `-` for stdin) or classify each step yourself. For every step give the model or agent, the effort, the done-criterion and what it depends on. Rules:

- The orchestrating session runs on the tier of its hardest decision. Mechanical steps go to `sonnet-implementer` with a brief.
- A step with risk (auth, data migration, concurrency, money) stays with Opus or goes to `opus-debugger` or `opus-reviewer`.
- Anything Sonnet writes in a risky area gets an `opus-reviewer` pass before merge.
- Research steps that only produce a document go to `fable-researcher`; the rest of the plan does not.

Output a table (step, model or agent, effort, done when) and one line with the execution order.

## Brief

Write the Agent prompt tuned to the model that will run it. Templates and the reasons behind them are in [references/briefs.md](references/briefs.md). The short version:

- **Sonnet:** exact scope, the file or pattern to copy, the verification command to run and read, what not to touch, the report format.
- **Opus:** the problem and its constraints, hypotheses worth testing, patterns to avoid named one by one (for frontend), what "done" means.
- **Fable:** the why, the objective and the constraints instead of numbered steps, a memory `.md` file to write what it learns, explicit limits of what it must not touch, ask before widening scope.

Every brief ends with the done-criterion and how to verify it.

## Cost

`route.ts cost --from <model> --to <model> --context <tokens> [--ttl 1h|5m] [--cold]`. Explain it in these terms (numbers in [references/costs.md](references/costs.md)):

- The prompt cache belongs to one model. Switching rewrites the whole context in the new model's cache and drops the earlier reasoning. Delegating starts a clean, small context.
- Cache reads cost the same on Sonnet 5.5 and Opus 5.5 ($0.20/MTok), so on a long session Sonnet saves on output and new input, not on history. The script gives the turns needed to recover the switch.
- If the session sat idle past the cache TTL, its cache is already gone: switching then costs little more than staying.

In Claude Code with this plugin installed, the `/model` guard shows the engine's own numbers before the switch.

## Doctor

`route.ts doctor` reads `~/.claude/settings.json`, the project's settings and the agent definitions, and reports each finding against the guide with the exact fix. It never edits. It checks the default model (`opusplan` is the guide's default), the effort per model in `modelSettings` (Sonnet medium, Opus high or xhigh, Fable high), the four fixed-model agents with their model and effort and the reviewer read-only, duplicated routing (a legacy hook next to this plugin's mod) and the plugin's own options. Apply a fix only when the user asks for it.

## In claude.ai and Cowork

There is no `/model` command and no fixed-model sub-agents there. Translate the path: the model to pick in the model selector, whether to turn extended thinking up or down, and for research or written deliverables, which model to start the conversation with. Everything else (matrix, reasons, escalation signals) is the same.

## Things that go wrong

- Choosing by prestige: Opus or Fable on mechanical work pays two to five times more for the same result.
- Choosing by price: a cheap model that needs three tries costs more than one that gets it right the first time.
- Switching the session model for one subtask instead of delegating it.
- Fable for normal code, or for a routine plan (about 2.5 times the quota of an Opus plan).
- Accepting "done" from Sonnet without the test, build or command output.
- Ignoring the escalation signals: going in circles, patching symptoms, editing without knowing why.
