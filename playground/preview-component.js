import { compileHtmlClasses } from "../editor/shell.js";

export class PreviewComponent extends HTMLElement {
  static compiler = null;
  static themeSheet = null;

  static get observedAttributes() {
    return ["html-src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._loadSequence = 0;
    this._rawHtml = "";
    this._rawCss = "";
  }

  get rawHtml() {
    return this._rawHtml;
  }

  get rawCss() {
    return this._rawCss;
  }

  async connectedCallback() {
    if (PreviewComponent.themeSheet) {
      this.shadowRoot.adoptedStyleSheets = [PreviewComponent.themeSheet];
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    await this.load();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.load();
    }
  }

  async load() {
    const currentSequence = ++this._loadSequence;
    const htmlSrc = this.getAttribute("html-src");

    if (!htmlSrc) return;

    const html = await fetch(htmlSrc).then((r) => r.text());
    if (currentSequence !== this._loadSequence) return;

    const { css, buildMs } = compileHtmlClasses(PreviewComponent.compiler, html);

    if (currentSequence !== this._loadSequence) return;

    this._rawHtml = html;
    this._rawCss = css;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div>${html}</div>
    `;

    const cssBytes = new Blob([css]).size;
    this.dispatchEvent(new CustomEvent("load", { detail: { html, css, buildMs, cssBytes } }));
  }
}

customElements.define("preview-component", PreviewComponent);
