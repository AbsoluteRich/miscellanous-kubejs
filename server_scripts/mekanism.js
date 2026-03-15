ServerEvents.recipes((kubejs) => {
    // Crushing Wheel recipes
    // Trades bonus resource production for ease of automation
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:blaze_rod"
            }
        },
        output: {
            item: "3x minecraft:blaze_powder"
        }
    })

    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:netherrack"
            }
        },
        output: {
            item: "create:cinder_flour"
        }
    })

    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "minecraft:sugar_cane"
            }
        },
        output: {
            item: "2x minecraft:sugar"
        }
    })
})