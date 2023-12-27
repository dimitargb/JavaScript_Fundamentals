let text = 'Is there anywhere in the text(). There are any() types of strings(), that can be used in the context().'
let pattern = /\w+\(\)/g;

let result = text.split(pattern);
console.log(result);