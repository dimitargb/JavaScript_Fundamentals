function convertExpression(input) {

    let obj = JSON.parse(input);

    for (let name in obj) {
        console.log(`${name}: ${obj[name]}`);
    }
}
convertExpression('{"name": "George", "age": 40, "town": "Sofia"}')