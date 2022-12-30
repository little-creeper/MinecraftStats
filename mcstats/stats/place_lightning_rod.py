from mcstats import mcstats

mcstats.registry.append(
    mcstats.MinecraftStat(
        'place_lightning_rod',
        {
            'unit': 'int',
        },
        mcstats.StatReader(['minecraft:used','minecraft:lightning_rod']),
        2681 # added in 20w45a
    ))
