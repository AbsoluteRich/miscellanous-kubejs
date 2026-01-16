ServerEvents.recipes((kubejs) => {
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:ender_pearl"
            }
        },
        output: {
            item: "ae2:ender_dust"
        }
    })
});