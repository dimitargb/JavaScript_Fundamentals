function evenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        let num = array[i];
        if (num % 2 == 0) {
            sum += array[i];
        }
    }
    console.log(sum);
}
evenNumbers(['1', '2', '3', '4', '5', '6'])
