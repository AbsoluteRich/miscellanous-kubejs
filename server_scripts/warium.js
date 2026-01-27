ServerEvents.recipes((kubejs) => {
    // Warium tool processing recipes for Create's sheets
    kubejs.shapeless(
        "create:iron_sheet",
        [
            "crusty_chunks:hammer",
            "minecraft:iron_ingot"
        ]
    ).damageIngredient("crusty_chunks:hammer")

    kubejs.shapeless(
        "create:golden_sheet",
        [
            "crusty_chunks:hammer",
            "minecraft:gold_ingot"
        ]
    ).damageIngredient("crusty_chunks:hammer")

    kubejs.shapeless(
        "createaddition:electrum_sheet",
        [
            "crusty_chunks:hammer",
            "createaddition:electrum_ingot"
        ]
    ).damageIngredient("crusty_chunks:hammer")

    kubejs.shapeless(
        "createaddition:zinc_sheet",
        [
            "crusty_chunks:hammer",
            "create:zinc_ingot"
        ]
    ).damageIngredient("crusty_chunks:hammer")
});
