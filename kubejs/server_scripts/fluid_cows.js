ServerEvents.recipes(nadien => {


    nadien.remove({output: 'moofluids:fluid_cow_jar'})
    nadien.shaped('moofluids:fluid_cow_jar', [
        'DAD',
        'BCB',
        'BBB'
      ], {
        A: 'mekanism_extras:supreme_fluid_tank',
        B: 'allthecompressed:glass_1x',
        C: 'oritech:still_heavy_oil_bucket',
        D: 'cookingforblockheads:milk_jar'
      }).id('nadien_tweaks:fluid_cow_jar')

})