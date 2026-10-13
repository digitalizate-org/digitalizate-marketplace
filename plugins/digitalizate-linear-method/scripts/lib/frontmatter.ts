// Minimal YAML-subset frontmatter parser for library entries.
// Supports: `key: scalar`, `key: [a, b]`, and block lists (`key:` followed by `  - item`).
// Scalars: quoted strings, numbers, booleans. Nothing else is needed for the canon.

export type Scalar = string | number | boolean | null;
export type FrontmatterValue = Scalar | Scalar[];
export type Frontmatter = Record<string, FrontmatterValue>;

export interface ParsedEntry {
  frontmatter: Frontmatter;
  body: string;
}

function unquote(raw: string): string {
  const s = raw.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function scalar(raw: string): Scalar {
  const s = raw.trim();
  if (s === "") return "";
  if (s === "null" || s === "~") return null;
  if (s === "true") return true;
  if (s === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return unquote(s);
}

function inlineList(raw: string): Scalar[] {
  const inner = raw.trim().slice(1, -1).trim();
  if (inner === "") return [];
  // split on commas that are not inside quotes
  const parts: string[] = [];
  let cur = "";
  let quote: string | null = null;
  for (const ch of inner) {
    if (quote) {
      cur += ch;
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      cur += ch;
    } else if (ch === ",") {
      parts.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  if (cur.trim() !== "") parts.push(cur);
  return parts.map((p) => scalar(p));
}

export function parseFrontmatter(text: string): ParsedEntry {
  const normalized = text.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { frontmatter: {}, body: normalized };
  }
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) throw new Error("Unterminated frontmatter");
  const block = normalized.slice(4, end);
  const body = normalized.slice(end + 5);
  const fm: Frontmatter = {};
  const lines = block.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "" || line.trim().startsWith("#")) {
      i++;
      continue;
    }
    const m = /^([A-Za-z_][A-Za-z0-9_]*):(.*)$/.exec(line);
    if (!m) throw new Error(`Bad frontmatter line: ${line}`);
    const key = m[1];
    const rest = m[2];
    if (rest.trim() === "") {
      // block list
      const items: Scalar[] = [];
      i++;
      while (i < lines.length && /^\s+-\s/.test(lines[i])) {
        items.push(scalar(lines[i].replace(/^\s+-\s/, "")));
        i++;
      }
      fm[key] = items;
      continue;
    }
    if (rest.trim().startsWith("[")) {
      fm[key] = inlineList(rest);
    } else {
      fm[key] = scalar(rest);
    }
    i++;
  }
  return { frontmatter: fm, body };
}

export function asString(v: FrontmatterValue | undefined, fallback = ""): string {
  if (v === undefined || v === null) return fallback;
  if (Array.isArray(v)) return v.map(String).join(", ");
  return String(v);
}

export function asList(v: FrontmatterValue | undefined): string[] {
  if (v === undefined || v === null) return [];
  if (Array.isArray(v)) return v.map((x) => String(x));
  return [String(v)];
}

export function asNumber(v: FrontmatterValue | undefined, fallback = 0): number {
  if (typeof v === "number") return v;
  if (typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return fallback;
}
