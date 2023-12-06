function sorting(arr) {
    //Първо ще сортирмае масива по възходящ ред, като ще направим един цикъл да минава по него.
    let sortedArray = arr.sort((a, b) => a - b);
    // правим масив който да ни съдържа резултата - resultArray
    let resultArray = [];
    // вече имаме сортирания масив - sortedArray;
    // минаваме по този масив

    let sortedArrayLength = sortedArray.length;

    for (let i = 0; i < sortedArrayLength; i++) {
        let lastElement = sortedArray.pop();// изрязваме последния елемент и го добаряме в resultArray.
        let firstElement = sortedArray.shift();// изрязваме първия елемент и го добаряме в resultArray.
        resultArray.push(lastElement);
        resultArray.push(firstElement);
    }

    console.log(resultArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);