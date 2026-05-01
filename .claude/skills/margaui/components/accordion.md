# accordion

_collapsible sections (single-open via radio, free via details)_

## What it does

Vertically stacked, expandable sections that show one panel of content at a time.

## When to use

- Grouped FAQ-style content where most items stay collapsed.
- For a single show/hide region without grouping, use **collapse** instead.

## Core classes

`collapse` on each item, all sharing the same `name="…"` (radio inputs) for single-open behavior; modifiers `collapse-arrow`, `collapse-plus`, `join-item` when wrapped in `join`.

## Examples

### Accordion using details

Source: `playground/components/accordion/accordion-using-details.html`

```html
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
  <summary class="collapse-title font-semibold">How do I create an account?</summary>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</details>
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="collapse-title font-semibold">I forgot my password. What should I do?</summary>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</details>
<details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
  <summary class="collapse-title font-semibold">How do I update my profile information?</summary>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</details>
```

### Accordion using radio inputs

Source: `playground/components/accordion/accordion-using-radio-inputs.html`

```html
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```

### Accordion with arrow icon

Source: `playground/components/accordion/accordion-with-arrow-icon.html`

```html
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```

### Accordion with plusminus icon

Source: `playground/components/accordion/accordion-with-plusminus-icon.html`

```html
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" checked="checked" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div class="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
```

### Using accordion and join together

Source: `playground/components/accordion/using-accordion-and-join-together.html`

```html
<div class="join join-vertical bg-base-100">
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" checked="checked" />
    <div class="collapse-title font-semibold">How do I create an account?</div>
    <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">How do I update my profile information?</div>
    <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>
```
