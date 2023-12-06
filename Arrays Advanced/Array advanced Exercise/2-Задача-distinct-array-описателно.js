function distictArray(arr){
    //Условито на задачата е да се премахнат всички повтарящи се лементи от масива !!!
    // Правим променлива съдържаща новия масив без повтарящи се числа.
    let uniqueNumbersArray = [];
    // С един цикъл ще минем по нащия масив като ще направим променлива
    let arrayLength = arr.length;

    for( let i = 0; i < arrayLength; i++){
        // ще направим една проверка ако uniqueNumbersArray.includes() - не съдържа даден елемент 
        // искаме да добавим същия елемент към масива.
         if(!uniqueNumbersArray.includes(arr[i])){
            uniqueNumbersArray.push(arr[i]);
         }

    }
console.log(uniqueNumbersArray.join(' '));





}
distictArray([7, 8, 9, 7, 2, 3, 4, 1, 2])