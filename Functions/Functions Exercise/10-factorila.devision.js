function factorialDivision(firstNumber, secondNumber) {
    let resulFirstNumber = 1;
    let resultSecondNumber = 1;
    for (let i = 1; i <= firstNumber; i++) {
        resulFirstNumber *= i
    }

    for (let j = 1; j <= secondNumber; j++) {
        resultSecondNumber *= j

    }

    let finalResult = resulFirstNumber / resultSecondNumber;

    console.log(finalResult.toFixed(2));

}
factorialDivision(6, 2)
