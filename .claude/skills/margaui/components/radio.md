# radio

_styled `<input type="radio">`_

## What it does

Themed replacement for the native radio button.

## When to use

- Single-choice form fields with all options visible.
- For dropdown single-choice, use **select**.

## Core classes

`radio`; color `radio-primary|secondary|accent|info|success|warning|error|neutral`; size `radio-xs|sm|md|lg|xl`.

## Examples

### Radio

Source: `playground/components/radio/radio.html`

```html
<input type="radio" name="radio-1" class="radio" checked="checked" />
<input type="radio" name="radio-1" class="radio" />
```

### Accent color

Source: `playground/components/radio/accent-color.html`

```html
<input type="radio" name="radio-6" class="radio radio-accent" checked="checked" />
<input type="radio" name="radio-6" class="radio radio-accent" />
```

### Disabled

Source: `playground/components/radio/disabled.html`

```html
<input type="radio" name="radio-11" class="radio" disabled checked="checked" />
<input type="radio" name="radio-11" class="radio" disabled />
```

### Error color

Source: `playground/components/radio/error-color.html`

```html
<input type="radio" name="radio-10" class="radio radio-error" checked="checked" />
<input type="radio" name="radio-10" class="radio radio-error" />
```

### Info color

Source: `playground/components/radio/info-color.html`

```html
<input type="radio" name="radio-9" class="radio radio-info" checked="checked" />
<input type="radio" name="radio-9" class="radio radio-info" />
```

### Neutral color

Source: `playground/components/radio/neutral-color.html`

```html
<input type="radio" name="radio-3" class="radio radio-neutral" checked="checked" />
<input type="radio" name="radio-3" class="radio radio-neutral" />
```

### Primary color

Source: `playground/components/radio/primary-color.html`

```html
<input type="radio" name="radio-4" class="radio radio-primary" checked="checked" />
<input type="radio" name="radio-4" class="radio radio-primary" />
```

### Radio sizes

Source: `playground/components/radio/radio-sizes.html`

```html
<input type="radio" name="radio-2" class="radio radio-xs" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-sm" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-md" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-lg" checked="checked" />
<input type="radio" name="radio-2" class="radio radio-xl" checked="checked" />
```

### Radio with custom colors

Source: `playground/components/radio/radio-with-custom-colors.html`

```html
<input
  type="radio" name="radio-12" checked="checked"
  class="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" />
<input
  type="radio" name="radio-12" checked="checked"
  class="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
```

### Secondary color

Source: `playground/components/radio/secondary-color.html`

```html
<input type="radio" name="radio-5" class="radio radio-secondary" checked="checked" />
<input type="radio" name="radio-5" class="radio radio-secondary" />
```

### Success color

Source: `playground/components/radio/success-color.html`

```html
<input type="radio" name="radio-7" class="radio radio-success" checked="checked" />
<input type="radio" name="radio-7" class="radio radio-success" />
```

### Warning color

Source: `playground/components/radio/warning-color.html`

```html
<input type="radio" name="radio-8" class="radio radio-warning" checked="checked" />
<input type="radio" name="radio-8" class="radio radio-warning" />
```
