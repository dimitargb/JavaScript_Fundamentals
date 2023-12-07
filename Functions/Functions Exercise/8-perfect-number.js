function perfectNumber(number) {

    let sum = 0;

    for (let divisor = 0; divisor < number; divisor++) {
        if (number % divisor === 0) {
            sum += divisor;
        }
    }
    if (sum === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(7)
