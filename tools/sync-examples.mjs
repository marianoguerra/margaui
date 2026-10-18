#!/usr/bin/env node
// Sync playground/components/<name>/*.html with the daisyUI docs gallery.
//
//   node tools/sync-examples.mjs [ref] [--dry-run]
//
// `ref` is a daisyUI git ref; it defaults to the tag matching package.json's
// version (0.5750.0 -> v5.7.50), so examples track the ported CSS.
//
// Each docs example has live preview markup followed by an ```html code block.
// The code block is the canonical markup, but the preview often adds demo-only
// layout (a `w-full`, a `max-w-xs` form, an `h-64 relative` box for toasts)
// without which the playground renders it shrunk or unconstrained. So each
// example is written as the code block plus:
//
//   - wrapper elements the preview puts around it (peeled off the preview until
//     its tag structure matches the code), and
//   - layout classes (w-*, m-*, flex, gap-*, …) the preview has on the matching
//     element, unless the code already sets that property.
//
// Examples whose preview doesn't line up structurally get the code block as-is
// and are listed as "unaligned". Files with no upstream example are removed.
// Run `npm run playground && npm run gen-skill` afterwards.

import { readFileSync, readdirSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENTS = join(ROOT, "playground", "components");
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const ref = args.find((a) => !a.startsWith("--")) ?? defaultRef();
const BASE = `https://raw.githubusercontent.com/saadeghi/daisyui/${ref}/packages/docs/src/routes/(routes)/components/`;

const VOID = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);
const SVG_LEAF = new Set([
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "use",
  "stop",
]);
const LAYOUT =
  /^(?:(?:sm|md|lg|xl|2xl|max-sm|max-md|max-lg):)?-?(?:w-|max-w-|min-w-|h-|max-h-|min-h-|size-|m[trblxyse]?-|p[trblxyse]?-|relative$|flex$|flex-col$|flex-wrap$|gap-|items-|justify-|self-|place-|mx-auto$|overflow-|grid$|grid-cols-)/;

function defaultRef() {
  const [, digits] = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")).version.split(
    ".",
  );
  return `v${digits[0]}.${digits[1]}.${Number(digits.slice(2))}`;
}

// File names follow the docs titles: "Alert with buttons + responsive" -> alert-with-buttons--responsive.
const slug = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
const key = (s) =>
  s
    .toLowerCase()
    .replace(/\.html$/, "")
    .replace(/[^a-z0-9]/g, "");

// Tag tokens with source offsets.
function tokens(src) {
  const out = [];
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;
  for (const m of src.matchAll(re)) {
    if (m[0].startsWith("<!--")) continue;
    const name = m[2].toLowerCase();
    const isVoid = VOID.has(name) || SVG_LEAF.has(name);
    if (m[1] && isVoid) continue;
    out.push({
      name,
      close: !!m[1],
      selfClose: !!m[4] || isVoid,
      start: m.index,
      end: m.index + m[0].length,
      attrs: m[3],
    });
  }
  return out;
}

// Docs previews use <button> where the code block uses <a>; pair them anyway.
const signature = (toks) =>
  toks.map((t) => (t.close ? "/" : "") + (t.name === "button" ? "a" : t.name)).join(" ");
const classesOf = (t) =>
  (t.attrs.match(/\sclass="([^"]*)"/)?.[1] ?? "").split(/\s+/).filter(Boolean);
// "md:w-52" -> "md:w", so a preview class never overrides one the code sets.
const family = (c) => c.replace(/-(?:\[[^\]]*\]|[^-]+)$/, "");

// [startIdx, endIdx] token ranges of the top-level elements.
function topLevel(toks) {
  const res = [];
  let depth = 0;
  let start = 0;
  toks.forEach((t, i) => {
    if (t.close) {
      if (--depth === 0) res.push([start, i]);
    } else {
      if (depth === 0) start = i;
      if (!t.selfClose) depth++;
      else if (depth === 0) res.push([i, i]);
    }
  });
  return res;
}

// Peel single wrapper elements off the preview until it matches the code's structure.
function align(preview, code) {
  const codeToks = tokens(code);
  const target = signature(codeToks);
  let toks = tokens(preview);
  const wrappers = [];
  for (let depth = 0; depth < 4; depth++) {
    if (signature(toks) === target) return { codeToks, toks, wrappers };
    const top = topLevel(toks);
    if (top.length !== 1 || top[0][0] === top[0][1]) return null;
    const [a, b] = top[0];
    wrappers.push(preview.slice(toks[a].start, toks[a].end));
    toks = toks.slice(a + 1, b);
  }
  return null;
}

