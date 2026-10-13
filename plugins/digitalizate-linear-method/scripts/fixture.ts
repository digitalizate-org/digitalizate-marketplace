// Writes a synthetic workspace (healthy | messy) as raw.json + snapshot.json so the pipeline can be tried without an API key.
// Usage: npx tsx scripts/fixture.ts messy --out .linear-method/snapshot.json
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { computeSnapshot } from "./lib/metrics.js";
import { healthyWorkspace, messyWorkspace, NOW } from "../tests/helpers.js";

const kind = process.argv[2] ?? "messy";
const i = process.argv.indexOf("--out");
const out = i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : ".linear-method/snapshot.json";
const raw = kind === "healthy" ? healthyWorkspace() : messyWorkspace();
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(computeSnapshot(raw, NOW), null, 2));
writeFileSync(out.replace(/snapshot\.json$/, "raw.json"), JSON.stringify(raw));
console.log(`Wrote ${kind} fixture to ${out}`);
