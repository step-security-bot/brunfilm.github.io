import { defineConfig } from "vitepress";

export default defineConfig({
    title: " ",
    lang: "sv-SE",
    description: "En sida dedikerad till sagan om Brunfilm.",
    srcDir: "./src",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    markdown: {
        image: {
            lazyLoading: true, // image lazy loading is disabled by default
        },
    },
    sitemap: {
        hostname: "https://www.brunfilm.com",
    },
    themeConfig: {
        // siteTitle: "Brunfilm",
        logo: { light: "/logo-dark.svg", dark: "/logo-light.svg", alt: "Brunfilm logo" },
        nav: [
            { text: "Hem", link: "/" },
            { text: "Historia", link: "/historia" },
            { text: "Filmer", link: "/filmer" },
            { text: "Om", link: "/om" },
        ],
        sidebar: [
            {
                text: "Guide",
                items: [
                    { text: "Introduction", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],
    },
});
