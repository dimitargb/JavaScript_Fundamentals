function kElements(array){
    let k = array.shift();

    let firstRow = array.slice(0, k);
    let secondRow = array.slice(array.length - k);
    console.log(firstRow.join(' '));
    console.log(secondRow.join(' '));

}
kElements([2, 7, 8, 9])