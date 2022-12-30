from mcstats import mcstats

mcstats.registry.append(
    mcstats.MinecraftStat(
        'mine_snow',
        {
            'unit': 'int',
        },
        mcstats.StatSumReader([
            mcstats.StatReader(['minecraft:mined','minecraft:snow']),
            mcstats.StatReader(['minecraft:mined','minecraft:snow_block']),
            mcstats.StatReader(['minecraft:mined','minecraft:powder_snow']),
        ])
    ))
