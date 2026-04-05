const meats = [
    "#forge:raw_beef",
    "#forge:raw_pork",
    "#forge:raw_mutton",
    "#forge:raw_chicken",
    "#forge:raw_chicken",
    "#forge:raw_fishes",
]

ServerEvents.recipes((kubejs) => {
    // Missing Create compatability recipes
    // Cinderslime
    kubejs.recipes.create.mixing(
        "2x tconstruct:cinderslime_ingot",
        [
            "minecraft:gold_ingot",
            "tconstruct:ichor_slime_ball",
            "tconstruct:scorched_brick",
        ]
    ).superheated()

    // Hepatizon
    kubejs.remove({ id: "createaddition:compat/tconstruct/hepatizon" })
    kubejs.recipes.create.mixing(
        "2x tconstruct:hepatizon_ingot",
        [
            "2x minecraft:copper_ingot",
            "tconstruct:cobalt_ingot",
            "minecraft:quartz",
        ]
    ).superheated()

    // Pig Iron, in keeping with the original spirit of the recipe, honey & meat soup fluids won't be used and instead their item equivalents will
    kubejs.remove({ id: "createaddition:compat/tconstruct/pig_iron" })
    kubejs.remove({ id: "createaddition:compat/tconstruct/pig_iron_2" })

    meats.forEach(meatTag => {
        kubejs.recipes.create.mixing(
            Item.of("tconstruct:pig_iron_ingot", 2 * 4),
            [
                Item.of("minecraft:iron_ingot", 1 * 4),
                Ingredient.of(meatTag).withCount(8),
                "minecraft:honey_block"
            ]
        ).heated()
    })

    // Rose Gold
    kubejs.remove({ id: "createaddition:compat/tconstruct/rose_gold" })
    kubejs.recipes.create.mixing(
        "2x tconstruct:rose_gold_ingot",
        [
            "minecraft:copper_ingot",
            "minecraft:gold_ingot",
        ]
    ).heated()

    // Slimesteel, additional recipe using bricks
    kubejs.recipes.create.mixing(
        "2x tconstruct:slimesteel_ingot",
        [
            "minecraft:iron_ingot",
            "tconstruct:sky_slime_ball",
            "tconstruct:seared_brick",
        ]
    ).heated()
})