function storageInfo(input) {

    let itemsInStock = {};
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        let currentProduct = input[i];
        itemsInStock[currentProduct] = Number(input[i + 1]);
       
    }
}
    for (let i = 0; i < productsOrderedLength; i += 2) {
        let currentProduct = productsOrdered[i];


        if (!productInStock.hasOwnProperty(currentProduct)) {
            productInStock[currentProduct] = 0;
        }
        productInStock[currentProduct] += Number(productsOrdered[i + 1]);
    }

    for (const key in productInStock) {
        console.log(`${key} -> ${productInStock[key]}`)
    }
