import { defineConfig, type DefaultTheme, type UserConfig } from "vitepress";

const config: UserConfig<DefaultTheme.Config> = {
    lang: "sv-SE",
    title: "Brunfilm",
    description: "Sagan om Brunfilm.",
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
        logo: { light: "/logo-dark.svg", dark: "/logo-light.svg", alt: "Brunfilm logo" },
        siteTitle: false,
        nav: [
            { text: "Hem", link: "/" },
            { text: "Historia", link: "/historia/" },
            { text: "Filmer", link: "/filmer/" },
            { text: "Om", link: "/om" },
        ],
        footer: {
            copyright: "Copyright © 1999-present Brunfilm",
        },
        externalLinkIcon: true,
        editLink: {
            pattern: "https://github.com/Brunfilm/brunfilm.github.io/blob/main/src/:path",
            text: "Edit this page on GitHub",
        },
    },
    vite: {
        plugins: [],
    },
};

export default defineConfig(config);
