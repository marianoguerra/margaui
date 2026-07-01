#!/usr/bin/env node
// Check that entry.css imports match actual files in src/ and base/.
//
// themes/ is not checked here: entry.css only ever imports the default
// themes/theme.css bundle (light + dark) by design, and every other theme
// file is discovered dynamically by tools/gen-theme-list.mjs, so there is
// no manual registration step to drift out of sync.

import { readFileSync, globSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const entry = join(root, "entry.css");

const DIRS = ["src", "base"];

// Imports in entry.css, grouped by the directory they reference.
const imported = Object.fromEntries(DIRS.map((d) => [d, new Set()]));
for (const line of readFileSync(entry, "utf8").split("\n")) {
  const m = line.match(/@import\s+"\.\/([^/]+)\/([^"]+)"/);
  if (m && m[1] in imported) imported[m[1]].add(`./${m[1]}/${m[2]}`);
}

let ok = true;
for (const name of DIRS) {
  const actual = new Set(
    globSync("*.css", { cwd: join(root, name) }).map((f) => `./${name}/${basename(f)}`),
  );
  const missing = [...actual].filter((f) => !imported[name].has(f)).sort();
  const extra = [...imported[name]].filter((f) => !actual.has(f)).sort();

  if (missing.length) {
    console.log(`Files in ${name}/ missing from entry.css:`);
    for (const f of missing) console.log(`  + ${f}`);
    ok = false;
  }
  if (extra.length) {
    console.log(`Imports in entry.css with no matching file in ${name}/:`);
    for (const f of extra) console.log(`  - ${f}`);
    ok = false;
  }
}

if (ok) console.log("entry.css is in sync with src/ and base/");
process.exit(ok ? 0 : 1);
