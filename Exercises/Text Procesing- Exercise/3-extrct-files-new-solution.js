function extractFile(input) {

    const line = input.split('\\');
    const path = line.pop();

    const lastComa = path.lastIndexOf('.');
    const fileName = path.substring(0, lastComa);
    const extension = path.substring(lastComa + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')