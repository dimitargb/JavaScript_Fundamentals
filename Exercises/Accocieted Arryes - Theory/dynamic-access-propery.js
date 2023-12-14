let properyName = 'Ivaylo Petrov';

let phoneBook = {
 dimitardamianov: 0888440160,
 'petar ivanov': 089448935,
 [properyName]: 0886495987, // dynamic property name.
}

console.log(phoneBook.dimitardamianov);
console.log(phoneBook['petar ivanov']);
console.log(phoneBook[properyName]);
