function place(string, char, result){
    let res=string.replace('_',char);
    let output= res === result;
    if(output= res === result){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}
place('Str_ng', 'i', 'String')