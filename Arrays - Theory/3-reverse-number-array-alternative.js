function reverse(count, numbers) {
    let result = []; 

    for (let i = count - 1; i >= 0; i--) {
        result.push(numbers[i]);
    }

    // print
    console.log(result.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);
