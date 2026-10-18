# margaui

A [daisyUI](https://daisyui.com/)-compatible component library built natively on Tailwind CSS v4, with a Tailwind compiler that runs entirely in the browser.

- **68 components, 35 themes** — same class names and markup as daisyUI, so daisyUI docs and examples apply.
- **No build step** — import one ES module, pass it class names, get back only the CSS you use.
- **Or use the Tailwind CLI** — every component is a plain Tailwind v4 `@utility` file.

**Try it:** clone the repo, run `npx serve .` and open [`/playground/`](playground/) (every component, with HTML/CSS and an editor) or [`/editor/`](editor/) (live HTML editor).

## Install

```sh
npm install margaui
```

Or load it from a CDN (pin a version in production):

```html
<script type="module">
  import { compile } from "https://cdn.jsdelivr.net/npm/margaui/dist/margaui.min.js";
</script>
```

The package contains `dist/margaui.min.js` (compiler + all components, ~500 KB) and `dist/themes/*.css`.

## Quick start

```html
<!doctype html>
<html data-theme="light">
  <head>
    <link rel="stylesheet" href="./themes/light.css" />
    <style id="margaui"></style>
  </head>
  <body>
    <button class="btn btn-primary">Hello margaui</button>

    <script type="module">
      import { compile } from "./margaui.min.js";
      document.getElementById("margaui").textContent = await compile(["btn", "btn-primary"]);
    </script>
  </body>
</html>
```

Serve the page over HTTP (`npx serve .`); ES modules don't load from `file://`. More examples (theme switcher, form, dashboard, editor) are in [`examples/`](examples/).

## API

`margaui.min.js` (`margaui.js` in the repo) exports:

| Export              | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| `compile(classes)`  | `Promise<string>` — CSS for the given class names (component and Tailwind utilities), tree-shaken. |
| `getCompiler()`     | `Promise<Compiler>` — shared compiler; `compiler.build(classes)` returns CSS synchronously.        |
| `buildInput(files)` | Advanced: builds the Tailwind input CSS from a VFS map, for custom compiler setups.                |

Use `getCompiler()` when compiling repeatedly (editors, dynamic UIs):

```js
const compiler = await getCompiler();
const css = compiler.build(["card", "card-body", "badge", "badge-primary"]);
```

The CSS includes Tailwind's preflight, and the compiler accepts any Tailwind v4 utility (`p-4`, `md:flex`, `hover:bg-primary`, …), not just margaui classes.

## Themes

Load **one theme file** (it provides the colors, radii and sizes the components need) and select it with `data-theme` on any element:

```html
<html data-theme="dracula">
  <head>
    <link rel="stylesheet" href="./themes/dracula.css" />
  </head>
</html>
```

`light.css` also applies to `:root`, so it works without `data-theme`. `theme.css` bundles `light` + `dark`. From a CDN: `https://cdn.jsdelivr.net/npm/margaui/dist/themes/<name>.css`.

Available: `light` `dark` `abyss` `acid` `aqua` `autumn` `black` `bumblebee` `business` `caramellatte` `cmyk` `coffee` `corporate` `cupcake` `cyberpunk` `dim` `dracula` `emerald` `fantasy` `forest` `garden` `halloween` `lemonade` `lofi` `luxury` `night` `nord` `pastel` `retro` `silk` `sunset` `synthwave` `valentine` `winter` `wireframe`.

To switch at runtime, fetch the theme file into a `<style>` and change `data-theme`:

```js
async function setTheme(name) {
  themeStyle.textContent = await fetch(`./themes/${name}.css`).then((r) => r.text());
  document.documentElement.dataset.theme = name;
}
```

With a bundler, theme files are exported as `margaui/themes/<name>.css`.

**Shadow DOM:** set `data-theme` on each shadow host (and update it when the page theme changes). A theme set on `<html>` does not reach inside the shadow root, because Tailwind pins the default (light) palette on `:host`; an explicit `data-theme` on the host overrides it. `editor/shell.js` shows a working setup with adopted stylesheets.

## Tailwind CLI

To build a static stylesheet with the official Tailwind v4 CLI, clone this repo (the npm package only ships the browser bundle) and use [`entry.css`](entry.css) as your input. It imports the base styles, the default themes and every component, so:

1. Point its `@source` line at your templates.
2. Remove the component imports you don't need, and add extra `@import "./themes/<name>.css"` lines for more themes.
3. Build:

```sh
npx @tailwindcss/cli -i entry.css -o style.css --watch
```

## Components

accordion · alert · aura · avatar · badge · breadcrumbs · button · calendar · card · carousel · chat · checkbox · collapse · countdown · diff · divider · dock · drawer · dropdown · fab · fieldset · file-input · filter · footer · hero · hover-3d · hover-gallery · indicator · input · join · kbd · label · link · list · loading · mask · megamenu · menu · mockup-browser · mockup-code · mockup-phone · mockup-window · modal · navbar · otp · pagination · progress · radial-progress · radio · range · rating · select · skeleton · stack · stat · status · steps · swap · tab · table · text-rotate · textarea · theme-controller · timeline · toast · toggle · tooltip · validator

See the [playground](playground/) for live examples, or the [daisyUI docs](https://daisyui.com/components/) for full usage. An AI-agent skill with per-component notes and examples lives in [`.claude/skills/margaui/`](.claude/skills/margaui/SKILL.md).

## Versioning

margaui tracks daisyUI releases. The version encodes the daisyUI version it is aligned with: `0.5750.0` → daisyUI **5.7.50**, `0.5704.0` → 5.7.4. The last number is for margaui-only fixes.

To port a new daisyUI release: diff its component CSS (`npm run diff-daisyui -- 5.7.50 5.8.0`), port the changes into `src/`, bump the version, then refresh the examples and generated files with `npm run sync-examples && npm run playground && npm run gen-skill`.

## Development

Requires Node 22+. Everything runs through npm scripts.

```sh
npm install
npx serve .   # then open /playground/ or /editor/
```

Generated files (`vfs.js`, `playground/*.json`, `.claude/skills/margaui/`) are committed; regenerate them after editing their sources. CI fails if they are out of date.

| Command                       | What it does                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `npm run playground`          | Regenerate `vfs.js`, `components.json` and `themes.json` after editing CSS/HTML      |
| `npm run gen-skill`           | Regenerate the agent skill from `tools/skill_meta.json` + playground examples        |
| `npm run check-sync`          | Check that `entry.css` imports every file in `src/` and `base/`                      |
| `npm run check-tw-version`    | Check that the bundled Tailwind matches the `tailwindcss` dependency                 |
| `npm run smoke-test-tw-cli`   | Compile `entry.css` with the Tailwind CLI                                            |
| `npm run format`              | Format with Prettier (`format-check` to verify only)                                 |
| `npm run dist`                | Build `dist/` (minified bundle, themes, examples)                                    |
| `npm run fetch-tw`            | Re-fetch and bundle Tailwind into `tailwindcss.js`                                   |
| `npm run diff-daisyui -- A B` | Diff upstream daisyUI component CSS between two versions, to port changes            |
| `npm run sync-examples`       | Update playground examples from the daisyUI docs gallery (`-- --dry-run` to preview) |

Adding or changing a component: see [`src/README.md`](src/README.md) for the conventions (theme-driven tokens, color variants, sizing) and the checklist.

### Project layout

```
src/          One @utility CSS file per component (see src/README.md)
base/         Shared base styles and tokens
themes/       Theme CSS files ([data-theme="…"] custom properties)
tw/           Tailwind v4 CSS sources served to the in-browser compiler
margaui.js    Public API: compile(), getCompiler(), buildInput()
twcompiler.js Wraps Tailwind's compiler, resolving imports from vfs.js
vfs.js        Generated: all CSS bundled as an ES module
playground/   Component browser (examples in playground/components/<name>/)
editor/       Live HTML editor
examples/     Standalone examples + README shipped in dist/
tools/        Build, generation and check scripts
entry.css     Tailwind CLI entry point (template for CLI users)
```

## License

MIT — see [LICENSE](LICENSE).

Built on the shoulders of [daisyUI](https://daisyui.com/) and [Tailwind CSS](https://tailwindcss.com/). If you find this project useful, please consider [supporting Tailwind CSS](https://tailwindcss.com/sponsor).
