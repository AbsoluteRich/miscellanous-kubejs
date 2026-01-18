ServerEvents.recipes((kubejs) => {
    kubejs.recipes.createCompacting(
        "minecraft:honeycomb", // Input(s)
        Fluid.of("create:honey", 250),  // Output(s), replace this with #forge:honey
    )
});