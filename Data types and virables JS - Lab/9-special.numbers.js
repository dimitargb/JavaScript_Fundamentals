function special(number) {
    let isSpecial = true;
    const firstSpecialNumber = 5;
    const secondSpecialNumber = 7;
    const lastSpecilNumber = 11;

    for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
        let sumOfDigits = 0;
        let numberToString = currentNumber.toString();
        let stringLength = numberToString.length;

        for (let index = 0; index < stringLength; index++) {
            if (currentNumber >= 10) {
                sumOfDigits += Number(numberToString[index]);
            } else {
                sumOfDigits = Number([currentNumber]);
            }
        }
        if (sumOfDigits == firstSpecialNumber || sumOfDigits == secondSpecialNumber || sumOfDigits == lastSpecilNumber) {
            isSpecial = true;
            console.log(`${currentNumber} -> True`);
        } else {
            isSpecial = false;
            console.log(`${currentNumber} -> False`);
        }
    }
}
special(15)