let cars = ['Toyota','Trabant','Volvo', 'VW', 'Mercedes'];
console.log(cars.includes('Mercedes'));
console.log(cars.includes('BMW'));
//командата includes проверява дали в масива се съдържа дадена стойност и връща true или false;

// indexOf връща индекса(позицията на елемнта) от масива в който се намира елемента;
let newCras = ['Toyota','Trabant','Volvo', 'VW', 'Mercedes','Toyota'];
console.log(newCras.indexOf('Toyota'));
// ако такъв индекс не съществува връща -1 !!!
console.log(newCras.indexOf('Audi'));
// командата indexOf може да търси от края на мсива, тогава се използав метода - lastIndexOf;
console.log(newCras.lastIndexOf('Toyota'));