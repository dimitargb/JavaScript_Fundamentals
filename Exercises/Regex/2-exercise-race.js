function printRaceInfo(input) {

    let raceParticiapnts = input.shift().split(', ')

    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /\d+/g;
    let racersObject = {}
    let raceInfo = input.shift();


    while (raceInfo !== 'end of race') {

        let currentName = raceInfo.match(namePattern).join('');
        let currentDistance = raceInfo.match(distancePattern).join('');

        if (raceParticiapnts.includes(currentName)) {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            }

            if (!racersObject.hasOwnProperty(currentName)) {
                racersObject[currentName] = distance;
            }
            else {
                racersObject[currentName] += distance;
            }
        }
        raceInfo = input.shift()
    }
    let sortedRacersObject = Object.entries(racersObject);
    sortedRacersObject.sort((a, b) => b[1] - a[1])
    let firstRacer = sortedRacersObject[0][0];
    let secondRacer = sortedRacersObject[1][0];
    let thirtdRacer = sortedRacersObject[2][0]

    console.log(`1st place: ${firstRacer}`);
    console.log(`2nd place: ${secondRacer}`);
    console.log(`3rd place: ${thirtdRacer}`);
}


printRaceInfo(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])