# join

_group adjacent items so borders/radii merge_

## What it does

Layout helper that strips inner borders/radii so children render as one fused control (button group, segmented control, input + button).

## When to use

- Button groups, segmented controls, input-with-button combos.

## Core classes

`join` on the wrapper; `join-item` on each child; modifier `join-vertical|horizontal`.

## Examples

### Join

Source: `playground/components/join/join.html`

```html
<div class="join">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
```

### Custom border radius

Source: `playground/components/join/custom-border-radius.html`

```html
<div class="join">
  <input class="input join-item" placeholder="Email" />
  <button class="btn join-item rounded-r-full">Subscribe</button>
</div>
```

### Group items vertically

Source: `playground/components/join/group-items-vertically.html`

```html
<div class="join join-vertical">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
```

### Join radio inputs with btn style

Source: `playground/components/join/join-radio-inputs-with-btn-style.html`

```html
<div class="join">
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 1" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
  <input class="join-item btn" type="radio" name="options" aria-label="Radio 3" />
</div>
```

### Responsive its vertical on small screen and horizontal on large screen

Source: `playground/components/join/responsive-its-vertical-on-small-screen-and-horizontal-on-large-screen.html`

```html
<div class="join join-vertical lg:join-horizontal">
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
  <button class="btn join-item">Button</button>
</div>
```

### With extra elements in the group

Source: `playground/components/join/with-extra-elements-in-the-group.html`

```html
<div class="join">
  <div>
    <div>
      <input class="input join-item" placeholder="Search" />
    </div>
  </div>
  <select class="select join-item">
    <option disabled selected>Filter</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div class="indicator">
    <span class="indicator-item badge badge-secondary">new</span>
    <button class="btn join-item">Search</button>
  </div>
</div>
```
