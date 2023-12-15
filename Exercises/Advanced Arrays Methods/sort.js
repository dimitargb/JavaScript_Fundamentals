//сорт метода променя масива !!!
let numbers = ['2', '6', '1','7','4','100'];
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);
console.log(numbers);
// сортиране от голямо към малко;
let numbersTosort = ['2', '6', '1','7','4','100'];
let sortedNumbersToSort = numbers.sort((a, b) => b - a);
console.log(sortedNumbersToSort);

//alphabetical sort method !
let cars = ['toyota','trabant','Volvo', 'VW', 'Mercedes'];
let sortedCars = cars.sort((a, b) => a.localeCompare(b));
console.log(sortedCars);