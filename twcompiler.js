import { compile } from "./tailwindcss.js";

export async function makeCompiler(
  input,
  vfs,
  { from = "entry.css", base = "" },
) {
  return await compile(input, {
    from,
    base,
    async loadModule(id, base, resourceHint) {
      console.warn("loadModule", { id, base, resourceHint });
    },
    async loadStylesheet(id, base) {
      const content = vfs[id];
      if (content !== undefined) {
        return { content, base: "" };
      } else {
        console.warn("loadStylesheet 404", { id, base });
        return { content: "", base: "" };
      }
    },
  });
}
