let CORE_ITEM = "ars_instrumentum:fake_wilden_tribute"

let LONGSWORD = "simplyswords:runic_longsword"
let TWINBLADE = "simplyswords:runic_twinblade"
let RAPIER = "simplyswords:runic_rapier"
let KATANA = "simplyswords:runic_katana"
let SAI = "simplyswords:runic_sai"
let SPEAR = "simplyswords:runic_spear"
let GLAIVE = "simplyswords:runic_glaive"
let CUTLASS = "simplyswords:runic_cutlass"
let CLAYMORE = "simplyswords:runic_claymore"
let CHAKRAM = "simplyswords:runic_chakram"
let GREATAXE = "simplyswords:runic_greataxe"
let GREATHAMMER = "simplyswords:runic_greathammer"
let WARGLAIVE = "simplyswords:runic_warglaive"
let SCYTHE = "simplyswords:runic_scythe"
let HALBERD = "simplyswords:runic_halberd"

let FIREY_ITEM = "irons_spellbooks:cinder_essence"  // Previously: Blaze Lantern
let DARK_ITEM = "alexscaves:pure_darkness"
let ELECTRIC_ITEM = "irons_spellbooks:energized_core"  // Previously: Bottle o' Lightning
let POISONOUS_ITEM = "minecraft:spore_blossom"  // Previously: Poisonous Potato
let SOUL_ITEM = "minecraft:echo_shard"  // Previously: Sculk Catalyst
let SPEEDY_ITEM = "minecraft:mushroom_stew"  // It makes a Haste Potion with Apotheosis installed
let ICEY_ITEM = "minecraft:blue_ice"
let ARCANE_ITEM = "irons_spellbooks:arcane_ingot"
let RARE_ITEM = "minecraft:heart_of_the_sea" // Previously: Enchanted Golden Apple
let WAXY_ITEM = "minecraft:candle"
let BUZZY_ITEM = "minecraft:honeycomb_block"
let ASTRAL_ITEM = "irons_spellbooks:divine_pearl"  // Placeholder
let HEAVY_ITEM = "minecraft:iron_block"
let STORMY_ITEM = "minecraft:lightning_rod"

