import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "sv-SE",
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
            { text: "Historia", link: "/historia" },
            { text: "Filmer", link: "/filmer" },
            { text: "Om", link: "/om" },
        ],
        footer: {
            copyright: "Copyright © 2002-present Brunfilm",
        },
        externalLinkIcon: true,
    },
    vite: {
        test: {
            reporters: ["default", "junit", "html"],
            outputFile: {
                default: "/tests/default/",
                junit: "/tests/junit/junit-report.xml",
                html: "/tests/html/",
            },
            coverage: {
                provider: "v8", // or 'istanbul'
                outputFile: "/tests/coverage/",
            },
        },
    },
});
