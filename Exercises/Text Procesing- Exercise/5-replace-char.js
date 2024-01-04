function replaceChar(input) {

    let result = input[0];

    for (let index = 1; index < input.length; index++) {
        const currentElement = input[index];
        const previousElement = input[index - 1]
        if (currentElement !== previousElement)
            result += currentElement;
    }
    console.log(result);
}
replaceChar('aaaaabbbbbcdddeeeedssaa');
replaceChar('qqqwerqwecccwd')