# checkbox

_styled `<input type="checkbox">`_

## What it does

Themed replacement for the native checkbox.

## When to use

- Multi-select / boolean form fields.
- For a sliding on/off switch, use **toggle**.

## Core classes

`checkbox`; color `checkbox-primary|secondary|accent|info|success|warning|error|neutral`; size `checkbox-xs|sm|md|lg|xl`.

## Examples

### Checkbox

Source: `playground/components/checkbox/checkbox.html`

```html
<input type="checkbox" checked="checked" class="checkbox" />
```

### Checkbox with custom colors

Source: `playground/components/checkbox/checkbox-with-custom-colors.html`

```html
<input
  type="checkbox"
  checked="checked"
  class="checkbox border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
```

### Colors

Source: `playground/components/checkbox/colors.html`

```html
<input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
<input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
<input type="checkbox" checked="checked" class="checkbox checkbox-neutral" />

<input type="checkbox" checked="checked" class="checkbox checkbox-info" />
<input type="checkbox" checked="checked" class="checkbox checkbox-success" />
<input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
<input type="checkbox" checked="checked" class="checkbox checkbox-error" />
```

### Disabled

Source: `playground/components/checkbox/disabled.html`

```html
<input type="checkbox" class="checkbox" disabled />
<input type="checkbox" class="checkbox" disabled checked="checked" />
```

### Indeterminate

Source: `playground/components/checkbox/indeterminate.html`

```html
<!-- You can make a checkbox indeterminate using JS -->
<script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" class="checkbox" id="my-checkbox" />
```

### Sizes

Source: `playground/components/checkbox/sizes.html`

```html
<input type="checkbox" checked="checked" class="checkbox checkbox-xs" />
<input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
<input type="checkbox" checked="checked" class="checkbox checkbox-md" />
<input type="checkbox" checked="checked" class="checkbox checkbox-lg" />
<input type="checkbox" checked="checked" class="checkbox checkbox-xl" />
```

### With fieldset and label

Source: `playground/components/checkbox/with-fieldset-and-label.html`

```html
<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend class="fieldset-legend">Login options</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="checkbox" />
    Remember me
  </label>
</fieldset>
```
