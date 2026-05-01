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
<progress class="progress w-56" value="0" max="100"></progress>
<progress class="progress w-56" value="10" max="100"></progress>
<progress class="progress w-56" value="40" max="100"></progress>
<progress class="progress w-56" value="70" max="100"></progress>
<progress class="progress w-56" value="100" max="100"></progress>
```

### Accent color

Source: `playground/components/progress/accent-color.html`

```html
<progress class="progress progress-accent w-56" value="0" max="100"></progress>
<progress class="progress progress-accent w-56" value="10" max="100"></progress>
<progress class="progress progress-accent w-56" value="40" max="100"></progress>
<progress class="progress progress-accent w-56" value="70" max="100"></progress>
<progress class="progress progress-accent w-56" value="100" max="100"></progress>
```

### Error color

Source: `playground/components/progress/error-color.html`

```html
<progress class="progress progress-error w-56" value="0" max="100"></progress>
<progress class="progress progress-error w-56" value="10" max="100"></progress>
<progress class="progress progress-error w-56" value="40" max="100"></progress>
<progress class="progress progress-error w-56" value="70" max="100"></progress>
<progress class="progress progress-error w-56" value="100" max="100"></progress>
```

### Indeterminate without value

Source: `playground/components/progress/indeterminate-without-value.html`

```html
<progress class="progress w-56"></progress>
```

### Info color

Source: `playground/components/progress/info-color.html`

```html
<progress class="progress progress-info w-56" value="0" max="100"></progress>
<progress class="progress progress-info w-56" value="10" max="100"></progress>
<progress class="progress progress-info w-56" value="40" max="100"></progress>
<progress class="progress progress-info w-56" value="70" max="100"></progress>
<progress class="progress progress-info w-56" value="100" max="100"></progress>
```

### Neutral color

Source: `playground/components/progress/neutral-color.html`

```html
<progress class="progress progress-neutral w-56" value="0" max="100"></progress>
<progress class="progress progress-neutral w-56" value="10" max="100"></progress>
<progress class="progress progress-neutral w-56" value="40" max="100"></progress>
<progress class="progress progress-neutral w-56" value="70" max="100"></progress>
<progress class="progress progress-neutral w-56" value="100" max="100"></progress>
```

### Primary color

Source: `playground/components/progress/primary-color.html`

```html
<progress class="progress progress-primary w-56" value="0" max="100"></progress>
<progress class="progress progress-primary w-56" value="10" max="100"></progress>
<progress class="progress progress-primary w-56" value="40" max="100"></progress>
<progress class="progress progress-primary w-56" value="70" max="100"></progress>
<progress class="progress progress-primary w-56" value="100" max="100"></progress>
```

### Secondary color

Source: `playground/components/progress/secondary-color.html`

```html
<progress class="progress progress-secondary w-56" value="0" max="100"></progress>
<progress class="progress progress-secondary w-56" value="10" max="100"></progress>
<progress class="progress progress-secondary w-56" value="40" max="100"></progress>
<progress class="progress progress-secondary w-56" value="70" max="100"></progress>
<progress class="progress progress-secondary w-56" value="100" max="100"></progress>
```

### Success color

Source: `playground/components/progress/success-color.html`

```html
<progress class="progress progress-success w-56" value="0" max="100"></progress>
<progress class="progress progress-success w-56" value="10" max="100"></progress>
<progress class="progress progress-success w-56" value="40" max="100"></progress>
<progress class="progress progress-success w-56" value="70" max="100"></progress>
<progress class="progress progress-success w-56" value="100" max="100"></progress>
```

### Warning color

Source: `playground/components/progress/warning-color.html`

```html
<progress class="progress progress-warning w-56" value="0" max="100"></progress>
<progress class="progress progress-warning w-56" value="10" max="100"></progress>
<progress class="progress progress-warning w-56" value="40" max="100"></progress>
<progress class="progress progress-warning w-56" value="70" max="100"></progress>
<progress class="progress progress-warning w-56" value="100" max="100"></progress>
```
