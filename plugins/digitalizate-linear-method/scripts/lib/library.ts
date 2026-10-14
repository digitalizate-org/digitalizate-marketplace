import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { parseFrontmatter, asString, asList, asNumber } from "./frontmatter.js";

export type Kind = "principle" | "practice" | "model" | "antipattern" | "signal";
export type Tier = "official-method" | "official-docs" | "linear-internal" | "evidence" | "interpretation" | "external-method";

export interface Source {
  title: string;
  url: string;
  date: string;
}

export interface Entry {
  id: string;
  title: string;
  kind: Kind;
  category: string;
  score: number;
  sourceTier: Tier;
  sources: Source[];
  useWhen: string;
  verify: string;
  verifiableBy: "query" | "data" | "judgment";
  measuredBy: string[];
  measures: string[];
  violates: string[];
  deviatesFrom: string[];
  check?: string;
  checkScope?: "team" | "workspace";
  severity?: "high" | "medium" | "low";
  tags: string[];
  status: string;
  file: string;
  body: string;
}

export function parseSource(raw: string): Source {
  const parts = raw.split("|").map((p) => p.trim());
  return { title: parts[0] ?? raw, url: parts[1] ?? "", date: parts[2] ?? "" };
}

export function loadLibrary(root: string): Entry[] {
  const entries: Entry[] = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith(".md") && /^LM-\d{3}/.test(name)) entries.push(loadEntry(root, p));
    }
  };
  walk(root);
  entries.sort((a, b) => a.id.localeCompare(b.id));
  const seen = new Set<string>();
  for (const e of entries) {
    if (seen.has(e.id)) throw new Error(`Duplicate id ${e.id} (${e.file})`);
    seen.add(e.id);
  }
  return entries;
}

export function loadEntry(root: string, file: string): Entry {
  const { frontmatter: fm, body } = parseFrontmatter(readFileSync(file, "utf8"));
  const id = asString(fm.id);
  if (!/^LM-\d{3}$/.test(id)) throw new Error(`Bad id in ${file}: ${id}`);
  const entry: Entry = {
    id,
    title: asString(fm.title),
    kind: asString(fm.kind) as Kind,
    category: asString(fm.category),
    score: asNumber(fm.score, 3),
    sourceTier: asString(fm.source_tier, "interpretation") as Tier,
    sources: asList(fm.sources).map(parseSource),
    useWhen: asString(fm.use_when),
    verify: asString(fm.verify),
    verifiableBy: (asString(fm.verifiable_by, "judgment") as Entry["verifiableBy"]),
    measuredBy: asList(fm.measured_by),
    measures: asList(fm.measures),
    violates: asList(fm.violates),
    deviatesFrom: asList(fm.deviates_from),
    check: fm.check === undefined ? undefined : asString(fm.check),
    checkScope: fm.check_scope === undefined ? undefined : (asString(fm.check_scope) as Entry["checkScope"]),
    severity: fm.severity === undefined ? undefined : (asString(fm.severity) as Entry["severity"]),
    tags: asList(fm.tags),
    status: asString(fm.status, "Active"),
    file: relative(root, file),
    body: body.trim(),
  };
  return entry;
}

export function section(body: string, heading: string): string {
  const re = new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=^## |\\Z)`, "m");
  const m = re.exec(body + "\n");
  return m ? m[1].trim() : "";
}
