//@ts-check
export interface Movie {
    url: string;
    typ: string;
    title: string;
    release: number;
    description: string;
    slug: string;
    poster: string;
    kategori: string[];
    dvd: string | string[];
}
