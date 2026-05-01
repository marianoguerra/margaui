# divider

_horizontal / vertical separator with optional label_

## What it does

Separator line with optional centered text and optional color.

## When to use

- Visually separating form sections, content blocks, sidebar groups.

## Core classes

`divider`; orientation `divider-horizontal|vertical`; position `divider-start|end`; color `divider-primary|secondary|accent|neutral|success|warning|info|error`.

## Examples

### Divider

Source: `playground/components/divider/divider.html`

```html
<div class="flex w-full flex-col">
  <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div class="divider">OR</div>
  <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
```

### Divider horizontal

Source: `playground/components/divider/divider-horizontal.html`

```html
<div class="flex w-full">
  <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <div class="divider divider-horizontal">OR</div>
  <div class="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>
```

### Divider in different positions horizontal

Source: `playground/components/divider/divider-in-different-positions-horizontal.html`

```html
<div class="flex w-full">
  <div class="divider divider-horizontal divider-start">Start</div>
  <div class="divider divider-horizontal">Default</div>
  <div class="divider divider-horizontal divider-end">End</div>
</div>
```

### Divider in different positions

Source: `playground/components/divider/divider-in-different-positions.html`

```html
<div class="flex w-full flex-col">
  <div class="divider divider-start">Start</div>
  <div class="divider">Default</div>
  <div class="divider divider-end">End</div>
</div>
```

### Divider with colors

Source: `playground/components/divider/divider-with-colors.html`

```html
<div class="flex w-full flex-col">
  <div class="divider">Default</div>
  <div class="divider divider-neutral">Neutral</div>
  <div class="divider divider-primary">Primary</div>
  <div class="divider divider-secondary">Secondary</div>
  <div class="divider divider-accent">Accent</div>
  <div class="divider divider-success">Success</div>
  <div class="divider divider-warning">Warning</div>
  <div class="divider divider-info">Info</div>
  <div class="divider divider-error">Error</div>
</div>
```

### Divider with no text

Source: `playground/components/divider/divider-with-no-text.html`

```html
<div class="flex w-full flex-col">
  <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div class="divider"></div>
  <div class="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
```

### Responsive lgdivider horizontal

Source: `playground/components/divider/responsive-lgdivider-horizontal.html`

```html
<div class="flex w-full flex-col lg:flex-row">
  <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <div class="divider lg:divider-horizontal">OR</div>
  <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>
```
