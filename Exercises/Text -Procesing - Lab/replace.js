let text = ' Here is nice and good to go in a nice and clean inviroment and very nice people.'
let replacedWord = text.replace('nice', 'wonderful'); // променя само първата дума.
console.log(replacedWord);

//replace all words 'nice' - става с цикъл.
let replaceAllText = text;
while(replaceAllText.indexOf('nice') >= 0){
    replaceAllText = replaceAllText.replace('nice', 'wonderful');
}
//console.log(replaceAllText); Judge не го поддържа !!!

// replaceAll.
let replaceText = text.replaceAll('nice', 'wonderful');
console.log(replaceText);