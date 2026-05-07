# menu

_vertical/horizontal nav list (sidebar, sub-menus)_

## What it does

Versatile nav list for sidebars, sub-menus, mega-menus, file trees.

## When to use

- Sidebars, dropdown contents, mobile drawer contents.

## Core classes

`menu`; orientation `menu-horizontal` (vertical is default); size `menu-xs|sm|md|lg|xl`; child states `menu-active|disabled|title`; submenu open/close via class `menu-dropdown` + `menu-dropdown-toggle` (with `menu-dropdown-show` for open) or via native `<details>/<summary>`.

## Examples

### Menu (canonical)

Source: `playground/components/menu/menu.html`

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```

### Horizontal

```html
<ul class="menu menu-horizontal bg-base-200">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```

### Responsive (vertical on mobile, horizontal on large screens)

```html
<ul class="menu lg:menu-horizontal bg-base-200 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

### Sizes

```html
<ul class="menu menu-xs bg-base-200 rounded-box w-56">…</ul>
<ul class="menu menu-sm bg-base-200 rounded-box w-56">…</ul>
<ul class="menu menu-lg bg-base-200 rounded-box w-56">…</ul>
```

### Active and disabled items

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a class="menu-active">Active</a></li>
  <li><a>Inactive</a></li>
  <li><a class="menu-disabled">Disabled</a></li>
</ul>
```

### Title (section heading + grouped children)

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li class="menu-title">Title as standalone</li>
  <li><a>Item</a></li>
  <li>
    <h2 class="menu-title">Title as parent</h2>
    <ul>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </li>
</ul>
```

### Without padding / border radius

```html
<ul class="menu bg-base-200 w-56 [&_li>*]:rounded-none">…</ul>
```

### Submenu via native `<details>` (collapsible)

`<details>` is the simplest collapsible variant; nest freely.

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li>
          <details>
            <summary>Nested</summary>
            <ul>
              <li><a>Deep 1</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
</ul>
```

### Submenu via class names (no `<details>`)

Use this variant when you need to control open state from JavaScript or CSS (e.g. on hover for horizontal menus).

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li>
    <span class="menu-dropdown-toggle menu-dropdown-show">Parent (open)</span>
    <ul class="menu-dropdown menu-dropdown-show">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
  <li>
    <span class="menu-dropdown-toggle">Parent (closed)</span>
    <ul class="menu-dropdown">
      <li><a>Submenu 1</a></li>
    </ul>
  </li>
</ul>
```

### Horizontal submenu

```html
<ul class="menu menu-horizontal bg-base-200 rounded-box">
  <li><a>Item 1</a></li>
  <li>
    <a>Parent</a>
    <ul>
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
    </ul>
  </li>
</ul>
```

### Mega menu (responsive)

A horizontal menu with multi-column submenus on large screens.

```html
<ul class="menu lg:menu-horizontal bg-base-200 rounded-box">
  <li>
    <details>
      <summary>Solutions</summary>
      <ul class="lg:w-56">
        <li><a>Design</a></li>
        <li><a>Development</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary>Enterprise</summary>
      <ul class="lg:w-56">
        <li><a>CRM</a></li>
        <li><a>ERP</a></li>
      </ul>
    </details>
  </li>
</ul>
```

### With icons

Place an icon SVG before the label. For icon-only menus add `tooltip tooltip-right` (vertical) or `tooltip tooltip-bottom` (horizontal) to keep affordances.

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li>
    <a>
      <!-- icon SVG (class="h-5 w-5") -->
      Inbox
    </a>
  </li>
  <li>
    <a>
      <!-- icon SVG -->
      Sent
      <span class="badge badge-sm badge-info">+99</span>
    </a>
  </li>
</ul>
```

### Icon-only with tooltip

```html
<ul class="menu bg-base-200 rounded-box">
  <li>
    <a class="tooltip tooltip-right" data-tip="Home"><!-- icon SVG --></a>
  </li>
  <li>
    <a class="tooltip tooltip-right" data-tip="Settings"><!-- icon SVG --></a>
  </li>
</ul>
```

### File tree

A nested menu using `<details>` for folders and icon prefixes for file types. The structure is the **Submenu via `<details>`** pattern with file/folder icon SVGs in front of each label. Use `menu-xs` for tighter spacing.

```html
<ul class="menu menu-xs bg-base-200 rounded-box max-w-xs w-full">
  <li><a><!-- file icon --> resume.pdf</a></li>
  <li>
    <details open>
      <summary><!-- folder icon --> My Files</summary>
      <ul>
        <li><a><!-- file icon --> Project-final.psd</a></li>
        <li>
          <details open>
            <summary><!-- folder icon --> Images</summary>
            <ul>
              <li><a><!-- image icon --> Screenshot1.png</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
</ul>
```
