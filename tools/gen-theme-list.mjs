#!/usr/bin/env node
// Scan a themes directory and output a JSON array of theme names (no extension).
// Excludes theme.css (the base variables file).
//
// Usage: node tools/gen-theme-list.mjs themes > playground/themes.json

import { globSync } from "node:fs";
import { basename } from "node:path";

const dir = process.argv[2];
if (!dir) {
  console.error("Usage: gen-theme-list.mjs <themes-dir>");
  process.exit(1);
}

const names = globSync("*.css", { cwd: dir })
  .map((f) => basename(f, ".css"))
  .filter((n) => n !== "theme")
  .sort();

// Match the compact ", "-separated form of Python's json.dumps.
process.stdout.write("[" + names.map((n) => JSON.stringify(n)).join(", ") + "]\n");
