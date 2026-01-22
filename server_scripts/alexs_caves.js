let template = "iceandfire:dread_stone"
let upgradeableItem = "supplementaries:ash_brick"

ServerEvents.recipes((kubejs) => {
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "alexscaves:cave_tablet"
            }
        },
        output: {
            item: template
        }
    })

    // Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1,id:"minecraft:sweeping"}]}')
    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:magnetic_caves'}"),  // Output
        template, // Smithing template
        upgradeableItem, // Item to be upgraded
        "minecraft:black_dye" // Upgrade item
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:primordial_caves'}"),
        template,
        upgradeableItem,
        "minecraft:yellow_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:toxic_caves'}"),
        template,
        upgradeableItem,
        "minecraft:lime_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:abyssal_chasm'}"),
        template,
        upgradeableItem,
        "minecraft:blue_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:forlorn_hollows'}"),
        template,
        upgradeableItem,
        "minecraft:brown_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:candy_cavity'}"),
        template,
        upgradeableItem,
        "minecraft:pink_dye"
    )
});