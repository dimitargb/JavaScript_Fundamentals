function extracion(input) {
    let path = input.split('\\');
    let lastLine = path.pop(); // взимаме последния елемент който ни трябва.
    let name = lastLine.split('.');

    //for( let )
    let fileName = name[0];
    let extension = name[1];

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extracion('C:\\Internal\\training-internal\\Template.pptx')