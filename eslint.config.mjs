import js from "@eslint/js";
import markdown from "@eslint/markdown";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";

export default [
    js.configs.recommended,
    ...eslintPluginVue.configs["flat/recommended"],
    ...markdown.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ["**/*.md"],
        plugins: {
            markdown,
        },
        language: "markdown/commonmark",
    },
    { files: ["**/*.{js,mjs,cjs}"] },
    { ignores: ["node_modules"] },
    {
        files: ["*.vue", "**/*.vue"],
        parser: "vue-eslint-parser",
        parserOptions: {
            vueFeatures: {
                filter: false,
                styleCSSVariableInjection: true,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    eslintConfigPrettier,
];
