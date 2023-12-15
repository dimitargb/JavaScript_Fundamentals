function prossecOddNumbers(array){
    // Функционално програмиране :)
    let result = array
    .filter((x, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    
     console.log(result.join(' '));

}
prossecOddNumbers([10, 15, 20, 25])