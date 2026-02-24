ServerEvents.recipes( nadien => {


   //nether star block 1x
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": 'extendedcrafting:nether_star_block'
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_1x",
      "count": 1
    }
  
  }).id('ultimate_utilities:nether_star_block_1x')


       

  //nether star block 2x
  nadien.remove({output:'allthecompressed:nether_star_block_2x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_1x"
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_2x",
      "count": 1
    },

  }).id('ultimate_utilities:nether_star_block_2x')


  //nether star block 3x
  nadien.remove({output:'allthecompressed:nether_star_block_3x'})
  nadien.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "key": {
      "#": {
        "item": "allthecompressed:nether_star_block_2x"
      }
    },
    "result": {
      "id": "allthecompressed:nether_star_block_3x",
      "count": 1
    },
}).id('ultimate_utilities:nether_star_block_3x')



//nether star block 4x
nadien.remove({output:'allthecompressed:nether_star_block_4x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_3x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_4x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_4x')


//nether star block 5x
nadien.remove({output:'allthecompressed:nether_star_block_5x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_4x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_5x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_5x')




//nether star block 6x
nadien.remove({output:'allthecompressed:nether_star_block_6x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_5x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_6x",
    "count": 1
  },
}
).id('ultimate_utilities:nether_star_block_6x')





//nether star block 7x
nadien.remove({output:'allthecompressed:nether_star_block_7x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_6x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_7x",
    "count": 1
  },

}).id('ultimate_utilities:nether_star_block_7x')




//nether star block 8x
nadien.remove({output:'allthecompressed:nether_star_block_8x'})
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "allthecompressed:nether_star_block_7x"
    }
  },
  "result": {
    "id": "allthecompressed:nether_star_block_8x",
    "count": 1
  },
}).id('ultimate_utilities:nether_star_block_8x')

   //modium upgrade
   nadien.shaped(Item.of('allthemodium:allthemodium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:allthemodium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:modium_smithigng_upgrade')

    //vibranium
      nadien.shaped(Item.of('allthemodium:vibranium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:vibranium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:vibranium_smithigng_upgrade')

    //unobtainium
        nadien.shaped(Item.of('allthemodium:unobtainium_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'allthemodium:unobtainium_ingot',
        U: 'minecraft:ender_eye',
        N: 'minecraft:netherrack'
    }).id('nadien_tweaks:unobtainium_smithigng_upgrade')


    //allthemodium vibranium
    nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot'])
        .itemOutputs("allthemodium:vibranium_allthemodium_alloy_ingot")

    //allthemodium unobtanio
     nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:allthemodium_ingot', 'allthemodium:unobtainium_ingot'])
        .itemOutputs("allthemodium:unobtainium_allthemodium_alloy_ingot")

    //unobtanium vibranium 
     nadien.recipes.oritech
        .atomic_forge()
        .itemInputs(['allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot'])
        .itemOutputs("allthemodium:unobtainium_vibranium_alloy_ingot")

  
        ServerEvents.recipes(event => {



  // // Alloy Sword
  nadien.recipes.powah.energizing([
    "allthemodium:allthemodium_ingot",
    "allthemodium:allthemodium_sword",
    "allthemodium:allthemodium_ingot",
    "allthemodium:vibranium_ingot",
    "allthemodium:vibranium_sword",
    "allthemodium:vibranium_ingot",
    "allthemodium:unobtainium_ingot",
    "allthemodium:unobtainium_sword",
    "allthemodium:unobtainium_ingot"
  ], "allthemodium:alloy_sword", 100000)
  .id("nadien_tweaks:pedistal/alloy_sword")


  // Alloy Pick
  nadien.recipes.powah.energizing([
    "allthemodium:allthemodium_ingot",
    "allthemodium:allthemodium_pickaxe",
    "allthemodium:allthemodium_ingot",
    "allthemodium:vibranium_ingot",
    "allthemodium:vibranium_pickaxe",
    "allthemodium:vibranium_ingot",
    "allthemodium:unobtainium_ingot",
    "allthemodium:unobtainium_pickaxe",
    "allthemodium:unobtainium_ingot"
  ], "allthemodium:alloy_pick", 100000)
  .id("nadien_tweaks:pedistal/alloy_pick")


  // Alloy Axe
  nadien.recipes.powah.energizing([
    "allthemodium:allthemodium_ingot",
    "allthemodium:allthemodium_axe",
    "allthemodium:allthemodium_ingot",
    "allthemodium:vibranium_ingot",
    "allthemodium:vibranium_axe",
    "allthemodium:vibranium_ingot",
    "allthemodium:unobtainium_ingot",
    "allthemodium:unobtainium_axe",
    "allthemodium:unobtainium_ingot"
  ], "allthemodium:alloy_axe", 100000)
  .id("nadien_tweaks:pedistal/alloy_axe")


  // Alloy Shovel
  nadien.recipes.powah.energizing([
    "allthemodium:allthemodium_ingot",
    "allthemodium:allthemodium_shovel",
    "allthemodium:allthemodium_ingot",
    "allthemodium:vibranium_ingot",
    "allthemodium:vibranium_shovel",
    "allthemodium:vibranium_ingot",
    "allthemodium:unobtainium_ingot",
    "allthemodium:unobtainium_shovel",
    "allthemodium:unobtainium_ingot"
  ], "allthemodium:alloy_shovel", 100000)
  .id("nadien_tweaks:pedistal/alloy_shovel")


  // Alloy Paxel
  nadien.recipes.powah.energizing([
    "#c:plates/unobtainium",
    "mekanismtools:refined_obsidian_paxel",
    "#c:plates/vibranium",
    "allthemodium:alloy_pick",
    "mekanismtools:netherite_paxel",
    "allthemodium:alloy_axe",
    "allthemodium:piglich_heart",
    "allthemodium:alloy_shovel",
    "#c:rods/allthemodium"
  ], "allthemodium:alloy_paxel", 100000)
  .id("nadien_tweaks:pedistal/alloy_paxel")

})

})
