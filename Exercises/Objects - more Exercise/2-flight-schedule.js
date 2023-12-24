function flightInfo(arr) {

    let flights = {};
     
    arr[0].forEach(line => {
        let [flightNumber, destination] = line.split(' ');
        flights[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly',
        };
    });
    arr[1].forEach(line => {
        let [flightNumber, status] = line.split(' ');
        if (flights.hasOwnProperty(flightNumber)) {
            flights[flightNumber].Status = status;

        }
    });

    for (let fly in flights) {
        if (flights[fly].Status === String(arr[2])) {
            console.log(flights[fly]);
        }
    }
}
// flightInfo([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ]);
flightInfo([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])