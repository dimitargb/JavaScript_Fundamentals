function solve(first, second, third) {
    let sum = first + second + third;

    let type = Number.isInteger(sum) ? 'Integer'  : 'Float';

    console.log(`${sum} - ${type}`);
}


// function solve(first, second, third) {
//     let sum = first + second + third;
//     let type = '';

//     if (Number.isInteger(sum)) {
//         type = 'Integer';
//     } else {
//         type = 'Float';
//     }

//     console.log(`${sum} - ${type}`);
// }

solve(9, 100, 1.1)
