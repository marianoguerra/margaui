# aura

_animated glowing border wrapper (rainbow, holo, silver, gold, glow)_

## What it does

Wraps any element in an animated conic-gradient border light. Auto-picks corner radius when wrapping a card/alert/button/input/select/checkbox/toggle/badge.

## When to use

- Highlighting the single most important button, card, or promo element on a page.
- Not for general emphasis — use sparingly, it's an eye-catching animated effect.

## Core classes

`aura`; style `aura-rainbow|holo|dual|silver|gold|glow`; size `aura-xs|sm|md|lg|xl`.

## Examples

### Aura sizes

Source: `playground/components/aura/aura-sizes.html`

```html
<div class="flex flex-wrap gap-6 items-center">
  <div class="aura aura-xs">
    <button class="btn btn-primary">xs</button>
  </div>
  <div class="aura aura-sm">
    <button class="btn btn-primary">sm</button>
  </div>
  <div class="aura aura-md">
    <button class="btn btn-primary">md</button>
  </div>
  <div class="aura aura-lg">
    <button class="btn btn-primary">lg</button>
  </div>
  <div class="aura aura-xl">
    <button class="btn btn-primary">xl</button>
  </div>
</div>
```

### Aura styles

Source: `playground/components/aura/aura-styles.html`

```html
<div class="flex flex-wrap gap-6 items-center">
  <div class="aura">
    <button class="btn">default</button>
  </div>
  <div class="aura aura-rainbow">
    <button class="btn">rainbow</button>
  </div>
  <div class="aura aura-holo">
    <button class="btn">holo</button>
  </div>
  <div class="aura aura-dual">
    <button class="btn">dual</button>
  </div>
  <div class="aura aura-silver">
    <button class="btn">silver</button>
  </div>
  <div class="aura aura-gold">
    <button class="btn">gold</button>
  </div>
  <div class="aura aura-glow">
    <button class="btn">glow</button>
  </div>
</div>
```

### Aura wrapping a button

Source: `playground/components/aura/aura-wrapping-a-button.html`

```html
<div class="aura">
  <button class="btn btn-primary">Buy now</button>
</div>
```

### Aura wrapping a card

Source: `playground/components/aura/aura-wrapping-a-card.html`

```html
<div class="aura aura-rainbow">
  <div class="card bg-base-100 w-64 shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Featured</h2>
      <p>This card is wrapped in an aura effect.</p>
    </div>
  </div>
</div>
```
