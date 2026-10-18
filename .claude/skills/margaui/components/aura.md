# aura

_animated glowing border wrapper (rainbow, holo, dual, silver, gold, glow)_

## What it does

Wraps any element in an animated conic-gradient border light. Auto-picks corner radius when wrapping a card/alert/button/input/select/checkbox/toggle/badge.

## When to use

- Highlighting the single most important button, card, or promo element on a page.
- Not for general emphasis — use sparingly, it's an eye-catching animated effect.

## Core classes

`aura`; style `aura-rainbow|holo|dual|silver|gold|glow`; size `aura-xs|sm|md|lg|xl`.

## Examples

### Aura

Source: `playground/components/aura/aura.html`

```html
<div class="aura">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has aura</p>
    </div>
  </div>
</div>
```

### Aura around a button

Source: `playground/components/aura/aura-around-a-button.html`

```html
<div class="aura">
  <button class="btn">button with aura</button>
</div>
```

### Aura dual

Source: `playground/components/aura/aura-dual.html`

```html
<div class="aura aura-dual">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has dual aura</p>
    </div>
  </div>
</div>
```

### Aura glow

Source: `playground/components/aura/aura-glow.html`

```html
<div class="aura aura-glow">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has glow aura</p>
    </div>
  </div>
</div>
```

### Aura gold

Source: `playground/components/aura/aura-gold.html`

```html
<div class="aura aura-gold">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has gold aura</p>
    </div>
  </div>
</div>
```

### Aura holo

Source: `playground/components/aura/aura-holo.html`

```html
<div class="aura aura-holo">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has holo aura</p>
    </div>
  </div>
</div>
```

### Aura rainbow around a pricing card

Source: `playground/components/aura/aura-rainbow-around-a-pricing-card.html`

```html
<div class="aura aura-rainbow">
  <div class="card w-96 bg-base-100 shadow-sm">
    <div class="card-body">
      <span class="badge badge-xs badge-warning">Most Popular</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">Premium</h2>
        <span class="text-xl">$29/mo</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>High-resolution image generation</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Customizable style templates</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Batch processing capabilities</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>AI-driven image enhancements</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Seamless cloud integration</span>
        </li>
        <li class="opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span class="line-through">Real-time collaboration tools</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">Subscribe</button>
      </div>
    </div>
  </div>
</div>
```

### Aura rainbow

Source: `playground/components/aura/aura-rainbow.html`

```html
<div class="aura aura-rainbow">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has rainbow aura</p>
    </div>
  </div>
</div>
```

### Aura silver

Source: `playground/components/aura/aura-silver.html`

```html
<div class="aura aura-silver">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>This card has silver aura</p>
    </div>
  </div>
</div>
```

### Aura sizes

Source: `playground/components/aura/aura-sizes.html`

```html
<div class="flex flex-wrap items-center gap-4">
  <div class="aura aura-xs">
    <button class="btn">XS</button>
  </div>
  <div class="aura aura-sm">
    <button class="btn">SM</button>
  </div>
  <div class="aura">
    <button class="btn">MD</button>
  </div>
  <div class="aura aura-lg">
    <button class="btn">LG</button>
  </div>
  <div class="aura aura-xl">
    <button class="btn">XL</button>
  </div>
</div>
```

### Aura with custom animation duration

Source: `playground/components/aura/aura-with-custom-animation-duration.html`

```html
<div class="aura aura-rainbow duration-2000">
  <div class="card bg-base-100">
    <div class="card-body">
      <p>2000ms duration aura</p>
    </div>
  </div>
</div>
```

### Aura with custom color and custom background color

Source: `playground/components/aura/aura-with-custom-color-and-custom-background-color.html`

```html
<div class="aura text-orange-600 bg-yellow-200">
    <div class="card bg-base-100 text-base-content">
    <div class="card-body">
      <p>This card has custom color and background aura</p>
    </div>
  </div>
</div>
```

### Aura with custom color

Source: `playground/components/aura/aura-with-custom-color.html`

```html
<div class="aura text-orange-600">
    <div class="card bg-base-100 text-base-content">
    <div class="card-body">
      <p>This card has custom color aura</p>
    </div>
  </div>
</div>
```
