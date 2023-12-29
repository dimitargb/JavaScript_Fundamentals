function raceInfo(input) {
    let racesers = input.shift().split(', ');
    let racersObject = {};

    const patternName = /[A-Za-z]+/g;
    const patternDistance = /[0-9]+/g;

    let command = input.shift();


    while (command !== 'end of race') {
        const currentName = command.match(patternName).join('');
        const currentDistance = command.match(patternDistance).join('');

        if (racesers.includes(currentName)) {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            }

            if (!racersObject.hasOwnProperty(currentName)) {
                racersObject[currentName] = distance;

            } else {
                racersObject[currentName] += distance;
            }
        }
        command = input.shift();
    }
    let sortedRacersObject = Object.entries(racersObject).sort((a, b) => b[1] - a[1]);

    const firstPlace = sortedRacersObject[0][0];
    const secondPlace = sortedRacersObject[1][0];
    const thirdPlace = sortedRacersObject[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}

raceInfo(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);