function findWord(words, text) {
    text = ` ${text} `;
    let revieldsWords = words.split(', ');

    for (const word of revieldsWords) {

        const match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `);

    }
    console.log(text);
}
findWord('great, learning',
    'softuni is ***** place for ******** new programming languages')