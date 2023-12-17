function printMessage(input) {
    let cryptedMessage = input.shift();
    //console.log(cryptedMessage);
    let line = input;
    //console.log(line);
    let command = line.shift();
    //console.log(command);
    let tempMessage = '';

    while (command !== 'Decode') {
        let instruction = command.split('|');
        let commandName = instruction[0];


        switch (commandName) {
            case 'ChangeAll':
                let startIndex = instruction[1];
                let endIndex = instruction[2];

                cryptedMessage = cryptedMessage.replaceAll(startIndex, endIndex);
                //console.log(cryptedMessage);
                break;
            case ' Insert':
                let index = Number(instruction[1]);
                let value = instruction[2];

                let message = cryptedMessage.split('');
                console.log(message);
                console.log(tempMessage);
                break;
            case 'Move':
                let lettersNumber = Number(instruction[1]);
                let numberOfLettersToMove = cryptedMessage.substring(0, lettersNumber);
                tempMessage = cryptedMessage.replace(numberOfLettersToMove, '');
                tempMessage += numberOfLettersToMove;
                cryptedMessage = tempMessage;
                console.log(cryptedMessage);
                break;
        }


        command = line.shift()
    }


}
printMessage(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])