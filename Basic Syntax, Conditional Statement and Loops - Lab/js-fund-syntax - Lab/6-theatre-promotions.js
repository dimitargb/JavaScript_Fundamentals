function calculateTicket(dayType, age) {
    let ticketPrice = 0;

    switch (dayType) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                ticketPrice = 12;
            } else if (18 < age && age <= 64) {
                ticketPrice = 18;
            } else if (64 < age && age <= 122) {
                ticketPrice = 12;
            }
            break;
        case 'Weekend':
            break;
        case 'Holiday':
            break;
    }

    if (ticketPrice !== 0) {
        console.log(ticketPrice + '$');
    } else {
        console.log('Error');
    }
}

calculateTicket('sadsad', 122);
