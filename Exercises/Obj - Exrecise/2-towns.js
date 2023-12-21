function townInfo(arr) {

    let info = {};

    for (let list of arr) {

        let [town, latitude, longitude] = list.split(' | ');

        info.town = town;
        info.latitude = Number(latitude).toFixed(2);
        info.longitude = Number(longitude).toFixed(2);

        console.log(info);
    }

}
townInfo(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])