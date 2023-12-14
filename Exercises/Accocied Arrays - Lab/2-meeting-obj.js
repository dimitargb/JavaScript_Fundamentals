function printMeetings(arr) {
    let meetings = {};

    for (let line of arr) {
        let [weekDay, name] = line.split(' ');

        if (meetings.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        }
        else {
            meetings[weekDay] = name;
            console.log(`Scheduled for ${[weekDay]}`)
        }
    }

    for (let meeting in meetings) {
        console.log(`${meeting} -> ${meetings[meeting]}`);
    }

}
printMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])