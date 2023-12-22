function convert(firstName, lastName, hairColor){

let convertedString = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
}

let result = JSON.stringify(convertedString);

console.log(result);

}
convert('George', 'Jones', 'Brown')