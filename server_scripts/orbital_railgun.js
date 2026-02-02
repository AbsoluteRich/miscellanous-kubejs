ServerEvents.recipes((kubejs) => {
    kubejs.remove({ id: "orbital_railgun:orbital_railgun" })

    kubejs.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "misc",
        inputs: [
            "1 superbwarfare:heavy_armament_module",
            "3 #forge:storage_blocks/steel",
            "1 minecraft:nether_star",
            "32 superbwarfare:laser_unit",
            "1 superbwarfare:medium_battery_pack",
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