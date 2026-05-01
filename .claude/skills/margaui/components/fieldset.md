# fieldset

_themed `<fieldset>` group with legend + label slots_

## What it does

Themed grouping container for related form inputs with `fieldset-legend` and helper `fieldset-label`.

## When to use

- Logical groupings of form fields (login form, address form section).

## Examples

### Fieldset fieldset legend and label

Source: `playground/components/fieldset/fieldset-fieldset-legend-and-label.html`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="label">You can edit page title later on from settings</p>
</fieldset>
```

### Fieldset with background and border

Source: `playground/components/fieldset/fieldset-with-background-and-border.html`

```html
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Page title</legend>
  <input type="text" class="input" placeholder="My awesome page" />
  <p class="label">You can edit page title later on from settings</p>
</fieldset>
```

### Fieldset with multiple inputs

Source: `playground/components/fieldset/fieldset-with-multiple-inputs.html`

```html
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Page details</legend>

  <label class="label">Title</label>
  <input type="text" class="input" placeholder="My awesome page" />

  <label class="label">Slug</label>
  <input type="text" class="input" placeholder="my-awesome-page" />

  <label class="label">Author</label>
  <input type="text" class="input" placeholder="Name" />
</fieldset>
```

### Fieldset with multiple join items

Source: `playground/components/fieldset/fieldset-with-multiple-join-items.html`

```html
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Settings</legend>
  <div class="join">
    <input type="text" class="input join-item" placeholder="Product name" />
    <button class="btn join-item">save</button>
  </div>
</fieldset>
```

### Login form with fieldset

Source: `playground/components/fieldset/login-form-with-fieldset.html`

```html
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Login</legend>

  <label class="label">Email</label>
  <input type="email" class="input" placeholder="Email" />

  <label class="label">Password</label>
  <input type="password" class="input" placeholder="Password" />

  <button class="btn btn-neutral mt-4">Login</button>
</fieldset>
```
