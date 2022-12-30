from mcstats import mcstats

mcstats.registry.append(
    mcstats.MinecraftStat(
        'place_lantern',
        {
            'unit': 'int',
        },
        mcstats.StatSumReader([
                mcstats.StatReader(['minecraft:used','minecraft:lantern']),
                mcstats.StatReader(['minecraft:used','minecraft:soul_lantern']),
        ]),
        1910 # lanterns added in 18w46a
    ))
