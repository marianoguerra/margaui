#!/usr/bin/env node
// Fail if the vendored tailwindcss.js banner version differs from the
// tailwindcss version pinned in package.json. Catches the drift the old
// hardcoded-URL fetch-tw script allowed — without any network fetch.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const pinned = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")).devDependencies.tailwindcss;
const banner = readFileSync(join(ROOT, "tailwindcss.js"), "utf8").slice(0, 200);
const m = banner.match(/tailwindcss@([\d.]+)/);

if (!m) {
  console.error("tailwindcss.js has no version banner — run `npm run fetch-tw`");
  process.exit(1);
}
if (m[1] !== pinned) {
  console.error(`tailwindcss.js is ${m[1]} but package.json pins ${pinned} — run \`npm run fetch-tw\``);
  process.exit(1);
}
console.log(`tailwindcss.js matches pinned tailwindcss@${pinned}`);
