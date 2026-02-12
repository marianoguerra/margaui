# margaui

CSS component library with an in-browser Tailwind v4 compiler. 66 components, 35 themes, zero build step needed for browser use.

## Quick start (browser)

Import `margaui.js` as an ES module, call `compile()` with class names, and inject the returned CSS. Works directly from a static file server — no Node or bundler required.

```html
<style id="margaui"></style>
<script type="module">
  import { compile } from "./margaui.js";
  const css = await compile(["btn", "btn-primary", "badge"]);
  document.getElementById("margaui").textContent = css;
</script>
```

## Quick start (CLI / Tailwind v4)

For traditional Tailwind workflows, create an `entry.css` input file and remove the components you don't need:

```css
/* entry.css */
@import "tailwindcss" source(none);

@source "./your-templates/**/*.html";

/* base */
@import "./base/properties.css";
@import "./base/rootcolor.css";
@import "./base/rootscrollgutter.css";
@import "./base/rootscrolllock.css";
@import "./base/scrollbar.css";

/* themes (light + dark bundled, add more individually) */
@import "./themes/theme.css";

/* components — remove the ones you don't need */
@import "./src/accordion.css";
@import "./src/alert.css";
@import "./src/avatar.css";
@import "./src/badge.css";
@import "./src/breadcrumbs.css";
@import "./src/button.css";
@import "./src/calendar.css";
@import "./src/card.css";
@import "./src/carousel.css";
@import "./src/chat.css";
@import "./src/checkbox.css";
@import "./src/collapse.css";
@import "./src/colors.css";
@import "./src/countdown.css";
@import "./src/diff.css";
@import "./src/divider.css";
@import "./src/dock.css";
@import "./src/drawer.css";
@import "./src/dropdown.css";
@import "./src/fab.css";
@import "./src/fieldset.css";
@import "./src/file-input.css";
@import "./src/filter.css";
@import "./src/footer.css";
@import "./src/hero.css";
@import "./src/hover-3d.css";
@import "./src/hover-gallery.css";
@import "./src/indicator.css";
@import "./src/input.css";
@import "./src/join.css";
@import "./src/kbd.css";
@import "./src/label.css";
@import "./src/link.css";
@import "./src/list.css";
@import "./src/loading.css";
@import "./src/mask.css";
@import "./src/menu.css";
@import "./src/mockup-browser.css";
@import "./src/mockup-code.css";
@import "./src/mockup-phone.css";
@import "./src/mockup-window.css";
@import "./src/modal.css";
@import "./src/navbar.css";
@import "./src/pagination.css";
@import "./src/progress.css";
@import "./src/radial-progress.css";
@import "./src/radio.css";
@import "./src/range.css";
@import "./src/rating.css";
@import "./src/select.css";
@import "./src/skeleton.css";
@import "./src/stack.css";
@import "./src/stat.css";
@import "./src/status.css";
@import "./src/steps.css";
@import "./src/swap.css";
@import "./src/tab.css";
@import "./src/table.css";
@import "./src/text-rotate.css";
@import "./src/textarea.css";
@import "./src/theme-controller.css";
@import "./src/timeline.css";
@import "./src/toast.css";
@import "./src/toggle.css";
@import "./src/tooltip.css";
@import "./src/validator.css";
```

Then compile with the Tailwind CLI:

```sh
npx @tailwindcss/cli -i entry.css -o style.css
```

Add `--watch` to recompile automatically on changes:

```sh
npx @tailwindcss/cli -i entry.css -o style.css --watch
```

## How it works

- Components are defined with Tailwind v4 `@utility` directives in `src/*.css`
- Themes are CSS custom property sets under `[data-theme="name"]` selectors
- `vfs.js` bundles all CSS into a virtual filesystem as an ES module
- `twcompiler.js` wraps Tailwind v4's compiler, resolving imports from the VFS
- `margaui.js` assembles the input CSS from VFS keys and exposes `compile()` / `getCompiler()`
- `compile(classes)` returns only the CSS needed for the given class names (tree-shaken)

## API

Exports from `margaui.js`:

### `compile(classes: string[]): Promise<string>`

One-shot compile. Returns the CSS for the given utility class names.

```js
const css = await compile(["btn", "btn-primary", "card", "card-body"]);
```

### `getCompiler(): Promise<Compiler>`

Returns the singleton compiler instance. Use `compiler.build(classes)` for repeated compilations without re-initializing.

```js
const compiler = await getCompiler();
const css1 = await compiler.build(["btn"]);
const css2 = await compiler.build(["badge", "badge-primary"]);
```

### `buildInput(entries): string`

