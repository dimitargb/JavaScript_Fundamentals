function employee(arr){

    for( let name of arr){
     let personalNumber = name.length;
     console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    }
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])