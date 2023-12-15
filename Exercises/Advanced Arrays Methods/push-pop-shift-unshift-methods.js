let newArray = ['Audi', 'BMW'];

newArray.push('Toyota','Trabant','Volvo'); //метода push - слага най-отзад в масива.
//console.log(newArray);

newArray.pop() // метода pop премахва последния елемент от масива.
//console.log(newArray);

newArray.unshift('VW','Mercedes'); // метода unshift добавя елементи в началото на масива.
//console.log(newArray);

newArray.shift('VW'); // метода shift премахва първия елемент от масива.
console.log(newArray);
let firstElement = newArray.shift();
console.log(newArray);
newArray.length = newArray.length - 2; // така също може да се премахват елементи то масива;
console.log(newArray);
