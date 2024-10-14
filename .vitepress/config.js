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
        logo: "/logo.svg",
    },
});
