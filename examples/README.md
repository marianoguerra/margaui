# margaui

A daisyUI-compatible component library for Tailwind CSS v4 that compiles in the browser. No build step: import one ES module, pass it class names, inject the CSS.

Docs, playground and source: https://github.com/marianoguerra/margaui

## Contents

```
margaui.min.js   Compiler + all components (~500 KB)
themes/          35 theme CSS files (theme.css = light + dark)
basic.html       Minimal example: buttons, badges, a card
themes.html      Runtime theme switching
form.html        Login page with form components
dashboard.html   Page layout: sidebar, navbar, stats, table
editor.html      Live HTML editor with built-in examples
```

Serve this folder over HTTP (e.g. `npx serve .`) and open the examples; ES modules don't load from `file://`.

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

## API

- `compile(classes)` → `Promise<string>`: CSS for the given class names (margaui components and any Tailwind v4 utility).
- `getCompiler()` → `Promise<Compiler>`: shared compiler for repeated use; `compiler.build(classes)` returns CSS synchronously.

```js
import { getCompiler } from "./margaui.min.js";

const compiler = await getCompiler();
const css = compiler.build(["card", "card-body", "p-4"]);
```

## Themes

Always load one theme file; set `data-theme` on any element to select it (`light` also applies without it). To switch at runtime, replace the theme CSS and the attribute:

```js
async function setTheme(name) {
  themeStyle.textContent = await fetch(`./themes/${name}.css`).then((r) => r.text());
  document.documentElement.dataset.theme = name;
}
```

Themes: `light` `dark` `abyss` `acid` `aqua` `autumn` `black` `bumblebee` `business` `caramellatte` `cmyk` `coffee` `corporate` `cupcake` `cyberpunk` `dim` `dracula` `emerald` `fantasy` `forest` `garden` `halloween` `lemonade` `lofi` `luxury` `night` `nord` `pastel` `retro` `silk` `sunset` `synthwave` `valentine` `winter` `wireframe`.

**Shadow DOM:** set `data-theme` on each shadow host; a theme on `<html>` does not reach inside the shadow root.

## Browser support

Same as Tailwind CSS v4: Chrome/Edge 111+, Safari 16.4+, Firefox 128+.
