import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import js from "@eslint/js";

// import json from "@eslint/json";
// import markdown from "@eslint/markdown";
// import eslintConfigPrettier from "eslint-config-prettier"; //Dont use

export default [
    {
        name: "Global include and exclude",
        // files: [""],
        ignores: [".vitepress/dist", "**/cache", "coverage", "tests", "package-lock.json"],
    },

    // Globals
    {
        name: "Globals",
        languageOptions: {
            globals: globals.browser,
        },
    },

    // js
    js.configs.recommended,
    {
        name: "JS Config",
        files: ["*.mjs", "*.js", "**/*.mjs", "**/*.js"],
    },

    // vue
    ...eslintPluginVue.configs["flat/recommended"],
    {
        name: "VUE Config",
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parserOptions: {
                parser: "vue-eslint-parser",
            },
        },
    },

    // JSON
    // {
    //     name: "JSON",
    //     files: ["**/*.json"],
    //     ignores: ["package-lock.json"],
    //     language: "json/json",
    //     ...json.configs.recommended,
    // },

    // JSONC
    // {
    //     name: "JSONC",
    //     files: ["**/*.jsonc", ".vscode/*.json"],
    //     language: "json/jsonc",
    //     languageOptions: {
    //         allowTrailingCommas: true,
    //     },
    //     ...json.configs.recommended,
    // },

    // JSON5
    // {
    //     name: "JSON5",
    //     files: ["**/*.json5"],
    //     language: "json/json5",
    //     ...json.configs.recommended,
    // },

    // md
    // ...markdown.configs.recommended,
    // {
    //     name: "Markdown Config",
    //     files: ["**/*.md"],
    //     plugins: {
    //         markdown,
    //     },
    //     language: "markdown/commonmark",
    // },

    // prettier
    eslintPluginPrettierRecommended,
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
