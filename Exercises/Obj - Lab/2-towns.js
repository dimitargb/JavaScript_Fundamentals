function townInfo(arr) {

    let table = {};

    arr.forEach((line) => {

        let [town, latitude, longitude] = line.split(' | ');
        table.town = town;
        table.latitude = Number(latitude).toFixed(2);
        table.longitude = Number(longitude).toFixed(2);
        console.log(table);
    });


}
townInfo(['Plovdiv | 136.45 | 812.575'])