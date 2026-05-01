#!/usr/bin/env python3
"""Generate the margaui Claude skill at .claude/skills/margaui/.

Reads:
  - playground/components.json    (component list + example filenames)
  - playground/themes.json        (theme list)
  - playground/components/<name>/<file>.html  (example contents)
  - tools/skill_meta.json         (hand-written prose per component)

Writes:
  - .claude/skills/margaui/SKILL.md
  - .claude/skills/margaui/components/<name>.md  (one per component)

Components missing from skill_meta.json get a stub. Stale generated files
(components no longer in components.json) are removed.
"""

import json
import os
import shutil
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
COMPONENTS_JSON = os.path.join(ROOT, "playground", "components.json")
THEMES_JSON = os.path.join(ROOT, "playground", "themes.json")
META_JSON = os.path.join(os.path.dirname(__file__), "skill_meta.json")
PLAYGROUND_COMPONENTS = os.path.join(ROOT, "playground", "components")
SKILL_DIR = os.path.join(ROOT, ".claude", "skills", "margaui")
SKILL_FILE = os.path.join(SKILL_DIR, "SKILL.md")
COMP_DIR = os.path.join(SKILL_DIR, "components")


def humanize(filename):
    """`alert-with-buttons--responsive.html` -> `Alert with buttons (responsive)`."""
    name = filename[:-5] if filename.endswith(".html") else filename
    name = name.replace("--", " — ").replace("-", " ")
    return name[:1].upper() + name[1:]


def load_meta():
    with open(META_JSON) as f:
        meta = json.load(f)
    meta.pop("_comment", None)
    return meta


def stub_for(name):
    return {
        "short": f"TODO: one-line description of {name}",
        "what": f"TODO: 1–2 sentences on what `{name}` does.",
        "when": "- TODO: when to reach for this.\n- TODO: cross-reference any near-cousin component.",
        "classes": f"TODO: primary class (`{name}`?) and key modifiers.",
    }


def render_component(name, files, meta):
    info = meta.get(name) or stub_for(name)
    short = info.get("short", "").strip()
    what = info.get("what", "").strip()
    when = info.get("when", "").strip()
    classes = info.get("classes", "").strip()

    parts = [f"# {name}\n"]
    if short:
        parts.append(f"_{short}_\n")
    parts.append("## What it does\n")
    parts.append(what + "\n")
    parts.append("## When to use\n")
    parts.append(when + "\n")
    if classes:
        parts.append("## Core classes\n")
        parts.append(classes + "\n")

    parts.append("## Examples\n")

    # Basic example first (filename matches component name), rest in given order.
    basic = f"{name}.html"
    ordered = ([basic] if basic in files else []) + [f for f in files if f != basic]

    for fname in ordered:
        path = os.path.join(PLAYGROUND_COMPONENTS, name, fname)
        try:
            with open(path) as f:
                html = f.read().rstrip()
        except FileNotFoundError:
            print(f"WARN: missing example {path}", file=sys.stderr)
            continue
        parts.append(f"### {humanize(fname)}\n")
        parts.append(f"Source: `playground/components/{name}/{fname}`\n")
        parts.append("```html\n" + html + "\n```\n")

    return "\n".join(parts)


