function meetings(input){

    const arr = {};

    for(let element of input){
        let[day, name] = element.split(' ');
        
        if(arr[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            arr[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let day in arr){
        console.log(`${day} -> ${arr[day]}`);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])