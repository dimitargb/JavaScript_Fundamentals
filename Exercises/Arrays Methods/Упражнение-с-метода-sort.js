//Метода sort - променя оргиналния масив !!
let numbers = [2, 4, 1, 6, 2];
let cars = ['bmw', 'mercedess', 'toyota', 'vw', 'audi'];

console.log('--Обикновенно сортиране--');
numbers.sort();
cars.sort();
console.log(numbers); // Mutates original array
console.log(cars); // Mutates original array


numbers = [2, 8, 200, 12, 4]
numbers.sort((a, b) => a - b); // b - a for descending order
console.log('Сортиране във възходящ ред !!');
console.log(numbers);

console.log('Сортиране на стрингове !!');
cars = ['bmw', 'mercedess', 'toyota', 'VW', 'audi'];
cars.sort((a, b) => a.localeCompare(b))
console.log(cars);
