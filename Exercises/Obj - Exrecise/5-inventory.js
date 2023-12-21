function hiroesRegister(arr){

     let heroInfo = [];
    for(let line of arr){
        let [name, level, items] = line.split(' / ');
        
        let hero = {
          name: name,
          level: Number(level),
          items: items,
        }
        
       heroInfo.push(hero);
      }
        
      heroInfo.sort((a, b) => a.level - b.level);
        
   for(let hero of heroInfo){
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
   }

}
hiroesRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])