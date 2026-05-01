# collapse

_single show/hide region (details/summary or checkbox)_

## What it does

Single expandable region driven by `<details>`, a checkbox, or focus.

## When to use

- One-off show-more / read-more sections.
- For grouped single-open behavior across many items, use **accordion**.

## Core classes

`collapse`; modifiers `collapse-arrow|plus|open|close`; inner `collapse-title`, `collapse-content`.

## Examples

###  collapse using details and summary tag

Source: `playground/components/collapse/-collapse-using-details-and-summary-tag.html`

```html
<details class="collapse bg-base-100 border-base-300 border">
  <summary class="collapse-title font-semibold">How do I create an account?</summary>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</details>
```

### Collapse with checkbox

Source: `playground/components/collapse/collapse-with-checkbox.html`

```html
<div class="collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Collapse with focus

Source: `playground/components/collapse/collapse-with-focus.html`

```html
<div tabindex="0" class="collapse bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Custom colors for collapse that works with checkbox

Source: `playground/components/collapse/custom-colors-for-collapse-that-works-with-checkbox.html`

```html
<div class="bg-base-100 border-base-300 collapse border">
  <input type="checkbox" class="peer" />
  <div
    class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    How do I create an account?
  </div>
  <div
    class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Custom colors for collapse that works with focus

Source: `playground/components/collapse/custom-colors-for-collapse-that-works-with-focus.html`

```html
<div
  tabindex="0"
  class="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse"
>
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Force close

Source: `playground/components/collapse/force-close.html`

```html
<div tabindex="0" class="collapse collapse-close bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold">I have collapse-close class</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Force open

Source: `playground/components/collapse/force-open.html`

```html
<div tabindex="0" class="collapse collapse-open bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold">I have collapse-open class</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Moving collapse icon to the start

Source: `playground/components/collapse/moving-collapse-icon-to-the-start.html`

```html
<div tabindex="0" class="collapse collapse-arrow bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### With arrow icon

Source: `playground/components/collapse/with-arrow-icon.html`

```html
<div tabindex="0" class="collapse collapse-arrow bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### With arrow plusminus icon

Source: `playground/components/collapse/with-arrow-plusminus-icon.html`

```html
<div tabindex="0" class="collapse collapse-plus bg-base-100 border-base-300 border">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```

### Without border and background color

Source: `playground/components/collapse/without-border-and-background-color.html`

```html
<div tabindex="0" class="collapse">
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
```
