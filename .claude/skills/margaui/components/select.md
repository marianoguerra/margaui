# select

_styled `<select>`_

## What it does

Themed `<select>` dropdown.

## When to use

- Single-choice form fields with many options.
- For visible single-choice (few options), use **radio**.

## Core classes

`select`; color `select-primary|secondary|accent|info|success|warning|error|neutral`; style `select-ghost`; size `select-xs|sm|md|lg|xl`.

## Examples

### Select

Source: `playground/components/select/select.html`

```html
<select class="select">
  <option disabled selected>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
</select>
```

### Accent color

Source: `playground/components/select/accent-color.html`

```html
<select class="select select-accent">
  <option selected disabled>Color scheme</option>
  <option>Light mode</option>
  <option>Dark mode</option>
  <option>System</option>
</select>
```

### Disabled

Source: `playground/components/select/disabled.html`

```html
<select class="select" disabled>
  <option>You can't touch this</option>
</select>
```

### Error color

Source: `playground/components/select/error-color.html`

```html
<select class="select select-error">
  <option disabled selected>Pick an AI Model</option>
  <option>GPT-4</option>
  <option>Claude</option>
  <option>Llama</option>
</select>
```

### Ghost no background

Source: `playground/components/select/ghost-no-background.html`

```html
<select class="select select-ghost">
  <option disabled selected>Pick a font</option>
  <option>Inter</option>
  <option>Poppins</option>
  <option>Raleway</option>
</select>
```

### Info color

Source: `playground/components/select/info-color.html`

```html
<select class="select select-info">
  <option disabled selected>Pick a Framework</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>
```

### Neutral color

Source: `playground/components/select/neutral-color.html`

```html
<select class="select select-neutral">
  <option disabled selected>Server location</option>
  <option>North America</option>
  <option>EU west</option>
  <option>South East Asia</option>
</select>
```

### Primary color

Source: `playground/components/select/primary-color.html`

```html
<select class="select select-primary">
  <option disabled selected>Pick a text editor</option>
  <option>VScode</option>
  <option>VScode fork</option>
  <option>Another VScode fork</option>
</select>
```

### Secondary color

Source: `playground/components/select/secondary-color.html`

```html
<select class="select select-secondary">
  <option disabled selected>Pick a language</option>
  <option>Zig</option>
  <option>Go</option>
  <option>Rust</option>
</select>
```

### Sizes

Source: `playground/components/select/sizes.html`

```html
<select class="select select-xs">
  <option disabled selected>Xsmall</option>
  <option>Xsmall Apple</option>
  <option>Xsmall Orange</option>
  <option>Xsmall Tomato</option>
</select>
<select class="select select-sm">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<select class="select select-md">
  <option disabled selected>Medium</option>
  <option>Medium Apple</option>
  <option>Medium Orange</option>
  <option>Medium Tomato</option>
</select>
<select class="select select-lg">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<select class="select select-xl">
  <option disabled selected>Xlarge</option>
  <option>Xlarge Apple</option>
  <option>Xlarge Orange</option>
  <option>Xlarge Tomato</option>
</select>
```

### Success color

Source: `playground/components/select/success-color.html`

```html
<select class="select select-success">
  <option disabled selected>Pick a Runtime</option>
  <option>npm</option>
  <option>Bun</option>
  <option>yarn</option>
</select>
```

### Using os native style for the options dropdown

Source: `playground/components/select/using-os-native-style-for-the-options-dropdown.html`

```html
<select class="select appearance-none">
  <option disabled selected>Pick a color</option>
  <option>Crimson</option>
  <option>Amber</option>
  <option>Velvet</option>
</select>
```

### Warning color

Source: `playground/components/select/warning-color.html`

```html
<select class="select select-warning">
  <option disabled selected>Pick an OS</option>
  <option>Windows</option>
  <option>MacOS</option>
  <option>Linux</option>
</select>
```

### With fieldset and labels

Source: `playground/components/select/with-fieldset-and-labels.html`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Browsers</legend>
  <select class="select">
    <option disabled selected>Pick a browser</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
  <span class="label">Optional</span>
</fieldset>
```
