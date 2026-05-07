# kbd

_keyboard-key visual_

## What it does

Renders text as a keyboard key.

## When to use

- Documenting keyboard shortcuts inline with text.

## Core classes

`kbd`; size `kbd-xs|sm|md|lg|xl`.

## Examples

### Kbd (canonical)

Source: `playground/components/kbd/kbd.html`

```html
<kbd class="kbd">K</kbd>
```

### In text

```html
Press
<kbd class="kbd kbd-sm">F</kbd>
to pay respects.
```

### Sizes

```html
<kbd class="kbd kbd-xs">Xsmall</kbd>
<kbd class="kbd kbd-sm">Small</kbd>
<kbd class="kbd kbd-md">Medium</kbd>
<kbd class="kbd kbd-lg">Large</kbd>
<kbd class="kbd kbd-xl">Xlarge</kbd>
```

### Key combination

```html
<kbd class="kbd">ctrl</kbd>
+
<kbd class="kbd">shift</kbd>
+
<kbd class="kbd">del</kbd>
```

### Symbols (function keys, arrows)

```html
<kbd class="kbd">⌘</kbd>
<kbd class="kbd">⌥</kbd>
<kbd class="kbd">⇧</kbd>
<kbd class="kbd">⌃</kbd>
<kbd class="kbd">▲</kbd>
<kbd class="kbd">▼</kbd>
<kbd class="kbd">◀︎</kbd>
<kbd class="kbd">▶︎</kbd>
```
