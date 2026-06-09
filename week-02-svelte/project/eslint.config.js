import js from "@eslint/js";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  js.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    files: ["**/*.{js,svelte}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"]
    }
  }
]);
