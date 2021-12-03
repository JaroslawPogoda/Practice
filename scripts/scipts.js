my_name="Jaroslaw Pogoda"
greeting=" Hello "
num1=51
num2=24
num3=81
num4=69
num5=123
how_many_numbers=5
add=(num1+num2)
sub=(num1-num2)
mult=(num1*num2)
divi=(num1/num2)
add_all=(num1+num2+num3+num4+num5)
avg=(add_all/how_many_numbers)
num1=51
num2=24


add=(num1+num2)
sub=(num1-num2)
mult=(num1*num2)
divi=(num1/num2)

console.log("hello,")
console.log("the two numbers are : "+num1+","+num2)
console.log("the sum of the two numbers is : "+add)
console.log("the difference of the two numbers is : "+sub)
console.log("the product of the two numbers is : "+mult)
console.log("the division of the two numbers is : "+ divi)

num1=51
num2=24
num3=81
num4=69
num5=123
how_many_numbers=5
add_all=(num1+num2+num3+num4+num5)
avg=(add_all/how_many_numbers)
console.log("hello")
console.log("the numbers are :"+num1+", "+num2+", "+num3+", "+num4+", "+num5)
console.log("the average of the numbers is : "+avg)
// problem 1
num1=12
num2=31
if(num1>num2)
{
    console.log("The larger number"+ num1)
}
else{
    console.log("The larger number"+ num2)
}
//problem 2
score=12
message="The Grade is : "
if(90<=score&&score<=100){
    message+="A, great effor you did great. You have passed"
}
else if(80<=score&&score<=89){
    message+="B, good effor you did well. You have passed"
}
else if(70<=score&&score<=79){
    message+="C you have passed. But study"
}
else if(55<=score&&score<=69){
    message+="D you have not passed. But study harder and you will get there."
}
else if(score>100){
    message="Hey grade cannot be higher then 100 what is wrong with you"
}
else{
    
    message+="F you have not passed. Use all material available and work harder. There is alot of material"
}
console.log(message)
//Problem 3
numA = 10
numB = 20
temp = numB 
message = "Number A is :"+numA+" Number B is :"+numB
numB=numA
numA=temp
message1=". now Number A is:"+numA+" and now Number B is:"+numB
console.log(message+message1)

// //Sophia
// a=12
// b=20
// temp=a
// if(a==b || b==temp)
// {
//     console.log(" The numbers are the same")
// }
// else{
//     a=b
//     b=temp //b=temp=a
//     // b=12
//     // a=12
//     console.log(" The numbers are:"+a +" and "+ b)
// }
age = 14 // input for problem1
customerSatisfation = 58 // input for problem 2
weatherConditions="Snowing" // input for problem 3
message = ""
message2 = ""
message3 = ""
//problem 1
if (age > 17) {
  message = "You are eligable to vote"
} else {
  message = "You still need to wait " + -1 * (age - 18) + " years to vote."
}
//Problem 2
if(customerSatisfation>=58){
    message2="Customers liked this product"
}
else{
    message2="Customers did not liked this product"
}
//Problem 3
if(weatherConditions=="Sunny"){
    message3="Go ahead it is a great day to go outside"
}
else if(weatherConditions=="Cloudy"){
    message3="You migth want to consider taking jacket, before going outside"
}
else if(weatherConditions=="Raining"){
    message3="You want to take jacket, before you go outside"
}
else if(weatherConditions=="Snowing"){
    message3="You want to take winter jacket, before you go outside"
}
else {
    message3="Unrecognized weatherConditions please try again"
}
//output
temp=55
if(temp<=58){
    console.log("1")
}
else if(temp>temp<=64)
{
    console.log("2")
}
else{
    console.log("3")
}
console.log(1==true)
console.log("Practice problem 1: "+message);
console.log("Practice problem 2: "+message2);
console.log("Practice problem 3: "+message3);
side_a =3
side_b =3
side_c =5
square_a=side_a*side_a
square_b=side_b*side_b
square_c=side_c*side_c
message1= "Triangle sides are " + side_a + " , " + side_b + " and " + side_c 
message=""
if((square_a+square_b)==square_c)
{
    message=" It is right angle triangle "
}
else{
    message="it is not right angle triangle "
}

my_name="by Jaroslaw Pogoda"
greeting=" Hello, "

console.log(greeting+message1+message+my_name)

