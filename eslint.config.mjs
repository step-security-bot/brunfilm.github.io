import pluginJs from "@eslint/js";
import markdown from "@eslint/markdown";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
// import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
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
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    eslintPluginPrettierRecommended,
];
