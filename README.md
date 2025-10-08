# @ras-sh/ui

Shared UI library for ras.sh projects.

## Installation

```bash
pnpm add @ras-sh/ui
```

## Configuration

### Vite

#### 1. Install dependencies

```bash
pnpm add -D @tailwindcss/vite tailwindcss
```

#### 2. Configure Vite

Add the Tailwind CSS plugin to your `vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### 3. Import styles

Import the global styles in your main CSS file:

```css
@import "tailwindcss";

@source "../../node_modules/@ras-sh/ui";
@import "@ras-sh/ui/globals.css";
```

Adjust the paths based on your project structure.

### Next.js

#### 1. Install dependencies

```bash
pnpm add -D @tailwindcss/postcss tailwindcss
```

#### 2. Configure PostCSS

Create or update `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

#### 3. Import styles

Import the global styles in your root layout or main CSS file:

```css
@import "tailwindcss";

@source "../node_modules/@ras-sh/ui";
@import "@ras-sh/ui/globals.css";
```

Adjust the paths based on your project structure.

## Usage

### Import Options

The library supports tree-shaking and offers two import styles:

**Barrel import (recommended for convenience):**
```tsx
import { Button, Card } from "@ras-sh/ui";
```

**Subpath import (optimal for tree-shaking):**
```tsx
import { Button } from "@ras-sh/ui/button";
import { Card } from "@ras-sh/ui/card";
```

Both styles are tree-shaken properly. Component-specific dependencies are automatically bundled.

### Peer Dependencies

Some components require additional peer dependencies. Install only what you need:

```bash
# For Form components
pnpm add react-hook-form @hookform/resolvers zod

# For Table components
pnpm add @tanstack/react-table

# For Chart components
pnpm add recharts

# For Calendar/date components
pnpm add date-fns

# For icons
pnpm add lucide-react
```

### Example

```tsx
import { Button } from "@ras-sh/ui";

export default function Home() {
  return <Button>Click me</Button>;
}
```

## Examples

Check out the example projects to see how to use the library:

- [Vite Example](./examples/vite) - React app using Vite
- [Next.js Example](./examples/nextjs) - Next.js app using Webpack
- [Next.js Turbopack Example](./examples/nextjs-turbopack) - Next.js app using Turbopack
