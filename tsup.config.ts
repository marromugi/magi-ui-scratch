/** reference: https://github.com/camomeui/camome/blob/main/packages/core/tsup.config.ts */

import fs from "fs/promises";
import path from "path";

import { globby } from "globby";
import { defineConfig } from "tsup";

async function createBulletFile(dist: string) {
  const componentDirs = await globby([`${dist}/*`], {
    onlyDirectories: true,
  });
  let esmContent = "";
  let dtsContent = "";
  let cjsRequires = "";
  let cjsModules = "";
  for (const dirPath of componentDirs) {
    const componentName = path.basename(dirPath);
    esmContent += `export * from "./${componentName}/index.mjs";\n`;
    dtsContent += `export * from "./${componentName}";\n`;
    cjsRequires += `const ${componentName} = require("./${componentName}/index.cjs");\n`;
    cjsModules += `  ...${componentName},\n`;
  }
  const cjsExports = `module.exports = {\n${cjsModules}\n}`;
  const cjsContent = `${cjsRequires}\n\n${cjsExports}`;
  await Promise.all([
    fs.writeFile(path.join(dist, "index.mjs"), esmContent),
    fs.writeFile(path.join(dist, "index.d.ts"), dtsContent),
    fs.writeFile(path.join(dist, "index.cjs"), cjsContent),
  ]);
}

async function copyStyleFile(src: string, dist: string) {
  const distDir = dist.slice(0, dist.lastIndexOf("/"));
  await fs.mkdir(distDir, { recursive: true });
  await fs.copyFile(src, dist);
}

export default defineConfig(async () => {
  return {
    entry: await globby("./src/components/**/index.ts"),
    minify: true,
    sourcemap: true,
    treeshake: true,
    dts: true,
    clean: true,
    format: ["esm", "cjs"],
    outExtension(ctx) {
      return { js: ctx.format === "esm" ? ".mjs" : ".cjs" };
    },
    onSuccess: async () => {
      await createBulletFile("./dist");
      await copyStyleFile(
        "./src/styles/index.css",
        "./dist/magi-ui.css",
      );
    },
  };
});
