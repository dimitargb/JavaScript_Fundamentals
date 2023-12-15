let cars = ['bmw', 'mercedess', 'toyota', 'vw'];
console.log(cars);

cars.push('AstonMartin', 'Lada');// добавя елемнт на каря на мсаива!!
console.log(cars);

cars.pop('mercedess', 'toyota'); // премахва последния елемент от масива !!
console.log(cars);

cars.shift() // премахва елемент от началото на масива!! 
console.log(cars);
cars.unshift('BMW2', 'JT'); //добавя един елемент в началото на масива !!
console.log(cars);

//Ако искаш да преобразуваш в масива в стринг по отделни индекси от елемента използваш split !!!

let string = 'hi there';

let usingSplit = string.split('');
let usingArrayFrom = Array.from(string);
console.log(usingSplit);
console.log(usingArrayFrom);