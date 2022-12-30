from mcstats import mcstats

mcstats.registry.append(
    mcstats.MinecraftStat(
        'mine_glass',
        {
            'unit': 'int',
        },
        mcstats.StatSumMatchReader(
            ['minecraft:mined'],
            ['minecraft:glass','minecraft:tinted_glass','minecraft:.*glass_pane','minecraft:.*stained_glass']),
    ))
