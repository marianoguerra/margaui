# dropdown

_click/hover/focus menu attached to a trigger_

## What it does

Pop-up menu attached to a button/element. Supports details/summary, focus-based, popover API, and anchor positioning variants.

## When to use

- Action menus, settings menus, navbar sub-menus.
- For full-screen modals, use **modal** instead.

## Core classes

`dropdown`; trigger style `dropdown-hover|open|close`; placement `dropdown-top|bottom|left|right`; alignment `dropdown-start|center|end`; inner `dropdown-content`.

## Placement and alignment

Combine one placement (`dropdown-top|bottom|left|right`) with one alignment (`dropdown-start|center|end`). Default placement is `dropdown-bottom`. The same canonical example applies — only the modifier classes change.

## Examples

### Dropdown menu (canonical)

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

`dropdown-content` has no surface of its own — always pair with `bg-base-100`, `rounded-box`, `shadow-sm`, and `z-1` (or higher).

### Dropdown on hover

```html
<div class="dropdown dropdown-hover">
  <div tabindex="0" role="button" class="btn m-1">Hover</div>
  <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### Force open / force close

```html
<div class="dropdown dropdown-open">…</div>
<div class="dropdown dropdown-close">…</div>
```

### Card as dropdown content

`dropdown-content` accepts any element, not just `menu`.

```html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <div tabindex="0" class="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md">
    <div class="card-body">
      <p>This is a card. You can use any element as a dropdown.</p>
    </div>
  </div>
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
        <ul tabindex="-1" class="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### Details/summary variant

```html
<details class="dropdown">
  <summary class="btn m-1">open or close</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
```

### Popover API + CSS anchor positioning

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
