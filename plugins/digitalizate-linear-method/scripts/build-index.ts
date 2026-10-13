// Compiles library/ into skills/linear-library/{index,references}. Run: npm run build
import { mkdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadLibrary, type Entry } from "./lib/library.js";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const libraryDir = join(root, "library");
const outDir = join(root, "skills", "linear-library");
const indexDir = join(outDir, "index");
const refDir = join(outDir, "references");

const entries = loadLibrary(libraryDir);
for (const d of [indexDir, refDir]) {
  if (existsSync(d)) rmSync(d, { recursive: true });
  mkdirSync(d, { recursive: true });
}
mkdirSync(join(indexDir, "by-category"), { recursive: true });
mkdirSync(join(indexDir, "by-kind"), { recursive: true });

const byCategory = new Map<string, Entry[]>();
const byKind = new Map<string, Entry[]>();
for (const e of entries) {
  byCategory.set(e.category, [...(byCategory.get(e.category) ?? []), e]);
  byKind.set(e.kind, [...(byKind.get(e.kind) ?? []), e]);
}

const star = (n: number) => "★".repeat(n);
const indexLine = (e: Entry) =>
  `${e.id} · ${e.title} · ${star(e.score)} · ${e.kind} · ${e.sourceTier} · use: ${e.useWhen}`;

for (const [cat, list] of byCategory) {
  const lines = [`# ${cat}`, "", `${list.length} entries. Full text in references/${cat}.md`, ""];
  for (const e of list) lines.push(`- ${indexLine(e)}`);
  writeFileSync(join(indexDir, "by-category", `${cat}.md`), lines.join("\n") + "\n");
}
for (const [kind, list] of byKind) {
  const lines = [`# ${kind}`, "", `${list.length} entries.`, ""];
  for (const e of list) lines.push(`- ${indexLine(e)} · references/${e.category}.md`);
  writeFileSync(join(indexDir, "by-kind", `${kind}.md`), lines.join("\n") + "\n");
}

const tierCounts = new Map<string, number>();
for (const e of entries) tierCounts.set(e.sourceTier, (tierCounts.get(e.sourceTier) ?? 0) + 1);
const overview = [
  "# linear-library overview",
  "",
  `Build date: ${new Date().toISOString().slice(0, 10)}`,
  `Entries: ${entries.length}`,
  "",
  "## Categories",
  "",
  ...[...byCategory].map(([c, l]) => `- ${c}: ${l.length} entries → index/by-category/${c}.md, references/${c}.md`),
  "",
  "## Kinds",
  "",
  ...[...byKind].map(([k, l]) => `- ${k}: ${l.length} → index/by-kind/${k}.md`),
  "",
  "## Source tiers",
  "",
  ...[...tierCounts].map(([t, n]) => `- ${t}: ${n}`),
  "",
  "## Signals with automatic checks",
  "",
  ...entries.filter((e) => e.check).map((e) => `- ${e.id} (${e.checkScope}, ${e.severity}): \`${e.check}\` measures ${e.measures.join(", ")}`),
  "",
];
writeFileSync(join(indexDir, "_overview.md"), overview.join("\n") + "\n");

for (const [cat, list] of byCategory) {
  const out: string[] = [`# ${cat} (references)`, "", "Each entry is the full text of its library file. Cite by ID.", ""];
  for (const e of list) {
    out.push(`## ${e.id} ${e.title}`);
    out.push("");
    out.push(`Kind: ${e.kind} · Score: ${e.score} · Tier: ${e.sourceTier} · Verifiable by: ${e.verifiableBy}`);
    out.push(`Use when: ${e.useWhen}`);
    out.push(`Verify: ${e.verify}`);
    if (e.check) out.push(`Check: \`${e.check}\` (${e.checkScope}, severity ${e.severity})`);
    if (e.measuredBy.length) out.push(`Measured by: ${e.measuredBy.join(", ")}`);
    if (e.measures.length) out.push(`Measures: ${e.measures.join(", ")}`);
    if (e.violates.length) out.push(`Violates: ${e.violates.join(", ")}`);
    out.push(`Sources: ${e.sources.map((s) => `${s.title} (${s.url}, ${s.date})`).join("; ")}`);
    out.push(`File: library/${e.file}`);
    out.push("");
    out.push(e.body.replace(/^## /gm, "### "));
    out.push("");
  }
  writeFileSync(join(refDir, `${cat}.md`), out.join("\n") + "\n");
}

// Validation: referenced ids exist
const ids = new Set(entries.map((e) => e.id));
const problems: string[] = [];
for (const e of entries) {
  for (const ref of [...e.measuredBy, ...e.measures, ...e.violates]) {
    if (!ids.has(ref)) problems.push(`${e.id} references unknown ${ref}`);
  }
  if (e.kind === "signal" && (!e.check || !e.checkScope || !e.severity)) problems.push(`${e.id} signal missing check/scope/severity`);
}
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`Built ${entries.length} entries into ${outDir}`);
