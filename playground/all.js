import { getCompiler } from "../margaui.js";
import { PreviewComponent } from "./preview-component.js";
import { compilePageStyles, createThemeSwitcher } from "../editor/shell.js";

// Init compiler and hand it to <preview-component>
const compiler = await getCompiler();
PreviewComponent.compiler = compiler;

// Page-shell utility classes
compilePageStyles(compiler, [
  "navbar", "bg-base-100",
  "select", "select-sm", "select-bordered",
  "loading", "loading-spinner", "loading-lg",
], document.getElementById("page-styles"));

document.body.style.visibility = "visible";

// Theme selector (shared sheet fed into every preview's shadow DOM)
const urlParams = new URLSearchParams(location.search);
const themeSwitcher = await createThemeSwitcher({
  selectEl: document.getElementById("theme-select"),
  themesJsonUrl: "./themes.json",
  themesBaseUrl: "../themes",
  initial: urlParams.get("theme") || "light",
});
PreviewComponent.themeSheet = themeSwitcher.sheet;

// Humanize file names: "my-example.html" -> "My Example"
function humanize(filename) {
  return filename
    .replace(/\.html$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Each .all-preview uses `transform: translateZ(0)` to re-root `position: fixed`
// descendants (toast / fab / dock) to the preview box, so previews that would
// otherwise overlay the whole viewport stay inside their card.
const components = await fetch("./components.json").then((r) => r.json());
const content = document.getElementById("all-content");
const loading = document.getElementById("all-loading");

function headingLink(tag, id, text) {
  const h = document.createElement(tag);
  h.id = id;
  const a = document.createElement("a");
  a.href = `#${id}`;
  a.className = "all-anchor";
  a.innerHTML = `<span class="all-hash" aria-hidden="true">#</span>${text}`;
  h.appendChild(a);
  return h;
}

for (const comp of components) {
  const h1 = headingLink("h1", comp.name, humanize(comp.name));
  h1.className = "all-heading";
  content.appendChild(h1);

  for (const file of comp.files) {
    const fileId = `${comp.name}--${file.replace(/\.html$/, "")}`;
    const h2 = headingLink("h2", fileId, humanize(file));
    h2.className = "all-subheading";
    content.appendChild(h2);

    const preview = document.createElement("div");
    preview.className = "all-preview";
    const inner = document.createElement("div");
    inner.className = "all-preview-inner";
    const el = document.createElement("preview-component");
    el.setAttribute("html-src", `./components/${comp.name}/${file}`);
    inner.appendChild(el);
    preview.appendChild(inner);
    content.appendChild(preview);
  }
}

loading.remove();
