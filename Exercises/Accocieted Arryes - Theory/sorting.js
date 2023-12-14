let phoneBook = {
    gosho: '0999875999',
    peter: '0788046668',
    sasho: '08885849385',
    veselaka: '0556440438',
    drago: '7546092339',
}
//convert to array

sortedPhoneBook = Object.entries(phoneBook);

sortedPhoneBook.sort((a, b) => a[0].localeCompare(b[0])); // сортиране на масив.

  //let sortedPhoneBook = Object.fromEntries();

for(let line of sortedPhoneBook){
     let name = line[0];
     let phoneNumber = line[1];

     console.log(`${name} - ${phoneNumber}`);
}
