# mockup

_chrome wrappers for screenshots: window, browser, phone, code_

## What it does

Decorative chrome wrappers used to frame UI screenshots, demos, or code blocks. Four variants share the same family:

- **mockup-window** — generic OS window chrome.
- **mockup-browser** — browser window with a URL toolbar.
- **mockup-phone** — phone frame with camera notch.
- **mockup-code** — terminal / code-block frame.

## When to use

- Marketing pages, landing pages, documentation showing UI in context.
- Use **mockup-code** any time you want a styled code frame with line prefixes.

## Core classes

- `mockup-window`
- `mockup-browser`; inner `mockup-browser-toolbar` (typically containing an `input` with the URL)
- `mockup-phone`; inner `mockup-phone-camera`, `mockup-phone-display`
- `mockup-code`; per-line `<pre data-prefix="…">` for line numbers/markers

Style with theme tokens: `border border-base-300`, `bg-base-100`, `bg-primary text-primary-content`, etc.

## Examples

### `mockup-window`

```html
<div class="mockup-window bg-base-100 border border-base-300 w-full">
  <div class="grid place-content-center h-80">Hello!</div>
</div>

<!-- With separating border between chrome and content -->
<div class="mockup-window border border-base-300 w-full">
  <div class="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</div>
```

### `mockup-browser`

The toolbar typically contains an `input` styled as a URL bar.

```html
<div class="mockup-browser border border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center h-80">Hello!</div>
</div>
```

### `mockup-phone`

```html
<!-- Plain phone frame -->
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display text-white grid place-content-center bg-neutral-900">
    It's Glowtime.
  </div>
</div>

<!-- Custom border color, image wallpaper -->
<div class="mockup-phone border-[#ff8938]">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">
    <img alt="wallpaper" src="…" />
  </div>
</div>
```

### `mockup-code`

Each `<pre>` is a line. `data-prefix` shows a gutter marker (`$`, `>`, `1`, `2`, …). Add color utilities to a `<pre>` to highlight a line.

```html
<!-- With prefix and a highlighted error line -->
<div class="mockup-code w-full">
  <pre data-prefix="1"><code>npm i daisyui</code></pre>
  <pre data-prefix="2"><code>installing...</code></pre>
  <pre data-prefix="3" class="bg-warning text-warning-content"><code>Error!</code></pre>
</div>

<!-- Multi-line with colored output prefixes -->
<div class="mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>

<!-- Long line scrolls horizontally -->
<div class="mockup-code w-full">
  <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemo ipsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>

<!-- Without prefix -->
<div class="mockup-code w-full">
  <pre><code>without prefix</code></pre>
</div>

<!-- Custom color -->
<div class="mockup-code bg-primary text-primary-content w-full">
  <pre><code>can be any color!</code></pre>
</div>
```
