function sortNumbers(arr){
    let newArray = [];
   
   arr.forEach(element => {
    
    let number = Number(element);

    if(number < 0){
        newArray.unshift(element);
    }else{
        newArray.push(element);
    }
   });
   console.log(newArray.join('\n'));
}
sortNumbers(['7', '-2', '8', '9']);
sortNumbers(['3', '-2', '0', '-1'])