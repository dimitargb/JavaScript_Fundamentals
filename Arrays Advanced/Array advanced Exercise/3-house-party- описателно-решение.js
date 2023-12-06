function houseParty(arr){
    //правим си нов масив - guestArray в който ще се запазват хората кото реално ще ходят на парти;
    let guestArray = [];
    // трябва да минем по всеки един елемент от масива от стрингове и да проверяваме дали е going или not going.
    // правис ми for off цикъл защот не ни интересуват индексите
    for (const el of arr) {
        let command = el.split(' ');// с променливата command разделяме отделните елементи в масива на стрингове.
        let name = command[0]; // това е името на човека.
        // можем да проверим дължината на command  и да разберем ако е 3 is going, ако е 4 is not going;
         if(command.length === 3)// човека ще ходи//{
             if(guestArray.includes(name)) {
                console.log(`${name} is already in the list!`);// ако този човек се съдържа в списъка// 
             }
             else{
               guestArray.push(name);// добавяме името в списъка
             }
         else{
           if(!guestArray.includes(name)){
              console.log(`${name} is not in the list!`);// ако името не се съдържа в списъка.
           }else{
              let index = guestArray.indexOf(name);
              guestArray.splice(index, 1);// премахваме името от списъка;
           }
         }
      }
   console.log(guestArray.join('\n')); // присъединяваме на нов ред;
}
          
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);