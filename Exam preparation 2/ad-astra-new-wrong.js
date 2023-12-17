function foodInfo(input) {
let text = input.shift()
let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d+)\1/gm;
let info = text.matchAll(pattern);
let totalCalories = 0;
let productStore = [];

while (info) {
    let name = info.groups.name;
    let date = info.groups.date;
    let calories = info.groups.calories;

    totalCalories += Number(calories);
    let currentProductInfo = `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`;
    productStore.push(currentProductInfo);
    text = input.shift();
}

let days = Math.floor(totalCalories / 2000);
console.log(`You have food to last you for: ${days} days!`);

for (const product of productStore) {
    console.log(product);
}
}
foodInfo(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
