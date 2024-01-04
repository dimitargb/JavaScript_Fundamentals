function checkForWord(word, text) {
    let line = text.split(' ');
    for (let el of line) {

        if (el.toLowerCase() === word.toLowerCase()) {
           return  console.log(word);
           
        }
    }
    console.log(`${word} not found!`);
}

checkForWord('javascript',
 'JavaScript is the best programming language');
 checkForWord('python',
 'JavaScript is the best programming language')