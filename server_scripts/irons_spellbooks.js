ServerEvents.recipes((kubejs) => {
    // All of this could probably be replaced with Create Wizardry, but oh well
    kubejs.recipes.create.mixing(
        Fluid.of("irons_spellbooks:common_ink", 250),
        [
            "irons_spellbooks:arcane_essence",
            Fluid.of("create_enchantment_industry:ink", 1000)
        ]
    )

    kubejs.recipes.create.mixing(
        Fluid.of("irons_spellbooks:uncommon_ink", 250),
        [
            "minecraft:copper_ingot",
            Fluid.of("irons_spellbooks:common_ink", 1000)
        ]
    )

    kubejs.recipes.create.mixing(
        Fluid.of("irons_spellbooks:rare_ink", 250),
        [
            "minecraft:iron_ingot",
            Fluid.of("irons_spellbooks:uncommon_ink", 1000)
        ]
    )

    kubejs.recipes.create.mixing(
        Fluid.of("irons_spellbooks:epic_ink", 250),
        [
            "minecraft:gold_ingot",
            Fluid.of("irons_spellbooks:rare_ink", 1000)
        ]
    ).heated()

    kubejs.recipes.create.mixing(
        Fluid.of("irons_spellbooks:legendary_ink", 250),
        [
            "minecraft:amethyst_shard",
            Fluid.of("irons_spellbooks:epic_ink", 1000)
        ]
    ).superheated()
});