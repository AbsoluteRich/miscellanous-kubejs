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

    kubejs.recipes.create.mixing(
        "appflux:redstone_crystal",
        [
            "minecraft:redstone_block",
            "ae2:fluix_dust",
            "ae2:sky_dust",
            Fluid.of("minecraft:water", 250)
        ]
    )
});