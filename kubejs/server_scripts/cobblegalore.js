ServerEvents.recipes(nadien => {
    // Stone generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_stone'})
    nadien.shaped('cobblegengalore:block_gen_stone', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:cobblestone',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'minecraft:glass'
    })

    // Copper Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_copper' })
    nadien.shaped('cobblegengalore:block_gen_copper', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:copper_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_stone'
    })

    // Iron Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_iron'})
    nadien.shaped('cobblegengalore:block_gen_iron', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_copper'
    })

    // Gold Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_gold'})
    nadien.shaped('cobblegengalore:block_gen_gold', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:gold_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_iron'
    })

    // Emerald Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_emerald'})
    nadien.shaped('cobblegengalore:block_gen_emerald', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:emerald',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_gold'
    })

    // Diamond Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_diamond'})
    nadien.shaped('cobblegengalore:block_gen_diamond', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:diamond',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_emerald'
    })

    // Netherite Generator
    nadien.remove({ id: 'cobblegengalore:crafting/block_gen_netherite'})
    nadien.shaped('cobblegengalore:block_gen_netherite', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:netherite_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_diamond'
    })



    //customs   
    function gengalore(output, left, right, modifier) {
    nadien.custom({
  "type": "cobblegengalore:blockgen",
  "result": {
    "id": output,
    "count": 1
  },
  "speed": 2,
  "left": {
    "Name": left //fluido 1
  },
  "right": {
    "Name": right //fluido 2
  },
  "modifier": {
    "Name": modifier //bloque debajo
     }
  }).id(`nadien_tweaks:gen_galore/${output.replace(':', '/')}`)}
      //example add metal prees item
      //gengalore(output, left, right, modifier)//
      

 // // treated wood
//   gengalore('immersiveengineering:treated_wood_horizontal', 'allthemodium:soul_lava', 'productivemetalworks:molten_diamond', 'immersiveengineering:treated_wood_horizontal')
// gen_not_consume('immersiveengineering:treated_wood_horizontal', 'minecraft:netherite_block', 'immersiveengineering:biodiesel', 1, 'minecraft:end_stone')

// // // soul stone
// // // gen('mysticalagriculture:soulstone', 'mysticalagriculture:soulstone_cobble', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // black stone
gengalore('minecraft:blackstone', 'productivemetalworks:molten_lead', 'minecraft:water', 'minecraft:coal_block')

// gen_not_consume(, ', , 1, 'minecraft:coal_block')
// // // dust exnihilo
// gengalore('exdeorum:dust', 'productivemetalworks:molten_iron', 'productivemetalworks:molten_quartz', 'exdeorum:compressed_dust')

// gen_not_consume(, 'exdeorum:compressed_dust', 'minecraft:water', 1, 'exdeorum:dust')
// // // crushed end stone exnihilo
// gengalore('exdeorum:crushed_end_stone', 'productivemetalworks:molten_ender', 'productivemetalworks:molten_enderium', 'exdeorum:compressed_crushed_end_stone')

// gen_not_consume(Item.of('exdeorum:crushed_end_stone', 16), 'exdeorum:compressed_crushed_end_stone', 'productivemetalworks:molten_ender', 1, 'exdeorum:crushed_end_stone')

// // // crushed netherrack exnihilo
// gengalore('exdeorum:crushed_netherrack', 'productivemetalworks:molten_netherite', 'minecraft:lava', 'exdeorum:compressed_crushed_netherrack')

// gen_not_consume(Item.of('exdeorum:compressed_netherrack', 16), 'exdeorum:crushed_netherrack', 'minecraft:lava', 1, 'exdeorum:crushed_netherrack')
// // // end stone (compost → dirt)
// // gen('minecraft:dirt', 'farmersdelight:organic_compost', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // darkstone forbidden
// // // gen('minecraft:chiseled_polished_blackstone', 'forbidden_arcanus:darkstone', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // end stone bricks → end stone
// // gen('minecraft:end_stone_bricks', 'minecraft:end_stone', 'minecraft:netherite_block', 1, 'exdeorum:witch_water')

// // // cristal
gengalore('minecraft:glass', 'productivemetalworks:molten_glass', 'exdeorum:witch_water', 'mekanism:structural_glass')
// // gen(, , 'minecraft:netherite_block', 1, )
//  gen_not_consume('minecraft:glass', 'mekanism:structural_glass', 'exdeorum:witch_water', 1, 'allthecompressed:glass_1x')
// // // certus crystal
gengalore('ae2:quartz_block', 'ae2:fluix_block', 'productivemetalworks:molten_iridium', 'ae2:64k_crafting_storage')

//  gen_not_consume(Item.of('ae2:quartz_block', 32), 'ae2:64k_crafting_storage', 'advanced_ae:quantum_infusion_source', 1, 'ae2:64k_crafting_storage')


})
