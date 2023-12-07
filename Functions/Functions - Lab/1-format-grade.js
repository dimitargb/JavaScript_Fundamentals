function gradeResult(grade) {
    let result = '';
    if (grade < 3) {
        result = 'Fail';
    }
    else if (grade < 3.5) {
        result = 'Poor';
    }
    else if (grade < 4.5) {
        result = 'Good';
    }
    else if (grade < 5.5) {
        result = 'Very good';
    }
    else {
        result = 'Excellent';
    }

    if (grade < 3) {
        console.log(`${result} (${Math.trunc(grade)})`);
    } else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}
gradeResult(2.99);