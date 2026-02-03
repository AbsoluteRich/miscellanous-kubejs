// priority: 10
const simplyTemplate = "ars_instrumentum:fake_wilden_tribute"

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

const simplyWeaponMappings = {
    "fieryItem": [
        { base: claymore, output: "simplyswords:brimstone_claymore" },  // Brimstone Claymore
        { base: longsword, output: "simplyswords:emberblade" },  // Emberblade
        { base: greathammer, output: "simplyswords:hearthflame" },  // Hearthflame
        { base: cutlass, output: "simplyswords:molten_edge" },  // Molten Edge
        { base: warglaive, output: "simplyswords:emberlash" },  // Emberlash
        { base: glaive, output: "simplyswords:flamewind" },  // Flamewind
    ],
    "darkItem": [
        { base: claymore, output: "simplyswords:watcher_claymore" },  // The Watcher
        { base: warglaive, output: "simplyswords:watching_warglaive" },  // Watching Warglaive
        { base: rapier, output: "simplyswords:shadowsting" },  // Shadowsting
    ],
    "electricItem": [
        { base: twinblade, output: "simplyswords:storms_edge" },  // Storm's Edge
        { base: longsword, output: "simplyswords:stormbringer" },  // Stormbringer
        { base: halberd, output: "simplyswords:thunderbrand" },  // Thunderbrand
        { base: greathammer, output: "simplyswords:mjolnir" },  // Mjolnir
    ],
    "toxicItem": [
        { base: rapier, output: "simplyswords:bramblethorn" },  // Bramblethorn
        { base: longsword, output: "simplyswords:toxic_longsword" },  // Longsword of the Plague
    ],
    "soulItem": [
        { base: greathammer, output: "simplyswords:soulkeeper" },  // Soulkeeper
        { base: sai, output: "simplyswords:soulstealer" },  // Soulstealer
        { base: scythe, output: "simplyswords:soulrender" },  // Soulrender
        { base: greataxe, output: "simplyswords:soulpyre" },  // Soul Pyre
        { base: claymore, output: "simplyswords:slumbering_lichblade" },  // Slumbering Lichblade
    ],
    "speedyItem": [
        { base: claymore, output: "simplyswords:twisted_blade" },  // Twisted Blade
        { base: katana, output: "simplyswords:whisperwind" },  // Whisperwind
    ],
    "frostedItem": [
        { base: greathammer, output: "simplyswords:frostfall" },  // Frostfall
        { base: cutlass, output: "simplyswords:livyatan" },  // Livyatan
        { base: halberd, output: "simplyswords:icewhisper" },  // Icewhisper
    ],
    "arcaneItem": [
        { base: halberd, output: "simplyswords:arcanethyst" },  // Arcanethyst
        { base: claymore, output: "simplyswords:ribboncleaver" },  // Ribboncleaver (this would be a speedy item, but a recipe already uses that)
        { base: scythe, output: "simplyswords:decaying_relic" },  // Decaying Relic (+ Magiscythe, Magispear, and Magiblade)
    ],
    "rareItem": [
        { base: longsword, output: "simplyswords:dormant_relic" },  // Dormant Relic (+ Righteous Relic, Sunfire, Tainted Relic, Harbinger)
    ],
    "waxyItem": [
        { base: claymore, output: "simplyswords:waxweaver" },  // Waxweaver
        { base: spear, output: "simplyswords:wickpiercer" },  // Wickpiercer
    ],
    "buzzyItem": [
        { base: greathammer, output: "simplyswords:hiveheart" },  // Hiveheart
    ],
    "astralItem": [
        { base: twinblade, output: "simplyswords:stars_edge" },  // Star's Edge
        { base: claymore, output: "simplyswords:caelestis" },  // Caelestis
    ],
    "stormyItem": [
        { base: chakram, output: "simplyswords:tempest" },  // Tempest
        { base: claymore, output: "simplyswords:enigma" },  // Enigma
    ],
}

const simplyUpgradeItems = {
    fieryItem: "irons_spellbooks:cinder_essence",  // Previously: Blaze Lantern
    darkItem: "alexscaves:pure_darkness",
    electricItem: "irons_spellbooks:energized_core",  // Previously: Bottle o' Lightning
    toxicItem: "minecraft:spore_blossom",  // Previously: Poisonous Potato
    soulItem: "minecraft:echo_shard",  // Previously: Sculk Catalyst
    speedyItem: "irons_spellbooks:blood_vial",  // Previously: Mushroom Stew, since it makes a Haste Potion with Apotheosis installed
    frostedItem: "irons_spellbooks:permafrost_shard",  // Previously: Blue Ice
    arcaneItem: "irons_spellbooks:arcane_ingot",
    rareItem: "minecraft:heart_of_the_sea", // Previously: Enchanted Golden Apple
    waxyItem: "minecraft:candle",
    buzzyItem: "minecraft:honeycomb_block",
    astralItem: "minecraft:clock",  // Previously: Divine Pearl
    stormyItem: "irons_spellbooks:lightning_bottle", // Previously: Lightning Rod
}

ServerEvents.tags("item", kubejs => {
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:tectonic_shard")
    kubejs.add("kubejs:alexs_caves_boss_drop", "traveloptics:hullbreaker_scales")
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:pure_darkness")
    kubejs.add("kubejs:alexs_caves_boss_drop", "alexscaves:radiant_essence")
});

ServerEvents.recipes((kubejs) => {
    // Repurposing a seemingly useless item
    // Removes standard recipe uses
    kubejs.remove({ id: "ars_instrumentum:imbuement/imbuement_fake_wilden_tribute" });  // Input doesn't work for some reason?
    kubejs.remove({ id: "ars_instrumentum:archmage_spell_book_upgrade_alternate" });  // Output would also work, but idk if this item might end up being used elsewhere

    // Removing a redundant recipe
    kubejs.remove({ id: "ars_elemental:imbuement_mark_of_mastery" });

    // Creating a custom recipe
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
        simplyTemplate,  // Output
        10000  // Source
    )

    // Making Runic Tablets renewable
    kubejs.shaped(
        "2x simplyswords:runic_tablet",
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

    // Adding the actual upgrade items to the weapon mappings
    // IF IT WORKS, DON'T TOUCH IT
    let mergedMappings = []
    Object.entries(simplyWeaponMappings)
        .forEach(([itemKey, targetWeapon]) => {
            targetWeapon.forEach((weapon) => {
                mergedMappings.push({
                    output: weapon.output,
                    base: weapon.base,
                    upgrade: simplyUpgradeItems[itemKey],
                })
            });
        });

    // Sword recipes
    mergedMappings.forEach(weapon => {
        kubejs.recipes.smithing(
            weapon.output,  // Output
            simplyTemplate, // Smithing template
            weapon.base, // Item to be upgraded
            weapon.upgrade, // Upgrade item
        )
    })
});