function keyActivation(input) {

    let activationKey = input.shift();
    let instructions = input
    let instruction = instructions.shift();


    while (instruction !== 'Generate') {
        let line = instruction.split('>>>');
        let command = line.shift();

        if (command === 'Contains') {
            substring = line[0];
            if (activationKey.includes(substring)) {
                console.logconsole.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        }
        if (command === 'Flip') {
            let newCommand = line[0];
            let startIndex = line[1];
            let endIndex = line[2];

            let partToChange = activationKey.substring(startIndex, endIndex);

            if (newCommand === 'Upper') {

                //let newPart = partToChange.toUpperCase();
                activationKey = activationKey.replace(partToChange, partToChange.toUpperCase());
                console.log(activationKey);
            }
            else if (newCommand === 'Lower') {
                // let newPart = partToChange.toLowerCase();
                activationKey = activationKey.replace(partToChange, partToChange.toLowerCase());
                console.log(activationKey);
            }

        }
        if (command === 'Slice') {
            let startIndex = line[0];
            let endIndex = line[1];

            substring = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(substring, '');
            console.log(activationKey);
        }

        instruction = instructions.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
    
}

keyActivation(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);