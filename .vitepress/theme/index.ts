import "iconify-icon";
import DefaultTheme from "vitepress/theme";
import MovieLayout from "./components/MovieLayout.vue";
import type { Theme } from "vitepress";

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component("MovieLayout", MovieLayout);
    },
} satisfies Theme;
