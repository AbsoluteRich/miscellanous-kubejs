ServerEvents.recipes((kubejs) => {
    kubejs.custom({
        type: "functionalstorage:custom_compacting",
        higher_input: {
            count: 1,
            id: "minecraft:copper_ingot"
        },
        lower_input: {
            count: 9,
            id: "create:copper_nugget"
        }
    })
});