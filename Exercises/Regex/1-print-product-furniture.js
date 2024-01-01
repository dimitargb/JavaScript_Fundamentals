function printValidProducts(input) {
    let index = 0;
    let pattern = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;
    let totlaPrice = 0;

    console.log(`Bought furniture:`);

    while (input[index] !== 'Purchase') {

        let productLine = input[index];
        let validProductLine = pattern.exec(productLine);
        while (validProductLine !== null) {
            

            prodctName = validProductLine.groups.furniture;
            console.log(prodctName);
            let productPrice = validProductLine.groups.price;
            let prductQuantity = validProductLine.groups.quantity;

            totlaPrice += productPrice * prductQuantity;
            validProductLine = pattern.exec(productLine);
        }

        index++;
    }
    console.log(`Total money spend: ${totlaPrice.toFixed(2)}`);
}
printValidProducts(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])