# dropdown

_click/hover/focus menu attached to a trigger_

## What it does

Pop-up menu attached to a button/element. Supports details/summary, focus-based, popover API, and anchor positioning variants.

## When to use

- Action menus, settings menus, navbar sub-menus.
- For full-screen modals, use **modal** instead.

## Core classes

`dropdown`; positioning `dropdown-top|bottom|left|right`, `dropdown-start|center|end`; trigger `dropdown-hover|open|force-open|force-close`; inner `dropdown-content`.

## Examples

### Card as dropdown

Source: `playground/components/dropdown/card-as-dropdown.html`

```html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <div
    tabindex="0"
    class="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
    <div class="card-body">
      <p>This is a card. You can use any element as a dropdown.</p>
    </div>
  </div>
</div>
```

### Dropdown — aligns to center of button horizontally

Source: `playground/components/dropdown/dropdown--aligns-to-center-of-button-horizontally.html`

```html
<div class="dropdown dropdown-center">
  <div tabindex="0" role="button" class="btn m-1">Click  ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown — aligns to end of button horizontally

Source: `playground/components/dropdown/dropdown--aligns-to-end-of-button-horizontally.html`

```html
<div class="dropdown dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Click  ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown — aligns to start of button horizontally

Source: `playground/components/dropdown/dropdown--aligns-to-start-of-button-horizontally.html`

```html
<div class="dropdown dropdown-start">
  <div tabindex="0" role="button" class="btn m-1">Click ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown bottom default — aligns to center of button horizontally

Source: `playground/components/dropdown/dropdown-bottom-default--aligns-to-center-of-button-horizontally.html`

```html
<div class="dropdown dropdown-bottom dropdown-center">
  <div tabindex="0" role="button" class="btn m-1">Click ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown bottom default — aligns to end of button horizontally

Source: `playground/components/dropdown/dropdown-bottom-default--aligns-to-end-of-button-horizontally.html`

```html
<div class="dropdown dropdown-bottom dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Click ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown bottom default

Source: `playground/components/dropdown/dropdown-bottom-default.html`

```html
<div class="dropdown dropdown-bottom">
  <div tabindex="0" role="button" class="btn m-1">Click ⬇️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown in navbar

Source: `playground/components/dropdown/dropdown-in-navbar.html`

```html
<div class="navbar bg-base-200">
  <div class="ps-4">
    <a class="text-lg font-bold">daisyUI</a>
  </div>
  <div class="flex grow justify-end px-2">
    <div class="flex items-stretch">
      <a class="btn btn-ghost rounded-field">Button</a>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-field">Dropdown</div>
        <ul
          tabindex="-1"
          class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### Dropdown left — aligns to center of button vertically

Source: `playground/components/dropdown/dropdown-left--aligns-to-center-of-button-vertically.html`

```html
<div class="dropdown dropdown-left dropdown-center">
  <div tabindex="0" role="button" class="btn m-1">Click ⬅️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown left — aligns to end of button vertically

Source: `playground/components/dropdown/dropdown-left--aligns-to-end-of-button-vertically.html`

```html
<div class="dropdown dropdown-left dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Click ⬅️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown left

Source: `playground/components/dropdown/dropdown-left.html`

```html
<div class="dropdown dropdown-left">
  <div tabindex="0" role="button" class="btn m-1">Click ⬅️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown menu

Source: `playground/components/dropdown/dropdown-menu.html`

```html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown on hover

Source: `playground/components/dropdown/dropdown-on-hover.html`

```html
<div class="dropdown dropdown-hover">
  <div tabindex="0" role="button" class="btn m-1">Hover</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown right — aligns to center of button vertically

Source: `playground/components/dropdown/dropdown-right--aligns-to-center-of-button-vertically.html`

```html
<div class="dropdown dropdown-right dropdown-center">
  <div tabindex="0" role="button" class="btn m-1">Click ➡️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown right — aligns to end of button vertically

Source: `playground/components/dropdown/dropdown-right--aligns-to-end-of-button-vertically.html`

```html
<div class="dropdown dropdown-right dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Click ➡️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown right

Source: `playground/components/dropdown/dropdown-right.html`

```html
<div class="dropdown dropdown-right">
  <div tabindex="0" role="button" class="btn m-1">Click ➡️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown top — aligns to center of button horizontally

Source: `playground/components/dropdown/dropdown-top--aligns-to-center-of-button-horizontally.html`

```html
<div class="dropdown dropdown-top dropdown-center">
  <div tabindex="0" role="button" class="btn m-1">Click ⬆️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown top — aligns to end of button horizontally

Source: `playground/components/dropdown/dropdown-top--aligns-to-end-of-button-horizontally.html`

```html
<div class="dropdown dropdown-top dropdown-end">
  <div tabindex="0" role="button" class="btn m-1">Click ⬆️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown top

Source: `playground/components/dropdown/dropdown-top.html`

```html
<div class="dropdown dropdown-top">
  <div tabindex="0" role="button" class="btn m-1">Click ⬆️</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Dropdown using details and summary

Source: `playground/components/dropdown/dropdown-using-details-and-summary.html`

```html
<details class="dropdown">
  <summary class="btn m-1">open or close</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
```

### Dropdown using popover api and anchor positioning

Source: `playground/components/dropdown/dropdown-using-popover-api-and-anchor-positioning.html`

```html
<!-- change popover-1 and --anchor-1 names. Use unique names for each dropdown -->
<button class="btn" popovertarget="popover-1" style="anchor-name:--anchor-1">
  Button
</button>
<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover id="popover-1" style="position-anchor:--anchor-1">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

### Force close

Source: `playground/components/dropdown/force-close.html`

```html
<div class="dropdown dropdown-close">
  <div tabindex="0" role="button" class="btn m-1">Button</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Force open

Source: `playground/components/dropdown/force-open.html`

```html
<div class="dropdown dropdown-open">
  <div tabindex="0" role="button" class="btn m-1">Button</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Helper dropdown

Source: `playground/components/dropdown/helper-dropdown.html`

```html
<div class="dropdown dropdown-end">
  <div tabindex="0" role="button" class="btn btn-circle btn-ghost btn-xs text-info">
    <svg
      tabindex="0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-4 w-4 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabindex="0"
    class="card card-sm dropdown-content bg-base-100 rounded-box z-1 w-64 shadow-sm">
    <div tabindex="0" class="card-body">
      <h2 class="card-title">You needed more info?</h2>
      <p>Here is a description!</p>
    </div>
  </div>
</div>
```
