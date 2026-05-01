# drawer

_off-canvas sidebar (toggle via checkbox)_

## What it does

Sliding off-canvas sidebar driven by a hidden checkbox — works without JS.

## When to use

- Mobile menus, side panels that overlay content.
- For an always-visible navigation column, use **menu** in a flex layout instead.

## Core classes

`drawer`; `drawer-toggle` on the checkbox; `drawer-content`, `drawer-side`, `drawer-overlay`; modifier `drawer-end` for right-side drawer; `drawer-open` to keep open by default.

## Examples

### Drawer sidebar that opens from right side of page

Source: `playground/components/drawer/drawer-sidebar-that-opens-from-right-side-of-page.html`

```html
<div class="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-5" class="drawer-button btn btn-primary">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-5" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### Drawer sidebar

Source: `playground/components/drawer/drawer-sidebar.html`

```html
<div class="drawer">
  <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-1" class="btn drawer-button">Open drawer</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### Navbar menu for desktop — sidebar drawer for mobile

Source: `playground/components/drawer/navbar-menu-for-desktop--sidebar-drawer-for-mobile.html`

```html
<div class="drawer">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="navbar bg-base-300 w-full">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 px-2">Navbar Title</div>
      <div class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```

### Responsive collapsible icon only drawer sidebar using is drawer close and is drawer open

Source: `playground/components/drawer/responsive-collapsible-icon-only-drawer-sidebar-using-is-drawer-close-and-is-drawer-open.html`

```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Navbar -->
    <nav class="navbar w-full bg-base-300">
      <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <!-- Sidebar toggle icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div class="px-4">Navbar Title</div>
    </nav>
    <!-- Page content here -->
    <div class="p-4">Page Content</div>
  </div>

  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      <!-- Sidebar content here -->
      <ul class="menu w-full grow">
        <!-- List item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            <!-- Home icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span class="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

        <!-- List item -->
        <li>
          <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            <!-- Settings icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" class="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span class="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
```

### Responsive sidebar is always visible on large screen can be toggled on small screen

Source: `playground/components/drawer/responsive-sidebar-is-always-visible-on-large-screen-can-be-toggled-on-small-screen.html`

```html
<div class="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-3" class="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
```
