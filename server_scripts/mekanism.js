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
        type: "mekanism:enriching",
        input: {
            ingredient: {
                item: "minecraft:sugar_cane"
            }
        },
        output: {
            item: "2x minecraft:sugar"
        }
    })

    // Biofuel recipes for modded crops
    // Seeds
    let crushableCrops = {
        // Todo: Ars logs and Ars fruits, Farmer's Delight mushrooms and wild bushes, Twilight saplings and leaves, Tinkers saplings and leaves
        2: [
            "supplementaries:flax_seeds",
            "ars_nouveau:magebloom_crop",
            "ars_nouveau:sourceberry_bush",
            "farmersdelight:rice",
            "farmersdelight:rice_panicle",
            "farmersdelight:cabbage_seeds",
            "farmersdelight:tomato_seeds",
        ],
        5: [
            "supplementaries:flax",
            "ars_nouveau:magebloom",
            "alexsmobs:banana",
            "farmersdelight:cabbage",
            "farmersdelight:tomato",
            "farmersdelight:onion",
        ]
    }

    crushableCrops.forEach(biofuelCount, crops => {
        crops.forEach(item_id => {
            kubejs.custom({
                type: "mekanism:crushing",
                input: {
                    ingredient: {
                        item: item_id
                    }
                },
                output: {
                    item: Item.of("mekanism_bio_fuel", biofuelCount)
                }
            })
        })
    })
})