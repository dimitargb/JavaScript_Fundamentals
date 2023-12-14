let phoneBook = {
    gosho: '0999875999',
    peter: '0788046668',
    sasho: '08885849385',
    veselaka: '0556440438',
    drago: '7546092339',
}

// check if there is an antry

if(phoneBook.hasOwnProperty('sasho')){

    console.log(`Entry found: ` + phoneBook['peter']); // проверка с hasOwnProperty
};

if(phoneBook['veselaka']){

    console.log(`Entry found: ` + phoneBook['veselaka']);// директна проверка.
};

