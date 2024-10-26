import { codecovVitePlugin } from "@codecov/vite-plugin";
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
        plugins: [
            codecovVitePlugin({
                enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
                bundleName: "BF Prod Bundle",
                uploadToken: process.env.CODECOV_TOKEN,
            }),
        ],
        test: {
            coverage: {
                provider: "v8", // or 'istanbul'
                outputFile: "/tests/coverage/",
            },
        },
    },
});
