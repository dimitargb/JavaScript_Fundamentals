function registry(arr) {

    let hero = [];

    for (line of arr) {

        let [name, level, items] = line.split(' / ');
        let heroInfo = {
            name: name,
            level: Number(level),
            items: items,
        }

        hero.push(heroInfo);

    }
    hero.sort((a, b) => a.level - b.level);


    for (let heroInfo of hero) {
        console.log(`Hero: ${heroInfo.name}`);
        console.log(`level => ${heroInfo.level}`);
        console.log(`items => ${heroInfo.items}`);
    }
}
registry([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])