function findOccurencies(text, word){
   let count = text.split(' ').filter(w => w === word).length;
   console.log(count);  
}
findOccurencies('This is a word and it also is a sentence',
'is');
findOccurencies('softuni is great place for learning new programming languages',
'softuni')