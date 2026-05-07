# footer

_page footer with column groupings_

## What it does

Page footer layout — columns of links, optional logo block, optional form, optional copyright row.

## When to use

- Standard site footers.

## Core classes

`footer`; layout `footer-horizontal|center`. Children are sectioned by `<nav>` (link columns), `<aside>` (logo / about), `<form>`. The first child of each `<nav>` should be a `<h6 class="footer-title">`.

Set surface and text via theme tokens: `bg-base-200 text-base-content`, `bg-neutral text-neutral-content`, `bg-primary text-primary-content`, etc.

## Examples

### Multi-column footer with link groups (canonical)

Source: `playground/components/footer/footer-with-logo-and-social-icons.html`

```html
<footer class="footer bg-neutral text-neutral-content p-10">
  <aside>
    <!-- logo SVG (class="fill-current") -->
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
  </nav>
</footer>
```

### Centered with social icons

```html
<footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav class="grid grid-flow-col gap-4">
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a><!-- twitter SVG (class="fill-current") --></a>
      <a><!-- youtube SVG --></a>
      <a><!-- facebook SVG --></a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {year} - All rights reserved by ACME Industries Ltd.</p>
  </aside>
</footer>
```

### Centered with logo, copyright, and social icons

```html
<footer class="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
  <aside>
    <!-- logo SVG (class="inline-block fill-current") -->
    <p class="font-bold">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
    <p>Copyright © {year} - All rights reserved</p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a><!-- twitter SVG --></a>
      <a><!-- youtube SVG --></a>
      <a><!-- facebook SVG --></a>
    </div>
  </nav>
</footer>
```

### Vertical on small, horizontal on larger screens

`footer` is vertical by default. Add `sm:footer-horizontal` to switch on `sm` and up.

```html
<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
  </nav>
</footer>
```

### Two-row footer (links above, copyright below)

Stack two `<footer>` blocks separated by a border.

```html
<footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <!-- logo SVG -->
    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
  </aside>
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
  </nav>
</footer>
<footer class="footer footer-center bg-base-300 text-base-content border-base-300 border-t px-10 py-4">
  <aside class="grid-flow-col items-center">
    <!-- logo SVG -->
    <p>Copyright © {year} - All rights reserved by ACME Industries Ltd.</p>
  </aside>
</footer>
```

### With newsletter form

Use a `join` to glue the input and button.

```html
<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
  </nav>
  <form>
    <h6 class="footer-title">Newsletter</h6>
    <fieldset class="form-control w-80">
      <label class="label">
        <span class="label-text">Enter your email</span>
      </label>
      <div class="join">
        <input type="text" placeholder="username@site.com" class="input input-bordered join-item" />
        <button class="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
```

### Just copyright

```html
<footer class="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {year} - All rights reserved by ACME Industries Ltd.</p>
  </aside>
</footer>
```
