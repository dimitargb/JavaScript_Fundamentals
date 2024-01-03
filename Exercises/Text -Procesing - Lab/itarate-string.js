let text = 'Hello world!';
let newString = '';
for (const char of text) { // това е единя начин
    console.log(char);
      newString += char;
}

// for(let i = 0; i < text.length; i++){ // това е по - използвания начин !!
//     newString += 
//     console.log(text[i]);
//     console.log(text.charAt(i));
// }