import { describe, expect, it } from "vitest";
// import { resolve } from "path";
// import { createApp } from "vitepress";
// import { describe, expect, it } from "vitest";

describe("Simple test", () => {
    it("should work", () => {
        expect(1 + 1).toBe(2);
    });
});

// describe("Snapshot Testing", () => {
//     it("matches the homepage snapshot", async () => {
//         const app = createApp({
//             root: resolve(__dirname, "../"),
//         });

//         const { html } = await app.render();
//         expect(html).toMatchSnapshot();
//     });
// });
