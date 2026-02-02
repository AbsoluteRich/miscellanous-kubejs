function getWeaponsFromType(type) {
    let selectWeapons = [];

    simplyWeaponMappings[type]
        .forEach(weapon => {
            selectWeapons.push(weapon.output);
        });

    return selectWeapons;
}

ServerEvents.recipes((kubejs) => {
    kubejs.remove({ id: "zenith:zenith" })

    kubejs.shapeless(
        "kubejs:molten_amalgam",
        getWeaponsFromType("fieryItem")
    )

    kubejs.shapeless(
        "kubejs:cursed_amalgam",
        getWeaponsFromType("darkItem").concat(getWeaponsFromType("soulItem"))
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