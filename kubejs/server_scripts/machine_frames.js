ServerEvents.recipes(nadien => {
  


//revestidor radiante
nadien.remove({output: 'create:refined_radiance_casing'})
nadien.shaped('create:refined_radiance_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'oritech:duratium_ingot',
  b: 'createcasing:chorium_ingot',
  c: 'create:railway_casing'
}).id('nadien_tweaks:refined_radiance_casing')
nadien.recipes.create.deploying('create:refined_radiance_casing', ['create:railway_casing', 'oritech:duratium_ingot']).id('nadien_tweaks:radiance_casing_deployer')

//machine frame
nadien.remove({output: 'rftoolsbase:machine_base'})
nadien.shaped('rftoolsbase:machine_base', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'oritech:adamant_ingot',
  b: 'create:sturdy_sheet',
  c: 'create:andesite_alloy_block',
  n: 'create:refined_radiance_casing'
}).id('nadien_tweaks:machine_frame')
nadien.recipes.create.deploying('rftoolsbase:machine_base', ['create:refined_radiance_casing', 'oritech:adamant_ingot']).id('nadien_tweaks:machine_frame_deployer')

//carcasa de acero
nadien.remove({output: 'mekanism:steel_casing'})
nadien.shaped('mekanism:steel_casing', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'alltheores:steel_rod',
  b: 'alltheores:steel_rod',
  c: 'kubejs:energized_osmium_ingot',
  n: 'rftoolsbase:machine_base'
}).id('nadien_tweaks:steel_casing')
nadien.recipes.create.deploying('mekanism:steel_casing', ['rftoolsbase:machine_base', 'alltheores:steel_rod']).id('nadien_tweaks:steel_casing_deployer')

//void chassis
nadien.remove({output: 'enderio:void_chassis'})

nadien.shaped('enderio:void_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'kubejs:osmiridiumingot',
  b: 'mekanism:hdpe_sheet',
  c: 'mekanism:steel_casing' 
}).id('nadien_tweaks:void_chassis')
nadien.recipes.create.deploying('enderio:void_chassis', ['mekanism:steel_casing', 'kubejs:osmiridiumingot']).id('nadien_tweaks:void_chassis_deployer')

//machine frame rftools
nadien.remove({output: 'rftoolsbase:machine_frame'})
nadien.shaped('rftoolsbase:machine_frame', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'actuallyadditions:empowered_emeradic_crystal',
  b: 'kubejs:ingot_of_elevation',
  c: 'enderio:void_chassis'
}).id('nadien_tweaks:machine_frame_rftools')
nadien.recipes.create.deploying('rftoolsbase:machine_frame', ['enderio:void_chassis', 'kubejs:ingot_of_elevation']).id('nadien_tweaks:achine_frame_rftools_deployer')

//ensouled chassis
nadien.remove({output: 'enderio:ensouled_chassis'})
nadien.shaped('enderio:ensouled_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'kubejs:demonlord_ingot',
  b: 'enderio:end_steel_ingot',
  c: 'rftoolsbase:machine_frame' 
}).id('nadien_tweaks:ensouled_chassis')
nadien.recipes.create.deploying('enderio:ensouled_chassis', ['rftoolsbase:machine_frame', 'kubejs:demonlord_ingot']).id('nadien_tweaks:ensouled_chassis_deployer')

//iron cassing
nadien.remove({output: 'actuallyadditions:iron_casing'})
nadien.shaped('actuallyadditions:iron_casing', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'ultimatefoods:nadienite_ingot',
  b: 'enderio:vibrant_alloy_block',
  c: 'actuallyadditions:empowered_restonia_crystal',
  n: 'enderio:ensouled_chassis'
}).id('nadien_tweaks:iron_casing')
nadien.recipes.create.deploying('actuallyadditions:iron_casing', ['enderio:ensouled_chassis', 'ultimatefoods:nadienite_ingot']).id('nadien_tweaks:iron_cassing_deployer')


//lava factory cassing
nadien.remove({output: 'actuallyadditions:lava_factory_casing'})
nadien.shaped('actuallyadditions:lava_factory_casing', [
  'aba',
  'dcd',
  'aba'
], {
  a: 'extendedcrafting:enhanced_ender_ingot',
  b: 'ars_nouveau:source_gem',
  c: 'actuallyadditions:iron_casing',
  d: 'allthemodium:allthemodium_ingot'
}).id('nadien_tweaks:lava_factory_casing')
nadien.recipes.create.deploying('actuallyadditions:lava_factory_casing', ['actuallyadditions:iron_casing', 'allthemodium:allthemodium_ingot']).id('nadien_tweaks:lava_factory_cassing_deployer')

//ender cassing
nadien.remove({output: 'actuallyadditions:ender_casing'})
nadien.shaped('actuallyadditions:ender_casing', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'enderio:reinforced_obsidian_block',
  b: 'actuallyadditions:empowered_emeradic_crystal',
  c: 'extendedcrafting:enhanced_ender_ingot',
  n: 'actuallyadditions:lava_factory_casing'
}).id('nadien_tweaks:ender_cassing')
nadien.recipes.create.deploying('actuallyadditions:ender_casing', ['actuallyadditions:lava_factory_casing', 'extendedcrafting:enhanced_ender_ingot']).id('nadien_tweaks:ender_casing_deployer')


//marco de maquina pequeño
nadien.remove({output: 'industrialforegoing:machine_frame_pity'})
nadien.shaped('industrialforegoing:machine_frame_pity', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'justdirethings:celestigem',
  b: 'oritech:duratium_ingot',
  c: 'irregular_implements:spectre_ingot',
  n: 'actuallyadditions:ender_casing'
}).id('nadien_tweaks:machine_frame_pity')
nadien.recipes.create.deploying('industrialforegoing:machine_frame_pity', ['actuallyadditions:ender_casing', 'irregular_implements:spectre_ingot']).id('nadien_tweaks:pity_machine_frame_deployer')

//marco de maquina pequeño
nadien.remove({output: 'mysticalagriculture:machine_frame'})
nadien.shaped('mysticalagriculture:machine_frame', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'justdirethings:celestigem',
  b: 'mysticalagriculture:prosperity_ingot',
  c: 'irregular_implements:spectre_ingot',
  n: 'industrialforegoing:machine_frame_pity'
}).id('nadien_tweaks:machine_frame_mysticalagriculture')
nadien.recipes.create.deploying('mysticalagriculture:machine_frame', ['industrialforegoing:machine_frame_pity', 'mysticalagriculture:prosperity_ingot']).id('nadien_tweaks:pity_machine_frame_deployer')



// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')




})