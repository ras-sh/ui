import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.stories.*",
    "!src/**/*.test.*",
  ],
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

    // Icons
    "lucide-react",

    // Styling
    "tailwindcss",

    // Utilities - keep external as consumers likely have these
    "zod",
    "date-fns",
  ],
});
