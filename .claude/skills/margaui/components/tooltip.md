# tooltip

_hover/focus tooltip on any element_

## What it does

Hover/focus tooltip; content from `data-tip` or a child `tooltip-content` element.

## When to use

- Short hints on icon-only buttons or controls.
- For longer content panels, use **dropdown**.

## Core classes

`tooltip`; position `tooltip-top|bottom|left|right`; align `tooltip-start|center|end` (works with every position); color `tooltip-primary|…`; modifier `tooltip-open` to force-show; `data-tip="…"` for text content.

## Examples

### Tooltip

Source: `playground/components/tooltip/tooltip.html`

```html
<div class="my-6">
  <div class="tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
```

### Accent color

Source: `playground/components/tooltip/accent-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-accent" data-tip="accent">
    <button class="btn btn-accent">accent</button>
  </div>
</div>
```

### Bottom

Source: `playground/components/tooltip/bottom.html`

```html
<div class="my-6 flex flex-wrap gap-6">
  <div class="tooltip tooltip-open tooltip-bottom tooltip-start" data-tip="hello">
    <button class="btn">Bottom start</button>
  </div>
  <div class="tooltip tooltip-open tooltip-bottom" data-tip="hello">
    <button class="btn">Bottom</button>
  </div>
  <div class="tooltip tooltip-open tooltip-bottom tooltip-end" data-tip="hello">
    <button class="btn">Bottom end</button>
  </div>
</div>
```

### Error color

Source: `playground/components/tooltip/error-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-error" data-tip="error">
    <button class="btn btn-error">error</button>
  </div>
</div>
```

### Force open

Source: `playground/components/tooltip/force-open.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open" data-tip="hello">
    <button class="btn">Force open</button>
  </div>
</div>
```

### Info color

Source: `playground/components/tooltip/info-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-info" data-tip="info">
    <button class="btn btn-info">info</button>
  </div>
</div>
```

### Left

Source: `playground/components/tooltip/left.html`

```html
<div class="my-6 flex flex-col gap-6">
  <div class="tooltip tooltip-open tooltip-left tooltip-start" data-tip="hello">
    <button class="btn">Left start</button>
  </div>
  <div class="tooltip tooltip-open tooltip-left" data-tip="hello">
    <button class="btn">Left</button>
  </div>
  <div class="tooltip tooltip-open tooltip-left tooltip-end" data-tip="hello">
    <button class="btn">Left end</button>
  </div>
</div>
```

### Primary color

Source: `playground/components/tooltip/primary-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-primary" data-tip="primary">
    <button class="btn btn-primary">primary</button>
  </div>
</div>
```

### Responsive tooltip only show for large screen

Source: `playground/components/tooltip/responsive-tooltip-only-show-for-large-screen.html`

```html
<div class="my-6">
  <div class="lg:tooltip" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
```

### Responsive tooltip position

Source: `playground/components/tooltip/responsive-tooltip-position.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-start md:tooltip-right md:tooltip-center" data-tip="hello">
    <button class="btn">Hover me</button>
  </div>
</div>
```

### Right

Source: `playground/components/tooltip/right.html`

```html
<div class="my-6 flex items-end flex-col gap-6">
  <div class="tooltip tooltip-open tooltip-right tooltip-start" data-tip="hello">
    <button class="btn">Right start</button>
  </div>
  <div class="tooltip tooltip-open tooltip-right" data-tip="hello">
    <button class="btn">Right</button>
  </div>
  <div class="tooltip tooltip-open tooltip-right tooltip-end" data-tip="hello">
    <button class="btn">Right end</button>
  </div>
</div>
```

### Secondary color

Source: `playground/components/tooltip/secondary-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-secondary" data-tip="secondary">
    <button class="btn btn-secondary">secondary</button>
  </div>
</div>
```

### Success color

Source: `playground/components/tooltip/success-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-success" data-tip="success">
    <button class="btn btn-success">success</button>
  </div>
</div>
```

### Tooltip with tooltip content

Source: `playground/components/tooltip/tooltip-with-tooltip-content.html`

```html
<div class="my-6 mt-12">
  <div class="tooltip">
    <div class="tooltip-content">
      <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
    </div>
    <button class="btn">Hover me</button>
  </div>
</div>
```

### Top

Source: `playground/components/tooltip/top.html`

```html
<div class="my-6 flex flex-wrap gap-6">
  <div class="tooltip tooltip-open tooltip-top tooltip-start" data-tip="hello">
    <button class="btn">Top start</button>
  </div>
  <div class="tooltip tooltip-open tooltip-top" data-tip="hello">
    <button class="btn">Top</button>
  </div>
  <div class="tooltip tooltip-open tooltip-top tooltip-end" data-tip="hello">
    <button class="btn">Top end</button>
  </div>
</div>
```

### Warning color

Source: `playground/components/tooltip/warning-color.html`

```html
<div class="my-6">
  <div class="tooltip tooltip-open tooltip-warning" data-tip="warning">
    <button class="btn btn-warning">warning</button>
  </div>
</div>
```
