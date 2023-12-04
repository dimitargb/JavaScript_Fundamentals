function reverse(count, numbers) {
    let reversedNumbers = [];
    for (let i = 0; i < count; i++) {
     reversedNumbers[count - 1 - i] = numbers[i];
    }
    console.log(reversedNumbers.join(' '));
    
}
  
reverse(3, [10, 20, 30, 40, 50])