function evenOrOdd(numbers){
    let sumEven = 0;
    let sumOdd = 0;
    let sumSubstraction = 0;
    for(let number of numbers){
        
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    sumSubstraction = sumEven - sumOdd;
    console.log(sumSubstraction);
}
    
evenOrOdd([2,4,6,8,10])