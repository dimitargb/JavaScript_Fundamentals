function distictArray(arr) {

    let uniqueNumbersArray = [];

    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {

        if (!uniqueNumbersArray.includes(arr[i])) {
            uniqueNumbersArray.push(arr[i]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}
distictArray([20, 8, 12, 13, 4, 4, 8, 5])