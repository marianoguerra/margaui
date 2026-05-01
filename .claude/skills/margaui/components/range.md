# range

_styled `<input type="range">` slider_

## What it does

Themed range slider.

## When to use

- Numeric ranges where exact precision is less important than feel.

## Core classes

`range`; color `range-primary|secondary|accent|info|success|warning|error|neutral`; size `range-xs|sm|md|lg|xl`.

## Examples

### Range

Source: `playground/components/range/range.html`

```html
<input type="range" min="0" max="100" value="40" class="range" />
```

### Accent color

Source: `playground/components/range/accent-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-accent" />
```

### Error color

Source: `playground/components/range/error-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-error" />
```

### Info color

Source: `playground/components/range/info-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-info" />
```

### Neutral color

Source: `playground/components/range/neutral-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-neutral" />
```

### Primary color

Source: `playground/components/range/primary-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-primary" />
```

### Range with custom color and no fill

Source: `playground/components/range/range-with-custom-color-and-no-fill.html`

```html
<input type="range" min="0" max="100" value="40" 
  class="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" />
```

### Secondary color

Source: `playground/components/range/secondary-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-secondary" />
```

### Sizes

Source: `playground/components/range/sizes.html`

```html
<input type="range" min="0" max="100" value="30" class="range range-xs" />
<input type="range" min="0" max="100" value="40" class="range range-sm" />
<input type="range" min="0" max="100" value="50" class="range range-md" />
<input type="range" min="0" max="100" value="60" class="range range-lg" />
<input type="range" min="0" max="100" value="70" class="range range-xl" />
```

### Success color

Source: `playground/components/range/success-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-success" />
```

### Warning color

Source: `playground/components/range/warning-color.html`

```html
<input type="range" min="0" max="100" value="40" class="range range-warning" />
```

### With steps and measure

Source: `playground/components/range/with-steps-and-measure.html`

```html
<div class="w-full max-w-xs">
  <input type="range" min="0" max="100" value="25" class="range" step="25" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</div>
```
