function paswordValodator(password) {

    let digitcounter = 0;
    let passwordLenght = password.length;
    let isSymbol = false;
    for (let i = 0; i < passwordLenght; i++) {
        let charNum = password[i].charCodeAt();
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitcounter++;
        }
        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }

    }
    if (passwordLenght < 6 || passwordLenght > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitcounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if (digitcounter >= 2 && !isSymbol && (passwordLenght >= 6 || passwordLenght <= 10)) {
        console.log(`Password is valid`);
    }

}
paswordValodator('Pa$s$s')