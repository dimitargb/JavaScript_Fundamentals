function countWords(text, word){
    let sentence = text.split(' ')
	let counter = 0;
	
	for (const el of sentence) {
		if (el === word) {
            counter++
		}
	}
	console.log(counter);
}


countWords('This is a word and it also is a sentence',
'is');
countWords('softuni is great place for learning new programming languages',
'softuni')