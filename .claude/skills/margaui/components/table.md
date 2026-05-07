# table

_themed `<table>` (zebra, hover, pinned rows/cols, sizes)_

## What it does

Themed `<table>` with zebra rows, hover highlight, pinned rows/cols.

## When to use

- Tabular data display.

## Core classes

`table`; size `table-xs|sm|md|lg|xl`; modifiers `table-zebra`, `table-pin-rows`, `table-pin-cols`.

Modifiers stack — e.g. `table table-xs table-zebra table-pin-rows table-pin-cols` is valid.

Always wrap in `<div class="overflow-x-auto">` (or `overflow-auto h-... w-...` for pinned variants) so the table can scroll on small screens.

## Examples

### Table (canonical)

Source: `playground/components/table/table.html`

```html
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Variants (apply on top of the canonical structure)

```html
<!-- Zebra rows -->
<table class="table table-zebra">…</table>

<!-- Sizes -->
<table class="table table-xs">…</table>
<table class="table table-sm">…</table>
<table class="table table-lg">…</table>

<!-- Hover highlight: add `hover:bg-base-300` to <tr> rows that should react -->
<tr class="hover:bg-base-300">…</tr>

<!-- Active row -->
<tr class="bg-base-200">…</tr>

<!-- Border + background -->
<table class="table border border-base-content/5 bg-base-100">…</table>
```

### Pinned rows (sticky `<thead>` per `<tbody>` group)

Wrap each group in its own `<tbody>` whose first `<tr>` is the group header. The wrapper needs an explicit height so sticky positioning has somewhere to scroll against.

```html
<div class="overflow-x-auto h-96">
  <table class="table table-pin-rows">
    <thead>
      <tr><th>Name</th><th>Job</th><th>Color</th></tr>
    </thead>
    <tbody>
      <tr><th colspan="3">Group 1</th></tr>
      <tr><td>Cy Ganderton</td><td>QA Specialist</td><td>Blue</td></tr>
      <tr><td>Hart Hagerty</td><td>Support Tech</td><td>Purple</td></tr>
    </tbody>
    <tbody>
      <tr><th colspan="3">Group 2</th></tr>
      <tr><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr>
    </tbody>
  </table>
</div>
```

### Pinned rows + pinned cols

`table-pin-cols` pins both the leading and trailing `<th>` cells of each row. Use `table-xs` and a fixed-size scroll container.

```html
<div class="overflow-x-auto h-96 w-96">
  <table class="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th><td>Name</td><td>Job</td><td>Company</td><td>Color</td><th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>QA Specialist</td>
        <td>Acme</td>
        <td>Blue</td>
        <th>1</th>
      </tr>
      <!-- repeat <tr> rows; the leading and trailing <th> cells stay pinned -->
    </tbody>
  </table>
</div>
```

### Table with visual elements (avatar, badge)

Mix any margaui components into cells.

```html
<tr>
  <th><label><input type="checkbox" class="checkbox" /></label></th>
  <td>
    <div class="flex items-center gap-3">
      <div class="avatar">
        <div class="mask mask-squircle h-12 w-12">
          <img src="…" alt="Avatar" />
        </div>
      </div>
      <div>
        <div class="font-bold">Hart Hagerty</div>
        <div class="text-sm opacity-50">United States</div>
      </div>
    </div>
  </td>
  <td>
    Zemlak, Daniel and Leannon
    <br />
    <span class="badge badge-ghost badge-sm">Desktop Support</span>
  </td>
  <td>Purple</td>
  <th><button class="btn btn-ghost btn-xs">details</button></th>
</tr>
```
