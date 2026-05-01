# hover-3d

_3D tilt effect on hover (cards / images)_

## What it does

CSS-only 3D tilt-on-hover for cards and images.

## When to use

- Showcase product cards, portfolio tiles.

## Examples

### 3d card hover effect

Source: `playground/components/hover-3d/3d-card-hover-effect.html`

```html
<a href="#" class="hover-3d my-12 mx-2 cursor-pointer">
  
  <!-- content -->
  <div class="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
    <div class="card-body">
      <div class="flex justify-between mb-10">
        <div class="font-bold">BANK OF LATVERIA</div>
        <div class="text-5xl opacity-10">❁</div>
      </div>
      <div class="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
      <div class="flex justify-between">
        <div>
          <div class="text-xs opacity-20">CARD HOLDER</div>
          <div>VICTOR VON D.</div>
        </div>
        <div>
          <div class="text-xs opacity-20">EXPIRES</div>
          <div>29/08</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</a>
```

### 3d hover effect for image gallery

Source: `playground/components/hover-3d/3d-hover-effect-for-image-gallery.html`

```html
<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div class="hover-3d">
  <!-- content -->
  <figure class="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### 3d image hover effect

Source: `playground/components/hover-3d/3d-image-hover-effect.html`

```html
<div class="hover-3d">
  <!-- content -->
  <figure class="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  <!-- 8 empty divs needed for the 3D effect -->
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
