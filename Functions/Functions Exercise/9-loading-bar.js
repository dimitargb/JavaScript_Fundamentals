function loadingBar(num) {

    let procentCount = '%'.repeat(num / 10);
    let dotsCount = '.'.repeat(10 - procentCount.length);

    if (num === 100) {
        console.log('100% Complete!');
    }
    else if (num < 100) {
        console.log(`${num}% [${procentCount}${dotsCount}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30)