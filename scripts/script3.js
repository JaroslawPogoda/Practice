//excercise 1 Keep pringitng integers in multiples of 3 as long as integers
// are less than 35 using a while loop
let num = 3;
let limit = 35;
let multiples = 3;
while (num < limit) {
  console.log(num);
  num = num + multiples;
}
//excercise 2 Keep pringitng integers in multiples of 5 as long as integers
// are less than 100 using a while loop
let num2 = 5;
let limit2 = 100;
let multiples2 = 5;
while (num2 < limit2) {
  console.log(num2);
  num2 = num2 + multiples2;
}
//excercise 3 using a while loop print integers between 0 and 20.
//all numbers divisialbe by 2  should be bultiplied by 3 before  the are output.
//all other integers shouldbe output.
let init = 0;
let limit3 = 20;
while (init < limit3) {
  if (init % 2 === 0) {
    console.log(init * 3);
  } else {
    console.log(init);
  }
  init++;
}
//exercise 4 add the value of contoling variable and print the sum
let sum = 0;
let i = 1;
let limit4 = 10;
while (i <= limit4) {
  sum += i;
  console.log(`sum is ${sum} when i is ${i++}`);
}
console.log(sum);
//within the given range of numbers find all the odd numbers 10-20
let lowerLimit = 10;
let upperLimit = 20;
let cont = lowerLimit;
while (cont >= lowerLimit && cont <= upperLimit) {
  if (cont % 2 === 1) {
    console.log(
      `in range ${lowerLimit} to ${upperLimit} the odd number is${cont}`
    );
  }
  cont++;
}
//excercise prime numbers with while loops


let counter
let upperLimit2 = 20;
let iterator = 0; // lower limit
while (iterator <= upperLimit) {
    let inputNumber=iterator++;
    isItPrime = true;
    counter = 2;
  while (counter <= Math.floor(Math.sqrt(inputNumber))) {
    if (inputNumber % i === 0) {
      isItPrime = false;
      break;
    }
    counter++;
  } // end of for loop
  if (!isItPrime) {
    console.log(inputNumber + " number is not prime");
  } else {
    console.log(inputNumber + " number is prime");
  }
}
// input from the user in terminal 
let prompt = require('prompt-sync')();
let number = prompt('Enter a number:');
console.log(typeof number );
number=Number(number);
console.log(typeof number);
console.log(number);