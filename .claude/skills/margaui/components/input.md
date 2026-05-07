# input

_themed text-style input wrapper_

## What it does

Themed wrapper for `<input>` with optional inner icon, label, and **validator** support.

## When to use

- Any single-line text input (text, email, search, password, number, date, etc.).
- For multi-line, use **textarea**.
- For dropdowns, use **select**.

## Core classes

`input`; color `input-primary|secondary|accent|info|success|warning|error|neutral`; style `input-ghost`; size `input-xs|sm|md|lg|xl`.

For inputs with leading/trailing content (icon, label, kbd, badge), wrap the `<input>` in a `<label class="input">`. The wrapper applies the field styling; the bare `<input>` inside inherits.

## Examples

### Plain input (canonical)

Source: `playground/components/input/text-input.html`

```html
<input type="text" placeholder="Type here" class="input" />
```

### All HTML5 input types

`class="input"` works on every `<input type="…">`.

```html
<input type="text" class="input" />
<input type="email" class="input" />
<input type="password" class="input" />
<input type="number" class="input" />
<input type="search" class="input" />
<input type="tel" class="input" />
<input type="url" class="input" />
<input type="date" class="input" />
<input type="time" class="input" />
<input type="datetime-local" class="input" />
```

### Sizes

```html
<input type="text" placeholder="Xsmall" class="input input-xs" />
<input type="text" placeholder="Small" class="input input-sm" />
<input type="text" placeholder="Medium" class="input input-md" />
<input type="text" placeholder="Large" class="input input-lg" />
<input type="text" placeholder="Xlarge" class="input input-xl" />
```

### Colors

```html
<input type="text" placeholder="Primary" class="input input-primary" />
<input type="text" placeholder="Error"   class="input input-error" />
<input type="text" placeholder="Ghost"   class="input input-ghost" />
```

### Disabled

```html
<input type="text" placeholder="You can't touch this" class="input" disabled />
```

### With icon (label wrapper)

```html
<label class="input">
  <!-- icon SVG (class="h-[1em] opacity-50") -->
  <input type="search" required placeholder="Search" />
</label>
```

### With label text and trailing kbd / badge

```html
<label class="input">
  <!-- search icon SVG -->
  <input type="search" class="grow" placeholder="Search" />
  <kbd class="kbd kbd-sm">⌘</kbd>
  <kbd class="kbd kbd-sm">K</kbd>
</label>

<label class="input">
  Path
  <input type="text" class="grow" placeholder="src/app/" />
  <span class="badge badge-neutral badge-xs">Optional</span>
</label>
```

### With validator

Add `validator` to the `<input>` (or its `<label>` wrapper) and use HTML5 validation attributes (`required`, `pattern`, `min`, `max`, `minlength`, `maxlength`). Pair with a `<p class="validator-hint">` (add `hidden` to keep it hidden until invalid).

```html
<label class="input validator">
  <!-- email icon SVG -->
  <input type="email" placeholder="mail@site.com" required />
</label>
<p class="validator-hint hidden">Enter a valid email address</p>

<input
  type="number"
  class="input validator"
  required min="1" max="10"
  placeholder="1 to 10"
  title="Must be between 1 and 10" />
<p class="validator-hint">Must be between 1 and 10</p>
```

Validator examples for password / username / URL / phone all follow the same shape: an icon-prefixed `<label class="input validator">`, an `<input>` with HTML5 validation attributes, and a `<p class="validator-hint">` underneath.

### Joined with a button

```html
<div class="join">
  <label class="input validator join-item">
    <!-- icon SVG -->
    <input type="email" placeholder="mail@site.com" required />
  </label>
  <button class="btn btn-neutral join-item">Join</button>
</div>
```

### With datalist suggestions

```html
<input type="text" class="input" placeholder="Which browser do you use" list="browsers" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
</datalist>
```

### With fieldset legend

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">What is your name?</legend>
  <input type="text" class="input" placeholder="Type here" />
  <p class="label">Optional</p>
</fieldset>
```
