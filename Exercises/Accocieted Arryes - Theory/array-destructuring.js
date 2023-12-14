function replaceNumber(arr){

    let phoneBook = {};

    for(let line of arr ){

        let[name, phoneNumber] = line.split(' '); // array destructuring;

        // let currentLine = line.split(' ');
        // let name = currentLine[0];
        // let phoneNumber = Number(currentLine[1]);
        
        phoneBook[name] = phoneNumber;
    }

    for( let name in phoneBook){

        console.log(`${name} -> ${phoneBook[name]}`);
    }

}
replaceNumber(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])