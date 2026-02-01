const coreItem = "ars_instrumentum:fake_wilden_tribute"

const longsword = "simplyswords:runic_longsword"
const twinblade = "simplyswords:runic_twinblade"
const rapier = "simplyswords:runic_rapier"
const katana = "simplyswords:runic_katana"
const sai = "simplyswords:runic_sai"
const spear = "simplyswords:runic_spear"
const glaive = "simplyswords:runic_glaive"
const cutlass = "simplyswords:runic_cutlass"
const claymore = "simplyswords:runic_claymore"
const chakram = "simplyswords:runic_chakram"
const greataxe = "simplyswords:runic_greataxe"
const greathammer = "simplyswords:runic_greathammer"
const warglaive = "simplyswords:runic_warglaive"
const scythe = "simplyswords:runic_scythe"
const halberd = "simplyswords:runic_halberd"

const fieryItem = "irons_spellbooks:cinder_essence"  // Previously: Blaze Lantern
const darkItem = "alexscaves:pure_darkness"
const electricItem = "irons_spellbooks:energized_core"  // Previously: Bottle o' Lightning
const toxicItem = "minecraft:spore_blossom"  // Previously: Poisonous Potato
const soulItem = "minecraft:echo_shard"  // Previously: Sculk Catalyst
const speedyItem = "irons_spellbooks:blood_vial"  // Previously: Mushroom Stew, since it makes a Haste Potion with Apotheosis installed
const iceyItem = "irons_spellbooks:permafrost_shard"  // Previously: Blue Ice
const arcaneItem = "irons_spellbooks:arcane_ingot"
const rareItem = "minecraft:heart_of_the_sea" // Previously: Enchanted Golden Apple
const waxyItem = "minecraft:candle"
const buzzyItem = "minecraft:honeycomb_block"
const astralItem = "minecraft:clock"  // Previously: Divine Pearl
const stormyItem = "irons_spellbooks:lightning_bottle"  // Previously: Lightning Rod

