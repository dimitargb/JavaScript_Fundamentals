function printProvisions(arr1, arr2) {

  const productsList = {};

  for (let i = 0; i < arr1.length; i += 2) {

    let currentProduct = arr1[i];
    productsList[currentProduct] = Number(arr1[i + 1]);
  }

  for (let i = 0; i < arr2.length; i += 2) {

    let currentProduct = arr2[i];

    if (!productsList.hasOwnProperty(currentProduct)) {
      productsList[currentProduct] = Number(arr2[i + 1]);
    }
    else {
      productsList[currentProduct] += Number(arr2[i + 1]);
    }
  }
  for (let list in productsList) {
    console.log(`${list} -> ${productsList[list]}`);
  }
}
printProvisions([
  'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
  [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
  ])