const tabletTemplate = "iceandfire:dread_stone"
const tabletUpgradeItem = "supplementaries:ash_brick"

ServerEvents.recipes((kubejs) => {
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "alexscaves:cave_tablet"
            }
        },
        output: {
            item: tabletTemplate
        }
    })

    // Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1,id:"minecraft:sweeping"}]}')
    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:magnetic_caves'}"),  // Output
        tabletTemplate, // Smithing template
        tabletUpgradeItem, // Item to be upgraded
        "minecraft:black_dye" // Upgrade item
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:primordial_caves'}"),
        tabletTemplate,
        tabletUpgradeItem,
        "minecraft:yellow_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:toxic_caves'}"),
        tabletTemplate,
        tabletUpgradeItem,
        "minecraft:lime_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:abyssal_chasm'}"),
        tabletTemplate,
        tabletUpgradeItem,
        "minecraft:blue_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:forlorn_hollows'}"),
        tabletTemplate,
        tabletUpgradeItem,
        "minecraft:brown_dye"
    )

    kubejs.smithing(
        Item.of("alexscaves:cave_tablet", "{CaveBiome:'alexscaves:candy_cavity'}"),
        tabletTemplate,
        tabletUpgradeItem,
        "minecraft:pink_dye"
    )
});