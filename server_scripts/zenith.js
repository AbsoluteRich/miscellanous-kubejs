function getWeaponsFromType(type) {
    let identifiedWeapons = [];

    simplyWeaponMappings[type]
        .forEach(weapon => {
            // Special cases
            if (weapon.output === "simplyswords:slumbering_lichblade") {
                identifiedWeapons.push("#kubejs:lichblades")
            }
            else if (weapon.output === "simplyswords:decaying_relic") {
                identifiedWeapons.push("#kubejs:magical_relics")
            }
            else {
                identifiedWeapons.push(weapon.output);
            }

        });

    console.log("Identified weapons for " + type + ": " + identifiedWeapons)
    return identifiedWeapons;
}

ServerEvents.tags("item", kubejs => {
    kubejs.add("kubejs:lichblades", "simplyswords:slumbering_lichblade")
    kubejs.add("kubejs:lichblades", "simplyswords:waking_lichblade")
    kubejs.add("kubejs:lichblades", "simplyswords:awakened_lichblade")

    kubejs.add("kubejs:magical_relics", "simplyswords:decaying_relic")
    kubejs.add("kubejs:magical_relics", "simplyswords:magiscythe")
    kubejs.add("kubejs:magical_relics", "simplyswords:magispear")
    kubejs.add("kubejs:magical_relics", "simplyswords:magiblade")

    kubejs.add("kubejs:sunfires", "simplyswords:righteous_relic")
    kubejs.add("kubejs:sunfires", "simplyswords:sunfire")

    kubejs.add("kubejs:harbingers", "simplyswords:tainted_relic")
    kubejs.add("kubejs:harbingers", "simplyswords:harbinger")
});

ServerEvents.recipes((kubejs) => {
    kubejs.remove({ id: "zenith:zenith" })

    kubejs.shapeless(
        "kubejs:molten_amalgam",
        getWeaponsFromType("fieryItem").concat("#kubejs:sunfires")
    )

    kubejs.shapeless(
        "kubejs:cursed_amalgam",
        getWeaponsFromType("darkItem").concat(getWeaponsFromType("soulItem")).concat("#kubejs:harbingers")
    )

    kubejs.shapeless(
        "kubejs:electric_amalgam",
        getWeaponsFromType("electricItem").concat(getWeaponsFromType("stormyItem"))
    )

    kubejs.shapeless(
        "kubejs:toxic_amalgam",
        getWeaponsFromType("toxicItem").concat(getWeaponsFromType("buzzyItem"))  // I guess bees count as toxin?? Idk the Chaotic Amalgam needed one less item
    )

    kubejs.shapeless(
        "kubejs:chaotic_amalgam",
        getWeaponsFromType("speedyItem").concat(getWeaponsFromType("arcaneItem")).concat(getWeaponsFromType("waxyItem")).concat(getWeaponsFromType("astralItem"))
    )

    kubejs.shapeless(
        "kubejs:frosted_amalgam",
        getWeaponsFromType("frostedItem")
    )

    kubejs.recipes.ars_nouveau.enchanting_apparatus([
        "kubejs:toxic_amalgam",
        "kubejs:electric_amalgam",
        "kubejs:frosted_amalgam",
        "kubejs:chaotic_amalgam",
        "kubejs:cursed_amalgam",
        "kubejs:molten_amalgam",
    ],
        "simplyswords:dormant_relic",
        "zenith:zenith",
        10000
    )
});