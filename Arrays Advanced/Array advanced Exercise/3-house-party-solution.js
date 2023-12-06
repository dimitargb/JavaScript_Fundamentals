function houseParty(arr) {

    let guestArray = [];

    for (const el of arr) {
        let command = el.split(' ');
        let name = command[0];
        
        if (command.length === 3) {
            
            if (guestArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestArray.push(name);
            }
        } else {
            if (!guestArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestArray.indexOf(name);
                guestArray.splice(index, 1);
            }
        }
    }
    console.log(guestArray.join('\n'))
}
        houseParty(['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!'])
