function prossecOddNumbers(array){
    let oddPositions = array.filter((x, i) => i % 2 !== 0);
    let doubled = oddPositions.map(x => x * 2);
    let reversed = doubled.reverse()
   

     console.log(reversed.join(' '));

}
prossecOddNumbers([10, 15, 20, 25])