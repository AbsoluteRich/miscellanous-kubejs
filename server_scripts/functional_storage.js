ServerEvents.recipes((kubejs) => {
    kubejs.custom({
        type: "functionalstorage:custom_compacting",
        higher_input: {
            count: 1,
            item: "minecraft:copper_ingot"
        },
        lower_input: {
            count: 9,
            item: "create:copper_nugget"
        }
    })

    kubejs.custom({
        type: "functionalstorage:custom_compacting",
        higher_input: {
            count: 1,
            item: "minecraft:honeycomb_block"
        },
        lower_input: {
            count: 9,
            item: "minecraft:honeycomb"
        }
    })

    kubejs.custom({
        type: "functionalstorage:custom_compacting",
        higher_input: {
            count: 1,
            item: "minecraft:snow_block"
        },
        lower_input: {
            count: 4,
            item: "minecraft:snowball"
        }
    })
});