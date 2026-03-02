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

    kubejs.recipes.create.mixing(
        "2x megacells:sky_steel_ingot",
        [
            "ae2:charged_certus_quartz_crystal",
            "minecraft:iron_ingot",
            "ae2:sky_stone_block",
            Fluid.of("minecraft:lava", 250)
        ]
    )
});