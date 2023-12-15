let array = ['Mitko','Ivo','Iordanka','Stefan','Dragan'];
let checkArray = array.includes('Iordanka') // includes се използва да се проери масива за наличие на даден елемент !!
console.log(checkArray); // includes винаги връща true или false.

let lookedElement = array.indexOf('Ivo'); //indexOf() = показва индекса на даден елемент в стринга!!
console.log(lookedElement);

let slicedArray = array.slice(1,3)
console.log(slicedArray);
let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.slice(2, 4); // започва след втория индекс и стига до 4 елемет включително!!
console.log(mid);


//let splisedArray = array.splice(1,2); // splice - променя оргиналния масив !!!
//console.log(splisedArray);
//console.log(array);