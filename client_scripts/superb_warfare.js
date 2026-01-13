JEIEvents.hideItems(kubejs => {
    kubejs.hide("superbwarfare:coal_powder")
    kubejs.hide("superbwarfare:coal_iron_powder")
    kubejs.hide("superbwarfare:hammer")
    kubejs.hide("superbwarfare:golden_hammer")
    kubejs.hide("superbwarfare:steel_hammer")
    kubejs.hide("superbwarfare:diamond_hammer")
    kubejs.hide("superbwarfare:cemented_carbide_hammer")
    kubejs.hide("superbwarfare:netherite_hammer")
})

ClientEvents.lang("en_us", kubejs => {
    kubejs.renameItem("superbwarfare:tungsten_powder", "Tungsten Dust")
    kubejs.renameItem("superbwarfare:raw_cemented_carbide_powder", "Cemented Carbide Dust")
})