// Global scope
let globalVariable = 'Pesho';

function solve() {
    // Function scope
    let functionVariable = 'Gosho';

    if (1 == 1) {
        let blockVariable = 'Stamat';
        console.log(globalVariable);
        console.log(functionVariable);
        console.log(blockVariable);
    }

    console.log(globalVariable);
    console.log(functionVariable);
    // console.log(blockVariable); -> error out of scope
}

solve();

console.log(globalVariable);
// console.log(functionVariable); -> error out of scope
// console.log(blockVariable); -> error out of scope

