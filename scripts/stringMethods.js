let text =
  " this the testing string  to test all the metbhods we learned in the class this is important to learn how to use all of these methods for future use";
// output  location of the 7th character or 6th staring with 0
console.log(`the char at location of the 6t ${text.charAt(6)}`)
console.log(`the code of char at the location of the zero location ${text.charCodeAt(0)}`)
console.log(`the code of char at the location of the `)


//Write a program using a for loop to print all the characters from A-Z
console.log(`Exercise 1:`)
for(let i=0; i<26;i++)
    console.log(`Letter with  char code of ${65+i} : ${String.fromCharCode(65+i)}`);
// Using a while loop, print each character of a user entered string
console.log(`Exercise 2:`)
let text2="sfa eeASF !!";
let iterator=0;
while(iterator<text2.length)
{
    console.log(text2.charAt(iterator));
    iterator++;
}
//Print a given string in reverse order without using the reverse( ) method
console.log(`Exercise 3:`)
iterator=text2.length-1;
while(iterator>=0)
{
    process.stdout.write(text2.charAt(iterator));
    iterator--;
}
console.log()
//Print the total number of vowels in a given string
iterator = 0;
text2=text2.toLowerCase();
console.log('exercise 4:')
while(iterator<text2.length)
{
    if(text2.charAt(iterator)==='a'|| text2.charAt(iterator)==='e'|| text2.charAt(iterator)==='i'|| text2.charAt(iterator)==='o'||text2.charAt(iterator)==='u')
    {
        
        console.log(text2.charAt(iterator));
    }
    iterator++; //
}
//excercise 5 Print the total number of times a character shows up in a string (take a character as input from the user)
console.log(`Exercise 5:`)
let prompt = require("prompt-sync")();
let userEnteredCharacter =prompt(" Enter char you want to find: ");
iterator=text2.length-1;
let counter=0;
while(iterator>=0){
    if(userEnteredCharacter===text2.charAt(iterator)){
        counter++;
    }
    iterator--;
}
let num=241
console.log(`The character you entered was ${userEnteredCharacter} and it appears : ${counter}`);
let blah=212
tada=blah<=121
num>=100? (tada? console.log(`numberoUno`):console.log(`numberoDos`)):console.log(`numberotres`)// way to write conditionals 
// check if string is panedrone
let userInputString=prompt('Enter String ')
userInputString===userInputString.split("").reverse().join("")? console.log(`the string ${userInputString} is revese`):console.log('the sting is  not panedrone')
//other solution is to check if string is panedrone
let lengthString = userInputString.length;
let iteratior=lengthString=1;
for(iterator;iterator>=0;iterator--){
    
}