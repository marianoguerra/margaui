# progress

_linear progress bar (`<progress>`)_

## What it does

Themed `<progress>` bar; supports indeterminate state when `value` is omitted.

## When to use

- Determinate progress (uploads, downloads, multi-step forms).
- For circular progress, use **radial-progress**.
- For pure spinners, use **loading**.

## Core classes

`progress`; color `progress-primary|secondary|accent|info|success|warning|error|neutral`.

## Examples

### Progress

Source: `playground/components/progress/progress.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress w-56" value="0" max="100"></progress>
  <progress class="progress w-56" value="10" max="100"></progress>
  <progress class="progress w-56" value="40" max="100"></progress>
  <progress class="progress w-56" value="70" max="100"></progress>
  <progress class="progress w-56" value="100" max="100"></progress>
</div>
```

### Accent color

Source: `playground/components/progress/accent-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-accent w-56" value="0" max="100"></progress>
  <progress class="progress progress-accent w-56" value="10" max="100"></progress>
  <progress class="progress progress-accent w-56" value="40" max="100"></progress>
  <progress class="progress progress-accent w-56" value="70" max="100"></progress>
  <progress class="progress progress-accent w-56" value="100" max="100"></progress>
</div>
```

### Error color

Source: `playground/components/progress/error-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-error w-56" value="0" max="100"></progress>
  <progress class="progress progress-error w-56" value="10" max="100"></progress>
  <progress class="progress progress-error w-56" value="40" max="100"></progress>
  <progress class="progress progress-error w-56" value="70" max="100"></progress>
  <progress class="progress progress-error w-56" value="100" max="100"></progress>
</div>
```

### Indeterminate without value

Source: `playground/components/progress/indeterminate-without-value.html`

```html
<progress class="progress w-56"></progress>
```

### Info color

Source: `playground/components/progress/info-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-info w-56" value="0" max="100"></progress>
  <progress class="progress progress-info w-56" value="10" max="100"></progress>
  <progress class="progress progress-info w-56" value="40" max="100"></progress>
  <progress class="progress progress-info w-56" value="70" max="100"></progress>
  <progress class="progress progress-info w-56" value="100" max="100"></progress>
</div>
```

### Neutral color

Source: `playground/components/progress/neutral-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-neutral w-56" value="0" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="10" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="40" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="70" max="100"></progress>
  <progress class="progress progress-neutral w-56" value="100" max="100"></progress>
</div>
```

### Primary color

Source: `playground/components/progress/primary-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-primary w-56" value="0" max="100"></progress>
  <progress class="progress progress-primary w-56" value="10" max="100"></progress>
  <progress class="progress progress-primary w-56" value="40" max="100"></progress>
  <progress class="progress progress-primary w-56" value="70" max="100"></progress>
  <progress class="progress progress-primary w-56" value="100" max="100"></progress>
</div>
```

### Secondary color

Source: `playground/components/progress/secondary-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-secondary w-56" value="0" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="10" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="40" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="70" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="100" max="100"></progress>
</div>
```

### Success color

Source: `playground/components/progress/success-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-success w-56" value="0" max="100"></progress>
  <progress class="progress progress-success w-56" value="10" max="100"></progress>
  <progress class="progress progress-success w-56" value="40" max="100"></progress>
  <progress class="progress progress-success w-56" value="70" max="100"></progress>
  <progress class="progress progress-success w-56" value="100" max="100"></progress>
</div>
```

### Warning color

Source: `playground/components/progress/warning-color.html`

```html
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-warning w-56" value="0" max="100"></progress>
  <progress class="progress progress-warning w-56" value="10" max="100"></progress>
  <progress class="progress progress-warning w-56" value="40" max="100"></progress>
  <progress class="progress progress-warning w-56" value="70" max="100"></progress>
  <progress class="progress progress-warning w-56" value="100" max="100"></progress>
</div>
```
