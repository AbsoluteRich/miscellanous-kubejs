ServerEvents.recipes((kubejs) => {
    // With these recipes, you can produce slightly more honeycomb by pumping honey from beehives compared to just shearing them regularly
    // This may be a balancing concern?? Honey has so little uses I don't feel like implementing a solution

    // Honeycomb mold, swiping an idea from [Create: Easy Bee Products](https://www.curseforge.com/minecraft/mc-mods/create-easy-bee-products)
    // Just learnt that [Create: Fluid](https://www.curseforge.com/minecraft/mc-mods/create-fluid) exists which does this same thing but better :(
    const honeycombTransitional = "kubejs:incomplete_honeycomb_mold"

    kubejs.recipes.create.sequenced_assembly(
        "kubejs:honeycomb_mold",  // Output(s)
        "create:cardboard",
        [  // Sequence
            event.recipes.create.deploying(honeycombTransitional, [honeycombTransitional, "minecraft:honeycomb"]),
            event.recipes.create.pressing(honeycombTransitional, honeycombTransitional),
            event.recipes.create.pressing(honeycombTransitional, honeycombTransitional),
        ]
        .transitionalItem(honeycombTransitional)
    )

    // Produce honey from honeycomb
    kubejs.recipes.create.mixing(
        Fluid.of("create:honey", 250),  // Output(s)
        "minecraft:honeycomb"  // Input(s), replace this with #forge:honey
    ).heated()

    // Produce honeycomb from honey
    kubejs.recipes.create.compacting(
        "minecraft:honeycomb",
        Fluid.of("create:honey", 250),
    )

    // Produce obsidian from fluids
    kubejs.recipes.create.mixing(
        "minecraft:obsidian",
        [
            Fluid.of("minecraft:water", 250),
            Fluid.of("minecraft:lava", 250)
        ]
    )
});