// Evaluates the library's signals against a snapshot. Writes .linear-method/findings.json and prints a markdown summary.
// Usage: npx tsx scripts/evaluate.ts [--snapshot .linear-method/snapshot.json] [--decisions linear-decisions.md] [--out .linear-method/findings.json] [--json]
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadLibrary } from "./lib/library.js";
import { evaluate, parseOverrides, renderMarkdown } from "./lib/evaluate-core.js";
import type { Snapshot } from "./lib/metrics.js";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (name: string, fallback: string) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : fallback; };
const snapshotPath = opt("--snapshot", ".linear-method/snapshot.json");
const outPath = opt("--out", ".linear-method/findings.json");
const decisionsPath = [opt("--decisions", ""), "linear-decisions.md", ".linear-method/linear-decisions.md", "docs/linear-decisions.md"].find((p) => p && existsSync(p));

const snapshot = JSON.parse(readFileSync(snapshotPath, "utf8")) as Snapshot;
const entries = loadLibrary(join(here, "..", "library"));
const decisions = decisionsPath ? readFileSync(decisionsPath, "utf8") : null;
const overrides = parseOverrides(decisions);
const exceptionIds = decisions ? extractExceptions(decisions) : [];

function extractExceptions(text: string): string[] {
  const m = /## Exceptions\s*\n([\s\S]*?)(?=\n## |$)/.exec(text);
  if (!m) return [];
  return [...m[1].matchAll(/\b(LM-\d{3})\b/g)].map((x) => x[1]);
}

const ev = evaluate(snapshot, entries, overrides, exceptionIds);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(ev, null, 2));
if (args.includes("--json")) console.log(JSON.stringify(ev, null, 2));
else console.log(renderMarkdown(ev, snapshot));
console.error(`Findings written to ${outPath}${decisionsPath ? ` (decisions: ${decisionsPath})` : " (no linear-decisions.md found)"}`);