function withPreviewLayout(preview, code) {
  const aligned = align(preview, code);
  if (!aligned) return null;
  const { codeToks, toks, wrappers } = aligned;
  let html = code;
  let shift = 0;
  codeToks.forEach((t, i) => {
    if (t.close) return;
    const have = classesOf(t);
    const families = new Set(have.map(family));
    const extra = classesOf(toks[i]).filter(
      (c) => !have.includes(c) && LAYOUT.test(c) && !families.has(family(c)),
    );
    if (!extra.length) return;
    const tag = html.slice(t.start + shift, t.end + shift);
    const next = /\sclass="/.test(tag)
      ? tag.replace(
          /(\sclass=")([^"]*)"/,
          (_, attr, v) => `${attr}${v ? v + " " : ""}${extra.join(" ")}"`,
        )
      : tag.replace(/^<[\w-]+/, (open) => `${open} class="${extra.join(" ")}"`);
    html = html.slice(0, t.start + shift) + next + html.slice(t.end + shift);
    shift += next.length - tag.length;
  });
  for (const wrapper of wrappers.reverse()) {
    const name = wrapper.match(/^<([\w-]+)/)[1];
    const body = html.split("\n").map((l) => (l.trim() ? "  " + l : l));
    html = [wrapper, ...body, `</${name}>`].join("\n");
  }
  return html;
}

function examplesOf(md) {
  const seen = new Set();
  return md
    .split(/^### ~/m)
    .slice(1)
    .flatMap((part) => {
      const i = part.indexOf("```html");
      if (i < 0) return [];
      let title = part.split("\n")[0].trim();
      // Some pages reuse a title ("Stat" twice); number the repeats.
      for (let n = 2, base = title; seen.has(key(title)); n++) title = `${base} ${n}`;
      seen.add(key(title));
      const preview = part
        .slice(part.indexOf("\n") + 1, i)
        .replace(/^#{4,}.*$/gm, "")
        .trim();
      const code = part
        .slice(i + 8, part.indexOf("```", i + 8))
        .replaceAll("$$", "")
        .trimEnd();
      return [{ title, preview, code }];
    });
}

const counts = { updated: 0, created: 0, removed: 0, unchanged: 0 };
const unaligned = [];
const changes = [];
const comps = readdirSync(COMPONENTS).sort();
const pages = await Promise.all(comps.map((comp) => fetch(BASE + comp + "/+page.md")));
for (const [i, comp] of comps.entries()) {
  const res = pages[i];
  if (!res.ok) {
    console.warn(`${comp}: no docs page at ${ref} (HTTP ${res.status}), skipped`);
    continue;
  }
  const dir = join(COMPONENTS, comp);
  const ours = Object.fromEntries(readdirSync(dir).map((f) => [key(f), f]));
  const keep = new Set();
  for (const { title, preview, code } of examplesOf(await res.text())) {
    const file = ours[key(title)] ?? slug(title) + ".html";
    keep.add(file);
    let html = withPreviewLayout(preview, code);
    if (html === null) {
      unaligned.push(`${comp}/${file}`);
      html = code;
    }
    const path = join(dir, file);
    const before = existsSync(path) ? readFileSync(path, "utf8") : null;
    if (before === html) {
      counts.unchanged++;
      continue;
    }
    counts[before === null ? "created" : "updated"]++;
    changes.push(`${before === null ? "+" : "~"} ${comp}/${file}`);
    if (!DRY) writeFileSync(path, html);
  }
  for (const file of Object.values(ours)) {
    if (keep.has(file)) continue;
    counts.removed++;
    changes.push(`- ${comp}/${file}`);
    if (!DRY) unlinkSync(join(dir, file));
  }
}

for (const line of changes) console.log(line);
if (unaligned.length)
  console.log(`\nUsed the code block as-is (preview didn't line up):\n  ${unaligned.join("\n  ")}`);
console.log(
  `\ndaisyUI ${ref}: ${counts.updated} updated, ${counts.created} created, ${counts.removed} removed, ${counts.unchanged} unchanged${DRY ? " (dry run)" : ""}`,
);
