const firtsName = "Joanas";
const job = "teacher";
const birthYear = 1991;
const year = 2024;

const jonas =
  "I'm " + firtsName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firtsName} a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log(`Regular string ....`);

// Multiple line strings old way anew way:
// Old way:
console.log("String with \n multiple \n lines"); // \n means new line;

// New way with Template Lietrals:
// On each new line we only have to press return(backwards)
console.log(`string
multiple
line`);
