// Math Operators
const now = 2021;
const ageJoanas = now - 1973;
const ageFranky = now - 1985;

//console.log(ageJoanas, ageFranky);
//console.log(ageJoanas * 2, ageJoanas / 2, 2 ** 3);

// 2 ** 3 means two to the power of 3 = 2 * 2 * ;

const firstName = "Dimitar";
const lastName = "Damianov";
console.log(firstName + " " + lastName); // Dimitar Damianov
//console.log(firstName.concat(lastName)); // DimitarDamianov

// Assigment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 25 * 4 = 100
x++; // This is x = x + 1;
x--; // This is x = x - 1;
x--; // This is x = x - 1;

//console.log(x);

// Comparison Operators
console.log(ageJoanas > ageFranky); // we also have <, >=,<=
// Tis means is the age of Jonas grater than the age of Frankey and the Operator replys with true or false
console.log(ageFranky >= 18);
const isFullAge = ageFranky >= 18;
console.log(isFullAge);

let y, z;

y = z = 25 - 10 - 5;
console.log(y, z); // z = 10, y = 10 , because assigment is working from right to left!

//Calculating the avarage
const avarageAge = ageJoanas + ageFranky / 2;
console.log(ageJoanas, ageFranky, avarageAge); // avarageAge = 66;
// The reason is becuse the devision is happening before the addition according to the Opertaor precedence .
// We need to put the addition in brackets so this operation to be executed first and then the devision.

const avarageAge1 = (ageJoanas + ageFranky) / 2;
console.log(avarageAge1); // avarageAge now is 42;

const massMark = 78;
const hightMark = 1.69;
const massJohn = 92;
const hightJohn = 1.95;

const BMIMark = massMark / (hightMark * hightMark);
const BMIJohn = massJohn / (hightJohn * hightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
