ServerEvents.tags("item", kubejs => {
    // kubejs.add("kubejs:energy_weapon", "superbwarfare:repair_tool")
    // kubejs.add("kubejs:energy_weapon", "superbwarfare:taser")
    kubejs.add("kubejs:energy_weapon", "superbwarfare:ql_1031")
    kubejs.add("kubejs:energy_weapon", "superbwarfare:sentinel")
    kubejs.add("kubejs:energy_weapon", "superbwarfare:secondary_cataclysm")
});

ServerEvents.recipes((kubejs) => {
    kubejs.remove({ id: "orbital_railgun:orbital_railgun" })

    kubejs.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "misc",
        inputs: [
            "1 superbwarfare:heavy_armament_module",
            "3 #forge:storage_blocks/steel",
            "32 superbwarfare:laser_unit",
            "1 #kubejs:energy_weapon",
            "1 superbwarfare:monitor",
        ],
        result: {
            item: "orbital_railgun:orbital_railgun"
        }
    })

    // kubejs.shaped(
    //     "orbital_railgun:orbital_railgun",
    //     [
    //         "LLL",
    //         "GNM",
    //         "SSS"
    //     ],
    //     {
    //         L: "superbwarfare:laser_unit",
    //         M: "superbwarfare:monitor",
    //         N: "minecraft:netherite_block",
    //         S: "mekanism:block_steel",
    //         G: "minecraft:glass"
    //     }
    // )
});