ServerEvents.recipes(nadien => {

   //draconic core
   nadien.remove({id: 'draconicevolution:draconium_core'})
   nadien.remove({output: 'draconicevolution:draconium_core'})
   nadien.shaped('draconicevolution:draconium_core', [
    'CBC',
    'BAB',
    'CBC'
   ], {
     A: 'actuallyadditions:empowered_diamatine_crystal',
     B: 'oritech:energite_ingot',
     C: 'alltheores:gold_plate'  
}).id('nadien_tweaks:draconium_core')

   //wyvern core
    nadien.remove({id: 'draconicevolution:wyvern_core'})
    nadien.remove({output: 'draconicevolution:wyvern_core'})
    nadien.shaped('draconicevolution:wyvern_core', [
      'CDC',
      'BAB',
      'CDC'
        ], {
          A: 'actuallyadditions:empowered_diamatine_crystal',
          B: 'oritech:energite_ingot',
          C: 'alltheores:gold_plate',
          D: 'draconicevolution:draconium_core'



}).id('nadien_tweaks:wyvern_core')
   

    //crafting core
    nadien.remove({id: 'draconicevolution:crafting_core'})
    nadien.remove({output: 'draconicevolution:crafting_core'})
nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "extendedcrafting:crafting_core"
  },
  "ingredients": [
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditionsaddon:compact_empowerer"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditions:empowered_diamatine_crystal_block"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "actuallyadditions:empowered_diamatine_crystal_block"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditionsaddon:compact_empowerer"
    },
    {
      "item": "draconicevolution:draconium_core"
    }
  ],
  "result": {
    "id": 'draconicevolution:crafting_core',
    "count": 1
  }
}).id('nadien_tweaks:crafting_core')


   
  //basic crafting injectors
  nadien.remove({id: 'draconicevolution:basic_crafting_injector'})
  nadien.remove({output: 'draconicevolution:basic_crafting_injector'})
  nadien.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "rftoolspower:pearl_injector"
  },
  "ingredients": [
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditionsaddon:compact_empowerer"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditions:empowered_enori_crystal_block"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "actuallyadditions:empowered_enori_crystal_block"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "oritech:energite_ingot"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "actuallyadditionsaddon:compact_empowerer"
    },
    {
      "item": "draconicevolution:draconium_core"
    }
  ],
  "result": {
    "id": 'draconicevolution:basic_crafting_injector'
  }
}).id('nadien_tweaks:basic_crafting_injector') 

    })