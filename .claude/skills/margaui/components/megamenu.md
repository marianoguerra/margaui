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

### Megamenu in a navbar

Source: `playground/components/megamenu/megamenu-in-a-navbar.html`

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center">
    <div class="megamenu max-sm:megamenu-vertical megamenu-full" id="my-megamenu-4" popover>
      <span class="megamenu-active"></span>
      <button popovertarget="d1">One</button>
      <div id="d1" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu" />
        </div>
      </div>
      <button popovertarget="d2">Two</button>
      <div id="d2" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Enterprise</a>
              <ul>
                <li><a>CRM software</a></li>
                <li><a>Marketing management</a></li>
                <li><a>Security</a></li>
                <li><a>Consulting</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li><a>WordPress themes</a></li>
                <li><a>WordPress plugins</a></li>
                <li><a>Color picker app</a></li>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
              </ul>
            </li>
          </ul>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:hidden" alt="Tailwind CSS megamenu component" />
        </div>
      </div>
      <button popovertarget="d3">Three</button>
      <div id="d3" popover>
        <div class="flex max-sm:flex-col items-start">
          <ul class="menu w-full md:menu-horizontal">
            <li>
              <a>Solutions</a>
              <ul>
                <li><a>Design</a></li>
                <li><a>Development</a></li>
                <li><a>Hosting</a></li>
                <li><a>Domain register</a></li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li><a>UI Kit</a></li>
                <li>
                  <a>Open source</a>
                  <ul>
                    <li><a>Auth management system</a></li>
                    <li><a>VScode theme</a></li>
                    <li><a>Color picker app</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li><a>About us</a></li>
                <li><a>Contact us</a></li>
                <li><a>Privacy policy</a></li>
                <li><a>Press kit</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-end">
    <a class="btn">Login</a>
    <button class="btn sm:hidden" popovertarget="my-megamenu-4">Menu</button>
  </div>
</div>
```

### Megamenu in different sizes

Source: `playground/components/megamenu/megamenu-in-different-sizes.html`

```html
<div class="megamenu megamenu-xs p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button popovertarget="f1">One</button>
  <div id="f1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="f2">Two</button>
  <div id="f2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="f3">Three</button>
  <div id="f3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-sm p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button popovertarget="g1">One</button>
  <div id="g1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="g2">Two</button>
  <div id="g2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="g3">Three</button>
  <div id="g3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-md p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button popovertarget="h1">One</button>
  <div id="h1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="h2">Two</button>
  <div id="h2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="h3">Three</button>
  <div id="h3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-lg p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button popovertarget="i1">One</button>
  <div id="i1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="i2">Two</button>
  <div id="i2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="i3">Three</button>
  <div id="i3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
<div class="megamenu megamenu-xl p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button popovertarget="j1">One</button>
  <div id="j1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button popovertarget="j2">Two</button>
  <div id="j2" popover>
    <div class="p-4">Content for the second item</div>
  </div>

  <button popovertarget="j3">Three</button>
  <div id="j3" popover>
    <div class="p-4">Content for the third item</div>
  </div>
</div>
```

### Megamenu with a menus and lots of links

Source: `playground/components/megamenu/megamenu-with-a-menus-and-lots-of-links.html`

```html
<button class="btn sm:hidden" popovertarget="my-megamenu-3">Menu</button>
<div class="megamenu max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300 w-full" id="my-megamenu-3" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="c1">One</button>
  <div id="c1" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu" />
    </div>
  </div>

  <button popovertarget="c2">Two</button>
  <div id="c2" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li><a>UI Kit</a></li>
            <li><a>WordPress themes</a></li>
            <li><a>WordPress plugins</a></li>
            <li><a>Color picker app</a></li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" class="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu component" />
    </div>
  </div>

  <button popovertarget="c3">Three</button>
  <div id="c3" popover>
    <div class="flex max-sm:flex-col items-start">
      <ul class="menu w-full md:menu-horizontal">
        <li>
          <ul>
            <li class="menu-title">Solutions</li>
            <li><a>Design</a></li>
            <li><a>Development</a></li>
            <li><a>Hosting</a></li>
            <li><a>Domain register</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Products</li>
            <li><a>UI Kit</a></li>
            <li><a>Cloud Platform</a></li>
            <li><a>Open source</a></li>
            <li>
              <ul>
                <li><a>Auth management system</a></li>
                <li><a>VScode theme</a></li>
                <li><a>Color picker app</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Enterprise</li>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li class="menu-title">Company</li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
```

### Megamenu with wide popovers and horizontal menus

Source: `playground/components/megamenu/megamenu-with-wide-popovers-and-horizontal-menus.html`

```html
<button class="btn sm:hidden" popovertarget="my-megamenu-2">Menu</button>
<div class="megamenu max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300 w-full" id="my-megamenu-2" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="b1">One</button>
  <div id="b1" popover>
    <ul class="menu menu-horizontal">
      <li><a>Enterprise</a></li>
      <li><a>CRM software</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </div>

  <button popovertarget="b2">Two</button>
  <div id="b2" popover>
    <ul class="menu menu-horizontal">
      <li><a>AI infrastructure</a></li>
      <li><a>Image generation</a></li>
      <li><a>MCP servers</a></li>
    </ul>
  </div>

  <button popovertarget="b3">Three</button>
  <div id="b3" popover>
    <ul class="menu menu-horizontal">
      <li><a>Cloud computing</a></li>
      <li><a>Storage solutions</a></li>
      <li><a>Database services</a></li>
      <li><a>CDN performance</a></li>
    </ul>
  </div>
</div>
```

### Megamenu without arrows

Source: `playground/components/megamenu/megamenu-without-arrows.html`

```html
<div class="megamenu p-2 border border-base-300 w-full">
  <span class="megamenu-active"></span>

  <button class="after:content-none" popovertarget="e1">One</button>
  <div id="e1" popover>
    <div class="p-4">Content for the first item</div>
  </div>

  <button class="after:content-none" popovertarget="e2">Two</button>
  <div id="e2" popover>
    <div class="p-4">Content for the second item</div>
  </div>
</div>
```

### Responsive megamenu with small vertical menus

Source: `playground/components/megamenu/responsive-megamenu-with-small-vertical-menus.html`

```html
<!-- popovertarget must match the ID of the corresponding popover, and each ID must be unique -->
<button class="btn sm:hidden" popovertarget="my-megamenu-1">Menu</button>

<div class="megamenu max-sm:megamenu-vertical p-2 border border-base-300 w-full" id="my-megamenu-1" popover>
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
