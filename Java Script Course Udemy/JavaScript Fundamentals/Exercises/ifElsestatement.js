const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Dimitar can start driving license coureses 🚗!");
} else {
  const yearsLeft = 18 - age;

  console.log(
    `Ivan has ${yearsLeft} years, untill he starts his driving license coureses 😄!`
  );
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
