const frostCost = "adamsarsplus:frost_soul"
const flameCost = "adamsarsplus:flame_soul"
const earthCost = "adamsarsplus:earth_soul"

const adamArmourMappings = {
    // Frost
    "adamsarsplus:cade_hood": { reagent: "#kubejs:freezable_helmets", soul: frostCost },
    "adamsarsplus:cade_robes": { reagent: "#kubejs:freezable_chestplates", soul: frostCost },
    "adamsarsplus:cade_leggings": { reagent: "#kubejs:freezable_leggings", soul: frostCost },
    "adamsarsplus:cade_boots": { reagent: "#kubejs:freezable_boots", soul: frostCost },

    // Flame
    "adamsarsplus:ryan_hood": { reagent: "ars_elemental:fire_hat", soul: flameCost },
    "adamsarsplus:ryan_robes": { reagent: "ars_elemental:fire_robes", soul: flameCost },
    "adamsarsplus:ryan_leggings": { reagent: "ars_elemental:fire_leggings", soul: flameCost },
    "adamsarsplus:ryan_boots": { reagent: "ars_elemental:fire_boots", soul: flameCost },

    // Earth
    "adamsarsplus:nick_hood": { reagent: "ars_elemental:earth_hat", soul: earthCost },
    "adamsarsplus:nick_robes": { reagent: "ars_elemental:earth_robes", soul: earthCost },
    "adamsarsplus:nick_leggings": { reagent: "ars_elemental:earth_leggings", soul: earthCost },
    "adamsarsplus:nick_boots": { reagent: "ars_elemental:earth_boots", soul: earthCost },
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
    Object.entries(adamArmourMappings)
    .forEach((mapping) => {
        let oldItem = mapping[0];
        let newItem = mapping[1].reagent;
        let soul = mapping[1].soul;
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