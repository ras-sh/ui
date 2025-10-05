import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  external: [
    // React ecosystem
    "react",
    "react-dom",
    "react/jsx-runtime",

    // Form libraries
    "react-hook-form",
    "@hookform/resolvers",

    // Table libraries
    "@tanstack/react-table",

    // Charts
    "recharts",

    // Carousel
    "embla-carousel-react",

    // Icons
    "lucide-react",

    // Styling
    "tailwindcss",

    // Utilities - keep external as consumers likely have these
    "zod",
    "date-fns",
  ],
});