if(message!=""){
    console.log("lets try again , something is wrong")
}
else {
    console.log(" all is good job")
}
let num = -100;
if(num > 0){
    if(num > 100){
        console.log(num +" is greater then 100");
    }
    else if(num == 100){
        console.log(num +" is equal to 100");
    }
    else{
        console.log(num +" is less then 100");
    }
}// This is end of outer if condition
else if(num < 0){
    if(num >-100){
        console.log(num +" is greater then -100");
    }
    else if(num == -100){
        console.log(num +" is equal to -100");
    }
    else{
        console.log(num +" is less then or equal to -100")
    }
}// end of outer else if condition
else{
    console.log(num +" is equal to zero")
}
//excercise 1
for(let i = 10; i >=1 ; i--) {
    console.log(i);
}
//excercise 2
let msg = ""
let msg2 = ""
for(let i = 1; i <=10 ; i++) {
    if(i%2==0) {
        msg+=+i+", ";
    }
    else{
        msg2+=+i+", ";
    }
}

console.log(msg.substr(0,msg.length-2))
console.log(msg2.substr(0,msg.length-2))
//excercise 3
for(let i = 3; i <=60 ; i+=3) {
    console.log(i)
}
//excercise 4

for(let i = 1; i<8;i++){
    let msg4=""
    for(let j= 1; j <=i;j++){
        msg4+="#"
    }
    console.log(msg4);
}
// excercise 5
for(let i= 1; i <=20;i++){
    if(i%2==1){
        msg=""
              for (let j = 2; j <i; j++) 
              { 
                if (i % j !== 0) 
                { 
                    msg="Prime number "+i ; 
                } 
               
            } 
            console.log(msg)
        } 

        //console.log("odd number: "+i)
    else{
        
        if (i === 2) 
        {
            console.log("Prime");
         } 
        console.log("even number: "+i)
    }
}
let input=13

for(let i=1; i<=10; i++)
{
    console.log(input+" * "+i+" = "+(i*input))
}
// initialization

let isItPrime=true;
// loops through numbers to determine if the input is prime
for(let i=2; i<input;i++)
{
    if(input%i === 0){
        isItPrime=false;
        break;
    }
}// end of loop
// printing output
if(!isItPrime){
    console.log(input+ " number is not prime");
}
else {
    console.log(input+ " number is prime");
}
// approach with sqare root
isItPrime=true;
for(let i=2; i<=Math.floor(Math.sqrt(input));i++){
    if(input%i===0 ){
        isItPrime=false;
        break;
    }
}// end of for loop
if(!isItPrime){
    console.log(input+ " number is not prime");
}
else {
    console.log(input+ " number is prime");
}
day=14;

switch (((day%7)+1)) { 
    case 1: 
    {
        console.log("you entered sunday");
        break;
    }
    case 2: 
    {
        console.log("you entered Monday");
        break;
    }
    case 3: 
    {
        console.log("you entered Tuesday");
        break;
    }
    case 4: 
    {
        console.log("you entered Wednesday");
        break;
    }
    case 5: 
    {
        console.log("you entered Thursday");
        break;
    }
    case 6: 
    {
        console.log("you entered Friday");
        break;
    }
    case 7: 
    {
        console.log("you entered Saturday");
        break;
    }
    default:
    {
        console.log("you entered wrong day");
    }
}// end of switch statement



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

let counter;
let prompt2 = require("prompt-sync")();
let upperLimit2 = Number(prompt2("Enter upper limit: "));
let iterator = 9; // lower limit
while (iterator <= upperLimit2) {
  let inputNumber = iterator++;
  isItPrime = true;
  counter = 2;
  while (counter <= Math.floor(Math.sqrt(inputNumber))) {
    if (inputNumber % counter == 0) {
      
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
let prompt = require("prompt-sync")();
let number = prompt("Enter a number:");
console.log(typeof number);
number = Number(number);
console.log(typeof number);
console.log(number);
// nested for loops
console.log("------------------------------");
for (let r = 1; r < 6; r++) {
  for (let c = 1; c < 6; c++) {
    process.stdout.write(`| ${r * c} |`); //prints in the same line.
    //console.log("it");
  }
  console.log();
  console.log("______________________________");
}
// bonus logical question:
// Nando wen to the vending machne to buy himself a cookie.
//The cookie costs $4 doolars. He paid with a $10 bill,
// the vending machine paind him back in quarters.
// write a loop that says how many quarters he got in return.
const cookieCost = 4;
let prompt3 = require("prompt-sync")();
let userPaid = Number(
  prompt3(" how much money was put in to pay for the cookie? :\n")
);
userPaid -= cookieCost;
if (userPaid > 0) {
  let howManyQuarters = 0;
  for (
    howManyQuarters = 0;
    howManyQuarters * 0.25 < userPaid;
    howManyQuarters++
  ) {}
  console.log(
    `The user got ${howManyQuarters} quarters which is${
      howManyQuarters * 0.25
    }\nfrom initial money of ${userPaid + 4} the change is ${userPaid}`
  );
} else if (userPaid == 0) {
  console.log(" there was no change");
} else {
  console.log(`Sorry you could not buy a cookie with ${userPaid + cookieCost}`);
}
//excercise
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