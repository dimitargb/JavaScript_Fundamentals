function printMessage(input) {
    let array = input.slice();
    let message = array.shift();
    let tempMessage = '';
    let currentLine = array.shift();

    while (currentLine !== 'Decode') {
        let element = currentLine.split('|');
        let command = element[0];

        switch (command) {
            case 'Move':
                let letterNumber = Number(element[1]);
                let lettersToMove = message.substring(0, letterNumber);
                tempMessage = message.replace(lettersToMove, '');
                tempMessage += lettersToMove;
                message = tempMessage;
                break;
            case 'Insert':
                let index = Number(element[1]);
                let value = element[2];

                tempMessage = message.split('');
                tempMessage.splice(index, 0, value);
                message = tempMessage.join('');
                break;
            case 'ChangeAll':
                let substring = element[1];
                let replacement = element[2];

                while (message.includes(substring)) {
                    tempMessage = message.replace(substring, replacement);
                    message = tempMessage;
                }
                //   message = message.replaceAll(substring, replacement);
                //   console.log(message);
                break;
        }

        currentLine = array.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
// printMessage([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode',
// ])
printMessage(['owyouh',
'Move|2',
'Move|3',
'Insert|3|are',
'Insert|9|?',
'Decode'])