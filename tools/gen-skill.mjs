#!/usr/bin/env node
// Generate the margaui Claude skill at .claude/skills/margaui/.
//
// Reads:
//   - playground/components.json    (component list + example filenames)
//   - playground/themes.json        (theme list)
//   - playground/components/<name>/<file>.html  (example contents)
//   - tools/skill_meta.json         (hand-written prose per component)
//
// Writes:
//   - .claude/skills/margaui/SKILL.md
//   - .claude/skills/margaui/components/<name>.md  (one per component)
//
// Components missing from skill_meta.json get a stub. Stale generated files
// (components no longer in components.json) are removed.

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..");
const COMPONENTS_JSON = join(ROOT, "playground", "components.json");
const THEMES_JSON = join(ROOT, "playground", "themes.json");
const META_JSON = join(HERE, "skill_meta.json");
const PLAYGROUND_COMPONENTS = join(ROOT, "playground", "components");
const SKILL_DIR = join(ROOT, ".claude", "skills", "margaui");
const SKILL_FILE = join(SKILL_DIR, "SKILL.md");
const COMP_DIR = join(SKILL_DIR, "components");

// `alert-with-buttons--responsive.html` -> `Alert with buttons (responsive)`.
function humanize(filename) {
  let name = filename.endsWith(".html") ? filename.slice(0, -5) : filename;
  name = name.replaceAll("--", " — ").replaceAll("-", " ");
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

function loadMeta() {
  const meta = JSON.parse(readFileSync(META_JSON, "utf8"));
  delete meta._comment;
  return meta;
}

function stubFor(name) {
  return {
    short: `TODO: one-line description of ${name}`,
    what: `TODO: 1–2 sentences on what \`${name}\` does.`,
    when: "- TODO: when to reach for this.\n- TODO: cross-reference any near-cousin component.",
    classes: `TODO: primary class (\`${name}\`?) and key modifiers.`,
  };
}

function renderComponent(name, files, meta) {
  const info = meta[name] || stubFor(name);
  const short = (info.short || "").trim();
  const what = (info.what || "").trim();
  const when = (info.when || "").trim();
  const classes = (info.classes || "").trim();

  const parts = [`# ${name}\n`];
  if (short) parts.push(`_${short}_\n`);
  parts.push("## What it does\n");
  parts.push(what + "\n");
  parts.push("## When to use\n");
  parts.push(when + "\n");
  if (classes) {
    parts.push("## Core classes\n");
    parts.push(classes + "\n");
  }

  parts.push("## Examples\n");

  // Basic example first (filename matches component name), rest in given order.
  const basic = `${name}.html`;
  const ordered = (files.includes(basic) ? [basic] : []).concat(files.filter((f) => f !== basic));

  for (const fname of ordered) {
    const path = join(PLAYGROUND_COMPONENTS, name, fname);
    let html;
    try {
      html = readFileSync(path, "utf8").replace(/\s+$/, "");
    } catch {
      console.error(`WARN: missing example ${path}`);
      continue;
    }
    parts.push(`### ${humanize(fname)}\n`);
    parts.push(`Source: \`playground/components/${name}/${fname}\`\n`);
    parts.push("```html\n" + html + "\n```\n");
  }

  return parts.join("\n");
}

function renderIndex(components, themes, meta) {
  const todoCount = components.filter((c) => !Object.hasOwn(meta, c.name)).length;

  const lines = [
    "---",
    "name: margaui",
    "description: Use when writing HTML/CSS that uses the margaui component library — Tailwind v4 utility classes like `btn`, `card`, `alert`, `modal`, `navbar`, `dropdown`, `toast`, themes via `data-theme`. margaui is API-compatible with daisyUI, so this skill also applies when working with daisyUI markup. Provides per-component usage notes and copy-paste examples.",
    "---",
    "",
    "# margaui",
    "",
    `margaui is a Tailwind v4–native CSS component library: ${components.length} components defined as Tailwind v4 \`@utility\` classes, plus ${themes.length} themes selected via \`data-theme\` on any ancestor element.`,
    "",
    "## Relationship to daisyUI",
    "",
    "margaui is **API-compatible with [daisyUI](https://daisyui.com/)** and currently tracks **daisyUI v5.6.6**. The class names (`btn`, `btn-primary`, `card`, `card-body`, `alert-info`, `modal-box`, `dropdown-content`, …), modifier vocabulary, and DOM structure mirror daisyUI. Differences are implementation-level (Tailwind v4 native, in-browser compiler, `@supports` fallbacks for `color-mix`), not API-level.",
    "",
    "Practical implication: **daisyUI documentation and examples are valid references** when this skill doesn't cover something. If a component is documented for daisyUI, the same markup works in margaui.",
    "",
    "## Themes",
    "",
    "Set on any element (most often `<html>` or `<body>`):",
    "",
    "```html",
    '<html data-theme="dracula">',
    "```",
    "",
    `\`light\` is the default — applied via \`:root\` and \`:host\`, so pages work without an explicit \`data-theme\`. ${themes.length} themes available: ` +
      themes.map((t) => `\`${t}\``).join(", ") +
      ".",
    "",
    "## Conventions across components",
    "",
    `- **Theme-driven colors.** Use semantic color utilities (\`bg-base-100\`, \`bg-base-200\`, \`text-base-content\`, \`text-primary\`, \`bg-primary\`, \`text-primary-content\`, etc.) rather than hard-coded palette colors — this keeps components correct across all ${themes.length} themes.`,
    "- **Modifier suffixes are consistent.** Most components share the same vocabulary: color (`-primary`, `-secondary`, `-accent`, `-info`, `-success`, `-warning`, `-error`, `-neutral`, `-ghost`), style (`-outline`, `-soft`, `-dash`), size (`-xs`, `-sm`, `-md`, `-lg`, `-xl`), state (`-active`, `-disabled`).",
    "- **Tailwind utilities work normally.** Responsive prefixes (`sm:`, `md:`, …), state variants (`hover:`, `focus:`, …), and arbitrary values all compose with margaui classes.",
    "- **`@utility` classes, not `@apply`.** Internally components are defined with Tailwind v4's `@utility` directive, so they tree-shake on demand and can be combined freely.",
    "- **Color modifiers are generated, not hand-written.** A component's color variants (`btn-primary`, `badge-success`, `alert-info`, …) resolve from the theme's 16 semantic colors via Tailwind v4's `--value(--color-*)`, so one definition per component covers every color and tracks the active `data-theme`.",
    "",
    "## Component index",
    "",
    "Read the linked file when the user's task involves that component. Each file has _What it does_, _When to use_, _Core classes_, and copy-paste HTML examples drawn from `playground/components/<name>/`.",
    "",
  ];

  for (const c of components) {
    const name = c.name;
    const info = meta[name] || stubFor(name);
    const short = (info.short || "").trim().split("\n")[0];
    lines.push(`- [${name}](components/${name}.md) — ${short}`);
  }

  lines.push("");
  if (todoCount) {
    lines.push(`<!-- ${todoCount} component(s) still have TODO descriptions in tools/skill_meta.json. -->`);
    lines.push("");
  }

  return lines.join("\n");
}

function writeIfChanged(path, content) {
  try {
    if (readFileSync(path, "utf8") === content) return false;
  } catch {
    // File doesn't exist yet.
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  return true;
}

function main() {
  const components = JSON.parse(readFileSync(COMPONENTS_JSON, "utf8"));
  const themes = JSON.parse(readFileSync(THEMES_JSON, "utf8"));
  const meta = loadMeta();

  mkdirSync(COMP_DIR, { recursive: true });

  let written = 0;
  const expected = new Set();
  for (const c of components) {
    const { name, files } = c;
    const path = join(COMP_DIR, `${name}.md`);
    expected.add(`${name}.md`);
    if (writeIfChanged(path, renderComponent(name, files, meta))) written++;
  }

  // Remove stale component files (components no longer in components.json).
  let removed = 0;
  try {
    for (const fname of readdirSync(COMP_DIR)) {
      if (fname.endsWith(".md") && !expected.has(fname)) {
        rmSync(join(COMP_DIR, fname));
        removed++;
      }
    }
  } catch {
    // Directory doesn't exist.
  }

  const indexChanged = writeIfChanged(SKILL_FILE, renderIndex(components, themes, meta));

  console.log(
    `skill: ${components.length} components, ` +
      `${written} component file(s) written, ` +
      `${removed} stale removed, ` +
      `index ${indexChanged ? "updated" : "unchanged"}`,
  );

  const missing = components.filter((c) => !Object.hasOwn(meta, c.name)).map((c) => c.name);
  if (missing.length) console.error(`  TODO prose for: ${missing.join(", ")}`);
}

main();
