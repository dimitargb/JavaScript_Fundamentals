let text = 'Peter: 123 Mark: 456';
let pattern = /[A-Z][a-z]+\:\s*\d{3}\s*/g;

let validation = pattern.test(text);
console.log(validation);

let matches = text.match(pattern); // returns array of strings
console.log(matches);
console.log(matches[0]);
console.log(matches[1]);