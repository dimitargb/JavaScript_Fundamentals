function printActivationKey(input) {

    let activationKey = input.shift();
    let line = input;
    let command = line.shift();
   


    while (command !== 'Generate') {
        let newLine = command.split('>>>');
        let instruction = newLine.shift();

        switch (instruction) {

            case 'Slice':
                let startIndex = newLine[0];
                let endIndex = newLine[1];
                let partToDelete = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(partToDelete, '');
                console.log(activationKey);
                break;
            case 'Flip':
                let instructions = newLine[0];
                let indexFrom = newLine[1];
                let indexTo = newLine[2];
                let partToChange = activationKey.substring(indexFrom, indexTo);


                if (instructions === 'Upper') {
                    activationKey = activationKey.replace(partToChange, partToChange.toUpperCase());
                    console.log(activationKey);
                }
                else if (instructions === 'Lower') {
                    activationKey = activationKey.replace(partToChange, partToChange.toLowerCase());
                    console.log(activationKey);
                }
                break;
            case 'Contains':
                let substring = newLine[0];

                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                }
                else {
                    console.log(`Substring not found!`);
                }
                break;
        }
        command = line.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
printActivationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])