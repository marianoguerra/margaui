# stack

_stack children (Z-axis)_

## What it does

Stacks children on top of each other (Z-axis), with optional offset/spread for card-stack effects.

## When to use

- Stacked-card visual effects, layered images.

## Core classes

`stack`; modifiers `stack-top|start|end` and shadow modifiers.

## Examples

### 3 divs in a stack

Source: `playground/components/stack/3-divs-in-a-stack.html`

```html
<div class="stack h-20 w-32">
  <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
  <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
  <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">
    3
  </div>
</div>
```

### Stacked cards end direction

Source: `playground/components/stack/stacked-cards-end-direction.html`

```html
<div class="stack stack-end size-28">
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">A</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">B</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">C</div>
  </div>
</div>
```

### Stacked cards start direction

Source: `playground/components/stack/stacked-cards-start-direction.html`

```html
<div class="stack stack-start size-28">
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">A</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">B</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">C</div>
  </div>
</div>
```

### Stacked cards top direction

Source: `playground/components/stack/stacked-cards-top-direction.html`

```html
<div class="stack stack-top size-28">
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">A</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">B</div>
  </div>
  <div class="border-base-content card bg-base-100 border text-center">
    <div class="card-body">C</div>
  </div>
</div>
```

### Stacked cards with shadow

Source: `playground/components/stack/stacked-cards-with-shadow.html`

```html
<div class="stack">
  <div class="card bg-base-200 text-center shadow-md">
    <div class="card-body">A</div>
  </div>
  <div class="card bg-base-200 text-center shadow">
    <div class="card-body">B</div>
  </div>
  <div class="card bg-base-200 text-center shadow-sm">
    <div class="card-body">C</div>
  </div>
</div>
```

### Stacked cards

Source: `playground/components/stack/stacked-cards.html`

```html
<div class="stack">
  <div class="card shadow-md bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="card shadow-md bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Notification 2</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div class="card shadow-md bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Notification 3</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>
```

### Stacked images

Source: `playground/components/stack/stacked-images.html`

```html
<div class="stack w-48">
  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" class="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="rounded-box" />
</div>
```
