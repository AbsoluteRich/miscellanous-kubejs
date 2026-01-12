ServerEvents.recipes((kubejs) => {
    // Steel
    kubejs.replaceInput(
        { input: "superbwarfare:coal_powder" },
        "superbwarfare:coal_powder",
        "#forge:dusts/coal",
    )

    kubejs.replaceOutput(
        { input: "superbwarfare:coal_powder" },
        "superbwarfare:coal_powder",
        "#forge:dusts/coal",
    )

    kubejs.remove({ input: "superbwarfare:coal_iron_powder" })
    kubejs.remove({ output: "superbwarfare:coal_iron_powder" })

    // Dusting ingots
    // These should be replaced with individual remove events for each of the hammers
    kubejs.remove({ input: "#forge:tools/hammer" })
    kubejs.remove({ output: "#forge:tools/hammer" })

    // Cemented carbide
    kubejs.remove({ id: "superbwarfare:raw_cemented_carbide_powder" })

    // Steel infusion from steel dust
    kubejs.custom({
        type: "mekanism:infusion_conversion",
        input: {
            ingredient: { tag: "forge:dusts/steel" }
        },
        output: {
            amount: 10,
            infuse_type: "kubejs:steel"
        }
    })

    // kubejs.recipes.mekanismMetallurgicInfusing(
    //     "superbwarfare:cemented_carbide_ingot",
    //     "7x superbwarfare:tungsten_powder",
    //     "kubejs:steel",
    //     10
    // )

    // Mekanism metallurgic infusing just doesn't exist?? For some reason??
    kubejs.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput:
        {
            amount: 10,
            infuse_type: "kubejs:steel"
        },
        itemInput:
        {
            amount: 7,
            ingredient: { item: "superbwarfare:tungsten_powder" }
        },
        output:
        {
            amount: 8,
            item: "superbwarfare:raw_cemented_carbide_powder"
        }
    })

    // This mod is so broken I'm not chancing the crushing recipe
    kubejs.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "superbwarfare:cemented_carbide_ingot"
            }
        },
        output: {
            item: "superbwarfare:raw_cemented_carbide_powder"
        }
    })
});