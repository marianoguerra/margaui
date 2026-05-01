# toggle

_on/off switch (styled checkbox)_

## What it does

Sliding on/off switch — a styled `<input type="checkbox">`.

## When to use

- Boolean settings where switch metaphor fits.
- For multi-select lists, use **checkbox**.

## Core classes

`toggle`; color `toggle-primary|secondary|accent|info|success|warning|error|neutral`; size `toggle-xs|sm|md|lg|xl`.

## Examples

### Colors

Source: `playground/components/toggle/colors.html`

```html
<input type="checkbox" checked="checked" class="toggle toggle-primary" />
<input type="checkbox" checked="checked" class="toggle toggle-secondary" />
<input type="checkbox" checked="checked" class="toggle toggle-accent" />
<input type="checkbox" checked="checked" class="toggle toggle-neutral" />

<input type="checkbox" checked="checked" class="toggle toggle-info" />
<input type="checkbox" checked="checked" class="toggle toggle-success" />
<input type="checkbox" checked="checked" class="toggle toggle-warning" />
<input type="checkbox" checked="checked" class="toggle toggle-error" />
```

### Disabled

Source: `playground/components/toggle/disabled.html`

```html
<input type="checkbox" class="toggle" disabled />
<input type="checkbox" class="toggle" disabled checked="checked" />
```

### Indeterminate

Source: `playground/components/toggle/indeterminate.html`

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-toggle").indeterminate = true
</script>
<input type="checkbox" class="toggle" id="my-toggle" />
```

### Sizes

Source: `playground/components/toggle/sizes.html`

```html
<input type="checkbox" checked="checked" class="toggle toggle-xs" />
<input type="checkbox" checked="checked" class="toggle toggle-sm" />
<input type="checkbox" checked="checked" class="toggle toggle-md" />
<input type="checkbox" checked="checked" class="toggle toggle-lg" />
<input type="checkbox" checked="checked" class="toggle toggle-xl" />
```

### Toggle switch

Source: `playground/components/toggle/toggle-switch.html`

```html
<input type="checkbox" checked="checked" class="toggle" />
```

### Toggle with custom colors

Source: `playground/components/toggle/toggle-with-custom-colors.html`

```html
<input
  type="checkbox"
  checked="checked"
  class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
```

### Toggle with icons inside

Source: `playground/components/toggle/toggle-with-icons-inside.html`

```html
<label class="toggle text-base-content">
  <input type="checkbox" />
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="4"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </g>
  </svg>
  <svg
    aria-label="disabled"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
</label>
```

### With fieldset and label

Source: `playground/components/toggle/with-fieldset-and-label.html`

```html
<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend class="fieldset-legend">Login options</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="toggle" />
    Remember me
  </label>
</fieldset>
```
