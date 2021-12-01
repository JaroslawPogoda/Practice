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