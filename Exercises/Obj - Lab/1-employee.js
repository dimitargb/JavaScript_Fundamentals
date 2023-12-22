function employeeList(arr) {

    let info = {};

    arr.forEach((person) => {
        info.person = person;
        info.personalNumber = person.length;

        console.log(`Name: ${info.person} -- Personal Number: ${info.personalNumber}`);

    });


}
employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])