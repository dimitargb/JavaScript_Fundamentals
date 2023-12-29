//convert to array

sortedPhoneBook = Object.entries(phoneBook);

sortedPhoneBook.sort((a, b) => a[0].localeCompare(b[0])); // сортиране на масив.

  //let sortedPhoneBook = Object.fromEntries();

for(let line of sortedPhoneBook){
     let name = line[0];
     let phoneNumber = line[1];

     console.log(`${name} - ${phoneNumber}`);
}