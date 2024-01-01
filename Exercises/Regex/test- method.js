let text = 'Today is 2015-05-11';
let pattern = /[A-Z][a-z]+\s*[a-z]+\s*\d{4}\-\d{2}\-\d{2}/g;

let validation = pattern.test(text);
console.log(validation);

// using method test to validate pattern - returns true or false;