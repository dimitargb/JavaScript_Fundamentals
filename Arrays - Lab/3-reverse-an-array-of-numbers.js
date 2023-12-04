function reverse(count, numbers){
    // 1. create new array;
    let newArray = []; // empety array
    // 2. take count from numbers;
    for( let i = 0; i < count; i++){
         newArray[i] = numbers[i];
    }
    // 3. reverse the elements;
    for( let i = 0; i < count; i++){
        newArray[count -1 - i] = numbers[i];
    }
    // 4. print new elements;
     console.log(newArray.join(' '));
    //console.log(newArray.toString());
   
    
}
reverse(3, [10, 20, 30, 40, 50]);