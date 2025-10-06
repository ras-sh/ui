import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const pkgPath = resolve("package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

// Base exports
const exports: Record<string, unknown> = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
  },
  "./globals.css": "./dist/globals.css",
};

// Get all components
const componentsDir = resolve("dist/components/ui");
const components = readdirSync(componentsDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(".js", ""));

for (const comp of components) {
  exports[`./${comp}`] = {
    types: `./dist/components/ui/${comp}.d.ts`,
    import: `./dist/components/ui/${comp}.js`,
  };
}

// Get all hooks
const hooksDir = resolve("dist/hooks");
const hooks = readdirSync(hooksDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(".js", ""));

for (const hook of hooks) {
  exports[`./${hook}`] = {
    types: `./dist/hooks/${hook}.d.ts`,
    import: `./dist/hooks/${hook}.js`,
  };
}

// Get all lib files
const libDir = resolve("dist/lib");
const libs = readdirSync(libDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(".js", ""));

for (const lib of libs) {
  exports[`./${lib}`] = {
    types: `./dist/lib/${lib}.d.ts`,
    import: `./dist/lib/${lib}.js`,
  };
}

pkg.exports = exports;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

console.log(
  `✓ Generated ${components.length} component, ${hooks.length} hook, and ${libs.length} lib exports`
);
