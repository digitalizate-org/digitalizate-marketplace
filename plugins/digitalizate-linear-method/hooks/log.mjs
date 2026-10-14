#!/usr/bin/env node
// PostToolUse: records every Linear MCP write in .linear-method/mcp-writes.log (the audit trail, LM-091)
// and surfaces pending guard warnings for this call as additionalContext so the agent sees them.
import { readFileSync, existsSync, mkdirSync, appendFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

function readStdin() { try { return readFileSync(0, "utf8"); } catch { return ""; } }
const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const stateDir = join(projectDir, ".linear-method");
const payload = (() => { try { return JSON.parse(readStdin() || "{}"); } catch { return {}; } })();
const toolName = String(payload.tool_name ?? "");
const input = payload.tool_input ?? {};
const response = payload.tool_response;

const summary = {};
for (const k of ["id", "title", "name", "team", "project", "initiative", "lead", "assignee", "delegate", "priority", "state", "health", "labels", "addLabels", "targetDate", "cycle", "parentId"]) if (input[k] !== undefined) summary[k] = input[k];
const createdRef = (() => {
  try {
    const text = typeof response === "string" ? response : JSON.stringify(response ?? "");
    const m = /\b([A-Z][A-Z0-9]{1,6}-\d+|P-[A-Z0-9]+-\d+|I-\d+)\b/.exec(text);
    return m ? m[1] : null;
  } catch { return null; }
})();
try {
  mkdirSync(stateDir, { recursive: true });
  appendFileSync(join(stateDir, "mcp-writes.log"), JSON.stringify({ at: new Date().toISOString(), tool: toolName, owner: process.env.LINEAR_METHOD_RUN_OWNER ?? null, ref: createdRef, input: summary }) + "\n");
} catch {}

// Surface warnings recorded by guard.mjs for this exact call
const key = createHash("sha1").update(toolName + JSON.stringify(input)).digest("hex").slice(0, 12);
const warnFile = join(stateDir, "warnings.log");
let pending = [];
if (existsSync(warnFile)) {
  const lines = readFileSync(warnFile, "utf8").split("\n").filter(Boolean);
  const keep = [];
  for (const line of lines) {
    try { const rec = JSON.parse(line); if (rec.key === key) pending.push(...rec.warnings); else keep.push(line); } catch {}
  }
  try { writeFileSync(warnFile, keep.length ? keep.join("\n") + "\n" : ""); } catch {}
}
if (pending.length) {
  const text = `Linear Method guard warnings for ${toolName}${createdRef ? ` (${createdRef})` : ""}:\n` + pending.map((w) => `- ${w.id}: ${w.message}`).join("\n") + `\nConsider fixing these with a follow-up call.`;
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "PostToolUse", additionalContext: text } }));
}
process.exit(0);
