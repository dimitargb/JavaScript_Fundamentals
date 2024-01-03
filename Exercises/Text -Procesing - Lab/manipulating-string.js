// string searching with method indexOf !!!
let text = ' Here is nice and good to go in a nice and clean inviroment and very nice people.'
// searching for a world in text - 'nice'
let niceIndex = text.indexOf('nice'); //ще върне първото място където се среща тази дума с индека на 'n' първия индекс от дума.
console.log(niceIndex)

// lastIndexOf - намира последното място на идекса от думата която тръсим.
let lastWord = text.lastIndexOf('nice'); // това търси отзад напред в текста.
console.log(lastWord);

// как да намерим индекса на дума от средата на текста която се повтаря !!!
let secondWordIndex = text.indexOf('nice', niceIndex + 1);
console.log(secondWordIndex);

// ако търсим дума която я няма в текста връща -1;
let missingIndex = text.indexOf('ball');
console.log(missingIndex); // -1 означава че дъмата я няма в текста.

// get all indexes of 'nice'
let index = text.indexOf('nice'); // while цикъл да нмаерим всички идекси на думата 'nice'
while(index >= 0){
console.log(`nice found on ` + index + ' position');
index = text.indexOf('nice', index  + 1);
}
