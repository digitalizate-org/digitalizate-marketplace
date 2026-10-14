#!/usr/bin/env node
// PreToolUse guard for Linear MCP writes. Reads the hook payload from stdin.
// Deny -> JSON permissionDecision "deny" with the reasons. Warn -> appended to .linear-method/warnings.log and surfaced by log.mjs after the call.
// Set LINEAR_METHOD_GUARD=off to bypass (logged). Set LINEAR_METHOD_ALLOW_URGENT=1 to allow Urgent without justification.
import { readFileSync, existsSync, mkdirSync, appendFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { evaluateToolCall, toolKind } from "./rules.mjs";

function readStdin() {
  try { return readFileSync(0, "utf8"); } catch { return ""; }
}

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const stateDir = join(projectDir, ".linear-method");
const payload = (() => { try { return JSON.parse(readStdin() || "{}"); } catch { return {}; } })();
const toolName = String(payload.tool_name ?? "");
const input = payload.tool_input ?? {};

if (process.env.LINEAR_METHOD_GUARD === "off") {
  try { mkdirSync(stateDir, { recursive: true }); appendFileSync(join(stateDir, "mcp-writes.log"), JSON.stringify({ at: new Date().toISOString(), tool: toolName, guard: "bypassed" }) + "\n"); } catch {}
  process.exit(0);
}

let decisions = "";
for (const p of ["linear-decisions.md", ".linear-method/linear-decisions.md", "docs/linear-decisions.md"]) {
  const f = join(projectDir, p);
  if (existsSync(f)) { decisions = readFileSync(f, "utf8"); break; }
}
const READER_RE = /^\s*-?\s*`?issue\.primary_reader`?\s*:\s*`?(technical|business|external)`?\s*$/mi;
const writingConfig = (() => {
  for (const b of decisions.matchAll(/```json\s*\n([\s\S]*?)```/g)) {
    try { const obj = JSON.parse(b[1]); if (obj && typeof obj === "object" && obj.writing && typeof obj.writing === "object") return obj.writing; } catch {}
  }
  return {};
})();
const positive = (v, fallback) => (typeof v === "number" && Number.isFinite(v) && v > 0 ? v : fallback);
const batchMinutes = positive(writingConfig.subissue_batch_minutes, 10);
function recentSiblings(parentId) {
  if (!parentId) return 0;
  const log = join(stateDir, "mcp-writes.log");
  try {
    const since = Date.now() - batchMinutes * 60_000;
    let n = 0;
    for (const line of readFileSync(log, "utf8").split("\n").slice(-500)) {
      try {
        const rec = JSON.parse(line);
        if (toolKind(String(rec.tool ?? "")) === "issue" && rec.input?.parentId === parentId && !rec.input?.id && new Date(rec.at).getTime() >= since) n++;
      } catch {}
    }
    return n;
  } catch { return 0; }
}
const ctx = {
  typeLabelRequired: /Type\s*\(required\)/i.test(decisions),
  allowUrgent: process.env.LINEAR_METHOD_ALLOW_URGENT === "1",
  primaryReader: READER_RE.exec(decisions)?.[1].toLowerCase(),
  descriptionMaxChars: positive(writingConfig.description_max_chars, 2500),
  batchCount: positive(writingConfig.subissue_batch_count, 5),
  batchMinutes,
  recentSiblings: recentSiblings(input.parentId),
};

const results = evaluateToolCall(toolName, input, ctx);
const denies = results.filter((r) => r.level === "deny");
const warns = results.filter((r) => r.level === "warn");

if (warns.length) {
  try {
    mkdirSync(stateDir, { recursive: true });
    const key = createHash("sha1").update(toolName + JSON.stringify(input)).digest("hex").slice(0, 12);
    appendFileSync(join(stateDir, "warnings.log"), JSON.stringify({ at: new Date().toISOString(), key, tool: toolName, warnings: warns }) + "\n");
  } catch {}
}

if (denies.length) {
  const reason = `Blocked by digitalizate-linear-method guard:\n` + denies.map((d) => `- ${d.id}: ${d.message}`).join("\n") + (warns.length ? `\nAlso: ` + warns.map((w) => `${w.id}: ${w.message}`).join("; ") : "") + `\nFix the input and call the tool again. See skills/linear-library/references for the rules.`;
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: reason } }));
  process.stderr.write(reason + "\n");
  process.exit(0);
}
process.exit(0);
