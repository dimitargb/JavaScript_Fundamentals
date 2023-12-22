let info = {
    firstName:'Dimitar',
    secondName:'Damianov',
    eyeColor: 'black',
    age: 50,
    isMale:true,
}
console.log(info.eyeColor); //достъпване на обект 
console.log(info['eyeColor']);// достъпване на обект като стринг.

//динамично добавяне на проперти
info.wight = 80;
console.log(info['wight']);

//изтриване на проперти от обект.
delete info['secondName'];
delete info.secondName;
console.log(info);

//accesss propery by variable
let propertyName = 'firstName';
console.log(info[propertyName]);

//using object method notaion to add dynamic function
info.marriedStatus = ()=> {
   console.log(`Not married!`)
};
info.marriedStatus();