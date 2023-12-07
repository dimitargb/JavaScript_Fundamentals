function oddAndEvenNumbers(number) {
    let sumOdd = 0;
    let sumEven = 0;
    let numberToString = number.toString()

    for (let i = 0; i < numberToString.length; i++) {
        let currentNumber = Number(numberToString[i]);
        if (currentNumber % 2 === 0) {
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenNumbers(3495892137259234)