#!/usr/bin/env node
// Refresh the vendored in-browser Tailwind build (tailwindcss.js).
//
// The version is read from package.json's devDependencies so it can never
// drift from the pinned tailwindcss (the old hardcoded-URL script could).
// Mirrors the previous `bun build --minify 'https://esm.sh/tailwindcss@X'`:
// esbuild bundles the esm.sh module graph (resolved over http) into a single
// minified ESM file that exports `compile` for twcompiler.js.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { build } from "esbuild";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const version = pkg.devDependencies.tailwindcss;
if (!version) {
  console.error("fetch-tw: no devDependencies.tailwindcss in package.json");
  process.exit(1);
}

// Resolve http(s) imports by fetching them (esm.sh serves the module graph).
const httpPlugin = {
  name: "http",
  setup(b) {
    b.onResolve({ filter: /^https?:\/\// }, (args) => ({ path: args.path, namespace: "http" }));
    b.onResolve({ filter: /.*/, namespace: "http" }, (args) => ({
      path: new URL(args.path, args.importer).toString(),
      namespace: "http",
    }));
    b.onLoad({ filter: /.*/, namespace: "http" }, async (args) => {
      const res = await fetch(args.path);
      if (!res.ok) throw new Error(`GET ${args.path} -> ${res.status}`);
      return { contents: await res.text(), loader: "js" };
    });
  },
};

const entry = `https://esm.sh/tailwindcss@${version}`;
console.error(`fetch-tw: bundling ${entry}`);

const result = await build({
  entryPoints: [entry],
  bundle: true,
  minify: true,
  format: "esm",
  write: false,
  plugins: [httpPlugin],
});

const out = join(ROOT, "tailwindcss.js");
const banner = `/* tailwindcss@${version} — vendored via tools/fetch-tw.mjs (esm.sh) */\n`;
writeFileSync(out, banner + result.outputFiles[0].text);
console.error(`fetch-tw: wrote tailwindcss.js (tailwindcss@${version})`);
