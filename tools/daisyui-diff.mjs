#!/usr/bin/env node
// Diff two published daisyUI versions at the component level.
//
//   node tools/daisyui-diff.mjs 5.6.6 5.7.4 > docs/daisyui-5.6.6-to-5.7.4.diff
//
// The npm tarballs ship one minified line per component, so a raw diff is
// useless. This normalizes both trees first:
//
//   1. strip the `/*! daisyUI x.y.z */` banner (else every file "differs")
//   2. pretty-print with prettier so the diff is line-oriented
//   3. drop the `@media (width>=…)` blocks — daisyUI repeats every component
//      once per breakpoint prefix (sm:, md:, lg:, xl:, 2xl:), which inflates
//      the diff ~6x with copies of the same change
//
// Only components/ and utilities/ are diffed: base/, colors/ and theme/ are
// margaui's own (base/, themes/), and daisyui.css / chunks.css are bundles of
// the per-component files.

import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, mkdirSync, globSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import prettier from "prettier";

const [a, b] = process.argv.slice(2);
if (!a || !b) {
  console.error("usage: daisyui-diff.mjs <old-version> <new-version>");
  process.exit(1);
}

const DIRS = ["components", "utilities"];
const work = mkdtempSync(join(tmpdir(), "daisyui-diff-"));

function fetchVersion(version) {
  const dest = join(work, version);
  mkdirSync(dest, { recursive: true });
  const url = `https://registry.npmjs.org/daisyui/-/daisyui-${version}.tgz`;
  execFileSync("sh", ["-c", `curl -fsSL ${url} | tar xz -C ${dest}`], {
    stdio: ["ignore", "ignore", "inherit"],
  });
  return join(dest, "package");
}

async function normalize(src, out) {
  for (const dir of DIRS) {
    for (const f of globSync("**/*.css", { cwd: join(src, dir) })) {
      const raw = readFileSync(join(src, dir, f), "utf8").replace(/\/\*![^*]*\*\/\s*/g, "");
      let css = await prettier.format(raw, { parser: "css", printWidth: 100 });
      // cut the responsive-prefix duplicates; they restate the base block
      const cut = css.indexOf("\n  @media (width>=");
      if (cut !== -1) css = css.slice(0, cut) + "\n}\n";
      mkdirSync(dirname(join(out, dir, f)), { recursive: true });
      writeFileSync(join(out, dir, f), css);
    }
  }
}

try {
  const [oldSrc, newSrc] = [fetchVersion(a), fetchVersion(b)];
  const [oldOut, newOut] = [join(work, `n${a}`), join(work, `n${b}`)];
  await normalize(oldSrc, oldOut);
  await normalize(newSrc, newOut);

  let out = "";
  try {
    out = execFileSync("diff", ["-ru", oldOut, newOut], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (e) {
    // diff exits 1 when files differ — that is the expected path
    if (e.status !== 1) throw e;
    out = e.stdout;
  }
  // rewrite tmp paths to `<version>/<file>` and drop mtimes so the output is
  // stable across runs
  out = out
    .replaceAll(oldOut + "/", `${a}/`)
    .replaceAll(newOut + "/", `${b}/`)
    .replace(/^((?:---|\+\+\+) \S+)\t.*$/gm, "$1");
  process.stdout.write(`daisyUI ${a} -> ${b}: components/ and utilities/\n\n${out}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
