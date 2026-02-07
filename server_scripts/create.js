ServerEvents.recipes((kubejs) => {
    // With these recipes, you can produce slightly more honeycomb by pumping honey from beehives compared to just shearing them regularly
    // This may be a balancing concern?? Honey has so little uses I don't feel like implementing a solution
    
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
});