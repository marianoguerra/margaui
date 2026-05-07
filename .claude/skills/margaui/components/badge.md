# badge

_small label / counter chip_

## What it does

Small chip used for counts, statuses, tags, or labels.

## When to use

- Inline with text or as a counter on buttons / icons.
- For a colored dot only (no text), use **status** instead.
- For positioned overlays on other elements, wrap in **indicator**.

## Core classes

`badge`; color `badge-primary|secondary|accent|info|success|warning|error|neutral|ghost`; style `badge-outline|dash|soft`; size `badge-xs|sm|md|lg|xl`.

Any color combines with any style and any size — they are independent modifier axes.

## Examples

### Badge (canonical)

Source: `playground/components/badge/badge.html`

```html
<span class="badge">Badge</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-outline badge-secondary">Outline</span>
<span class="badge badge-soft badge-accent">Soft</span>
<span class="badge badge-dash badge-info">Dash</span>
<span class="badge badge-ghost">Ghost</span>
```

### Sizes

```html
<div class="badge badge-xs">Xsmall</div>
<div class="badge badge-sm">Small</div>
<div class="badge badge-md">Medium</div>
<div class="badge badge-lg">Large</div>
<div class="badge badge-xl">Xlarge</div>
```

### Empty (dot-only)

```html
<div class="badge badge-primary badge-lg"></div>
<div class="badge badge-primary badge-sm"></div>
```

### Badge in a button

```html
<button class="btn">
  Inbox <div class="badge badge-sm badge-secondary">+99</div>
</button>
```

### Badge in a heading

Size the badge to match the heading.

```html
<h2 class="text-lg font-semibold">
  Heading 2 <span class="badge badge-lg">Badge</span>
</h2>
<h4 class="text-sm font-semibold">
  Heading 4 <span class="badge badge-sm">Badge</span>
</h4>
```

### Badge with icon

```html
<div class="badge badge-info">
  <!-- icon SVG (any source); use class="size-[1em]" so it scales with the badge -->
  Info
</div>
```

### Neutral on light backgrounds

`badge-neutral` with `outline` or `dash` reads better against a light surface.

```html
<div class="bg-white p-6">
  <div class="badge badge-neutral badge-outline">Outline</div>
  <div class="badge badge-neutral badge-dash">Dash</div>
</div>
```
