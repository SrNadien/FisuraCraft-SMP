ServerEvents.recipes(nadien => {


nadien.remove({output: ['create:deployer', 'create:mechanical_crafter', 'create:spout','create:andesite_alloy', 'create:refined_radiance_casing']})
 
 
 //aleacion de andesita
 nadien.recipes.create.mixing('8x create:andesite_alloy', ['2x minecraft:iron_ingot', 'allthecompressed:andesite_1x']).id('nadien_tweaks:andesite_alloy_dos').superheated()
 nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'kubejs:demon_ingot'
 }).id('nadien_tweaks:aleaciondeandesita')


nadien.shaped('9x create:polished_rose_quartz', [
   'P  ',
   '   ',
   '   '
 ], {
   P: 'create:rose_quartz_block',
 }).id('nadien_tweaks:rose_qurtz_polished_block')


 //ensamblador mecanico
 nadien.shaped('create:mechanical_crafter', [
   ' P ',
   ' A ',
   ' D '
 ], {
   P: 'create:electron_tube',
   A: 'create:andesite_casing',
   D: 'minecraft:crafting_table'
 }).id('nadien_tweaks:mechanical_crafter')

 //surtidor
 nadien.shaped('create:spout', [
   ' P ',
   ' A ',
   '   '
 ], {
   P: 'create:andesite_casing',
   A: 'minecraft:dried_kelp'
 }).id('nadien_tweaks:spout')

 //hand
 nadien.shaped('kubejs:zinc_hand', [
   ' A ',
   'PPP',
   ' P '
 ], {
   P: '#c:plates/zinc',
   A: 'create:andesite_alloy'
 }).id('nadien_tweaks:mano_sinc')

 //desplegador
  nadien.shaped('create:deployer', [
   ' A ',
   ' P ',
   ' D '
 ], {
   P: 'create:andesite_casing',
   A: 'create:electron_tube',
   D: 'kubejs:zinc_hand'
 }).id('nadien_tweaks:desplegador_quietorl')


//radiant sheet
  nadien.recipes.create.mixing('create:radiant_sheet',  'mekanism_extras:alloy_radiance').id('nadien_tweaks:radiant_sheet').superheated()
       
  
  //brass alloying
  nadien.recipes.enderio.alloy_smelting('create:brass_ingot', ['#c:ingots/copper', '#c:ingots/zinc'], 4800, 0).id('nadientweaks:laton_alloying')


 
})