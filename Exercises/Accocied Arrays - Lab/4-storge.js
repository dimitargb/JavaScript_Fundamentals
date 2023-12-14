function storageInfo(input) {

    let itemsInStock = {};

    for (let line of input) {

        let [product, quantity] = line.split(' ');
        itemsInStock[product] = Number(quantity);

        if (itemsInStock.hasOwnProperty(product)) {

            let currentQuantity = Number(quantity);
            let newQuantity = currentQuantity + quantity;
            itemsInStock[product] = newQuantity;
        }
        else {
            itemsInStock[product] = Number(quantity);
        }

    }

    for(let products in itemsInStock){

        console.log(`${products} -> ${itemsInStock[products]}`);
    }
}
storageInfo(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])