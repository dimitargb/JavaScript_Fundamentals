function evenOrOdd(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    let sumSubstraction = 0;
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    sumSubstraction = sumEven - sumOdd;
    console.log(sumSubstraction);
}
evenOrOdd([2, 4, 6, 8, 10])