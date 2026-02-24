ServerEvents.recipes(nadien => {

 

    //crafting base
     nadien.shaped('kubejs:crafting_base', [
        "AA ",
        "BB ",
        "   "
    ], {
        A: '#minecraft:planks',
        B: '#minecraft:logs',
    }).id('nadien_tweaks:craftingbase')


    //STEAMING RESTONIA CRYSTAL
     nadien.custom({"type":"mekanism:reaction","chemical_input":{"amount":100,"chemical":"mekanism:fissile_fuel"},"chemical_output":{"amount":100,"id":"mekanism:nuclear_waste"},"duration":100,"fluid_input":{"amount":10,"fluid":"mekanism:steam"},"item_input":{"count":1,"item":"actuallyadditions:empowered_restonia_crystal"},"item_output":{"count":1,"id":"kubejs:steaming_restonia_crystal"}}).id('nadien_tweaks:steming_restonia')
     

 //osmiridium 

//  nadien.custom({"type":"immersiveengineering:arc_furnace","additives":[{"tag":"forge:ingots/zinc"}],"conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","item":'mekanism:ingot_osmium'}},{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/zinc"}}],"energy":51200,"input":{"item":'alltheores:iridium_ingot'},"results":[{"base_ingredient":{"item":'kubejs:osmiridiumingot'},"count":2}],"time":100}).id('nadientwekas:osmiridiumuno')

 nadien.recipes.enderio.alloy_smelting('kubejs:osmiridiumingot', [Item.of("mekanism:ingot_osmium"), Ingredient.of("alltheores:iridium_ingot")], 5000, 5.5);
 
// nadien.recipes.thermal.smelter('kubejs:osmiridiumingot', ['mekanism:ingot_osmium', 'alltheores:iridium_ingot']).energy(4800).id('nadientweaks:osmiridiumtres')

//osgoglas

nadien.recipes.enderio.alloy_smelting('kubejs:osgloglasingot', [Item.of("mekanism:ingot_osmium"), Item.of("mekanism:ingot_refined_glowstone"), Item.of("mekanism:ingot_refined_obsidian")], 4800, 0.3).id('nadientweaks:osgoglasuno')
 

// nadien.recipes.thermal.smelter('kubejs:osgloglasingot', ['mekanism:ingot_osmium', 'mekanism:ingot_refined_obsidian', 'mekanism:ingot_refined_glowstone']).energy(4800).id('nadientweaks:osgoglastres')

//dark ingot
nadien.recipes.enderio.alloy_smelting('kubejs:dark_ingot', ['kubejs:bitumen', 'kubejs:tar'], 4800, 0.3).id('nadientweaks:darkingotdos')

nadien.remove({output: 'enderio:dark_steel_ingot' })

nadien.recipes.enderio.alloy_smelting('enderio:dark_steel_ingot', ['mekanism:ingot_refined_obsidian', 'kubejs:energized_dark_ingot', '#c:ingots/steel'], 5000, 5.5);
 
//osmio energizado
  nadien.shaped('8x kubejs:energized_osmium_ingot', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'mekanism:ingot_osmium',
        B: 'oritech:still_naphtha_bucket'
    }).id('nadien_tweaks:osmioenergizado')


  //certus energizado
    nadien.shaped('8x kubejs:energized_certus_quartz_crystal', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'ae2:certus_quartz_crystal',
        B: 'oritech:still_naphtha_bucket'
    }).id('nadien_tweaks:certusenergizado')

    //energized dark ingot
    nadien.shaped('8x kubejs:energized_dark_ingot', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'kubejs:dark_ingot',
        B: 'oritech:still_naphtha_bucket'
    }).id('nadien_tweaks:darkingotenergizado')



    //crystal bundle
   nadien.recipes.enderio.alloy_smelting(
  'kubejs:crystal_bundle',
  [
    Item.of("mekanism:ingot_osmium"),
    Item.of('kubejs:empowered_glod_crystal', 3), // <- cantidad correcta
    Item.of("actuallyadditions:empowered_emeradic_crystal")
  ],
  4800,
  0.3
).id('nadientweaks:crystalbundle')


//cuero tratado
nadien.shaped('kubejs:treated_leather', [
        "AB ",
        "CD ",
        "   "
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:water_bucket',
        C: 'minecraft:lime_dye',
        D: 'minecraft:flint'
    }).id('nadien_tweaks:cuerotratado')

    //cuero industrial
    nadien.recipes.enderio.alloy_smelting('kubejs:industrial_leather', ['kubejs:treated_leather', 'minecraft:netherite_scrap', 'minecraft:sugar'], 5800, 0.3).id('nadientweaks:osgoglasuno').id('nadien_tweaks:industrial_leather');

   //demon block
    nadien.shaped('kubejs:demon_block', [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: 'kubejs:demon_ingot'
    }).id('nadien_tweaks:demon_block')

    //deminic ingot

       function transform(resultado, item, cantidad) {
    nadien.custom({
  "type": "ae2:transform",
   "circumstance": {
    "type": "fluid",
    "tag": "minecraft:lava"
  },
  "ingredients": [
    {
      "item": item
    }
  ],
  "result": {
    "count": cantidad,
    "id": resultado
  }
}).id(`nadien_tweaks:circuito/${resultado.replace(':', '/')}`)}

