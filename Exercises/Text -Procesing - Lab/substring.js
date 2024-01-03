let text = ' Here is nice and good to go in a nice and clean inviroment and very nice people.'
let secondWord = text.substring(6) // първо посочваме идекса от който да започнем да режем включително 'is'.
console.log(secondWord); // текста пред 'is' се махна.
// ако искаме да продължиме да режем казваме до къде но се хваща идекса след думата която ще режем.
// примерно искаме да отрежем 'nice'
let wordToRemove = text.substring(9, 13);
console.log(wordToRemove);