Advanced. Builds the raw CSS input string from VFS entries. Useful if you need to customize which files are included before creating a compiler.

## Themes

35 themes available. Set the `data-theme` attribute on any element to switch themes:

```html
<html data-theme="dracula">
```

The `light` theme is the default — it sets `:root` and `:host` so pages work without an explicit `data-theme` attribute.

Available themes:

| | | | | |
|---|---|---|---|---|
| light | dark | abyss | acid | aqua |
| autumn | black | bumblebee | business | caramellatte |
| cmyk | coffee | corporate | cupcake | cyberpunk |
| dim | dracula | emerald | fantasy | forest |
| garden | halloween | lemonade | lofi | luxury |
| night | nord | pastel | retro | silk |
| sunset | synthwave | valentine | winter | wireframe |

`themes/theme.css` bundles just `light` + `dark` — import it for the common pair. For additional themes, import them individually:

```css
@import "./themes/theme.css";     /* light + dark */
@import "./themes/dracula.css";   /* add dracula */
```

### Loading themes

Theme files are **not included** in the default browser bundle (`margaui.js` / `vfs.js`). You need to load them separately.

**Link tag** — the simplest option. Just point a `<link>` at the theme file:

```html
<link rel="stylesheet" href="./themes/dracula.css">
<body data-theme="dracula">
```

**Fetch at runtime** — useful when switching themes dynamically:

```html
<script type="module">
  const css = await fetch("./themes/dracula.css").then(r => r.text());
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  document.body.setAttribute("data-theme", "dracula");
</script>
```

**Import in your CSS** — if you use the Tailwind CLI or build your own `input.css`, import theme files directly:

```css
@import "./themes/theme.css";     /* light + dark */
@import "./themes/dracula.css";   /* add more individually */
```

Then compile as usual with `npx @tailwindcss/cli -i input.css -o style.css`.

**Shadow DOM** — theme variables don't cross shadow boundaries by default. To propagate themes into shadow roots, use a shared `CSSStyleSheet` with `adoptedStyleSheets`. See the playground source for an example using `replaceSync()` to update all adopters on theme change.

## Components

66 components in `src/`:

| | | | | |
|---|---|---|---|---|
| accordion | alert | avatar | badge | breadcrumbs |
| button | calendar | card | carousel | chat |
| checkbox | collapse | colors | countdown | diff |
| divider | dock | drawer | dropdown | fab |
| fieldset | file-input | filter | footer | hero |
| hover-3d | hover-gallery | indicator | input | join |
| kbd | label | link | list | loading |
| mask | menu | mockup-browser | mockup-code | mockup-phone |
| mockup-window | modal | navbar | pagination | progress |
| radial-progress | radio | range | rating | select |
| skeleton | stack | stat | status | steps |
| swap | tab | table | text-rotate | textarea |
| theme-controller | timeline | toast | toggle | tooltip |
| validator | | | | |

Each component is defined using Tailwind v4's `@utility` directive, making them available as utility classes during compilation.

## Playground

Interactive preview of all components. Shows each component with Preview, HTML, and CSS tabs, a theme switcher, and compile-time stats.

## Editor

Live HTML editor with real-time preview. Write HTML in a textarea and see the compiled result instantly (100ms debounce). Includes a CSS tab showing generated output, compile-time and size stats, and a component loader to start from any existing example.

To run the playground and editor:

```sh
just playground           # generates VFS + component tree
python3 -m http.server    # serve from project root
# open http://localhost:8000/playground/
# open http://localhost:8000/editor/
```

## Project structure

```
src/          Component CSS files (@utility directives)
themes/       Theme CSS files (custom property sets)
base/         Base styles (properties, scrollbar, root color)
tw/           Tailwind v4 CSS entry points
playground/   Interactive component preview app
tools/        Build scripts (VFS generator, component tree, sync checker)
```

## Development

Requires [just](https://github.com/casey/just) as a command runner.

| Command | Description |
|---|---|
| `just playground` | Generate VFS + component tree for the playground |
| `just gen-vfs-dev` | Regenerate `vfs.js` from source CSS files |
| `just gen-component-tree` | Regenerate `playground/components.json` |
| `just dist` | Build minified distribution in `dist/` |
| `just check-sync` | Verify source files and imports are in sync |
| `just fetch-tw` | Re-fetch and bundle `tailwindcss.js` |

## License

MIT -- see [LICENSE](LICENSE) for details.

Built on the shoulders of [daisyUI](https://daisyui.com/) and [Tailwind CSS](https://tailwindcss.com/). If you find this project useful, please consider [supporting Tailwind CSS](https://tailwindcss.com/sponsor).