ServerEvents.tags("item", kubejs => {
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:tectonic_shard")
    kubejs.add("kubejs:alexs_caves_boss_drop", "traveloptics:hullbreaker_scales")
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:pure_darkness")
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:radiant_essence")
});

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
        "#kubejs:alexs_caves_boss_drop",  // Requires progression into Alex's Caves and defeating of a boss
        "#kubejs:alexs_caves_boss_drop",
        "#kubejs:alexs_caves_boss_drop",
        "minecraft:totem_of_undying",  // Requires defeating a raid
    ],  // Input
        "minecraft:nether_star",  // Reagent, requires defeating a boss
        coreItem,  // Output
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
        coreItem, // Smithing template
        claymore, // Item to be upgraded
        fieryItem, // Upgrade item
    )

    // The Watcher
    kubejs.recipes.smithing(
        "simplyswords:watcher_claymore",
        coreItem,
        claymore,
        darkItem,
    )

    // Storm's Edge
    kubejs.recipes.smithing(
        "simplyswords:storms_edge",
        coreItem,
        twinblade,
        electricItem
    )

    // Stormbringer
    kubejs.recipes.smithing(
        "simplyswords:stormbringer",
        coreItem,
        longsword,
        electricItem,
    )

    // Bramblethorn
    kubejs.recipes.smithing(
        "simplyswords:bramblethorn",
        coreItem,
        rapier,
        toxicItem
    )

    // Watching Warglaive
    kubejs.recipes.smithing(
        "simplyswords:watching_warglaive",
        coreItem,
        warglaive,
        darkItem,
    )

    // longsword of the Plague
    kubejs.recipes.smithing(
        "simplyswords:toxic_longsword",
        coreItem,
        longsword,
        toxicItem,
    )

    // Emberblade
    kubejs.recipes.smithing(
        "simplyswords:emberblade",
        coreItem,
        longsword,
        fieryItem,
    )

    // Hearthflame
    kubejs.recipes.smithing(
        "simplyswords:hearthflame",
        coreItem,
        greathammer,
        fieryItem,
    )

    // Soulkeeper
    kubejs.recipes.smithing(
        "simplyswords:soulkeeper",
        coreItem,
        greathammer,
        soulItem,
    )

    // Twisted Blade
    kubejs.recipes.smithing(
        "simplyswords:twisted_blade",
        coreItem,
        claymore,
        speedyItem,
    )

    // Soulstealer
    kubejs.recipes.smithing(
        "simplyswords:soulstealer",
        coreItem,
        sai,
        soulItem,
    )

    // Soulrender
    kubejs.recipes.smithing(
        "simplyswords:soulrender",
        coreItem,
        scythe,
        soulItem,
    )

    // Soul Pyre
    kubejs.recipes.smithing(
        "simplyswords:soulpyre",
        coreItem,
        greataxe,
        soulItem,
    )

    // Frostfall
    kubejs.recipes.smithing(
        "simplyswords:frostfall",
        coreItem,
        greathammer,
        iceyItem,
    )

    // Molten Edge
    kubejs.recipes.smithing(
        "simplyswords:molten_edge",
        coreItem,
        cutlass,
        fieryItem
    )

    // Livyatan
    kubejs.recipes.smithing(
        "simplyswords:livyatan",
        coreItem,
        cutlass,
        iceyItem
    )

    // Icewhisper
    kubejs.recipes.smithing(
        "simplyswords:icewhisper",
        coreItem,
        halberd,
        iceyItem
    )

    // Arcanethyst
    kubejs.recipes.smithing(
        "simplyswords:arcanethyst",
        coreItem,
        halberd,
        arcaneItem
    )

    // Thunderbrand
    kubejs.recipes.smithing(
        "simplyswords:thunderbrand",
        coreItem,
        halberd,
        electricItem
    )

    // Mjolnir
    kubejs.recipes.smithing(
        "simplyswords:mjolnir",
        coreItem,
        greathammer,
        electricItem
    )

    // Slumbering Lichblade
    kubejs.recipes.smithing(
        "simplyswords:slumbering_lichblade",
        coreItem,
        claymore,
        soulItem
    )

    // Shadowsting
    kubejs.recipes.smithing(
        "simplyswords:shadowsting",
        coreItem,
        rapier,
        darkItem
    )

    // Dormant Relic (+ Righteous Relic, Sunfire, Tainted Relic, Harbinger)
    kubejs.recipes.smithing(
        "simplyswords:dormant_relic",
        coreItem,
        longsword,
        rareItem
    )

    // Whisperwind
    kubejs.recipes.smithing(
        "simplyswords:whisperwind",
        coreItem,
        katana,
        speedyItem
    )

    // Emberlash
    kubejs.recipes.smithing(
        "simplyswords:emberlash",
        coreItem,
        warglaive,
        fieryItem
    )

    // Waxweaver
    kubejs.recipes.smithing(
        "simplyswords:waxweaver",
        coreItem,
        claymore,
        waxyItem
    )

    // Hiveheart
    kubejs.recipes.smithing(
        "simplyswords:hiveheart",
        coreItem,
        greathammer,
        buzzyItem
    )

    // Star's Edge
    kubejs.recipes.smithing(
        "simplyswords:stars_edge",
        coreItem,
        twinblade,
        astralItem
    )

    // Wickpiercer
    kubejs.recipes.smithing(
        "simplyswords:wickpiercer",
        coreItem,
        spear,
        waxyItem
    )

    // Tempest
    kubejs.recipes.smithing(
        "simplyswords:tempest",
        coreItem,
        chakram,
        stormyItem
    )

    // Flamewind
    kubejs.recipes.smithing(
        "simplyswords:flamewind",
        coreItem,
        glaive,
        fieryItem
    )

    // Ribboncleaver
    kubejs.recipes.smithing(
        "simplyswords:ribboncleaver",
        coreItem,
        claymore,
        arcaneItem  // This would be a speedy item, but a recipe already uses that
    )

    // Decaying Relic (+ Magiscythe, Magispear, and Magiblade)
    kubejs.recipes.smithing(
        "simplyswords:decaying_relic",
        coreItem,
        scythe,
        arcaneItem
    )

    // Enigma
    kubejs.recipes.smithing(
        "simplyswords:enigma",
        coreItem,
        claymore,
        stormyItem
    )

    // Caelestis
    kubejs.recipes.smithing(
        "simplyswords:caelestis",
        coreItem,
        claymore,
        astralItem
    )
});