# navbar

_top navigation bar with start/center/end slots_

## What it does

Top navigation bar with `navbar-start`, `navbar-center`, `navbar-end` slots.

## When to use

- Top-of-page navigation.
- For mobile-style bottom nav, use **dock**.

## Core classes

`navbar`; slot wrappers `navbar-start|center|end`. Set surface via theme tokens (`bg-base-100`, `bg-neutral text-neutral-content`, `bg-primary text-primary-content`). The `flex-1` / `flex-none` utilities also work in place of named slots when only one slot is needed.

## Examples

### Title only (canonical)

```html
<div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">daisyUI</a>
</div>
```

### Surface variants

```html
<div class="navbar bg-neutral text-neutral-content">…</div>
<div class="navbar bg-base-300">…</div>
<div class="navbar bg-primary text-primary-content">…</div>
```

### Title + trailing icon

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost"><!-- icon SVG --></button>
  </div>
</div>
```

### Icon at start and end

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost"><!-- menu icon --></button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost"><!-- more icon --></button>
  </div>
</div>
```

### Centered logo with start dropdown and end actions

Use `navbar-start|center|end` slots when content lives in three regions.

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle"><!-- hamburger icon --></div>
      <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle"><!-- search icon --></button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <!-- bell icon -->
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
```

### With horizontal menu and submenu

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
```

### With search input and avatar dropdown

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full"><img alt="Avatar" src="…" /></div>
      </div>
      <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a class="justify-between">Profile <span class="badge">New</span></a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
```

### Responsive (dropdown on small, horizontal menu on large)

Hide the dropdown on `lg` and show the centered horizontal menu instead.

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><!-- hamburger icon --></div>
      <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
```

### Cart indicator dropdown (card as dropdown content)

```html
<div class="dropdown dropdown-end">
  <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
    <div class="indicator">
      <!-- cart icon -->
      <span class="badge badge-sm indicator-item">8</span>
    </div>
  </div>
  <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
    <div class="card-body">
      <span class="text-lg font-bold">8 Items</span>
      <span class="text-info">Subtotal: $999</span>
      <div class="card-actions">
        <button class="btn btn-primary btn-block">View cart</button>
      </div>
    </div>
  </div>
</div>
```
