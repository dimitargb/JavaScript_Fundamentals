function sumEvenNumbers(numbers) {
    let evenSum = 0;

    // Read only, don't modify the array
    for (let textNumber of numbers) {
        let number = Number(textNumber);

        if (number % 2 == 0) {
            evenSum += number;
        }
    }

    console.log(evenSum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
