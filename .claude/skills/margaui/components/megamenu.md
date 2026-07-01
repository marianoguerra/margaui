# megamenu

_large horizontal nav bar whose items open big popover panels_

## What it does

Top-of-page horizontal menu where each item opens a popover (via the native Popover API) containing a menu or arbitrary content. Collapses to a vertical popover on small screens via `megamenu-vertical`.

## When to use

- Large-screen primary navigation with rich per-item content (site-wide nav with categorized links).
- For a simple sidebar/dropdown list without per-item popovers, use **menu** instead.
- Requires a browser with Popover API + CSS anchor positioning support.

## Core classes

`megamenu` on the container (a `popover` element); `megamenu-active` on the sliding indicator `<span>`; width `megamenu-wide|full`; direction `megamenu-vertical`; size `megamenu-xs|sm|md|lg|xl`.

## Examples

### Megamenu

Source: `playground/components/megamenu/megamenu.html`

```html
<!-- popovertarget must match the id of the corresponding popover, and each id must be unique -->
<button class="btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>

<div class="megamenu max-sm:megamenu-vertical p-2 border border-base-300" id="my-megamenu-1" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="a1">Services</button>
  <div id="a1" popover>
    <ul class="menu">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="a2">AI</button>
  <div id="a2" popover>
    <ul class="menu">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="a3">Cloud Solutions</button>
  <div id="a3" popover>
    <ul class="menu">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>
```

### Megamenu sizes

Source: `playground/components/megamenu/megamenu-sizes.html`

```html
<div class="flex flex-col gap-2">
  <div class="megamenu megamenu-sm p-2 border border-base-300" id="my-megamenu-sm" popover="manual">
    <span class="megamenu-active"></span>
    <button popovertarget="c1">One</button>
    <div id="c1" popover>
      <ul class="menu">
        <li><a>Link</a></li>
      </ul>
    </div>
    <button popovertarget="c2">Two</button>
    <div id="c2" popover>
      <ul class="menu">
        <li><a>Link</a></li>
      </ul>
    </div>
  </div>

  <div class="megamenu megamenu-lg p-2 border border-base-300" id="my-megamenu-lg" popover="manual">
    <span class="megamenu-active"></span>
    <button popovertarget="c3">One</button>
    <div id="c3" popover>
      <ul class="menu">
        <li><a>Link</a></li>
      </ul>
    </div>
    <button popovertarget="c4">Two</button>
    <div id="c4" popover>
      <ul class="menu">
        <li><a>Link</a></li>
      </ul>
    </div>
  </div>
</div>
```

### Megamenu wide

Source: `playground/components/megamenu/megamenu-wide.html`

```html
<button class="btn sm:hidden" popovertarget="my-megamenu-2">Menu</button>

<div class="megamenu megamenu-wide max-sm:megamenu-vertical p-2 border border-base-300" id="my-megamenu-2" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="b1">Products</button>
  <div id="b1" popover>
    <ul class="menu md:menu-horizontal">
      <li><a>Analytics</a></li>
      <li><a>Automation</a></li>
      <li><a>Reporting</a></li>
    </ul>
  </div>

  <button popovertarget="b2">Pricing</button>
  <div id="b2" popover>
    <ul class="menu md:menu-horizontal">
      <li><a>Starter</a></li>
      <li><a>Team</a></li>
      <li><a>Enterprise</a></li>
    </ul>
  </div>
</div>
```
