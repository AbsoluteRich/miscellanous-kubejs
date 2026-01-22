const frostCost = "adamsarsplus:frost_soul"
const flameCost = "adamsarsplus:flame_soul"
const earthCost = "adamsarsplus:earth_soul"

const replacementMappings = {
    // Frost
    "adamsarsplus:cade_hood": ["#kubejs:freezable_helmets", frostCost],
    "adamsarsplus:cade_robes": ["#kubejs:freezable_chestplates", frostCost],
    "adamsarsplus:cade_leggings": ["#kubejs:freezable_leggings", frostCost],
    "adamsarsplus:cade_boots": ["#kubejs:freezable_boots", frostCost],

    // Flame
    "adamsarsplus:ryan_hood": ["ars_elemental:fire_hat", flameCost],
    "adamsarsplus:ryan_robes": ["ars_elemental:fire_robes", flameCost],
    "adamsarsplus:ryan_leggings": ["ars_elemental:fire_leggings", flameCost],
    "adamsarsplus:ryan_boots": ["ars_elemental:fire_boots", flameCost],

    // Earth
    "adamsarsplus:nick_hood": ["ars_elemental:earth_hat", earthCost],
    "adamsarsplus:nick_robes": ["ars_elemental:earth_robes", earthCost],
    "adamsarsplus:nick_leggings": ["ars_elemental:earth_leggings", earthCost],
    "adamsarsplus:nick_boots": ["ars_elemental:earth_boots", earthCost]
};

ServerEvents.tags("item", kubejs => {
    kubejs.add("kubejs:freezable_helmets", "ars_elemental:aqua_hat")
    kubejs.add("kubejs:freezable_helmets", "ars_elemental:air_hat")

    kubejs.add("kubejs:freezable_chestplates", "ars_elemental:aqua_robes")
    kubejs.add("kubejs:freezable_chestplates", "ars_elemental:air_robes")

    kubejs.add("kubejs:freezable_leggings", "ars_elemental:aqua_leggings")
    kubejs.add("kubejs:freezable_leggings", "ars_elemental:air_leggings")

    kubejs.add("kubejs:freezable_boots", "ars_elemental:aqua_boots")
    kubejs.add("kubejs:freezable_boots", "ars_elemental:air_boots")
});

ServerEvents.recipes((kubejs) => {
    // Remove duplicate glyphs (these are the more balanced versions, but unfortuately, Ars Plus is preferred for consistency)
    kubejs.remove({ id: "toomanyglyphs:glyph_amplify_two" });
    kubejs.remove({ id: "toomanyglyphs:glyph_amplify_three" });

    // Add Ars Elemental to the Ars Plus armour progression
    let replacements = Object.entries(replacementMappings);
    replacements.forEach((mapping) => {
        let oldItem = mapping[0];
        let newItem = mapping[1][0];
        let soul = mapping[1][1];
        let replacementReagent;

        // Tag or item?
        if (newItem.startsWith("#")) {
            newItem = newItem.slice(1);  // Remove the #
            replacementReagent = {
                tag: newItem
            };
        }
        else {
            replacementReagent = {
                item: newItem
            };
        }

        // Remove old recipe
        kubejs.remove({ id: oldItem });

        // Add a new recipe, functionally identical but with the replacement item
        kubejs.custom({
            type: "adamsarsplus:a_armor_upgrade",
            outTier: 3,
            output: {
                item: oldItem
            },
            pedestalItems: [
                {
                    item: {
                        item: soul
                    }
                },
                {
                    item: {
                        item: soul
                    }
                },
                {
                    item: {
                        item: soul
                    }
                },
                {
                    item: {
                        item: soul
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                }
            ],
            reagent: [replacementReagent],
            sourceCost: 7000,  // All of the replaced armours had a source cost of 7000
            tier: 3
        })
    });
});