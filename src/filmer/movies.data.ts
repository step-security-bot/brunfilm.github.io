//@ts-check
import { createContentLoader } from "vitepress";
import { type Movie } from "./types";

export default createContentLoader("filmer/**/index.md", {
    transform(rawData): Movie[] {
        return rawData
            .filter((page) => !page.url.endsWith("/filmer/"))
            .sort((a, b) => {
                return b.frontmatter.release - a.frontmatter.release;
            })
            .map((page) => {
                return {
                    url: page.url,
                    typ: page.frontmatter.typ,
                    title: page.frontmatter.title,
                    release: page.frontmatter.release,
                    description: page.frontmatter.description,
                    slug: page.frontmatter.slug,
                    poster: page.frontmatter.poster,
                    kategori: page.frontmatter.kategori,
                    dvd: page.frontmatter.dvd,
                };
            });
    },
});
