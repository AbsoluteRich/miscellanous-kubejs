ServerEvents.recipes((kubejs) => {
    // appflux:sky_harden_insulating_resin
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "alexscaves:cave_tablet"
            }
        },
        output: {
            item: "iceandfire:dread_stone"
        }
    })

    // Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1,id:"minecraft:sweeping"}]}')
    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:magnetic_caves'}"),  // Output
        "iceandfire:dread_stone", // Smithing template
        "supplementaries:ash_brick", // Item to be upgraded
        "minecraft:black_dye" // Upgrade item
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:primordial_caves'}"),
        "iceandfire:dread_stone",
        "supplementaries:ash_brick",
        "minecraft:yellow_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:toxic_caves'}"),
        "iceandfire:dread_stone",
        "supplementaries:ash_brick",
        "minecraft:lime_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:abyssal_chasm'}"),
        "iceandfire:dread_stone",
        "supplementaries:ash_brick",
        "minecraft:blue_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:forlorn_hollows'}"),
        "iceandfire:dread_stone",
        "supplementaries:ash_brick",
        "minecraft:brown_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:candy_cavity'}"),
        "iceandfire:dread_stone",
        "supplementaries:ash_brick",
        "minecraft:pink_dye"
    )
});