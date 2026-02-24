//mochilas by SrNadien
ServerEvents.recipes(nadien => {

nadien.remove({output: 'sophisticatedbackpacks:backpack' })
nadien.shaped('sophisticatedbackpacks:backpack', [
    'SLS',
    'SCS',
    'LLL'
    ], {
      S: 'minecraft:string',
      L: 'kubejs:industrial_leather',
      C: 'minecraft:shulker_box'
}).id('nadien_tweaks:mochila')




});