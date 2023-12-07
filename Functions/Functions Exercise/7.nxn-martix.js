function matrix(num){
 
 let newArray = [];

 for (let i = 0; i < num; i++){
    let output = '';
    for( let j = 0; j < num; j++){
        output += `${num} `;
    }
    newArray.push(output)
   
 }
 console.log(newArray.join('\n'));
}
matrix(7);