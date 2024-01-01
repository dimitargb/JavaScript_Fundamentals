function calculatePrice(input) {
  let index = 0;
  let pattern = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;
  let totalCost = 0;

  console.log(`Bought furniture:`);
  while (input[index] !== 'Purchase') {

    let currentRow = input[index];
    let validProduct = pattern.exec(currentRow)

    while (validProduct !== null) {

      const productName = validProduct.groups['furniture'];
      console.log(productName);
      const productPrice = validProduct.groups['price'];
      const productQuantity = validProduct.groups['quantity'];

      totalCost += productPrice * productQuantity;

      validProduct = pattern.exec(currentRow)
    }
    index++;
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

// calculatePrice(['>>Sofa<<312.23!3',
//   '>>TV<<300!5',
//   '>Invalid<<!5',
//   'Purchase']
// )
calculatePrice(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])