ServerEvents.recipes((kubejs) => {
    // Removes standard recipe uses
    // Repurposing a seemingly useless item
    kubejs.remove({ id: "ars_instrumentum:imbuement/imbuement_fake_wilden_tribute" });  // Input doesn't work for some reason?
    kubejs.remove({ id: "ars_instrumentum:archmage_spell_book_upgrade_alternate" });  // Output would also work, but idk if this item might end up being used elsewhere

    // Removing a redundant recipe
    kubejs.remove({ id: "ars_elemental:imbuement_mark_of_mastery" });

    // Custom recipes
    kubejs.recipes.ars_nouveau.enchanting_apparatus([  // Ingredients
        "ars_elemental:mark_of_mastery",  // Instead of just a Wilden Tribute, requires progression into Ars and defeating of a boss
        "irons_spellbooks:arcane_ingot",  // Miscellanous difficult-to-obtain item
        "irons_spellbooks:arcane_ingot",
        "irons_spellbooks:arcane_ingot",
        "alexscaves:tectonic_shard",  // Requires progression into Alex's Caves and defeating of a boss
        "alexscaves:tectonic_shard",
        "alexscaves:tectonic_shard",
        "minecraft:totem_of_undying",  // Requires defeating a raid
    ],  // Input
        "minecraft:nether_star",  // Reagent, requires defeating a boss
        CORE_ITEM,  // Output
        10000  // Source
    )

    kubejs.shaped(Item.of("simplyswords:runic_tablet"),
        [
            "DRD",
            "DBD",
            "DDD"
        ],
        {
            D: "minecraft:diamond",
            R: "simplyswords:runic_tablet",
            B: "minecraft:polished_deepslate",
        }
    )

    // Weapon crafting
    // Brimstone Claymore
    kubejs.recipes.smithing(
        "simplyswords:brimstone_claymore",  // Output
        CORE_ITEM, // Smithing template
        CLAYMORE, // Item to be upgraded
        FIREY_ITEM, // Upgrade item
    )

    // The Watcher
    kubejs.recipes.smithing(
        "simplyswords:watcher_claymore",
        CORE_ITEM,
        CLAYMORE,
        DARK_ITEM,
    )

    // Storm's Edge
    kubejs.recipes.smithing(
        "simplyswords:storms_edge",
        CORE_ITEM,
        TWINBLADE,
        ELECTRIC_ITEM
    )

    // Stormbringer
    kubejs.recipes.smithing(
        "simplyswords:stormbringer",
        CORE_ITEM,
        LONGSWORD,
        ELECTRIC_ITEM,
    )

    // Bramblethorn
    kubejs.recipes.smithing(
        "simplyswords:bramblethorn",
        CORE_ITEM,
        RAPIER,
        POISONOUS_ITEM
    )

    // Watching Warglaive
    kubejs.recipes.smithing(
        "simplyswords:watching_warglaive",
        CORE_ITEM,
        WARGLAIVE,
        DARK_ITEM,
    )

    // Longsword of the Plague
    kubejs.recipes.smithing(
        "simplyswords:toxic_longsword",
        CORE_ITEM,
        LONGSWORD,
        POISONOUS_ITEM,
    )

    // Emberblade
    kubejs.recipes.smithing(
        "simplyswords:emberblade",
        CORE_ITEM,
        LONGSWORD,
        FIREY_ITEM,
    )

    // Hearthflame
    kubejs.recipes.smithing(
        "simplyswords:hearthflame",
        CORE_ITEM,
        GREATHAMMER,
        FIREY_ITEM,
    )

    // Soulkeeper
    kubejs.recipes.smithing(
        "simplyswords:soulkeeper",
        CORE_ITEM,
        GREATHAMMER,
        SOUL_ITEM,
    )

    // Twisted Blade
    kubejs.recipes.smithing(
        "simplyswords:twisted_blade",
        CORE_ITEM,
        CLAYMORE,
        SPEEDY_ITEM,
    )

    // Soulstealer
    kubejs.recipes.smithing(
        "simplyswords:soulstealer",
        CORE_ITEM,
        SAI,
        SOUL_ITEM,
    )

    // Soulrender
    kubejs.recipes.smithing(
        "simplyswords:soulrender",
        CORE_ITEM,
        SCYTHE,
        SOUL_ITEM,
    )

    // Soul Pyre
    kubejs.recipes.smithing(
        "simplyswords:soulpyre",
        CORE_ITEM,
        GREATAXE,
        SOUL_ITEM,
    )

    // Frostfall
    kubejs.recipes.smithing(
        "simplyswords:frostfall",
        CORE_ITEM,
        GREATHAMMER,
        ICEY_ITEM,
    )

    // Molten Edge
    kubejs.recipes.smithing(
        "simplyswords:molten_edge",
        CORE_ITEM,
        CUTLASS,
        FIREY_ITEM
    )

    // Livyatan
    kubejs.recipes.smithing(
        "simplyswords:livyatan",
        CORE_ITEM,
        CUTLASS,
        ICEY_ITEM
    )

    // Icewhisper
    kubejs.recipes.smithing(
        "simplyswords:icewhisper",
        CORE_ITEM,
        HALBERD,
        ICEY_ITEM
    )

    // Arcanethyst
    kubejs.recipes.smithing(
        "simplyswords:arcanethyst",
        CORE_ITEM,
        HALBERD,
        ARCANE_ITEM
    )

    // Thunderbrand
    kubejs.recipes.smithing(
        "simplyswords:thunderbrand",
        CORE_ITEM,
        HALBERD,
        ELECTRIC_ITEM
    )

    // Mjolnir
    kubejs.recipes.smithing(
        "simplyswords:mjolnir",
        CORE_ITEM,
        GREATHAMMER,
        ELECTRIC_ITEM
    )

    // Slumbering Lichblade
    kubejs.recipes.smithing(
        "simplyswords:slumbering_lichblade",
        CORE_ITEM,
        CLAYMORE,
        SOUL_ITEM
    )

    // Shadowsting
    kubejs.recipes.smithing(
        "simplyswords:shadowsting",
        CORE_ITEM,
        RAPIER,
        DARK_ITEM
    )

    // Dormant Relic (+ Righteous Relic, Sunfire, Tainted Relic, Harbinger)
    kubejs.recipes.smithing(
        "simplyswords:dormant_relic",
        CORE_ITEM,
        LONGSWORD,
        RARE_ITEM
    )

    // Whisperwind
    kubejs.recipes.smithing(
        "simplyswords:whisperwind",
        CORE_ITEM,
        KATANA,
        SPEEDY_ITEM
    )

    // Emberlash
    kubejs.recipes.smithing(
        "simplyswords:emberlash",
        CORE_ITEM,
        WARGLAIVE,
        FIREY_ITEM
    )

    // Waxweaver
    kubejs.recipes.smithing(
        "simplyswords:waxweaver",
        CORE_ITEM,
        CLAYMORE,
        WAXY_ITEM
    )

    // Hiveheart
    kubejs.recipes.smithing(
        "simplyswords:hiveheart",
        CORE_ITEM,
        GREATHAMMER,
        BUZZY_ITEM
    )

    // Star's Edge
    kubejs.recipes.smithing(
        "simplyswords:stars_edge",
        CORE_ITEM,
        TWINBLADE,
        ASTRAL_ITEM
    )

    // Wickpiercer
    kubejs.recipes.smithing(
        "simplyswords:wickpiercer",
        CORE_ITEM,
        SPEAR,
        WAXY_ITEM
    )

    // Tempest
    kubejs.recipes.smithing(
        "simplyswords:tempest",
        CORE_ITEM,
        CHAKRAM,
        ASTRAL_ITEM
    )

    // Flamewind
    kubejs.recipes.smithing(
        "simplyswords:flamewind",
        CORE_ITEM,
        GLAIVE,
        FIREY_ITEM
    )

    // Ribboncleaver
    kubejs.recipes.smithing(
        "simplyswords:ribboncleaver",
        CORE_ITEM,
        CLAYMORE,
        HEAVY_ITEM
    )

    // Decaying Relic (+ Magiscythe, Magispear, and Magiblade)
    kubejs.recipes.smithing(
        "simplyswords:decaying_relic",
        CORE_ITEM,
        SCYTHE,
        ARCANE_ITEM
    )

    // Enigma
    kubejs.recipes.smithing(
        "simplyswords:enigma",
        CORE_ITEM,
        CLAYMORE,
        STORMY_ITEM
    )

    // Caelestis
    kubejs.recipes.smithing(
        "simplyswords:caelestis",
        CORE_ITEM,
        CLAYMORE,
        ASTRAL_ITEM
    )
});