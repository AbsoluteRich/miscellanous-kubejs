const frostCost = ["adamsarsplus:frost_soul", 7000];
const flameCost = ["adamarsplus:flame_soul", 7000];
const earthSourceCost = ["adamsarsplus:earth_soul", 7000]; // Untested
const lightningSourceCost = ["adamarsplus:lightning_soul", 8000];
const holySourceCost = ["adamarsplus:holy_soul", 8000];
const voidSourceCost = ["adamarsplus:void_soul", 8500];

const replacementMappings = {
    // Frost
    "adamsarsplus:cade_hood": ["ars_elemental:aqua_hat", frostCost],
    "adamsarsplus:cade_robes": ["ars_elemental:aqua_robes", frostCost],
    "adamsarsplus:cade_leggings": ["ars_elemental:aqua_pants", frostCost],
    "adamsarsplus:cade_boots": ["ars_elemental:aqua_boots", frostCost],

    // Flame
    "adamarsplus:ryan_hood": ["arselemental:fire_hat", flameCost],
    "adamarsplus:ryan_robes": ["arselemental:fire_robes", flameCost],
    "adamarsplus:ryan_leggings": ["arselemental:fire_pants", flameCost],
    "adamarsplus:ryan_boots": ["arselemental:fire_boots", flameCost]
};

ServerEvents.recipes((kubejs) => {
    // Remove duplicate glyphs (these are the more balanced versions, but unfortuately, Ars Plus is preferred for consistency)
    kubejs.remove({ id: "toomanyglyphs:glyph_amplify_two" });
    kubejs.remove({ id: "toomanyglyphs:glyph_amplify_three" });

    // Add Ars Elemental to the Ars Plus armour progression
    let replacements = Object.entries(replacementMappings);
    replacements.forEach((mapping) => {
        let oldItem = mapping[0];
        let newItem = mapping[1][0];
        let soul = mapping[1][1][0];
        let sourceCost = mapping[1][1][1];

        console.log("----")
        console.log(oldItem)
        console.log(newItem)
        console.log(soul)
        console.log(sourceCost)

        kubejs.remove({ id: oldItem });

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
            reagent: [
                {
                    item: newItem
                }
            ],
            sourceCost: sourceCost,
            tier: 3
        })
    });
});