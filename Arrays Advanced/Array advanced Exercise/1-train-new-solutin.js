function train(arr) {

    let passinghersInTrain = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {

        let currentRow = arr[i].split(' ');
        if (currentRow[0] === 'Add') {
            let newWaggonPassingers = Number(currentRow[1]);
            passinghersInTrain.push(newWaggonPassingers);
        } else {
            for (let j = 0; j < passinghersInTrain.length; j++) {
                let passingersInCurrentWaggon = passinghersInTrain[j];
                if (passingersInCurrentWaggon + Number(currentRow[0]) <= maxCapacity) {
                    passinghersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passinghersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])