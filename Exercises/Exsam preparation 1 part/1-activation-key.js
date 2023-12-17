function keyGenerator(input) {

    let activationKey = input.shift();
    let command = input.shift()

    while (command !== 'Generate') {
        let line = command.split('>>>');
        let commandName = line.shift();

        switch (commandName) {

            case 'Slice':
                let startIndex = line[0];
                let endIndex = line[1];
                substring = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(substring, '');
                console.log(activationKey);
                break;

            case 'Flip':
                let instruction = line[0];
                let starting = line[1];
                let ending = line[2];
                let partTochange = activationKey.substring(starting, ending);

                if (instruction === 'Upper') {
                    newPart = partTochange.toUpperCase();
                } else {
                    newPart = partTochange.toLowerCase();
                };

                activationKey = activationKey.replace(partTochange, newPart);
                console.log(activationKey);
                break;

            case 'Contains':

                substring = line[0];

                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }

                break;
        }

        command = input.shift()
    }
    console.log(`Your activation key is: ${activationKey}`);
}
keyGenerator((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]))