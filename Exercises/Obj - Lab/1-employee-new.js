function list(arr) {

    let info = {};

    for (let name of arr) {
        info[name] = Number(name.length);
    }

    for (let name in info) {
        console.log(`Name: ${name} -- Personal Number: ${info[name]}`);
    }
}
list([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])