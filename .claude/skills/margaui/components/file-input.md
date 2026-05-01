# file-input

_styled file picker_

## What it does

Themed file-picker input.

## When to use

- File-upload form fields.

## Core classes

`file-input`; color `file-input-primary|…`; style `file-input-ghost`; size `file-input-xs|sm|md|lg|xl`.

## Examples

### File input

Source: `playground/components/file-input/file-input.html`

```html
<input type="file" class="file-input" />
```

### Disabled

Source: `playground/components/file-input/disabled.html`

```html
<input type="file" placeholder="You can't touch this" class="file-input" disabled />
```

### File input ghost

Source: `playground/components/file-input/file-input-ghost.html`

```html
<input type="file" class="file-input file-input-ghost" />
```

### Primary color

Source: `playground/components/file-input/primary-color.html`

```html
<input type="file" class="file-input file-input-primary" />
<input type="file" class="file-input file-input-secondary" />
<input type="file" class="file-input file-input-accent" />
<input type="file" class="file-input file-input-neutral" />
<input type="file" class="file-input file-input-info" />
<input type="file" class="file-input file-input-success" />
<input type="file" class="file-input file-input-warning" />
<input type="file" class="file-input file-input-error" />
```

### Sizes

Source: `playground/components/file-input/sizes.html`

```html
<input type="file" class="file-input file-input-xs" />

<input type="file" class="file-input file-input-sm" />

<input type="file" class="file-input file-input-md" />

<input type="file" class="file-input file-input-lg" />

<input type="file" class="file-input file-input-xl" />
```

### With fieldset and label

Source: `playground/components/file-input/with-fieldset-and-label.html`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Pick a file</legend>
  <input type="file" class="file-input" />
  <label class="label">Max size 2MB</label>
</fieldset>
```
