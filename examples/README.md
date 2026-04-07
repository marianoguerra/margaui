# margaui

A CSS component library with an in-browser Tailwind v4 compiler. No build step, no npm, no CDN — just ES modules.

## What's Included

```
margaui.min.js    — Bundled compiler + component styles (~460KB)
themes/           — 35 pre-built theme CSS files
basic.html        — Minimal example (buttons, badges, card)
themes.html       — Dynamic theme switching demo
form.html         — Login page with form components
dashboard.html    — Realistic page layout (sidebar, stats, table)
editor.html       — Live editor with built-in examples
```

## Quick Start

Create an HTML file in the same directory as `margaui.min.js` and `themes/`:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./themes/light.css">
  <style id="margaui"></style>
</head>
<body>
  <button class="btn btn-primary">Hello margaui</button>

  <script type="module">
    import { compile } from "./margaui.min.js";
    document.getElementById("margaui").textContent =
      await compile(["btn", "btn-primary"]);
  </script>
</body>
</html>
```

> **Note:** ES modules require a web server. Opening `file://` URLs directly won't work.
> Use `python3 -m http.server` or any local server.

## API

### `compile(classes)` — One-shot compilation

Initializes the compiler (if needed) and compiles an array of class names into CSS. Returns a CSS string.

```js
import { compile } from "./margaui.min.js";

const css = await compile([
  "btn", "btn-primary", "btn-outline",
  "card", "card-body",
  "text-center", "p-4", "gap-2",
]);
document.getElementById("margaui").textContent = css;
```

### `getCompiler()` — Reusable compiler instance

Returns a compiler singleton. Use this when you need to compile multiple times (e.g., in an editor or dynamic UI).

```js
import { getCompiler } from "./margaui.min.js";

const compiler = await getCompiler();
const css1 = compiler.build(["btn", "btn-primary"]);
const css2 = compiler.build(["card", "card-body"]);
```

### `compiler.build(classes)`

Compiles an array of class names into CSS. Called on the compiler instance returned by `getCompiler()`.

## Themes

### Static theme (link tag)

The simplest approach — load a theme CSS file directly:

```html
<html data-theme="light">
<head>
  <link rel="stylesheet" href="./themes/light.css">
</head>
```

### Dynamic theme switching

Fetch and apply themes at runtime:

```js
import { getCompiler } from "./margaui.min.js";

const compiler = await getCompiler();

async function setTheme(name) {
  const css = await fetch(`./themes/${name}.css`).then(r => r.text());
  document.getElementById("theme-style").textContent = css;
  document.documentElement.setAttribute("data-theme", name);
}
```

### Available Themes (35)

| Light | Dark | Colorful |
|-------|------|----------|
| light | dark | acid |
| corporate | abyss | aqua |
| cupcake | black | bumblebee |
| emerald | business | cyberpunk |
| fantasy | coffee | halloween |
| garden | dim | synthwave |
| lemonade | dracula | valentine |
| lofi | forest | |
| nord | luxury | |
| pastel | night | |
| retro | sunset | |
| silk | | |
| winter | | |
| wireframe | | |
| autumn | | |
| caramellatte | | |
| cmyk | | |

### Theme in Shadow DOM

To propagate themes into shadow DOM (e.g., web components), use `adoptedStyleSheets`:

```js
function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ':root, :host, $1{');
}

const themeSheet = new CSSStyleSheet();
const css = await fetch("./themes/light.css").then(r => r.text());
themeSheet.replaceSync(adoptableThemeCss(css));

// Apply to shadow root
shadowRoot.adoptedStyleSheets = [themeSheet];
```

## Examples

| File | Description |
|------|-------------|
| `basic.html` | Minimal working example — buttons, badges, and a card with static theme |
| `themes.html` | Dynamic theme switching with color swatches and sample components |
| `form.html` | Hero login page with form fields, checkboxes, and social login buttons |
| `dashboard.html` | Full page layout with sidebar, navbar, stats cards, and data table |
| `editor.html` | Live editor with 8 built-in examples, preview, CSS output, and theme switching |

## Browser Support

Requires a browser that supports:

- ES modules (`<script type="module">`)
- Top-level `await`
- `CSSStyleSheet` constructor (for theme switching in shadow DOM)

All modern browsers (Chrome 89+, Firefox 89+, Safari 15+, Edge 89+) support these features.
