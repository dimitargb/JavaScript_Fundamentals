function findWord(words, text) {

    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let word of wordsArr) {
        for (let el of textArr) {
            if (el.includes('*') && el.length === word.length) {
                text = text.replace(el, word);
            }
        }
    }
    console.log(text);

}
findWord('great, learning',
    'softuni is ***** place for ******** new programming languages')