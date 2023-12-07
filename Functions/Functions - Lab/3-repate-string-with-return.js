function repate(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;

}
let repatedstring = repate("String", 2);
console.log(repatedstring);