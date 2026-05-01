# modal

_dialog / pop-up (native `<dialog>` or checkbox-driven)_

## What it does

Pop-up dialog. Preferred form is the native `<dialog>` variant; legacy variants use a hidden checkbox or anchor link.

## When to use

- Confirmations, focused tasks that interrupt the page flow.
- For non-blocking notifications, use **toast** or **alert**.
- For lighter inline reveals, use **dropdown**.

## Core classes

`modal`; positioning `modal-top|middle|bottom`; inner `modal-box`, `modal-action`, `modal-backdrop`; helper `modal-open`.

## Examples

### Dialog modal closes when clicked outside

Source: `playground/components/modal/dialog-modal-closes-when-clicked-outside.html`

```html
<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">open modal</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```

### Dialog modal with a close button at corner

Source: `playground/components/modal/dialog-modal-with-a-close-button-at-corner.html`

```html
<!-- You can open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
```

### Dialog modal with custom width

Source: `playground/components/modal/dialog-modal-with-custom-width.html`

```html
<!-- You can open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_4.showModal()">open modal</button>
<dialog id="my_modal_4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

### Dialog modal

Source: `playground/components/modal/dialog-modal.html`

```html
<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

### Modal that closes when clicked outside

Source: `playground/components/modal/modal-that-closes-when-clicked-outside.html`

```html
<!-- The button to open modal -->
<label for="my_modal_7" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_7" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="modal-backdrop" for="my_modal_7">Close</label>
</div>
```

### Modal using anchor link

Source: `playground/components/modal/modal-using-anchor-link.html`

```html
<!-- The button to open modal -->
<a href="#my_modal_8" class="btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="modal" role="dialog" id="my_modal_8">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="modal-action">
      <a href="#" class="btn">Yay!</a>
    </div>
  </div>
</div>
```

### Modal using checkbox

Source: `playground/components/modal/modal-using-checkbox.html`

```html
<!-- The button to open modal -->
<label for="my_modal_6" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_6" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="modal-action">
      <label for="my_modal_6" class="btn">Close!</label>
    </div>
  </div>
</div>
```

### Responsive

Source: `playground/components/modal/responsive.html`

```html
<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_5.showModal()">open modal</button>
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```
