function addAndSubstarct(firtsNumber, secondNumber, lastNumber) {

    function add(firtsNumber, secondNumber) {

        let sumOfTwoNumbers = firtsNumber + secondNumber;

        return sumOfTwoNumbers;
    }

    let sum = add(firtsNumber, secondNumber);

    function substarct(sum, lastNumber) {

        return sum - lastNumber;
    }
    let result = substarct(sum, lastNumber);
    console.log(result);
}
addAndSubstarct(42, 58, 100)