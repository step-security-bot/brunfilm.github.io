export default {
    watch: ["./data/movies.data.js"],
    load() {
        return [
            {
                title: "The Mole Who Knew Too Much",
                year: 2022,
                description:
                    "A suspenseful thriller about a mole who accidentally overhears a plot to flatten the earth.",
            },
            {
                title: "Attack of the 50-Foot Gopher",
                year: 2021,
                description: "A heartwarming tale of a giant gopher looking for love in all the wrong burrows.",
            },
            {
                title: "Diggers: The Musical",
                year: 2020,
                description: "Sing along as our cast dances with shovels and serenades earthworms.",
            },
            {
                title: "The Good, The Bad, and The Muddy",
                year: 2019,
                description: "A Western set entirely in quicksand. Will our hero sink or swim?",
            },
        ];
    },
};
