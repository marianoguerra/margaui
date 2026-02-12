import { entries } from "./vfs.js";
import { makeCompiler } from "./twcompiler.js";

const SKIP = new Set(["./themes/theme.css"]);
const sections = ["./base/", "./themes/", "./src/"];

export function buildInput(entries) {
  const imports = Object.keys(entries)
    .filter(k => sections.some(s => k.startsWith(s)))
    .filter(k => !SKIP.has(k))
    .map(k => `@import "${k}";`)
    .join("\n");
  return `@import "tailwindcss" source(none);\n${imports}`;
}

let _compiler = null;
export async function getCompiler() {
  _compiler ??= await makeCompiler(buildInput(entries), entries, {});
  return _compiler;
}

export async function compile(classes) {
  return (await getCompiler()).build(classes);
}