def render_index(components, themes, meta):
    todo_count = sum(1 for c in components if c["name"] not in meta)

    lines = [
        "---",
        "name: margaui",
        "description: Use when writing HTML/CSS that uses the margaui component library — Tailwind v4 utility classes like `btn`, `card`, `alert`, `modal`, `navbar`, `dropdown`, `toast`, themes via `data-theme`. margaui is API-compatible with daisyUI, so this skill also applies when working with daisyUI markup. Provides per-component usage notes and copy-paste examples.",
        "---",
        "",
        "# margaui",
        "",
        f"margaui is a Tailwind v4–native CSS component library: {len(components)} components defined as Tailwind v4 `@utility` classes, plus {len(themes)} themes selected via `data-theme` on any ancestor element.",
        "",
        "## Relationship to daisyUI",
        "",
        "margaui is **API-compatible with [daisyUI](https://daisyui.com/)**. The class names (`btn`, `btn-primary`, `card`, `card-body`, `alert-info`, `modal-box`, `dropdown-content`, …), modifier vocabulary, and DOM structure mirror daisyUI. Differences are implementation-level (Tailwind v4 native, in-browser compiler, `@supports` fallbacks for `color-mix`), not API-level.",
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
        f"`light` is the default — applied via `:root` and `:host`, so pages work without an explicit `data-theme`. {len(themes)} themes available: " + ", ".join(f"`{t}`" for t in themes) + ".",
        "",
        "## Conventions across components",
        "",
        f"- **Theme-driven colors.** Use semantic color utilities (`bg-base-100`, `bg-base-200`, `text-base-content`, `text-primary`, `bg-primary`, `text-primary-content`, etc.) rather than hard-coded palette colors — this keeps components correct across all {len(themes)} themes.",
        "- **Modifier suffixes are consistent.** Most components share the same vocabulary: color (`-primary`, `-secondary`, `-accent`, `-info`, `-success`, `-warning`, `-error`, `-neutral`, `-ghost`), style (`-outline`, `-soft`, `-dash`), size (`-xs`, `-sm`, `-md`, `-lg`, `-xl`), state (`-active`, `-disabled`).",
        "- **Tailwind utilities work normally.** Responsive prefixes (`sm:`, `md:`, …), state variants (`hover:`, `focus:`, …), and arbitrary values all compose with margaui classes.",
        "- **`@utility` classes, not `@apply`.** Internally components are defined with Tailwind v4's `@utility` directive, so they tree-shake on demand and can be combined freely.",
        "",
        "## Component index",
        "",
        "Read the linked file when the user's task involves that component. Each file has _What it does_, _When to use_, _Core classes_, and copy-paste HTML examples drawn from `playground/components/<name>/`.",
        "",
    ]

    for c in components:
        name = c["name"]
        info = meta.get(name) or stub_for(name)
        short = info.get("short", "").strip().splitlines()[0]
        lines.append(f"- [{name}](components/{name}.md) — {short}")

    lines.append("")
    if todo_count:
        lines.append(f"<!-- {todo_count} component(s) still have TODO descriptions in tools/skill_meta.json. -->")
        lines.append("")

    return "\n".join(lines)


def write_if_changed(path, content):
    try:
        with open(path) as f:
            if f.read() == content:
                return False
    except FileNotFoundError:
        pass
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)
    return True


def main():
    with open(COMPONENTS_JSON) as f:
        components = json.load(f)
    with open(THEMES_JSON) as f:
        themes = json.load(f)
    meta = load_meta()

    os.makedirs(COMP_DIR, exist_ok=True)

    written = 0
    expected = set()
    for c in components:
        name = c["name"]
        files = c["files"]
        path = os.path.join(COMP_DIR, f"{name}.md")
        expected.add(f"{name}.md")
        if write_if_changed(path, render_component(name, files, meta)):
            written += 1

    # Remove stale component files (components no longer in components.json).
    removed = 0
    if os.path.isdir(COMP_DIR):
        for fname in os.listdir(COMP_DIR):
            if fname.endswith(".md") and fname not in expected:
                os.remove(os.path.join(COMP_DIR, fname))
                removed += 1

    index_changed = write_if_changed(SKILL_FILE, render_index(components, themes, meta))

    print(
        f"skill: {len(components)} components, "
        f"{written} component file(s) written, "
        f"{removed} stale removed, "
        f"index {'updated' if index_changed else 'unchanged'}"
    )

    missing = [c["name"] for c in components if c["name"] not in meta]
    if missing:
        print(f"  TODO prose for: {', '.join(missing)}", file=sys.stderr)


if __name__ == "__main__":
    main()
