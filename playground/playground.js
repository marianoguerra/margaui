import { getCompiler } from "../margaui.js";
import { PreviewComponent } from "./preview-component.js";

// Init compiler (shared with margaui.js)
const compiler = await getCompiler();
PreviewComponent.compiler = compiler;

// Compile only DaisyUI component classes needed by the page shell
const PAGE_CLASSES = [
  "navbar", "bg-base-100",
  "select", "select-sm", "select-bordered",
  "menu", "menu-title", "active",
  "loading", "loading-spinner", "loading-lg",
  "tabs", "tabs-lift", "tab", "tab-content",
  "badge", "badge-sm", "badge-ghost",
  "flex", "gap-2", "justify-end", "mt-4", "opacity-50",
];
const pageCss = compiler.build(PAGE_CLASSES);
document.getElementById("page-styles").textContent = pageCss;

// Reveal page
document.body.style.visibility = "visible";

// Theme setup
const themeSelect = document.getElementById("theme-select");
const themeKeys = await fetch("./themes.json").then(r => r.json());

for (const t of themeKeys) {
  const opt = document.createElement("option");
  opt.value = t;
  opt.textContent = t;
  if (t === "light") opt.selected = true;
  themeSelect.appendChild(opt);
}

function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ':root, :host, $1{');
}

const themeSheet = new CSSStyleSheet();
themeSheet.replaceSync(adoptableThemeCss(await fetch("../themes/light.css").then(r => r.text())));
document.adoptedStyleSheets = [...document.adoptedStyleSheets, themeSheet];
PreviewComponent.themeSheet = themeSheet;

let currentTheme = "light";
themeSelect.addEventListener("change", async () => {
  currentTheme = themeSelect.value;
  const css = await fetch(`../themes/${currentTheme}.css`).then(r => r.text());
  themeSheet.replaceSync(adoptableThemeCss(css));
  document.body.setAttribute("data-theme", currentTheme);
});

// Fetch component tree
const components = await fetch("./components.json").then(r => r.json());

// Render sidebar menu
const menuEl = document.getElementById("menu");
const menuTitle = document.createElement("li");
menuTitle.className = "menu-title";
menuTitle.textContent = "Components";
menuEl.appendChild(menuTitle);

for (const comp of components) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = comp.name;
  a.href = `#${comp.name}`;
  a.dataset.name = comp.name;
  li.appendChild(a);
  menuEl.appendChild(li);
}

// Helper: humanize file name
function humanize(filename) {
  return filename
    .replace(".html", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Navigation
const contentEl = document.getElementById("pg-content");
const loadingEl = document.getElementById("pg-loading");
let activeLink = null;

function showComponent(name) {
  const comp = components.find(c => c.name === name);
  if (!comp) return;

  // Update active menu item
  if (activeLink) activeLink.classList.remove("active");
  activeLink = menuEl.querySelector(`a[data-name="${name}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Clear previous
  contentEl.innerHTML = "";
  loadingEl.classList.add("pg-hidden");

  // Component heading
  const heading = document.createElement("h1");
  heading.className = "pg-heading";
  heading.textContent = humanize(name);
  contentEl.appendChild(heading);

  for (let i = 0; i < comp.files.length; i++) {
    const file = comp.files[i];
    const tabsName = `tabs-${name}-${i}`;

    // Section wrapper
    const section = document.createElement("div");
    section.className = "pg-section";

    // Section title
    const title = document.createElement("h3");
    title.className = "pg-section-title";
    const hash = document.createElement("span");
    hash.className = "pg-hash";
    hash.textContent = "#";
    title.appendChild(hash);
    title.appendChild(document.createTextNode(humanize(file)));
    const editLink = document.createElement("a");
    editLink.className = "pg-edit-link";
    editLink.href = `../editor/?component=${encodeURIComponent(name)}&file=${encodeURIComponent(file)}&theme=${encodeURIComponent(currentTheme)}`;
    editLink.textContent = "Edit";
    editLink.addEventListener("click", () => {
      editLink.href = `../editor/?component=${encodeURIComponent(name)}&file=${encodeURIComponent(file)}&theme=${encodeURIComponent(currentTheme)}`;
    });
    title.appendChild(editLink);
    section.appendChild(title);

    // Tabs
    const tabsDiv = document.createElement("div");
    tabsDiv.className = "tabs tabs-lift";

    // Preview tab
    const previewRadio = document.createElement("input");
    previewRadio.type = "radio";
    previewRadio.name = tabsName;
    previewRadio.className = "tab";
    previewRadio.setAttribute("aria-label", "Preview");
    previewRadio.checked = true;

    const previewContent = document.createElement("div");
    previewContent.className = "tab-content pg-preview";

    const previewInner = document.createElement("div");
    previewInner.className = "pg-preview-inner";
    const daisyEl = document.createElement("preview-component");
    daisyEl.setAttribute("html-src", `./components/${name}/${file}`);
    previewInner.appendChild(daisyEl);
    previewContent.appendChild(previewInner);

    const statsDiv = document.createElement("div");
    statsDiv.className = "flex gap-2 justify-end mt-4 opacity-50";
    previewContent.appendChild(statsDiv);

    // HTML tab
    const htmlRadio = document.createElement("input");
    htmlRadio.type = "radio";
    htmlRadio.name = tabsName;
    htmlRadio.className = "tab";
    htmlRadio.setAttribute("aria-label", "HTML");

    const htmlContent = document.createElement("div");
    htmlContent.className = "tab-content pg-code";
    const htmlPre = document.createElement("pre");
    const htmlCode = document.createElement("code");
    htmlCode.textContent = "Loading...";
    htmlPre.appendChild(htmlCode);
    htmlContent.appendChild(htmlPre);

    // CSS tab
    const cssRadio = document.createElement("input");
    cssRadio.type = "radio";
    cssRadio.name = tabsName;
    cssRadio.className = "tab";
    cssRadio.setAttribute("aria-label", "CSS");

    const cssContent = document.createElement("div");
    cssContent.className = "tab-content pg-code";
    const cssPre = document.createElement("pre");
    const cssCode = document.createElement("code");
    cssCode.textContent = "Loading...";
    cssPre.appendChild(cssCode);
    cssContent.appendChild(cssPre);

    // Listen for load event
    daisyEl.addEventListener("load", (e) => {
      htmlCode.textContent = e.detail.html;
      cssCode.textContent = e.detail.css;
      const kb = (e.detail.cssBytes / 1024).toFixed(2);
      const ms = e.detail.buildMs.toFixed(1);
      statsDiv.innerHTML =
        `<span class="badge badge-sm badge-ghost">${kb} KB</span>` +
        `<span class="badge badge-sm badge-ghost">${ms} ms</span>`;
    });

    // Assemble tabs
    tabsDiv.appendChild(previewRadio);
    tabsDiv.appendChild(previewContent);
    tabsDiv.appendChild(htmlRadio);
    tabsDiv.appendChild(htmlContent);
    tabsDiv.appendChild(cssRadio);
    tabsDiv.appendChild(cssContent);

    section.appendChild(tabsDiv);
    contentEl.appendChild(section);
  }
}

// Hash navigation
function navigateFromHash() {
  const hash = location.hash.replace("#", "");
  const name = hash || (components.length ? components[0].name : "");
  if (name) showComponent(name);
}

window.addEventListener("hashchange", navigateFromHash);
navigateFromHash();
