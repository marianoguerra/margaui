# mockup-code

_terminal/code-block visual_

## What it does

Visual code-block / terminal frame with optional line prefix and highlighted line.

## When to use

- Showing code snippets in a styled frame.

## Core classes

`mockup-code`.

## Examples

### Highlighted line

Source: `playground/components/mockup-code/highlighted-line.html`

```html
<div class="mockup-code w-full">
  <pre data-prefix="1"><code>npm i daisyui</code></pre>
  <pre data-prefix="2"><code>installing...</code></pre>
  <pre data-prefix="3" class="bg-warning text-warning-content"><code>Error!</code></pre>
</div>
```

### Long line will scroll

Source: `playground/components/mockup-code/long-line-will-scroll.html`

```html
<div class="mockup-code w-full">
  <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
</div>
```

### Mockup code with line prefix

Source: `playground/components/mockup-code/mockup-code-with-line-prefix.html`

```html
<div class="mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

### Multi line

Source: `playground/components/mockup-code/multi-line.html`

```html
<div class="mockup-code w-full">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
</div>
```

### With color

Source: `playground/components/mockup-code/with-color.html`

```html
<div class="mockup-code bg-primary text-primary-content w-full">
  <pre><code>can be any color!</code></pre>
</div>
```

### Without prefix

Source: `playground/components/mockup-code/without-prefix.html`

```html
<div class="mockup-code w-full">
  <pre><code>without prefix</code></pre>
</div>
```
