function charactersInRange(firstChar, lastChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(),lastChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(),lastChar.charCodeAt());
    let resultString = '';

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);

        if(currentChar + 1 === rangeEnd){
            resultString +=`${singleChar}`;
        }else{
            resultString += `${singleChar} `;
        }
        

    }
    console.log(resultString);
}
charactersInRange('#', ':');