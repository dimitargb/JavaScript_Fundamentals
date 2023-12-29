function furniture(input) {
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = input.shift();
    let furniture = [];
    let currMoney = 0;
    let moneyTotal = 0;
    let quantity = 0; 
      
    while (command !== 'Purchase') {
        let match = pattern.exec(command);
      
        if (match !== null) {
            furniture.push(match.groups['furniture']);
            currMoney = Number(match.groups['price']);
            quantity = Number(match.groups['quantity']);
            moneyTotal += currMoney * quantity;
        } 
      
        command = input.shift();
    }
 
    console.log('Bought furniture:');
    
    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }
  
    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])