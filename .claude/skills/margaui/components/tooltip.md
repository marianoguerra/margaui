# tooltip

_hover/focus tooltip on any element_

## What it does

Hover/focus tooltip; content from `data-tip` or a child `tooltip-content` element.

## When to use

- Short hints on icon-only buttons or controls.
- For longer content panels, use **dropdown**.

## Core classes

`tooltip`; position `tooltip-top|bottom|left|right`; color `tooltip-primary|…`; modifier `tooltip-open` to force-show; `data-tip="…"` for text content.

## Examples

### Tooltip

Source: `playground/components/tooltip/tooltip.html`

```html
<div class="tooltip" data-tip="hello">
  <button class="btn">Hover me</button>
</div>
```

### Accent color

Source: `playground/components/tooltip/accent-color.html`

```html
<div class="tooltip tooltip-open tooltip-accent" data-tip="accent">
  <button class="btn btn-accent">accent</button>
</div>
```

### Bottom

Source: `playground/components/tooltip/bottom.html`

```html
<div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
  <button class="btn">Bottom</button>
</div>
```

### Error color

Source: `playground/components/tooltip/error-color.html`

```html
<div class="tooltip tooltip-open tooltip-error" data-tip="error">
  <button class="btn btn-error">error</button>
</div>
```

### Force open

Source: `playground/components/tooltip/force-open.html`

```html
<div class="tooltip tooltip-open" data-tip="hello">
  <button class="btn">Force open</button>
</div>
```

### Info color

Source: `playground/components/tooltip/info-color.html`

```html
<div class="tooltip tooltip-open tooltip-info" data-tip="info">
  <button class="btn btn-info">info</button>
</div>
```

### Left

Source: `playground/components/tooltip/left.html`

```html
<div class="tooltip tooltip-open tooltip-left" data-tip="hello">
  <button class="btn">Left</button>
</div>
```

### Neutral color

Source: `playground/components/tooltip/neutral-color.html`

```html
<div class="tooltip tooltip-open tooltip-neutral" data-tip="neutral">
  <button class="btn btn-neutral">neutral</button>
</div>
```

### Primary color

Source: `playground/components/tooltip/primary-color.html`

```html
<div class="tooltip tooltip-open tooltip-primary" data-tip="primary">
  <button class="btn btn-primary">primary</button>
</div>
```

### Responsive tooltip only show for large screen

Source: `playground/components/tooltip/responsive-tooltip-only-show-for-large-screen.html`

```html
<div class="lg:tooltip" data-tip="hello">
  <button class="btn">Hover me</button>
</div>
```

### Right

Source: `playground/components/tooltip/right.html`

```html
<div class="tooltip tooltip-open tooltip-right" data-tip="hello">
  <button class="btn">Right</button>
</div>
```

### Secondary color

Source: `playground/components/tooltip/secondary-color.html`

```html
<div class="tooltip tooltip-open tooltip-secondary" data-tip="secondary">
  <button class="btn btn-secondary">secondary</button>
</div>
```

### Success color

Source: `playground/components/tooltip/success-color.html`

```html
<div class="tooltip tooltip-open tooltip-success" data-tip="success">
  <button class="btn btn-success">success</button>
</div>
```

### Tooltip with tooltip content

Source: `playground/components/tooltip/tooltip-with-tooltip-content.html`

```html
<div class="tooltip">
  <div class="tooltip-content">
    <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
  </div>
  <button class="btn">Hover me</button>
</div>
```

### Top

Source: `playground/components/tooltip/top.html`

```html
<div class="tooltip tooltip-open tooltip-top" data-tip="hello">
  <button class="btn">Top</button>
</div>
```

### Warning color

Source: `playground/components/tooltip/warning-color.html`

```html
<div class="tooltip tooltip-open tooltip-warning" data-tip="warning">
  <button class="btn btn-warning">warning</button>
</div>
```
