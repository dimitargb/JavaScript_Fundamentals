//метода map трансформира елементите в масива;
// map не променя оргиналния масив, а създава нов масив с трансформирами елементи!!!
// подава се правило по което да трансформира всеки един от елементите и създаваме нов масив с тарнсформирани елементи
let numbers = ['2', '6', '1','7','4']
let modifiedArray = numbers.map( a => a * 2);
console.log(modifiedArray);
let arr = ['one','two','three','four', 'five'];
let arrLength = arr.map(a => a.length)
console.log(arrLength);
// с map може да се променя и по индекси position.map((x, i) => i % 2 === 0)

//метода filter не променя оргиналния масив!!!
let newArray = ['2', '6', '1','7','4'];
let oddNumbers = newArray.filter(a => a % 2 !== 0);
let evenNumbers = newArray.filter(a => a % 2 === 0);
console.log(oddNumbers);
console.log(evenNumbers);
// филтриране на стрингове;
let firstName = ['ivo','ani','pesho','joro']
let filteredNames = firstName.filter(x => x.length < 5);
console.log(filteredNames);
// може да се филтрира и по индекси или позиции;
let position = ['2', '6', '1','7','4'];
let filteredEvenIndex = position.filter((x, i) => i % 2 === 0);
console.log(filteredEvenIndex);
