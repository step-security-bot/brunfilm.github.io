import js from "@eslint/js";
import markdown from "@eslint/markdown";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.md"],
        plugins: {
            markdown,
        },
        processor: "markdown/markdown",
    },
    {
        files: ["**/*.{js,mjs,cjs,vue}"],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    eslintPluginPrettierRecommended,
    ...eslintPluginVue.configs["flat/recommended"],
    {
        files: ["*.vue", "**/*.vue"],
        parser: "vue-eslint-parser",
        parserOptions: {
            parser: "espree",
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    {
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
        },
    },
    eslintConfigPrettier,
];
