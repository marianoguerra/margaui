# label

_input label (inline or floating)_

## What it does

Themed label, including a floating-label variant.

## When to use

- Labelling form inputs.

## Core classes

`label`, `floating-label`.

## Examples

### Floating label with different sizes

Source: `playground/components/label/floating-label-with-different-sizes.html`

```html
<label class="floating-label">
  <input type="text" placeholder="Extra Small" class="input input-xs" />
  <span>Extra Small</span>
</label>
<label class="floating-label">
  <input type="text" placeholder="Small" class="input input-sm" />
  <span>Small</span>
</label>
<label class="floating-label">
  <input type="text" placeholder="Medium" class="input input-md" />
  <span>Medium</span>
</label>
<label class="floating-label">
  <input type="text" placeholder="Large" class="input input-lg" />
  <span>Large</span>
</label>
<label class="floating-label">
  <input type="text" placeholder="Extra Large" class="input input-xl" />
  <span>Extra Large</span>
</label>
```

### Floating label

Source: `playground/components/label/floating-label.html`

```html
<label class="floating-label">
  <span>Your Email</span>
  <input type="text" placeholder="mail@site.com" class="input input-md" />
</label>
```

### Label for date input

Source: `playground/components/label/label-for-date-input.html`

```html
<label class="input">
  <span class="label">Publish date</span>
  <input type="date" />
</label>
```

### Label for input at the end

Source: `playground/components/label/label-for-input-at-the-end.html`

```html
<label class="input">
  <input type="text" placeholder="domain name" />
  <span class="label">.com</span>
</label>
```

### Label for input

Source: `playground/components/label/label-for-input.html`

```html
<label class="input">
  <span class="label">https://</span>
  <input type="text" placeholder="URL" />
</label>
```

### Label for select

Source: `playground/components/label/label-for-select.html`

```html
<label class="select">
  <span class="label">Type</span>
  <select>
    <option>Personal</option>
    <option>Business</option>
  </select>
</label>
```
