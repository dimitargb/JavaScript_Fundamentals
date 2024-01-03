function substring(input, startIndex, count) {
    let text = input;
    let result = text.substring(startIndex, startIndex + count);
    console.log(result);

}
substring('ASentence', 1, 8)