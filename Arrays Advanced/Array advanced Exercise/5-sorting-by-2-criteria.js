function sortingByTwo(arr) {
    //първо се сротира по дължина във възхдящ ред.
    // второ се сортират по азбучен ред във възходящ ред.
    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    sortedArray.forEach(element => { // принтиране с функция forEach
        console.log(element);
    });
}
sortingByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])