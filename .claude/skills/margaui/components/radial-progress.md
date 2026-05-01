# radial-progress

_circular progress indicator_

## What it does

Circular progress indicator driven by CSS custom properties (`--value`, `--size`, `--thickness`).

## When to use

- Compact circular progress, dashboards, KPIs.
- For linear progress, use **progress**.

## Core classes

`radial-progress` with `style="--value:N"` (and optional `--size`, `--thickness`); colors via standard `text-…`/`bg-…` utilities.

## Examples

### Radial progress

Source: `playground/components/radial-progress/radial-progress.html`

```html
<div class="radial-progress" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

### Custom color

Source: `playground/components/radial-progress/custom-color.html`

```html
<div class="radial-progress text-primary" style="--value:70;" aria-valuenow="70" role="progressbar">70%</div>
```

### Custom size and custom thickness

Source: `playground/components/radial-progress/custom-size-and-custom-thickness.html`

```html
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2px;" aria-valuenow="70" role="progressbar">70%</div>
<div class="radial-progress" style="--value:70; --size:12rem; --thickness: 2rem;" aria-valuenow="70" role="progressbar">70%</div>
```

### Different values

Source: `playground/components/radial-progress/different-values.html`

```html
<div class="radial-progress" style="--value:0;" aria-valuenow="0" role="progressbar">0%</div>
<div class="radial-progress" style="--value:20;" aria-valuenow="20" role="progressbar">20%</div>
<div class="radial-progress" style="--value:60;" aria-valuenow="60" role="progressbar">60%</div>
<div class="radial-progress" style="--value:80;" aria-valuenow="80" role="progressbar">80%</div>
<div class="radial-progress" style="--value:100;" aria-valuenow="100" role="progressbar">100%</div>
```

### With background color and border

Source: `playground/components/radial-progress/with-background-color-and-border.html`

```html
<div
  class="radial-progress bg-primary text-primary-content border-primary border-4"
  style="--value:70;" aria-valuenow="70" role="progressbar">
  70%
</div>
```
