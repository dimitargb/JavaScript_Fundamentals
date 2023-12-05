function solve() {
    // Variable hoisting
    
    if (true) {
        var firstPerson = 'Pesho';
    }
    
    console.log(firstPerson);
}


// function solveEquivalent() {
//     let firstPerson;

//     if (true) {
//         firstPerson = 'Pesho';
//     }

//     console.log(firstPerson);
// }

solve();
