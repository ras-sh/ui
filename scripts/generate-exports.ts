import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const pkgPath = resolve("package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
const indexPath = resolve("src/index.ts");

// Regex patterns at top level for performance
const AS_REGEX = /\s+as\s+/;

// Helper function to extract named exports from a file
function extractNamedExports(filePath: string): {
  values: string[];
  types: string[];
} {
  try {
    const content = readFileSync(filePath, "utf-8");
    const valueExports: string[] = [];
    const typeExports: string[] = [];

    // Match: export type Name / export interface Name
    const directTypes = content.matchAll(
      /export\s+(?:type|interface)\s+(\w+)/g
    );
    for (const match of directTypes) {
      typeExports.push(match[1]);
    }

    // Match: export const/function/class Name
    const directValues = content.matchAll(
      /export\s+(?:const|function|class)\s+(\w+)/g
    );
    for (const match of directValues) {
      valueExports.push(match[1]);
    }

    // Match: export type { Name1, Name2 }
    const groupTypes = content.matchAll(/export\s+type\s+{\s*([^}]+)\s*}/g);
    for (const match of groupTypes) {
      const names = match[1]
        .split(",")
        .map((name) => name.trim().split(AS_REGEX)[0].trim())
        .filter(Boolean);
      typeExports.push(...names);
    }

    // Match: export { Name1, Name2 }
    const groupExports = content.matchAll(/export\s+{\s*([^}]+)\s*}/g);
    for (const match of groupExports) {
      const names = match[1]
        .split(",")
        .map((name) => name.trim().split(AS_REGEX)[0].trim())
        .filter(Boolean);
      // These could be values or types, we need to determine from the source
      // For now, assume they are values unless we find them in type declarations
      valueExports.push(...names);
    }

    return {
      values: [...new Set(valueExports)],
      types: [...new Set(typeExports)],
    };
  } catch {
    return { values: [], types: [] };
  }
}

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

// Update package.json
pkg.exports = exports;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

// Generate src/index.ts content
const indexContent: string[] = [];

// Export components with named exports
for (const comp of components) {
  const srcPath = resolve(`src/components/ui/${comp}.tsx`);
  const { values, types } = extractNamedExports(srcPath);

  if (values.length > 0) {
    indexContent.push(
      `export { ${values.join(", ")} } from "./components/ui/${comp}";`
    );
  }
  if (types.length > 0) {
    indexContent.push(
      `export type { ${types.join(", ")} } from "./components/ui/${comp}";`
    );
  }
}

// Export hooks with named exports
for (const hook of hooks) {
  const srcPath = resolve(`src/hooks/${hook}.ts`);
  const { values, types } = extractNamedExports(srcPath);

  if (values.length > 0) {
    indexContent.push(
      `export { ${values.join(", ")} } from "./hooks/${hook}";`
    );
  }
  if (types.length > 0) {
    indexContent.push(
      `export type { ${types.join(", ")} } from "./hooks/${hook}";`
    );
  }
}

// Export lib files with named exports
for (const lib of libs) {
  const srcPath = resolve(`src/lib/${lib}.ts`);
  const { values, types } = extractNamedExports(srcPath);

  if (values.length > 0) {
    indexContent.push(`export { ${values.join(", ")} } from "./lib/${lib}";`);
  }
  if (types.length > 0) {
    indexContent.push(
      `export type { ${types.join(", ")} } from "./lib/${lib}";`
    );
  }
}

// Write src/index.ts
writeFileSync(indexPath, `${indexContent.join("\n")}\n`);

console.log(
  `✓ Generated ${components.length} component, ${hooks.length} hook, and ${libs.length} lib exports`
);
console.log("✓ Updated src/index.ts with named exports for tree-shaking");

execSync("pnpm fix", { stdio: "inherit", cwd: process.cwd() });

console.log("✓ Ran pnpm fix");
