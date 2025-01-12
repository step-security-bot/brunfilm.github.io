import { describe, expect, it } from "vitest";
// import { resolve } from "path";
// import { serve } from "vite";
// import { createApp } from "vitepress";
// import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Simple test", () => {
    it("should work", () => {
        expect(1 + 1).toBe(2);
    });
});

// describe("VitePress site", () => {
//     let server;
//     let url;

//     // Setup server before running tests
//     beforeAll(async () => {
//         const app = createApp({
//             root: resolve(__dirname, "../"),
//         });

//         server = await serve(app);
//         url = `http://localhost:${server.config.server.port}`;
//     });

//     // Test if the homepage loads correctly
//     it("should load the homepage", async () => {
//         const res = await fetch(url);
//         const text = await res.text();
//         expect(text).toContain("Underground Movie Makers");
//     });

//     // Test if navigation works
//     it("should navigate to historia page", async () => {
//         const res = await fetch(`${url}/historia.html`);
//         const text = await res.text();
//         expect(text).toContain("Ett Kollektivs Ursprung");
//     });

//     it("should navigate to Filmer page", async () => {
//         const res = await fetch(`${url}/filmer/`);
//         const text = await res.text();
//         expect(text).toContain("Our Cinematic Treasures");
//     });

//     it("should navigate to Filmer page", async () => {
//         const res = await fetch(`${url}/om.html`);
//         const text = await res.text();
//         expect(text).toContain("Icon");
//     });

//     // Cleanup server after tests
//     afterAll(async () => {
//         await server.close();
//     });
// });
