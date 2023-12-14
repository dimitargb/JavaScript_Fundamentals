function adressInfo(arr) {
    let book = {};

    for (let adressBook of arr) {
        let [name, address] = adressBook.split(':');
        book[name] = address;
    }

    let sortedBook = Object.entries(book);
    sortedBook.sort((a, b) => a[0].localeCompare(b[0]));

    for (let line of sortedBook) {
        let name = line[0];
        let address = line[1];

        console.log(`${name} -> ${address}`);
    }
}
adressInfo(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])