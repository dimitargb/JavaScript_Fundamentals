let array = ['Mitko','Ivo','Iordanka','Stefan','Dragan'];
// splice - променя оргиналния масив !!!

//Премахване на елемнт от средата на масив !!
let splicedArray = array.splice(2,1);
console.log(splicedArray );
console.log(array);

//Премахване на два елемнта от средата на масив !!
let newArray = array.splice(2,2);
console.log(newArray);
console.log(array);

// Премахване и добавяне на елемнт от масив!!
let array1 = ['Mitko','Ivo','Iordanka','Stefan','Dragan'];
let splisedArray1 = array1.splice(1, 1, 'Petar');
console.log(splisedArray1);