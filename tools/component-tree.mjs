#!/usr/bin/env node
// Scan playground/components/<name>/ directories, enumerate their .html
// examples (excluding index.html), and emit a JSON array with one entry
// per component: {"name": ..., "files": [...]}.
//
// Usage: node tools/component-tree.mjs playground/components > playground/components.json

import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const baseDir = process.argv[2];
if (!baseDir) {
  console.error("Usage: component-tree.mjs <base_dir>");
  process.exit(1);
}

const tree = [];
for (const name of readdirSync(baseDir).sort()) {
  const compDir = join(baseDir, name);
  try {
    if (!statSync(compDir).isDirectory()) continue;
  } catch {
    continue;
  }
  const files = readdirSync(compDir)
    .filter((f) => f.endsWith(".html") && f !== "index.html")
    .sort();
  if (files.length) tree.push({ name, files });
}

process.stdout.write(JSON.stringify(tree, null, 2) + "\n");
