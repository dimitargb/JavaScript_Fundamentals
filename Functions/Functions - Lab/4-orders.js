function calculateOrders(text, quantity) {
    let totalPrice = 0;

    switch (text) {
        case 'coffee': totalPrice = 1.50 * quantity;
            break;
        case 'water': totalPrice = 1.00 * quantity;
            break;
        case 'coke': totalPrice = 1.40 * quantity;
            break;
        case 'snacks': totalPrice = 2.00 * quantity;
            break;
    }
    console.log(totalPrice.toFixed(2));
}
calculateOrders("water", 5)