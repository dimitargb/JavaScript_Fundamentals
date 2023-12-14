let phoneBook = {
    gosho: '0999875999',
    peter: '0788046668',
    sasho: '08885849385',
    veselaka: '0556440438',
    drago: '7546092339',
}

//казва се Object destructuring assignement;

let {peter, drago,} = phoneBook; //деструктуриранр на обект !!!
console.log(peter);
console.log(drago);

// looping true associeted arrays.\

let phoneBookArr = Object.entries(phoneBook); // phoneBookArr е масив

console.table(phoneBookArr);

for(let line of phoneBookArr){

    let name = line[0];
    let phone = line[1];
    console.log(`${name} -> ${phone}`);
}
// shorter version.
for(let [name, phone] of Object.entries(phoneBook)){
    
    console.log(`${name} -> ${phone}`);
}