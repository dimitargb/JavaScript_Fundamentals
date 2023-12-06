function train(arr){

    let passinghersInTrain = arr.shift().split(' ').map(Number);
    //командата shift взима елемнта от нулевия индекс от даден масив в случея ['32 54 21 12 4 0 23']
    // дирeктно го изрязва от масива и няма да го има повече в този масив !!!
    // след като го изреже иамаме просто един стринг от числа.
   // console.log(passinghersInTrain);
   // този стринг трябва да го направин на масив с командата split('') и става масив с елементи вътре.

    // console.log(passinghersInTrain);
    // с кимандата map(Number) накрая правим всички елементи от този масив на числа !!
    // следващто нещо което ще вземем е макс капацитет nа един вагон - '75' - правим променлива;
    let maxCapacity = Number(arr.shift()); // отнво го изрязваме от масива с командада shift();
    // Правин един for цикъл за останалите елемнти от масива arr.

    let arrLength = arr.length
    for(let i = 0; i < arrLength; i++){
    //Правим си нова променлива която ще държи всеки един от елементите на масива.
       let currentRow = arr[i].split(' '); //правим сплит за да разделим елемнтите ако са повече от един на ред !!
       // проверяваме дали се съдържа команда Add в currentRow с проверка if
       if(currentRow[0] === 'Add'){
    // при команда Add се добавя нов вагон към крайния масив !!!
    // трябва с командата push() да се добави нов елемент с това число след Add.
       let newWaggonPassingers = Number(currentRow[1]); // добавяме новите пасажери като число затова е Number.
       passinghersInTrain.push(newWaggonPassingers);
       
       }else{
        // ако обаче тук получаваме число, трябва да направим един for цикъл за да видим къде има място  за тези хора
           for( let j = 0; j < passinghersInTrain.length; j++){
            //трябва да имаме една проверка дали към броя на пътниците в съответния вагон може да се добави това число
             let passingersInCurrentWaggon = passinghersInTrain[j];
              if(passingersInCurrentWaggon + Number(currentRow[0]) <= maxCapacity){
                passinghersInTrain[j] +=Number(currentRow[0]);
                break;
              }
           }
       }
    }
console.log(passinghersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])