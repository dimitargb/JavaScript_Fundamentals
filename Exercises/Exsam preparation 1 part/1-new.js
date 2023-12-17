function keyGenerator(input) {

    let activationKey = input.shift();
    let command = input.shift()

    while (command !== 'Generate') {
        let line = command.split('>>>');
        let commandName = line.shift();

        switch (commandName) {
            // case 'Contains':
            //     let substring = line[0];
            //     if (activationKey.includes(substring)) {
            //         console.log(`${activationKey} contains ${substring}.`);
            //     } else {
            //         console.log(`Substring not found!`);
            //     }
            //     break;
            // case 'Flip':
            //     let instruction = line[0];
            //     let startIndex = line[1];
            //     let endIndex = line[2];

            //     let partToChange = activationKey.substring(startIndex, endIndex);


            //     if (instruction === 'Upper') {
            //         newPart = partToChange.toUpperCase();
            //     }
            //     else if (instruction === 'Lower') {
            //         newPart = partToChange.toLowerCase();
            //     };

            //     activationKey = activationKey.replace(partToChange, newPart)
            //     console.log(activationKey);
            //     break;
            case ' Slice':
               let instruction = line[0];
               let  startIndex = line[1];
               let  endIndex = line[2];

                //substring = activationKey.substring(startIndex, endIndex);
                let newActivationKey = activationKey.slice(startIndex,endIndex)
                console.log(activationKey);
                break;
        }

        command = input.shift()
    }
                let newActivationKey = activationKey.slice(startIndex,endIndex)
    console.log(`Your activation key is: ${newActivationKey}`);
}