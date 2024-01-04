function splitWords(input) {

    let result = input[0];
    let lower = input.toLowerCase();

    for (let index = 1; index < input.length; index++) {

        if (input[index] !== lower[index]) {
            result += ', ';
        }
        result += input[index];
    }
    console.log(result);

}
splitWords('SplitMeIfYouCanHaHaYouCantOrYouCan')