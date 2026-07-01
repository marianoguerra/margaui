#!/usr/bin/env node
// Bundle CSS (and aliased) files into an ES module: `export const entries = {...}`.
//
// Args are either glob patterns (matched relative to CWD) or explicit
// `key=path` aliases. Glob matches are keyed by "./" + their CWD-relative
// path; aliases are keyed verbatim. Matches within a glob are sorted for
// deterministic output.

import { readFileSync, globSync, statSync } from "node:fs";

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Usage: node make-vfs.mjs <glob1> [glob2] ... [key=path]");
  process.exit(1);
}

const entries = {};
for (const arg of args) {
  const eq = arg.indexOf("=");
  if (eq !== -1) {
    // Explicit alias: key=path
    const key = arg.slice(0, eq);
    const path = arg.slice(eq + 1);
    entries[key] = readFileSync(path, "utf8");
  } else {
    // Glob pattern
    for (const path of globSync(arg).sort()) {
      try {
        if (!statSync(path).isFile()) continue;
      } catch {
        continue;
      }
      entries["./" + path] = readFileSync(path, "utf8");
    }
  }
}

process.stdout.write(`export const entries = ${JSON.stringify(entries, null, 2)};\n`);
