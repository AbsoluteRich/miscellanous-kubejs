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

    kubejs.custom({
        type: "mekanism:enriching",
        input: {
            ingredient: {
                item: "supplementaries:flax"
            }
        },
        output: {
            item: "2x minecraft:string"
        }
    })

    // Biofuel recipes for modded crops
    // Seeds
    const crushableCrops = {
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
            "ars_nouveau:magebloom",
            "alexsmobs:banana",
            "farmersdelight:cabbage",
            "farmersdelight:tomato",
            "farmersdelight:onion",
        ]
    }

    // Object.entries(crushableCrops).forEach(([biofuelCount, crops]) => {
    //     crops.forEach(cropId => {
    //         kubejs.custom({
    //             type: "mekanism:crushing",
    //             input: {
    //                 ingredient: {
    //                     item: cropId
    //                 }
    //             },
    //             output: {
    //                 item: Item.of("mekanism:bio_fuel", biofuelCount)
    //             }
    //         })
    //     })
    // })

    // Fixme: Fuck this shit
    for (let biofuelCount in crushableCrops) {
        let crops = crushableCrops[biofuelCount]

        crops.forEach(cropId => {
            kubejs.custom({
                type: "mekanism:crushing",
                input: {
                    ingredient: {
                        item: cropId
                    }
                },
                output: {
                    item: "mekanism:bio_fuel",
                    count: Number(biofuelCount)
                }
            })
        })
    }
})