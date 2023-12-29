function barIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|[^$%|.]*?(?<price>\d+\.?\d+)\$/gm;
    let totalIncome = 0;
    let command = input.shift();


    while (command !== 'end of shift') {

        let currentLine = pattern.exec(command);

        if (currentLine) {

            const currentCustumer = currentLine.groups.name;
            const currentProduct = currentLine.groups.product;
            const currentCount = Number(currentLine.groups.count);
            const currentPrice = Number(currentLine.groups.price);

            let totalProductPrice = currentCount * currentPrice;
            console.log(`${currentCustumer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);

            totalIncome += totalProductPrice;

            command = input.shift();
            currentLine = pattern.exec(command);
        }
        else {
            command = input.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// barIncome(['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'])
barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);