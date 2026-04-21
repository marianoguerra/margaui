/*
 * Shared page-shell helpers used by both the editor and the playground:
 *   - compilePageStyles: compile a fixed list of utility classes on boot.
 *   - createThemeSwitcher: populate a <select> with the theme list and
 *     install an adopted CSSStyleSheet that follows the selected theme.
 */

function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ":root, :host, $1{");
}

export function compilePageStyles(compiler, classes, styleEl) {
  styleEl.textContent = compiler.build(classes);
}

export async function createThemeSwitcher({
  selectEl,
  themesJsonUrl,
  themesBaseUrl,
  initial = "light",
  onChange,
}) {
  const themeKeys = await fetch(themesJsonUrl).then((r) => r.json());
  for (const t of themeKeys) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    if (t === initial) opt.selected = true;
    selectEl.appendChild(opt);
  }

  const loadTheme = (name) =>
    fetch(`${themesBaseUrl}/${name}.css`).then((r) => r.text());

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(adoptableThemeCss(await loadTheme(initial)));
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  document.body.setAttribute("data-theme", initial);

  let current = initial;
  selectEl.addEventListener("change", async () => {
    current = selectEl.value;
    sheet.replaceSync(adoptableThemeCss(await loadTheme(current)));
    document.body.setAttribute("data-theme", current);
    onChange?.(current);
  });

  return {
    sheet,
    get current() {
      return current;
    },
  };
}
