function findSpecialWords(text) {
    const textArr = text.split(' ');

    for (let word of textArr) {
        const isValidWorld = word.startsWith('#') && word.length > 1;

        if (isValidWorld) {
            let isLetter = true;
            let specialWord = '';
            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    specialWord += word[index];
                }
            }

            if (isLetter) {
                console.log(specialWord);
            }
        }
    }
}
findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')