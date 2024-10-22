import fs from "node:fs";

export default {
    watch: ["src/db/movies.json"],
    load(watchedFiles) {
        return watchedFiles.map((file) => {
            const movies = JSON.parse(fs.readFileSync(file, "utf-8"));
            return movies[0];
        });
    },
};
