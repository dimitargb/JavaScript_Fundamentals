function calculateTotalCost(input) {
    // ако искаме в регкса да хавнем един или повече знаци пишем - [>]{1,} едно с запетайка значи едим или повече !!!
    let index = 0;
    let totalCost = 0;
    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;

    console.log(`Bought furniture:`);
    while (input[index] !== 'Purchase') {

        let productRow = input[index];
        let validProduct = pattern.exec(productRow);

        while (validProduct !== null) {
            const productName = validProduct.groups.name;
            console.log(productName);
            const peoductPrice = validProduct.groups.price;
            const productQuantity = validProduct.groups.quantity;

            totalCost += peoductPrice * productQuantity;

            validProduct = pattern.exec(productRow);

        }
        index++;
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

calculateTotalCost(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5',
    'Purchase'])