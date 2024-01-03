function findWords(text, word) {

    // let result = text;
    // let replacedWord = result.replace(word,'*'.repeat(word.length));
    // console.log(replacedWord);
    
    // while (result.includes(word)) {
    //     result = text.replace(word, '*'.repeat(word.length))
    // }
    // console.log(result);

        let newText = text.split(word)
        let result = newText.join('*'.repeat(word.length))
        console.log(newText);
        console.log(result);
    
        
}
findWords('A small sentence with some words', 'small')