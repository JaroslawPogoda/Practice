let prompt = require("prompt-sync")();
let number = prompt("Enter a number:");
console.log(typeof number);
number = Number(number);
console.log(typeof number);
console.log(number);
// nested for loops
console.log("------------------------------");
for (let r=1; r<= number; r++) {
  for (let c = 1; c <= number; c++) {
    process.stdout.write(`| ${r * c} |`); //prints in the same line.
    //console.log("it");
  }
  console.log();
  console.log("______________________________");
}
