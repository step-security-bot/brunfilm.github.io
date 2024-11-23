import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
// import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pluginCypress from "eslint-plugin-cypress/flat";
import oxlint from "eslint-plugin-oxlint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import vue from "eslint-plugin-vue";
import globals from "globals";

export default [
    {
        name: "Global include and exclude",
        files: ["**/*.{js,mjs,cjs,vue}"],
        ignores: ["dist", "dist-ssr", "cache", "coverage", "tests", "package-lock.json"],
    },
    {
        name: "Globals",
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        name: "Js/Recommended",
        ...js.configs.recommended,
        files: ["*.{js,mjs,cjs}"],
    },
    ...markdown.configs.recommended,
    ...vue.configs["flat/recommended"],
    {
        name: "Vitest/Recommended",
        ...vitest.configs.recommended,
        ...vitest.configs.env,
        files: ["tests/**", "src/**/__tests__/*"],
    },
    {
        name: "Cypress/Recommended",
        ...pluginCypress.configs.recommended,
        files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}", "cypress/support/**/*.{js,ts,jsx,tsx}"],
    },
    {
        name: "Oxlint/Recommended",
        ...oxlint.configs["flat/recommended"],
    },
    {
        name: "Json/Recommended",
        ...json.configs.recommended,
        files: ["**/*.json"],
        ignores: ["package-lock.json"],
        language: "json/json",
    },
    {
        name: "JsonC/Recommended",
        ...json.configs.recommended,
        files: ["**/*.jsonc", ".vscode/*.json"],
        language: "json/jsonc",
        languageOptions: {
            allowTrailingCommas: true,
        },
    },
    {
        name: "Json5/Recommended",
        ...json.configs.recommended,
        files: ["**/*.json5"],
        language: "json/json5",
    },
    //   {
    //     name: "Vue/skipFormatting",
    //     ...skipFormatting,
    //   },
    {
        name: "Prettier/Recommended",
        ...eslintPluginPrettierRecommended,
    },
];

// Remember to update your config when adding to eslint.
// {
//   "eslint.validate": [
//     "javascript",
//     "javascriptreact",
//     "json",
//     "jsonc",
//     "json5",
//     "yaml",
//     "toml"
//   ]
// }

// Add to eslint when released
// npm install @eslint/css -D
// https://github.com/eslint/css
