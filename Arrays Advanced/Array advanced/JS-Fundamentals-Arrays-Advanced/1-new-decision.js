function sumFirtsAndLastElemnt(array) {

    let firstElement = Number(array.shift());
    let lastElemnt = Number(array.pop());

    let result = firstElement + lastElemnt;
    console.log(result);

}
sumFirtsAndLastElemnt(['20', '30', '40'])