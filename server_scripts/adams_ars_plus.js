ServerEvents.recipes((kubejs) => {
    // Frost Armour
    kubejs.remove({ id: "adamsarsplus:cade_hood" })
    kubejs.remove({ id: "adamsarsplus:cade_robes" })
    kubejs.remove({ id: "adamsarsplus:cade_leggings" })
    kubejs.remove({ id: "adamsarsplus:cade_boots" })

    kubejs.custom({
        type: "adamsarsplus:a_armor_upgrade",
        outTier: 3,
        output: {
            item: "adamsarsplus:cade_hood"
        },
        pedestalItems: [
            {
                item: {
                    item: "adamsarsplus:frost_soul"
                }
            },
            {
                item: {
                    item: "adamsarsplus:frost_soul"
                }
            },
            {
                item: {
                    item: "adamsarsplus:frost_soul"
                }
            },
            {
                item: {
                    item: "adamsarsplus:frost_soul"
                }
            },
            {
                item: {
                    item: "adamsarsplus:mana_diamond"
                }
            },
            {
                item: {
                    item: "adamsarsplus:mana_diamond"
                }
            },
            {
                item: {
                    item: "adamsarsplus:mana_diamond"
                }
            },
            {
                item: {
                    item: "adamsarsplus:mana_diamond"
                }
            }
        ],
        reagent: [
            {
                item: "ars_elemental:aqua_hat"
            }
        ],
        sourceCost: 7000,
        tier: 3
    })

    kubejs.custom(
        {
            type: "adamsarsplus:a_armor_upgrade",
            outTier: 3,
            output: {
                item: "adamsarsplus:cade_robes"
            },
            pedestalItems: [
                {
                    item: {
                        item: "adamsarsplus:frost_soul"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:frost_soul"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:frost_soul"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:frost_soul"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                },
                {
                    item: {
                        item: "adamsarsplus:mana_diamond"
                    }
                }
            ],
            reagent: [
                {
                    item: "ars_elemental:aqua_robes"
                }
            ],
            sourceCost: 7000,
            tier: 3
        }
    )
});