transform('kubejs:demon_ingot', "minecraft:gold_ingot", 4)



   nadien.shaped('9x kubejs:demon_ingot', [
        "A  ",
        "   ",
        "   "
    ], {
        A: 'kubejs:demon_block'
    }).id('nadien_tweaks:demonic_ingot_recipe_port_alt')


    //lunar reactivo
    nadien.recipes.create.mixing(['kubejs:lunar_reactive'],['minecraft:echo_shard', Fluid.of('mysticalagradditions:molten_supremium', 1000)]).superheated().id('nadien_tweaks:lunar_reactive_recipe_port')


//osgolapis
nadien.recipes.enderio.alloy_smelting('kubejs:osglolapis', [Item.of("minecraft:lapis_lazuli"), Item.of("kubejs:osgloglasingot")], 4800, 0.3).id('nadientweaks:osglolapisuno')




//aleacion cosmica
  nadien.shaped('kubejs:cosmic_alloy', [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'kubejs:ingot_of_elevation'
    }).id('nadien_tweaks:cosmic_alloy')



    //chancla
    nadien.remove({output: 'ultimatefoods:chancla'})
     nadien.shaped('ultimatefoods:chancla', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'kubejs:demon_ingot',
        B: 'kubejs:ingot_of_elevation'
    }).id('nadien_tweaks:chancleta')
    
  //demonlord 
  nadien.recipes.enderio.alloy_smelting('kubejs:demonlord_ingot', [Item.of("kubejs:lunar_reactive"), Item.of("kubejs:demon_ingot")], 4800, 0.3).id('nadientweaks:demonlord_ingotuno')
  
  //tar recipe
nadien.recipes.oritech.pulverizer().itemInputs('kubejs:oil_sand_ore').itemOutputs(['kubejs:tar']).id('nadien_tweaks:tar')
nadien.recipes.oritech.centrifuge_fluid().itemInputs('kubejs:oil_sand_ore').fluidInput("1000x kubejs:crude_oil").itemOutputs(["kubejs:tar", "3x kubejs:bitumen"]).id('nadien_tweaks:bitumen/tar')

//crude oil
nadien.custom({
  "type": "oritech:centrifuge_fluid",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [
    {
      "amount": 1000,
      "fluid": "kubejs:crude_oil"
    }
  ],
  "ingredients": [
    {
      "item": "kubejs:oil_sand_ore"
    }
  ],
  "results": [],
  "time": 100
}).id('nadien_tweaks:crude_oil')

//pyrotheum blend
  nadien.shaped('kubejs:pyrotheum_blend', [
        "AA ",
        "BC ",
        "   "
    ], {
        A: 'minecraft:blaze_powder',
        B: '#c:dusts/sulfur',
        C: 'minecraft:redstone'
    }).id('nadien_tweaks:pyrotheum_blend')

  

  
   


   //enderium
   nadien.remove({id: 'alltheores:alloy_smelting/enderium_ingot'})
   nadien.remove({id: 'alltheores:arcfurnace/enderium/ingot'})
   nadien.remove({id: 'alltheores:arcfurnace/enderium/from_dust'})
   nadien.remove({id: 'alltheores:arcfurnace/enderium/from_plate'})
   nadien.remove({id: 'alltheores:arcfurnace/enderium/from_gear'})
   nadien.remove({id: 'alltheores:smelting/enderium/dust_smelting'})
   nadien.remove({id: 'alltheores:smelting/enderium/dust_blasting'})
   nadien.remove({id: 'alltheores:crafting/enderium/alloy_blending_from_dust'})
   nadien.recipes.enderio.alloy_smelting('alltheores:enderium_ingot', ['2x ultimatefoods:nadienite_ingot', 'kubejs:pyrotheum_blend', '2x minecraft:ender_pearl'], 4800, 0).id('nadientweaks:enderium_port')


   //Nadienite Ingot
  nadien.remove({id: 'ultimatefoods:nadienite_ingot'})
  nadien.remove({output: 'ultimatefoods:nadienite_ingot' })

   nadien.recipes.oritech.foundry().itemInputs(['justdirethings:eclipsealloy_ingot', 'mysticalagriculture:prudentium_ingot']).itemOutputs('4x ultimatefoods:nadienite_ingot').id('nadien_tweaks:nadienite_ingot')




       })