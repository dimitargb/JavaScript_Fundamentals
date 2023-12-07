function printCertificate(grade, names){
    // Print Header
    printHeader();
    // Print Ful Name
    let fullName = getFullName(names)
    console.log(fullName);
    // Print Formated Grade
    formatGrade(grade);

function getFullName(names){
    return`${names[0]} ${names[1]}`;
}

function printHeader(){
    console.log(`~~~-   {@}   -~~~`);
    console.log(`~- Certificate -~`);
    console.log(`~~~-  ~---~  -~~`);
}

function formatGrade(grade) {
    let gradeAnotation = '';
    
    if (grade < 3) {
        gradeAnotation = 'Fail';
    } else if (grade < 3.5) {
        gradeAnotation = 'Poor';
    } else if (grade < 4.5) {
        gradeAnotation = 'Good';
    } else if (grade < 5.5) {
        gradeAnotation = 'Very good';
    } else {
        gradeAnotation = 'Excellent';
    }

    if (gradeAnotation == 'Fail') {
        console.log(`${gradeAnotation} (2)`);
    } else {
        console.log(`${gradeAnotation} (${grade.toFixed(2)})`);
    }
}
}
printCertificate(5.25, ['Peter', 'Carter'])