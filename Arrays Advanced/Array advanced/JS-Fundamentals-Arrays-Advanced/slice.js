let cars = ['bmw', 'mercedess', 'toyota', 'vw'];

// Take first two cars
let firstCars = cars.slice(0, 2);
console.log(cars); // Original array has not modified
console.log('First Cars: ', firstCars);

// Take last two cars
let lastCars = cars.slice(2);
console.log(cars);
console.log('Last Cars: ', lastCars);

// Make a copy
let carsCopy = cars.slice();
console.log(cars);
console.log('Cars Copy: ', carsCopy);

// Take last elements with negative index
let lastCar = cars.slice(-1);
console.log(lastCar);

let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.slice(2,3); // започва след втория индекс и стига до трети елемент включително!!
console.log(mid);