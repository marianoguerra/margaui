# fab

_floating action button (single or speed-dial)_

## What it does

Floating action button with optional speed-dial children.

## When to use

- Single primary action floating over scrollable content (compose, add).

## Core classes

`fab`; layout modifier `fab-flower` for radial speed-dial; child slots `fab-main-action` (replaces the trigger when open) and `fab-close` (close affordance shown when open).

The trigger should be a `<div tabindex="0" role="button" class="btn …">` so the open state works on all browsers (a `<button>` cannot hold focus reliably across the speed-dial transition).

## Examples

### Single FAB (canonical)

Source: `playground/components/fab/a-single-fab-floating-action-button.html`

```html
<div class="fab">
  <button class="btn btn-lg btn-circle btn-primary">F</button>
</div>
```

### Vertical speed dial

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">F</div>
  <button class="btn btn-lg btn-circle">A</button>
  <button class="btn btn-lg btn-circle">B</button>
  <button class="btn btn-lg btn-circle">C</button>
</div>
```

### Speed dial with labels

Wrap each child action in a `<div>` containing the label and the button.

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">F</div>
  <div>Label A <button class="btn btn-lg btn-circle">A</button></div>
  <div>Label B <button class="btn btn-lg btn-circle">B</button></div>
</div>
```

### Speed dial with rectangle buttons

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">F</div>
  <button class="btn btn-lg">Button A</button>
  <button class="btn btn-lg">Button B</button>
</div>
```

### Speed dial with `fab-main-action`

`fab-main-action` replaces the trigger visually when the FAB is open (e.g. switch a "+" icon for a "compose" affordance).

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">F</div>
  <div class="fab-main-action">
    Main Action <button class="btn btn-circle btn-secondary btn-lg">M</button>
  </div>
  <div>Label A <button class="btn btn-lg btn-circle">A</button></div>
  <div>Label B <button class="btn btn-lg btn-circle">B</button></div>
</div>
```

### Speed dial with `fab-close`

`fab-close` is a visual close affordance, not focusable — clicking it removes focus and dismisses the speed dial.

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-info">F</div>
  <div class="fab-close">
    Close <span class="btn btn-circle btn-lg btn-error">✕</span>
  </div>
  <div>Label A <button class="btn btn-lg btn-circle">A</button></div>
</div>
```

### Radial (`fab-flower`)

Children fan out radially instead of stacking. Add `fab-flower` to the wrapper.

```html
<div class="fab fab-flower">
  <div tabindex="0" role="button" class="btn btn-circle btn-lg">
    <!-- icon SVG (size-6) -->
  </div>
  <button class="fab-main-action btn btn-circle btn-lg btn-primary">
    <!-- main-action icon SVG -->
  </button>
  <button class="btn btn-circle btn-lg"><!-- icon --></button>
  <button class="btn btn-circle btn-lg"><!-- icon --></button>
</div>
```

### With SVG icons (any layout)

Replace text-only buttons with circular icon buttons.

```html
<div class="fab">
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-secondary">
    <!-- icon SVG (size-6) -->
  </div>
  <button class="btn btn-lg btn-circle"><!-- icon SVG --></button>
  <button class="btn btn-lg btn-circle"><!-- icon SVG --></button>
</div>
```
