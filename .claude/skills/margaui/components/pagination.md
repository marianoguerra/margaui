# pagination

_paged-navigation button row_

## What it does

Row of buttons (often inside `join`) for paged navigation.

## When to use

- Multi-page lists, search results.

## Core classes

Built from `join` + `btn`.

## Examples

### Extra small buttons

Source: `playground/components/pagination/extra-small-buttons.html`

```html
<div class="join">
  <button class="join-item btn">«</button>
  <button class="join-item btn">Page 22</button>
  <button class="join-item btn">»</button>
</div>
```

### Nexprev outline buttons with equal width

Source: `playground/components/pagination/nexprev-outline-buttons-with-equal-width.html`

```html
<div class="join grid grid-cols-2">
  <button class="join-item btn btn-outline">Previous page</button>
  <button class="join-item btn btn-outline">Next</button>
</div>
```

### Pagination with an active button

Source: `playground/components/pagination/pagination-with-an-active-button.html`

```html
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
  <button class="join-item btn">4</button>
</div>
```

### Sizes

Source: `playground/components/pagination/sizes.html`

```html
<div class="join">
  <button class="join-item btn btn-xs">1</button>
  <button class="join-item btn btn-xs btn-active">2</button>
  <button class="join-item btn btn-xs">3</button>
  <button class="join-item btn btn-xs">4</button>
</div>
<div class="join">
  <button class="join-item btn btn-sm">1</button>
  <button class="join-item btn btn-sm btn-active">2</button>
  <button class="join-item btn btn-sm">3</button>
  <button class="join-item btn btn-sm">4</button>
</div>
<div class="join">
  <button class="join-item btn btn-md">1</button>
  <button class="join-item btn btn-md btn-active">2</button>
  <button class="join-item btn btn-md">3</button>
  <button class="join-item btn btn-md">4</button>
</div>
<div class="join">
  <button class="join-item btn btn-lg">1</button>
  <button class="join-item btn btn-lg btn-active">2</button>
  <button class="join-item btn btn-lg">3</button>
  <button class="join-item btn btn-lg">4</button>
</div>
<div class="join">
  <button class="join-item btn btn-xl">1</button>
  <button class="join-item btn btn-xl btn-active">2</button>
  <button class="join-item btn btn-xl">3</button>
  <button class="join-item btn btn-xl">4</button>
</div>
```

### Using radio inputs

Source: `playground/components/pagination/using-radio-inputs.html`

```html
<div class="join">
  <input
    class="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    checked="checked" />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input class="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
```

### With a disabled button

Source: `playground/components/pagination/with-a-disabled-button.html`

```html
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn">2</button>
  <button class="join-item btn btn-disabled">...</button>
  <button class="join-item btn">99</button>
  <button class="join-item btn">100</button>
</div>
```
