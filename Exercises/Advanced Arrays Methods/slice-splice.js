let cars = ['Toyota','Trabant','Volvo', 'VW', 'Mercedes'];
// Важно комадата slice не променя оргиналния масив!
let oldCars = cars.slice(2, 4); // метода slice реже от посочения индекс до посочения индекс, но без него!
console.log(oldCars);
// например ако искаме да махнем от масива 'Trabant','Volvo' трябва да зададем индекс 1 до индекс 3;
let removedCars = cars.slice(1, 3);
//console.log(removedCars);
//console.log(cars);

let newCars = ['Toyota','Trabant','Volvo', 'VW', 'Mercedes'];
// Важно комадата splice променя оргиналния масив !!!
// С метода splice може да изтриваме и добавяме елементи отделно или заедно от определена от нас позиция.
let dletedCar = newCars.splice(2, 1); // ако искаме да махнем 'Volvo' от индекс 2 махаме един елемент!
console.log(dletedCar);
console.log(newCars);
// С метода splice може да изтриваме и добавяме елементи едновременно!! 
// Примерно искаме да добавим 3 елемента след 'Trabant';
let addedCars = newCars.splice(2, 0, 'Audi', 'BMW', 'Ferarri');
console.log(newCars);