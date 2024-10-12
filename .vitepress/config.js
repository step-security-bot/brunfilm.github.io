import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Brunfilm",
    lang: "sv-SE",
    description: "En sida dedikerad till sagan om Brunfilm.",
    markdown: {
        image: {
            lazyLoading: true, // image lazy loading is disabled by default
        },
    },
    sitemap: {
        hostname: "https://www.brunfilm.com",
    },
    themeConfig: {
        logo: "/javascript.svg",
    },
});
