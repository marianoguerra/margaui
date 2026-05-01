# hover-gallery

_swap images by hovering across regions_

## What it does

Image gallery that swaps the displayed image based on the horizontal hover position.

## When to use

- Product image galleries on listing pages.
- For user-paced slideshows, use **carousel**.

## Examples

### Hover gallery

Source: `playground/components/hover-gallery/hover-gallery.html`

```html
<figure class="hover-gallery max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
</figure>
```

### Hover gallery in a card

Source: `playground/components/hover-gallery/hover-gallery-in-a-card.html`

```html
<div class="card card-sm bg-base-200 max-w-60 shadow">
  <figure class="hover-gallery">
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
  </figure>
  <div class="card-body">
    <h2 class="card-title flex justify-between">
      daisyUI Hat
      <span class="font-normal">$25</span>
    </h2>
    <p>High Quality classic cap hat with stitch logo</p>
  </div>
</div>
```
