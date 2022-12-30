from mcstats import mcstats

mcstats.registry.append(
    mcstats.MinecraftStat(
        'craft_bundle',
        {
            'unit': 'int',
        },
        mcstats.StatReader(['minecraft:crafted','minecraft:bundle']),
        2681 # added in 20w45a
    ))
