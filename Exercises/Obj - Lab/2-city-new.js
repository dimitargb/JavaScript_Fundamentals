function printCityInformation(input){

for( let name in input){
    console.log(`${name} -> ${input[name]}`);
}
   
    

}
printCityInformation({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})