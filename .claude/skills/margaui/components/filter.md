# filter

_radio-button filter group (with reset)_

## What it does

Group of mutually exclusive `<input type="radio">` options styled as buttons, with a built-in reset.

## When to use

- Filter chips on listing pages.

## Examples

### Filter using html form checkboxes and a reset button

Source: `playground/components/filter/filter-using-html-form-checkboxes-and-a-reset-button.html`

```html
<form>
  <input class="btn" type="checkbox" name="frameworks" aria-label="Svelte"/>
  <input class="btn" type="checkbox" name="frameworks" aria-label="Vue"/>
  <input class="btn" type="checkbox" name="frameworks" aria-label="React"/>
  <input class="btn btn-square" type="reset" value="×"/>
</form>
```

### Filter using html form radio buttons and reset button

Source: `playground/components/filter/filter-using-html-form-radio-buttons-and-reset-button.html`

```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="frameworks" aria-label="Svelte"/>
  <input class="btn" type="radio" name="frameworks" aria-label="Vue"/>
  <input class="btn" type="radio" name="frameworks" aria-label="React"/>
</form>
```

### Filter without html form

Source: `playground/components/filter/filter-without-html-form.html`

```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="metaframeworks" aria-label="All"/>
  <input class="btn" type="radio" name="metaframeworks" aria-label="Sveltekit"/>
  <input class="btn" type="radio" name="metaframeworks" aria-label="Nuxt"/>
  <input class="btn" type="radio" name="metaframeworks" aria-label="Next.js"/>
</div>
```
