let text = 'Peter: 123 Mark: 456';
let pattern = /(?<personsName>[A-Z][a-z]+)\:\s*(?<number>\d{3})\s*/g;

let valid = pattern.test(text);
console.log(valid);

let match = pattern.exec(text);
console.log(match);