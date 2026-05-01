# textarea

_styled `<textarea>`_

## What it does

Themed `<textarea>`.

## When to use

- Multi-line text input.
- For single-line text input, use **input**.

## Core classes

`textarea`; color `textarea-primary|…`; style `textarea-ghost`; size `textarea-xs|sm|md|lg|xl`.

## Examples

### Textarea

Source: `playground/components/textarea/textarea.html`

```html
<textarea class="textarea" placeholder="Bio"></textarea>
```

### Disabled

Source: `playground/components/textarea/disabled.html`

```html
<textarea class="textarea" placeholder="Bio" disabled></textarea>
```

### Ghost no background

Source: `playground/components/textarea/ghost-no-background.html`

```html
<textarea class="textarea textarea-ghost" placeholder="Bio"></textarea>
```

### Sizes

Source: `playground/components/textarea/sizes.html`

```html
<textarea placeholder="Bio" class="textarea textarea-xs"></textarea>

<textarea placeholder="Bio" class="textarea textarea-sm"></textarea>

<textarea placeholder="Bio" class="textarea textarea-md"></textarea>

<textarea placeholder="Bio" class="textarea textarea-lg"></textarea>

<textarea placeholder="Bio" class="textarea textarea-xl"></textarea>
```

### Textarea colors

Source: `playground/components/textarea/textarea-colors.html`

```html
<textarea placeholder="Primary" class="textarea textarea-primary"></textarea>
<textarea placeholder="Secondary" class="textarea textarea-secondary"></textarea>
<textarea placeholder="Accent" class="textarea textarea-accent"></textarea>
<textarea placeholder="Neutral" class="textarea textarea-neutral"></textarea>
<textarea placeholder="Info" class="textarea textarea-info"></textarea>
<textarea placeholder="Success" class="textarea textarea-success"></textarea>
<textarea placeholder="Warning" class="textarea textarea-warning"></textarea>
<textarea placeholder="Error" class="textarea textarea-error"></textarea>
```

### With form control and labels

Source: `playground/components/textarea/with-form-control-and-labels.html`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">Your bio</legend>
  <textarea class="textarea h-24" placeholder="Bio"></textarea>
  <div class="label">Optional</div>
</fieldset>
```
