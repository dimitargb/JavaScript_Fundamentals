function palindromeIntegers(array) {

  let arrayLength = array.length;
  for(i = 0; i < arrayLength; i++){
   
    let numberAsString = array[i].toString();
   // reverse() - това не е метод който работи върху string/ работи само върху масив!!!

   // Как да направим от sting - масив и да го обърнем.
   // С командата join('') можем един масив да го направим на string
   // Пример: let result = [1,2,3].join(' ')
   // С командата split можем един string да го направим на масив.
   // join - array to string !!
   //split - string to array !!
   // let word = 'Test';
     //let reversedWord = word.split('').reverse();
     //console.log(reversedWord);
  }
    
  }
  palindromeIntegers([123, 323, 421, 121]);