function negariveOrPositive(array) {
    let newArrey = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i]);
        if (currentElement < 0) {
            newArrey.unshift(currentElement);
        } else {
            newArrey.push(currentElement)
        }
    }
    console.log(newArrey.join('\n'));
}
negariveOrPositive(['7', '-2', '8', '9'])