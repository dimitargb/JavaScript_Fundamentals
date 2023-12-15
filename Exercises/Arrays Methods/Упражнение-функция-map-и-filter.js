// Функцията map не променя масива а създава нов масив с трансформирани елементи !!!
let number = [1, 2, 3, 5 ,8];

let doubleNumbers = number.map(x => x * 2);
console.log(number);
console.log(doubleNumbers );

//Функцията filter !!!

let numbers = [2, 4, 1, 9, 10, 3];
let evenNumbers = numbers.filter(x => x % 2 === 0);

console.log(evenNumbers);

//Филтриране по стрингове !!!

let names = ['ivo', 'pesho', 'gosho', 'ani'];

let shortNames = names.filter(x => x.length <= 3);
console.log(shortNames);

//Филтриране по позиции = index
let evenPositionsNumber = numbers.filter((x, i) => i % 2 === 0);
console.log(numbers);
console.log(evenPositionsNumber);
