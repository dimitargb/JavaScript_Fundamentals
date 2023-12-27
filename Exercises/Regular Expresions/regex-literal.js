// RegExp literal
let pattern = /[A-Za-z0-9]+/g; // g означава global flag означава всички пъти в койъо този pattarn се случва ne само един път

// g - е за всички мачове в тескта без  g  е само за първия мач.

// RegExp constructor
let regexp = new RegExp('[A-Za-z0-9]+')

// function test - if pattern  exsists in text
let text = 'Is there anywhere in the text(). There are any() types of strings(), that can be used in the context().'
 let newPattern = /\w+\(\)/g;

let testing = newPattern.test(text);
console.log(testing);

// function exec
let newTesting = newPattern.exec(text); // при exec връща масив който може да бъде итериран

while (newTesting) {
    console.log(`Found ${newTesting[0]} on index ${newTesting.index}`);
    newTesting = newPattern.exec(text);
}