function employee(arr) {

    let obj = {};

    for (let name of arr) {

        obj[name] = Number(name.length);
    }

    for (let name in obj) {
        console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
    }
}
employee([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])