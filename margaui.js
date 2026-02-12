import { entries } from "./vfs.js";
import { makeCompiler } from "./twcompiler.js";

export function buildInput(entries) {
  const imports = Object.keys(entries)
    .filter(k => !k.startsWith("./tw/") && k !== "tailwindcss")
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
