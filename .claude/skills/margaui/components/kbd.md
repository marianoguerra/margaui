# kbd

_keyboard-key visual_

## What it does

Renders text as a keyboard key.

## When to use

- Documenting keyboard shortcuts inline with text.

## Core classes

`kbd`; size `kbd-xs|sm|md|lg|xl`.

## Examples

### Kbd

Source: `playground/components/kbd/kbd.html`

```html
<kbd class="kbd">K</kbd>
```

### A full keyboard

Source: `playground/components/kbd/a-full-keyboard.html`

```html
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="kbd">q</kbd>
  <kbd class="kbd">w</kbd>
  <kbd class="kbd">e</kbd>
  <kbd class="kbd">r</kbd>
  <kbd class="kbd">t</kbd>
  <kbd class="kbd">y</kbd>
  <kbd class="kbd">u</kbd>
  <kbd class="kbd">i</kbd>
  <kbd class="kbd">o</kbd>
  <kbd class="kbd">p</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="kbd">a</kbd>
  <kbd class="kbd">s</kbd>
  <kbd class="kbd">d</kbd>
  <kbd class="kbd">f</kbd>
  <kbd class="kbd">g</kbd>
  <kbd class="kbd">h</kbd>
  <kbd class="kbd">j</kbd>
  <kbd class="kbd">k</kbd>
  <kbd class="kbd">l</kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <kbd class="kbd">z</kbd>
  <kbd class="kbd">x</kbd>
  <kbd class="kbd">c</kbd>
  <kbd class="kbd">v</kbd>
  <kbd class="kbd">b</kbd>
  <kbd class="kbd">n</kbd>
  <kbd class="kbd">m</kbd>
  <kbd class="kbd">/</kbd>
</div>
```

### Arrow keys

Source: `playground/components/kbd/arrow-keys.html`

```html
<div class="flex w-full justify-center">
  <kbd class="kbd">▲</kbd>
</div>
<div class="flex w-full justify-center gap-12">
  <kbd class="kbd">◀︎</kbd>
  <kbd class="kbd">▶︎</kbd>
</div>
<div class="flex w-full justify-center">
  <kbd class="kbd">▼</kbd>
</div>
```

### Function keys

Source: `playground/components/kbd/function-keys.html`

```html
<kbd class="kbd">⌘</kbd>
<kbd class="kbd">⌥</kbd>
<kbd class="kbd">⇧</kbd>
<kbd class="kbd">⌃</kbd>
```

### In text

Source: `playground/components/kbd/in-text.html`

```html
Press
<kbd class="kbd kbd-sm">F</kbd>
to pay respects.
```

### Kbd sizes

Source: `playground/components/kbd/kbd-sizes.html`

```html
<kbd class="kbd kbd-xs">Xsmall</kbd>
<kbd class="kbd kbd-sm">Small</kbd>
<kbd class="kbd kbd-md">Medium</kbd>
<kbd class="kbd kbd-lg">Large</kbd>
<kbd class="kbd kbd-xl">Xlarge</kbd>
```

### Key combination

Source: `playground/components/kbd/key-combination.html`

```html
<kbd class="kbd">ctrl</kbd>
+
<kbd class="kbd">shift</kbd>
+
<kbd class="kbd">del</kbd>
```
